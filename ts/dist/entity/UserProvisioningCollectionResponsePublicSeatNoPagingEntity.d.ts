import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningCollectionResponsePublicSeatNoPaging, UserProvisioningCollectionResponsePublicSeatNoPagingListMatch } from '../HubspotSettingsTypes';
declare class UserProvisioningCollectionResponsePublicSeatNoPagingEntity extends HubspotSettingsEntityBase<UserProvisioningCollectionResponsePublicSeatNoPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningCollectionResponsePublicSeatNoPagingEntity): UserProvisioningCollectionResponsePublicSeatNoPagingEntity;
    list(this: any, reqmatch?: UserProvisioningCollectionResponsePublicSeatNoPagingListMatch, ctrl?: Control): Promise<UserProvisioningCollectionResponsePublicSeatNoPagingEntity[]>;
}
export { UserProvisioningCollectionResponsePublicSeatNoPagingEntity };
