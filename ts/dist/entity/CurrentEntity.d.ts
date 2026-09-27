import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { Current, CurrentListMatch } from '../HubspotSettingsTypes';
declare class CurrentEntity extends HubspotSettingsEntityBase<Current> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: CurrentEntity): CurrentEntity;
    list(this: any, reqmatch?: CurrentListMatch, ctrl?: Control): Promise<CurrentEntity[]>;
}
export { CurrentEntity };
