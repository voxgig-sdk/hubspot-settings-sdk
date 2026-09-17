# HubSpot Settings API

HubSpot Settings API, merged from the vendor&#39;s per-API OpenAPI documents.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 21 entities and 34 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Basic](docs/api/basic.html)

Results: No content.

SDK operations: `remove`.

### [ExchangeRate](docs/api/exchange_rate.html)

Results: No content.

SDK operations: `create`.

### [MulticurrencyBatchResponseExchangeRate](docs/api/multicurrency_batch_response_exchange_rate.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The datetime the response was completed
- `inputs`: An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate.
- `links`: The link to the next page with exchange rates.
- `requestedAt`: The datetime the of the request.
- `results`: An array of exchange rate objects that represent the results of the batch operation.

### [MulticurrencyCentralExchangeRatesInformation](docs/api/multicurrency_central_exchange_rates_information.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `centralExchangeRatesEnabled`: Indicates if central exchange rates is enabled for the portal or not.

### [MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging](docs/api/multicurrency_collection_response_currency_code_info_no_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `currencyCode`: The three-letter code representing a specific currency (ex. USD).
- `currencyName`: The full name of the currency (ex. US Dollar).

### [MulticurrencyCollectionResponseExchangeRateForwardPaging](docs/api/multicurrency_collection_response_exchange_rate_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `conversionRate`: The conversion rate between the to and from currency code of this exchange rate.
- `createdAt`: The date the exchange rate was created.
- `effectiveAt`: The date the exchange rate is in effect.
- `fromCurrencyCode`: This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.
- `id`: A unique identifier for the exchange rate

### [MulticurrencyCollectionResponseExchangeRateNoPaging](docs/api/multicurrency_collection_response_exchange_rate_no_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `conversionRate`: The conversion rate between the to and from currency code of this exchange rate.
- `createdAt`: The date the exchange rate was created.
- `effectiveAt`: The date the exchange rate is in effect.
- `fromCurrencyCode`: This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.
- `id`: A unique identifier for the exchange rate

### [MulticurrencyCompanyCurrency](docs/api/multicurrency_company_currency.html)

Results: successful operation.

SDK operations: `load`, `update`.

Key fields to recognise:

