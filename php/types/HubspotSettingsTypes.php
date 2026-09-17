<?php
declare(strict_types=1);

// Typed models for the HubspotSettings SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Basic entity data model. */
class Basic
{
}

/** Request payload for Basic#remove. */
class BasicRemoveMatch
{
    public string $team_id;
}

/** ExchangeRate entity data model. */
class ExchangeRate
{
}

/** Request payload for ExchangeRate#create. */
class ExchangeRateCreateData
{
}

/** MulticurrencyBatchResponseExchangeRate entity data model. */
class MulticurrencyBatchResponseExchangeRate
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for MulticurrencyBatchResponseExchangeRate#create. */
class MulticurrencyBatchResponseExchangeRateCreateData
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** MulticurrencyCentralExchangeRatesInformation entity data model. */
class MulticurrencyCentralExchangeRatesInformation
{
    public bool $centralExchangeRatesEnabled;
}

/** Request payload for MulticurrencyCentralExchangeRatesInformation#load. */
class MulticurrencyCentralExchangeRatesInformationLoadMatch
{
    public ?bool $centralExchangeRatesEnabled = null;
}

/** MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging entity data model. */
class MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging
{
    public string $currencyCode;
    public string $currencyName;
}

/** Request payload for MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging#list. */
class MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingListMatch
{
    public ?string $currencyCode = null;
    public ?string $currencyName = null;
}

/** MulticurrencyCollectionResponseExchangeRateForwardPaging entity data model. */
class MulticurrencyCollectionResponseExchangeRateForwardPaging
{
    public float $conversionRate;
    public string $createdAt;
    public string $effectiveAt;
    public string $fromCurrencyCode;
    public string $id;
    public string $toCurrencyCode;
    public string $updatedAt;
    public bool $visibleInUI;
}

/** Request payload for MulticurrencyCollectionResponseExchangeRateForwardPaging#list. */
class MulticurrencyCollectionResponseExchangeRateForwardPagingListMatch
{
    public ?string $after = null;
    public ?string $from_currency_code = null;
    public ?int $limit = null;
    public ?string $to_currency_code = null;
}

/** MulticurrencyCollectionResponseExchangeRateNoPaging entity data model. */
class MulticurrencyCollectionResponseExchangeRateNoPaging
{
    public float $conversionRate;
    public string $createdAt;
    public string $effectiveAt;
    public string $fromCurrencyCode;
    public string $id;
    public string $toCurrencyCode;
    public string $updatedAt;
    public bool $visibleInUI;
}

/** Request payload for MulticurrencyCollectionResponseExchangeRateNoPaging#list. */
class MulticurrencyCollectionResponseExchangeRateNoPagingListMatch
{
    public ?float $conversionRate = null;
    public ?string $createdAt = null;
    public ?string $effectiveAt = null;
    public ?string $fromCurrencyCode = null;
    public ?string $id = null;
    public ?string $toCurrencyCode = null;
    public ?string $updatedAt = null;
    public ?bool $visibleInUI = null;
}

/** MulticurrencyCompanyCurrency entity data model. */
class MulticurrencyCompanyCurrency
{
    public string $createdAt;
    public string $currencyCode;
    public string $id;
}

/** Request payload for MulticurrencyCompanyCurrency#load. */
class MulticurrencyCompanyCurrencyLoadMatch
{
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public string $id;
}

/** Request payload for MulticurrencyCompanyCurrency#update. */
class MulticurrencyCompanyCurrencyUpdateData
{
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?string $id = null;
}

/** MulticurrencyExchangeRate entity data model. */
class MulticurrencyExchangeRate
{
    public float $conversionRate;
    public string $createdAt;
    public string $currencyCode;
    public string $effectiveAt;
    public string $fromCurrencyCode;
    public string $id;
    public string $toCurrencyCode;
    public string $updatedAt;
    public bool $visibleInUI;
}

/** Request payload for MulticurrencyExchangeRate#load. */
class MulticurrencyExchangeRateLoadMatch
{
    public string $id;
}

/** Request payload for MulticurrencyExchangeRate#create. */
class MulticurrencyExchangeRateCreateData
{
    public float $conversionRate;
    public string $createdAt;
    public string $currencyCode;
    public string $effectiveAt;
    public string $fromCurrencyCode;
    public string $id;
    public string $toCurrencyCode;
    public string $updatedAt;
    public bool $visibleInUI;
}

/** Request payload for MulticurrencyExchangeRate#update. */
class MulticurrencyExchangeRateUpdateData
{
    public string $id;
    public ?float $conversionRate = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?string $effectiveAt = null;
    public ?string $fromCurrencyCode = null;
    public ?string $toCurrencyCode = null;
    public ?string $updatedAt = null;
    public ?bool $visibleInUI = null;
}

/** TaxRate entity data model. */
class TaxRate
{
    public bool $active;
    public string $createdAt;
    public string $id;
    public string $label;
    public string $name;
    public float $percentageRate;
    public string $updatedAt;
}

/** Request payload for TaxRate#load. */
class TaxRateLoadMatch
{
    public string $id;
}

/** Request payload for TaxRate#list. */
class TaxRateListMatch
{
    public ?bool $active = null;
    public ?string $after = null;
    public ?int $limit = null;
}

