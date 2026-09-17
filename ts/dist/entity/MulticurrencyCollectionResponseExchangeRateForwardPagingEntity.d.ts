import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { MulticurrencyCollectionResponseExchangeRateForwardPaging, MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch } from '../HubspotSettingsTypes';
declare class MulticurrencyCollectionResponseExchangeRateForwardPagingEntity extends HubspotSettingsEntityBase<MulticurrencyCollectionResponseExchangeRateForwardPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: MulticurrencyCollectionResponseExchangeRateForwardPagingEntity): MulticurrencyCollectionResponseExchangeRateForwardPagingEntity;
    list(this: any, reqmatch?: MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch, ctrl?: Control): Promise<MulticurrencyCollectionResponseExchangeRateForwardPagingEntity[]>;
}
export { MulticurrencyCollectionResponseExchangeRateForwardPagingEntity };
