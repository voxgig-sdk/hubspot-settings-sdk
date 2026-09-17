# HubspotSettings PHP SDK Reference

Complete API reference for the HubspotSettings PHP SDK.


## HubspotSettingsSDK

### Constructor

```php
require_once __DIR__ . '/hubspotsettings_sdk.php';

$client = new HubspotSettingsSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotSettingsSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HubspotSettingsSDK::test();
```


### Instance Methods

#### `Basic($data = null)`

Create a new `BasicEntity` instance. Pass `null` for no initial data.

#### `ExchangeRate($data = null)`

Create a new `ExchangeRateEntity` instance. Pass `null` for no initial data.

#### `MulticurrencyBatchResponseExchangeRate($data = null)`

Create a new `MulticurrencyBatchResponseExchangeRateEntity` instance. Pass `null` for no initial data.

#### `MulticurrencyCentralExchangeRatesInformation($data = null)`

Create a new `MulticurrencyCentralExchangeRatesInformationEntity` instance. Pass `null` for no initial data.

#### `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging($data = null)`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` instance. Pass `null` for no initial data.

#### `MulticurrencyCollectionResponseExchangeRateForwardPaging($data = null)`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance. Pass `null` for no initial data.

#### `MulticurrencyCollectionResponseExchangeRateNoPaging($data = null)`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPagingEntity` instance. Pass `null` for no initial data.

#### `MulticurrencyCompanyCurrency($data = null)`

Create a new `MulticurrencyCompanyCurrencyEntity` instance. Pass `null` for no initial data.

#### `MulticurrencyExchangeRate($data = null)`

Create a new `MulticurrencyExchangeRateEntity` instance. Pass `null` for no initial data.

#### `TaxRate($data = null)`

Create a new `TaxRateEntity` instance. Pass `null` for no initial data.

#### `TeamsBatchResponseTeamMember($data = null)`

Create a new `TeamsBatchResponseTeamMemberEntity` instance. Pass `null` for no initial data.

#### `TeamsCollectionResponseTeamMemberResponseForwardPaging($data = null)`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance. Pass `null` for no initial data.

#### `TeamsCollectionResponseTeamResponseForwardPaging($data = null)`

Create a new `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance. Pass `null` for no initial data.

#### `TeamsTeam($data = null)`

Create a new `TeamsTeamEntity` instance. Pass `null` for no initial data.

#### `TeamsTeamMember($data = null)`

Create a new `TeamsTeamMemberEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserProvisioningCollectionResponsePublicPermissionSetNo($data = null)`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNoEntity` instance. Pass `null` for no initial data.

#### `UserProvisioningCollectionResponsePublicSeatNoPaging($data = null)`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPagingEntity` instance. Pass `null` for no initial data.

#### `UserProvisioningCollectionResponsePublicTeamNoPaging($data = null)`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPagingEntity` instance. Pass `null` for no initial data.

#### `UserProvisioningCollectionResponsePublicUserForwardPaging($data = null)`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance. Pass `null` for no initial data.

#### `UserProvisioningPublicUser($data = null)`

Create a new `UserProvisioningPublicUserEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HubspotSettingsUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BasicEntity

```php
$basic = $client->Basic();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Basic()->remove(["team_id" => "team_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BasicEntity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExchangeRateEntity

```php
$exchange_rate = $client->ExchangeRate();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ExchangeRate()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExchangeRateEntity`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MulticurrencyBatchResponseExchangeRateEntity

```php
$multicurrency_batch_response_exchange_rate = $client->MulticurrencyBatchResponseExchangeRate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The datetime the response was completed |
| `inputs` | `array` | Yes | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `array` | No | The link to the next page with exchange rates. |
| `requestedAt` | `string` | No | The datetime the of the request. |
| `results` | `array` | Yes | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | Yes | The datetime the of the request. |
| `status` | `string` | Yes | The current status of the response (e.g. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MulticurrencyBatchResponseExchangeRate()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MulticurrencyBatchResponseExchangeRateEntity`

Create a new `MulticurrencyBatchResponseExchangeRateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MulticurrencyCentralExchangeRatesInformationEntity

```php
$multicurrency_central_exchange_rates_information = $client->MulticurrencyCentralExchangeRatesInformation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `centralExchangeRatesEnabled` | `bool` | Yes | Indicates if central exchange rates is enabled for the portal or not. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MulticurrencyCentralExchangeRatesInformation()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MulticurrencyCentralExchangeRatesInformationEntity`

Create a new `MulticurrencyCentralExchangeRatesInformationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity

```php
$multicurrency_collection_response_currency_code_info_no_paging = $client->MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `currencyName` | `string` | Yes | The full name of the currency (ex. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MulticurrencyCollectionResponseExchangeRateForwardPagingEntity

```php
$multicurrency_collection_response_exchange_rate_forward_paging = $client->MulticurrencyCollectionResponseExchangeRateForwardPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MulticurrencyCollectionResponseExchangeRateForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MulticurrencyCollectionResponseExchangeRateForwardPagingEntity`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MulticurrencyCollectionResponseExchangeRateNoPagingEntity

```php
$multicurrency_collection_response_exchange_rate_no_paging = $client->MulticurrencyCollectionResponseExchangeRateNoPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `string` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `string` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `string` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `string` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `string` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MulticurrencyCollectionResponseExchangeRateNoPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MulticurrencyCollectionResponseExchangeRateNoPagingEntity`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MulticurrencyCompanyCurrencyEntity

```php
$multicurrency_company_currency = $client->MulticurrencyCompanyCurrency();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date the company currency was created. |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `id` | `string` | Yes | The currency code for the company currency |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MulticurrencyCompanyCurrency()->load(["id" => "multicurrency_company_currency_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->MulticurrencyCompanyCurrency()->update([
  "id" => "multicurrency_company_currency_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MulticurrencyCompanyCurrencyEntity`

Create a new `MulticurrencyCompanyCurrencyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MulticurrencyExchangeRateEntity

```php
$multicurrency_exchange_rate = $client->MulticurrencyExchangeRate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MulticurrencyExchangeRate()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MulticurrencyExchangeRate()->load(["id" => "multicurrency_exchange_rate_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->MulticurrencyExchangeRate()->update([
  "id" => "multicurrency_exchange_rate_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MulticurrencyExchangeRateEntity`

Create a new `MulticurrencyExchangeRateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaxRateEntity

```php
$tax_rate = $client->TaxRate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Indicates whether the tax rate group is currently active. |
| `createdAt` | `string` | Yes | The date and time when the tax rate was created. |
| `id` | `string` | Yes | The unique identifier for the tax rate. |
| `label` | `string` | Yes | The display label for the tax rate. |
| `name` | `string` | Yes | The name of the tax rate. |
| `percentageRate` | `float` | Yes | The percentage rate applied. |
| `updatedAt` | `string` | Yes | The date and time when the tax rate was last updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TaxRate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TaxRate()->load(["id" => "tax_rate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaxRateEntity`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsBatchResponseTeamMemberEntity

```php
$teams_batch_response_team_member = $client->TeamsBatchResponseTeamMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `array` | No | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `array` | Yes | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `array` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `int` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | Yes | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsBatchResponseTeamMember()->create([
  "2026_09_id" => null, // string
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsBatchResponseTeamMemberEntity`

Create a new `TeamsBatchResponseTeamMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsCollectionResponseTeamMemberResponseForwardPagingEntity

```php
$teams_collection_response_team_member_response_forward_paging = $client->TeamsCollectionResponseTeamMemberResponseForwardPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of membership the user has in the team. |
| `userId` | `string` | Yes | The unique identifier for the user, represented as a string. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsCollectionResponseTeamMemberResponseForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsCollectionResponseTeamMemberResponseForwardPagingEntity`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsCollectionResponseTeamResponseForwardPagingEntity

```php
$teams_collection_response_team_response_forward_paging = $client->TeamsCollectionResponseTeamResponseForwardPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `parentTeamId` | `string` | No | The unique identifier of the parent team, if applicable, represented as a string. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsCollectionResponseTeamResponseForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsCollectionResponseTeamResponseForwardPagingEntity`

Create a new `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsTeamEntity

```php
$teams_team = $client->TeamsTeam();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `members` | `array` | Yes | An array of team members to be assigned to the new team. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsTeam()->create([
  "id" => null, // string
  "members" => null, // array
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsTeam()->load(["team_id" => "team_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsTeam()->update([
  "team_id" => "team_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsTeamEntity`

Create a new `TeamsTeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsTeamMemberEntity

```php
$teams_team_member = $client->TeamsTeamMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of team member assignment. |
| `userId` | `string` | Yes | The unique identifier for the user being assigned to the team. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsTeamMember()->create([
  "2026_09_id" => null, // string
  "type" => null, // string
  "userId" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsTeamMemberEntity`

Create a new `TeamsTeamMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->User()->remove(["user_id" => "user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicPermissionSetNoEntity

```php
$user_provisioning_collection_response_public_permission_set_no = $client->UserProvisioningCollectionResponsePublicPermissionSetNo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the permission set. |
| `name` | `string` | Yes | The name of the permission set. |
| `requiresBillingWrite` | `bool` | Yes | A boolean indicating whether the permission set requires billing write access. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserProvisioningCollectionResponsePublicPermissionSetNo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserProvisioningCollectionResponsePublicPermissionSetNoEntity`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicSeatNoPagingEntity

```php
$user_provisioning_collection_response_public_seat_no_paging = $client->UserProvisioningCollectionResponsePublicSeatNoPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A string providing additional details about the seat. |
| `name` | `string` | Yes | The name of the seat. |
| `remainingSeats` | `int` | No | An integer indicating the number of seats that are still available. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserProvisioningCollectionResponsePublicSeatNoPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserProvisioningCollectionResponsePublicSeatNoPagingEntity`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicTeamNoPagingEntity

```php
$user_provisioning_collection_response_public_team_no_paging = $client->UserProvisioningCollectionResponsePublicTeamNoPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `secondaryUserIds` | `array` | Yes | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `array` | Yes | An array of strings representing the IDs of users who are primary members of the team. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserProvisioningCollectionResponsePublicTeamNoPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserProvisioningCollectionResponsePublicTeamNoPagingEntity`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicUserForwardPagingEntity

```php
$user_provisioning_collection_response_public_user_forward_paging = $client->UserProvisioningCollectionResponsePublicUserForwardPaging();
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
| `roleIds` | `array` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `array` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `array` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | No | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | Yes | A boolean indicating whether the user has super admin privileges. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserProvisioningCollectionResponsePublicUserForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserProvisioningCollectionResponsePublicUserForwardPagingEntity`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserProvisioningPublicUserEntity

```php
$user_provisioning_public_user = $client->UserProvisioningPublicUser();
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
| `roleIds` | `array` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `array` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `array` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UserProvisioningPublicUser()->create([
  "email" => null, // string
  "id" => null, // string
  "roleIds" => null, // array
  "superAdmin" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserProvisioningPublicUser()->load(["user_id" => "user_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UserProvisioningPublicUser()->update([
  "user_id" => "user_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserProvisioningPublicUserEntity`

Create a new `UserProvisioningPublicUserEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new HubspotSettingsSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

