package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/hubspot-settings-sdk/go/utility/struct"
)

type HubspotSettingsSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewHubspotSettingsSDK(options map[string]any) *HubspotSettingsSDK {
	sdk := &HubspotSettingsSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *HubspotSettingsSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *HubspotSettingsSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *HubspotSettingsSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *HubspotSettingsSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *HubspotSettingsSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *HubspotSettingsSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *HubspotSettingsSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("HubspotSettingsSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *HubspotSettingsSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *HubspotSettingsSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("HubspotSettingsSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Basic returns a Basic entity bound to this client.
// Idiomatic usage: client.Basic(nil).List(nil, nil) or
// client.Basic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) Basic(data map[string]any) HubspotSettingsEntity {
	return NewBasicEntityFunc(sdk, data)
}


// ExchangeRate returns a ExchangeRate entity bound to this client.
// Idiomatic usage: client.ExchangeRate(nil).List(nil, nil) or
// client.ExchangeRate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) ExchangeRate(data map[string]any) HubspotSettingsEntity {
	return NewExchangeRateEntityFunc(sdk, data)
}


// MulticurrencyBatchResponseExchangeRate returns a MulticurrencyBatchResponseExchangeRate entity bound to this client.
// Idiomatic usage: client.MulticurrencyBatchResponseExchangeRate(nil).List(nil, nil) or
// client.MulticurrencyBatchResponseExchangeRate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) MulticurrencyBatchResponseExchangeRate(data map[string]any) HubspotSettingsEntity {
	return NewMulticurrencyBatchResponseExchangeRateEntityFunc(sdk, data)
}


// MulticurrencyCentralExchangeRatesInformation returns a MulticurrencyCentralExchangeRatesInformation entity bound to this client.
// Idiomatic usage: client.MulticurrencyCentralExchangeRatesInformation(nil).List(nil, nil) or
// client.MulticurrencyCentralExchangeRatesInformation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) MulticurrencyCentralExchangeRatesInformation(data map[string]any) HubspotSettingsEntity {
	return NewMulticurrencyCentralExchangeRatesInformationEntityFunc(sdk, data)
}


// MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging returns a MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging entity bound to this client.
// Idiomatic usage: client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(nil).List(nil, nil) or
// client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(data map[string]any) HubspotSettingsEntity {
	return NewMulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntityFunc(sdk, data)
}


// MulticurrencyCollectionResponseExchangeRateForwardPaging returns a MulticurrencyCollectionResponseExchangeRateForwardPaging entity bound to this client.
// Idiomatic usage: client.MulticurrencyCollectionResponseExchangeRateForwardPaging(nil).List(nil, nil) or
// client.MulticurrencyCollectionResponseExchangeRateForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) MulticurrencyCollectionResponseExchangeRateForwardPaging(data map[string]any) HubspotSettingsEntity {
	return NewMulticurrencyCollectionResponseExchangeRateForwardPagingEntityFunc(sdk, data)
}


// MulticurrencyCollectionResponseExchangeRateNoPaging returns a MulticurrencyCollectionResponseExchangeRateNoPaging entity bound to this client.
// Idiomatic usage: client.MulticurrencyCollectionResponseExchangeRateNoPaging(nil).List(nil, nil) or
// client.MulticurrencyCollectionResponseExchangeRateNoPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) MulticurrencyCollectionResponseExchangeRateNoPaging(data map[string]any) HubspotSettingsEntity {
	return NewMulticurrencyCollectionResponseExchangeRateNoPagingEntityFunc(sdk, data)
}


// MulticurrencyCompanyCurrency returns a MulticurrencyCompanyCurrency entity bound to this client.
// Idiomatic usage: client.MulticurrencyCompanyCurrency(nil).List(nil, nil) or
// client.MulticurrencyCompanyCurrency(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) MulticurrencyCompanyCurrency(data map[string]any) HubspotSettingsEntity {
	return NewMulticurrencyCompanyCurrencyEntityFunc(sdk, data)
}


// MulticurrencyExchangeRate returns a MulticurrencyExchangeRate entity bound to this client.
// Idiomatic usage: client.MulticurrencyExchangeRate(nil).List(nil, nil) or
// client.MulticurrencyExchangeRate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) MulticurrencyExchangeRate(data map[string]any) HubspotSettingsEntity {
	return NewMulticurrencyExchangeRateEntityFunc(sdk, data)
}


// TaxRate returns a TaxRate entity bound to this client.
// Idiomatic usage: client.TaxRate(nil).List(nil, nil) or
// client.TaxRate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) TaxRate(data map[string]any) HubspotSettingsEntity {
	return NewTaxRateEntityFunc(sdk, data)
}


