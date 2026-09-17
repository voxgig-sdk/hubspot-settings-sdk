import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { TeamsTeamMember, TeamsTeamMemberCreateData } from '../HubspotSettingsTypes';
declare class TeamsTeamMemberEntity extends HubspotSettingsEntityBase<TeamsTeamMember> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: TeamsTeamMemberEntity): TeamsTeamMemberEntity;
    create(this: any, reqdata?: TeamsTeamMemberCreateData, ctrl?: Control): Promise<TeamsTeamMemberEntity>;
}
export { TeamsTeamMemberEntity };
