# HubspotSettings SDK utility: make_context

from projectname_sdk.core.context import HubspotSettingsContext


def make_context_util(ctxmap, basectx):
    return HubspotSettingsContext(ctxmap, basectx)
