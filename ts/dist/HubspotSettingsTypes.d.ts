export interface AddCurrency {
    conversionRate: number;
    createdAt: string;
    currencyCode: string;
    effectiveAt: string;
    fromCurrencyCode: string;
    id: string;
    toCurrencyCode: string;
    updatedAt: string;
    visibleInUI: boolean;
}
export interface AddCurrencyCreateData {
    conversionRate: number;
    createdAt: string;
    currencyCode: string;
    effectiveAt: string;
    fromCurrencyCode: string;
    id: string;
    toCurrencyCode: string;
    updatedAt: string;
    visibleInUI: boolean;
}
export interface Basic {
}
export interface BasicRemoveMatch {
    team_id: string;
    user_id?: string;
    type?: string;
}
export interface Code {
    currencyCode: string;
    currencyName: string;
}
export interface CodeListMatch {
    currencyCode?: string;
    currencyName?: string;
}
export interface Current {
    conversionRate: number;
    createdAt: string;
    effectiveAt: string;
    fromCurrencyCode: string;
    id: string;
    toCurrencyCode: string;
    updatedAt: string;
    visibleInUI: boolean;
}
export interface CurrentListMatch {
    conversionRate?: number;
    createdAt?: string;
    effectiveAt?: string;
    fromCurrencyCode?: string;
    id?: string;
    toCurrencyCode?: string;
    updatedAt?: string;
    visibleInUI?: boolean;
}
export interface ExchangeRate {
    conversionRate: number;
    createdAt: string;
    effectiveAt: string;
    fromCurrencyCode: string;
    id: string;
    toCurrencyCode: string;
    updatedAt: string;
    visibleInUI: boolean;
}
export interface ExchangeRateLoadMatch {
    id: string;
}
export interface ExchangeRateCreateData {
    conversionRate: number;
    createdAt: string;
    effectiveAt: string;
    fromCurrencyCode: string;
    id: string;
    toCurrencyCode: string;
    updatedAt: string;
    visibleInUI: boolean;
    $action?: string;
    [action: string]: any;
}
export interface ExchangeRateUpdateData {
    id: string;
    conversionRate?: number;
    createdAt?: string;
    effectiveAt?: string;
    fromCurrencyCode?: string;
    toCurrencyCode?: string;
    updatedAt?: string;
    visibleInUI?: boolean;
}
export interface MulticurrencyBatchResponseExchangeRate {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface MulticurrencyBatchResponseExchangeRateCreateData {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface MulticurrencyCentralExchangeRatesInformation {
    centralExchangeRatesEnabled: boolean;
}
export interface MulticurrencyCentralExchangeRatesInformationLoadMatch {
    centralExchangeRatesEnabled?: boolean;
}
export interface MulticurrencyCollectionResponseExchangeRateForwardPaging {
    conversionRate: number;
    createdAt: string;
    effectiveAt: string;
    fromCurrencyCode: string;
    id: string;
    toCurrencyCode: string;
    updatedAt: string;
    visibleInUI: boolean;
}
export interface MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch {
    after?: string;
    from_currency_code?: string;
    limit?: number;
    to_currency_code?: string;
}
export interface MulticurrencyCompanyCurrency {
    createdAt: string;
    currencyCode: string;
    id: string;
}
export interface MulticurrencyCompanyCurrencyLoadMatch {
    createdAt?: string;
    currencyCode?: string;
    id: string;
}
export interface MulticurrencyCompanyCurrencyUpdateData {
    createdAt?: string;
    currencyCode?: string;
    id?: string;
}
export interface TaxRate {
    active: boolean;
    createdAt: string;
    id: string;
    label: string;
    name: string;
    percentageRate: number;
    updatedAt: string;
}
export interface TaxRateLoadMatch {
    id: string;
}
export interface TaxRateListMatch {
    active?: boolean;
    after?: string;
    limit?: number;
}
export interface TeamsBatchResponseTeamMember {
    completedAt: string;
    errors?: any[];
    inputs: any[];
    links?: Record<string, any>;
    numErrors?: number;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface TeamsBatchResponseTeamMemberCreateData {
    team_id: string;
    completedAt: string;
    errors?: any[];
    inputs: any[];
    links?: Record<string, any>;
    numErrors?: number;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface TeamsCollectionResponseTeamMemberResponseForwardPaging {
    type: string;
    userId: string;
}
export interface TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch {
    team_id: string;
    after?: string;
    limit?: number;
}
export interface TeamsCollectionResponseTeamResponseForwardPaging {
    id: string;
    name: string;
    parentTeamId?: string;
}
export interface TeamsCollectionResponseTeamResponseForwardPagingListMatch {
    after?: string;
    limit?: number;
}
export interface TeamsTeam {
    id: string;
    members: any[];
    name: string;
    parentTeamId?: string;
}
export interface TeamsTeamLoadMatch {
    team_id: string;
}
export interface TeamsTeamCreateData {
    id: string;
    members: any[];
    name: string;
    parentTeamId?: string;
}
export interface TeamsTeamUpdateData {
    team_id: string;
    id?: string;
    members?: any[];
    name?: string;
    parentTeamId?: string;
}
export interface TeamsTeamMember {
    type: string;
    userId: string;
}
export interface TeamsTeamMemberCreateData {
    team_id: string;
    type: string;
    userId: string;
}
export interface UnsupportedCurrency {
    currencyCode: string;
    currencyName: string;
}
export interface UnsupportedCurrencyListMatch {
    currencyCode?: string;
    currencyName?: string;
}
export interface User {
}
export interface UserRemoveMatch {
    user_id: string;
    id_property?: string;
}
export interface UserProvisioningCollectionResponsePublicUserForwardPaging {
    email: string;
    firstName?: string;
    id: string;
    lastName?: string;
    primaryTeamId?: string;
    roleId?: string;
    roleIds: any[];
    seatNames?: any[];
    secondaryTeamIds?: any[];
    sendWelcomeEmail?: boolean;
    superAdmin: boolean;
}
export interface UserProvisioningCollectionResponsePublicUserForwardPagingListMatch {
    after?: string;
    limit?: number;
}
export interface UserProvisioningPublicPermissionSet {
    id: string;
    name: string;
    requiresBillingWrite: boolean;
}
export interface UserProvisioningPublicPermissionSetListMatch {
    id?: string;
    name?: string;
    requiresBillingWrite?: boolean;
}
export interface UserProvisioningPublicSeat {
    description?: string;
    name: string;
    remainingSeats?: number;
}
export interface UserProvisioningPublicSeatListMatch {
    description?: string;
    name?: string;
    remainingSeats?: number;
}
export interface UserProvisioningPublicTeam {
    id: string;
    name: string;
    secondaryUserIds: any[];
    userIds: any[];
}
export interface UserProvisioningPublicTeamListMatch {
    id?: string;
    name?: string;
    secondaryUserIds?: any[];
    userIds?: any[];
}
export interface UserProvisioningPublicUser {
    email: string;
    firstName?: string;
    id: string;
    lastName?: string;
    primaryTeamId?: string;
    roleId?: string;
    roleIds: any[];
    seatNames?: any[];
    secondaryTeamIds?: any[];
    sendWelcomeEmail?: boolean;
    superAdmin: boolean;
}
export interface UserProvisioningPublicUserLoadMatch {
    user_id: string;
    id_property?: string;
}
export interface UserProvisioningPublicUserCreateData {
    email: string;
    firstName?: string;
    id: string;
    lastName?: string;
    primaryTeamId?: string;
    roleId?: string;
    roleIds: any[];
    seatNames?: any[];
    secondaryTeamIds?: any[];
    sendWelcomeEmail?: boolean;
    superAdmin: boolean;
}
export interface UserProvisioningPublicUserUpdateData {
    user_id: string;
    id_property?: string;
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    primaryTeamId?: string;
    roleId?: string;
    roleIds?: any[];
    seatNames?: any[];
    secondaryTeamIds?: any[];
    sendWelcomeEmail?: boolean;
    superAdmin?: boolean;
}
