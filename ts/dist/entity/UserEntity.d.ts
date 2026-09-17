import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { User, UserRemoveMatch } from '../HubspotSettingsTypes';
declare class UserEntity extends HubspotSettingsEntityBase<User> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    remove(this: any, reqmatch?: UserRemoveMatch, ctrl?: Control): Promise<UserEntity>;
}
export { UserEntity };
