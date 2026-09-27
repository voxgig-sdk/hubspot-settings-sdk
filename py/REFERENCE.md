# HubspotSettings Python SDK Reference

Complete API reference for the HubspotSettings Python SDK.


## HubspotSettingsSDK

### Constructor

```python
from hubspotsettings_sdk import HubspotSettingsSDK

client = HubspotSettingsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotSettingsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HubspotSettingsSDK.test()
```


### Instance Methods

#### `AddCurrency(data=None)`

Create a new `AddCurrencyEntity` instance. Pass `None` for no initial data.

#### `Basic(data=None)`

Create a new `BasicEntity` instance. Pass `None` for no initial data.

#### `Code(data=None)`

Create a new `CodeEntity` instance. Pass `None` for no initial data.

#### `Current(data=None)`

Create a new `CurrentEntity` instance. Pass `None` for no initial data.

#### `ExchangeRate(data=None)`

Create a new `ExchangeRateEntity` instance. Pass `None` for no initial data.

#### `MulticurrencyBatchResponseExchangeRate(data=None)`

Create a new `MulticurrencyBatchResponseExchangeRateEntity` instance. Pass `None` for no initial data.

#### `MulticurrencyCentralExchangeRatesInformation(data=None)`

Create a new `MulticurrencyCentralExchangeRatesInformationEntity` instance. Pass `None` for no initial data.

#### `MulticurrencyCollectionResponseExchangeRateForwardPaging(data=None)`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance. Pass `None` for no initial data.

#### `MulticurrencyCompanyCurrency(data=None)`

Create a new `MulticurrencyCompanyCurrencyEntity` instance. Pass `None` for no initial data.

#### `TaxRate(data=None)`

Create a new `TaxRateEntity` instance. Pass `None` for no initial data.

#### `TeamsBatchResponseTeamMember(data=None)`

Create a new `TeamsBatchResponseTeamMemberEntity` instance. Pass `None` for no initial data.

#### `TeamsCollectionResponseTeamMemberResponseForwardPaging(data=None)`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance. Pass `None` for no initial data.

#### `TeamsCollectionResponseTeamResponseForwardPaging(data=None)`

Create a new `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance. Pass `None` for no initial data.

#### `TeamsTeam(data=None)`

Create a new `TeamsTeamEntity` instance. Pass `None` for no initial data.

#### `TeamsTeamMember(data=None)`

Create a new `TeamsTeamMemberEntity` instance. Pass `None` for no initial data.

#### `UnsupportedCurrency(data=None)`

Create a new `UnsupportedCurrencyEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserProvisioningCollectionResponsePublicUserForwardPaging(data=None)`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance. Pass `None` for no initial data.

#### `UserProvisioningPublicPermissionSet(data=None)`

Create a new `UserProvisioningPublicPermissionSetEntity` instance. Pass `None` for no initial data.

#### `UserProvisioningPublicSeat(data=None)`

Create a new `UserProvisioningPublicSeatEntity` instance. Pass `None` for no initial data.

#### `UserProvisioningPublicTeam(data=None)`

Create a new `UserProvisioningPublicTeamEntity` instance. Pass `None` for no initial data.

#### `UserProvisioningPublicUser(data=None)`

Create a new `UserProvisioningPublicUserEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AddCurrencyEntity

