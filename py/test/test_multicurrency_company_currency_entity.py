# MulticurrencyCompanyCurrency entity test

import json
import os
import time

import pytest

from hubspotsettings_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotsettings_sdk import HubspotSettingsSDK
from hubspotsettings_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestMulticurrencyCompanyCurrencyEntity:

    def test_should_create_instance(self):
        testsdk = HubspotSettingsSDK.test(None, None)
        ent = testsdk.MulticurrencyCompanyCurrency(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _multicurrency_company_currency_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "multicurrency_company_currency." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COMPANY_CURRENCY_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        multicurrency_company_currency_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.multicurrency_company_currency")))
        multicurrency_company_currency_ref01_data = None
        if len(multicurrency_company_currency_ref01_data_raw) > 0:
            multicurrency_company_currency_ref01_data = helpers.to_map(multicurrency_company_currency_ref01_data_raw[0][1])

        # UPDATE
        multicurrency_company_currency_ref01_ent = client.MulticurrencyCompanyCurrency(None)
        multicurrency_company_currency_ref01_data_up0_up = {
            "id": multicurrency_company_currency_ref01_data["id"],
        }

        multicurrency_company_currency_ref01_markdef_up0_name = "createdAt"
        multicurrency_company_currency_ref01_markdef_up0_value = "Mark01-multicurrency_company_currency_ref01_" + str(setup["now"])
        multicurrency_company_currency_ref01_data_up0_up[multicurrency_company_currency_ref01_markdef_up0_name] = multicurrency_company_currency_ref01_markdef_up0_value

        multicurrency_company_currency_ref01_resdata_up0 = helpers.to_map(runner.entity_data(multicurrency_company_currency_ref01_ent.update(multicurrency_company_currency_ref01_data_up0_up, None)))
        assert multicurrency_company_currency_ref01_resdata_up0 is not None
        assert multicurrency_company_currency_ref01_resdata_up0["id"] == multicurrency_company_currency_ref01_data_up0_up["id"]
        assert multicurrency_company_currency_ref01_resdata_up0[multicurrency_company_currency_ref01_markdef_up0_name] == multicurrency_company_currency_ref01_markdef_up0_value

        # LOAD
        multicurrency_company_currency_ref01_match_dt0 = {
            "id": multicurrency_company_currency_ref01_data["id"],
        }
        multicurrency_company_currency_ref01_data_dt0_loaded = multicurrency_company_currency_ref01_ent.load(multicurrency_company_currency_ref01_match_dt0, None)
        multicurrency_company_currency_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(multicurrency_company_currency_ref01_data_dt0_loaded))
        assert multicurrency_company_currency_ref01_data_dt0_load_result is not None
        assert multicurrency_company_currency_ref01_data_dt0_load_result["id"] == multicurrency_company_currency_ref01_data["id"]



def _multicurrency_company_currency_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/multicurrency_company_currency/MulticurrencyCompanyCurrencyTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = HubspotSettingsSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["multicurrency_company_currency01", "multicurrency_company_currency02", "multicurrency_company_currency03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COMPANY_CURRENCY_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COMPANY_CURRENCY_ENTID": idmap,
        "HUBSPOT_SETTINGS_TEST_LIVE": "FALSE",
        "HUBSPOT_SETTINGS_TEST_EXPLAIN": "FALSE",
        "HUBSPOT_SETTINGS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COMPANY_CURRENCY_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("HUBSPOT_SETTINGS_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("HUBSPOT_SETTINGS_APIKEY"),
            },
            extra or {},
        ])
        client = HubspotSettingsSDK(helpers.to_map(merged_opts))

    _live = env.get("HUBSPOT_SETTINGS_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("HUBSPOT_SETTINGS_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
