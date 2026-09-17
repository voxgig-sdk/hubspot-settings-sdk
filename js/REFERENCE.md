# HubspotSettings JavaScript SDK Reference

Complete API reference for the HubspotSettings JavaScript SDK.


## HubspotSettingsSDK

### Constructor

```ts
new HubspotSettingsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotSettingsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HubspotSettingsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HubspotSettingsSDK` instance in test mode.


### Instance Methods

#### `Basic(data?: object)`

Create a new `Basic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BasicEntity` instance.

#### `ExchangeRate(data?: object)`

Create a new `ExchangeRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExchangeRateEntity` instance.

#### `MulticurrencyBatchResponseExchangeRate(data?: object)`

Create a new `MulticurrencyBatchResponseExchangeRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MulticurrencyBatchResponseExchangeRateEntity` instance.

#### `MulticurrencyCentralExchangeRatesInformation(data?: object)`

Create a new `MulticurrencyCentralExchangeRatesInformation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MulticurrencyCentralExchangeRatesInformationEntity` instance.

#### `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(data?: object)`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` instance.

#### `MulticurrencyCollectionResponseExchangeRateForwardPaging(data?: object)`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance.

#### `MulticurrencyCollectionResponseExchangeRateNoPaging(data?: object)`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MulticurrencyCollectionResponseExchangeRateNoPagingEntity` instance.

#### `MulticurrencyCompanyCurrency(data?: object)`

Create a new `MulticurrencyCompanyCurrency` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MulticurrencyCompanyCurrencyEntity` instance.

#### `MulticurrencyExchangeRate(data?: object)`

Create a new `MulticurrencyExchangeRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MulticurrencyExchangeRateEntity` instance.

#### `TaxRate(data?: object)`

Create a new `TaxRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaxRateEntity` instance.

#### `TeamsBatchResponseTeamMember(data?: object)`

Create a new `TeamsBatchResponseTeamMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsBatchResponseTeamMemberEntity` instance.

#### `TeamsCollectionResponseTeamMemberResponseForwardPaging(data?: object)`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance.

#### `TeamsCollectionResponseTeamResponseForwardPaging(data?: object)`

Create a new `TeamsCollectionResponseTeamResponseForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance.

#### `TeamsTeam(data?: object)`

Create a new `TeamsTeam` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsTeamEntity` instance.

#### `TeamsTeamMember(data?: object)`

Create a new `TeamsTeamMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsTeamMemberEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserProvisioningCollectionResponsePublicPermissionSetNo(data?: object)`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserProvisioningCollectionResponsePublicPermissionSetNoEntity` instance.

#### `UserProvisioningCollectionResponsePublicSeatNoPaging(data?: object)`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserProvisioningCollectionResponsePublicSeatNoPagingEntity` instance.

#### `UserProvisioningCollectionResponsePublicTeamNoPaging(data?: object)`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserProvisioningCollectionResponsePublicTeamNoPagingEntity` instance.

#### `UserProvisioningCollectionResponsePublicUserForwardPaging(data?: object)`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance.

#### `UserProvisioningPublicUser(data?: object)`

Create a new `UserProvisioningPublicUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserProvisioningPublicUserEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HubspotSettingsSDK.test()`.

**Returns:** `HubspotSettingsSDK` instance in test mode.


---

## BasicEntity

```ts
const basic = client.Basic()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Basic().remove({ team_id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExchangeRateEntity

```ts
const exchange_rate = client.ExchangeRate()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ExchangeRate().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExchangeRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MulticurrencyBatchResponseExchangeRateEntity

```ts
const multicurrency_batch_response_exchange_rate = client.MulticurrencyBatchResponseExchangeRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The datetime the response was completed |
| `inputs` | `Array` | Yes | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `Object` | No | The link to the next page with exchange rates. |
| `requestedAt` | `string` | No | The datetime the of the request. |
| `results` | `Array` | Yes | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | Yes | The datetime the of the request. |
| `status` | `string` | Yes | The current status of the response (e.g. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MulticurrencyBatchResponseExchangeRate().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MulticurrencyBatchResponseExchangeRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MulticurrencyCentralExchangeRatesInformationEntity

```ts
const multicurrency_central_exchange_rates_information = client.MulticurrencyCentralExchangeRatesInformation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `centralExchangeRatesEnabled` | `boolean` | Yes | Indicates if central exchange rates is enabled for the portal or not. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MulticurrencyCentralExchangeRatesInformation().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MulticurrencyCentralExchangeRatesInformationEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity

```ts
const multicurrency_collection_response_currency_code_info_no_paging = client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `currencyName` | `string` | Yes | The full name of the currency (ex. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MulticurrencyCollectionResponseExchangeRateForwardPagingEntity

```ts
const multicurrency_collection_response_exchange_rate_forward_paging = client.MulticurrencyCollectionResponseExchangeRateForwardPaging()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MulticurrencyCollectionResponseExchangeRateForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MulticurrencyCollectionResponseExchangeRateNoPagingEntity

