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
(0, node_test_1.describe)('CurrentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotSettingsSDK.test();
        const ent = testsdk.Current();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'current.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "conversionRate": { "a": true, "h": "Conversion Rate", "n": "conversionRate", "r": true, "sh": "The conversion rate between the to and from currency code of this exchange rate.", "t": "`$NUMBER`", "key$": "conversionRate", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "The date the exchange rate was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "effectiveAt": { "a": true, "fo": "date-time", "h": "Effective At", "n": "effectiveAt", "r": true, "sh": "The date the exchange rate is in effect.", "t": "`$STRING`", "key$": "effectiveAt", "index$": 2 }, "fromCurrencyCode": { "a": true, "h": "From Currency Code", "n": "fromCurrencyCode", "r": true, "sh": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.", "t": "`$STRING`", "key$": "fromCurrencyCode", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "A unique identifier for the exchange rate", "t": "`$STRING`", "key$": "id", "index$": 4 }, "toCurrencyCode": { "a": true, "h": "To Currency Code", "n": "toCurrencyCode", "r": true, "sh": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.", "t": "`$STRING`", "key$": "toCurrencyCode", "index$": 5 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The date the exchange rate was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 6 }, "visibleInUI": { "a": true, "h": "Visible In Ui", "n": "visibleInUI", "r": true, "sh": "This indicates if the exchange rate is shown in the MultiCurrency settings page.", "t": "`$BOOLEAN`", "key$": "visibleInUI", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "current", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /settings/currencies/2026-09/exchange-rates/current", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/settings/currencies/2026-09/exchange-rates/current", "q": {}, "r": {}, "s": [{ "lit": "settings" }, { "lit": "currencies" }, { "lit": "2026-09" }, { "lit": "exchange-rates" }, { "lit": "current" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "current", "name__orig": "current", "Name": "Current", "name_": "current", "name-": "current", "NAME": "CURRENT", "index$": 3 }, { "active": true, "entity": "current", "key$": "BasicCurrentFlow", "kind": "basic", "name": "BasicCurrentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "current_ref01" } }], "index$": 0 }] }, 'Current', { "GET /settings/currencies/2026-09/exchange-rates/current": { "protocol": "http", "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let current_ref01_data = Object.values(setup.data.existing.current)[0];
        // LIST
        const current_ref01_ent = client.Current();
        const current_ref01_match = {};
        const current_ref01_list = (await current_ref01_ent.list(current_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/current/CurrentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['current01', 'current02', 'current03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_SETTINGS_TEST_CURRENT_ENTID': idmap,
        'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
        'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_SETTINGS_APIKEY': '',
    });
    idmap = env['HUBSPOT_SETTINGS_TEST_CURRENT_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_SETTINGS_TEST_CURRENT_ENTID'];
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
//# sourceMappingURL=CurrentEntity.test.js.map