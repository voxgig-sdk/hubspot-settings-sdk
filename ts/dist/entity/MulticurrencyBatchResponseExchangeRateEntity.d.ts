import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { MulticurrencyBatchResponseExchangeRate, MulticurrencyBatchResponseExchangeRateCreateData } from '../HubspotSettingsTypes';
declare class MulticurrencyBatchResponseExchangeRateEntity extends HubspotSettingsEntityBase<MulticurrencyBatchResponseExchangeRate> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: MulticurrencyBatchResponseExchangeRateEntity): MulticurrencyBatchResponseExchangeRateEntity;
    create(this: any, reqdata?: MulticurrencyBatchResponseExchangeRateCreateData, ctrl?: Control): Promise<MulticurrencyBatchResponseExchangeRateEntity>;
}
export { MulticurrencyBatchResponseExchangeRateEntity };
