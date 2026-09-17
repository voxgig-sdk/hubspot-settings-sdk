# HubspotSettings Golang SDK Reference

Complete API reference for the HubspotSettings Golang SDK.


## HubspotSettingsSDK

### Constructor

```go
func NewHubspotSettingsSDK(options map[string]any) *HubspotSettingsSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *HubspotSettingsSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *HubspotSettingsSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Basic(data map[string]any) HubspotSettingsEntity`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `ExchangeRate(data map[string]any) HubspotSettingsEntity`

Create a new `ExchangeRate` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyBatchResponseExchangeRate(data map[string]any) HubspotSettingsEntity`

Create a new `MulticurrencyBatchResponseExchangeRate` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCentralExchangeRatesInformation(data map[string]any) HubspotSettingsEntity`

Create a new `MulticurrencyCentralExchangeRatesInformation` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(data map[string]any) HubspotSettingsEntity`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCollectionResponseExchangeRateForwardPaging(data map[string]any) HubspotSettingsEntity`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPaging` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCollectionResponseExchangeRateNoPaging(data map[string]any) HubspotSettingsEntity`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPaging` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCompanyCurrency(data map[string]any) HubspotSettingsEntity`

Create a new `MulticurrencyCompanyCurrency` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyExchangeRate(data map[string]any) HubspotSettingsEntity`

Create a new `MulticurrencyExchangeRate` entity instance. Pass `nil` for no initial data.

#### `TaxRate(data map[string]any) HubspotSettingsEntity`

Create a new `TaxRate` entity instance. Pass `nil` for no initial data.

#### `TeamsBatchResponseTeamMember(data map[string]any) HubspotSettingsEntity`

Create a new `TeamsBatchResponseTeamMember` entity instance. Pass `nil` for no initial data.

#### `TeamsCollectionResponseTeamMemberResponseForwardPaging(data map[string]any) HubspotSettingsEntity`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPaging` entity instance. Pass `nil` for no initial data.

#### `TeamsCollectionResponseTeamResponseForwardPaging(data map[string]any) HubspotSettingsEntity`

Create a new `TeamsCollectionResponseTeamResponseForwardPaging` entity instance. Pass `nil` for no initial data.

#### `TeamsTeam(data map[string]any) HubspotSettingsEntity`

Create a new `TeamsTeam` entity instance. Pass `nil` for no initial data.

#### `TeamsTeamMember(data map[string]any) HubspotSettingsEntity`

Create a new `TeamsTeamMember` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) HubspotSettingsEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicPermissionSetNo(data map[string]any) HubspotSettingsEntity`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNo` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicSeatNoPaging(data map[string]any) HubspotSettingsEntity`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPaging` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicTeamNoPaging(data map[string]any) HubspotSettingsEntity`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPaging` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicUserForwardPaging(data map[string]any) HubspotSettingsEntity`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPaging` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningPublicUser(data map[string]any) HubspotSettingsEntity`

Create a new `UserProvisioningPublicUser` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## BasicEntity

```go
basic := client.Basic(nil)
fmt.Println(basic.GetName()) // "basic"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Basic(nil).Remove(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExchangeRateEntity

