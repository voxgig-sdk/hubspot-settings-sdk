// Typed models for the HubspotSettings SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-settings-sdk/go/core"
)

// Basic is the typed data model for the basic entity.
type Basic struct {
}

// BasicRemoveMatch is the typed request payload for Basic.RemoveTyped.
type BasicRemoveMatch struct {
	TeamId string `json:"team_id"`
}

// ExchangeRate is the typed data model for the exchange_rate entity.
type ExchangeRate struct {
}

// ExchangeRateCreateData is the typed request payload for ExchangeRate.CreateTyped.
type ExchangeRateCreateData struct {
}

// MulticurrencyBatchResponseExchangeRate is the typed data model for the multicurrency_batch_response_exchange_rate entity.
type MulticurrencyBatchResponseExchangeRate struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// MulticurrencyBatchResponseExchangeRateCreateData is the typed request payload for MulticurrencyBatchResponseExchangeRate.CreateTyped.
type MulticurrencyBatchResponseExchangeRateCreateData struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// MulticurrencyCentralExchangeRatesInformation is the typed data model for the multicurrency_central_exchange_rates_information entity.
type MulticurrencyCentralExchangeRatesInformation struct {
	CentralExchangeRatesEnabled bool `json:"centralExchangeRatesEnabled"`
}

// MulticurrencyCentralExchangeRatesInformationLoadMatch is the typed request payload for MulticurrencyCentralExchangeRatesInformation.LoadTyped.
type MulticurrencyCentralExchangeRatesInformationLoadMatch struct {
	CentralExchangeRatesEnabled *bool `json:"centralExchangeRatesEnabled,omitempty"`
}

// MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging is the typed data model for the multicurrency_collection_response_currency_code_info_no_paging entity.
type MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging struct {
	CurrencyCode string `json:"currencyCode"`
	CurrencyName string `json:"currencyName"`
}

// MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch is the typed request payload for MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging.ListTyped.
type MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch struct {
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrencyName *string `json:"currencyName,omitempty"`
}

// MulticurrencyCollectionResponseExchangeRateForwardPaging is the typed data model for the multicurrency_collection_response_exchange_rate_forward_paging entity.
type MulticurrencyCollectionResponseExchangeRateForwardPaging struct {
	ConversionRate float64 `json:"conversionRate"`
	CreatedAt string `json:"createdAt"`
	EffectiveAt string `json:"effectiveAt"`
	FromCurrencyCode string `json:"fromCurrencyCode"`
	Id string `json:"id"`
	ToCurrencyCode string `json:"toCurrencyCode"`
	UpdatedAt string `json:"updatedAt"`
	VisibleInUI bool `json:"visibleInUI"`
}

// MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch is the typed request payload for MulticurrencyCollectionResponseExchangeRateForwardPaging.ListTyped.
type MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch struct {
	After *string `json:"after,omitempty"`
	FromCurrencyCode *string `json:"from_currency_code,omitempty"`
	Limit *int `json:"limit,omitempty"`
	ToCurrencyCode *string `json:"to_currency_code,omitempty"`
}

// MulticurrencyCollectionResponseExchangeRateNoPaging is the typed data model for the multicurrency_collection_response_exchange_rate_no_paging entity.
type MulticurrencyCollectionResponseExchangeRateNoPaging struct {
	ConversionRate float64 `json:"conversionRate"`
	CreatedAt string `json:"createdAt"`
	EffectiveAt string `json:"effectiveAt"`
	FromCurrencyCode string `json:"fromCurrencyCode"`
	Id string `json:"id"`
	ToCurrencyCode string `json:"toCurrencyCode"`
	UpdatedAt string `json:"updatedAt"`
	VisibleInUI bool `json:"visibleInUI"`
}

// MulticurrencyCollectionResponseExchangeRateNoPagingListMatch is the typed request payload for MulticurrencyCollectionResponseExchangeRateNoPaging.ListTyped.
type MulticurrencyCollectionResponseExchangeRateNoPagingListMatch struct {
	ConversionRate *float64 `json:"conversionRate,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EffectiveAt *string `json:"effectiveAt,omitempty"`
	FromCurrencyCode *string `json:"fromCurrencyCode,omitempty"`
	Id *string `json:"id,omitempty"`
	ToCurrencyCode *string `json:"toCurrencyCode,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	VisibleInUI *bool `json:"visibleInUI,omitempty"`
}

