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
(0, node_test_1.describe)('TaxRateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotSettingsSDK.test();
        const ent = testsdk.TaxRate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tax_rate.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "active", "req": true, "short": "Indicates whether the tax rate group is currently active.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "format": "date-time", "name": "createdAt", "req": true, "short": "The date and time when the tax rate was created.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier for the tax rate.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "label", "req": true, "short": "The display label for the tax rate.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": true, "short": "The name of the tax rate.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "percentageRate", "req": true, "short": "The percentage rate applied.", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": true, "short": "The date and time when the tax rate was last updated.", "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "tax_rate", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": null, "kind": "query", "name": "active", "orig": "active", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "example": null, "kind": "query", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": null, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 2 }] }, "contract": { "id": "GET /tax-rates/2026-09/tax-rates", "json": "{\"operationId\":\"get-/tax-rates/2026-09/tax-rates\",\"parameters\":[{\"description\":\"A boolean to filter results by their active status.\",\"explode\":true,\"in\":\"query\",\"name\":\"active\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"boolean\"},\"style\":\"form\"},{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"description\":\"Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.\",\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"description\":\"An array of PublicTaxRateGroup objects, each representing a tax rate group with its properties.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"Indicates whether the tax rate group is currently active.\",\"example\":null,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"The date and time when the tax rate was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the tax rate.\",\"example\":null,\"type\":\"string\"},\"label\":{\"description\":\"The display label for the tax rate.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the tax rate.\",\"example\":null,\"type\":\"string\"},\"percentageRate\":{\"description\":\"The percentage rate applied.\",\"example\":null,\"type\":\"number\"},\"updatedAt\":{\"description\":\"The date and time when the tax rate was last updated.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"active\",\"createdAt\",\"id\",\"label\",\"name\",\"percentageRate\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"cpq.quotes.write\"]},{\"oauth2\":[\"crm.objects.quotes.read\"]},{\"oauth2\":[\"tax_rates.read\"]},{\"oauth2\":[\"crm.objects.quotes.write\"]},{\"oauth2\":[\"cpq.quotes.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/tax-rates/2026-09/tax-rates", "segments": [{ "lit": "tax-rates" }, { "lit": "2026-09" }, { "lit": "tax-rates" }], "select": { "exist": ["active", "after", "limit"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": null, "kind": "param", "name": "id", "orig": "tax_rate_group_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /tax-rates/2026-09/tax-rates/{taxRateGroupId}", "json": "{\"operationId\":\"get-/tax-rates/2026-09/tax-rates/{taxRateGroupId}\",\"parameters\":[{\"description\":\"The unique identifier of the tax rate group to retrieve.\",\"explode\":false,\"in\":\"path\",\"name\":\"taxRateGroupId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"active\":{\"description\":\"Indicates whether the tax rate group is currently active.\",\"example\":null,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"The date and time when the tax rate was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the tax rate.\",\"example\":null,\"type\":\"string\"},\"label\":{\"description\":\"The display label for the tax rate.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the tax rate.\",\"example\":null,\"type\":\"string\"},\"percentageRate\":{\"description\":\"The percentage rate applied.\",\"example\":null,\"type\":\"number\"},\"updatedAt\":{\"description\":\"The date and time when the tax rate was last updated.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"active\",\"createdAt\",\"id\",\"label\",\"name\",\"percentageRate\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"cpq.quotes.write\"]},{\"oauth2\":[\"crm.objects.quotes.read\"]},{\"oauth2\":[\"tax_rates.read\"]},{\"oauth2\":[\"crm.objects.quotes.write\"]},{\"oauth2\":[\"cpq.quotes.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/tax-rates/2026-09/tax-rates/{taxRateGroupId}", "rename": { "param": { "taxRateGroupId": "id" } }, "segments": [{ "lit": "tax-rates" }, { "lit": "2026-09" }, { "lit": "tax-rates" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "tax_rate", "name__orig": "tax_rate", "Name": "TaxRate", "name_": "tax_rate", "name-": "tax-rate", "NAME": "TAX_RATE", "index$": 9 }, { "active": true, "entity": "tax_rate", "key$": "BasicTaxRateFlow", "kind": "basic", "name": "BasicTaxRateFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "tax_rate_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "tax_rate_ref01", "srcdatavar": "tax_rate_ref01_data", "suffix": "_dt0" }, "match": { "id": "tax_rate01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tax_rate_ref01" } }], "index$": 1 }] }, 'TaxRate');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tax_rate_ref01_data = Object.values(setup.data.existing.tax_rate)[0];
        // LIST
        const tax_rate_ref01_ent = client.TaxRate();
        const tax_rate_ref01_match = {};
        const tax_rate_ref01_list = (await tax_rate_ref01_ent.list(tax_rate_ref01_match)).map((e) => e.data());
        // LOAD
        const tax_rate_ref01_match_dt0 = {};
        tax_rate_ref01_match_dt0.id = tax_rate_ref01_data.id;
        const tax_rate_ref01_data_dt0 = (await tax_rate_ref01_ent.load(tax_rate_ref01_match_dt0)).data();
        (0, node_assert_1.default)(tax_rate_ref01_data_dt0.id === tax_rate_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tax_rate/TaxRateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tax_rate01', 'tax_rate02', 'tax_rate03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_SETTINGS_TEST_TAX_RATE_ENTID': idmap,
        'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
        'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_SETTINGS_APIKEY': '',
    });
    idmap = env['HUBSPOT_SETTINGS_TEST_TAX_RATE_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_SETTINGS_TEST_TAX_RATE_ENTID'];
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
//# sourceMappingURL=TaxRateEntity.test.js.map