import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { MulticurrencyCompanyCurrency, MulticurrencyCompanyCurrencyLoadMatch, MulticurrencyCompanyCurrencyUpdateData } from '../HubspotSettingsTypes';
declare class MulticurrencyCompanyCurrencyEntity extends HubspotSettingsEntityBase<MulticurrencyCompanyCurrency> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: MulticurrencyCompanyCurrencyEntity): MulticurrencyCompanyCurrencyEntity;
    load(this: any, reqmatch?: MulticurrencyCompanyCurrencyLoadMatch, ctrl?: Control): Promise<MulticurrencyCompanyCurrencyEntity>;
    update(this: any, reqdata?: MulticurrencyCompanyCurrencyUpdateData, ctrl?: Control): Promise<MulticurrencyCompanyCurrencyEntity>;
}
export { MulticurrencyCompanyCurrencyEntity };
