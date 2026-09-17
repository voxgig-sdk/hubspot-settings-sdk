import { Context } from './Context';
declare class HubspotSettingsError extends Error {
    isHubspotSettingsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HubspotSettingsError };