// TeamsBatchResponseTeamMember returns a TeamsBatchResponseTeamMember entity bound to this client.
// Idiomatic usage: client.TeamsBatchResponseTeamMember(nil).List(nil, nil) or
// client.TeamsBatchResponseTeamMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) TeamsBatchResponseTeamMember(data map[string]any) HubspotSettingsEntity {
	return NewTeamsBatchResponseTeamMemberEntityFunc(sdk, data)
}


// TeamsCollectionResponseTeamMemberResponseForwardPaging returns a TeamsCollectionResponseTeamMemberResponseForwardPaging entity bound to this client.
// Idiomatic usage: client.TeamsCollectionResponseTeamMemberResponseForwardPaging(nil).List(nil, nil) or
// client.TeamsCollectionResponseTeamMemberResponseForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) TeamsCollectionResponseTeamMemberResponseForwardPaging(data map[string]any) HubspotSettingsEntity {
	return NewTeamsCollectionResponseTeamMemberResponseForwardPagingEntityFunc(sdk, data)
}


// TeamsCollectionResponseTeamResponseForwardPaging returns a TeamsCollectionResponseTeamResponseForwardPaging entity bound to this client.
// Idiomatic usage: client.TeamsCollectionResponseTeamResponseForwardPaging(nil).List(nil, nil) or
// client.TeamsCollectionResponseTeamResponseForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) TeamsCollectionResponseTeamResponseForwardPaging(data map[string]any) HubspotSettingsEntity {
	return NewTeamsCollectionResponseTeamResponseForwardPagingEntityFunc(sdk, data)
}


// TeamsTeam returns a TeamsTeam entity bound to this client.
// Idiomatic usage: client.TeamsTeam(nil).List(nil, nil) or
// client.TeamsTeam(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) TeamsTeam(data map[string]any) HubspotSettingsEntity {
	return NewTeamsTeamEntityFunc(sdk, data)
}


// TeamsTeamMember returns a TeamsTeamMember entity bound to this client.
// Idiomatic usage: client.TeamsTeamMember(nil).List(nil, nil) or
// client.TeamsTeamMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) TeamsTeamMember(data map[string]any) HubspotSettingsEntity {
	return NewTeamsTeamMemberEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) User(data map[string]any) HubspotSettingsEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserProvisioningCollectionResponsePublicPermissionSetNo returns a UserProvisioningCollectionResponsePublicPermissionSetNo entity bound to this client.
// Idiomatic usage: client.UserProvisioningCollectionResponsePublicPermissionSetNo(nil).List(nil, nil) or
// client.UserProvisioningCollectionResponsePublicPermissionSetNo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) UserProvisioningCollectionResponsePublicPermissionSetNo(data map[string]any) HubspotSettingsEntity {
	return NewUserProvisioningCollectionResponsePublicPermissionSetNoEntityFunc(sdk, data)
}


// UserProvisioningCollectionResponsePublicSeatNoPaging returns a UserProvisioningCollectionResponsePublicSeatNoPaging entity bound to this client.
// Idiomatic usage: client.UserProvisioningCollectionResponsePublicSeatNoPaging(nil).List(nil, nil) or
// client.UserProvisioningCollectionResponsePublicSeatNoPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) UserProvisioningCollectionResponsePublicSeatNoPaging(data map[string]any) HubspotSettingsEntity {
	return NewUserProvisioningCollectionResponsePublicSeatNoPagingEntityFunc(sdk, data)
}


// UserProvisioningCollectionResponsePublicTeamNoPaging returns a UserProvisioningCollectionResponsePublicTeamNoPaging entity bound to this client.
// Idiomatic usage: client.UserProvisioningCollectionResponsePublicTeamNoPaging(nil).List(nil, nil) or
// client.UserProvisioningCollectionResponsePublicTeamNoPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) UserProvisioningCollectionResponsePublicTeamNoPaging(data map[string]any) HubspotSettingsEntity {
	return NewUserProvisioningCollectionResponsePublicTeamNoPagingEntityFunc(sdk, data)
}


// UserProvisioningCollectionResponsePublicUserForwardPaging returns a UserProvisioningCollectionResponsePublicUserForwardPaging entity bound to this client.
// Idiomatic usage: client.UserProvisioningCollectionResponsePublicUserForwardPaging(nil).List(nil, nil) or
// client.UserProvisioningCollectionResponsePublicUserForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) UserProvisioningCollectionResponsePublicUserForwardPaging(data map[string]any) HubspotSettingsEntity {
	return NewUserProvisioningCollectionResponsePublicUserForwardPagingEntityFunc(sdk, data)
}


// UserProvisioningPublicUser returns a UserProvisioningPublicUser entity bound to this client.
// Idiomatic usage: client.UserProvisioningPublicUser(nil).List(nil, nil) or
// client.UserProvisioningPublicUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotSettingsSDK) UserProvisioningPublicUser(data map[string]any) HubspotSettingsEntity {
	return NewUserProvisioningPublicUserEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotSettingsSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewHubspotSettingsSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
