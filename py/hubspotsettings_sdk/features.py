# HubspotSettings SDK feature factory

from hubspotsettings_sdk.feature.base_feature import HubspotSettingsBaseFeature
from hubspotsettings_sdk.feature.debug_feature import HubspotSettingsDebugFeature
from hubspotsettings_sdk.feature.idempotency_feature import HubspotSettingsIdempotencyFeature
from hubspotsettings_sdk.feature.metrics_feature import HubspotSettingsMetricsFeature
from hubspotsettings_sdk.feature.paging_feature import HubspotSettingsPagingFeature
from hubspotsettings_sdk.feature.ratelimit_feature import HubspotSettingsRatelimitFeature
from hubspotsettings_sdk.feature.retry_feature import HubspotSettingsRetryFeature
from hubspotsettings_sdk.feature.test_feature import HubspotSettingsTestFeature
from hubspotsettings_sdk.feature.timeout_feature import HubspotSettingsTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotSettingsBaseFeature(),
    "debug": lambda: HubspotSettingsDebugFeature(),
    "idempotency": lambda: HubspotSettingsIdempotencyFeature(),
    "metrics": lambda: HubspotSettingsMetricsFeature(),
    "paging": lambda: HubspotSettingsPagingFeature(),
    "ratelimit": lambda: HubspotSettingsRatelimitFeature(),
    "retry": lambda: HubspotSettingsRetryFeature(),
    "test": lambda: HubspotSettingsTestFeature(),
    "timeout": lambda: HubspotSettingsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