- `createdAt`: The date the company currency was created.
- `currencyCode`: The three-letter code representing a specific currency (ex.
- `id`: The currency code for the company currency

### [MulticurrencyExchangeRate](docs/api/multicurrency_exchange_rate.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `conversionRate`: The conversion rate between the to and from currency code of this exchange rate.
- `createdAt`: The date the exchange rate was created.
- `currencyCode`: The currency code being added to the HubSpot portal for use with central exchange rates.
- `effectiveAt`: The date the exchange rate is in effect.
- `fromCurrencyCode`: This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.

### [TaxRate](docs/api/tax_rate.html)

Results: successful operation.

SDK operations: `list`, `load`.

Key fields to recognise:

- `active`: Indicates whether the tax rate group is currently active.
- `createdAt`: The date and time when the tax rate was created.
- `id`: The unique identifier for the tax rate.
- `label`: The display label for the tax rate.
- `name`: The name of the tax rate.

### [TeamsBatchResponseTeamMember](docs/api/teams_batch_response_team_member.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch operation was completed, in ISO 8601 format.
- `errors`: An array of StandardError objects detailing any errors that occurred during the batch operation.
- `inputs`: An array of team member assignments, where each item specifies the details of a team member to be assigned.
- `links`: A map of link names to associated URIs providing additional information about the batch operation.
- `numErrors`: The number of errors encountered during the batch operation.

### [TeamsCollectionResponseTeamMemberResponseForwardPaging](docs/api/teams_collection_response_team_member_response_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `type`: The type of membership the user has in the team. Valid values are &#39;DEFAULT&#39; and &#39;EXTRA&#39;.
- `userId`: The unique identifier for the user, represented as a string.

### [TeamsCollectionResponseTeamResponseForwardPaging](docs/api/teams_collection_response_team_response_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `id`: The unique identifier for the team, represented as a string.
- `name`: The name of the team, represented as a string.
- `parentTeamId`: The unique identifier of the parent team, if applicable, represented as a string.

### [TeamsTeam](docs/api/teams_team.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `id`: The unique identifier for the team, represented as a string.
- `members`: An array of team members to be assigned to the new team.
- `name`: The name of the team, represented as a string.
- `parentTeamId`: The unique identifier of the parent team, if applicable, represented as a string.

### [TeamsTeamMember](docs/api/teams_team_member.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `type`: The type of membership the user has in the team. Valid values are &#39;DEFAULT&#39; and &#39;EXTRA&#39;.
- `userId`: The unique identifier for the user, represented as a string.

### [User](docs/api/user.html)

Results: No content.

SDK operations: `remove`.

### [UserProvisioningCollectionResponsePublicPermissionSetNo](docs/api/user_provisioning_collection_response_public_permission_set_no.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `id`: The unique identifier for the permission set. It is a string.
- `name`: The name of the permission set. It is a string.
- `requiresBillingWrite`: A boolean indicating whether the permission set requires billing write access.

### [UserProvisioningCollectionResponsePublicSeatNoPaging](docs/api/user_provisioning_collection_response_public_seat_no_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `description`: A string providing additional details about the seat.
- `name`: The name of the seat. This is a required string property.
- `remainingSeats`: An integer indicating the number of seats that are still available.

### [UserProvisioningCollectionResponsePublicTeamNoPaging](docs/api/user_provisioning_collection_response_public_team_no_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `id`: The unique identifier for the team, represented as a string.
- `name`: The name of the team, represented as a string.
- `secondaryUserIds`: An array of strings representing the IDs of users who are secondary members of the team.
- `userIds`: An array of strings representing the IDs of users who are primary members of the team.

### [UserProvisioningCollectionResponsePublicUserForwardPaging](docs/api/user_provisioning_collection_response_public_user_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `email`: The email address of the user. This is a required field and must be unique.
- `firstName`: The first name of the user, represented as a string.
- `id`: The unique identifier for the user, represented as a string.
- `lastName`: The last name of the user, represented as a string.
- `primaryTeamId`: The ID of the primary team to which the user belongs, represented as a string.

### [UserProvisioningPublicUser](docs/api/user_provisioning_public_user.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `email`: The email address of the user. This is a required field and must be unique.
- `firstName`: The first name of the user, represented as a string.
- `id`: The unique identifier for the user, represented as a string.
- `lastName`: The last name of the user, represented as a string.
- `primaryTeamId`: The ID of the primary team to which the user belongs, represented as a string.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /settings/teams/2026-09/{teamId}/members/{userId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /settings/teams/2026-09/{teamId}` | Required |
| [ExchangeRate](docs/api/exchange_rate.html) | `create` | `POST /settings/currencies/2026-09/exchange-rates/update-visibility` | Required |
| [MulticurrencyBatchResponseExchangeRate](docs/api/multicurrency_batch_response_exchange_rate.html) | `create` | `POST /settings/currencies/2026-09/exchange-rates/batch/create` | Required |
| [MulticurrencyBatchResponseExchangeRate](docs/api/multicurrency_batch_response_exchange_rate.html) | `create` | `POST /settings/currencies/2026-09/exchange-rates/batch/read` | Required |
| [MulticurrencyBatchResponseExchangeRate](docs/api/multicurrency_batch_response_exchange_rate.html) | `create` | `POST /settings/currencies/2026-09/exchange-rates/batch/update` | Required |
| [MulticurrencyCentralExchangeRatesInformation](docs/api/multicurrency_central_exchange_rates_information.html) | `load` | `GET /settings/currencies/2026-09/central-fx-rates/information` | Required |
| [MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging](docs/api/multicurrency_collection_response_currency_code_info_no_paging.html) | `list` | `GET /settings/currencies/2026-09/central-fx-rates/unsupported-currencies` | Required |
| [MulticurrencyCollectionResponseCurrencyCodeInfoNoPaging](docs/api/multicurrency_collection_response_currency_code_info_no_paging.html) | `list` | `GET /settings/currencies/2026-09/codes` | Required |
| [MulticurrencyCollectionResponseExchangeRateForwardPaging](docs/api/multicurrency_collection_response_exchange_rate_forward_paging.html) | `list` | `GET /settings/currencies/2026-09/exchange-rates` | Required |
| [MulticurrencyCollectionResponseExchangeRateNoPaging](docs/api/multicurrency_collection_response_exchange_rate_no_paging.html) | `list` | `GET /settings/currencies/2026-09/exchange-rates/current` | Required |
| [MulticurrencyCompanyCurrency](docs/api/multicurrency_company_currency.html) | `load` | `GET /settings/currencies/2026-09/company-currency` | Required |
| [MulticurrencyCompanyCurrency](docs/api/multicurrency_company_currency.html) | `update` | `PUT /settings/currencies/2026-09/company-currency` | Required |
| [MulticurrencyExchangeRate](docs/api/multicurrency_exchange_rate.html) | `create` | `POST /settings/currencies/2026-09/central-fx-rates/add-currency` | Required |
| [MulticurrencyExchangeRate](docs/api/multicurrency_exchange_rate.html) | `create` | `POST /settings/currencies/2026-09/exchange-rates` | Required |
| [MulticurrencyExchangeRate](docs/api/multicurrency_exchange_rate.html) | `load` | `GET /settings/currencies/2026-09/exchange-rates/{exchangeRateId}` | Required |
| [MulticurrencyExchangeRate](docs/api/multicurrency_exchange_rate.html) | `update` | `PATCH /settings/currencies/2026-09/exchange-rates/{exchangeRateId}` | Required |
| [TaxRate](docs/api/tax_rate.html) | `list` | `GET /tax-rates/2026-09/tax-rates` | Required |
| [TaxRate](docs/api/tax_rate.html) | `load` | `GET /tax-rates/2026-09/tax-rates/{taxRateGroupId}` | Required |
| [TeamsBatchResponseTeamMember](docs/api/teams_batch_response_team_member.html) | `create` | `POST /settings/teams/2026-09/{teamId}/members/batch` | Required |
| [TeamsCollectionResponseTeamMemberResponseForwardPaging](docs/api/teams_collection_response_team_member_response_forward_paging.html) | `list` | `GET /settings/teams/2026-09/{teamId}/members` | Required |
| [TeamsCollectionResponseTeamResponseForwardPaging](docs/api/teams_collection_response_team_response_forward_paging.html) | `list` | `GET /settings/teams/2026-09` | Required |
| [TeamsTeam](docs/api/teams_team.html) | `create` | `POST /settings/teams/2026-09` | Required |
| [TeamsTeam](docs/api/teams_team.html) | `load` | `GET /settings/teams/2026-09/{teamId}` | Required |
| [TeamsTeam](docs/api/teams_team.html) | `update` | `PATCH /settings/teams/2026-09/{teamId}` | Required |
| [TeamsTeamMember](docs/api/teams_team_member.html) | `create` | `POST /settings/teams/2026-09/{teamId}/members` | Required |
| [User](docs/api/user.html) | `remove` | `DELETE /settings/users/2026-09/{userId}` | Required |
| [UserProvisioningCollectionResponsePublicPermissionSetNo](docs/api/user_provisioning_collection_response_public_permission_set_no.html) | `list` | `GET /settings/users/2026-09/roles` | Required |
| [UserProvisioningCollectionResponsePublicSeatNoPaging](docs/api/user_provisioning_collection_response_public_seat_no_paging.html) | `list` | `GET /settings/users/2026-09/seats` | Required |
| [UserProvisioningCollectionResponsePublicTeamNoPaging](docs/api/user_provisioning_collection_response_public_team_no_paging.html) | `list` | `GET /settings/users/2026-09/teams` | Required |
| [UserProvisioningCollectionResponsePublicUserForwardPaging](docs/api/user_provisioning_collection_response_public_user_forward_paging.html) | `list` | `GET /settings/users/2026-09` | Required |
| [UserProvisioningPublicUser](docs/api/user_provisioning_public_user.html) | `create` | `POST /settings/users/2026-09` | Required |
| [UserProvisioningPublicUser](docs/api/user_provisioning_public_user.html) | `load` | `GET /settings/users/2026-09/{userId}` | Required |
| [UserProvisioningPublicUser](docs/api/user_provisioning_public_user.html) | `update` | `PUT /settings/users/2026-09/{userId}` | Required |

## Connect to the API

- API server: `https://api.hubapi.com`

The default credential is sent in the `hapikey` query.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `hubspot-settings_list`: List records for an entity. Supported entities: `multicurrency_collection_response_currency_code_info_no_paging`, `multicurrency_collection_response_exchange_rate_forward_paging`, `multicurrency_collection_response_exchange_rate_no_paging`, `tax_rate`, `teams_collection_response_team_member_response_forward_paging`, `teams_collection_response_team_response_forward_paging`, `user_provisioning_collection_response_public_permission_set_no`, `user_provisioning_collection_response_public_seat_no_paging`, `user_provisioning_collection_response_public_team_no_paging`, `user_provisioning_collection_response_public_user_forward_paging`.
- `hubspot-settings_load`: Load one record for an entity. Supported entities: `multicurrency_central_exchange_rates_information`, `multicurrency_company_currency`, `multicurrency_exchange_rate`, `tax_rate`, `teams_team`, `user_provisioning_public_user`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

