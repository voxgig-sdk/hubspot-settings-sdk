package voxgighubspotsettingssdk

import (
	"github.com/voxgig-sdk/hubspot-settings-sdk/go/core"
	"github.com/voxgig-sdk/hubspot-settings-sdk/go/entity"
	"github.com/voxgig-sdk/hubspot-settings-sdk/go/feature"
	_ "github.com/voxgig-sdk/hubspot-settings-sdk/go/utility"
)

// Type aliases preserve external API.
type HubspotSettingsSDK = core.HubspotSettingsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HubspotSettingsEntity = core.HubspotSettingsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HubspotSettingsError = core.HubspotSettingsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewBasicEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewBasicEntity(client, entopts)
	}
	core.NewExchangeRateEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewExchangeRateEntity(client, entopts)
	}
	core.NewMulticurrencyBatchResponseExchangeRateEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewMulticurrencyBatchResponseExchangeRateEntity(client, entopts)
	}
	core.NewMulticurrencyCentralExchangeRatesInformationEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewMulticurrencyCentralExchangeRatesInformationEntity(client, entopts)
	}
	core.NewMulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewMulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity(client, entopts)
	}
	core.NewMulticurrencyCollectionResponseExchangeRateForwardPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewMulticurrencyCollectionResponseExchangeRateForwardPagingEntity(client, entopts)
	}
	core.NewMulticurrencyCollectionResponseExchangeRateNoPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewMulticurrencyCollectionResponseExchangeRateNoPagingEntity(client, entopts)
	}
	core.NewMulticurrencyCompanyCurrencyEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewMulticurrencyCompanyCurrencyEntity(client, entopts)
	}
	core.NewMulticurrencyExchangeRateEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewMulticurrencyExchangeRateEntity(client, entopts)
	}
	core.NewTaxRateEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewTaxRateEntity(client, entopts)
	}
	core.NewTeamsBatchResponseTeamMemberEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewTeamsBatchResponseTeamMemberEntity(client, entopts)
	}
	core.NewTeamsCollectionResponseTeamMemberResponseForwardPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewTeamsCollectionResponseTeamMemberResponseForwardPagingEntity(client, entopts)
	}
	core.NewTeamsCollectionResponseTeamResponseForwardPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewTeamsCollectionResponseTeamResponseForwardPagingEntity(client, entopts)
	}
	core.NewTeamsTeamEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewTeamsTeamEntity(client, entopts)
	}
	core.NewTeamsTeamMemberEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewTeamsTeamMemberEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserProvisioningCollectionResponsePublicPermissionSetNoEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewUserProvisioningCollectionResponsePublicPermissionSetNoEntity(client, entopts)
	}
	core.NewUserProvisioningCollectionResponsePublicSeatNoPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewUserProvisioningCollectionResponsePublicSeatNoPagingEntity(client, entopts)
	}
	core.NewUserProvisioningCollectionResponsePublicTeamNoPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewUserProvisioningCollectionResponsePublicTeamNoPagingEntity(client, entopts)
	}
	core.NewUserProvisioningCollectionResponsePublicUserForwardPagingEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewUserProvisioningCollectionResponsePublicUserForwardPagingEntity(client, entopts)
	}
	core.NewUserProvisioningPublicUserEntityFunc = func(client *core.HubspotSettingsSDK, entopts map[string]any) core.HubspotSettingsEntity {
		return entity.NewUserProvisioningPublicUserEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHubspotSettingsSDK = core.NewHubspotSettingsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHubspotSettingsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HubspotSettingsSDK  { return NewHubspotSettingsSDK(nil) }
func Test() *HubspotSettingsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
