# HubspotSettings Lua SDK



The Lua SDK for the HubspotSettings API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Basic()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-settings-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("hubspot-settings_sdk")

local client = sdk.new({
  apikey = os.getenv("HUBSPOT_SETTINGS_APIKEY"),
})
```

### 3. Load a teamsteam

TeamsTeam is nested under team, so provide the `team_id`.

```lua
local teamsteam, err = client:TeamsTeam():load({ team_id = "example_team_id" })
if err then error(err) end
print(teamsteam)
```

### 4. Create, update, and remove

```lua
-- Remove
client:Basic():remove({ team_id = "example_team_id" })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local userprovisioningcollectionresponsepublicteamnopagings, err = client:UserProvisioningCollectionResponsePublicTeamNoPaging():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:UserProvisioningCollectionResponsePublicTeamNoPaging():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_SETTINGS_TEST_LIVE=TRUE
HUBSPOT_SETTINGS_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### HubspotSettingsSDK

```lua
local sdk = require("hubspot-settings_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Basic` | `(data) -> BasicEntity` | Create a Basic entity instance. |
| `ExchangeRate` | `(data) -> ExchangeRateEntity` | Create an ExchangeRate entity instance. |
| `MulticurrencyBatchResponseExchangeRate` | `(data) -> MulticurrencyBatchResponseExchangeRateEntity` | Create a MulticurrencyBatchResponseExchangeRate entity instance. |
| `MulticurrencyCentralExchangeRatesInformation` | `(data) -> MulticurrencyCentralExchangeRatesInformationEntity` | Create a MulticurrencyCentralExchangeRatesInformation entity instance. |
| `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging` | `(data) -> MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` | Create a MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging entity instance. |
| `MulticurrencyCollectionResponseExchangeRateForwardPaging` | `(data) -> MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` | Create a MulticurrencyCollectionResponseExchangeRateForwardPaging entity instance. |
| `MulticurrencyCollectionResponseExchangeRateNoPaging` | `(data) -> MulticurrencyCollectionResponseExchangeRateNoPagingEntity` | Create a MulticurrencyCollectionResponseExchangeRateNoPaging entity instance. |
| `MulticurrencyCompanyCurrency` | `(data) -> MulticurrencyCompanyCurrencyEntity` | Create a MulticurrencyCompanyCurrency entity instance. |
| `MulticurrencyExchangeRate` | `(data) -> MulticurrencyExchangeRateEntity` | Create a MulticurrencyExchangeRate entity instance. |
| `TaxRate` | `(data) -> TaxRateEntity` | Create a TaxRate entity instance. |
| `TeamsBatchResponseTeamMember` | `(data) -> TeamsBatchResponseTeamMemberEntity` | Create a TeamsBatchResponseTeamMember entity instance. |
| `TeamsCollectionResponseTeamMemberResponseForwardPaging` | `(data) -> TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` | Create a TeamsCollectionResponseTeamMemberResponseForwardPaging entity instance. |
| `TeamsCollectionResponseTeamResponseForwardPaging` | `(data) -> TeamsCollectionResponseTeamResponseForwardPagingEntity` | Create a TeamsCollectionResponseTeamResponseForwardPaging entity instance. |
| `TeamsTeam` | `(data) -> TeamsTeamEntity` | Create a TeamsTeam entity instance. |
| `TeamsTeamMember` | `(data) -> TeamsTeamMemberEntity` | Create a TeamsTeamMember entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserProvisioningCollectionResponsePublicPermissionSetNo` | `(data) -> UserProvisioningCollectionResponsePublicPermissionSetNoEntity` | Create an UserProvisioningCollectionResponsePublicPermissionSetNo entity instance. |
| `UserProvisioningCollectionResponsePublicSeatNoPaging` | `(data) -> UserProvisioningCollectionResponsePublicSeatNoPagingEntity` | Create an UserProvisioningCollectionResponsePublicSeatNoPaging entity instance. |
| `UserProvisioningCollectionResponsePublicTeamNoPaging` | `(data) -> UserProvisioningCollectionResponsePublicTeamNoPagingEntity` | Create an UserProvisioningCollectionResponsePublicTeamNoPaging entity instance. |
| `UserProvisioningCollectionResponsePublicUserForwardPaging` | `(data) -> UserProvisioningCollectionResponsePublicUserForwardPagingEntity` | Create an UserProvisioningCollectionResponsePublicUserForwardPaging entity instance. |
| `UserProvisioningPublicUser` | `(data) -> UserProvisioningPublicUserEntity` | Create an UserProvisioningPublicUser entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local multicurrency_central_exchange_rates_information, err = client:MulticurrencyCentralExchangeRatesInformation():load()
    if err then error(err) end
    -- multicurrency_central_exchange_rates_information is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local basic = client:Basic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ExchangeRate

Create an instance: `local exchange_rate = client:ExchangeRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local exchange_rate, err = client:ExchangeRate():create({
})
```


### MulticurrencyBatchResponseExchangeRate

Create an instance: `local multicurrency_batch_response_exchange_rate = client:MulticurrencyBatchResponseExchangeRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The datetime the response was completed |
| `inputs` | `table` | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `table` | The link to the next page with exchange rates. |
| `requestedAt` | `string` | The datetime the of the request. |
| `results` | `table` | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | The datetime the of the request. |
| `status` | `string` | The current status of the response (e.g. |

#### Example: Create

```lua
local multicurrency_batch_response_exchange_rate, err = client:MulticurrencyBatchResponseExchangeRate():create({
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### MulticurrencyCentralExchangeRatesInformation

Create an instance: `local multicurrency_central_exchange_rates_information = client:MulticurrencyCentralExchangeRatesInformation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `centralExchangeRatesEnabled` | `boolean` | Indicates if central exchange rates is enabled for the portal or not. |

#### Example: Load

```lua
local multicurrency_central_exchange_rates_information, err = client:MulticurrencyCentralExchangeRatesInformation():load()
```


### MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging

Create an instance: `local multicurrency_collection_response_currency_code_info_no_paging = client:MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(nil)`

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

```lua
local multicurrency_collection_response_currency_code_info_no_pagings, err = client:MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging():list()
```


### MulticurrencyCollectionResponseExchangeRateForwardPaging

Create an instance: `local multicurrency_collection_response_exchange_rate_forward_paging = client:MulticurrencyCollectionResponseExchangeRateForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `number` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `boolean` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```lua
local multicurrency_collection_response_exchange_rate_forward_pagings, err = client:MulticurrencyCollectionResponseExchangeRateForwardPaging():list()
```


### MulticurrencyCollectionResponseExchangeRateNoPaging

Create an instance: `local multicurrency_collection_response_exchange_rate_no_paging = client:MulticurrencyCollectionResponseExchangeRateNoPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `number` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `boolean` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```lua
local multicurrency_collection_response_exchange_rate_no_pagings, err = client:MulticurrencyCollectionResponseExchangeRateNoPaging():list()
```


### MulticurrencyCompanyCurrency

Create an instance: `local multicurrency_company_currency = client:MulticurrencyCompanyCurrency(nil)`

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

```lua
local multicurrency_company_currency, err = client:MulticurrencyCompanyCurrency():load({ id = "multicurrency_company_currency_id" })
```


### MulticurrencyExchangeRate

Create an instance: `local multicurrency_exchange_rate = client:MulticurrencyExchangeRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `number` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `currencyCode` | `string` | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `boolean` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: Load

```lua
local multicurrency_exchange_rate, err = client:MulticurrencyExchangeRate():load({ id = "multicurrency_exchange_rate_id" })
```

#### Example: Create

```lua
local multicurrency_exchange_rate, err = client:MulticurrencyExchangeRate():create({
  conversionRate = 1, -- number
  createdAt = "example_createdAt", -- string
  currencyCode = "example_currencyCode", -- string
  effectiveAt = "example_effectiveAt", -- string
  fromCurrencyCode = "example_fromCurrencyCode", -- string
  id = "example_id", -- string
  toCurrencyCode = "example_toCurrencyCode", -- string
  updatedAt = "example_updatedAt", -- string
  visibleInUI = true, -- boolean
})
```


### TaxRate

Create an instance: `local tax_rate = client:TaxRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Indicates whether the tax rate group is currently active. |
| `createdAt` | `string` | The date and time when the tax rate was created. |
| `id` | `string` | The unique identifier for the tax rate. |
| `label` | `string` | The display label for the tax rate. |
| `name` | `string` | The name of the tax rate. |
| `percentageRate` | `number` | The percentage rate applied. |
| `updatedAt` | `string` | The date and time when the tax rate was last updated. |

#### Example: Load

```lua
local tax_rate, err = client:TaxRate():load({ id = "tax_rate_id" })
```

#### Example: List

```lua
local tax_rates, err = client:TaxRate():list()
```


### TeamsBatchResponseTeamMember

Create an instance: `local teams_batch_response_team_member = client:TeamsBatchResponseTeamMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `table` | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `table` | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `table` | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `number` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```lua
local teams_batch_response_team_member, err = client:TeamsBatchResponseTeamMember():create({
  ["2026_09_id"] = "example_2026_09_id", -- string
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### TeamsCollectionResponseTeamMemberResponseForwardPaging

Create an instance: `local teams_collection_response_team_member_response_forward_paging = client:TeamsCollectionResponseTeamMemberResponseForwardPaging(nil)`

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

```lua
local teams_collection_response_team_member_response_forward_pagings, err = client:TeamsCollectionResponseTeamMemberResponseForwardPaging():list()
```


### TeamsCollectionResponseTeamResponseForwardPaging

Create an instance: `local teams_collection_response_team_response_forward_paging = client:TeamsCollectionResponseTeamResponseForwardPaging(nil)`

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

```lua
local teams_collection_response_team_response_forward_pagings, err = client:TeamsCollectionResponseTeamResponseForwardPaging():list()
```


### TeamsTeam

Create an instance: `local teams_team = client:TeamsTeam(nil)`

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
| `members` | `table` | An array of team members to be assigned to the new team. |
| `name` | `string` | The name of the team, represented as a string. |
| `parentTeamId` | `string` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: Load

```lua
local teams_team, err = client:TeamsTeam():load({ team_id = "team_id" })
```

#### Example: Create

```lua
local teams_team, err = client:TeamsTeam():create({
  id = "example_id", -- string
  members = {}, -- table
  name = "example_name", -- string
})
```


### TeamsTeamMember

Create an instance: `local teams_team_member = client:TeamsTeamMember(nil)`

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

```lua
local teams_team_member, err = client:TeamsTeamMember():create({
  ["2026_09_id"] = "example_2026_09_id", -- string
  type = "example_type", -- string
  userId = "example_userId", -- string
})
```


### User

Create an instance: `local user = client:User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### UserProvisioningCollectionResponsePublicPermissionSetNo

Create an instance: `local user_provisioning_collection_response_public_permission_set_no = client:UserProvisioningCollectionResponsePublicPermissionSetNo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the permission set. |
| `name` | `string` | The name of the permission set. |
| `requiresBillingWrite` | `boolean` | A boolean indicating whether the permission set requires billing write access. |

#### Example: List

```lua
local user_provisioning_collection_response_public_permission_set_nos, err = client:UserProvisioningCollectionResponsePublicPermissionSetNo():list()
```


### UserProvisioningCollectionResponsePublicSeatNoPaging

Create an instance: `local user_provisioning_collection_response_public_seat_no_paging = client:UserProvisioningCollectionResponsePublicSeatNoPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A string providing additional details about the seat. |
| `name` | `string` | The name of the seat. |
| `remainingSeats` | `number` | An integer indicating the number of seats that are still available. |

#### Example: List

```lua
local user_provisioning_collection_response_public_seat_no_pagings, err = client:UserProvisioningCollectionResponsePublicSeatNoPaging():list()
```


### UserProvisioningCollectionResponsePublicTeamNoPaging

Create an instance: `local user_provisioning_collection_response_public_team_no_paging = client:UserProvisioningCollectionResponsePublicTeamNoPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `name` | `string` | The name of the team, represented as a string. |
| `secondaryUserIds` | `table` | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `table` | An array of strings representing the IDs of users who are primary members of the team. |

#### Example: List

```lua
local user_provisioning_collection_response_public_team_no_pagings, err = client:UserProvisioningCollectionResponsePublicTeamNoPaging():list()
```


### UserProvisioningCollectionResponsePublicUserForwardPaging

Create an instance: `local user_provisioning_collection_response_public_user_forward_paging = client:UserProvisioningCollectionResponsePublicUserForwardPaging(nil)`

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
| `roleIds` | `table` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `table` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `table` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `boolean` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `boolean` | A boolean indicating whether the user has super admin privileges. |

#### Example: List

```lua
local user_provisioning_collection_response_public_user_forward_pagings, err = client:UserProvisioningCollectionResponsePublicUserForwardPaging():list()
```


### UserProvisioningPublicUser

Create an instance: `local user_provisioning_public_user = client:UserProvisioningPublicUser(nil)`

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
| `roleIds` | `table` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `table` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `table` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `boolean` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `boolean` | A boolean indicating whether the user has super admin privileges. |

#### Example: Load

```lua
local user_provisioning_public_user, err = client:UserProvisioningPublicUser():load({ user_id = "user_id" })
```

#### Example: Create

```lua
local user_provisioning_public_user, err = client:UserProvisioningPublicUser():create({
  email = "example_email", -- string
  id = "example_id", -- string
  roleIds = {}, -- table
  superAdmin = true, -- boolean
})
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

Features are the extension mechanism. A feature is a Lua table
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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── hubspot-settings_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`hubspot-settings_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local userprovisioningcollectionresponsepublicteamnopaging = client:UserProvisioningCollectionResponsePublicTeamNoPaging()
userprovisioningcollectionresponsepublicteamnopaging:list()

-- userprovisioningcollectionresponsepublicteamnopaging:data_get() now returns the userprovisioningcollectionresponsepublicteamnopaging data from the last list
-- userprovisioningcollectionresponsepublicteamnopaging:match_get() returns the last match criteria
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
