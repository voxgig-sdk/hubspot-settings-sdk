import { HubspotSettingsEntityBase } from '../HubspotSettingsEntityBase';
import type { HubspotSettingsSDK } from '../HubspotSettingsSDK';
import type { Control } from '../types';
import type { MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging, MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch } from '../HubspotSettingsTypes';
declare class MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity extends HubspotSettingsEntityBase<MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging> {
    constructor(client: HubspotSettingsSDK, entopts: any);
    make(this: MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity): MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity;
    list(this: any, reqmatch?: MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch, ctrl?: Control): Promise<MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity[]>;
}
export { MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity };
