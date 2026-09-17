// Typed models for the HubspotSettings SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Basic {
}

export interface BasicRemoveMatch {
  team_id: string
}

export interface ExchangeRate {
}

export interface ExchangeRateCreateData {

  // Selects a custom action instead of the plain create:
  //   'update_visibility'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MulticurrencyBatchResponseExchangeRate {
  completedAt: string
  inputs: any[]
  links?: Record<string, any>
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface MulticurrencyBatchResponseExchangeRateCreateData {
  completedAt: string
  inputs: any[]
  links?: Record<string, any>
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface MulticurrencyCentralExchangeRatesInformation {
  centralExchangeRatesEnabled: boolean
}

export interface MulticurrencyCentralExchangeRatesInformationLoadMatch {
  centralExchangeRatesEnabled?: boolean
}

export interface MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging {
  currencyCode: string
  currencyName: string
}

export interface MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch {
  currencyCode?: string
  currencyName?: string
}

export interface MulticurrencyCollectionResponseExchangeRateForwardPaging {
  conversionRate: number
  createdAt: string
  effectiveAt: string
  fromCurrencyCode: string
  id: string
  toCurrencyCode: string
  updatedAt: string
  visibleInUI: boolean
}

export interface MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch {
  after?: string
  from_currency_code?: string
  limit?: number
  to_currency_code?: string
}

export interface MulticurrencyCollectionResponseExchangeRateNoPaging {
  conversionRate: number
  createdAt: string
  effectiveAt: string
  fromCurrencyCode: string
  id: string
  toCurrencyCode: string
  updatedAt: string
  visibleInUI: boolean
}

export interface MulticurrencyCollectionResponseExchangeRateNoPagingListMatch {
  conversionRate?: number
  createdAt?: string
  effectiveAt?: string
  fromCurrencyCode?: string
  id?: string
  toCurrencyCode?: string
  updatedAt?: string
  visibleInUI?: boolean
}

export interface MulticurrencyCompanyCurrency {
  createdAt: string
  currencyCode: string
  id: string
}

export interface MulticurrencyCompanyCurrencyLoadMatch {
  createdAt?: string
  currencyCode?: string
  id: string
}

export interface MulticurrencyCompanyCurrencyUpdateData {
  createdAt?: string
  currencyCode?: string
  id?: string
}

export interface MulticurrencyExchangeRate {
  conversionRate: number
  createdAt: string
  currencyCode: string
  effectiveAt: string
  fromCurrencyCode: string
  id: string
  toCurrencyCode: string
  updatedAt: string
  visibleInUI: boolean
}

export interface MulticurrencyExchangeRateLoadMatch {
  id: string
}

export interface MulticurrencyExchangeRateCreateData {
  conversionRate: number
  createdAt: string
  currencyCode: string
  effectiveAt: string
  fromCurrencyCode: string
  id: string
  toCurrencyCode: string
  updatedAt: string
  visibleInUI: boolean
}

export interface MulticurrencyExchangeRateUpdateData {
  id: string
  conversionRate?: number
  createdAt?: string
  currencyCode?: string
  effectiveAt?: string
  fromCurrencyCode?: string
  toCurrencyCode?: string
  updatedAt?: string
  visibleInUI?: boolean
}

export interface TaxRate {
  active: boolean
  createdAt: string
  id: string
  label: string
  name: string
  percentageRate: number
  updatedAt: string
}

export interface TaxRateLoadMatch {
  id: string
}

export interface TaxRateListMatch {
  active?: boolean
  after?: string
  limit?: number
}

export interface TeamsBatchResponseTeamMember {
  completedAt: string
  errors?: any[]
  inputs: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface TeamsBatchResponseTeamMemberCreateData {
  "2026_09_id": string
  completedAt: string
  errors?: any[]
  inputs: any[]
  links?: Record<string, any>
  numErrors?: number
  requestedAt?: string
  results: any[]
  startedAt: string
  status: string
}

export interface TeamsCollectionResponseTeamMemberResponseForwardPaging {
  type: string
  userId: string
}

export interface TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch {
  "2026_09_id": string
  after?: string
  limit?: number
}

export interface TeamsCollectionResponseTeamResponseForwardPaging {
  id: string
  name: string
  parentTeamId?: string
}

export interface TeamsCollectionResponseTeamResponseForwardPagingListMatch {
  after?: string
  limit?: number
}

export interface TeamsTeam {
  id: string
  members: any[]
  name: string
  parentTeamId?: string
}

export interface TeamsTeamLoadMatch {
  team_id: string
}

export interface TeamsTeamCreateData {
  id: string
  members: any[]
  name: string
  parentTeamId?: string
}

export interface TeamsTeamUpdateData {
  team_id: string
  id?: string
  members?: any[]
  name?: string
  parentTeamId?: string
}

export interface TeamsTeamMember {
  type: string
  userId: string
}

export interface TeamsTeamMemberCreateData {
  "2026_09_id": string
  type: string
  userId: string
}

export interface User {
}

export interface UserRemoveMatch {
  user_id: string
  id_property?: string
}

export interface UserProvisioningCollectionResponsePublicPermissionSetNo {
  id: string
  name: string
  requiresBillingWrite: boolean
}

export interface UserProvisioningCollectionResponsePublicPermissionSetNoListMatch {
  id?: string
  name?: string
  requiresBillingWrite?: boolean
}

export interface UserProvisioningCollectionResponsePublicSeatNoPaging {
  description?: string
  name: string
  remainingSeats?: number
}

export interface UserProvisioningCollectionResponsePublicSeatNoPagingListMatch {
  description?: string
  name?: string
  remainingSeats?: number
}

export interface UserProvisioningCollectionResponsePublicTeamNoPaging {
  id: string
  name: string
  secondaryUserIds: any[]
  userIds: any[]
}

export interface UserProvisioningCollectionResponsePublicTeamNoPagingListMatch {
  id?: string
  name?: string
  secondaryUserIds?: any[]
  userIds?: any[]
}

export interface UserProvisioningCollectionResponsePublicUserForwardPaging {
  email: string
  firstName?: string
  id: string
  lastName?: string
  primaryTeamId?: string
  roleId?: string
  roleIds: any[]
  seatNames?: any[]
  secondaryTeamIds?: any[]
  sendWelcomeEmail?: boolean
  superAdmin: boolean
}

export interface UserProvisioningCollectionResponsePublicUserForwardPagingListMatch {
  after?: string
  limit?: number
}

export interface UserProvisioningPublicUser {
  email: string
  firstName?: string
  id: string
  lastName?: string
  primaryTeamId?: string
  roleId?: string
  roleIds: any[]
  seatNames?: any[]
  secondaryTeamIds?: any[]
  sendWelcomeEmail?: boolean
  superAdmin: boolean
}

export interface UserProvisioningPublicUserLoadMatch {
  user_id: string
  id_property?: string
}

export interface UserProvisioningPublicUserCreateData {
  email: string
  firstName?: string
  id: string
  lastName?: string
  primaryTeamId?: string
  roleId?: string
  roleIds: any[]
  seatNames?: any[]
  secondaryTeamIds?: any[]
  sendWelcomeEmail?: boolean
  superAdmin: boolean
}

export interface UserProvisioningPublicUserUpdateData {
  user_id: string
  id_property?: string
  email?: string
  firstName?: string
  id?: string
  lastName?: string
  primaryTeamId?: string
  roleId?: string
  roleIds?: any[]
  seatNames?: any[]
  secondaryTeamIds?: any[]
  sendWelcomeEmail?: boolean
  superAdmin?: boolean
}

