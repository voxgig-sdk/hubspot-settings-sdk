import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { MulticurrencyExchangeRate, MulticurrencyExchangeRateLoadMatch, MulticurrencyExchangeRateCreateData, MulticurrencyExchangeRateUpdateData } from '../HubspotSettingsTypes';
declare class MulticurrencyExchangeRateEntity extends HubspotSettingsEntityBase<MulticurrencyExchangeRate> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: MulticurrencyExchangeRateEntity): MulticurrencyExchangeRateEntity;
    load(this: any, reqmatch?: MulticurrencyExchangeRateLoadMatch, ctrl?: Control): Promise<MulticurrencyExchangeRateEntity>;
    create(this: any, reqdata?: MulticurrencyExchangeRateCreateData, ctrl?: Control): Promise<MulticurrencyExchangeRateEntity>;
    update(this: any, reqdata?: MulticurrencyExchangeRateUpdateData, ctrl?: Control): Promise<MulticurrencyExchangeRateEntity>;
}
export { MulticurrencyExchangeRateEntity };
