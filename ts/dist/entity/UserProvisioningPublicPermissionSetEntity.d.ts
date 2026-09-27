import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningPublicPermissionSet, UserProvisioningPublicPermissionSetListMatch } from '../HubspotSettingsTypes';
declare class UserProvisioningPublicPermissionSetEntity extends HubspotSettingsEntityBase<UserProvisioningPublicPermissionSet> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningPublicPermissionSetEntity): UserProvisioningPublicPermissionSetEntity;
    list(this: any, reqmatch?: UserProvisioningPublicPermissionSetListMatch, ctrl?: Control): Promise<UserProvisioningPublicPermissionSetEntity[]>;
}
export { UserProvisioningPublicPermissionSetEntity };
