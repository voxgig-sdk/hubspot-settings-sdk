import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { MulticurrencyCentralExchangeRatesInformation, MulticurrencyCentralExchangeRatesInformationLoadMatch } from '../HubspotSettingsTypes';
declare class MulticurrencyCentralExchangeRatesInformationEntity extends HubspotSettingsEntityBase<MulticurrencyCentralExchangeRatesInformation> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: MulticurrencyCentralExchangeRatesInformationEntity): MulticurrencyCentralExchangeRatesInformationEntity;
    load(this: any, reqmatch?: MulticurrencyCentralExchangeRatesInformationLoadMatch, ctrl?: Control): Promise<MulticurrencyCentralExchangeRatesInformationEntity>;
}
export { MulticurrencyCentralExchangeRatesInformationEntity };
