-- Typed models for the HubspotSettings SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Basic

---@class BasicRemoveMatch
---@field team_id string

---@class ExchangeRate

---@class ExchangeRateCreateData

---@class MulticurrencyBatchResponseExchangeRate
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class MulticurrencyBatchResponseExchangeRateCreateData
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class MulticurrencyCentralExchangeRatesInformation
---@field centralExchangeRatesEnabled boolean

---@class MulticurrencyCentralExchangeRatesInformationLoadMatch
---@field centralExchangeRatesEnabled? boolean

---@class MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging
---@field currencyCode string
---@field currencyName string

---@class MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch
---@field currencyCode? string
---@field currencyName? string

---@class MulticurrencyCollectionResponseExchangeRateForwardPaging
---@field conversionRate number
---@field createdAt string
---@field effectiveAt string
---@field fromCurrencyCode string
---@field id string
---@field toCurrencyCode string
---@field updatedAt string
---@field visibleInUI boolean

---@class MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch
---@field after? string
---@field from_currency_code? string
---@field limit? number
---@field to_currency_code? string

---@class MulticurrencyCollectionResponseExchangeRateNoPaging
---@field conversionRate number
---@field createdAt string
---@field effectiveAt string
---@field fromCurrencyCode string
---@field id string
---@field toCurrencyCode string
---@field updatedAt string
---@field visibleInUI boolean

---@class MulticurrencyCollectionResponseExchangeRateNoPagingListMatch
---@field conversionRate? number
---@field createdAt? string
---@field effectiveAt? string
---@field fromCurrencyCode? string
---@field id? string
---@field toCurrencyCode? string
---@field updatedAt? string
---@field visibleInUI? boolean

---@class MulticurrencyCompanyCurrency
---@field createdAt string
---@field currencyCode string
---@field id string

---@class MulticurrencyCompanyCurrencyLoadMatch
---@field createdAt? string
---@field currencyCode? string
---@field id string

---@class MulticurrencyCompanyCurrencyUpdateData
---@field createdAt? string
---@field currencyCode? string
---@field id? string

---@class MulticurrencyExchangeRate
---@field conversionRate number
---@field createdAt string
---@field currencyCode string
---@field effectiveAt string
---@field fromCurrencyCode string
---@field id string
---@field toCurrencyCode string
---@field updatedAt string
---@field visibleInUI boolean

---@class MulticurrencyExchangeRateLoadMatch
---@field id string

---@class MulticurrencyExchangeRateCreateData
---@field conversionRate number
---@field createdAt string
---@field currencyCode string
---@field effectiveAt string
---@field fromCurrencyCode string
---@field id string
---@field toCurrencyCode string
---@field updatedAt string
---@field visibleInUI boolean

---@class MulticurrencyExchangeRateUpdateData
---@field id string
---@field conversionRate? number
---@field createdAt? string
---@field currencyCode? string
---@field effectiveAt? string
---@field fromCurrencyCode? string
---@field toCurrencyCode? string
---@field updatedAt? string
---@field visibleInUI? boolean

---@class TaxRate
---@field active boolean
---@field createdAt string
---@field id string
---@field label string
---@field name string
---@field percentageRate number
---@field updatedAt string

---@class TaxRateLoadMatch
---@field id string

---@class TaxRateListMatch
---@field active? boolean
---@field after? string
---@field limit? number

---@class TeamsBatchResponseTeamMember
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class TeamsBatchResponseTeamMemberCreateData
---@field ["2026_09_id"] string
---@field completedAt string
---@field errors? table
---@field inputs table
---@field links? table
---@field numErrors? number
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class TeamsCollectionResponseTeamMemberResponseForwardPaging
---@field type string
---@field userId string

---@class TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch
---@field ["2026_09_id"] string
---@field after? string
---@field limit? number

---@class TeamsCollectionResponseTeamResponseForwardPaging
---@field id string
---@field name string
---@field parentTeamId? string

---@class TeamsCollectionResponseTeamResponseForwardPagingListMatch
---@field after? string
---@field limit? number

---@class TeamsTeam
---@field id string
---@field members table
---@field name string
---@field parentTeamId? string

---@class TeamsTeamLoadMatch
---@field team_id string

---@class TeamsTeamCreateData
---@field id string
---@field members table
---@field name string
---@field parentTeamId? string

---@class TeamsTeamUpdateData
---@field team_id string
---@field id? string
---@field members? table
---@field name? string
---@field parentTeamId? string

---@class TeamsTeamMember
---@field type string
---@field userId string

---@class TeamsTeamMemberCreateData
---@field ["2026_09_id"] string
---@field type string
---@field userId string

---@class User

---@class UserRemoveMatch
---@field user_id string
---@field id_property? string

---@class UserProvisioningCollectionResponsePublicPermissionSetNo
---@field id string
---@field name string
---@field requiresBillingWrite boolean

---@class UserProvisioningCollectionResponsePublicPermissionSetNoListMatch
---@field id? string
---@field name? string
---@field requiresBillingWrite? boolean

---@class UserProvisioningCollectionResponsePublicSeatNoPaging
---@field description? string
---@field name string
---@field remainingSeats? number

---@class UserProvisioningCollectionResponsePublicSeatNoPagingListMatch
---@field description? string
---@field name? string
---@field remainingSeats? number

---@class UserProvisioningCollectionResponsePublicTeamNoPaging
---@field id string
---@field name string
---@field secondaryUserIds table
---@field userIds table

---@class UserProvisioningCollectionResponsePublicTeamNoPagingListMatch
---@field id? string
---@field name? string
---@field secondaryUserIds? table
---@field userIds? table

---@class UserProvisioningCollectionResponsePublicUserForwardPaging
---@field email string
---@field firstName? string
---@field id string
---@field lastName? string
---@field primaryTeamId? string
---@field roleId? string
---@field roleIds table
---@field seatNames? table
---@field secondaryTeamIds? table
---@field sendWelcomeEmail? boolean
---@field superAdmin boolean

---@class UserProvisioningCollectionResponsePublicUserForwardPagingListMatch
---@field after? string
---@field limit? number

---@class UserProvisioningPublicUser
---@field email string
---@field firstName? string
---@field id string
---@field lastName? string
---@field primaryTeamId? string
---@field roleId? string
---@field roleIds table
---@field seatNames? table
---@field secondaryTeamIds? table
---@field sendWelcomeEmail? boolean
---@field superAdmin boolean

---@class UserProvisioningPublicUserLoadMatch
---@field user_id string
---@field id_property? string

---@class UserProvisioningPublicUserCreateData
---@field email string
---@field firstName? string
---@field id string
---@field lastName? string
---@field primaryTeamId? string
---@field roleId? string
---@field roleIds table
---@field seatNames? table
---@field secondaryTeamIds? table
---@field sendWelcomeEmail? boolean
---@field superAdmin boolean

---@class UserProvisioningPublicUserUpdateData
---@field user_id string
---@field id_property? string
---@field email? string
---@field firstName? string
---@field id? string
---@field lastName? string
---@field primaryTeamId? string
---@field roleId? string
---@field roleIds? table
---@field seatNames? table
---@field secondaryTeamIds? table
---@field sendWelcomeEmail? boolean
---@field superAdmin? boolean

local M = {}

return M
