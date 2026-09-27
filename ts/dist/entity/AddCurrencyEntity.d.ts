import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { AddCurrency, AddCurrencyCreateData } from '../HubspotSettingsTypes';
declare class AddCurrencyEntity extends HubspotSettingsEntityBase<AddCurrency> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: AddCurrencyEntity): AddCurrencyEntity;
    create(this: any, reqdata?: AddCurrencyCreateData, ctrl?: Control): Promise<AddCurrencyEntity>;
}
export { AddCurrencyEntity };
