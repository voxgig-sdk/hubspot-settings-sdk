# HubspotSettings SDK exists test

import pytest
from hubspotsettings_sdk import HubspotSettingsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotSettingsSDK.test(None, None)
        assert testsdk is not None
