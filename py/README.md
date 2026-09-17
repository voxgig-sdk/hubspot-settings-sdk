# HubspotSettings Python SDK



The Python SDK for the HubspotSettings API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Basic()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-settings-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from hubspotsettings_sdk import HubspotSettingsSDK

client = HubspotSettingsSDK({
    "apikey": os.environ.get("HUBSPOT_SETTINGS_APIKEY"),
})
```

### 3. Load a teamsteam

TeamsTeam is nested under team, so provide the `team_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    teamsteam = client.TeamsTeam().load({"team_id": "example_team_id"})
    print(teamsteam)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Remove
client.Basic().remove({"team_id": "example_team_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    userprovisioningcollectionresponsepublicteamnopagings = client.UserProvisioningCollectionResponsePublicTeamNoPaging().list()
    print(userprovisioningcollectionresponsepublicteamnopagings)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = HubspotSettingsSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
userprovisioningcollectionresponsepublicteamnopaging = client.UserProvisioningCollectionResponsePublicTeamNoPaging().list()
# userprovisioningcollectionresponsepublicteamnopaging contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = HubspotSettingsSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### HubspotSettingsSDK

```python
from hubspotsettings_sdk import HubspotSettingsSDK

client = HubspotSettingsSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = HubspotSettingsSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### HubspotSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `basic = client.Basic()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ExchangeRate

Create an instance: `exchange_rate = client.ExchangeRate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
exchange_rate = client.ExchangeRate().create({
})
```


### MulticurrencyBatchResponseExchangeRate

Create an instance: `multicurrency_batch_response_exchange_rate = client.MulticurrencyBatchResponseExchangeRate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` | The datetime the response was completed |
| `inputs` | `list` | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `dict` | The link to the next page with exchange rates. |
| `requestedAt` | `str` | The datetime the of the request. |
| `results` | `list` | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `str` | The datetime the of the request. |
| `status` | `str` | The current status of the response (e.g. |

#### Example: Create

```python
multicurrency_batch_response_exchange_rate = client.MulticurrencyBatchResponseExchangeRate().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### MulticurrencyCentralExchangeRatesInformation

Create an instance: `multicurrency_central_exchange_rates_information = client.MulticurrencyCentralExchangeRatesInformation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `centralExchangeRatesEnabled` | `bool` | Indicates if central exchange rates is enabled for the portal or not. |

#### Example: Load

```python
multicurrency_central_exchange_rates_information = client.MulticurrencyCentralExchangeRatesInformation().load()
```


### MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging

Create an instance: `multicurrency_collection_response_currency_code_info_no_paging = client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currencyCode` | `str` | The three-letter code representing a specific currency (ex. |
| `currencyName` | `str` | The full name of the currency (ex. |

#### Example: List

```python
multicurrency_collection_response_currency_code_info_no_pagings = client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging().list()
```


### MulticurrencyCollectionResponseExchangeRateForwardPaging

Create an instance: `multicurrency_collection_response_exchange_rate_forward_paging = client.MulticurrencyCollectionResponseExchangeRateForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `str` | The date the exchange rate was created. |
| `effectiveAt` | `str` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `str` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `str` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `str` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `str` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```python
multicurrency_collection_response_exchange_rate_forward_pagings = client.MulticurrencyCollectionResponseExchangeRateForwardPaging().list()
```


### MulticurrencyCollectionResponseExchangeRateNoPaging

Create an instance: `multicurrency_collection_response_exchange_rate_no_paging = client.MulticurrencyCollectionResponseExchangeRateNoPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `str` | The date the exchange rate was created. |
| `effectiveAt` | `str` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `str` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `str` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `str` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `str` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```python
multicurrency_collection_response_exchange_rate_no_pagings = client.MulticurrencyCollectionResponseExchangeRateNoPaging().list()
```


### MulticurrencyCompanyCurrency

Create an instance: `multicurrency_company_currency = client.MulticurrencyCompanyCurrency()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | The date the company currency was created. |
| `currencyCode` | `str` | The three-letter code representing a specific currency (ex. |
| `id` | `str` | The currency code for the company currency |

#### Example: Load

```python
multicurrency_company_currency = client.MulticurrencyCompanyCurrency().load({"id": "multicurrency_company_currency_id"})
```


### MulticurrencyExchangeRate

Create an instance: `multicurrency_exchange_rate = client.MulticurrencyExchangeRate()`

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
| `createdAt` | `str` | The date the exchange rate was created. |
| `currencyCode` | `str` | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | `str` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `str` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `str` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `str` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `str` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: Load

```python
multicurrency_exchange_rate = client.MulticurrencyExchangeRate().load({"id": "multicurrency_exchange_rate_id"})
```

#### Example: Create

```python
multicurrency_exchange_rate = client.MulticurrencyExchangeRate().create({
    "conversionRate": 1,  # float
    "createdAt": "example_createdAt",  # str
    "currencyCode": "example_currencyCode",  # str
    "effectiveAt": "example_effectiveAt",  # str
    "fromCurrencyCode": "example_fromCurrencyCode",  # str
    "id": "example_id",  # str
    "toCurrencyCode": "example_toCurrencyCode",  # str
    "updatedAt": "example_updatedAt",  # str
    "visibleInUI": True,  # bool
})
```


### TaxRate

Create an instance: `tax_rate = client.TaxRate()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Indicates whether the tax rate group is currently active. |
| `createdAt` | `str` | The date and time when the tax rate was created. |
| `id` | `str` | The unique identifier for the tax rate. |
| `label` | `str` | The display label for the tax rate. |
| `name` | `str` | The name of the tax rate. |
| `percentageRate` | `float` | The percentage rate applied. |
| `updatedAt` | `str` | The date and time when the tax rate was last updated. |

#### Example: Load

```python
tax_rate = client.TaxRate().load({"id": "tax_rate_id"})
```

#### Example: List

```python
tax_rates = client.TaxRate().list()
```


### TeamsBatchResponseTeamMember

Create an instance: `teams_batch_response_team_member = client.TeamsBatchResponseTeamMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `list` | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `list` | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `dict` | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `int` | The number of errors encountered during the batch operation. |
| `requestedAt` | `str` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `str` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | The current status of the batch operation. |

#### Example: Create

```python
teams_batch_response_team_member = client.TeamsBatchResponseTeamMember().create({
    "2026_09_id": "example_2026_09_id",  # str
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### TeamsCollectionResponseTeamMemberResponseForwardPaging

Create an instance: `teams_collection_response_team_member_response_forward_paging = client.TeamsCollectionResponseTeamMemberResponseForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `str` | The type of membership the user has in the team. |
| `userId` | `str` | The unique identifier for the user, represented as a string. |

#### Example: List

```python
teams_collection_response_team_member_response_forward_pagings = client.TeamsCollectionResponseTeamMemberResponseForwardPaging().list({"2026_09_id": "example"})
```


### TeamsCollectionResponseTeamResponseForwardPaging

Create an instance: `teams_collection_response_team_response_forward_paging = client.TeamsCollectionResponseTeamResponseForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The unique identifier for the team, represented as a string. |
| `name` | `str` | The name of the team, represented as a string. |
| `parentTeamId` | `str` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: List

```python
teams_collection_response_team_response_forward_pagings = client.TeamsCollectionResponseTeamResponseForwardPaging().list()
```


### TeamsTeam

Create an instance: `teams_team = client.TeamsTeam()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The unique identifier for the team, represented as a string. |
| `members` | `list` | An array of team members to be assigned to the new team. |
| `name` | `str` | The name of the team, represented as a string. |
| `parentTeamId` | `str` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: Load

```python
teams_team = client.TeamsTeam().load({"team_id": "team_id"})
```

#### Example: Create

```python
teams_team = client.TeamsTeam().create({
    "id": "example_id",  # str
    "members": [],  # list
    "name": "example_name",  # str
})
```


### TeamsTeamMember

Create an instance: `teams_team_member = client.TeamsTeamMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `str` | The type of team member assignment. |
| `userId` | `str` | The unique identifier for the user being assigned to the team. |

#### Example: Create

```python
teams_team_member = client.TeamsTeamMember().create({
    "2026_09_id": "example_2026_09_id",  # str
    "type": "example_type",  # str
    "userId": "example_userId",  # str
})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### UserProvisioningCollectionResponsePublicPermissionSetNo

Create an instance: `user_provisioning_collection_response_public_permission_set_no = client.UserProvisioningCollectionResponsePublicPermissionSetNo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The unique identifier for the permission set. |
| `name` | `str` | The name of the permission set. |
| `requiresBillingWrite` | `bool` | A boolean indicating whether the permission set requires billing write access. |

#### Example: List

```python
user_provisioning_collection_response_public_permission_set_nos = client.UserProvisioningCollectionResponsePublicPermissionSetNo().list()
```


### UserProvisioningCollectionResponsePublicSeatNoPaging

Create an instance: `user_provisioning_collection_response_public_seat_no_paging = client.UserProvisioningCollectionResponsePublicSeatNoPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | A string providing additional details about the seat. |
| `name` | `str` | The name of the seat. |
| `remainingSeats` | `int` | An integer indicating the number of seats that are still available. |

#### Example: List

```python
user_provisioning_collection_response_public_seat_no_pagings = client.UserProvisioningCollectionResponsePublicSeatNoPaging().list()
```


### UserProvisioningCollectionResponsePublicTeamNoPaging

Create an instance: `user_provisioning_collection_response_public_team_no_paging = client.UserProvisioningCollectionResponsePublicTeamNoPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The unique identifier for the team, represented as a string. |
| `name` | `str` | The name of the team, represented as a string. |
| `secondaryUserIds` | `list` | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `list` | An array of strings representing the IDs of users who are primary members of the team. |

#### Example: List

```python
user_provisioning_collection_response_public_team_no_pagings = client.UserProvisioningCollectionResponsePublicTeamNoPaging().list()
```


### UserProvisioningCollectionResponsePublicUserForwardPaging

Create an instance: `user_provisioning_collection_response_public_user_forward_paging = client.UserProvisioningCollectionResponsePublicUserForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | The email address of the user. |
| `firstName` | `str` | The first name of the user, represented as a string. |
| `id` | `str` | The unique identifier for the user, represented as a string. |
| `lastName` | `str` | The last name of the user, represented as a string. |
| `primaryTeamId` | `str` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `str` | A string representing a single role ID assigned to the user. |
| `roleIds` | `list` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `list` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `list` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | A boolean indicating whether the user has super admin privileges. |

#### Example: List

```python
user_provisioning_collection_response_public_user_forward_pagings = client.UserProvisioningCollectionResponsePublicUserForwardPaging().list()
```


### UserProvisioningPublicUser

Create an instance: `user_provisioning_public_user = client.UserProvisioningPublicUser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | The email address of the user. |
| `firstName` | `str` | The first name of the user, represented as a string. |
| `id` | `str` | The unique identifier for the user, represented as a string. |
| `lastName` | `str` | The last name of the user, represented as a string. |
| `primaryTeamId` | `str` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `str` | A string representing a single role ID assigned to the user. |
| `roleIds` | `list` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `list` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `list` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | A boolean indicating whether the user has super admin privileges. |

#### Example: Load

```python
user_provisioning_public_user = client.UserProvisioningPublicUser().load({"user_id": "user_id"})
```

#### Example: Create

```python
user_provisioning_public_user = client.UserProvisioningPublicUser().create({
    "email": "example_email",  # str
    "id": "example_id",  # str
    "roleIds": [],  # list
    "superAdmin": True,  # bool
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

Features are the extension mechanism. A feature is a Python class
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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── hubspotsettings_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`hubspotsettings_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
userprovisioningcollectionresponsepublicteamnopaging = client.UserProvisioningCollectionResponsePublicTeamNoPaging()
userprovisioningcollectionresponsepublicteamnopaging.list()

# userprovisioningcollectionresponsepublicteamnopaging.data_get() now returns the userprovisioningcollectionresponsepublicteamnopaging data from the last list
# userprovisioningcollectionresponsepublicteamnopaging.match_get() returns the last match criteria
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
