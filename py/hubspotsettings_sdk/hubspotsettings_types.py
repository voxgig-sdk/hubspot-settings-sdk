# Typed models for the HubspotSettings SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Basic(TypedDict):
    pass


class BasicRemoveMatch(TypedDict):
    team_id: str


class ExchangeRate(TypedDict):
    pass


class ExchangeRateCreateData(TypedDict):
    pass


class MulticurrencyBatchResponseExchangeRateRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class MulticurrencyBatchResponseExchangeRate(MulticurrencyBatchResponseExchangeRateRequired, total=False):
    links: dict
    requestedAt: str


class MulticurrencyBatchResponseExchangeRateCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class MulticurrencyBatchResponseExchangeRateCreateData(MulticurrencyBatchResponseExchangeRateCreateDataRequired, total=False):
    links: dict
    requestedAt: str


class MulticurrencyCentralExchangeRatesInformation(TypedDict):
    centralExchangeRatesEnabled: bool


class MulticurrencyCentralExchangeRatesInformationLoadMatch(TypedDict, total=False):
    centralExchangeRatesEnabled: bool


class MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(TypedDict):
    currencyCode: str
    currencyName: str


class MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch(TypedDict, total=False):
    currencyCode: str
    currencyName: str


class MulticurrencyCollectionResponseExchangeRateForwardPaging(TypedDict):
    conversionRate: float
    createdAt: str
    effectiveAt: str
    fromCurrencyCode: str
    id: str
    toCurrencyCode: str
    updatedAt: str
    visibleInUI: bool


class MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch(TypedDict, total=False):
    after: str
    from_currency_code: str
    limit: int
    to_currency_code: str


class MulticurrencyCollectionResponseExchangeRateNoPaging(TypedDict):
    conversionRate: float
    createdAt: str
    effectiveAt: str
    fromCurrencyCode: str
    id: str
    toCurrencyCode: str
    updatedAt: str
    visibleInUI: bool


class MulticurrencyCollectionResponseExchangeRateNoPagingListMatch(TypedDict, total=False):
    conversionRate: float
    createdAt: str
    effectiveAt: str
    fromCurrencyCode: str
    id: str
    toCurrencyCode: str
    updatedAt: str
    visibleInUI: bool


class MulticurrencyCompanyCurrency(TypedDict):
    createdAt: str
    currencyCode: str
    id: str


class MulticurrencyCompanyCurrencyLoadMatchRequired(TypedDict):
    id: str


class MulticurrencyCompanyCurrencyLoadMatch(MulticurrencyCompanyCurrencyLoadMatchRequired, total=False):
    createdAt: str
    currencyCode: str


class MulticurrencyCompanyCurrencyUpdateData(TypedDict, total=False):
    createdAt: str
    currencyCode: str
    id: str


class MulticurrencyExchangeRate(TypedDict):
    conversionRate: float
    createdAt: str
    currencyCode: str
    effectiveAt: str
    fromCurrencyCode: str
    id: str
    toCurrencyCode: str
    updatedAt: str
    visibleInUI: bool


class MulticurrencyExchangeRateLoadMatch(TypedDict):
    id: str


class MulticurrencyExchangeRateCreateData(TypedDict):
    conversionRate: float
    createdAt: str
    currencyCode: str
    effectiveAt: str
    fromCurrencyCode: str
    id: str
    toCurrencyCode: str
    updatedAt: str
    visibleInUI: bool


class MulticurrencyExchangeRateUpdateDataRequired(TypedDict):
    id: str


class MulticurrencyExchangeRateUpdateData(MulticurrencyExchangeRateUpdateDataRequired, total=False):
    conversionRate: float
    createdAt: str
    currencyCode: str
    effectiveAt: str
    fromCurrencyCode: str
    toCurrencyCode: str
    updatedAt: str
    visibleInUI: bool


class TaxRate(TypedDict):
    active: bool
    createdAt: str
    id: str
    label: str
    name: str
    percentageRate: float
    updatedAt: str


class TaxRateLoadMatch(TypedDict):
    id: str


class TaxRateListMatch(TypedDict, total=False):
    active: bool
    after: str
    limit: int


class TeamsBatchResponseTeamMemberRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class TeamsBatchResponseTeamMember(TeamsBatchResponseTeamMemberRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class TeamsBatchResponseTeamMemberCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class TeamsBatchResponseTeamMemberCreateData(TeamsBatchResponseTeamMemberCreateDataRequired, total=False):
    errors: list
    links: dict
    numErrors: int
    requestedAt: str


class TeamsCollectionResponseTeamMemberResponseForwardPaging(TypedDict):
    type: str
    userId: str


class TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch(TypedDict, total=False):
    after: str
    limit: int


class TeamsCollectionResponseTeamResponseForwardPagingRequired(TypedDict):
    id: str
    name: str


class TeamsCollectionResponseTeamResponseForwardPaging(TeamsCollectionResponseTeamResponseForwardPagingRequired, total=False):
    parentTeamId: str


class TeamsCollectionResponseTeamResponseForwardPagingListMatch(TypedDict, total=False):
    after: str
    limit: int


class TeamsTeamRequired(TypedDict):
    id: str
    members: list
    name: str


class TeamsTeam(TeamsTeamRequired, total=False):
    parentTeamId: str


class TeamsTeamLoadMatch(TypedDict):
    team_id: str


class TeamsTeamCreateDataRequired(TypedDict):
    id: str
    members: list
    name: str


class TeamsTeamCreateData(TeamsTeamCreateDataRequired, total=False):
    parentTeamId: str


class TeamsTeamUpdateDataRequired(TypedDict):
    team_id: str


class TeamsTeamUpdateData(TeamsTeamUpdateDataRequired, total=False):
    id: str
    members: list
    name: str
    parentTeamId: str


class TeamsTeamMember(TypedDict):
    type: str
    userId: str


class TeamsTeamMemberCreateData(TypedDict):
    type: str
    userId: str


class User(TypedDict):
    pass


class UserRemoveMatchRequired(TypedDict):
    user_id: str


class UserRemoveMatch(UserRemoveMatchRequired, total=False):
    id_property: str


class UserProvisioningCollectionResponsePublicPermissionSetNo(TypedDict):
    id: str
    name: str
    requiresBillingWrite: bool


class UserProvisioningCollectionResponsePublicPermissionSetNoListMatch(TypedDict, total=False):
    id: str
    name: str
    requiresBillingWrite: bool


class UserProvisioningCollectionResponsePublicSeatNoPagingRequired(TypedDict):
    name: str


class UserProvisioningCollectionResponsePublicSeatNoPaging(UserProvisioningCollectionResponsePublicSeatNoPagingRequired, total=False):
    description: str
    remainingSeats: int


class UserProvisioningCollectionResponsePublicSeatNoPagingListMatch(TypedDict, total=False):
    description: str
    name: str
    remainingSeats: int


class UserProvisioningCollectionResponsePublicTeamNoPaging(TypedDict):
    id: str
    name: str
    secondaryUserIds: list
    userIds: list


class UserProvisioningCollectionResponsePublicTeamNoPagingListMatch(TypedDict, total=False):
    id: str
    name: str
    secondaryUserIds: list
    userIds: list


class UserProvisioningCollectionResponsePublicUserForwardPagingRequired(TypedDict):
    email: str
    id: str
    roleIds: list
    superAdmin: bool


class UserProvisioningCollectionResponsePublicUserForwardPaging(UserProvisioningCollectionResponsePublicUserForwardPagingRequired, total=False):
    firstName: str
    lastName: str
    primaryTeamId: str
    roleId: str
    seatNames: list
    secondaryTeamIds: list
    sendWelcomeEmail: bool


class UserProvisioningCollectionResponsePublicUserForwardPagingListMatch(TypedDict, total=False):
    after: str
    limit: int


class UserProvisioningPublicUserRequired(TypedDict):
    email: str
    id: str
    roleIds: list
    superAdmin: bool


class UserProvisioningPublicUser(UserProvisioningPublicUserRequired, total=False):
    firstName: str
    lastName: str
    primaryTeamId: str
    roleId: str
    seatNames: list
    secondaryTeamIds: list
    sendWelcomeEmail: bool


class UserProvisioningPublicUserLoadMatchRequired(TypedDict):
    user_id: str


class UserProvisioningPublicUserLoadMatch(UserProvisioningPublicUserLoadMatchRequired, total=False):
    id_property: str


class UserProvisioningPublicUserCreateDataRequired(TypedDict):
    email: str
    id: str
    roleIds: list
    superAdmin: bool


class UserProvisioningPublicUserCreateData(UserProvisioningPublicUserCreateDataRequired, total=False):
    firstName: str
    lastName: str
    primaryTeamId: str
    roleId: str
    seatNames: list
    secondaryTeamIds: list
    sendWelcomeEmail: bool


class UserProvisioningPublicUserUpdateDataRequired(TypedDict):
    user_id: str


class UserProvisioningPublicUserUpdateData(UserProvisioningPublicUserUpdateDataRequired, total=False):
    id_property: str
    email: str
    firstName: str
    id: str
    lastName: str
    primaryTeamId: str
    roleId: str
    roleIds: list
    seatNames: list
    secondaryTeamIds: list
    sendWelcomeEmail: bool
    superAdmin: bool
