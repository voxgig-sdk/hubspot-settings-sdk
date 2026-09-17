import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningCollectionResponsePublicTeamNoPaging, UserProvisioningCollectionResponsePublicTeamNoPagingListMatch } from '../HubspotSettingsTypes';
declare class UserProvisioningCollectionResponsePublicTeamNoPagingEntity extends HubspotSettingsEntityBase<UserProvisioningCollectionResponsePublicTeamNoPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningCollectionResponsePublicTeamNoPagingEntity): UserProvisioningCollectionResponsePublicTeamNoPagingEntity;
    list(this: any, reqmatch?: UserProvisioningCollectionResponsePublicTeamNoPagingListMatch, ctrl?: Control): Promise<UserProvisioningCollectionResponsePublicTeamNoPagingEntity[]>;
}
export { UserProvisioningCollectionResponsePublicTeamNoPagingEntity };
