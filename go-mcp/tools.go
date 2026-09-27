package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/hubspot-settings-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"add_currency | basic | code | current | exchange_rate | multicurrency_batch_response_exchange_rate | multicurrency_central_exchange_rates_information | multicurrency_collection_response_exchange_rate_forward_paging | multicurrency_company_currency | tax_rate | teams_batch_response_team_member | teams_collection_response_team_member_response_forward_paging | teams_collection_response_team_response_forward_paging | teams_team | teams_team_member | unsupported_currency | user | user_provisioning_collection_response_public_user_forward_paging | user_provisioning_public_permission_set | user_provisioning_public_seat | user_provisioning_public_team | user_provisioning_public_user"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.HubspotSettingsSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "hubspot-settings_list",
		Description: "List records from HubspotSettings. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "hubspot-settings_load",
		Description: "Load a single record from HubspotSettings. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.HubspotSettingsSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.HubspotSettingsSDK, name string) (sdk.HubspotSettingsEntity, error) {
	switch strings.ToLower(name) {
	case "add_currency":
		return client.AddCurrency(nil), nil
	case "basic":
		return client.Basic(nil), nil
	case "code":
		return client.Code(nil), nil
	case "current":
		return client.Current(nil), nil
	case "exchange_rate":
		return client.ExchangeRate(nil), nil
	case "multicurrency_batch_response_exchange_rate":
		return client.MulticurrencyBatchResponseExchangeRate(nil), nil
	case "multicurrency_central_exchange_rates_information":
		return client.MulticurrencyCentralExchangeRatesInformation(nil), nil
	case "multicurrency_collection_response_exchange_rate_forward_paging":
		return client.MulticurrencyCollectionResponseExchangeRateForwardPaging(nil), nil
	case "multicurrency_company_currency":
		return client.MulticurrencyCompanyCurrency(nil), nil
	case "tax_rate":
		return client.TaxRate(nil), nil
	case "teams_batch_response_team_member":
		return client.TeamsBatchResponseTeamMember(nil), nil
	case "teams_collection_response_team_member_response_forward_paging":
		return client.TeamsCollectionResponseTeamMemberResponseForwardPaging(nil), nil
	case "teams_collection_response_team_response_forward_paging":
		return client.TeamsCollectionResponseTeamResponseForwardPaging(nil), nil
	case "teams_team":
		return client.TeamsTeam(nil), nil
	case "teams_team_member":
		return client.TeamsTeamMember(nil), nil
	case "unsupported_currency":
		return client.UnsupportedCurrency(nil), nil
	case "user":
		return client.User(nil), nil
	case "user_provisioning_collection_response_public_user_forward_paging":
		return client.UserProvisioningCollectionResponsePublicUserForwardPaging(nil), nil
	case "user_provisioning_public_permission_set":
		return client.UserProvisioningPublicPermissionSet(nil), nil
	case "user_provisioning_public_seat":
		return client.UserProvisioningPublicSeat(nil), nil
	case "user_provisioning_public_team":
		return client.UserProvisioningPublicTeam(nil), nil
	case "user_provisioning_public_user":
		return client.UserProvisioningPublicUser(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
