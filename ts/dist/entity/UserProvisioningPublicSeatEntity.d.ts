import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningPublicSeat, UserProvisioningPublicSeatListMatch } from '../HubspotSettingsTypes';
declare class UserProvisioningPublicSeatEntity extends HubspotSettingsEntityBase<UserProvisioningPublicSeat> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningPublicSeatEntity): UserProvisioningPublicSeatEntity;
    list(this: any, reqmatch?: UserProvisioningPublicSeatListMatch, ctrl?: Control): Promise<UserProvisioningPublicSeatEntity[]>;
}
export { UserProvisioningPublicSeatEntity };
