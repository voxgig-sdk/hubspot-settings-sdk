# HubspotSettings TypeScript SDK



The TypeScript SDK for the HubspotSettings API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Basic()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hubspot-settings-sdk/releases](https://github.com/voxgig-sdk/hubspot-settings-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { HubspotSettingsSDK } from '@voxgig-sdk/hubspot-settings'

const client = new HubspotSettingsSDK({
  apikey: process.env.HUBSPOT_SETTINGS_APIKEY,
})
```

### 3. Load a teamsteam

TeamsTeam is nested under team, so provide the `team_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const teamsteam = await client.TeamsTeam().load({
    team_id: 'example_team_id',
  })
  console.log(teamsteam)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Remove
await client.Basic().remove({
  team_id: 'example_team_id',
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const userprovisioningcollectionresponsepublicteamnopagings = await client.UserProvisioningCollectionResponsePublicTeamNoPaging().list()
  console.log(userprovisioningcollectionresponsepublicteamnopagings)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = HubspotSettingsSDK.test()

const userprovisioningcollectionresponsepublicteamnopaging = await client.UserProvisioningCollectionResponsePublicTeamNoPaging().list()
// userprovisioningcollectionresponsepublicteamnopaging is the entity, populated with mock response data
// — call userprovisioningcollectionresponsepublicteamnopaging.data() for the record itself
console.log(userprovisioningcollectionresponsepublicteamnopaging)
```

You can also use the instance method:

```ts
const client = new HubspotSettingsSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.UserProvisioningCollectionResponsePublicTeamNoPaging()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HubspotSettingsSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### HubspotSettingsSDK

#### Constructor

```ts
new HubspotSettingsSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Basic(data?)` | `BasicEntity` | Create a Basic entity instance. |
| `ExchangeRate(data?)` | `ExchangeRateEntity` | Create an ExchangeRate entity instance. |
| `MulticurrencyBatchResponseExchangeRate(data?)` | `MulticurrencyBatchResponseExchangeRateEntity` | Create a MulticurrencyBatchResponseExchangeRate entity instance. |
| `MulticurrencyCentralExchangeRatesInformation(data?)` | `MulticurrencyCentralExchangeRatesInformationEntity` | Create a MulticurrencyCentralExchangeRatesInformation entity instance. |
| `MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging(data?)` | `MulticurrencyCollectionResponseCurrencyCodeInfoNoPagingEntity` | Create a MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging entity instance. |
| `MulticurrencyCollectionResponseExchangeRateForwardPaging(data?)` | `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` | Create a MulticurrencyCollectionResponseExchangeRateForwardPaging entity instance. |
| `MulticurrencyCollectionResponseExchangeRateNoPaging(data?)` | `MulticurrencyCollectionResponseExchangeRateNoPagingEntity` | Create a MulticurrencyCollectionResponseExchangeRateNoPaging entity instance. |
| `MulticurrencyCompanyCurrency(data?)` | `MulticurrencyCompanyCurrencyEntity` | Create a MulticurrencyCompanyCurrency entity instance. |
| `MulticurrencyExchangeRate(data?)` | `MulticurrencyExchangeRateEntity` | Create a MulticurrencyExchangeRate entity instance. |
| `TaxRate(data?)` | `TaxRateEntity` | Create a TaxRate entity instance. |
| `TeamsBatchResponseTeamMember(data?)` | `TeamsBatchResponseTeamMemberEntity` | Create a TeamsBatchResponseTeamMember entity instance. |
| `TeamsCollectionResponseTeamMemberResponseForwardPaging(data?)` | `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` | Create a TeamsCollectionResponseTeamMemberResponseForwardPaging entity instance. |
| `TeamsCollectionResponseTeamResponseForwardPaging(data?)` | `TeamsCollectionResponseTeamResponseForwardPagingEntity` | Create a TeamsCollectionResponseTeamResponseForwardPaging entity instance. |
| `TeamsTeam(data?)` | `TeamsTeamEntity` | Create a TeamsTeam entity instance. |
| `TeamsTeamMember(data?)` | `TeamsTeamMemberEntity` | Create a TeamsTeamMember entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserProvisioningCollectionResponsePublicPermissionSetNo(data?)` | `UserProvisioningCollectionResponsePublicPermissionSetNoEntity` | Create an UserProvisioningCollectionResponsePublicPermissionSetNo entity instance. |
| `UserProvisioningCollectionResponsePublicSeatNoPaging(data?)` | `UserProvisioningCollectionResponsePublicSeatNoPagingEntity` | Create an UserProvisioningCollectionResponsePublicSeatNoPaging entity instance. |
| `UserProvisioningCollectionResponsePublicTeamNoPaging(data?)` | `UserProvisioningCollectionResponsePublicTeamNoPagingEntity` | Create an UserProvisioningCollectionResponsePublicTeamNoPaging entity instance. |
| `UserProvisioningCollectionResponsePublicUserForwardPaging(data?)` | `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` | Create an UserProvisioningCollectionResponsePublicUserForwardPaging entity instance. |
| `UserProvisioningPublicUser(data?)` | `UserProvisioningPublicUserEntity` | Create an UserProvisioningPublicUser entity instance. |
| `tester(testopts?, sdkopts?)` | `HubspotSettingsSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HubspotSettingsSDK.test(testopts?, sdkopts?)` | `HubspotSettingsSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HubspotSettingsSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Basic

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/settings/teams/2026-09/{teamId}/members/{userId}`

#### ExchangeRate

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create.

API path: `/settings/currencies/2026-09/exchange-rates/batch/create`

#### MulticurrencyCentralExchangeRatesInformation

| Field | Description |
| --- | --- |
| `centralExchangeRatesEnabled` | Indicates if central exchange rates is enabled for the portal or not. |

Operations: load.

API path: `/settings/currencies/2026-09/central-fx-rates/information`

#### MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging

| Field | Description |
| --- | --- |
| `currencyCode` | The three-letter code representing a specific currency (ex. |
| `currencyName` | The full name of the currency (ex. |

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/settings/currencies/2026-09/exchange-rates/current`

#### MulticurrencyCompanyCurrency

| Field | Description |
| --- | --- |
| `createdAt` | The date the company currency was created. |
| `currencyCode` | The three-letter code representing a specific currency (ex. |
| `id` | The currency code for the company currency |

Operations: load, update.

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

Operations: create, load, update.

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

Operations: list, load.

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

Operations: create.

API path: `/settings/teams/2026-09/{teamId}/members/batch`

#### TeamsCollectionResponseTeamMemberResponseForwardPaging

| Field | Description |
| --- | --- |
| `type` | The type of membership the user has in the team. |
| `userId` | The unique identifier for the user, represented as a string. |

Operations: list.

API path: `/settings/teams/2026-09/{teamId}/members`

#### TeamsCollectionResponseTeamResponseForwardPaging

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the team, represented as a string. |
| `name` | The name of the team, represented as a string. |
| `parentTeamId` | The unique identifier of the parent team, if applicable, represented as a string. |

Operations: list.

API path: `/settings/teams/2026-09`

#### TeamsTeam

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the team, represented as a string. |
| `members` | An array of team members to be assigned to the new team. |
| `name` | The name of the team, represented as a string. |
| `parentTeamId` | The unique identifier of the parent team, if applicable, represented as a string. |

Operations: create, load, update.

API path: `/settings/teams/2026-09`

#### TeamsTeamMember

| Field | Description |
| --- | --- |
| `type` | The type of team member assignment. |
| `userId` | The unique identifier for the user being assigned to the team. |

Operations: create.

API path: `/settings/teams/2026-09/{teamId}/members`

#### User

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/settings/users/2026-09/{userId}`

#### UserProvisioningCollectionResponsePublicPermissionSetNo

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the permission set. |
| `name` | The name of the permission set. |
| `requiresBillingWrite` | A boolean indicating whether the permission set requires billing write access. |

Operations: list.

API path: `/settings/users/2026-09/roles`

#### UserProvisioningCollectionResponsePublicSeatNoPaging

| Field | Description |
| --- | --- |
| `description` | A string providing additional details about the seat. |
| `name` | The name of the seat. |
| `remainingSeats` | An integer indicating the number of seats that are still available. |

Operations: list.

API path: `/settings/users/2026-09/seats`

#### UserProvisioningCollectionResponsePublicTeamNoPaging

| Field | Description |
| --- | --- |
| `id` | The unique identifier for the team, represented as a string. |
| `name` | The name of the team, represented as a string. |
| `secondaryUserIds` | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | An array of strings representing the IDs of users who are primary members of the team. |

Operations: list.

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

Operations: list.

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

Operations: create, load, update.

API path: `/settings/users/2026-09`



## Entities


### Basic

Create an instance: `const basic = client.Basic()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ExchangeRate

Create an instance: `const exchange_rate = client.ExchangeRate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const exchange_rate = await client.ExchangeRate().create({
})
```


### MulticurrencyBatchResponseExchangeRate

Create an instance: `const multicurrency_batch_response_exchange_rate = client.MulticurrencyBatchResponseExchangeRate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The datetime the response was completed |
| `inputs` | `any[]` | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `Record<string, any>` | The link to the next page with exchange rates. |
| `requestedAt` | `string` | The datetime the of the request. |
| `results` | `any[]` | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `string` | The datetime the of the request. |
| `status` | `string` | The current status of the response (e.g. |

#### Example: Create

```ts
const multicurrency_batch_response_exchange_rate = await client.MulticurrencyBatchResponseExchangeRate().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### MulticurrencyCentralExchangeRatesInformation

Create an instance: `const multicurrency_central_exchange_rates_information = client.MulticurrencyCentralExchangeRatesInformation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `centralExchangeRatesEnabled` | `boolean` | Indicates if central exchange rates is enabled for the portal or not. |

#### Example: Load

```ts
const multicurrency_central_exchange_rates_information = await client.MulticurrencyCentralExchangeRatesInformation().load()
```


### MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging

Create an instance: `const multicurrency_collection_response_currency_code_info_no_paging = client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging()`

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

```ts
const multicurrency_collection_response_currency_code_info_no_pagings = await client.MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging().list()
```


### MulticurrencyCollectionResponseExchangeRateForwardPaging

Create an instance: `const multicurrency_collection_response_exchange_rate_forward_paging = client.MulticurrencyCollectionResponseExchangeRateForwardPaging()`

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

```ts
const multicurrency_collection_response_exchange_rate_forward_pagings = await client.MulticurrencyCollectionResponseExchangeRateForwardPaging().list()
```


### MulticurrencyCollectionResponseExchangeRateNoPaging

Create an instance: `const multicurrency_collection_response_exchange_rate_no_paging = client.MulticurrencyCollectionResponseExchangeRateNoPaging()`

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

```ts
const multicurrency_collection_response_exchange_rate_no_pagings = await client.MulticurrencyCollectionResponseExchangeRateNoPaging().list()
```


### MulticurrencyCompanyCurrency

Create an instance: `const multicurrency_company_currency = client.MulticurrencyCompanyCurrency()`

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

```ts
const multicurrency_company_currency = await client.MulticurrencyCompanyCurrency().load({ id: 'multicurrency_company_currency_id' })
```


### MulticurrencyExchangeRate

Create an instance: `const multicurrency_exchange_rate = client.MulticurrencyExchangeRate()`

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

```ts
const multicurrency_exchange_rate = await client.MulticurrencyExchangeRate().load({ id: 'multicurrency_exchange_rate_id' })
```

#### Example: Create

```ts
const multicurrency_exchange_rate = await client.MulticurrencyExchangeRate().create({
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


### TaxRate

Create an instance: `const tax_rate = client.TaxRate()`

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

```ts
const tax_rate = await client.TaxRate().load({ id: 'tax_rate_id' })
```

#### Example: List

```ts
const tax_rates = await client.TaxRate().list()
```


### TeamsBatchResponseTeamMember

Create an instance: `const teams_batch_response_team_member = client.TeamsBatchResponseTeamMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `any[]` | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `any[]` | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `Record<string, any>` | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `number` | The number of errors encountered during the batch operation. |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `any[]` | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```ts
const teams_batch_response_team_member = await client.TeamsBatchResponseTeamMember().create({
  '2026_09_id': 'example_2026_09_id',
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### TeamsCollectionResponseTeamMemberResponseForwardPaging

Create an instance: `const teams_collection_response_team_member_response_forward_paging = client.TeamsCollectionResponseTeamMemberResponseForwardPaging()`

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

```ts
const teams_collection_response_team_member_response_forward_pagings = await client.TeamsCollectionResponseTeamMemberResponseForwardPaging().list({ '2026_09_id': "example" })
```


### TeamsCollectionResponseTeamResponseForwardPaging

Create an instance: `const teams_collection_response_team_response_forward_paging = client.TeamsCollectionResponseTeamResponseForwardPaging()`

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

```ts
const teams_collection_response_team_response_forward_pagings = await client.TeamsCollectionResponseTeamResponseForwardPaging().list()
```


### TeamsTeam

Create an instance: `const teams_team = client.TeamsTeam()`

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
| `members` | `any[]` | An array of team members to be assigned to the new team. |
| `name` | `string` | The name of the team, represented as a string. |
| `parentTeamId` | `string` | The unique identifier of the parent team, if applicable, represented as a string. |

#### Example: Load

```ts
const teams_team = await client.TeamsTeam().load({ team_id: 'team_id' })
```

#### Example: Create

```ts
const teams_team = await client.TeamsTeam().create({
  id: 'example_id',
  members: [],
  name: 'example_name',
})
```


### TeamsTeamMember

Create an instance: `const teams_team_member = client.TeamsTeamMember()`

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

```ts
const teams_team_member = await client.TeamsTeamMember().create({
  '2026_09_id': 'example_2026_09_id',
  type: 'example_type',
  userId: 'example_userId',
})
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### UserProvisioningCollectionResponsePublicPermissionSetNo

Create an instance: `const user_provisioning_collection_response_public_permission_set_no = client.UserProvisioningCollectionResponsePublicPermissionSetNo()`

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

```ts
const user_provisioning_collection_response_public_permission_set_nos = await client.UserProvisioningCollectionResponsePublicPermissionSetNo().list()
```


### UserProvisioningCollectionResponsePublicSeatNoPaging

Create an instance: `const user_provisioning_collection_response_public_seat_no_paging = client.UserProvisioningCollectionResponsePublicSeatNoPaging()`

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

```ts
const user_provisioning_collection_response_public_seat_no_pagings = await client.UserProvisioningCollectionResponsePublicSeatNoPaging().list()
```


### UserProvisioningCollectionResponsePublicTeamNoPaging

Create an instance: `const user_provisioning_collection_response_public_team_no_paging = client.UserProvisioningCollectionResponsePublicTeamNoPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier for the team, represented as a string. |
| `name` | `string` | The name of the team, represented as a string. |
| `secondaryUserIds` | `any[]` | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `any[]` | An array of strings representing the IDs of users who are primary members of the team. |

#### Example: List

```ts
const user_provisioning_collection_response_public_team_no_pagings = await client.UserProvisioningCollectionResponsePublicTeamNoPaging().list()
```


### UserProvisioningCollectionResponsePublicUserForwardPaging

Create an instance: `const user_provisioning_collection_response_public_user_forward_paging = client.UserProvisioningCollectionResponsePublicUserForwardPaging()`

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
| `roleIds` | `any[]` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `any[]` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `any[]` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `boolean` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `boolean` | A boolean indicating whether the user has super admin privileges. |

#### Example: List

```ts
const user_provisioning_collection_response_public_user_forward_pagings = await client.UserProvisioningCollectionResponsePublicUserForwardPaging().list()
```


### UserProvisioningPublicUser

Create an instance: `const user_provisioning_public_user = client.UserProvisioningPublicUser()`

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
| `roleIds` | `any[]` | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `any[]` | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `any[]` | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `boolean` | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `boolean` | A boolean indicating whether the user has super admin privileges. |

#### Example: Load

```ts
const user_provisioning_public_user = await client.UserProvisioningPublicUser().load({ user_id: 'user_id' })
```

#### Example: Create

```ts
const user_provisioning_public_user = await client.UserProvisioningPublicUser().create({
  email: 'example_email',
  id: 'example_id',
  roleIds: [],
  superAdmin: true,
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
hubspot-settings/
├── src/
│   ├── HubspotSettingsSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { HubspotSettingsSDK } from '@voxgig-sdk/hubspot-settings'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const userprovisioningcollectionresponsepublicteamnopaging = client.UserProvisioningCollectionResponsePublicTeamNoPaging()
await userprovisioningcollectionresponsepublicteamnopaging.list()

// userprovisioningcollectionresponsepublicteamnopaging.data() now returns the userprovisioningcollectionresponsepublicteamnopaging data from the last `list`
// userprovisioningcollectionresponsepublicteamnopaging.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
