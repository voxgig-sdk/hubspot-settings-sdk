# HubspotSettings Golang SDK



The Golang SDK for the HubspotSettings API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AddCurrency(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/hubspot-settings-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/hubspot-settings-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/hubspot-settings-sdk/go=../hubspot-settings-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/hubspot-settings-sdk/go"
)

func main() {
    client := sdk.NewHubspotSettingsSDK(map[string]any{
        "apikey": os.Getenv("HUBSPOT_SETTINGS_APIKEY"),
    })

    // Create a addCurrency.
    created, err := client.AddCurrency(nil).Create(map[string]any{"conversionRate": 1, "createdAt": "example_createdAt", "currencyCode": "example_currencyCode", "effectiveAt": "example_effectiveAt", "fromCurrencyCode": "example_fromCurrencyCode", "id": "example_id", "toCurrencyCode": "example_toCurrencyCode", "updatedAt": "example_updatedAt", "visibleInUI": true}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
userprovisioningpublicseats, err := client.UserProvisioningPublicSeat(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = userprovisioningpublicseats
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

userProvisioningPublicSeat, err := client.UserProvisioningPublicSeat(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(userProvisioningPublicSeat) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewHubspotSettingsSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewHubspotSettingsSDK

```go
func NewHubspotSettingsSDK(options map[string]any) *HubspotSettingsSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotSettingsSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AddCurrency` | `(data map[string]any) HubspotSettingsEntity` | Create an AddCurrency entity instance. |
| `Basic` | `(data map[string]any) HubspotSettingsEntity` | Create a Basic entity instance. |
| `Code` | `(data map[string]any) HubspotSettingsEntity` | Create a Code entity instance. |
| `Current` | `(data map[string]any) HubspotSettingsEntity` | Create a Current entity instance. |
| `ExchangeRate` | `(data map[string]any) HubspotSettingsEntity` | Create an ExchangeRate entity instance. |
| `MulticurrencyBatchResponseExchangeRate` | `(data map[string]any) HubspotSettingsEntity` | Create a MulticurrencyBatchResponseExchangeRate entity instance. |
| `MulticurrencyCentralExchangeRatesInformation` | `(data map[string]any) HubspotSettingsEntity` | Create a MulticurrencyCentralExchangeRatesInformation entity instance. |
| `MulticurrencyCollectionResponseExchangeRateForwardPaging` | `(data map[string]any) HubspotSettingsEntity` | Create a MulticurrencyCollectionResponseExchangeRateForwardPaging entity instance. |
| `MulticurrencyCompanyCurrency` | `(data map[string]any) HubspotSettingsEntity` | Create a MulticurrencyCompanyCurrency entity instance. |
| `TaxRate` | `(data map[string]any) HubspotSettingsEntity` | Create a TaxRate entity instance. |
| `TeamsBatchResponseTeamMember` | `(data map[string]any) HubspotSettingsEntity` | Create a TeamsBatchResponseTeamMember entity instance. |
| `TeamsCollectionResponseTeamMemberResponseForwardPaging` | `(data map[string]any) HubspotSettingsEntity` | Create a TeamsCollectionResponseTeamMemberResponseForwardPaging entity instance. |
| `TeamsCollectionResponseTeamResponseForwardPaging` | `(data map[string]any) HubspotSettingsEntity` | Create a TeamsCollectionResponseTeamResponseForwardPaging entity instance. |
| `TeamsTeam` | `(data map[string]any) HubspotSettingsEntity` | Create a TeamsTeam entity instance. |
| `TeamsTeamMember` | `(data map[string]any) HubspotSettingsEntity` | Create a TeamsTeamMember entity instance. |
| `UnsupportedCurrency` | `(data map[string]any) HubspotSettingsEntity` | Create an UnsupportedCurrency entity instance. |
| `User` | `(data map[string]any) HubspotSettingsEntity` | Create an User entity instance. |
| `UserProvisioningCollectionResponsePublicUserForwardPaging` | `(data map[string]any) HubspotSettingsEntity` | Create an UserProvisioningCollectionResponsePublicUserForwardPaging entity instance. |
| `UserProvisioningPublicPermissionSet` | `(data map[string]any) HubspotSettingsEntity` | Create an UserProvisioningPublicPermissionSet entity instance. |
| `UserProvisioningPublicSeat` | `(data map[string]any) HubspotSettingsEntity` | Create an UserProvisioningPublicSeat entity instance. |
| `UserProvisioningPublicTeam` | `(data map[string]any) HubspotSettingsEntity` | Create an UserProvisioningPublicTeam entity instance. |
| `UserProvisioningPublicUser` | `(data map[string]any) HubspotSettingsEntity` | Create an UserProvisioningPublicUser entity instance. |

### Entity interface (HubspotSettingsEntity)

All entities implement the `HubspotSettingsEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    addCurrency, err := client.AddCurrency(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // addCurrency is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AddCurrency

| Field | Description |
| --- | --- |
| `"conversionRate"` | The conversion rate between the to and from currency code of this exchange rate. |
| `"createdAt"` | The date the exchange rate was created. |
| `"currencyCode"` | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `"effectiveAt"` | The date the exchange rate is in effect. |
| `"fromCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `"id"` | A unique identifier for the exchange rate |
| `"toCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `"updatedAt"` | The date the exchange rate was last updated. |
| `"visibleInUI"` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

Operations: Create.

API path: `/settings/currencies/2026-09/central-fx-rates/add-currency`

#### Basic

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/settings/teams/2026-09/{teamId}/members/{userId}`

#### Code

| Field | Description |
| --- | --- |
| `"currencyCode"` | The three-letter code representing a specific currency (ex. |
| `"currencyName"` | The full name of the currency (ex. |

Operations: List.

API path: `/settings/currencies/2026-09/codes`

#### Current

| Field | Description |
| --- | --- |
| `"conversionRate"` | The conversion rate between the to and from currency code of this exchange rate. |
| `"createdAt"` | The date the exchange rate was created. |
| `"effectiveAt"` | The date the exchange rate is in effect. |
| `"fromCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `"id"` | A unique identifier for the exchange rate |
| `"toCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `"updatedAt"` | The date the exchange rate was last updated. |
| `"visibleInUI"` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

Operations: List.

API path: `/settings/currencies/2026-09/exchange-rates/current`

#### ExchangeRate

| Field | Description |
| --- | --- |
| `"conversionRate"` | The conversion rate between the to and from currency code of this exchange rate. |
| `"createdAt"` | The date the exchange rate was created. |
| `"effectiveAt"` | The date the exchange rate is in effect. |
| `"fromCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `"id"` | A unique identifier for the exchange rate |
| `"toCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `"updatedAt"` | The date the exchange rate was last updated. |
| `"visibleInUI"` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

Operations: Create, Load, Update.

API path: `/settings/currencies/2026-09/exchange-rates`

#### MulticurrencyBatchResponseExchangeRate

| Field | Description |
| --- | --- |
| `"completedAt"` | The datetime the response was completed |
| `"inputs"` | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `"links"` | The link to the next page with exchange rates. |
| `"requestedAt"` | The datetime the of the request. |
| `"results"` | An array of exchange rate objects that represent the results of the batch operation. |
| `"startedAt"` | The datetime the of the request. |
| `"status"` | The current status of the response (e.g. |

Operations: Create.

API path: `/settings/currencies/2026-09/exchange-rates/batch/create`

#### MulticurrencyCentralExchangeRatesInformation

| Field | Description |
| --- | --- |
| `"centralExchangeRatesEnabled"` | Indicates if central exchange rates is enabled for the portal or not. |

Operations: Load.

API path: `/settings/currencies/2026-09/central-fx-rates/information`

#### MulticurrencyCollectionResponseExchangeRateForwardPaging

| Field | Description |
| --- | --- |
| `"conversionRate"` | The conversion rate between the to and from currency code of this exchange rate. |
| `"createdAt"` | The date the exchange rate was created. |
| `"effectiveAt"` | The date the exchange rate is in effect. |
| `"fromCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `"id"` | A unique identifier for the exchange rate |
| `"toCurrencyCode"` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `"updatedAt"` | The date the exchange rate was last updated. |
| `"visibleInUI"` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

Operations: List.

API path: `/settings/currencies/2026-09/exchange-rates`

#### MulticurrencyCompanyCurrency

| Field | Description |
| --- | --- |
| `"createdAt"` | The date the company currency was created. |
| `"currencyCode"` | The three-letter code representing a specific currency (ex. |
| `"id"` | The currency code for the company currency |

Operations: Load, Update.

API path: `/settings/currencies/2026-09/company-currency`

#### TaxRate

| Field | Description |
| --- | --- |
| `"active"` | Indicates whether the tax rate group is currently active. |
| `"createdAt"` | The date and time when the tax rate was created. |
| `"id"` | The unique identifier for the tax rate. |
| `"label"` | The display label for the tax rate. |
| `"name"` | The name of the tax rate. |
| `"percentageRate"` | The percentage rate applied. |
| `"updatedAt"` | The date and time when the tax rate was last updated. |

Operations: List, Load.

API path: `/tax-rates/2026-09/tax-rates`

#### TeamsBatchResponseTeamMember

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `"errors"` | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `"inputs"` | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `"links"` | A map of link names to associated URIs providing additional information about the batch operation. |
| `"numErrors"` | The number of errors encountered during the batch operation. |
| `"requestedAt"` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `"results"` | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `"startedAt"` | The date and time when the batch operation started, in ISO 8601 format. |
| `"status"` | The current status of the batch operation. |

Operations: Create.

API path: `/settings/teams/2026-09/{teamId}/members/batch`

#### TeamsCollectionResponseTeamMemberResponseForwardPaging

| Field | Description |
| --- | --- |
| `"type"` | The type of membership the user has in the team. |
| `"userId"` | The unique identifier for the user, represented as a string. |

Operations: List.

API path: `/settings/teams/2026-09/{teamId}/members`

#### TeamsCollectionResponseTeamResponseForwardPaging

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier for the team, represented as a string. |
| `"name"` | The name of the team, represented as a string. |
| `"parentTeamId"` | The unique identifier of the parent team, if applicable, represented as a string. |

Operations: List.

API path: `/settings/teams/2026-09`

#### TeamsTeam

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier for the team, represented as a string. |
| `"members"` | An array of team members to be assigned to the new team. |
| `"name"` | The name of the team, represented as a string. |
| `"parentTeamId"` | The unique identifier of the parent team, if applicable, represented as a string. |

Operations: Create, Load, Update.

API path: `/settings/teams/2026-09`

#### TeamsTeamMember

| Field | Description |
| --- | --- |
| `"type"` | The type of team member assignment. |
| `"userId"` | The unique identifier for the user being assigned to the team. |

Operations: Create.

API path: `/settings/teams/2026-09/{teamId}/members`

#### UnsupportedCurrency

| Field | Description |
| --- | --- |
| `"currencyCode"` | The three-letter code representing a specific currency (ex. |
| `"currencyName"` | The full name of the currency (ex. |

Operations: List.

API path: `/settings/currencies/2026-09/central-fx-rates/unsupported-currencies`

#### User

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/settings/users/2026-09/{userId}`

#### UserProvisioningCollectionResponsePublicUserForwardPaging

| Field | Description |
| --- | --- |
| `"email"` | The email address of the user. |
| `"firstName"` | The first name of the user, represented as a string. |
| `"id"` | The unique identifier for the user, represented as a string. |
| `"lastName"` | The last name of the user, represented as a string. |
| `"primaryTeamId"` | The ID of the primary team to which the user belongs, represented as a string. |
| `"roleId"` | A string representing a single role ID assigned to the user. |
| `"roleIds"` | An array of strings representing the IDs of the roles assigned to the user. |
| `"seatNames"` | An array of strings representing the names of seats assigned to the user. |
| `"secondaryTeamIds"` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `"sendWelcomeEmail"` | A boolean indicating whether a welcome email should be sent to the user. |
| `"superAdmin"` | A boolean indicating whether the user has super admin privileges. |

Operations: List.

API path: `/settings/users/2026-09`

#### UserProvisioningPublicPermissionSet

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier for the permission set. |
| `"name"` | The name of the permission set. |
| `"requiresBillingWrite"` | A boolean indicating whether the permission set requires billing write access. |

Operations: List.

API path: `/settings/users/2026-09/roles`

#### UserProvisioningPublicSeat

| Field | Description |
| --- | --- |
| `"description"` | A string providing additional details about the seat. |
| `"name"` | The name of the seat. |
| `"remainingSeats"` | An integer indicating the number of seats that are still available. |

Operations: List.

API path: `/settings/users/2026-09/seats`

#### UserProvisioningPublicTeam

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier for the team, represented as a string. |
| `"name"` | The name of the team, represented as a string. |
| `"secondaryUserIds"` | An array of strings representing the IDs of users who are secondary members of the team. |
| `"userIds"` | An array of strings representing the IDs of users who are primary members of the team. |

Operations: List.

API path: `/settings/users/2026-09/teams`

#### UserProvisioningPublicUser

| Field | Description |
| --- | --- |
| `"email"` | The email address of the user. |
| `"firstName"` | The first name of the user, represented as a string. |
| `"id"` | The unique identifier for the user, represented as a string. |
| `"lastName"` | The last name of the user, represented as a string. |
| `"primaryTeamId"` | The ID of the primary team to which the user belongs, represented as a string. |
| `"roleId"` | A string representing a single role ID assigned to the user. |
| `"roleIds"` | An array of strings representing the IDs of the roles assigned to the user. |
| `"seatNames"` | An array of strings representing the names of seats assigned to the user. |
| `"secondaryTeamIds"` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `"sendWelcomeEmail"` | A boolean indicating whether a welcome email should be sent to the user. |
| `"superAdmin"` | A boolean indicating whether the user has super admin privileges. |

Operations: Create, Load, Update.

API path: `/settings/users/2026-09`



## Entities


### AddCurrency

Create an instance: `addCurrency := client.AddCurrency(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float64` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `currencyCode` | `string` | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: Create

```go
result, err := client.AddCurrency(nil).Create(map[string]any{
    "conversionRate": 1,
    "createdAt": "example_createdAt",
    "currencyCode": "example_currencyCode",
    "effectiveAt": "example_effectiveAt",
    "fromCurrencyCode": "example_fromCurrencyCode",
    "id": "example_id",
    "toCurrencyCode": "example_toCurrencyCode",
    "updatedAt": "example_updatedAt",
    "visibleInUI": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Basic

Create an instance: `basic := client.Basic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Code

Create an instance: `code := client.Code(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currencyCode` | `string` | The three-letter code representing a specific currency (ex. |
| `currencyName` | `string` | The full name of the currency (ex. |

#### Example: List

```go
codes, err := client.Code(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codes) // the array of records
```


### Current

Create an instance: `current := client.Current(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float64` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```go
currents, err := client.Current(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(currents) // the array of records
```


### ExchangeRate

Create an instance: `exchangeRate := client.ExchangeRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float64` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: Load

```go
exchangeRate, err := client.ExchangeRate(nil).Load(map[string]any{"id": "exchange_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(exchangeRate) // the loaded record
```

#### Example: Create

```go
result, err := client.ExchangeRate(nil).Create(map[string]any{
    "conversionRate": 1,
    "createdAt": "example_createdAt",
    "effectiveAt": "example_effectiveAt",
    "fromCurrencyCode": "example_fromCurrencyCode",
    "id": "example_id",
    "toCurrencyCode": "example_toCurrencyCode",
    "updatedAt": "example_updatedAt",
    "visibleInUI": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MulticurrencyBatchResponseExchangeRate

Create an instance: `multicurrencyBatchResponseExchangeRate := client.MulticurrencyBatchResponseExchangeRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The datetime the response was completed |
| `inputs` | `[]any` | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `map[string]any` | The link to the next page with exchange rates. |
| `requestedAt` | `string` | The datetime the of the request. |
| `results` | `[]any` | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | The datetime the of the request. |
| `status` | `string` | The current status of the response (e.g. |

#### Example: Create

```go
result, err := client.MulticurrencyBatchResponseExchangeRate(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MulticurrencyCentralExchangeRatesInformation

Create an instance: `multicurrencyCentralExchangeRatesInformation := client.MulticurrencyCentralExchangeRatesInformation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `centralExchangeRatesEnabled` | `bool` | Indicates if central exchange rates is enabled for the portal or not. |

#### Example: Load

```go
multicurrencyCentralExchangeRatesInformation, err := client.MulticurrencyCentralExchangeRatesInformation(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(multicurrencyCentralExchangeRatesInformation) // the loaded record
```


### MulticurrencyCollectionResponseExchangeRateForwardPaging

Create an instance: `multicurrencyCollectionResponseExchangeRateForwardPaging := client.MulticurrencyCollectionResponseExchangeRateForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conversionRate` | `float64` | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | The date the exchange rate was created. |
| `effectiveAt` | `string` | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

#### Example: List

```go
multicurrencyCollectionResponseExchangeRateForwardPagings, err := client.MulticurrencyCollectionResponseExchangeRateForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(multicurrencyCollectionResponseExchangeRateForwardPagings) // the array of records
```


### MulticurrencyCompanyCurrency

Create an instance: `multicurrencyCompanyCurrency := client.MulticurrencyCompanyCurrency(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date the company currency was created. |
| `currencyCode` | `string` | The three-letter code representing a specific currency (ex. |
| `id` | `string` | The currency code for the company currency |

#### Example: Load

```go
multicurrencyCompanyCurrency, err := client.MulticurrencyCompanyCurrency(nil).Load(map[string]any{"id": "multicurrency_company_currency_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(multicurrencyCompanyCurrency) // the loaded record
```


### TaxRate

Create an instance: `taxRate := client.TaxRate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Indicates whether the tax rate group is currently active. |
| `createdAt` | `string` | The date and time when the tax rate was created. |
| `id` | `string` | The unique identifier for the tax rate. |
| `label` | `string` | The display label for the tax rate. |
| `name` | `string` | The name of the tax rate. |
| `percentageRate` | `float64` | The percentage rate applied. |
| `updatedAt` | `string` | The date and time when the tax rate was last updated. |

#### Example: Load

```go
taxRate, err := client.TaxRate(nil).Load(map[string]any{"id": "tax_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxRate) // the loaded record
```

#### Example: List

```go
taxRates, err := client.TaxRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(taxRates) // the array of records
```


### TeamsBatchResponseTeamMember

Create an instance: `teamsBatchResponseTeamMember := client.TeamsBatchResponseTeamMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `[]any` | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `[]any` | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `map[string]any` | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `int` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```go
result, err := client.TeamsBatchResponseTeamMember(nil).Create(map[string]any{
    "team_id": "example_team_id",
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsCollectionResponseTeamMemberResponseForwardPaging

Create an instance: `teamsCollectionResponseTeamMemberResponseForwardPaging := client.TeamsCollectionResponseTeamMemberResponseForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | The type of membership the user has in the team. |
| `userId` | `string` | The unique identifier for the user, represented as a string. |

#### Example: List

```go
teamsCollectionResponseTeamMemberResponseForwardPagings, err := client.TeamsCollectionResponseTeamMemberResponseForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsCollectionResponseTeamMemberResponseForwardPagings) // the array of records
```


### TeamsCollectionResponseTeamResponseForwardPaging

Create an instance: `teamsCollectionResponseTeamResponseForwardPaging := client.TeamsCollectionResponseTeamResponseForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `name` | `string` | The name of the team, represented as a string. |
| `parentTeamId` | `string` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: List

```go
teamsCollectionResponseTeamResponseForwardPagings, err := client.TeamsCollectionResponseTeamResponseForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsCollectionResponseTeamResponseForwardPagings) // the array of records
```


### TeamsTeam

Create an instance: `teamsTeam := client.TeamsTeam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `members` | `[]any` | An array of team members to be assigned to the new team. |
| `name` | `string` | The name of the team, represented as a string. |
| `parentTeamId` | `string` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: Load

```go
teamsTeam, err := client.TeamsTeam(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsTeam) // the loaded record
```

#### Example: Create

```go
result, err := client.TeamsTeam(nil).Create(map[string]any{
    "id": "example_id",
    "members": []any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsTeamMember

Create an instance: `teamsTeamMember := client.TeamsTeamMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | The type of team member assignment. |
| `userId` | `string` | The unique identifier for the user being assigned to the team. |

#### Example: Create

```go
result, err := client.TeamsTeamMember(nil).Create(map[string]any{
    "team_id": "example_team_id",
    "type": "example_type",
    "userId": "example_userId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UnsupportedCurrency

Create an instance: `unsupportedCurrency := client.UnsupportedCurrency(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `currencyCode` | `string` | The three-letter code representing a specific currency (ex. |
| `currencyName` | `string` | The full name of the currency (ex. |

#### Example: List

```go
unsupportedCurrencys, err := client.UnsupportedCurrency(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(unsupportedCurrencys) // the array of records
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### UserProvisioningCollectionResponsePublicUserForwardPaging

Create an instance: `userProvisioningCollectionResponsePublicUserForwardPaging := client.UserProvisioningCollectionResponsePublicUserForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email address of the user. |
| `firstName` | `string` | The first name of the user, represented as a string. |
| `id` | `string` | The unique identifier for the user, represented as a string. |
| `lastName` | `string` | The last name of the user, represented as a string. |
| `primaryTeamId` | `string` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `string` | A string representing a single role ID assigned to the user. |
| `roleIds` | `[]any` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `[]any` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `[]any` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | A boolean indicating whether the user has super admin privileges. |

#### Example: List

```go
userProvisioningCollectionResponsePublicUserForwardPagings, err := client.UserProvisioningCollectionResponsePublicUserForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userProvisioningCollectionResponsePublicUserForwardPagings) // the array of records
```


### UserProvisioningPublicPermissionSet

Create an instance: `userProvisioningPublicPermissionSet := client.UserProvisioningPublicPermissionSet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the permission set. |
| `name` | `string` | The name of the permission set. |
| `requiresBillingWrite` | `bool` | A boolean indicating whether the permission set requires billing write access. |

#### Example: List

```go
userProvisioningPublicPermissionSets, err := client.UserProvisioningPublicPermissionSet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userProvisioningPublicPermissionSets) // the array of records
```


### UserProvisioningPublicSeat

Create an instance: `userProvisioningPublicSeat := client.UserProvisioningPublicSeat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A string providing additional details about the seat. |
| `name` | `string` | The name of the seat. |
| `remainingSeats` | `int` | An integer indicating the number of seats that are still available. |

#### Example: List

```go
userProvisioningPublicSeats, err := client.UserProvisioningPublicSeat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userProvisioningPublicSeats) // the array of records
```


### UserProvisioningPublicTeam

Create an instance: `userProvisioningPublicTeam := client.UserProvisioningPublicTeam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `name` | `string` | The name of the team, represented as a string. |
| `secondaryUserIds` | `[]any` | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `[]any` | An array of strings representing the IDs of users who are primary members of the team. |

#### Example: List

```go
userProvisioningPublicTeams, err := client.UserProvisioningPublicTeam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userProvisioningPublicTeams) // the array of records
```


### UserProvisioningPublicUser

Create an instance: `userProvisioningPublicUser := client.UserProvisioningPublicUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The email address of the user. |
| `firstName` | `string` | The first name of the user, represented as a string. |
| `id` | `string` | The unique identifier for the user, represented as a string. |
| `lastName` | `string` | The last name of the user, represented as a string. |
| `primaryTeamId` | `string` | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `string` | A string representing a single role ID assigned to the user. |
| `roleIds` | `[]any` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `[]any` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `[]any` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | A boolean indicating whether the user has super admin privileges. |

#### Example: Load

```go
userProvisioningPublicUser, err := client.UserProvisioningPublicUser(nil).Load(map[string]any{"user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(userProvisioningPublicUser) // the loaded record
```

#### Example: Create

```go
result, err := client.UserProvisioningPublicUser(nil).Create(map[string]any{
    "email": "example_email",
    "id": "example_id",
    "roleIds": []any{},
    "superAdmin": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

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

Rate limiting.

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

Retry.

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

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/hubspot-settings-sdk/go/
├── hubspot-settings.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/hubspot-settings-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
userprovisioningpublicseat := client.UserProvisioningPublicSeat(nil)
userprovisioningpublicseat.List(nil, nil)

// userprovisioningpublicseat.Data() now returns the userprovisioningpublicseat data from the last list
// userprovisioningpublicseat.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
