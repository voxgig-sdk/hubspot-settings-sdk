import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { MulticurrencyCollectionResponseExchangeRateNoPaging, MulticurrencyCollectionResponseExchangeRateNoPagingListMatch } from '../HubspotSettingsTypes';
declare class MulticurrencyCollectionResponseExchangeRateNoPagingEntity extends HubspotSettingsEntityBase<MulticurrencyCollectionResponseExchangeRateNoPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: MulticurrencyCollectionResponseExchangeRateNoPagingEntity): MulticurrencyCollectionResponseExchangeRateNoPagingEntity;
    list(this: any, reqmatch?: MulticurrencyCollectionResponseExchangeRateNoPagingListMatch, ctrl?: Control): Promise<MulticurrencyCollectionResponseExchangeRateNoPagingEntity[]>;
}
export { MulticurrencyCollectionResponseExchangeRateNoPagingEntity };
