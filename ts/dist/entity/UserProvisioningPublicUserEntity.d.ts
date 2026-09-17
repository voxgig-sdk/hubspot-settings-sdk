import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningPublicUser, UserProvisioningPublicUserLoadMatch, UserProvisioningPublicUserCreateData, UserProvisioningPublicUserUpdateData } from '../HubspotSettingsTypes';
declare class UserProvisioningPublicUserEntity extends HubspotSettingsEntityBase<UserProvisioningPublicUser> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningPublicUserEntity): UserProvisioningPublicUserEntity;
    load(this: any, reqmatch?: UserProvisioningPublicUserLoadMatch, ctrl?: Control): Promise<UserProvisioningPublicUserEntity>;
    create(this: any, reqdata?: UserProvisioningPublicUserCreateData, ctrl?: Control): Promise<UserProvisioningPublicUserEntity>;
    update(this: any, reqdata?: UserProvisioningPublicUserUpdateData, ctrl?: Control): Promise<UserProvisioningPublicUserEntity>;
}
export { UserProvisioningPublicUserEntity };
