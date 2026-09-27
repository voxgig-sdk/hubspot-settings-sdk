// Typed models for the HubspotSettings SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} AddCurrency
 * @property {number} conversionRate
 * @property {string} createdAt
 * @property {string} currencyCode
 * @property {string} effectiveAt
 * @property {string} fromCurrencyCode
 * @property {string} id
 * @property {string} toCurrencyCode
 * @property {string} updatedAt
 * @property {boolean} visibleInUI
 */

/**
 * @typedef {Object} AddCurrencyCreateData
 * @property {number} conversionRate
 * @property {string} createdAt
 * @property {string} currencyCode
 * @property {string} effectiveAt
 * @property {string} fromCurrencyCode
 * @property {string} id
 * @property {string} toCurrencyCode
 * @property {string} updatedAt
 * @property {boolean} visibleInUI
 */

/**
 * @typedef {Object} Basic
 */

/**
 * @typedef {Object} BasicRemoveMatch
 * @property {string} team_id
 * @property {string} [user_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Code
 * @property {string} currencyCode
 * @property {string} currencyName
 */

/**
 * @typedef {Object} CodeListMatch
 * @property {string} [currencyCode]
 * @property {string} [currencyName]
 */

/**
 * @typedef {Object} Current
 * @property {number} conversionRate
 * @property {string} createdAt
 * @property {string} effectiveAt
 * @property {string} fromCurrencyCode
 * @property {string} id
 * @property {string} toCurrencyCode
 * @property {string} updatedAt
 * @property {boolean} visibleInUI
 */

/**
 * @typedef {Object} CurrentListMatch
 * @property {number} [conversionRate]
 * @property {string} [createdAt]
 * @property {string} [effectiveAt]
 * @property {string} [fromCurrencyCode]
 * @property {string} [id]
 * @property {string} [toCurrencyCode]
 * @property {string} [updatedAt]
 * @property {boolean} [visibleInUI]
 */

/**
 * @typedef {Object} ExchangeRate
 * @property {number} conversionRate
 * @property {string} createdAt
 * @property {string} effectiveAt
 * @property {string} fromCurrencyCode
 * @property {string} id
 * @property {string} toCurrencyCode
 * @property {string} updatedAt
 * @property {boolean} visibleInUI
 */

/**
 * @typedef {Object} ExchangeRateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ExchangeRateCreateData
 * @property {number} conversionRate
 * @property {string} createdAt
 * @property {string} effectiveAt
 * @property {string} fromCurrencyCode
 * @property {string} id
 * @property {string} toCurrencyCode
 * @property {string} updatedAt
 * @property {boolean} visibleInUI
 */

/**
 * @typedef {Object} ExchangeRateUpdateData
 * @property {string} id
 * @property {number} [conversionRate]
 * @property {string} [createdAt]
 * @property {string} [effectiveAt]
 * @property {string} [fromCurrencyCode]
 * @property {string} [toCurrencyCode]
 * @property {string} [updatedAt]
 * @property {boolean} [visibleInUI]
 */

/**
 * @typedef {Object} MulticurrencyBatchResponseExchangeRate
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} MulticurrencyBatchResponseExchangeRateCreateData
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} MulticurrencyCentralExchangeRatesInformation
 * @property {boolean} centralExchangeRatesEnabled
 */

/**
 * @typedef {Object} MulticurrencyCentralExchangeRatesInformationLoadMatch
 * @property {boolean} [centralExchangeRatesEnabled]
 */

/**
 * @typedef {Object} MulticurrencyCollectionResponseExchangeRateForwardPaging
 * @property {number} conversionRate
 * @property {string} createdAt
 * @property {string} effectiveAt
 * @property {string} fromCurrencyCode
 * @property {string} id
 * @property {string} toCurrencyCode
 * @property {string} updatedAt
 * @property {boolean} visibleInUI
 */

/**
 * @typedef {Object} MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch
 * @property {string} [after]
 * @property {string} [from_currency_code]
 * @property {number} [limit]
 * @property {string} [to_currency_code]
 */

/**
 * @typedef {Object} MulticurrencyCompanyCurrency
 * @property {string} createdAt
 * @property {string} currencyCode
 * @property {string} id
 */

/**
 * @typedef {Object} MulticurrencyCompanyCurrencyLoadMatch
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {string} id
 */

/**
 * @typedef {Object} MulticurrencyCompanyCurrencyUpdateData
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {string} [id]
 */

/**
 * @typedef {Object} TaxRate
 * @property {boolean} active
 * @property {string} createdAt
 * @property {string} id
 * @property {string} label
 * @property {string} name
 * @property {number} percentageRate
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} TaxRateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TaxRateListMatch
 * @property {boolean} [active]
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} TeamsBatchResponseTeamMember
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} TeamsBatchResponseTeamMemberCreateData
 * @property {string} team_id
 * @property {string} completedAt
 * @property {Array} [errors]
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {number} [numErrors]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} TeamsCollectionResponseTeamMemberResponseForwardPaging
 * @property {string} type
 * @property {string} userId
 */

