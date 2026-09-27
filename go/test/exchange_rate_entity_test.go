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

func TestExchangeRateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ExchangeRate(nil)
		if ent == nil {
			t.Fatal("expected non-nil ExchangeRateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := exchange_rateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "exchange_rate." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_SETTINGS_TEST_EXCHANGE_RATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		exchangeRateRef01Ent := client.ExchangeRate(nil)
		exchangeRateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "exchange_rate"}), "exchange_rate_ref01"))

		exchangeRateRef01DataResult, err := exchangeRateRef01Ent.Create(exchangeRateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		exchangeRateRef01Data = core.ToMapAny(entityData(exchangeRateRef01DataResult))
		if exchangeRateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if exchangeRateRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		exchangeRateRef01DataUp0Up := map[string]any{
			"id": exchangeRateRef01Data["id"],
		}

		exchangeRateRef01MarkdefUp0Name := "createdAt"
		exchangeRateRef01MarkdefUp0Value := fmt.Sprintf("Mark01-exchange_rate_ref01_%d", setup.now)
		exchangeRateRef01DataUp0Up[exchangeRateRef01MarkdefUp0Name] = exchangeRateRef01MarkdefUp0Value

		exchangeRateRef01ResdataUp0Result, err := exchangeRateRef01Ent.Update(exchangeRateRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		exchangeRateRef01ResdataUp0 := core.ToMapAny(entityData(exchangeRateRef01ResdataUp0Result))
		if exchangeRateRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if exchangeRateRef01ResdataUp0["id"] != exchangeRateRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if exchangeRateRef01ResdataUp0[exchangeRateRef01MarkdefUp0Name] != exchangeRateRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", exchangeRateRef01MarkdefUp0Name, exchangeRateRef01ResdataUp0[exchangeRateRef01MarkdefUp0Name])
		}

		// LOAD
		exchangeRateRef01MatchDt0 := map[string]any{
			"id": exchangeRateRef01Data["id"],
		}
		exchangeRateRef01DataDt0Loaded, err := exchangeRateRef01Ent.Load(exchangeRateRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		exchangeRateRef01DataDt0LoadResult := core.ToMapAny(entityData(exchangeRateRef01DataDt0Loaded))
		if exchangeRateRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if exchangeRateRef01DataDt0LoadResult["id"] != exchangeRateRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func exchange_rateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "exchange_rate", "ExchangeRateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read exchange_rate test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse exchange_rate test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"exchange_rate01", "exchange_rate02", "exchange_rate03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_SETTINGS_TEST_EXCHANGE_RATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_SETTINGS_TEST_EXCHANGE_RATE_ENTID": idmap,
		"HUBSPOT_SETTINGS_TEST_LIVE":      "FALSE",
		"HUBSPOT_SETTINGS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_SETTINGS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_SETTINGS_TEST_EXCHANGE_RATE_ENTID"])
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
