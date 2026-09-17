import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { TeamsCollectionResponseTeamMemberResponseForwardPaging, TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch } from '../HubspotSettingsTypes';
declare class TeamsCollectionResponseTeamMemberResponseForwardPagingEntity extends HubspotSettingsEntityBase<TeamsCollectionResponseTeamMemberResponseForwardPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: TeamsCollectionResponseTeamMemberResponseForwardPagingEntity): TeamsCollectionResponseTeamMemberResponseForwardPagingEntity;
    list(this: any, reqmatch?: TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch, ctrl?: Control): Promise<TeamsCollectionResponseTeamMemberResponseForwardPagingEntity[]>;
}
export { TeamsCollectionResponseTeamMemberResponseForwardPagingEntity };
