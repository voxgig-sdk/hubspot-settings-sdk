<?php
declare(strict_types=1);

// HubspotSettings SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class HubspotSettingsSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new HubspotSettingsUtility();
        $this->_utility = $utility;

        $config = HubspotSettingsConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = HubspotSettingsHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = HubspotSettingsHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!HubspotSettingsFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, HubspotSettingsFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return HubspotSettingsUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = HubspotSettingsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = HubspotSettingsHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = HubspotSettingsHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new HubspotSettingsSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new HubspotSettingsError($op . "_allow",
                "HubspotSettingsSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = HubspotSettingsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = HubspotSettingsHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new HubspotSettingsError("graphql_error",
                "HubspotSettingsSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_basic = null;

    // Canonical facade: $client->Basic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->basic()
    // resolves here too.
    public function Basic($data = null)
    {
        require_once __DIR__ . '/entity/basic_entity.php';
        if ($data === null) {
            if ($this->_basic === null) {
                $this->_basic = new BasicEntity($this, null);
            }
            return $this->_basic;
        }
        return new BasicEntity($this, $data);
    }


    private $_exchange_rate = null;

    // Canonical facade: $client->ExchangeRate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->exchange_rate()
    // resolves here too.
    public function ExchangeRate($data = null)
    {
        require_once __DIR__ . '/entity/exchange_rate_entity.php';
        if ($data === null) {
            if ($this->_exchange_rate === null) {
                $this->_exchange_rate = new ExchangeRateEntity($this, null);
            }
            return $this->_exchange_rate;
        }
        return new ExchangeRateEntity($this, $data);
    }


    private $_multicurrency_batch_response_exchange_rate = null;

    // Canonical facade: $client->MulticurrencyBatchResponseExchangeRate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->multicurrency_batch_response_exchange_rate()
    // resolves here too.
    public function MulticurrencyBatchResponseExchangeRate($data = null)
    {
        require_once __DIR__ . '/entity/multicurrency_batch_response_exchange_rate_entity.php';
        if ($data === null) {
            if ($this->_multicurrency_batch_response_exchange_rate === null) {
                $this->_multicurrency_batch_response_exchange_rate = new MulticurrencyBatchResponseExchangeRateEntity($this, null);
            }
            return $this->_multicurrency_batch_response_exchange_rate;
        }
        return new MulticurrencyBatchResponseExchangeRateEntity($this, $data);
    }


    private $_multicurrency_central_exchange_rates_information = null;

    // Canonical facade: $client->MulticurrencyCentralExchangeRatesInformation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->multicurrency_central_exchange_rates_information()
    // resolves here too.
    public function MulticurrencyCentralExchangeRatesInformation($data = null)
    {
        require_once __DIR__ . '/entity/multicurrency_central_exchange_rates_information_entity.php';
        if ($data === null) {
            if ($this->_multicurrency_central_exchange_rates_information === null) {
                $this->_multicurrency_central_exchange_rates_information = new MulticurrencyCentralExchangeRatesInformationEntity($this, null);
            }
            return $this->_multicurrency_central_exchange_rates_information;
        }
        return new MulticurrencyCentralExchangeRatesInformationEntity($this, $data);
    }


    private $_multicurrency_collection_response_currency_code_info_no_paging = null;

    // Canonical facade: $client->MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->multicurrency_collection_response_currency_code_info_no_paging()
    // resolves here too.
    public function MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging($data = null)
    {
        require_once __DIR__ . '/entity/multicurrency_collection_response_currency_code_info_no_paging_entity.php';
        if ($data === null) {
            if ($this->_multicurrency_collection_response_currency_code_info_no_paging === null) {
                $this->_multicurrency_collection_response_currency_code_info_no_paging = new MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity($this, null);
            }
            return $this->_multicurrency_collection_response_currency_code_info_no_paging;
        }
        return new MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity($this, $data);
    }


    private $_multicurrency_collection_response_exchange_rate_forward_paging = null;

    // Canonical facade: $client->MulticurrencyCollectionResponseExchangeRateForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->multicurrency_collection_response_exchange_rate_forward_paging()
    // resolves here too.
    public function MulticurrencyCollectionResponseExchangeRateForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/multicurrency_collection_response_exchange_rate_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_multicurrency_collection_response_exchange_rate_forward_paging === null) {
                $this->_multicurrency_collection_response_exchange_rate_forward_paging = new MulticurrencyCollectionResponseExchangeRateForwardPagingEntity($this, null);
            }
            return $this->_multicurrency_collection_response_exchange_rate_forward_paging;
        }
        return new MulticurrencyCollectionResponseExchangeRateForwardPagingEntity($this, $data);
    }


    private $_multicurrency_collection_response_exchange_rate_no_paging = null;

    // Canonical facade: $client->MulticurrencyCollectionResponseExchangeRateNoPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->multicurrency_collection_response_exchange_rate_no_paging()
    // resolves here too.
    public function MulticurrencyCollectionResponseExchangeRateNoPaging($data = null)
    {
        require_once __DIR__ . '/entity/multicurrency_collection_response_exchange_rate_no_paging_entity.php';
        if ($data === null) {
            if ($this->_multicurrency_collection_response_exchange_rate_no_paging === null) {
                $this->_multicurrency_collection_response_exchange_rate_no_paging = new MulticurrencyCollectionResponseExchangeRateNoPagingEntity($this, null);
            }
            return $this->_multicurrency_collection_response_exchange_rate_no_paging;
        }
        return new MulticurrencyCollectionResponseExchangeRateNoPagingEntity($this, $data);
    }


    private $_multicurrency_company_currency = null;

    // Canonical facade: $client->MulticurrencyCompanyCurrency()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->multicurrency_company_currency()
    // resolves here too.
    public function MulticurrencyCompanyCurrency($data = null)
    {
        require_once __DIR__ . '/entity/multicurrency_company_currency_entity.php';
        if ($data === null) {
            if ($this->_multicurrency_company_currency === null) {
                $this->_multicurrency_company_currency = new MulticurrencyCompanyCurrencyEntity($this, null);
            }
            return $this->_multicurrency_company_currency;
        }
        return new MulticurrencyCompanyCurrencyEntity($this, $data);
    }


    private $_multicurrency_exchange_rate = null;

    // Canonical facade: $client->MulticurrencyExchangeRate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->multicurrency_exchange_rate()
    // resolves here too.
    public function MulticurrencyExchangeRate($data = null)
    {
        require_once __DIR__ . '/entity/multicurrency_exchange_rate_entity.php';
        if ($data === null) {
            if ($this->_multicurrency_exchange_rate === null) {
                $this->_multicurrency_exchange_rate = new MulticurrencyExchangeRateEntity($this, null);
            }
            return $this->_multicurrency_exchange_rate;
        }
        return new MulticurrencyExchangeRateEntity($this, $data);
    }


    private $_tax_rate = null;

    // Canonical facade: $client->TaxRate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tax_rate()
    // resolves here too.
    public function TaxRate($data = null)
    {
        require_once __DIR__ . '/entity/tax_rate_entity.php';
        if ($data === null) {
            if ($this->_tax_rate === null) {
                $this->_tax_rate = new TaxRateEntity($this, null);
            }
            return $this->_tax_rate;
        }
        return new TaxRateEntity($this, $data);
    }


    private $_teams_batch_response_team_member = null;

    // Canonical facade: $client->TeamsBatchResponseTeamMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_batch_response_team_member()
    // resolves here too.
    public function TeamsBatchResponseTeamMember($data = null)
    {
        require_once __DIR__ . '/entity/teams_batch_response_team_member_entity.php';
        if ($data === null) {
            if ($this->_teams_batch_response_team_member === null) {
                $this->_teams_batch_response_team_member = new TeamsBatchResponseTeamMemberEntity($this, null);
            }
            return $this->_teams_batch_response_team_member;
        }
        return new TeamsBatchResponseTeamMemberEntity($this, $data);
    }


    private $_teams_collection_response_team_member_response_forward_paging = null;

    // Canonical facade: $client->TeamsCollectionResponseTeamMemberResponseForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_collection_response_team_member_response_forward_paging()
    // resolves here too.
    public function TeamsCollectionResponseTeamMemberResponseForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/teams_collection_response_team_member_response_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_teams_collection_response_team_member_response_forward_paging === null) {
                $this->_teams_collection_response_team_member_response_forward_paging = new TeamsCollectionResponseTeamMemberResponseForwardPagingEntity($this, null);
            }
            return $this->_teams_collection_response_team_member_response_forward_paging;
        }
        return new TeamsCollectionResponseTeamMemberResponseForwardPagingEntity($this, $data);
    }


    private $_teams_collection_response_team_response_forward_paging = null;

    // Canonical facade: $client->TeamsCollectionResponseTeamResponseForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_collection_response_team_response_forward_paging()
    // resolves here too.
    public function TeamsCollectionResponseTeamResponseForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/teams_collection_response_team_response_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_teams_collection_response_team_response_forward_paging === null) {
                $this->_teams_collection_response_team_response_forward_paging = new TeamsCollectionResponseTeamResponseForwardPagingEntity($this, null);
            }
            return $this->_teams_collection_response_team_response_forward_paging;
        }
        return new TeamsCollectionResponseTeamResponseForwardPagingEntity($this, $data);
    }


    private $_teams_team = null;

    // Canonical facade: $client->TeamsTeam()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_team()
    // resolves here too.
    public function TeamsTeam($data = null)
    {
        require_once __DIR__ . '/entity/teams_team_entity.php';
        if ($data === null) {
            if ($this->_teams_team === null) {
                $this->_teams_team = new TeamsTeamEntity($this, null);
            }
            return $this->_teams_team;
        }
        return new TeamsTeamEntity($this, $data);
    }


    private $_teams_team_member = null;

    // Canonical facade: $client->TeamsTeamMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_team_member()
    // resolves here too.
    public function TeamsTeamMember($data = null)
    {
        require_once __DIR__ . '/entity/teams_team_member_entity.php';
        if ($data === null) {
            if ($this->_teams_team_member === null) {
                $this->_teams_team_member = new TeamsTeamMemberEntity($this, null);
            }
            return $this->_teams_team_member;
        }
        return new TeamsTeamMemberEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_provisioning_collection_response_public_permission_set_no = null;

    // Canonical facade: $client->UserProvisioningCollectionResponsePublicPermissionSetNo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_provisioning_collection_response_public_permission_set_no()
    // resolves here too.
    public function UserProvisioningCollectionResponsePublicPermissionSetNo($data = null)
    {
        require_once __DIR__ . '/entity/user_provisioning_collection_response_public_permission_set_no_entity.php';
        if ($data === null) {
            if ($this->_user_provisioning_collection_response_public_permission_set_no === null) {
                $this->_user_provisioning_collection_response_public_permission_set_no = new UserProvisioningCollectionResponsePublicPermissionSetNoEntity($this, null);
            }
            return $this->_user_provisioning_collection_response_public_permission_set_no;
        }
        return new UserProvisioningCollectionResponsePublicPermissionSetNoEntity($this, $data);
    }


    private $_user_provisioning_collection_response_public_seat_no_paging = null;

    // Canonical facade: $client->UserProvisioningCollectionResponsePublicSeatNoPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_provisioning_collection_response_public_seat_no_paging()
    // resolves here too.
    public function UserProvisioningCollectionResponsePublicSeatNoPaging($data = null)
    {
        require_once __DIR__ . '/entity/user_provisioning_collection_response_public_seat_no_paging_entity.php';
        if ($data === null) {
            if ($this->_user_provisioning_collection_response_public_seat_no_paging === null) {
                $this->_user_provisioning_collection_response_public_seat_no_paging = new UserProvisioningCollectionResponsePublicSeatNoPagingEntity($this, null);
            }
            return $this->_user_provisioning_collection_response_public_seat_no_paging;
        }
        return new UserProvisioningCollectionResponsePublicSeatNoPagingEntity($this, $data);
    }


    private $_user_provisioning_collection_response_public_team_no_paging = null;

    // Canonical facade: $client->UserProvisioningCollectionResponsePublicTeamNoPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_provisioning_collection_response_public_team_no_paging()
    // resolves here too.
    public function UserProvisioningCollectionResponsePublicTeamNoPaging($data = null)
    {
        require_once __DIR__ . '/entity/user_provisioning_collection_response_public_team_no_paging_entity.php';
        if ($data === null) {
            if ($this->_user_provisioning_collection_response_public_team_no_paging === null) {
                $this->_user_provisioning_collection_response_public_team_no_paging = new UserProvisioningCollectionResponsePublicTeamNoPagingEntity($this, null);
            }
            return $this->_user_provisioning_collection_response_public_team_no_paging;
        }
        return new UserProvisioningCollectionResponsePublicTeamNoPagingEntity($this, $data);
    }


    private $_user_provisioning_collection_response_public_user_forward_paging = null;

    // Canonical facade: $client->UserProvisioningCollectionResponsePublicUserForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_provisioning_collection_response_public_user_forward_paging()
    // resolves here too.
    public function UserProvisioningCollectionResponsePublicUserForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/user_provisioning_collection_response_public_user_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_user_provisioning_collection_response_public_user_forward_paging === null) {
                $this->_user_provisioning_collection_response_public_user_forward_paging = new UserProvisioningCollectionResponsePublicUserForwardPagingEntity($this, null);
            }
            return $this->_user_provisioning_collection_response_public_user_forward_paging;
        }
        return new UserProvisioningCollectionResponsePublicUserForwardPagingEntity($this, $data);
    }


    private $_user_provisioning_public_user = null;

    // Canonical facade: $client->UserProvisioningPublicUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_provisioning_public_user()
    // resolves here too.
    public function UserProvisioningPublicUser($data = null)
    {
        require_once __DIR__ . '/entity/user_provisioning_public_user_entity.php';
        if ($data === null) {
            if ($this->_user_provisioning_public_user === null) {
                $this->_user_provisioning_public_user = new UserProvisioningPublicUserEntity($this, null);
            }
            return $this->_user_provisioning_public_user;
        }
        return new UserProvisioningPublicUserEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new HubspotSettingsSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
