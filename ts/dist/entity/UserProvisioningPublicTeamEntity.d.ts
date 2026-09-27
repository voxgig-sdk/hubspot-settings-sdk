import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UserProvisioningPublicTeam, UserProvisioningPublicTeamListMatch } from '../HubspotSettingsTypes';
declare class UserProvisioningPublicTeamEntity extends HubspotSettingsEntityBase<UserProvisioningPublicTeam> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UserProvisioningPublicTeamEntity): UserProvisioningPublicTeamEntity;
    list(this: any, reqmatch?: UserProvisioningPublicTeamListMatch, ctrl?: Control): Promise<UserProvisioningPublicTeamEntity[]>;
}
export { UserProvisioningPublicTeamEntity };
