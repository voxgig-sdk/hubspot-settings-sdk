// Typed models for the HubspotSettings SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Basic
 */

/**
 * @typedef {Object} BasicRemoveMatch
 * @property {string} team_id
 */

/**
 * @typedef {Object} ExchangeRate
 */

/**
 * @typedef {Object} ExchangeRateCreateData
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
 * @typedef {Object} MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging
 * @property {string} currencyCode
 * @property {string} currencyName
 */

/**
 * @typedef {Object} MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch
 * @property {string} [currencyCode]
 * @property {string} [currencyName]
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
 * @typedef {Object} MulticurrencyCollectionResponseExchangeRateNoPaging
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
 * @typedef {Object} MulticurrencyCollectionResponseExchangeRateNoPagingListMatch
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
 * @typedef {Object} MulticurrencyExchangeRate
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
 * @typedef {Object} MulticurrencyExchangeRateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} MulticurrencyExchangeRateCreateData
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
 * @typedef {Object} MulticurrencyExchangeRateUpdateData
 * @property {string} id
 * @property {number} [conversionRate]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {string} [effectiveAt]
 * @property {string} [fromCurrencyCode]
 * @property {string} [toCurrencyCode]
 * @property {string} [updatedAt]
 * @property {boolean} [visibleInUI]
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
 * @property {string} "2026_09_id"
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
 * @property {string} "2026_09_id"
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
 * @property {string} "2026_09_id"
 * @property {string} type
 * @property {string} userId
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
 * @typedef {Object} UserProvisioningCollectionResponsePublicPermissionSetNo
 * @property {string} id
 * @property {string} name
 * @property {boolean} requiresBillingWrite
 */

/**
 * @typedef {Object} UserProvisioningCollectionResponsePublicPermissionSetNoListMatch
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [requiresBillingWrite]
 */

/**
 * @typedef {Object} UserProvisioningCollectionResponsePublicSeatNoPaging
 * @property {string} [description]
 * @property {string} name
 * @property {number} [remainingSeats]
 */

/**
 * @typedef {Object} UserProvisioningCollectionResponsePublicSeatNoPagingListMatch
 * @property {string} [description]
 * @property {string} [name]
 * @property {number} [remainingSeats]
 */

/**
 * @typedef {Object} UserProvisioningCollectionResponsePublicTeamNoPaging
 * @property {string} id
 * @property {string} name
 * @property {Array} secondaryUserIds
 * @property {Array} userIds
 */

/**
 * @typedef {Object} UserProvisioningCollectionResponsePublicTeamNoPagingListMatch
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [secondaryUserIds]
 * @property {Array} [userIds]
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

