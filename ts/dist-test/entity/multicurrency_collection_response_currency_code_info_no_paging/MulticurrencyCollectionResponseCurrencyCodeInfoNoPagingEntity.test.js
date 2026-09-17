"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotSettingsSDK.test();
        const ent = testsdk.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'multicurrency_collection_response_currency_code_info_no_paging.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "currencyCode", "req": true, "short": "The three-letter code representing a specific currency (ex.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "currencyName", "req": true, "short": "The full name of the currency (ex.", "type": "`$STRING`", "index$": 1 }], "name": "multicurrency_collection_response_currency_code_info_no_paging", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /settings/currencies/2026-09/central-fx-rates/unsupported-currencies", "json": "{\"operationId\":\"get-/settings/currencies/2026-09/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of currency code information objects, each containing details about a specific currency code and its name.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"currencyCode\":{\"description\":\"The three-letter code representing a specific currency (ex. USD).\",\"example\":null,\"type\":\"string\"},\"currencyName\":{\"description\":\"The full name of the currency (ex. US Dollar).\",\"example\":null,\"type\":\"string\"}},\"required\":[\"currencyCode\",\"currencyName\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"cpq.quotes.write\"]},{\"oauth2\":[\"crm.objects.quotes.read\"]},{\"oauth2\":[\"settings.currencies.read\"]},{\"oauth2\":[\"crm.objects.quotes.write\"]},{\"oauth2\":[\"cpq.quotes.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/settings/currencies/2026-09/central-fx-rates/unsupported-currencies", "segments": [{ "lit": "settings" }, { "lit": "currencies" }, { "lit": "2026-09" }, { "lit": "central-fx-rates" }, { "lit": "unsupported-currencies" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /settings/currencies/2026-09/codes", "json": "{\"operationId\":\"get-/settings/currencies/2026-09/codes\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of currency code information objects, each containing details about a specific currency code and its name.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"currencyCode\":{\"description\":\"The three-letter code representing a specific currency (ex. USD).\",\"example\":null,\"type\":\"string\"},\"currencyName\":{\"description\":\"The full name of the currency (ex. US Dollar).\",\"example\":null,\"type\":\"string\"}},\"required\":[\"currencyCode\",\"currencyName\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"cpq.quotes.write\"]},{\"oauth2\":[\"crm.objects.quotes.read\"]},{\"oauth2\":[\"settings.currencies.read\"]},{\"oauth2\":[\"crm.objects.quotes.write\"]},{\"oauth2\":[\"cpq.quotes.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/settings/currencies/2026-09/codes", "segments": [{ "lit": "settings" }, { "lit": "currencies" }, { "lit": "2026-09" }, { "lit": "codes" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "multicurrency_collection_response_currency_code_info_no_paging", "name__orig": "multicurrency_collection_response_currency_code_info_no_paging", "Name": "MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging", "name_": "multicurrency_collection_response_currency_code_info_no_paging", "name-": "multicurrency-collection-response-currency-code-info-no-paging", "NAME": "MULTICURRENCY_COLLECTION_RESPONSE_CURRENCY_CODE_INFO_NO_PAGING", "index$": 4 }, { "active": true, "entity": "multicurrency_collection_response_currency_code_info_no_paging", "key$": "BasicMulticurrencyCollectionResponseCurrencyCodeInfoNoPagingFlow", "kind": "basic", "name": "BasicMulticurrencyCollectionResponseCurrencyCodeInfoNoPagingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "multicurrency_collection_response_currency_code_info_no_paging_ref01" } }], "index$": 0 }] }, 'MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let multicurrency_collection_response_currency_code_info_no_paging_ref01_data = Object.values(setup.data.existing.multicurrency_collection_response_currency_code_info_no_paging)[0];
        // LIST
        const multicurrency_collection_response_currency_code_info_no_paging_ref01_ent = client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging();
        const multicurrency_collection_response_currency_code_info_no_paging_ref01_match = {};
        const multicurrency_collection_response_currency_code_info_no_paging_ref01_list = (await multicurrency_collection_response_currency_code_info_no_paging_ref01_ent.list(multicurrency_collection_response_currency_code_info_no_paging_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/multicurrency_collection_response_currency_code_info_no_paging/MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['multicurrency_collection_response_currency_code_info_no_paging01', 'multicurrency_collection_response_currency_code_info_no_paging02', 'multicurrency_collection_response_currency_code_info_no_paging03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_CURRENCY_CODE_INFO_NO_PAGING_ENTID': idmap,
        'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
        'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_SETTINGS_APIKEY': '',
    });
    idmap = env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_CURRENCY_CODE_INFO_NO_PAGING_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_CURRENCY_CODE_INFO_NO_PAGING_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HubspotSettingsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.HUBSPOT_SETTINGS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.HUBSPOT_SETTINGS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity.test.js.map