```go
exchangeRate := client.ExchangeRate(nil)
fmt.Println(exchangeRate.GetName()) // "exchange_rate"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ExchangeRate(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MulticurrencyBatchResponseExchangeRateEntity

```go
multicurrencyBatchResponseExchangeRate := client.MulticurrencyBatchResponseExchangeRate(nil)
fmt.Println(multicurrencyBatchResponseExchangeRate.GetName()) // "multicurrency_batch_response_exchange_rate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The datetime the response was completed |
| `inputs` | `[]any` | Yes | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `map[string]any` | No | The link to the next page with exchange rates. |
| `requestedAt` | `string` | No | The datetime the of the request. |
| `results` | `[]any` | Yes | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | Yes | The datetime the of the request. |
| `status` | `string` | Yes | The current status of the response (e.g. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MulticurrencyBatchResponseExchangeRateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MulticurrencyCentralExchangeRatesInformationEntity

```go
multicurrencyCentralExchangeRatesInformation := client.MulticurrencyCentralExchangeRatesInformation(nil)
fmt.Println(multicurrencyCentralExchangeRatesInformation.GetName()) // "multicurrency_central_exchange_rates_information"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `centralExchangeRatesEnabled` | `bool` | Yes | Indicates if central exchange rates is enabled for the portal or not. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MulticurrencyCentralExchangeRatesInformation(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MulticurrencyCentralExchangeRatesInformationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity

```go
multicurrencyCollectionResponseCurrencyCodeInfoNoPaging := client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(nil)
fmt.Println(multicurrencyCollectionResponseCurrencyCodeInfoNoPaging.GetName()) // "multicurrency_collection_response_currency_code_info_no_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `currencyName` | `string` | Yes | The full name of the currency (ex. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MulticurrencyCollectionResponseExchangeRateForwardPagingEntity

```go
multicurrencyCollectionResponseExchangeRateForwardPaging := client.MulticurrencyCollectionResponseExchangeRateForwardPaging(nil)
fmt.Println(multicurrencyCollectionResponseExchangeRateForwardPaging.GetName()) // "multicurrency_collection_response_exchange_rate_forward_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float64` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MulticurrencyCollectionResponseExchangeRateForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MulticurrencyCollectionResponseExchangeRateNoPagingEntity

```go
multicurrencyCollectionResponseExchangeRateNoPaging := client.MulticurrencyCollectionResponseExchangeRateNoPaging(nil)
fmt.Println(multicurrencyCollectionResponseExchangeRateNoPaging.GetName()) // "multicurrency_collection_response_exchange_rate_no_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float64` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MulticurrencyCollectionResponseExchangeRateNoPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MulticurrencyCompanyCurrencyEntity

```go
multicurrencyCompanyCurrency := client.MulticurrencyCompanyCurrency(nil)
fmt.Println(multicurrencyCompanyCurrency.GetName()) // "multicurrency_company_currency"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date the company currency was created. |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `id` | `string` | Yes | The currency code for the company currency |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MulticurrencyCompanyCurrency(nil).Load(map[string]any{"id": "multicurrency_company_currency_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.MulticurrencyCompanyCurrency(nil).Update(map[string]any{
    "id": "multicurrency_company_currency_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MulticurrencyCompanyCurrencyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MulticurrencyExchangeRateEntity

```go
multicurrencyExchangeRate := client.MulticurrencyExchangeRate(nil)
fmt.Println(multicurrencyExchangeRate.GetName()) // "multicurrency_exchange_rate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float64` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `currencyCode` | `string` | Yes | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `conversionRate` | - | - | - |
| `createdAt` | - | - | - |
| `currencyCode` | - | - | - |
| `effectiveAt` | - | Yes | Yes |
| `fromCurrencyCode` | - | - | - |
| `id` | - | - | - |
| `toCurrencyCode` | - | - | - |
| `updatedAt` | - | - | - |
| `visibleInUI` | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MulticurrencyExchangeRate(nil).Load(map[string]any{"id": "multicurrency_exchange_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.MulticurrencyExchangeRate(nil).Create(map[string]any{
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.MulticurrencyExchangeRate(nil).Update(map[string]any{
    "id": "multicurrency_exchange_rate_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MulticurrencyExchangeRateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TaxRateEntity

```go
taxRate := client.TaxRate(nil)
fmt.Println(taxRate.GetName()) // "tax_rate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Indicates whether the tax rate group is currently active. |
| `createdAt` | `string` | Yes | The date and time when the tax rate was created. |
| `id` | `string` | Yes | The unique identifier for the tax rate. |
| `label` | `string` | Yes | The display label for the tax rate. |
| `name` | `string` | Yes | The name of the tax rate. |
| `percentageRate` | `float64` | Yes | The percentage rate applied. |
| `updatedAt` | `string` | Yes | The date and time when the tax rate was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TaxRate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TaxRate(nil).Load(map[string]any{"id": "tax_rate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsBatchResponseTeamMemberEntity

```go
teamsBatchResponseTeamMember := client.TeamsBatchResponseTeamMember(nil)
fmt.Println(teamsBatchResponseTeamMember.GetName()) // "teams_batch_response_team_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `[]any` | No | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `[]any` | Yes | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `map[string]any` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `int` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | Yes | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsBatchResponseTeamMember(nil).Create(map[string]any{
    "2026_09_id": "example_2026_09_id",
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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsBatchResponseTeamMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsCollectionResponseTeamMemberResponseForwardPagingEntity

```go
teamsCollectionResponseTeamMemberResponseForwardPaging := client.TeamsCollectionResponseTeamMemberResponseForwardPaging(nil)
fmt.Println(teamsCollectionResponseTeamMemberResponseForwardPaging.GetName()) // "teams_collection_response_team_member_response_forward_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of membership the user has in the team. |
| `userId` | `string` | Yes | The unique identifier for the user, represented as a string. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsCollectionResponseTeamMemberResponseForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsCollectionResponseTeamResponseForwardPagingEntity

```go
teamsCollectionResponseTeamResponseForwardPaging := client.TeamsCollectionResponseTeamResponseForwardPaging(nil)
fmt.Println(teamsCollectionResponseTeamResponseForwardPaging.GetName()) // "teams_collection_response_team_response_forward_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `parentTeamId` | `string` | No | The unique identifier of the parent team, if applicable, represented as a string. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsCollectionResponseTeamResponseForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsTeamEntity

```go
teamsTeam := client.TeamsTeam(nil)
fmt.Println(teamsTeam.GetName()) // "teams_team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `members` | `[]any` | Yes | An array of team members to be assigned to the new team. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `parentTeamId` | `string` | No | The unique identifier of the parent team, if applicable, represented as a string. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `id` | - | - | - |
| `members` | - | - | - |
| `name` | - | - | - |
| `parentTeamId` | - | - | Yes |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsTeam(nil).Load(map[string]any{"team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsTeam(nil).Update(map[string]any{
    "team_id": "team_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsTeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsTeamMemberEntity

```go
teamsTeamMember := client.TeamsTeamMember(nil)
fmt.Println(teamsTeamMember.GetName()) // "teams_team_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of team member assignment. |
| `userId` | `string` | Yes | The unique identifier for the user being assigned to the team. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsTeamMember(nil).Create(map[string]any{
    "2026_09_id": "example_2026_09_id",
    "type": "example_type",
    "userId": "example_userId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsTeamMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.User(nil).Remove(map[string]any{"user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicPermissionSetNoEntity

```go
userProvisioningCollectionResponsePublicPermissionSetNo := client.UserProvisioningCollectionResponsePublicPermissionSetNo(nil)
fmt.Println(userProvisioningCollectionResponsePublicPermissionSetNo.GetName()) // "user_provisioning_collection_response_public_permission_set_no"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the permission set. |
| `name` | `string` | Yes | The name of the permission set. |
| `requiresBillingWrite` | `bool` | Yes | A boolean indicating whether the permission set requires billing write access. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserProvisioningCollectionResponsePublicPermissionSetNo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicSeatNoPagingEntity

```go
userProvisioningCollectionResponsePublicSeatNoPaging := client.UserProvisioningCollectionResponsePublicSeatNoPaging(nil)
fmt.Println(userProvisioningCollectionResponsePublicSeatNoPaging.GetName()) // "user_provisioning_collection_response_public_seat_no_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A string providing additional details about the seat. |
| `name` | `string` | Yes | The name of the seat. |
| `remainingSeats` | `int` | No | An integer indicating the number of seats that are still available. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserProvisioningCollectionResponsePublicSeatNoPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicTeamNoPagingEntity

```go
userProvisioningCollectionResponsePublicTeamNoPaging := client.UserProvisioningCollectionResponsePublicTeamNoPaging(nil)
fmt.Println(userProvisioningCollectionResponsePublicTeamNoPaging.GetName()) // "user_provisioning_collection_response_public_team_no_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `secondaryUserIds` | `[]any` | Yes | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `[]any` | Yes | An array of strings representing the IDs of users who are primary members of the team. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserProvisioningCollectionResponsePublicTeamNoPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicUserForwardPagingEntity

```go
userProvisioningCollectionResponsePublicUserForwardPaging := client.UserProvisioningCollectionResponsePublicUserForwardPaging(nil)
fmt.Println(userProvisioningCollectionResponsePublicUserForwardPaging.GetName()) // "user_provisioning_collection_response_public_user_forward_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The email address of the user. |
| `firstName` | `string` | No | The first name of the user, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the user, represented as a string. |
| `lastName` | `string` | No | The last name of the user, represented as a string. |
| `primaryTeamId` | `string` | No | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `string` | No | A string representing a single role ID assigned to the user. |
| `roleIds` | `[]any` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `[]any` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `[]any` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | No | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | Yes | A boolean indicating whether the user has super admin privileges. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserProvisioningCollectionResponsePublicUserForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserProvisioningPublicUserEntity

```go
userProvisioningPublicUser := client.UserProvisioningPublicUser(nil)
fmt.Println(userProvisioningPublicUser.GetName()) // "user_provisioning_public_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The email address of the user. |
| `firstName` | `string` | No | The first name of the user, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the user, represented as a string. |
| `lastName` | `string` | No | The last name of the user, represented as a string. |
| `primaryTeamId` | `string` | No | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `string` | No | A string representing a single role ID assigned to the user. |
| `roleIds` | `[]any` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `[]any` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `[]any` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | No | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | Yes | A boolean indicating whether the user has super admin privileges. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `email` | - | - | - |
| `firstName` | - | - | - |
| `id` | - | - | - |
| `lastName` | - | - | - |
| `primaryTeamId` | - | - | - |
| `roleId` | - | - | - |
| `roleIds` | - | - | - |
| `seatNames` | - | - | - |
| `secondaryTeamIds` | - | - | - |
| `sendWelcomeEmail` | - | Yes | - |
| `superAdmin` | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserProvisioningPublicUser(nil).Load(map[string]any{"user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UserProvisioningPublicUser(nil).Update(map[string]any{
    "user_id": "user_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserProvisioningPublicUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```go
client := sdk.NewHubspotSettingsSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

