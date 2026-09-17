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

func TestTeamsTeamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TeamsTeam(nil)
		if ent == nil {
			t.Fatal("expected non-nil TeamsTeamEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := teams_teamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "teams_team." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		teamsTeamRef01Ent := client.TeamsTeam(nil)
		teamsTeamRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "teams_team"}), "teams_team_ref01"))

		teamsTeamRef01DataResult, err := teamsTeamRef01Ent.Create(teamsTeamRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		teamsTeamRef01Data = core.ToMapAny(entityData(teamsTeamRef01DataResult))
		if teamsTeamRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if teamsTeamRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		teamsTeamRef01DataUp0Up := map[string]any{
			"id": teamsTeamRef01Data["id"],
		}

		teamsTeamRef01MarkdefUp0Name := "name"
		teamsTeamRef01MarkdefUp0Value := fmt.Sprintf("Mark01-teams_team_ref01_%d", setup.now)
		teamsTeamRef01DataUp0Up[teamsTeamRef01MarkdefUp0Name] = teamsTeamRef01MarkdefUp0Value

		teamsTeamRef01ResdataUp0Result, err := teamsTeamRef01Ent.Update(teamsTeamRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		teamsTeamRef01ResdataUp0 := core.ToMapAny(entityData(teamsTeamRef01ResdataUp0Result))
		if teamsTeamRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if teamsTeamRef01ResdataUp0["id"] != teamsTeamRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if teamsTeamRef01ResdataUp0[teamsTeamRef01MarkdefUp0Name] != teamsTeamRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", teamsTeamRef01MarkdefUp0Name, teamsTeamRef01ResdataUp0[teamsTeamRef01MarkdefUp0Name])
		}

		// LOAD
		teamsTeamRef01MatchDt0 := map[string]any{
			"id": teamsTeamRef01Data["id"],
		}
		teamsTeamRef01DataDt0Loaded, err := teamsTeamRef01Ent.Load(teamsTeamRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		teamsTeamRef01DataDt0LoadResult := core.ToMapAny(entityData(teamsTeamRef01DataDt0Loaded))
		if teamsTeamRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if teamsTeamRef01DataDt0LoadResult["id"] != teamsTeamRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func teams_teamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "teams_team", "TeamsTeamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read teams_team test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse teams_team test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"teams_team01", "teams_team02", "teams_team03", "2026_0901", "2026_0902", "2026_0903"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_ENTID": idmap,
		"HUBSPOT_SETTINGS_TEST_LIVE":      "FALSE",
		"HUBSPOT_SETTINGS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_SETTINGS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_ENTID"])
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