/** TeamsBatchResponseTeamMember entity data model. */
class TeamsBatchResponseTeamMember
{
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for TeamsBatchResponseTeamMember#create. */
class TeamsBatchResponseTeamMemberCreateData
{
    public string $completedAt;
    public ?array $errors = null;
    public array $inputs;
    public ?array $links = null;
    public ?int $numErrors = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** TeamsCollectionResponseTeamMemberResponseForwardPaging entity data model. */
class TeamsCollectionResponseTeamMemberResponseForwardPaging
{
    public string $type;
    public string $userId;
}

/** Request payload for TeamsCollectionResponseTeamMemberResponseForwardPaging#list. */
class TeamsCollectionResponseTeamMemberResponseForwardPagingListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
}

/** TeamsCollectionResponseTeamResponseForwardPaging entity data model. */
class TeamsCollectionResponseTeamResponseForwardPaging
{
    public string $id;
    public string $name;
    public ?string $parentTeamId = null;
}

/** Request payload for TeamsCollectionResponseTeamResponseForwardPaging#list. */
class TeamsCollectionResponseTeamResponseForwardPagingListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
}

/** TeamsTeam entity data model. */
class TeamsTeam
{
    public string $id;
    public array $members;
    public string $name;
    public ?string $parentTeamId = null;
}

/** Request payload for TeamsTeam#load. */
class TeamsTeamLoadMatch
{
    public string $team_id;
}

/** Request payload for TeamsTeam#create. */
class TeamsTeamCreateData
{
    public string $id;
    public array $members;
    public string $name;
    public ?string $parentTeamId = null;
}

/** Request payload for TeamsTeam#update. */
class TeamsTeamUpdateData
{
    public string $team_id;
    public ?string $id = null;
    public ?array $members = null;
    public ?string $name = null;
    public ?string $parentTeamId = null;
}

/** TeamsTeamMember entity data model. */
class TeamsTeamMember
{
    public string $type;
    public string $userId;
}

/** Request payload for TeamsTeamMember#create. */
class TeamsTeamMemberCreateData
{
    public string $type;
    public string $userId;
}

/** User entity data model. */
class User
{
}

/** Request payload for User#remove. */
class UserRemoveMatch
{
    public string $user_id;
    public ?string $id_property = null;
}

/** UserProvisioningCollectionResponsePublicPermissionSetNo entity data model. */
class UserProvisioningCollectionResponsePublicPermissionSetNo
{
    public string $id;
    public string $name;
    public bool $requiresBillingWrite;
}

/** Request payload for UserProvisioningCollectionResponsePublicPermissionSetNo#list. */
class UserProvisioningCollectionResponsePublicPermissionSetNoListMatch
{
    public ?string $id = null;
    public ?string $name = null;
    public ?bool $requiresBillingWrite = null;
}

/** UserProvisioningCollectionResponsePublicSeatNoPaging entity data model. */
class UserProvisioningCollectionResponsePublicSeatNoPaging
{
    public ?string $description = null;
    public string $name;
    public ?int $remainingSeats = null;
}

/** Request payload for UserProvisioningCollectionResponsePublicSeatNoPaging#list. */
class UserProvisioningCollectionResponsePublicSeatNoPagingListMatch
{
    public ?string $description = null;
    public ?string $name = null;
    public ?int $remainingSeats = null;
}

/** UserProvisioningCollectionResponsePublicTeamNoPaging entity data model. */
class UserProvisioningCollectionResponsePublicTeamNoPaging
{
    public string $id;
    public string $name;
    public array $secondaryUserIds;
    public array $userIds;
}

/** Request payload for UserProvisioningCollectionResponsePublicTeamNoPaging#list. */
class UserProvisioningCollectionResponsePublicTeamNoPagingListMatch
{
    public ?string $id = null;
    public ?string $name = null;
    public ?array $secondaryUserIds = null;
    public ?array $userIds = null;
}

/** UserProvisioningCollectionResponsePublicUserForwardPaging entity data model. */
class UserProvisioningCollectionResponsePublicUserForwardPaging
{
    public string $email;
    public ?string $firstName = null;
    public string $id;
    public ?string $lastName = null;
    public ?string $primaryTeamId = null;
    public ?string $roleId = null;
    public array $roleIds;
    public ?array $seatNames = null;
    public ?array $secondaryTeamIds = null;
    public ?bool $sendWelcomeEmail = null;
    public bool $superAdmin;
}

/** Request payload for UserProvisioningCollectionResponsePublicUserForwardPaging#list. */
class UserProvisioningCollectionResponsePublicUserForwardPagingListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
}

/** UserProvisioningPublicUser entity data model. */
class UserProvisioningPublicUser
{
    public string $email;
    public ?string $firstName = null;
    public string $id;
    public ?string $lastName = null;
    public ?string $primaryTeamId = null;
    public ?string $roleId = null;
    public array $roleIds;
    public ?array $seatNames = null;
    public ?array $secondaryTeamIds = null;
    public ?bool $sendWelcomeEmail = null;
    public bool $superAdmin;
}

/** Request payload for UserProvisioningPublicUser#load. */
class UserProvisioningPublicUserLoadMatch
{
    public string $user_id;
    public ?string $id_property = null;
}

/** Request payload for UserProvisioningPublicUser#create. */
class UserProvisioningPublicUserCreateData
{
    public string $email;
    public ?string $firstName = null;
    public string $id;
    public ?string $lastName = null;
    public ?string $primaryTeamId = null;
    public ?string $roleId = null;
    public array $roleIds;
    public ?array $seatNames = null;
    public ?array $secondaryTeamIds = null;
    public ?bool $sendWelcomeEmail = null;
    public bool $superAdmin;
}

/** Request payload for UserProvisioningPublicUser#update. */
class UserProvisioningPublicUserUpdateData
{
    public string $user_id;
    public ?string $id_property = null;
    public ?string $email = null;
    public ?string $firstName = null;
    public ?string $id = null;
    public ?string $lastName = null;
    public ?string $primaryTeamId = null;
    public ?string $roleId = null;
    public ?array $roleIds = null;
    public ?array $seatNames = null;
    public ?array $secondaryTeamIds = null;
    public ?bool $sendWelcomeEmail = null;
    public ?bool $superAdmin = null;
}

