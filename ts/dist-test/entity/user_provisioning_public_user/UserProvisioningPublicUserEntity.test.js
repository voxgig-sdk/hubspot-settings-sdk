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
(0, node_test_1.describe)('UserProvisioningPublicUserEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotSettingsSDK.test();
        const ent = testsdk.UserProvisioningPublicUser();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user_provisioning_public_user.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "email": { "a": true, "h": "Email", "n": "email", "r": true, "sh": "The email address of the user.", "t": "`$STRING`", "key$": "email", "index$": 0 }, "firstName": { "a": true, "h": "First Name", "n": "firstName", "r": false, "sh": "The first name of the user, represented as a string.", "t": "`$STRING`", "key$": "firstName", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier for the user, represented as a string.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "lastName": { "a": true, "h": "Last Name", "n": "lastName", "r": false, "sh": "The last name of the user, represented as a string.", "t": "`$STRING`", "key$": "lastName", "index$": 3 }, "primaryTeamId": { "a": true, "h": "Primary Team Id", "n": "primaryTeamId", "r": false, "sh": "The ID of the primary team to which the user belongs, represented as a string.", "t": "`$STRING`", "key$": "primaryTeamId", "index$": 4 }, "roleId": { "a": true, "h": "Role Id", "n": "roleId", "r": false, "sh": "A string representing a single role ID assigned to the user.", "t": "`$STRING`", "key$": "roleId", "index$": 5 }, "roleIds": { "a": true, "h": "Role Ids", "n": "roleIds", "r": true, "sh": "An array of strings representing the IDs of the roles assigned to the user.", "t": "`$ARRAY`", "key$": "roleIds", "index$": 6 }, "seatNames": { "a": true, "h": "Seat Names", "n": "seatNames", "r": false, "sh": "An array of strings representing the names of seats assigned to the user.", "t": "`$ARRAY`", "key$": "seatNames", "index$": 7 }, "secondaryTeamIds": { "a": true, "h": "Secondary Team Ids", "n": "secondaryTeamIds", "r": false, "sh": "An array of strings representing the IDs of secondary teams to which the user is associated.", "t": "`$ARRAY`", "key$": "secondaryTeamIds", "index$": 8 }, "sendWelcomeEmail": { "a": true, "h": "Send Welcome Email", "n": "sendWelcomeEmail", "op": { "create": { "req": true, "type": "`$BOOLEAN`" } }, "r": false, "sh": "A boolean indicating whether a welcome email should be sent to the user.", "t": "`$BOOLEAN`", "key$": "sendWelcomeEmail", "index$": 9 }, "superAdmin": { "a": true, "h": "Super Admin", "n": "superAdmin", "r": true, "sh": "A boolean indicating whether the user has super admin privileges.", "t": "`$BOOLEAN`", "key$": "superAdmin", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "user_provisioning_public_user", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /settings/users/2026-09", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/settings/users/2026-09", "q": {}, "r": {}, "s": [{ "lit": "settings" }, { "lit": "users" }, { "lit": "2026-09" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /settings/users/2026-09/{userId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "user_id", "or": "user_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": null, "k": "query", "n": "id_property", "or": "id_property", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/settings/users/2026-09/{userId}", "q": { "exist": ["id_property", "user_id"] }, "r": { "param": { "userId": "user_id" } }, "s": [{ "lit": "settings" }, { "lit": "users" }, { "lit": "2026-09" }, { "var": "user_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /settings/users/2026-09/{userId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "user_id", "or": "user_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": null, "k": "query", "n": "id_property", "or": "id_property", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/settings/users/2026-09/{userId}", "q": { "exist": ["id_property", "user_id"] }, "r": { "param": { "userId": "user_id" } }, "s": [{ "lit": "settings" }, { "lit": "users" }, { "lit": "2026-09" }, { "var": "user_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "user_provisioning_public_user", "name__orig": "user_provisioning_public_user", "Name": "UserProvisioningPublicUser", "name_": "user_provisioning_public_user", "name-": "user-provisioning-public-user", "NAME": "USER_PROVISIONING_PUBLIC_USER", "index$": 21 }, { "active": true, "entity": "user_provisioning_public_user", "key$": "BasicUserProvisioningPublicUserFlow", "kind": "basic", "name": "BasicUserProvisioningPublicUserFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "user_provisioning_public_user_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "user_provisioning_public_user_ref01", "srcdatavar": "user_provisioning_public_user_ref01_data", "suffix": "_up0", "textfield": "email" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_provisioning_public_user_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "user_provisioning_public_user_ref01", "srcdatavar": "user_provisioning_public_user_ref01_data", "suffix": "_dt0" }, "m": { "id": "user_provisioning_public_user01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_provisioning_public_user_ref01" } }], "index$": 2 }] }, 'UserProvisioningPublicUser', { "POST /settings/users/2026-09": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["email", "sendWelcomeEmail"], "type": "object", "properties": { "email": { "type": "string", "description": "The email address of the user being provisioned. This is a required field and must be unique.", "example": null, "key$": "email" }, "firstName": { "type": "string", "description": "The first name of the user.", "example": null, "key$": "firstName" }, "lastName": { "type": "string", "description": "The last name of the user.", "example": null, "key$": "lastName" }, "primaryTeamId": { "type": "string", "description": "The identifier for the primary team to which the user belongs.", "example": null, "key$": "primaryTeamId" }, "roleId": { "type": "string", "description": "The identifier for the role assigned to the user.", "example": null, "key$": "roleId" }, "seatNames": { "type": "array", "description": "An array of seat names assigned to the user, representing different permissions or access levels.", "example": null, "items": { "type": "string", "example": null }, "key$": "seatNames" }, "secondaryTeamIds": { "type": "array", "description": "An array of identifiers for secondary teams to which the user is associated.", "example": null, "items": { "type": "string", "example": null }, "key$": "secondaryTeamIds" }, "sendWelcomeEmail": { "type": "boolean", "description": "A boolean indicating whether a welcome email should be sent to the user upon provisioning. This is a required field.", "example": null, "key$": "sendWelcomeEmail" } }, "example": null, "x-ref": "#/components/schemas/UserProvisioningUserProvisionRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "GET /settings/users/2026-09/{userId}": { "protocol": "http", "parameters": [{ "name": "userId", "in": "path", "description": "The unique identifier of the user to retrieve.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }, { "name": "idProperty", "in": "query", "description": "Specifies the property used to identify the user. Valid values are 'USER_ID' and 'EMAIL'.", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null, "enum": ["EMAIL", "USER_ID"] }, "index$": 1 }] }, "PUT /settings/users/2026-09/{userId}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "firstName": { "type": "string", "description": "The first name of the user. It is a string value.", "example": null, "key$": "firstName" }, "lastName": { "type": "string", "description": "The last name of the user. It is a string value.", "example": null, "key$": "lastName" }, "primaryTeamId": { "type": "string", "description": "The identifier for the user's primary team. It is a string value.", "example": null, "key$": "primaryTeamId" }, "roleId": { "type": "string", "description": "The identifier for the user's role. It is a string value.", "example": null, "key$": "roleId" }, "seatNames": { "type": "array", "description": "An array of seat names associated with the user. Each item in the array is a string.", "example": null, "items": { "type": "string", "example": null }, "key$": "seatNames" }, "secondaryTeamIds": { "type": "array", "description": "An array of identifiers for the user's secondary teams. Each item in the array is a string.", "example": null, "items": { "type": "string", "example": null }, "key$": "secondaryTeamIds" } }, "example": null, "x-ref": "#/components/schemas/UserProvisioningPublicUserUpdate", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "userId", "in": "path", "description": "The unique identifier of the user to update.", "required": true, "style": "simple", "explode": false, "schema": { "type": "string", "example": null }, "index$": 0 }, { "name": "idProperty", "in": "query", "description": "Specifies the property to use for identifying the user. Valid values are 'USER_ID' or 'EMAIL'.", "required": false, "style": "form", "explode": true, "schema": { "type": "string", "example": null, "enum": ["EMAIL", "USER_ID"] }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const user_provisioning_public_user_ref01_ent = client.UserProvisioningPublicUser();
        let user_provisioning_public_user_ref01_data = setup.data.new.user_provisioning_public_user['user_provisioning_public_user_ref01'];
        user_provisioning_public_user_ref01_data = (await user_provisioning_public_user_ref01_ent.create(user_provisioning_public_user_ref01_data)).data();
        (0, node_assert_1.default)(null != user_provisioning_public_user_ref01_data.id);
        // UPDATE
        const user_provisioning_public_user_ref01_data_up0 = {};
        user_provisioning_public_user_ref01_data_up0.id = user_provisioning_public_user_ref01_data.id;
        const user_provisioning_public_user_ref01_markdef_up0 = { name: 'email', value: 'Mark01-user_provisioning_public_user_ref01_' + setup.now };
        user_provisioning_public_user_ref01_data_up0[user_provisioning_public_user_ref01_markdef_up0.name] = user_provisioning_public_user_ref01_markdef_up0.value;
        const user_provisioning_public_user_ref01_resdata_up0 = (await user_provisioning_public_user_ref01_ent.update(user_provisioning_public_user_ref01_data_up0)).data();
        (0, node_assert_1.default)(user_provisioning_public_user_ref01_resdata_up0.id === user_provisioning_public_user_ref01_data_up0.id);
        (0, node_assert_1.default)(user_provisioning_public_user_ref01_resdata_up0[user_provisioning_public_user_ref01_markdef_up0.name] === user_provisioning_public_user_ref01_markdef_up0.value);
        // LOAD
        const user_provisioning_public_user_ref01_match_dt0 = {};
        user_provisioning_public_user_ref01_match_dt0.id = user_provisioning_public_user_ref01_data.id;
        const user_provisioning_public_user_ref01_data_dt0 = (await user_provisioning_public_user_ref01_ent.load(user_provisioning_public_user_ref01_match_dt0)).data();
        (0, node_assert_1.default)(user_provisioning_public_user_ref01_data_dt0.id === user_provisioning_public_user_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user_provisioning_public_user/UserProvisioningPublicUserTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user_provisioning_public_user01', 'user_provisioning_public_user02', 'user_provisioning_public_user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID': idmap,
        'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
        'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_SETTINGS_APIKEY': '',
    });
    idmap = env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID'];
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
//# sourceMappingURL=UserProvisioningPublicUserEntity.test.js.map