/**
 * @typedef {Object} TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch
 * @property {string} team_id
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} TeamsCollectionResponseTeamResponseForwardPaging
 * @property {string} id
 * @property {string} name
 * @property {string} [parentTeamId]
 */

/**
 * @typedef {Object} TeamsCollectionResponseTeamResponseForwardPagingListMatch
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} TeamsTeam
 * @property {string} id
 * @property {Array} members
 * @property {string} name
 * @property {string} [parentTeamId]
 */

/**
 * @typedef {Object} TeamsTeamLoadMatch
 * @property {string} team_id
 */

/**
 * @typedef {Object} TeamsTeamCreateData
 * @property {string} id
 * @property {Array} members
 * @property {string} name
 * @property {string} [parentTeamId]
 */

/**
 * @typedef {Object} TeamsTeamUpdateData
 * @property {string} team_id
 * @property {string} [id]
 * @property {Array} [members]
 * @property {string} [name]
 * @property {string} [parentTeamId]
 */

/**
 * @typedef {Object} TeamsTeamMember
 * @property {string} type
 * @property {string} userId
 */

/**
 * @typedef {Object} TeamsTeamMemberCreateData
 * @property {string} team_id
 * @property {string} type
 * @property {string} userId
 */

/**
 * @typedef {Object} UnsupportedCurrency
 * @property {string} currencyCode
 * @property {string} currencyName
 */

/**
 * @typedef {Object} UnsupportedCurrencyListMatch
 * @property {string} [currencyCode]
 * @property {string} [currencyName]
 */

/**
 * @typedef {Object} User
 */

/**
 * @typedef {Object} UserRemoveMatch
 * @property {string} user_id
 * @property {string} [id_property]
 */

/**
 * @typedef {Object} UserProvisioningCollectionResponsePublicUserForwardPaging
 * @property {string} email
 * @property {string} [firstName]
 * @property {string} id
 * @property {string} [lastName]
 * @property {string} [primaryTeamId]
 * @property {string} [roleId]
 * @property {Array} roleIds
 * @property {Array} [seatNames]
 * @property {Array} [secondaryTeamIds]
 * @property {boolean} [sendWelcomeEmail]
 * @property {boolean} superAdmin
 */

/**
 * @typedef {Object} UserProvisioningCollectionResponsePublicUserForwardPagingListMatch
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} UserProvisioningPublicPermissionSet
 * @property {string} id
 * @property {string} name
 * @property {boolean} requiresBillingWrite
 */

/**
 * @typedef {Object} UserProvisioningPublicPermissionSetListMatch
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [requiresBillingWrite]
 */

/**
 * @typedef {Object} UserProvisioningPublicSeat
 * @property {string} [description]
 * @property {string} name
 * @property {number} [remainingSeats]
 */

/**
 * @typedef {Object} UserProvisioningPublicSeatListMatch
 * @property {string} [description]
 * @property {string} [name]
 * @property {number} [remainingSeats]
 */

/**
 * @typedef {Object} UserProvisioningPublicTeam
 * @property {string} id
 * @property {string} name
 * @property {Array} secondaryUserIds
 * @property {Array} userIds
 */

/**
 * @typedef {Object} UserProvisioningPublicTeamListMatch
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [secondaryUserIds]
 * @property {Array} [userIds]
 */

/**
 * @typedef {Object} UserProvisioningPublicUser
 * @property {string} email
 * @property {string} [firstName]
 * @property {string} id
 * @property {string} [lastName]
 * @property {string} [primaryTeamId]
 * @property {string} [roleId]
 * @property {Array} roleIds
 * @property {Array} [seatNames]
 * @property {Array} [secondaryTeamIds]
 * @property {boolean} [sendWelcomeEmail]
 * @property {boolean} superAdmin
 */

/**
 * @typedef {Object} UserProvisioningPublicUserLoadMatch
 * @property {string} user_id
 * @property {string} [id_property]
 */

/**
 * @typedef {Object} UserProvisioningPublicUserCreateData
 * @property {string} email
 * @property {string} [firstName]
 * @property {string} id
 * @property {string} [lastName]
 * @property {string} [primaryTeamId]
 * @property {string} [roleId]
 * @property {Array} roleIds
 * @property {Array} [seatNames]
 * @property {Array} [secondaryTeamIds]
 * @property {boolean} [sendWelcomeEmail]
 * @property {boolean} superAdmin
 */

/**
 * @typedef {Object} UserProvisioningPublicUserUpdateData
 * @property {string} user_id
 * @property {string} [id_property]
 * @property {string} [email]
 * @property {string} [firstName]
 * @property {string} [id]
 * @property {string} [lastName]
 * @property {string} [primaryTeamId]
 * @property {string} [roleId]
 * @property {Array} [roleIds]
 * @property {Array} [seatNames]
 * @property {Array} [secondaryTeamIds]
 * @property {boolean} [sendWelcomeEmail]
 * @property {boolean} [superAdmin]
 */

