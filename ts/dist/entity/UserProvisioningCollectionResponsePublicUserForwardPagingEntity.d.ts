import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningCollectionResponsePublicUserForwardPaging, UserProvisioningCollectionResponsePublicUserForwardPagingListMatch } from '../HubspotSettingsTypes';
declare class UserProvisioningCollectionResponsePublicUserForwardPagingEntity extends HubspotSettingsEntityBase<UserProvisioningCollectionResponsePublicUserForwardPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningCollectionResponsePublicUserForwardPagingEntity): UserProvisioningCollectionResponsePublicUserForwardPagingEntity;
    list(this: any, reqmatch?: UserProvisioningCollectionResponsePublicUserForwardPagingListMatch, ctrl?: Control): Promise<UserProvisioningCollectionResponsePublicUserForwardPagingEntity[]>;
}
export { UserProvisioningCollectionResponsePublicUserForwardPagingEntity };
