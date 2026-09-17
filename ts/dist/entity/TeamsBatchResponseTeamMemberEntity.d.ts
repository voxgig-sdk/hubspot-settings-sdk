import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { TeamsBatchResponseTeamMember, TeamsBatchResponseTeamMemberCreateData } from '../HubspotSettingsTypes';
declare class TeamsBatchResponseTeamMemberEntity extends HubspotSettingsEntityBase<TeamsBatchResponseTeamMember> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: TeamsBatchResponseTeamMemberEntity): TeamsBatchResponseTeamMemberEntity;
    create(this: any, reqdata?: TeamsBatchResponseTeamMemberCreateData, ctrl?: Control): Promise<TeamsBatchResponseTeamMemberEntity>;
}
export { TeamsBatchResponseTeamMemberEntity };
