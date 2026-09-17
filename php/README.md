# HubspotSettings PHP SDK



The PHP SDK for the HubspotSettings API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Basic()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hubspot-settings-sdk/releases](https://github.com/voxgig-sdk/hubspot-settings-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'hubspotsettings_sdk.php';

$client = new HubspotSettingsSDK([
    "apikey" => getenv("HUBSPOT_SETTINGS_APIKEY"),
]);
```

### 3. Load a teamsteam

TeamsTeam is nested under team, so provide the `team_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the TeamsTeam record (throws on error).
    $teamsteam = $client->TeamsTeam()->load(["team_id" => "example_team_id"]);
    print_r($teamsteam->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// Remove
$client->Basic()->remove(["team_id" => "example_team_id"]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $userprovisioningcollectionresponsepublicteamnopagings = $client->UserProvisioningCollectionResponsePublicTeamNoPaging()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = HubspotSettingsSDK::test([
    "entity" => ["multicurrencyexchangerate" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$multicurrencyexchangerate = $client->MulticurrencyExchangeRate()->load(["id" => "test01"]);
print_r($multicurrencyexchangerate->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new HubspotSettingsSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_SETTINGS_TEST_LIVE=TRUE
HUBSPOT_SETTINGS_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### HubspotSettingsSDK

```php
require_once 'hubspotsettings_sdk.php';
$client = new HubspotSettingsSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = HubspotSettingsSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### HubspotSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Basic` | `($data): BasicEntity` | Create a Basic entity instance. |
| `ExchangeRate` | `($data): ExchangeRateEntity` | Create an ExchangeRate entity instance. |
| `MulticurrencyBatchResponseExchangeRate` | `($data): MulticurrencyBatchResponseExchangeRateEntity` | Create a MulticurrencyBatchResponseExchangeRate entity instance. |
| `MulticurrencyCentralExchangeRatesInformation` | `($data): MulticurrencyCentralExchangeRatesInformationEntity` | Create a MulticurrencyCentralExchangeRatesInformation entity instance. |
| `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging` | `($data): MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` | Create a MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging entity instance. |
| `MulticurrencyCollectionResponseExchangeRateForwardPaging` | `($data): MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` | Create a MulticurrencyCollectionResponseExchangeRateForwardPaging entity instance. |
| `MulticurrencyCollectionResponseExchangeRateNoPaging` | `($data): MulticurrencyCollectionResponseExchangeRateNoPagingEntity` | Create a MulticurrencyCollectionResponseExchangeRateNoPaging entity instance. |
| `MulticurrencyCompanyCurrency` | `($data): MulticurrencyCompanyCurrencyEntity` | Create a MulticurrencyCompanyCurrency entity instance. |
| `MulticurrencyExchangeRate` | `($data): MulticurrencyExchangeRateEntity` | Create a MulticurrencyExchangeRate entity instance. |
| `TaxRate` | `($data): TaxRateEntity` | Create a TaxRate entity instance. |
| `TeamsBatchResponseTeamMember` | `($data): TeamsBatchResponseTeamMemberEntity` | Create a TeamsBatchResponseTeamMember entity instance. |
| `TeamsCollectionResponseTeamMemberResponseForwardPaging` | `($data): TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` | Create a TeamsCollectionResponseTeamMemberResponseForwardPaging entity instance. |
| `TeamsCollectionResponseTeamResponseForwardPaging` | `($data): TeamsCollectionResponseTeamResponseForwardPagingEntity` | Create a TeamsCollectionResponseTeamResponseForwardPaging entity instance. |
| `TeamsTeam` | `($data): TeamsTeamEntity` | Create a TeamsTeam entity instance. |
| `TeamsTeamMember` | `($data): TeamsTeamMemberEntity` | Create a TeamsTeamMember entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `UserProvisioningCollectionResponsePublicPermissionSetNo` | `($data): UserProvisioningCollectionResponsePublicPermissionSetNoEntity` | Create an UserProvisioningCollectionResponsePublicPermissionSetNo entity instance. |
| `UserProvisioningCollectionResponsePublicSeatNoPaging` | `($data): UserProvisioningCollectionResponsePublicSeatNoPagingEntity` | Create an UserProvisioningCollectionResponsePublicSeatNoPaging entity instance. |
| `UserProvisioningCollectionResponsePublicTeamNoPaging` | `($data): UserProvisioningCollectionResponsePublicTeamNoPagingEntity` | Create an UserProvisioningCollectionResponsePublicTeamNoPaging entity instance. |
| `UserProvisioningCollectionResponsePublicUserForwardPaging` | `($data): UserProvisioningCollectionResponsePublicUserForwardPagingEntity` | Create an UserProvisioningCollectionResponsePublicUserForwardPaging entity instance. |
| `UserProvisioningPublicUser` | `($data): UserProvisioningPublicUserEntity` | Create an UserProvisioningPublicUser entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Basic

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/settings/teams/2026-09/{teamId}/members/{userId}`

#### ExchangeRate

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/settings/currencies/2026-09/exchange-rates/update-visibility`

#### MulticurrencyBatchResponseExchangeRate

| Field | Description |
| --- | --- |
| `completedAt` | The datetime the response was completed |
| `inputs` | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | The link to the next page with exchange rates. |
| `requestedAt` | The datetime the of the request. |
| `results` | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | The datetime the of the request. |
| `status` | The current status of the response (e.g. |

Operations: Create.

API path: `/settings/currencies/2026-09/exchange-rates/batch/create`

#### MulticurrencyCentralExchangeRatesInformation

| Field | Description |
| --- | --- |
| `centralExchangeRatesEnabled` | Indicates if central exchange rates is enabled for the portal or not. |

Operations: Load.

API path: `/settings/currencies/2026-09/central-fx-rates/information`

#### MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging

| Field | Description |
| --- | --- |
| `currencyCode` | The three-letter code representing a specific currency (ex. |
| `currencyName` | The full name of the currency (ex. |

Operations: List.

API path: `/settings/currencies/2026-09/central-fx-rates/unsupported-currencies`

#### MulticurrencyCollectionResponseExchangeRateForwardPaging

| Field | Description |
| --- | --- |
| `conversionRate` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | The date the exchange rate was created. |
| `effectiveAt` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | A unique identifier for the exchange rate |
| `toCurrencyCode` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | The date the exchange rate was last updated. |
| `visibleInUI` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

Operations: List.

API path: `/settings/currencies/2026-09/exchange-rates`

#### MulticurrencyCollectionResponseExchangeRateNoPaging

| Field | Description |
| --- | --- |
| `conversionRate` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | The date the exchange rate was created. |
| `effectiveAt` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | A unique identifier for the exchange rate |
| `toCurrencyCode` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | The date the exchange rate was last updated. |
| `visibleInUI` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

Operations: List.

API path: `/settings/currencies/2026-09/exchange-rates/current`

#### MulticurrencyCompanyCurrency

| Field | Description |
| --- | --- |
| `createdAt` | The date the company currency was created. |
| `currencyCode` | The three-letter code representing a specific currency (ex. |
| `id` | The currency code for the company currency |

Operations: Load, Update.

API path: `/settings/currencies/2026-09/company-currency`

#### MulticurrencyExchangeRate

| Field | Description |
| --- | --- |
| `conversionRate` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | The date the exchange rate was created. |
| `currencyCode` | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | A unique identifier for the exchange rate |
| `toCurrencyCode` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | The date the exchange rate was last updated. |
| `visibleInUI` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

Operations: Create, Load, Update.

API path: `/settings/currencies/2026-09/central-fx-rates/add-currency`

#### TaxRate

| Field | Description |
| --- | --- |
| `active` | Indicates whether the tax rate group is currently active. |
| `createdAt` | The date and time when the tax rate was created. |
| `id` | The unique identifier for the tax rate. |
| `label` | The display label for the tax rate. |
| `name` | The name of the tax rate. |
| `percentageRate` | The percentage rate applied. |
| `updatedAt` | The date and time when the tax rate was last updated. |

Operations: List, Load.

API path: `/tax-rates/2026-09/tax-rates`

#### TeamsBatchResponseTeamMember

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | The number of errors encountered during the batch operation. |
| `requestedAt` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | The current status of the batch operation. |

Operations: Create.

API path: `/settings/teams/2026-09/{teamId}/members/batch`

#### TeamsCollectionResponseTeamMemberResponseForwardPaging

| Field | Description |
| --- | --- |
| `type` | The type of membership the user has in the team. |
| `userId` | The unique identifier for the user, represented as a string. |

Operations: List.

API path: `/settings/teams/2026-09/{teamId}/members`

#### TeamsCollectionResponseTeamResponseForwardPaging

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the team, represented as a string. |
| `name` | The name of the team, represented as a string. |
| `parentTeamId` | The unique identifier of the parent team, if applicable, represented as a string. |

Operations: List.

API path: `/settings/teams/2026-09`

#### TeamsTeam

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the team, represented as a string. |
| `members` | An array of team members to be assigned to the new team. |
| `name` | The name of the team, represented as a string. |
| `parentTeamId` | The unique identifier of the parent team, if applicable, represented as a string. |

Operations: Create, Load, Update.

API path: `/settings/teams/2026-09`

#### TeamsTeamMember

| Field | Description |
| --- | --- |
| `type` | The type of team member assignment. |
| `userId` | The unique identifier for the user being assigned to the team. |

Operations: Create.

API path: `/settings/teams/2026-09/{teamId}/members`

#### User

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/settings/users/2026-09/{userId}`

#### UserProvisioningCollectionResponsePublicPermissionSetNo

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the permission set. |
| `name` | The name of the permission set. |
| `requiresBillingWrite` | A boolean indicating whether the permission set requires billing write access. |

Operations: List.

API path: `/settings/users/2026-09/roles`

#### UserProvisioningCollectionResponsePublicSeatNoPaging

| Field | Description |
| --- | --- |
| `description` | A string providing additional details about the seat. |
| `name` | The name of the seat. |
| `remainingSeats` | An integer indicating the number of seats that are still available. |

Operations: List.

API path: `/settings/users/2026-09/seats`

#### UserProvisioningCollectionResponsePublicTeamNoPaging

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the team, represented as a string. |
| `name` | The name of the team, represented as a string. |
| `secondaryUserIds` | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | An array of strings representing the IDs of users who are primary members of the team. |

Operations: List.

API path: `/settings/users/2026-09/teams`

#### UserProvisioningCollectionResponsePublicUserForwardPaging

| Field | Description |
| --- | --- |
| `email` | The email address of the user. |
| `firstName` | The first name of the user, represented as a string. |
| `id` | The unique identifier for the user, represented as a string. |
| `lastName` | The last name of the user, represented as a string. |
| `primaryTeamId` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | A string representing a single role ID assigned to the user. |
| `roleIds` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | A boolean indicating whether the user has super admin privileges. |

Operations: List.

API path: `/settings/users/2026-09`

#### UserProvisioningPublicUser

| Field | Description |
| --- | --- |
| `email` | The email address of the user. |
| `firstName` | The first name of the user, represented as a string. |
| `id` | The unique identifier for the user, represented as a string. |
| `lastName` | The last name of the user, represented as a string. |
| `primaryTeamId` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | A string representing a single role ID assigned to the user. |
| `roleIds` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | A boolean indicating whether the user has super admin privileges. |

Operations: Create, Load, Update.

API path: `/settings/users/2026-09`



## Entities


### Basic

Create an instance: `$basic = $client->Basic();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ExchangeRate

Create an instance: `$exchange_rate = $client->ExchangeRate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$exchange_rate = $client->ExchangeRate()->create([
]);
```


### MulticurrencyBatchResponseExchangeRate

Create an instance: `$multicurrency_batch_response_exchange_rate = $client->MulticurrencyBatchResponseExchangeRate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The datetime the response was completed |
| `inputs` | `array` | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `array` | The link to the next page with exchange rates. |
| `requestedAt` | `string` | The datetime the of the request. |
| `results` | `array` | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | The datetime the of the request. |
| `status` | `string` | The current status of the response (e.g. |

#### Example: Create

```php
$multicurrency_batch_response_exchange_rate = $client->MulticurrencyBatchResponseExchangeRate()->create([
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### MulticurrencyCentralExchangeRatesInformation

Create an instance: `$multicurrency_central_exchange_rates_information = $client->MulticurrencyCentralExchangeRatesInformation();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `centralExchangeRatesEnabled` | `bool` | Indicates if central exchange rates is enabled for the portal or not. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MulticurrencyCentralExchangeRatesInformation record (throws on error).
$multicurrency_central_exchange_rates_information = $client->MulticurrencyCentralExchangeRatesInformation()->load();
```


### MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging

Create an instance: `$multicurrency_collection_response_currency_code_info_no_paging = $client->MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currencyCode` | `string` | The three-letter code representing a specific currency (ex. |
| `currencyName` | `string` | The full name of the currency (ex. |

#### Example: List

```php
// list() returns an array of MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging records (throws on error).
$multicurrency_collection_response_currency_code_info_no_pagings = $client->MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging()->list();
```


### MulticurrencyCollectionResponseExchangeRateForwardPaging

Create an instance: `$multicurrency_collection_response_exchange_rate_forward_paging = $client->MulticurrencyCollectionResponseExchangeRateForwardPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```php
// list() returns an array of MulticurrencyCollectionResponseExchangeRateForwardPaging records (throws on error).
$multicurrency_collection_response_exchange_rate_forward_pagings = $client->MulticurrencyCollectionResponseExchangeRateForwardPaging()->list();
```


### MulticurrencyCollectionResponseExchangeRateNoPaging

Create an instance: `$multicurrency_collection_response_exchange_rate_no_paging = $client->MulticurrencyCollectionResponseExchangeRateNoPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```php
// list() returns an array of MulticurrencyCollectionResponseExchangeRateNoPaging records (throws on error).
$multicurrency_collection_response_exchange_rate_no_pagings = $client->MulticurrencyCollectionResponseExchangeRateNoPaging()->list();
```


### MulticurrencyCompanyCurrency

Create an instance: `$multicurrency_company_currency = $client->MulticurrencyCompanyCurrency();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date the company currency was created. |
| `currencyCode` | `string` | The three-letter code representing a specific currency (ex. |
| `id` | `string` | The currency code for the company currency |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MulticurrencyCompanyCurrency record (throws on error).
$multicurrency_company_currency = $client->MulticurrencyCompanyCurrency()->load(["id" => "multicurrency_company_currency_id"]);
```


### MulticurrencyExchangeRate

Create an instance: `$multicurrency_exchange_rate = $client->MulticurrencyExchangeRate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `currencyCode` | `string` | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MulticurrencyExchangeRate record (throws on error).
$multicurrency_exchange_rate = $client->MulticurrencyExchangeRate()->load(["id" => "multicurrency_exchange_rate_id"]);
```

#### Example: Create

```php
$multicurrency_exchange_rate = $client->MulticurrencyExchangeRate()->create([
    "conversionRate" => null, // float
    "createdAt" => null, // string
    "currencyCode" => null, // string
    "effectiveAt" => null, // string
    "fromCurrencyCode" => null, // string
    "id" => null, // string
    "toCurrencyCode" => null, // string
    "updatedAt" => null, // string
    "visibleInUI" => null, // bool
]);
```


### TaxRate

Create an instance: `$tax_rate = $client->TaxRate();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Indicates whether the tax rate group is currently active. |
| `createdAt` | `string` | The date and time when the tax rate was created. |
| `id` | `string` | The unique identifier for the tax rate. |
| `label` | `string` | The display label for the tax rate. |
| `name` | `string` | The name of the tax rate. |
| `percentageRate` | `float` | The percentage rate applied. |
| `updatedAt` | `string` | The date and time when the tax rate was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TaxRate record (throws on error).
$tax_rate = $client->TaxRate()->load(["id" => "tax_rate_id"]);
```

#### Example: List

```php
// list() returns an array of TaxRate records (throws on error).
$tax_rates = $client->TaxRate()->list();
```


### TeamsBatchResponseTeamMember

Create an instance: `$teams_batch_response_team_member = $client->TeamsBatchResponseTeamMember();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `array` | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `array` | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `array` | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `int` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```php
$teams_batch_response_team_member = $client->TeamsBatchResponseTeamMember()->create([
    "team_id" => null, // string
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### TeamsCollectionResponseTeamMemberResponseForwardPaging

Create an instance: `$teams_collection_response_team_member_response_forward_paging = $client->TeamsCollectionResponseTeamMemberResponseForwardPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | The type of membership the user has in the team. |
| `userId` | `string` | The unique identifier for the user, represented as a string. |

#### Example: List

```php
// list() returns an array of TeamsCollectionResponseTeamMemberResponseForwardPaging records (throws on error).
$teams_collection_response_team_member_response_forward_pagings = $client->TeamsCollectionResponseTeamMemberResponseForwardPaging()->list();
```


### TeamsCollectionResponseTeamResponseForwardPaging

Create an instance: `$teams_collection_response_team_response_forward_paging = $client->TeamsCollectionResponseTeamResponseForwardPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `name` | `string` | The name of the team, represented as a string. |
| `parentTeamId` | `string` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: List

```php
// list() returns an array of TeamsCollectionResponseTeamResponseForwardPaging records (throws on error).
$teams_collection_response_team_response_forward_pagings = $client->TeamsCollectionResponseTeamResponseForwardPaging()->list();
```


### TeamsTeam

Create an instance: `$teams_team = $client->TeamsTeam();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `members` | `array` | An array of team members to be assigned to the new team. |
| `name` | `string` | The name of the team, represented as a string. |
| `parentTeamId` | `string` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsTeam record (throws on error).
$teams_team = $client->TeamsTeam()->load(["team_id" => "team_id"]);
```

#### Example: Create

```php
$teams_team = $client->TeamsTeam()->create([
    "id" => null, // string
    "members" => null, // array
    "name" => null, // string
]);
```


### TeamsTeamMember

Create an instance: `$teams_team_member = $client->TeamsTeamMember();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | The type of team member assignment. |
| `userId` | `string` | The unique identifier for the user being assigned to the team. |

#### Example: Create

```php
$teams_team_member = $client->TeamsTeamMember()->create([
    "team_id" => null, // string
    "type" => null, // string
    "userId" => null, // string
]);
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### UserProvisioningCollectionResponsePublicPermissionSetNo

Create an instance: `$user_provisioning_collection_response_public_permission_set_no = $client->UserProvisioningCollectionResponsePublicPermissionSetNo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the permission set. |
| `name` | `string` | The name of the permission set. |
| `requiresBillingWrite` | `bool` | A boolean indicating whether the permission set requires billing write access. |

#### Example: List

```php
// list() returns an array of UserProvisioningCollectionResponsePublicPermissionSetNo records (throws on error).
$user_provisioning_collection_response_public_permission_set_nos = $client->UserProvisioningCollectionResponsePublicPermissionSetNo()->list();
```


### UserProvisioningCollectionResponsePublicSeatNoPaging

Create an instance: `$user_provisioning_collection_response_public_seat_no_paging = $client->UserProvisioningCollectionResponsePublicSeatNoPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A string providing additional details about the seat. |
| `name` | `string` | The name of the seat. |
| `remainingSeats` | `int` | An integer indicating the number of seats that are still available. |

#### Example: List

```php
// list() returns an array of UserProvisioningCollectionResponsePublicSeatNoPaging records (throws on error).
$user_provisioning_collection_response_public_seat_no_pagings = $client->UserProvisioningCollectionResponsePublicSeatNoPaging()->list();
```


### UserProvisioningCollectionResponsePublicTeamNoPaging

Create an instance: `$user_provisioning_collection_response_public_team_no_paging = $client->UserProvisioningCollectionResponsePublicTeamNoPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `name` | `string` | The name of the team, represented as a string. |
| `secondaryUserIds` | `array` | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `array` | An array of strings representing the IDs of users who are primary members of the team. |

#### Example: List

```php
// list() returns an array of UserProvisioningCollectionResponsePublicTeamNoPaging records (throws on error).
$user_provisioning_collection_response_public_team_no_pagings = $client->UserProvisioningCollectionResponsePublicTeamNoPaging()->list();
```


### UserProvisioningCollectionResponsePublicUserForwardPaging

Create an instance: `$user_provisioning_collection_response_public_user_forward_paging = $client->UserProvisioningCollectionResponsePublicUserForwardPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email address of the user. |
| `firstName` | `string` | The first name of the user, represented as a string. |
| `id` | `string` | The unique identifier for the user, represented as a string. |
| `lastName` | `string` | The last name of the user, represented as a string. |
| `primaryTeamId` | `string` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `string` | A string representing a single role ID assigned to the user. |
| `roleIds` | `array` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `array` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `array` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | A boolean indicating whether the user has super admin privileges. |

#### Example: List

```php
// list() returns an array of UserProvisioningCollectionResponsePublicUserForwardPaging records (throws on error).
$user_provisioning_collection_response_public_user_forward_pagings = $client->UserProvisioningCollectionResponsePublicUserForwardPaging()->list();
```


### UserProvisioningPublicUser

Create an instance: `$user_provisioning_public_user = $client->UserProvisioningPublicUser();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email address of the user. |
| `firstName` | `string` | The first name of the user, represented as a string. |
| `id` | `string` | The unique identifier for the user, represented as a string. |
| `lastName` | `string` | The last name of the user, represented as a string. |
| `primaryTeamId` | `string` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `string` | A string representing a single role ID assigned to the user. |
| `roleIds` | `array` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `array` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `array` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | A boolean indicating whether the user has super admin privileges. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the UserProvisioningPublicUser record (throws on error).
$user_provisioning_public_user = $client->UserProvisioningPublicUser()->load(["user_id" => "user_id"]);
```

#### Example: Create

```php
$user_provisioning_public_user = $client->UserProvisioningPublicUser()->create([
    "email" => null, // string
    "id" => null, // string
    "roleIds" => null, // array
    "superAdmin" => null, // bool
]);
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── hubspotsettings_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`hubspotsettings_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$userprovisioningcollectionresponsepublicteamnopaging = $client->UserProvisioningCollectionResponsePublicTeamNoPaging();
$userprovisioningcollectionresponsepublicteamnopaging->list();

// $userprovisioningcollectionresponsepublicteamnopaging->data_get() now returns the userprovisioningcollectionresponsepublicteamnopaging data from the last list
// $userprovisioningcollectionresponsepublicteamnopaging->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
