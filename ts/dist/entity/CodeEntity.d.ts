import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { Code, CodeListMatch } from '../HubspotSettingsTypes';
declare class CodeEntity extends HubspotSettingsEntityBase<Code> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: CodeEntity): CodeEntity;
    list(this: any, reqmatch?: CodeListMatch, ctrl?: Control): Promise<CodeEntity[]>;
}
export { CodeEntity };
