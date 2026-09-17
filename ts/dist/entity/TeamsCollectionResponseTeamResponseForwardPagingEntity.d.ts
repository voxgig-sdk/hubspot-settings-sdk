import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { TeamsCollectionResponseTeamResponseForwardPaging, TeamsCollectionResponseTeamResponseForwardPagingListMatch } from '../HubspotSettingsTypes';
declare class TeamsCollectionResponseTeamResponseForwardPagingEntity extends HubspotSettingsEntityBase<TeamsCollectionResponseTeamResponseForwardPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: TeamsCollectionResponseTeamResponseForwardPagingEntity): TeamsCollectionResponseTeamResponseForwardPagingEntity;
    list(this: any, reqmatch?: TeamsCollectionResponseTeamResponseForwardPagingListMatch, ctrl?: Control): Promise<TeamsCollectionResponseTeamResponseForwardPagingEntity[]>;
}
export { TeamsCollectionResponseTeamResponseForwardPagingEntity };
