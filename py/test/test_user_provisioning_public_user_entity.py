# UserProvisioningPublicUser entity test

import json
import os
import time

import pytest

from hubspotsettings_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotsettings_sdk import HubspotSettingsSDK
from hubspotsettings_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestUserProvisioningPublicUserEntity:

    def test_should_create_instance(self):
        testsdk = HubspotSettingsSDK.test(None, None)
        ent = testsdk.UserProvisioningPublicUser(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _user_provisioning_public_user_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "user_provisioning_public_user." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        user_provisioning_public_user_ref01_ent = client.UserProvisioningPublicUser(None)
        user_provisioning_public_user_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.user_provisioning_public_user"), "user_provisioning_public_user_ref01"))

        user_provisioning_public_user_ref01_data = helpers.to_map(runner.entity_data(user_provisioning_public_user_ref01_ent.create(user_provisioning_public_user_ref01_data, None)))
        assert user_provisioning_public_user_ref01_data is not None
        assert user_provisioning_public_user_ref01_data["id"] is not None

        # UPDATE
        user_provisioning_public_user_ref01_data_up0_up = {
            "id": user_provisioning_public_user_ref01_data["id"],
        }

        user_provisioning_public_user_ref01_markdef_up0_name = "email"
        user_provisioning_public_user_ref01_markdef_up0_value = "Mark01-user_provisioning_public_user_ref01_" + str(setup["now"])
        user_provisioning_public_user_ref01_data_up0_up[user_provisioning_public_user_ref01_markdef_up0_name] = user_provisioning_public_user_ref01_markdef_up0_value

        user_provisioning_public_user_ref01_resdata_up0 = helpers.to_map(runner.entity_data(user_provisioning_public_user_ref01_ent.update(user_provisioning_public_user_ref01_data_up0_up, None)))
        assert user_provisioning_public_user_ref01_resdata_up0 is not None
        assert user_provisioning_public_user_ref01_resdata_up0["id"] == user_provisioning_public_user_ref01_data_up0_up["id"]
        assert user_provisioning_public_user_ref01_resdata_up0[user_provisioning_public_user_ref01_markdef_up0_name] == user_provisioning_public_user_ref01_markdef_up0_value

        # LOAD
        user_provisioning_public_user_ref01_match_dt0 = {
            "id": user_provisioning_public_user_ref01_data["id"],
        }
        user_provisioning_public_user_ref01_data_dt0_loaded = user_provisioning_public_user_ref01_ent.load(user_provisioning_public_user_ref01_match_dt0, None)
        user_provisioning_public_user_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(user_provisioning_public_user_ref01_data_dt0_loaded))
        assert user_provisioning_public_user_ref01_data_dt0_load_result is not None
        assert user_provisioning_public_user_ref01_data_dt0_load_result["id"] == user_provisioning_public_user_ref01_data["id"]



def _user_provisioning_public_user_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/user_provisioning_public_user/UserProvisioningPublicUserTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = HubspotSettingsSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["user_provisioning_public_user01", "user_provisioning_public_user02", "user_provisioning_public_user03", "2026_0901", "2026_0902", "2026_0903"],
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
        "HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID": idmap,
        "HUBSPOT_SETTINGS_TEST_LIVE": "FALSE",
        "HUBSPOT_SETTINGS_TEST_EXPLAIN": "FALSE",
        "HUBSPOT_SETTINGS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID"))
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
