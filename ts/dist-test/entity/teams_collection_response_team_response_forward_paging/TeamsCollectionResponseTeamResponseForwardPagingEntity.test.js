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
(0, node_test_1.describe)('TeamsCollectionResponseTeamResponseForwardPagingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotSettingsSDK.test();
        const ent = testsdk.TeamsCollectionResponseTeamResponseForwardPaging();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'teams_collection_response_team_response_forward_paging.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the team, represented as a string.", "t": "`$STRING`", "key$": "id", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the team, represented as a string.", "t": "`$STRING`", "key$": "name", "index$": 1 }, "parentTeamId": { "a": true, "h": "Parent Team Id", "n": "parentTeamId", "r": false, "sh": "The unique identifier of the parent team, if applicable, represented as a string.", "t": "`$STRING`", "key$": "parentTeamId", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "teams_collection_response_team_response_forward_paging", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /settings/teams/2026-09", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": null, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": null, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/settings/teams/2026-09", "q": { "exist": ["after", "limit"] }, "r": {}, "s": [{ "lit": "settings" }, { "lit": "teams" }, { "lit": "2026-09" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "teams_collection_response_team_response_forward_paging", "name__orig": "teams_collection_response_team_response_forward_paging", "Name": "TeamsCollectionResponseTeamResponseForwardPaging", "name_": "teams_collection_response_team_response_forward_paging", "name-": "teams-collection-response-team-response-forward-paging", "NAME": "TEAMS_COLLECTION_RESPONSE_TEAM_RESPONSE_FORWARD_PAGING", "index$": 12 }, { "active": true, "entity": "teams_collection_response_team_response_forward_paging", "key$": "BasicTeamsCollectionResponseTeamResponseForwardPagingFlow", "kind": "basic", "name": "BasicTeamsCollectionResponseTeamResponseForwardPagingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "teams_collection_response_team_response_forward_paging_ref01" } }], "index$": 0 }] }, 'TeamsCollectionResponseTeamResponseForwardPaging', { "GET /settings/teams/2026-09": { "protocol": "http", "parameters": [{ "name": "after", "in": "query", "description": "The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null }, "index$": 0 }, { "name": "limit", "in": "query", "description": "The maximum number of results to display per page.", "required": false, "style": "form", "explode": true, "schema": { "type": "integer", "format": "int32", "example": null }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let teams_collection_response_team_response_forward_paging_ref01_data = Object.values(setup.data.existing.teams_collection_response_team_response_forward_paging)[0];
        // LIST
        const teams_collection_response_team_response_forward_paging_ref01_ent = client.TeamsCollectionResponseTeamResponseForwardPaging();
        const teams_collection_response_team_response_forward_paging_ref01_match = {};
        const teams_collection_response_team_response_forward_paging_ref01_list = (await teams_collection_response_team_response_forward_paging_ref01_ent.list(teams_collection_response_team_response_forward_paging_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/teams_collection_response_team_response_forward_paging/TeamsCollectionResponseTeamResponseForwardPagingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['teams_collection_response_team_response_forward_paging01', 'teams_collection_response_team_response_forward_paging02', 'teams_collection_response_team_response_forward_paging03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_SETTINGS_TEST_TEAMS_COLLECTION_RESPONSE_TEAM_RESPONSE_FORWARD_PAGING_ENTID': idmap,
        'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
        'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_SETTINGS_APIKEY': '',
    });
    idmap = env['HUBSPOT_SETTINGS_TEST_TEAMS_COLLECTION_RESPONSE_TEAM_RESPONSE_FORWARD_PAGING_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_SETTINGS_TEST_TEAMS_COLLECTION_RESPONSE_TEAM_RESPONSE_FORWARD_PAGING_ENTID'];
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
//# sourceMappingURL=TeamsCollectionResponseTeamResponseForwardPagingEntity.test.js.map