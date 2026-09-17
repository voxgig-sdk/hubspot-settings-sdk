import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { TaxRate, TaxRateLoadMatch, TaxRateListMatch } from '../HubspotSettingsTypes';
declare class TaxRateEntity extends HubspotSettingsEntityBase<TaxRate> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: TaxRateEntity): TaxRateEntity;
    load(this: any, reqmatch?: TaxRateLoadMatch, ctrl?: Control): Promise<TaxRateEntity>;
    list(this: any, reqmatch?: TaxRateListMatch, ctrl?: Control): Promise<TaxRateEntity[]>;
}
export { TaxRateEntity };
