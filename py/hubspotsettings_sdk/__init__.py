# HubspotSettings SDK

from hubspotsettings_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotsettings_sdk.core.utility_type import HubspotSettingsUtility
from hubspotsettings_sdk.core.spec import HubspotSettingsSpec
from hubspotsettings_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from hubspotsettings_sdk.utility import register

# Load features
from hubspotsettings_sdk.feature.base_feature import HubspotSettingsBaseFeature
from hubspotsettings_sdk.features import _has_feature, _make_feature


class HubspotSettingsSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = HubspotSettingsUtility()
        self._utility = utility

        from hubspotsettings_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return HubspotSettingsUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = HubspotSettingsSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "HubspotSettingsSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("HubspotSettingsSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Basic(self, data=None) -> "BasicEntity":
        """Entity factory: client.Basic().list() / client.Basic().load({"id": ...})."""
        from hubspotsettings_sdk.entity.basic_entity import BasicEntity
        return BasicEntity(self, data)


    def ExchangeRate(self, data=None) -> "ExchangeRateEntity":
        """Entity factory: client.ExchangeRate().list() / client.ExchangeRate().load({"id": ...})."""
        from hubspotsettings_sdk.entity.exchange_rate_entity import ExchangeRateEntity
        return ExchangeRateEntity(self, data)


    def MulticurrencyBatchResponseExchangeRate(self, data=None) -> "MulticurrencyBatchResponseExchangeRateEntity":
        """Entity factory: client.MulticurrencyBatchResponseExchangeRate().list() / client.MulticurrencyBatchResponseExchangeRate().load({"id": ...})."""
        from hubspotsettings_sdk.entity.multicurrency_batch_response_exchange_rate_entity import MulticurrencyBatchResponseExchangeRateEntity
        return MulticurrencyBatchResponseExchangeRateEntity(self, data)


    def MulticurrencyCentralExchangeRatesInformation(self, data=None) -> "MulticurrencyCentralExchangeRatesInformationEntity":
        """Entity factory: client.MulticurrencyCentralExchangeRatesInformation().list() / client.MulticurrencyCentralExchangeRatesInformation().load({"id": ...})."""
        from hubspotsettings_sdk.entity.multicurrency_central_exchange_rates_information_entity import MulticurrencyCentralExchangeRatesInformationEntity
        return MulticurrencyCentralExchangeRatesInformationEntity(self, data)


    def MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(self, data=None) -> "MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity":
        """Entity factory: client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging().list() / client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.multicurrency_collection_response_currency_code_info_no_paging_entity import MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity
        return MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity(self, data)


    def MulticurrencyCollectionResponseExchangeRateForwardPaging(self, data=None) -> "MulticurrencyCollectionResponseExchangeRateForwardPagingEntity":
        """Entity factory: client.MulticurrencyCollectionResponseExchangeRateForwardPaging().list() / client.MulticurrencyCollectionResponseExchangeRateForwardPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.multicurrency_collection_response_exchange_rate_forward_paging_entity import MulticurrencyCollectionResponseExchangeRateForwardPagingEntity
        return MulticurrencyCollectionResponseExchangeRateForwardPagingEntity(self, data)


    def MulticurrencyCollectionResponseExchangeRateNoPaging(self, data=None) -> "MulticurrencyCollectionResponseExchangeRateNoPagingEntity":
        """Entity factory: client.MulticurrencyCollectionResponseExchangeRateNoPaging().list() / client.MulticurrencyCollectionResponseExchangeRateNoPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.multicurrency_collection_response_exchange_rate_no_paging_entity import MulticurrencyCollectionResponseExchangeRateNoPagingEntity
        return MulticurrencyCollectionResponseExchangeRateNoPagingEntity(self, data)


    def MulticurrencyCompanyCurrency(self, data=None) -> "MulticurrencyCompanyCurrencyEntity":
        """Entity factory: client.MulticurrencyCompanyCurrency().list() / client.MulticurrencyCompanyCurrency().load({"id": ...})."""
        from hubspotsettings_sdk.entity.multicurrency_company_currency_entity import MulticurrencyCompanyCurrencyEntity
        return MulticurrencyCompanyCurrencyEntity(self, data)


    def MulticurrencyExchangeRate(self, data=None) -> "MulticurrencyExchangeRateEntity":
        """Entity factory: client.MulticurrencyExchangeRate().list() / client.MulticurrencyExchangeRate().load({"id": ...})."""
        from hubspotsettings_sdk.entity.multicurrency_exchange_rate_entity import MulticurrencyExchangeRateEntity
        return MulticurrencyExchangeRateEntity(self, data)


    def TaxRate(self, data=None) -> "TaxRateEntity":
        """Entity factory: client.TaxRate().list() / client.TaxRate().load({"id": ...})."""
        from hubspotsettings_sdk.entity.tax_rate_entity import TaxRateEntity
        return TaxRateEntity(self, data)


    def TeamsBatchResponseTeamMember(self, data=None) -> "TeamsBatchResponseTeamMemberEntity":
        """Entity factory: client.TeamsBatchResponseTeamMember().list() / client.TeamsBatchResponseTeamMember().load({"id": ...})."""
        from hubspotsettings_sdk.entity.teams_batch_response_team_member_entity import TeamsBatchResponseTeamMemberEntity
        return TeamsBatchResponseTeamMemberEntity(self, data)


    def TeamsCollectionResponseTeamMemberResponseForwardPaging(self, data=None) -> "TeamsCollectionResponseTeamMemberResponseForwardPagingEntity":
        """Entity factory: client.TeamsCollectionResponseTeamMemberResponseForwardPaging().list() / client.TeamsCollectionResponseTeamMemberResponseForwardPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.teams_collection_response_team_member_response_forward_paging_entity import TeamsCollectionResponseTeamMemberResponseForwardPagingEntity
        return TeamsCollectionResponseTeamMemberResponseForwardPagingEntity(self, data)


    def TeamsCollectionResponseTeamResponseForwardPaging(self, data=None) -> "TeamsCollectionResponseTeamResponseForwardPagingEntity":
        """Entity factory: client.TeamsCollectionResponseTeamResponseForwardPaging().list() / client.TeamsCollectionResponseTeamResponseForwardPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.teams_collection_response_team_response_forward_paging_entity import TeamsCollectionResponseTeamResponseForwardPagingEntity
        return TeamsCollectionResponseTeamResponseForwardPagingEntity(self, data)


    def TeamsTeam(self, data=None) -> "TeamsTeamEntity":
        """Entity factory: client.TeamsTeam().list() / client.TeamsTeam().load({"id": ...})."""
        from hubspotsettings_sdk.entity.teams_team_entity import TeamsTeamEntity
        return TeamsTeamEntity(self, data)


    def TeamsTeamMember(self, data=None) -> "TeamsTeamMemberEntity":
        """Entity factory: client.TeamsTeamMember().list() / client.TeamsTeamMember().load({"id": ...})."""
        from hubspotsettings_sdk.entity.teams_team_member_entity import TeamsTeamMemberEntity
        return TeamsTeamMemberEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from hubspotsettings_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserProvisioningCollectionResponsePublicPermissionSetNo(self, data=None) -> "UserProvisioningCollectionResponsePublicPermissionSetNoEntity":
        """Entity factory: client.UserProvisioningCollectionResponsePublicPermissionSetNo().list() / client.UserProvisioningCollectionResponsePublicPermissionSetNo().load({"id": ...})."""
        from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_permission_set_no_entity import UserProvisioningCollectionResponsePublicPermissionSetNoEntity
        return UserProvisioningCollectionResponsePublicPermissionSetNoEntity(self, data)


    def UserProvisioningCollectionResponsePublicSeatNoPaging(self, data=None) -> "UserProvisioningCollectionResponsePublicSeatNoPagingEntity":
        """Entity factory: client.UserProvisioningCollectionResponsePublicSeatNoPaging().list() / client.UserProvisioningCollectionResponsePublicSeatNoPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_seat_no_paging_entity import UserProvisioningCollectionResponsePublicSeatNoPagingEntity
        return UserProvisioningCollectionResponsePublicSeatNoPagingEntity(self, data)


    def UserProvisioningCollectionResponsePublicTeamNoPaging(self, data=None) -> "UserProvisioningCollectionResponsePublicTeamNoPagingEntity":
        """Entity factory: client.UserProvisioningCollectionResponsePublicTeamNoPaging().list() / client.UserProvisioningCollectionResponsePublicTeamNoPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_team_no_paging_entity import UserProvisioningCollectionResponsePublicTeamNoPagingEntity
        return UserProvisioningCollectionResponsePublicTeamNoPagingEntity(self, data)


    def UserProvisioningCollectionResponsePublicUserForwardPaging(self, data=None) -> "UserProvisioningCollectionResponsePublicUserForwardPagingEntity":
        """Entity factory: client.UserProvisioningCollectionResponsePublicUserForwardPaging().list() / client.UserProvisioningCollectionResponsePublicUserForwardPaging().load({"id": ...})."""
        from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_user_forward_paging_entity import UserProvisioningCollectionResponsePublicUserForwardPagingEntity
        return UserProvisioningCollectionResponsePublicUserForwardPagingEntity(self, data)


    def UserProvisioningPublicUser(self, data=None) -> "UserProvisioningPublicUserEntity":
        """Entity factory: client.UserProvisioningPublicUser().list() / client.UserProvisioningPublicUser().load({"id": ...})."""
        from hubspotsettings_sdk.entity.user_provisioning_public_user_entity import UserProvisioningPublicUserEntity
        return UserProvisioningPublicUserEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "HubspotSettingsSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from hubspotsettings_sdk.entity.basic_entity import BasicEntity
    from hubspotsettings_sdk.entity.exchange_rate_entity import ExchangeRateEntity
    from hubspotsettings_sdk.entity.multicurrency_batch_response_exchange_rate_entity import MulticurrencyBatchResponseExchangeRateEntity
    from hubspotsettings_sdk.entity.multicurrency_central_exchange_rates_information_entity import MulticurrencyCentralExchangeRatesInformationEntity
    from hubspotsettings_sdk.entity.multicurrency_collection_response_currency_code_info_no_paging_entity import MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity
    from hubspotsettings_sdk.entity.multicurrency_collection_response_exchange_rate_forward_paging_entity import MulticurrencyCollectionResponseExchangeRateForwardPagingEntity
    from hubspotsettings_sdk.entity.multicurrency_collection_response_exchange_rate_no_paging_entity import MulticurrencyCollectionResponseExchangeRateNoPagingEntity
    from hubspotsettings_sdk.entity.multicurrency_company_currency_entity import MulticurrencyCompanyCurrencyEntity
    from hubspotsettings_sdk.entity.multicurrency_exchange_rate_entity import MulticurrencyExchangeRateEntity
    from hubspotsettings_sdk.entity.tax_rate_entity import TaxRateEntity
    from hubspotsettings_sdk.entity.teams_batch_response_team_member_entity import TeamsBatchResponseTeamMemberEntity
    from hubspotsettings_sdk.entity.teams_collection_response_team_member_response_forward_paging_entity import TeamsCollectionResponseTeamMemberResponseForwardPagingEntity
    from hubspotsettings_sdk.entity.teams_collection_response_team_response_forward_paging_entity import TeamsCollectionResponseTeamResponseForwardPagingEntity
    from hubspotsettings_sdk.entity.teams_team_entity import TeamsTeamEntity
    from hubspotsettings_sdk.entity.teams_team_member_entity import TeamsTeamMemberEntity
    from hubspotsettings_sdk.entity.user_entity import UserEntity
    from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_permission_set_no_entity import UserProvisioningCollectionResponsePublicPermissionSetNoEntity
    from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_seat_no_paging_entity import UserProvisioningCollectionResponsePublicSeatNoPagingEntity
    from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_team_no_paging_entity import UserProvisioningCollectionResponsePublicTeamNoPagingEntity
    from hubspotsettings_sdk.entity.user_provisioning_collection_response_public_user_forward_paging_entity import UserProvisioningCollectionResponsePublicUserForwardPagingEntity
    from hubspotsettings_sdk.entity.user_provisioning_public_user_entity import UserProvisioningPublicUserEntity
