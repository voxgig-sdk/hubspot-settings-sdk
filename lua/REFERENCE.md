# HubspotSettings Lua SDK Reference

Complete API reference for the HubspotSettings Lua SDK.


## HubspotSettingsSDK

### Constructor

```lua
local sdk = require("hubspot-settings_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Basic(data)`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `ExchangeRate(data)`

Create a new `ExchangeRate` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyBatchResponseExchangeRate(data)`

Create a new `MulticurrencyBatchResponseExchangeRate` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCentralExchangeRatesInformation(data)`

Create a new `MulticurrencyCentralExchangeRatesInformation` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(data)`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCollectionResponseExchangeRateForwardPaging(data)`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPaging` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCollectionResponseExchangeRateNoPaging(data)`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPaging` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyCompanyCurrency(data)`

Create a new `MulticurrencyCompanyCurrency` entity instance. Pass `nil` for no initial data.

#### `MulticurrencyExchangeRate(data)`

Create a new `MulticurrencyExchangeRate` entity instance. Pass `nil` for no initial data.

#### `TaxRate(data)`

Create a new `TaxRate` entity instance. Pass `nil` for no initial data.

#### `TeamsBatchResponseTeamMember(data)`

Create a new `TeamsBatchResponseTeamMember` entity instance. Pass `nil` for no initial data.

#### `TeamsCollectionResponseTeamMemberResponseForwardPaging(data)`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPaging` entity instance. Pass `nil` for no initial data.

#### `TeamsCollectionResponseTeamResponseForwardPaging(data)`

Create a new `TeamsCollectionResponseTeamResponseForwardPaging` entity instance. Pass `nil` for no initial data.

#### `TeamsTeam(data)`

Create a new `TeamsTeam` entity instance. Pass `nil` for no initial data.

#### `TeamsTeamMember(data)`

Create a new `TeamsTeamMember` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicPermissionSetNo(data)`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNo` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicSeatNoPaging(data)`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPaging` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicTeamNoPaging(data)`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPaging` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningCollectionResponsePublicUserForwardPaging(data)`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPaging` entity instance. Pass `nil` for no initial data.

#### `UserProvisioningPublicUser(data)`

Create a new `UserProvisioningPublicUser` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## BasicEntity

