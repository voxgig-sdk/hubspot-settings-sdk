"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubspotSettingsError = void 0;
class HubspotSettingsError extends Error {
    isHubspotSettingsError = true;
    sdk = 'HubspotSettings';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.HubspotSettingsError = HubspotSettingsError;
//# sourceMappingURL=HubspotSettingsError.js.map