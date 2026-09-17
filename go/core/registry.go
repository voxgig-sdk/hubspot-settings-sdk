package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewBasicEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewExchangeRateEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewMulticurrencyBatchResponseExchangeRateEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewMulticurrencyCentralExchangeRatesInformationEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewMulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewMulticurrencyCollectionResponseExchangeRateForwardPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewMulticurrencyCollectionResponseExchangeRateNoPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewMulticurrencyCompanyCurrencyEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewMulticurrencyExchangeRateEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewTaxRateEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewTeamsBatchResponseTeamMemberEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewTeamsCollectionResponseTeamMemberResponseForwardPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewTeamsCollectionResponseTeamResponseForwardPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewTeamsTeamEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewTeamsTeamMemberEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewUserEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewUserProvisioningCollectionResponsePublicPermissionSetNoEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewUserProvisioningCollectionResponsePublicSeatNoPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewUserProvisioningCollectionResponsePublicTeamNoPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewUserProvisioningCollectionResponsePublicUserForwardPagingEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

var NewUserProvisioningPublicUserEntityFunc func(client *HubspotSettingsSDK, entopts map[string]any) HubspotSettingsEntity

