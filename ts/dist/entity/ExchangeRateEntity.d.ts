import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { ExchangeRate, ExchangeRateCreateData } from '../HubspotSettingsTypes';
declare class ExchangeRateEntity extends HubspotSettingsEntityBase<ExchangeRate> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: ExchangeRateEntity): ExchangeRateEntity;
    create(this: any, reqdata?: ExchangeRateCreateData, ctrl?: Control): Promise<ExchangeRateEntity>;
}
export { ExchangeRateEntity };
