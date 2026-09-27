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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MulticurrencyCompanyCurrencyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotSettingsSDK.test();
        const ent = testsdk.MulticurrencyCompanyCurrency();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'multicurrency_company_currency.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "The date the company currency was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 0 }, "currencyCode": { "a": true, "h": "Currency Code", "n": "currencyCode", "r": true, "sh": "The three-letter code representing a specific currency (ex.", "t": "`$STRING`", "key$": "currencyCode", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The currency code for the company currency", "t": "`$STRING`", "key$": "id", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "multicurrency_company_currency", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /settings/currencies/2026-09/company-currency", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/settings/currencies/2026-09/company-currency", "q": {}, "r": {}, "s": [{ "lit": "settings" }, { "lit": "currencies" }, { "lit": "2026-09" }, { "lit": "company-currency" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /settings/currencies/2026-09/company-currency", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PUT", "o": "/settings/currencies/2026-09/company-currency", "q": {}, "r": {}, "s": [{ "lit": "settings" }, { "lit": "currencies" }, { "lit": "2026-09" }, { "lit": "company-currency" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "multicurrency_company_currency", "name__orig": "multicurrency_company_currency", "Name": "MulticurrencyCompanyCurrency", "name_": "multicurrency_company_currency", "name-": "multicurrency-company-currency", "NAME": "MULTICURRENCY_COMPANY_CURRENCY", "index$": 8 }, { "active": true, "entity": "multicurrency_company_currency", "key$": "BasicMulticurrencyCompanyCurrencyFlow", "kind": "basic", "name": "BasicMulticurrencyCompanyCurrencyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "multicurrency_company_currency_ref01", "srcdatavar": "multicurrency_company_currency_ref01_data", "suffix": "_up0", "textfield": "createdAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-multicurrency_company_currency_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "multicurrency_company_currency_ref01", "srcdatavar": "multicurrency_company_currency_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-multicurrency_company_currency_ref01" } }], "index$": 1 }] }, 'MulticurrencyCompanyCurrency', { "GET /settings/currencies/2026-09/company-currency": { "protocol": "http", "parameters": [] }, "PUT /settings/currencies/2026-09/company-currency": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["currencyCode"], "type": "object", "properties": { "currencyCode": { "type": "string", "description": "The three-letter code representing a specific currency (ex. USD).", "example": null, "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XUA", "YER", "ZAR", "ZMW", "ZWL"], "key$": "currencyCode" } }, "example": null, "x-ref": "#/components/schemas/MulticurrencyCompanyCurrencyUpdateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let multicurrency_company_currency_ref01_data = Object.values(setup.data.existing.multicurrency_company_currency)[0];
        // UPDATE
        const multicurrency_company_currency_ref01_ent = client.MulticurrencyCompanyCurrency();
        const multicurrency_company_currency_ref01_data_up0 = {};
        multicurrency_company_currency_ref01_data_up0.id = multicurrency_company_currency_ref01_data.id;
        const multicurrency_company_currency_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-multicurrency_company_currency_ref01_' + setup.now };
        multicurrency_company_currency_ref01_data_up0[multicurrency_company_currency_ref01_markdef_up0.name] = multicurrency_company_currency_ref01_markdef_up0.value;
        const multicurrency_company_currency_ref01_resdata_up0 = (await multicurrency_company_currency_ref01_ent.update(multicurrency_company_currency_ref01_data_up0)).data();
        (0, node_assert_1.default)(multicurrency_company_currency_ref01_resdata_up0.id === multicurrency_company_currency_ref01_data_up0.id);
        (0, node_assert_1.default)(multicurrency_company_currency_ref01_resdata_up0[multicurrency_company_currency_ref01_markdef_up0.name] === multicurrency_company_currency_ref01_markdef_up0.value);
        // LOAD
        const multicurrency_company_currency_ref01_match_dt0 = {};
        multicurrency_company_currency_ref01_match_dt0.id = multicurrency_company_currency_ref01_data.id;
        const multicurrency_company_currency_ref01_data_dt0 = (await multicurrency_company_currency_ref01_ent.load(multicurrency_company_currency_ref01_match_dt0)).data();
        (0, node_assert_1.default)(multicurrency_company_currency_ref01_data_dt0.id === multicurrency_company_currency_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/multicurrency_company_currency/MulticurrencyCompanyCurrencyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['multicurrency_company_currency01', 'multicurrency_company_currency02', 'multicurrency_company_currency03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COMPANY_CURRENCY_ENTID': idmap,
        'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
        'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_SETTINGS_APIKEY': '',
    });
    idmap = env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COMPANY_CURRENCY_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COMPANY_CURRENCY_ENTID'];
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
//# sourceMappingURL=MulticurrencyCompanyCurrencyEntity.test.js.map