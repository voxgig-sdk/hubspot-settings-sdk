import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningCollectionResponsePublicPermissionSetNo, UserProvisioningCollectionResponsePublicPermissionSetNoListMatch } from '../HubspotSettingsTypes';
declare class UserProvisioningCollectionResponsePublicPermissionSetNoEntity extends HubspotSettingsEntityBase<UserProvisioningCollectionResponsePublicPermissionSetNo> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningCollectionResponsePublicPermissionSetNoEntity): UserProvisioningCollectionResponsePublicPermissionSetNoEntity;
    list(this: any, reqmatch?: UserProvisioningCollectionResponsePublicPermissionSetNoListMatch, ctrl?: Control): Promise<UserProvisioningCollectionResponsePublicPermissionSetNoEntity[]>;
}
export { UserProvisioningCollectionResponsePublicPermissionSetNoEntity };
