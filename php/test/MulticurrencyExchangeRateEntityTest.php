<?php
declare(strict_types=1);

// MulticurrencyExchangeRate entity test

require_once __DIR__ . '/../hubspotsettings_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class MulticurrencyExchangeRateEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HubspotSettingsSDK::test(null, null);
        $ent = $testsdk->MulticurrencyExchangeRate(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = multicurrency_exchange_rate_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "multicurrency_exchange_rate." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $multicurrency_exchange_rate_ref01_ent = $client->MulticurrencyExchangeRate(null);
        $multicurrency_exchange_rate_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.multicurrency_exchange_rate"), "multicurrency_exchange_rate_ref01"));

        $multicurrency_exchange_rate_ref01_data_result = $multicurrency_exchange_rate_ref01_ent->create($multicurrency_exchange_rate_ref01_data, null);
        $multicurrency_exchange_rate_ref01_data = Helpers::to_map(is_object($multicurrency_exchange_rate_ref01_data_result) && method_exists($multicurrency_exchange_rate_ref01_data_result, 'data_get') ? $multicurrency_exchange_rate_ref01_data_result->data_get() : $multicurrency_exchange_rate_ref01_data_result);
        $this->assertNotNull($multicurrency_exchange_rate_ref01_data);
        $this->assertNotNull($multicurrency_exchange_rate_ref01_data["id"]);

        // UPDATE
        $multicurrency_exchange_rate_ref01_data_up0_up = [
            "id" => $multicurrency_exchange_rate_ref01_data["id"],
        ];

        $multicurrency_exchange_rate_ref01_markdef_up0_name = "createdAt";
        $multicurrency_exchange_rate_ref01_markdef_up0_value = "Mark01-multicurrency_exchange_rate_ref01_" . $setup["now"];
        $multicurrency_exchange_rate_ref01_data_up0_up[$multicurrency_exchange_rate_ref01_markdef_up0_name] = $multicurrency_exchange_rate_ref01_markdef_up0_value;

        $multicurrency_exchange_rate_ref01_resdata_up0_result = $multicurrency_exchange_rate_ref01_ent->update($multicurrency_exchange_rate_ref01_data_up0_up, null);
        $multicurrency_exchange_rate_ref01_resdata_up0 = Helpers::to_map(is_object($multicurrency_exchange_rate_ref01_resdata_up0_result) && method_exists($multicurrency_exchange_rate_ref01_resdata_up0_result, 'data_get') ? $multicurrency_exchange_rate_ref01_resdata_up0_result->data_get() : $multicurrency_exchange_rate_ref01_resdata_up0_result);
        $this->assertNotNull($multicurrency_exchange_rate_ref01_resdata_up0);
        $this->assertEquals($multicurrency_exchange_rate_ref01_resdata_up0["id"], $multicurrency_exchange_rate_ref01_data_up0_up["id"]);
        $this->assertEquals($multicurrency_exchange_rate_ref01_resdata_up0[$multicurrency_exchange_rate_ref01_markdef_up0_name], $multicurrency_exchange_rate_ref01_markdef_up0_value);

        // LOAD
        $multicurrency_exchange_rate_ref01_match_dt0 = [
            "id" => $multicurrency_exchange_rate_ref01_data["id"],
        ];
        $multicurrency_exchange_rate_ref01_data_dt0_loaded = $multicurrency_exchange_rate_ref01_ent->load($multicurrency_exchange_rate_ref01_match_dt0, null);
        $multicurrency_exchange_rate_ref01_data_dt0_load_result = Helpers::to_map(is_object($multicurrency_exchange_rate_ref01_data_dt0_loaded) && method_exists($multicurrency_exchange_rate_ref01_data_dt0_loaded, 'data_get') ? $multicurrency_exchange_rate_ref01_data_dt0_loaded->data_get() : $multicurrency_exchange_rate_ref01_data_dt0_loaded);
        $this->assertNotNull($multicurrency_exchange_rate_ref01_data_dt0_load_result);
        $this->assertEquals($multicurrency_exchange_rate_ref01_data_dt0_load_result["id"], $multicurrency_exchange_rate_ref01_data["id"]);

    }
}

function multicurrency_exchange_rate_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/multicurrency_exchange_rate/MulticurrencyExchangeRateTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HubspotSettingsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["multicurrency_exchange_rate01", "multicurrency_exchange_rate02", "multicurrency_exchange_rate03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID" => $idmap,
        "HUBSPOT_SETTINGS_TEST_LIVE" => "FALSE",
        "HUBSPOT_SETTINGS_TEST_EXPLAIN" => "FALSE",
        "HUBSPOT_SETTINGS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HUBSPOT_SETTINGS_TEST_MULTICURRENCY_EXCHANGE_RATE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["HUBSPOT_SETTINGS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["HUBSPOT_SETTINGS_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new HubspotSettingsSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["HUBSPOT_SETTINGS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["HUBSPOT_SETTINGS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