// MulticurrencyCompanyCurrency is the typed data model for the multicurrency_company_currency entity.
type MulticurrencyCompanyCurrency struct {
	CreatedAt string `json:"createdAt"`
	CurrencyCode string `json:"currencyCode"`
	Id string `json:"id"`
}

// MulticurrencyCompanyCurrencyLoadMatch is the typed request payload for MulticurrencyCompanyCurrency.LoadTyped.
type MulticurrencyCompanyCurrencyLoadMatch struct {
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	Id string `json:"id"`
}

// MulticurrencyCompanyCurrencyUpdateData is the typed request payload for MulticurrencyCompanyCurrency.UpdateTyped.
type MulticurrencyCompanyCurrencyUpdateData struct {
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	Id *string `json:"id,omitempty"`
}

// MulticurrencyExchangeRate is the typed data model for the multicurrency_exchange_rate entity.
type MulticurrencyExchangeRate struct {
	ConversionRate float64 `json:"conversionRate"`
	CreatedAt string `json:"createdAt"`
	CurrencyCode string `json:"currencyCode"`
	EffectiveAt string `json:"effectiveAt"`
	FromCurrencyCode string `json:"fromCurrencyCode"`
	Id string `json:"id"`
	ToCurrencyCode string `json:"toCurrencyCode"`
	UpdatedAt string `json:"updatedAt"`
	VisibleInUI bool `json:"visibleInUI"`
}

// MulticurrencyExchangeRateLoadMatch is the typed request payload for MulticurrencyExchangeRate.LoadTyped.
type MulticurrencyExchangeRateLoadMatch struct {
	Id string `json:"id"`
}

// MulticurrencyExchangeRateCreateData is the typed request payload for MulticurrencyExchangeRate.CreateTyped.
type MulticurrencyExchangeRateCreateData struct {
	ConversionRate float64 `json:"conversionRate"`
	CreatedAt string `json:"createdAt"`
	CurrencyCode string `json:"currencyCode"`
	EffectiveAt string `json:"effectiveAt"`
	FromCurrencyCode string `json:"fromCurrencyCode"`
	Id string `json:"id"`
	ToCurrencyCode string `json:"toCurrencyCode"`
	UpdatedAt string `json:"updatedAt"`
	VisibleInUI bool `json:"visibleInUI"`
}

// MulticurrencyExchangeRateUpdateData is the typed request payload for MulticurrencyExchangeRate.UpdateTyped.
type MulticurrencyExchangeRateUpdateData struct {
	Id string `json:"id"`
	ConversionRate *float64 `json:"conversionRate,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	EffectiveAt *string `json:"effectiveAt,omitempty"`
	FromCurrencyCode *string `json:"fromCurrencyCode,omitempty"`
	ToCurrencyCode *string `json:"toCurrencyCode,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	VisibleInUI *bool `json:"visibleInUI,omitempty"`
}

// TaxRate is the typed data model for the tax_rate entity.
type TaxRate struct {
	Active bool `json:"active"`
	CreatedAt string `json:"createdAt"`
	Id string `json:"id"`
	Label string `json:"label"`
	Name string `json:"name"`
	PercentageRate float64 `json:"percentageRate"`
	UpdatedAt string `json:"updatedAt"`
}

// TaxRateLoadMatch is the typed request payload for TaxRate.LoadTyped.
type TaxRateLoadMatch struct {
	Id string `json:"id"`
}