```ts
const multicurrency_collection_response_exchange_rate_no_paging = client.MulticurrencyCollectionResponseExchangeRateNoPaging()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MulticurrencyCollectionResponseExchangeRateNoPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MulticurrencyCollectionResponseExchangeRateNoPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MulticurrencyCompanyCurrencyEntity

```ts
const multicurrency_company_currency = client.MulticurrencyCompanyCurrency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date the company currency was created. |
| `currencyCode` | `string` | Yes | The three-letter code representing a specific currency (ex. |
| `id` | `string` | Yes | The currency code for the company currency |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MulticurrencyCompanyCurrency().load({ id: 'multicurrency_company_currency_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MulticurrencyCompanyCurrency().update({
  id: 'multicurrency_company_currency_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MulticurrencyCompanyCurrencyEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MulticurrencyExchangeRateEntity

```ts
const multicurrency_exchange_rate = client.MulticurrencyExchangeRate()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MulticurrencyExchangeRate().create({
  conversionRate: 1,
  createdAt: 'example_createdAt',
  currencyCode: 'example_currencyCode',
  effectiveAt: 'example_effectiveAt',
  fromCurrencyCode: 'example_fromCurrencyCode',
  id: 'example_id',
  toCurrencyCode: 'example_toCurrencyCode',
  updatedAt: 'example_updatedAt',
  visibleInUI: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MulticurrencyExchangeRate().load({ id: 'multicurrency_exchange_rate_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MulticurrencyExchangeRate().update({
  id: 'multicurrency_exchange_rate_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MulticurrencyExchangeRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaxRateEntity

```ts
const tax_rate = client.TaxRate()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TaxRate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TaxRate().load({ id: 'tax_rate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaxRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsBatchResponseTeamMemberEntity

```ts
const teams_batch_response_team_member = client.TeamsBatchResponseTeamMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `Array` | No | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `Array` | Yes | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `Object` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `number` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `Array` | Yes | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsBatchResponseTeamMember().create({
  team_id: 'example_team_id',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsBatchResponseTeamMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsCollectionResponseTeamMemberResponseForwardPagingEntity

```ts
const teams_collection_response_team_member_response_forward_paging = client.TeamsCollectionResponseTeamMemberResponseForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of membership the user has in the team. |
| `userId` | `string` | Yes | The unique identifier for the user, represented as a string. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsCollectionResponseTeamMemberResponseForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsCollectionResponseTeamResponseForwardPagingEntity

```ts
const teams_collection_response_team_response_forward_paging = client.TeamsCollectionResponseTeamResponseForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `parentTeamId` | `string` | No | The unique identifier of the parent team, if applicable, represented as a string. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsCollectionResponseTeamResponseForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsTeamEntity

```ts
const teams_team = client.TeamsTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `members` | `Array` | Yes | An array of team members to be assigned to the new team. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsTeam().create({
  id: 'example_id',
  members: [],
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsTeam().load({ team_id: 'team_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsTeam().update({
  team_id: 'team_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsTeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsTeamMemberEntity

```ts
const teams_team_member = client.TeamsTeamMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | The type of team member assignment. |
| `userId` | `string` | Yes | The unique identifier for the user being assigned to the team. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsTeamMember().create({
  team_id: 'example_team_id',
  type: 'example_type',
  userId: 'example_userId',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsTeamMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.User().remove({ user_id: 'user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserProvisioningCollectionResponsePublicPermissionSetNoEntity

```ts
const user_provisioning_collection_response_public_permission_set_no = client.UserProvisioningCollectionResponsePublicPermissionSetNo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the permission set. |
| `name` | `string` | Yes | The name of the permission set. |
| `requiresBillingWrite` | `boolean` | Yes | A boolean indicating whether the permission set requires billing write access. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserProvisioningCollectionResponsePublicPermissionSetNo().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserProvisioningCollectionResponsePublicPermissionSetNoEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserProvisioningCollectionResponsePublicSeatNoPagingEntity

```ts
const user_provisioning_collection_response_public_seat_no_paging = client.UserProvisioningCollectionResponsePublicSeatNoPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A string providing additional details about the seat. |
| `name` | `string` | Yes | The name of the seat. |
| `remainingSeats` | `number` | No | An integer indicating the number of seats that are still available. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserProvisioningCollectionResponsePublicSeatNoPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserProvisioningCollectionResponsePublicSeatNoPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserProvisioningCollectionResponsePublicTeamNoPagingEntity

```ts
const user_provisioning_collection_response_public_team_no_paging = client.UserProvisioningCollectionResponsePublicTeamNoPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `string` | Yes | The name of the team, represented as a string. |
| `secondaryUserIds` | `Array` | Yes | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `Array` | Yes | An array of strings representing the IDs of users who are primary members of the team. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserProvisioningCollectionResponsePublicTeamNoPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserProvisioningCollectionResponsePublicTeamNoPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserProvisioningCollectionResponsePublicUserForwardPagingEntity

```ts
const user_provisioning_collection_response_public_user_forward_paging = client.UserProvisioningCollectionResponsePublicUserForwardPaging()
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
| `roleIds` | `Array` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `Array` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `Array` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `boolean` | No | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `boolean` | Yes | A boolean indicating whether the user has super admin privileges. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserProvisioningCollectionResponsePublicUserForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserProvisioningPublicUserEntity

```ts
const user_provisioning_public_user = client.UserProvisioningPublicUser()
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
| `roleIds` | `Array` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `Array` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `Array` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UserProvisioningPublicUser().create({
  email: 'example_email',
  id: 'example_id',
  roleIds: [],
  superAdmin: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserProvisioningPublicUser().load({ user_id: 'user_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UserProvisioningPublicUser().update({
  user_id: 'user_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserProvisioningPublicUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new HubspotSettingsSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