```lua
local basic = client:Basic(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Basic():remove({ team_id = "team_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExchangeRateEntity

```lua
local exchange_rate = client:ExchangeRate(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ExchangeRate():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MulticurrencyBatchResponseExchangeRateEntity

```lua
local multicurrency_batch_response_exchange_rate = client:MulticurrencyBatchResponseExchangeRate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The datetime the response was completed |
| `inputs` | `table` | Yes | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `table` | No | The link to the next page with exchange rates. |
| `requestedAt` | `string` | No | The datetime the of the request. |
| `results` | `table` | Yes | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | Yes | The datetime the of the request. |
| `status` | `string` | Yes | The current status of the response (e.g. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MulticurrencyBatchResponseExchangeRate():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyBatchResponseExchangeRateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MulticurrencyCentralExchangeRatesInformationEntity

```lua
local multicurrency_central_exchange_rates_information = client:MulticurrencyCentralExchangeRatesInformation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `centralExchangeRatesEnabled` | `boolean` | Yes | Indicates if central exchange rates is enabled for the portal or not. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MulticurrencyCentralExchangeRatesInformation():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCentralExchangeRatesInformationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity

```lua
local multicurrency_collection_response_currency_code_info_no_paging = client:MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `currencyName` | `string` | Yes | The full name of the currency (ex. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MulticurrencyCollectionResponseExchangeRateForwardPagingEntity

```lua
local multicurrency_collection_response_exchange_rate_forward_paging = client:MulticurrencyCollectionResponseExchangeRateForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `number` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `boolean` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MulticurrencyCollectionResponseExchangeRateForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MulticurrencyCollectionResponseExchangeRateNoPagingEntity

```lua
local multicurrency_collection_response_exchange_rate_no_paging = client:MulticurrencyCollectionResponseExchangeRateNoPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `number` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `boolean` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MulticurrencyCollectionResponseExchangeRateNoPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MulticurrencyCompanyCurrencyEntity

```lua
local multicurrency_company_currency = client:MulticurrencyCompanyCurrency(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date the company currency was created. |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `id` | `string` | Yes | The currency code for the company currency |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MulticurrencyCompanyCurrency():load({ id = "multicurrency_company_currency_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:MulticurrencyCompanyCurrency():update({
  id = "multicurrency_company_currency_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCompanyCurrencyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MulticurrencyExchangeRateEntity

```lua
local multicurrency_exchange_rate = client:MulticurrencyExchangeRate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `number` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `currencyCode` | `string` | Yes | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `boolean` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MulticurrencyExchangeRate():create({
  conversionRate = --[[ number ]],
  createdAt = --[[ string ]],
  currencyCode = --[[ string ]],
  effectiveAt = --[[ string ]],
  fromCurrencyCode = --[[ string ]],
  id = --[[ string ]],
  toCurrencyCode = --[[ string ]],
  updatedAt = --[[ string ]],
  visibleInUI = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MulticurrencyExchangeRate():load({ id = "multicurrency_exchange_rate_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:MulticurrencyExchangeRate():update({
  id = "multicurrency_exchange_rate_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyExchangeRateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaxRateEntity

```lua
local tax_rate = client:TaxRate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Indicates whether the tax rate group is currently active. |
| `createdAt` | `string` | Yes | The date and time when the tax rate was created. |
| `id` | `string` | Yes | The unique identifier for the tax rate. |
| `label` | `string` | Yes | The display label for the tax rate. |
| `name` | `string` | Yes | The name of the tax rate. |
| `percentageRate` | `number` | Yes | The percentage rate applied. |
| `updatedAt` | `string` | Yes | The date and time when the tax rate was last updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TaxRate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TaxRate():load({ id = "tax_rate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsBatchResponseTeamMemberEntity

```lua
local teams_batch_response_team_member = client:TeamsBatchResponseTeamMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `table` | No | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `table` | Yes | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `table` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `number` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | Yes | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsBatchResponseTeamMember():create({
  ["2026_09_id"] = --[[ string ]],
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsBatchResponseTeamMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsCollectionResponseTeamMemberResponseForwardPagingEntity

```lua
local teams_collection_response_team_member_response_forward_paging = client:TeamsCollectionResponseTeamMemberResponseForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of membership the user has in the team. |
| `userId` | `string` | Yes | The unique identifier for the user, represented as a string. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsCollectionResponseTeamMemberResponseForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsCollectionResponseTeamResponseForwardPagingEntity

```lua
local teams_collection_response_team_response_forward_paging = client:TeamsCollectionResponseTeamResponseForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `parentTeamId` | `string` | No | The unique identifier of the parent team, if applicable, represented as a string. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsCollectionResponseTeamResponseForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsTeamEntity

```lua
local teams_team = client:TeamsTeam(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `members` | `table` | Yes | An array of team members to be assigned to the new team. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsTeam():create({
  id = --[[ string ]],
  members = --[[ table ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsTeam():load({ team_id = "team_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsTeam():update({
  team_id = "team_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsTeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsTeamMemberEntity

```lua
local teams_team_member = client:TeamsTeamMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of team member assignment. |
| `userId` | `string` | Yes | The unique identifier for the user being assigned to the team. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsTeamMember():create({
  ["2026_09_id"] = --[[ string ]],
  type = --[[ string ]],
  userId = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsTeamMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:User():remove({ user_id = "user_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicPermissionSetNoEntity

```lua
local user_provisioning_collection_response_public_permission_set_no = client:UserProvisioningCollectionResponsePublicPermissionSetNo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the permission set. |
| `name` | `string` | Yes | The name of the permission set. |
| `requiresBillingWrite` | `boolean` | Yes | A boolean indicating whether the permission set requires billing write access. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserProvisioningCollectionResponsePublicPermissionSetNo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicSeatNoPagingEntity

```lua
local user_provisioning_collection_response_public_seat_no_paging = client:UserProvisioningCollectionResponsePublicSeatNoPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A string providing additional details about the seat. |
| `name` | `string` | Yes | The name of the seat. |
| `remainingSeats` | `number` | No | An integer indicating the number of seats that are still available. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserProvisioningCollectionResponsePublicSeatNoPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicTeamNoPagingEntity

```lua
local user_provisioning_collection_response_public_team_no_paging = client:UserProvisioningCollectionResponsePublicTeamNoPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `secondaryUserIds` | `table` | Yes | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `table` | Yes | An array of strings representing the IDs of users who are primary members of the team. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserProvisioningCollectionResponsePublicTeamNoPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicUserForwardPagingEntity

```lua
local user_provisioning_collection_response_public_user_forward_paging = client:UserProvisioningCollectionResponsePublicUserForwardPaging(nil)
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
| `roleIds` | `table` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `table` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `table` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `boolean` | No | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `boolean` | Yes | A boolean indicating whether the user has super admin privileges. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserProvisioningCollectionResponsePublicUserForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserProvisioningPublicUserEntity

```lua
local user_provisioning_public_user = client:UserProvisioningPublicUser(nil)
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
| `roleIds` | `table` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `table` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `table` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `boolean` | No | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `boolean` | Yes | A boolean indicating whether the user has super admin privileges. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UserProvisioningPublicUser():create({
  email = --[[ string ]],
  id = --[[ string ]],
  roleIds = --[[ table ]],
  superAdmin = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserProvisioningPublicUser():load({ user_id = "user_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UserProvisioningPublicUser():update({
  user_id = "user_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningPublicUserEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