// TaxRateListMatch is the typed request payload for TaxRate.ListTyped.
type TaxRateListMatch struct {
	Active *bool `json:"active,omitempty"`
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// TeamsBatchResponseTeamMember is the typed data model for the teams_batch_response_team_member entity.
type TeamsBatchResponseTeamMember struct {
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// TeamsBatchResponseTeamMemberCreateData is the typed request payload for TeamsBatchResponseTeamMember.CreateTyped.
type TeamsBatchResponseTeamMemberCreateData struct {
	F202609Id string `json:"2026_09_id"`
	CompletedAt string `json:"completedAt"`
	Errors *[]any `json:"errors,omitempty"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	NumErrors *int `json:"numErrors,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// TeamsCollectionResponseTeamMemberResponseForwardPaging is the typed data model for the teams_collection_response_team_member_response_forward_paging entity.
type TeamsCollectionResponseTeamMemberResponseForwardPaging struct {
	Type string `json:"type"`
	UserId string `json:"userId"`
}

// TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch is the typed request payload for TeamsCollectionResponseTeamMemberResponseForwardPaging.ListTyped.
type TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch struct {
	F202609Id string `json:"2026_09_id"`
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// TeamsCollectionResponseTeamResponseForwardPaging is the typed data model for the teams_collection_response_team_response_forward_paging entity.
type TeamsCollectionResponseTeamResponseForwardPaging struct {
	Id string `json:"id"`
	Name string `json:"name"`
	ParentTeamId *string `json:"parentTeamId,omitempty"`
}

// TeamsCollectionResponseTeamResponseForwardPagingListMatch is the typed request payload for TeamsCollectionResponseTeamResponseForwardPaging.ListTyped.
type TeamsCollectionResponseTeamResponseForwardPagingListMatch struct {
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// TeamsTeam is the typed data model for the teams_team entity.
type TeamsTeam struct {
	Id string `json:"id"`
	Members []any `json:"members"`
	Name string `json:"name"`
	ParentTeamId *string `json:"parentTeamId,omitempty"`
}

// TeamsTeamLoadMatch is the typed request payload for TeamsTeam.LoadTyped.
type TeamsTeamLoadMatch struct {
	TeamId string `json:"team_id"`
}

// TeamsTeamCreateData is the typed request payload for TeamsTeam.CreateTyped.
type TeamsTeamCreateData struct {
	Id string `json:"id"`
	Members []any `json:"members"`
	Name string `json:"name"`
	ParentTeamId *string `json:"parentTeamId,omitempty"`
}

// TeamsTeamUpdateData is the typed request payload for TeamsTeam.UpdateTyped.
type TeamsTeamUpdateData struct {
	TeamId string `json:"team_id"`
	Id *string `json:"id,omitempty"`
	Members *[]any `json:"members,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentTeamId *string `json:"parentTeamId,omitempty"`
}

// TeamsTeamMember is the typed data model for the teams_team_member entity.
type TeamsTeamMember struct {
	Type string `json:"type"`
	UserId string `json:"userId"`
}

// TeamsTeamMemberCreateData is the typed request payload for TeamsTeamMember.CreateTyped.
type TeamsTeamMemberCreateData struct {
	F202609Id string `json:"2026_09_id"`
	Type string `json:"type"`
	UserId string `json:"userId"`
}

// User is the typed data model for the user entity.
type User struct {
}

// UserRemoveMatch is the typed request payload for User.RemoveTyped.
type UserRemoveMatch struct {
	UserId string `json:"user_id"`
	IdProperty *string `json:"id_property,omitempty"`
}

// UserProvisioningCollectionResponsePublicPermissionSetNo is the typed data model for the user_provisioning_collection_response_public_permission_set_no entity.
type UserProvisioningCollectionResponsePublicPermissionSetNo struct {
	Id string `json:"id"`
	Name string `json:"name"`
	RequiresBillingWrite bool `json:"requiresBillingWrite"`
}

// UserProvisioningCollectionResponsePublicPermissionSetNoListMatch is the typed request payload for UserProvisioningCollectionResponsePublicPermissionSetNo.ListTyped.
type UserProvisioningCollectionResponsePublicPermissionSetNoListMatch struct {
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	RequiresBillingWrite *bool `json:"requiresBillingWrite,omitempty"`
}

// UserProvisioningCollectionResponsePublicSeatNoPaging is the typed data model for the user_provisioning_collection_response_public_seat_no_paging entity.
type UserProvisioningCollectionResponsePublicSeatNoPaging struct {
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	RemainingSeats *int `json:"remainingSeats,omitempty"`
}

// UserProvisioningCollectionResponsePublicSeatNoPagingListMatch is the typed request payload for UserProvisioningCollectionResponsePublicSeatNoPaging.ListTyped.
type UserProvisioningCollectionResponsePublicSeatNoPagingListMatch struct {
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	RemainingSeats *int `json:"remainingSeats,omitempty"`
}

// UserProvisioningCollectionResponsePublicTeamNoPaging is the typed data model for the user_provisioning_collection_response_public_team_no_paging entity.
type UserProvisioningCollectionResponsePublicTeamNoPaging struct {
	Id string `json:"id"`
	Name string `json:"name"`
	SecondaryUserIds []any `json:"secondaryUserIds"`
	UserIds []any `json:"userIds"`
}

// UserProvisioningCollectionResponsePublicTeamNoPagingListMatch is the typed request payload for UserProvisioningCollectionResponsePublicTeamNoPaging.ListTyped.
type UserProvisioningCollectionResponsePublicTeamNoPagingListMatch struct {
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	SecondaryUserIds *[]any `json:"secondaryUserIds,omitempty"`
	UserIds *[]any `json:"userIds,omitempty"`
}

// UserProvisioningCollectionResponsePublicUserForwardPaging is the typed data model for the user_provisioning_collection_response_public_user_forward_paging entity.
type UserProvisioningCollectionResponsePublicUserForwardPaging struct {
	Email string `json:"email"`
	FirstName *string `json:"firstName,omitempty"`
	Id string `json:"id"`
	LastName *string `json:"lastName,omitempty"`
	PrimaryTeamId *string `json:"primaryTeamId,omitempty"`
	RoleId *string `json:"roleId,omitempty"`
	RoleIds []any `json:"roleIds"`
	SeatNames *[]any `json:"seatNames,omitempty"`
	SecondaryTeamIds *[]any `json:"secondaryTeamIds,omitempty"`
	SendWelcomeEmail *bool `json:"sendWelcomeEmail,omitempty"`
	SuperAdmin bool `json:"superAdmin"`
}

// UserProvisioningCollectionResponsePublicUserForwardPagingListMatch is the typed request payload for UserProvisioningCollectionResponsePublicUserForwardPaging.ListTyped.
type UserProvisioningCollectionResponsePublicUserForwardPagingListMatch struct {
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// UserProvisioningPublicUser is the typed data model for the user_provisioning_public_user entity.
type UserProvisioningPublicUser struct {
	Email string `json:"email"`
	FirstName *string `json:"firstName,omitempty"`
	Id string `json:"id"`
	LastName *string `json:"lastName,omitempty"`
	PrimaryTeamId *string `json:"primaryTeamId,omitempty"`
	RoleId *string `json:"roleId,omitempty"`
	RoleIds []any `json:"roleIds"`
	SeatNames *[]any `json:"seatNames,omitempty"`
	SecondaryTeamIds *[]any `json:"secondaryTeamIds,omitempty"`
	SendWelcomeEmail *bool `json:"sendWelcomeEmail,omitempty"`
	SuperAdmin bool `json:"superAdmin"`
}

// UserProvisioningPublicUserLoadMatch is the typed request payload for UserProvisioningPublicUser.LoadTyped.
type UserProvisioningPublicUserLoadMatch struct {
	UserId string `json:"user_id"`
	IdProperty *string `json:"id_property,omitempty"`
}

// UserProvisioningPublicUserCreateData is the typed request payload for UserProvisioningPublicUser.CreateTyped.
type UserProvisioningPublicUserCreateData struct {
	Email string `json:"email"`
	FirstName *string `json:"firstName,omitempty"`
	Id string `json:"id"`
	LastName *string `json:"lastName,omitempty"`
	PrimaryTeamId *string `json:"primaryTeamId,omitempty"`
	RoleId *string `json:"roleId,omitempty"`
	RoleIds []any `json:"roleIds"`
	SeatNames *[]any `json:"seatNames,omitempty"`
	SecondaryTeamIds *[]any `json:"secondaryTeamIds,omitempty"`
	SendWelcomeEmail *bool `json:"sendWelcomeEmail,omitempty"`
	SuperAdmin bool `json:"superAdmin"`
}

// UserProvisioningPublicUserUpdateData is the typed request payload for UserProvisioningPublicUser.UpdateTyped.
type UserProvisioningPublicUserUpdateData struct {
	UserId string `json:"user_id"`
	IdProperty *string `json:"id_property,omitempty"`
	Email *string `json:"email,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	Id *string `json:"id,omitempty"`
	LastName *string `json:"lastName,omitempty"`
	PrimaryTeamId *string `json:"primaryTeamId,omitempty"`
	RoleId *string `json:"roleId,omitempty"`
	RoleIds *[]any `json:"roleIds,omitempty"`
	SeatNames *[]any `json:"seatNames,omitempty"`
	SecondaryTeamIds *[]any `json:"secondaryTeamIds,omitempty"`
	SendWelcomeEmail *bool `json:"sendWelcomeEmail,omitempty"`
	SuperAdmin *bool `json:"superAdmin,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
