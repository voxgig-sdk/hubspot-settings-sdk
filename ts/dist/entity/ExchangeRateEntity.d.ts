import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { ExchangeRate, ExchangeRateLoadMatch, ExchangeRateCreateData, ExchangeRateUpdateData } from '../HubspotSettingsTypes';
declare class ExchangeRateEntity extends HubspotSettingsEntityBase<ExchangeRate> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: ExchangeRateEntity): ExchangeRateEntity;
    load(this: any, reqmatch?: ExchangeRateLoadMatch, ctrl?: Control): Promise<ExchangeRateEntity>;
    create(this: any, reqdata?: ExchangeRateCreateData, ctrl?: Control): Promise<ExchangeRateEntity>;
    update(this: any, reqdata?: ExchangeRateUpdateData, ctrl?: Control): Promise<ExchangeRateEntity>;
}
export { ExchangeRateEntity };