```python
add_currency = client.AddCurrency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `str` | Yes | The date the exchange rate was created. |
| `currencyCode` | `str` | Yes | The currency code being added to the HubSpot portal for use with central exchange rates. |
| `effectiveAt` | `str` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `str` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `str` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AddCurrency().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddCurrencyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BasicEntity

```python
basic = client.Basic()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Basic().remove({"team_id": "team_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeEntity

```python
code = client.Code()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencyCode` | `str` | Yes | The three-letter code representing a specific currency (ex. |
| `currencyName` | `str` | Yes | The full name of the currency (ex. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Code().list()
for code in results:
    print(code)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CurrentEntity

```python
current = client.Current()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `str` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `str` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `str` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `str` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Current().list()
for current in results:
    print(current)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CurrentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExchangeRateEntity

```python
exchange_rate = client.ExchangeRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `str` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `str` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `str` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `str` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `conversionRate` | - | - | - |
| `createdAt` | - | - | - |
| `effectiveAt` | - | Yes | Yes |
| `fromCurrencyCode` | - | - | - |
| `id` | - | - | - |
| `toCurrencyCode` | - | - | - |
| `updatedAt` | - | - | - |
| `visibleInUI` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ExchangeRate().create({
    "conversionRate": 1,  # float
    "createdAt": "example_createdAt",  # str
    "effectiveAt": "example_effectiveAt",  # str
    "fromCurrencyCode": "example_fromCurrencyCode",  # str
    "id": "example_id",  # str
    "toCurrencyCode": "example_toCurrencyCode",  # str
    "updatedAt": "example_updatedAt",  # str
    "visibleInUI": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ExchangeRate().load({"id": "exchange_rate_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ExchangeRate().update({
    "id": "exchange_rate_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExchangeRateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MulticurrencyBatchResponseExchangeRateEntity

```python
multicurrency_batch_response_exchange_rate = client.MulticurrencyBatchResponseExchangeRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The datetime the response was completed |
| `inputs` | `list` | Yes | An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. |
| `links` | `dict` | No | The link to the next page with exchange rates. |
| `requestedAt` | `str` | No | The datetime the of the request. |
| `results` | `list` | Yes | An array of exchange rate objects that represent the results of the batch operation. |
| `startedAt` | `str` | Yes | The datetime the of the request. |
| `status` | `str` | Yes | The current status of the response (e.g. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MulticurrencyBatchResponseExchangeRate().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyBatchResponseExchangeRateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MulticurrencyCentralExchangeRatesInformationEntity

```python
multicurrency_central_exchange_rates_information = client.MulticurrencyCentralExchangeRatesInformation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `centralExchangeRatesEnabled` | `bool` | Yes | Indicates if central exchange rates is enabled for the portal or not. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MulticurrencyCentralExchangeRatesInformation().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCentralExchangeRatesInformationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MulticurrencyCollectionResponseExchangeRateForwardPagingEntity

```python
multicurrency_collection_response_exchange_rate_forward_paging = client.MulticurrencyCollectionResponseExchangeRateForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversionRate` | `float` | Yes | The conversion rate between the to and from currency code of this exchange rate. |
| `createdAt` | `str` | Yes | The date the exchange rate was created. |
| `effectiveAt` | `str` | Yes | The date the exchange rate is in effect. |
| `fromCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from. |
| `id` | `str` | Yes | A unique identifier for the exchange rate |
| `toCurrencyCode` | `str` | Yes | This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to. |
| `updatedAt` | `str` | Yes | The date the exchange rate was last updated. |
| `visibleInUI` | `bool` | Yes | This indicates if the exchange rate is shown in the MultiCurrency settings page. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MulticurrencyCollectionResponseExchangeRateForwardPaging().list()
for multicurrency_collection_response_exchange_rate_forward_paging in results:
    print(multicurrency_collection_response_exchange_rate_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCollectionResponseExchangeRateForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MulticurrencyCompanyCurrencyEntity

```python
multicurrency_company_currency = client.MulticurrencyCompanyCurrency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | The date the company currency was created. |
| `currencyCode` | `str` | Yes | The three-letter code representing a specific currency (ex. |
| `id` | `str` | Yes | The currency code for the company currency |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MulticurrencyCompanyCurrency().load({"id": "multicurrency_company_currency_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.MulticurrencyCompanyCurrency().update({
    "id": "multicurrency_company_currency_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MulticurrencyCompanyCurrencyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaxRateEntity

```python
tax_rate = client.TaxRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Indicates whether the tax rate group is currently active. |
| `createdAt` | `str` | Yes | The date and time when the tax rate was created. |
| `id` | `str` | Yes | The unique identifier for the tax rate. |
| `label` | `str` | Yes | The display label for the tax rate. |
| `name` | `str` | Yes | The name of the tax rate. |
| `percentageRate` | `float` | Yes | The percentage rate applied. |
| `updatedAt` | `str` | Yes | The date and time when the tax rate was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TaxRate().list()
for tax_rate in results:
    print(tax_rate)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TaxRate().load({"id": "tax_rate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxRateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsBatchResponseTeamMemberEntity

```python
teams_batch_response_team_member = client.TeamsBatchResponseTeamMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `errors` | `list` | No | An array of StandardError objects detailing any errors that occurred during the batch operation. |
| `inputs` | `list` | Yes | An array of team member assignments, where each item specifies the details of a team member to be assigned. |
| `links` | `dict` | No | A map of link names to associated URIs providing additional information about the batch operation. |
| `numErrors` | `int` | No | The number of errors encountered during the batch operation. |
| `requestedAt` | `str` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | Yes | An array of TeamMemberResponse objects representing the results of the batch operation. |
| `startedAt` | `str` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsBatchResponseTeamMember().create({
    "team_id": "example_team_id",  # str
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsBatchResponseTeamMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsCollectionResponseTeamMemberResponseForwardPagingEntity

```python
teams_collection_response_team_member_response_forward_paging = client.TeamsCollectionResponseTeamMemberResponseForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `str` | Yes | The type of membership the user has in the team. |
| `userId` | `str` | Yes | The unique identifier for the user, represented as a string. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsCollectionResponseTeamMemberResponseForwardPaging().list({"team_id": "example"})
for teams_collection_response_team_member_response_forward_paging in results:
    print(teams_collection_response_team_member_response_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsCollectionResponseTeamMemberResponseForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsCollectionResponseTeamResponseForwardPagingEntity

```python
teams_collection_response_team_response_forward_paging = client.TeamsCollectionResponseTeamResponseForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `str` | Yes | The name of the team, represented as a string. |
| `parentTeamId` | `str` | No | The unique identifier of the parent team, if applicable, represented as a string. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsCollectionResponseTeamResponseForwardPaging().list()
for teams_collection_response_team_response_forward_paging in results:
    print(teams_collection_response_team_response_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsCollectionResponseTeamResponseForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsTeamEntity

```python
teams_team = client.TeamsTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The unique identifier for the team, represented as a string. |
| `members` | `list` | Yes | An array of team members to be assigned to the new team. |
| `name` | `str` | Yes | The name of the team, represented as a string. |
| `parentTeamId` | `str` | No | The unique identifier of the parent team, if applicable, represented as a string. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `id` | - | - | - |
| `members` | - | - | - |
| `name` | - | - | - |
| `parentTeamId` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsTeam().create({
    "id": "example_id",  # str
    "members": [],  # list
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsTeam().load({"team_id": "team_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsTeam().update({
    "team_id": "team_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsTeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsTeamMemberEntity

```python
teams_team_member = client.TeamsTeamMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `str` | Yes | The type of team member assignment. |
| `userId` | `str` | Yes | The unique identifier for the user being assigned to the team. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsTeamMember().create({
    "team_id": "example_team_id",  # str
    "type": "example_type",  # str
    "userId": "example_userId",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsTeamMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UnsupportedCurrencyEntity

```python
unsupported_currency = client.UnsupportedCurrency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencyCode` | `str` | Yes | The three-letter code representing a specific currency (ex. |
| `currencyName` | `str` | Yes | The full name of the currency (ex. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UnsupportedCurrency().list()
for unsupported_currency in results:
    print(unsupported_currency)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnsupportedCurrencyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.User().remove({"user_id": "user_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserProvisioningCollectionResponsePublicUserForwardPagingEntity

```python
user_provisioning_collection_response_public_user_forward_paging = client.UserProvisioningCollectionResponsePublicUserForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes | The email address of the user. |
| `firstName` | `str` | No | The first name of the user, represented as a string. |
| `id` | `str` | Yes | The unique identifier for the user, represented as a string. |
| `lastName` | `str` | No | The last name of the user, represented as a string. |
| `primaryTeamId` | `str` | No | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `str` | No | A string representing a single role ID assigned to the user. |
| `roleIds` | `list` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `list` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `list` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
| `sendWelcomeEmail` | `bool` | No | A boolean indicating whether a welcome email should be sent to the user. |
| `superAdmin` | `bool` | Yes | A boolean indicating whether the user has super admin privileges. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserProvisioningCollectionResponsePublicUserForwardPaging().list()
for user_provisioning_collection_response_public_user_forward_paging in results:
    print(user_provisioning_collection_response_public_user_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningCollectionResponsePublicUserForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserProvisioningPublicPermissionSetEntity

```python
user_provisioning_public_permission_set = client.UserProvisioningPublicPermissionSet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The unique identifier for the permission set. |
| `name` | `str` | Yes | The name of the permission set. |
| `requiresBillingWrite` | `bool` | Yes | A boolean indicating whether the permission set requires billing write access. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserProvisioningPublicPermissionSet().list()
for user_provisioning_public_permission_set in results:
    print(user_provisioning_public_permission_set)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningPublicPermissionSetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserProvisioningPublicSeatEntity

```python
user_provisioning_public_seat = client.UserProvisioningPublicSeat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | A string providing additional details about the seat. |
| `name` | `str` | Yes | The name of the seat. |
| `remainingSeats` | `int` | No | An integer indicating the number of seats that are still available. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserProvisioningPublicSeat().list()
for user_provisioning_public_seat in results:
    print(user_provisioning_public_seat)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningPublicSeatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserProvisioningPublicTeamEntity

```python
user_provisioning_public_team = client.UserProvisioningPublicTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The unique identifier for the team, represented as a string. |
| `name` | `str` | Yes | The name of the team, represented as a string. |
| `secondaryUserIds` | `list` | Yes | An array of strings representing the IDs of users who are secondary members of the team. |
| `userIds` | `list` | Yes | An array of strings representing the IDs of users who are primary members of the team. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserProvisioningPublicTeam().list()
for user_provisioning_public_team in results:
    print(user_provisioning_public_team)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningPublicTeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserProvisioningPublicUserEntity

```python
user_provisioning_public_user = client.UserProvisioningPublicUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes | The email address of the user. |
| `firstName` | `str` | No | The first name of the user, represented as a string. |
| `id` | `str` | Yes | The unique identifier for the user, represented as a string. |
| `lastName` | `str` | No | The last name of the user, represented as a string. |
| `primaryTeamId` | `str` | No | The ID of the primary team to which the user belongs, represented as a string. |
| `roleId` | `str` | No | A string representing a single role ID assigned to the user. |
| `roleIds` | `list` | Yes | An array of strings representing the IDs of the roles assigned to the user. |
| `seatNames` | `list` | No | An array of strings representing the names of seats assigned to the user. |
| `secondaryTeamIds` | `list` | No | An array of strings representing the IDs of secondary teams to which the user is associated. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UserProvisioningPublicUser().create({
    "email": "example_email",  # str
    "id": "example_id",  # str
    "roleIds": [],  # list
    "superAdmin": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserProvisioningPublicUser().load({"user_id": "user_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UserProvisioningPublicUser().update({
    "user_id": "user_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProvisioningPublicUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```python
client = HubspotSettingsSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

Debug capture.

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

Idempotency.

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

Metrics.

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

Paging.

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

Rate limiting.

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

Retry.

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

Test transport.

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

Timeout.

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

