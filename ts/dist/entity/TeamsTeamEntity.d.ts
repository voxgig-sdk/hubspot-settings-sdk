import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { TeamsTeam, TeamsTeamLoadMatch, TeamsTeamCreateData, TeamsTeamUpdateData } from '../HubspotSettingsTypes';
declare class TeamsTeamEntity extends HubspotSettingsEntityBase<TeamsTeam> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: TeamsTeamEntity): TeamsTeamEntity;
    load(this: any, reqmatch?: TeamsTeamLoadMatch, ctrl?: Control): Promise<TeamsTeamEntity>;
    create(this: any, reqdata?: TeamsTeamCreateData, ctrl?: Control): Promise<TeamsTeamEntity>;
    update(this: any, reqdata?: TeamsTeamUpdateData, ctrl?: Control): Promise<TeamsTeamEntity>;
}
export { TeamsTeamEntity };
