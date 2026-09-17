import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { Basic, BasicRemoveMatch } from '../HubspotSettingsTypes';
declare class BasicEntity extends HubspotSettingsEntityBase<Basic> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: BasicEntity): BasicEntity;
    remove(this: any, reqmatch?: BasicRemoveMatch, ctrl?: Control): Promise<BasicEntity>;
}
export { BasicEntity };
