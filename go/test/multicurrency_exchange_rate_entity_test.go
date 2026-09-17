package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-settings-sdk/go"
	"github.com/voxgig-sdk/hubspot-settings-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-settings-sdk/go/utility/struct"
)

func TestMulticurrencyExchangeRateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.MulticurrencyExchangeRate(nil)
		if ent == nil {
			t.Fatal("expected non-nil MulticurrencyExchangeRateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := multicurrency_exchange_rateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "multicurrency_exchange_rate." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		multicurrencyExchangeRateRef01Ent := client.MulticurrencyExchangeRate(nil)
		multicurrencyExchangeRateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "multicurrency_exchange_rate"}), "multicurrency_exchange_rate_ref01"))

		multicurrencyExchangeRateRef01DataResult, err := multicurrencyExchangeRateRef01Ent.Create(multicurrencyExchangeRateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		multicurrencyExchangeRateRef01Data = core.ToMapAny(entityData(multicurrencyExchangeRateRef01DataResult))
		if multicurrencyExchangeRateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if multicurrencyExchangeRateRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		multicurrencyExchangeRateRef01DataUp0Up := map[string]any{
			"id": multicurrencyExchangeRateRef01Data["id"],
		}

		multicurrencyExchangeRateRef01MarkdefUp0Name := "createdAt"
		multicurrencyExchangeRateRef01MarkdefUp0Value := fmt.Sprintf("Mark01-multicurrency_exchange_rate_ref01_%d", setup.now)
		multicurrencyExchangeRateRef01DataUp0Up[multicurrencyExchangeRateRef01MarkdefUp0Name] = multicurrencyExchangeRateRef01MarkdefUp0Value

		multicurrencyExchangeRateRef01ResdataUp0Result, err := multicurrencyExchangeRateRef01Ent.Update(multicurrencyExchangeRateRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		multicurrencyExchangeRateRef01ResdataUp0 := core.ToMapAny(entityData(multicurrencyExchangeRateRef01ResdataUp0Result))
		if multicurrencyExchangeRateRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if multicurrencyExchangeRateRef01ResdataUp0["id"] != multicurrencyExchangeRateRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if multicurrencyExchangeRateRef01ResdataUp0[multicurrencyExchangeRateRef01MarkdefUp0Name] != multicurrencyExchangeRateRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", multicurrencyExchangeRateRef01MarkdefUp0Name, multicurrencyExchangeRateRef01ResdataUp0[multicurrencyExchangeRateRef01MarkdefUp0Name])
		}

		// LOAD
		multicurrencyExchangeRateRef01MatchDt0 := map[string]any{
			"id": multicurrencyExchangeRateRef01Data["id"],
		}
		multicurrencyExchangeRateRef01DataDt0Loaded, err := multicurrencyExchangeRateRef01Ent.Load(multicurrencyExchangeRateRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		multicurrencyExchangeRateRef01DataDt0LoadResult := core.ToMapAny(entityData(multicurrencyExchangeRateRef01DataDt0Loaded))
		if multicurrencyExchangeRateRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if multicurrencyExchangeRateRef01DataDt0LoadResult["id"] != multicurrencyExchangeRateRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func multicurrency_exchange_rateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "multicurrency_exchange_rate", "MulticurrencyExchangeRateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read multicurrency_exchange_rate test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse multicurrency_exchange_rate test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"multicurrency_exchange_rate01", "multicurrency_exchange_rate02", "multicurrency_exchange_rate03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID": idmap,
		"HUBSPOT_SETTINGS_TEST_LIVE":      "FALSE",
		"HUBSPOT_SETTINGS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_SETTINGS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HUBSPOT_SETTINGS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_SETTINGS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotSettingsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_SETTINGS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_SETTINGS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
