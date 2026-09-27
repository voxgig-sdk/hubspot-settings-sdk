import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { UnsupportedCurrency, UnsupportedCurrencyListMatch } from '../HubspotSettingsTypes';
declare class UnsupportedCurrencyEntity extends HubspotSettingsEntityBase<UnsupportedCurrency> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: UnsupportedCurrencyEntity): UnsupportedCurrencyEntity;
    list(this: any, reqmatch?: UnsupportedCurrencyListMatch, ctrl?: Control): Promise<UnsupportedCurrencyEntity[]>;
}
export { UnsupportedCurrencyEntity };
