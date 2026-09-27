
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'HubspotSettings',
        slug: "hubspot-settings",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.hubapi.com",

    auth: {
      prefix: '',
      in: 'query',
      name: 'hapikey',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        add_currency: {
        },
  
        basic: {
        },
  
        code: {
        },
  
        current: {
        },
  
        exchange_rate: {
        },
  
        multicurrency_batch_response_exchange_rate: {
        },
  
        multicurrency_central_exchange_rates_information: {
        },
  
        multicurrency_collection_response_exchange_rate_forward_paging: {
        },
  
        multicurrency_company_currency: {
        },
  
        tax_rate: {
        },
  
        teams_batch_response_team_member: {
        },
  
        teams_collection_response_team_member_response_forward_paging: {
        },
  
        teams_collection_response_team_response_forward_paging: {
        },
  
        teams_team: {
        },
  
        teams_team_member: {
        },
  
        unsupported_currency: {
        },
  
        user: {
        },
  
        user_provisioning_collection_response_public_user_forward_paging: {
        },
  
        user_provisioning_public_permission_set: {
        },
  
        user_provisioning_public_seat: {
        },
  
        user_provisioning_public_team: {
        },
  
        user_provisioning_public_user: {
        },
  
    }
  }


  entity = {
    "add_currency": {
      "fields": [
        {
          "name": "conversionRate",
          "title": "Conversion Rate",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The conversion rate between the to and from currency code of this exchange rate."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was created.",
          "format": "date-time"
        },
        {
          "name": "currencyCode",
          "title": "Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "The currency code being added to the HubSpot portal for use with central exchange rates."
        },
        {
          "name": "effectiveAt",
          "title": "Effective At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate is in effect.",
          "format": "date-time"
        },
        {
          "name": "fromCurrencyCode",
          "title": "From Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "A unique identifier for the exchange rate"
        },
        {
          "name": "toCurrencyCode",
          "title": "To Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to."
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was last updated.",
          "format": "date-time"
        },
        {
          "name": "visibleInUI",
          "title": "Visible In Ui",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "This indicates if the exchange rate is shown in the MultiCurrency settings page."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "add_currency",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/currencies/2026-09/central-fx-rates/add-currency",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "central-fx-rates"
                },
                {
                  "lit": "add-currency"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "central-fx-rates",
                "add-currency"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "basic": {
      "fields": [],
      "name": "basic",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/settings/teams/2026-09/{teamId}/members/{userId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "team_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "user_id"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members",
                "{user_id}"
              ],
              "rename": {
                "param": {
                  "teamId": "team_id",
                  "userId": "user_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "team_id",
                    "orig": "team_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  },
                  {
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ],
                "query": [
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "team_id",
                  "type",
                  "user_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/settings/teams/2026-09/{teamId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "team_id"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}"
              ],
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "team_id",
                    "orig": "team_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "team_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "code": {
      "fields": [
        {
          "name": "currencyCode",
          "title": "Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "The three-letter code representing a specific currency (ex."
        },
        {
          "name": "currencyName",
          "title": "Currency Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The full name of the currency (ex."
        }
      ],
      "name": "code",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/codes",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "codes"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "codes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "current": {
      "fields": [
        {
          "name": "conversionRate",
          "title": "Conversion Rate",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The conversion rate between the to and from currency code of this exchange rate."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was created.",
          "format": "date-time"
        },
        {
          "name": "effectiveAt",
          "title": "Effective At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate is in effect.",
          "format": "date-time"
        },
        {
          "name": "fromCurrencyCode",
          "title": "From Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "A unique identifier for the exchange rate"
        },
        {
          "name": "toCurrencyCode",
          "title": "To Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to."
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was last updated.",
          "format": "date-time"
        },
        {
          "name": "visibleInUI",
          "title": "Visible In Ui",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "This indicates if the exchange rate is shown in the MultiCurrency settings page."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "current",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/exchange-rates/current",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                },
                {
                  "lit": "current"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "current"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "exchange_rate": {
      "fields": [
        {
          "name": "conversionRate",
          "title": "Conversion Rate",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The conversion rate between the to and from currency code of this exchange rate."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was created.",
          "format": "date-time"
        },
        {
          "name": "effectiveAt",
          "title": "Effective At",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "The date the exchange rate is in effect.",
          "format": "date-time"
        },
        {
          "name": "fromCurrencyCode",
          "title": "From Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "A unique identifier for the exchange rate"
        },
        {
          "name": "toCurrencyCode",
          "title": "To Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to."
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was last updated.",
          "format": "date-time"
        },
        {
          "name": "visibleInUI",
          "title": "Visible In Ui",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "This indicates if the exchange rate is shown in the MultiCurrency settings page."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "exchange_rate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/currencies/2026-09/exchange-rates",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/currencies/2026-09/exchange-rates/update-visibility",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                },
                {
                  "lit": "update-visibility"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "update-visibility"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "update_visibility"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "{id}"
              ],
              "rename": {
                "param": {
                  "exchangeRateId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "exchange_rate_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "{id}"
              ],
              "rename": {
                "param": {
                  "exchangeRateId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "exchange_rate_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multicurrency_batch_response_exchange_rate": {
      "fields": [
        {
          "name": "completedAt",
          "title": "Completed At",
          "type": "`$STRING`",
          "req": true,
          "short": "The datetime the response was completed",
          "format": "date-time"
        },
        {
          "name": "inputs",
          "title": "Inputs",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate."
        },
        {
          "name": "links",
          "title": "Links",
          "type": "`$OBJECT`",
          "short": "The link to the next page with exchange rates."
        },
        {
          "name": "requestedAt",
          "title": "Requested At",
          "type": "`$STRING`",
          "short": "The datetime the of the request.",
          "format": "date-time"
        },
        {
          "name": "results",
          "title": "Results",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of exchange rate objects that represent the results of the batch operation."
        },
        {
          "name": "startedAt",
          "title": "Started At",
          "type": "`$STRING`",
          "req": true,
          "short": "The datetime the of the request.",
          "format": "date-time"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "The current status of the response (e.g."
        }
      ],
      "name": "multicurrency_batch_response_exchange_rate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/currencies/2026-09/exchange-rates/batch/create",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "batch",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/currencies/2026-09/exchange-rates/batch/read",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "read"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "batch",
                "read"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/currencies/2026-09/exchange-rates/batch/update",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "update"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "batch",
                "update"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multicurrency_central_exchange_rates_information": {
      "fields": [
        {
          "name": "centralExchangeRatesEnabled",
          "title": "Central Exchange Rates Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates if central exchange rates is enabled for the portal or not."
        }
      ],
      "name": "multicurrency_central_exchange_rates_information",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/central-fx-rates/information",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "central-fx-rates"
                },
                {
                  "lit": "information"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "central-fx-rates",
                "information"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multicurrency_collection_response_exchange_rate_forward_paging": {
      "fields": [
        {
          "name": "conversionRate",
          "title": "Conversion Rate",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The conversion rate between the to and from currency code of this exchange rate."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was created.",
          "format": "date-time"
        },
        {
          "name": "effectiveAt",
          "title": "Effective At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate is in effect.",
          "format": "date-time"
        },
        {
          "name": "fromCurrencyCode",
          "title": "From Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "A unique identifier for the exchange rate"
        },
        {
          "name": "toCurrencyCode",
          "title": "To Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to."
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the exchange rate was last updated.",
          "format": "date-time"
        },
        {
          "name": "visibleInUI",
          "title": "Visible In Ui",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "This indicates if the exchange rate is shown in the MultiCurrency settings page."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "multicurrency_collection_response_exchange_rate_forward_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/exchange-rates",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "exchange-rates"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "from_currency_code",
                    "orig": "from_currency_code",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "to_currency_code",
                    "orig": "to_currency_code",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "from_currency_code",
                  "limit",
                  "to_currency_code"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multicurrency_company_currency": {
      "fields": [
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date the company currency was created.",
          "format": "date-time"
        },
        {
          "name": "currencyCode",
          "title": "Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "The three-letter code representing a specific currency (ex."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The currency code for the company currency"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "multicurrency_company_currency",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/company-currency",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "company-currency"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "company-currency"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/settings/currencies/2026-09/company-currency",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "company-currency"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "company-currency"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "tax_rate": {
      "fields": [
        {
          "name": "active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Indicates whether the tax rate group is currently active."
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time when the tax rate was created.",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the tax rate."
        },
        {
          "name": "label",
          "title": "Label",
          "type": "`$STRING`",
          "req": true,
          "short": "The display label for the tax rate."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the tax rate."
        },
        {
          "name": "percentageRate",
          "title": "Percentage Rate",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The percentage rate applied."
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time when the tax rate was last updated.",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "tax_rate",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/tax-rates/2026-09/tax-rates",
              "segments": [
                {
                  "lit": "tax-rates"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "tax-rates"
                }
              ],
              "parts": [
                "tax-rates",
                "2026-09",
                "tax-rates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "active",
                    "orig": "active",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "active",
                  "after",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/tax-rates/2026-09/tax-rates/{taxRateGroupId}",
              "segments": [
                {
                  "lit": "tax-rates"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "tax-rates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "tax-rates",
                "2026-09",
                "tax-rates",
                "{id}"
              ],
              "rename": {
                "param": {
                  "taxRateGroupId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "tax_rate_group_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "teams_batch_response_team_member": {
      "fields": [
        {
          "name": "completedAt",
          "title": "Completed At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time when the batch operation was completed, in ISO 8601 format.",
          "format": "date-time"
        },
        {
          "name": "errors",
          "title": "Errors",
          "type": "`$ARRAY`",
          "short": "An array of StandardError objects detailing any errors that occurred during the batch operation."
        },
        {
          "name": "inputs",
          "title": "Inputs",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of team member assignments, where each item specifies the details of a team member to be assigned."
        },
        {
          "name": "links",
          "title": "Links",
          "type": "`$OBJECT`",
          "short": "A map of link names to associated URIs providing additional information about the batch operation."
        },
        {
          "name": "numErrors",
          "title": "Num Errors",
          "type": "`$INTEGER`",
          "short": "The number of errors encountered during the batch operation.",
          "format": "int32"
        },
        {
          "name": "requestedAt",
          "title": "Requested At",
          "type": "`$STRING`",
          "short": "The date and time when the batch operation was requested, in ISO 8601 format.",
          "format": "date-time"
        },
        {
          "name": "results",
          "title": "Results",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of TeamMemberResponse objects representing the results of the batch operation."
        },
        {
          "name": "startedAt",
          "title": "Started At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time when the batch operation started, in ISO 8601 format.",
          "format": "date-time"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "The current status of the batch operation."
        }
      ],
      "name": "teams_batch_response_team_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/teams/2026-09/{teamId}/members/batch",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "team_id"
                },
                {
                  "lit": "members"
                },
                {
                  "lit": "batch"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members",
                "batch"
              ],
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "team_id",
                    "orig": "team_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "team_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "teams_collection_response_team_member_response_forward_paging": {
      "fields": [
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of membership the user has in the team."
        },
        {
          "name": "userId",
          "title": "User Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the user, represented as a string."
        }
      ],
      "name": "teams_collection_response_team_member_response_forward_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/teams/2026-09/{teamId}/members",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "team_id"
                },
                {
                  "lit": "members"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members"
              ],
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "team_id",
                    "orig": "team_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "limit",
                  "team_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "teams_collection_response_team_response_forward_paging": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the team, represented as a string."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the team, represented as a string."
        },
        {
          "name": "parentTeamId",
          "title": "Parent Team Id",
          "type": "`$STRING`",
          "short": "The unique identifier of the parent team, if applicable, represented as a string."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "teams_collection_response_team_response_forward_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/teams/2026-09",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "teams_team": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the team, represented as a string."
        },
        {
          "name": "members",
          "title": "Members",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of team members to be assigned to the new team."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the team, represented as a string."
        },
        {
          "name": "parentTeamId",
          "title": "Parent Team Id",
          "type": "`$STRING`",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The unique identifier of the parent team, if applicable, represented as a string."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "teams_team",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/teams/2026-09",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/teams/2026-09/{teamId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "team_id"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}"
              ],
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "team_id",
                    "orig": "team_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "team_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/settings/teams/2026-09/{teamId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "team_id"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}"
              ],
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "team_id",
                    "orig": "team_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "team_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "teams_team_member": {
      "fields": [
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The type of team member assignment."
        },
        {
          "name": "userId",
          "title": "User Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the user being assigned to the team."
        }
      ],
      "name": "teams_team_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/teams/2026-09/{teamId}/members",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "teams"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "team_id"
                },
                {
                  "lit": "members"
                }
              ],
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members"
              ],
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "team_id",
                    "orig": "team_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "team_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "unsupported_currency": {
      "fields": [
        {
          "name": "currencyCode",
          "title": "Currency Code",
          "type": "`$STRING`",
          "req": true,
          "short": "The three-letter code representing a specific currency (ex."
        },
        {
          "name": "currencyName",
          "title": "Currency Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The full name of the currency (ex."
        }
      ],
      "name": "unsupported_currency",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/central-fx-rates/unsupported-currencies",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "currencies"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "central-fx-rates"
                },
                {
                  "lit": "unsupported-currencies"
                }
              ],
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "central-fx-rates",
                "unsupported-currencies"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user": {
      "fields": [],
      "name": "user",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/settings/users/2026-09/{userId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "user_id"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09",
                "{user_id}"
              ],
              "rename": {
                "param": {
                  "userId": "user_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ],
                "query": [
                  {
                    "name": "id_property",
                    "orig": "id_property",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "id_property",
                  "user_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_provisioning_collection_response_public_user_forward_paging": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "short": "The email address of the user."
        },
        {
          "name": "firstName",
          "title": "First Name",
          "type": "`$STRING`",
          "short": "The first name of the user, represented as a string."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the user, represented as a string."
        },
        {
          "name": "lastName",
          "title": "Last Name",
          "type": "`$STRING`",
          "short": "The last name of the user, represented as a string."
        },
        {
          "name": "primaryTeamId",
          "title": "Primary Team Id",
          "type": "`$STRING`",
          "short": "The ID of the primary team to which the user belongs, represented as a string."
        },
        {
          "name": "roleId",
          "title": "Role Id",
          "type": "`$STRING`",
          "short": "A string representing a single role ID assigned to the user."
        },
        {
          "name": "roleIds",
          "title": "Role Ids",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of strings representing the IDs of the roles assigned to the user."
        },
        {
          "name": "seatNames",
          "title": "Seat Names",
          "type": "`$ARRAY`",
          "short": "An array of strings representing the names of seats assigned to the user."
        },
        {
          "name": "secondaryTeamIds",
          "title": "Secondary Team Ids",
          "type": "`$ARRAY`",
          "short": "An array of strings representing the IDs of secondary teams to which the user is associated."
        },
        {
          "name": "sendWelcomeEmail",
          "title": "Send Welcome Email",
          "type": "`$BOOLEAN`",
          "short": "A boolean indicating whether a welcome email should be sent to the user."
        },
        {
          "name": "superAdmin",
          "title": "Super Admin",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "A boolean indicating whether the user has super admin privileges."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_provisioning_collection_response_public_user_forward_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/users/2026-09",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_provisioning_public_permission_set": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the permission set."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the permission set."
        },
        {
          "name": "requiresBillingWrite",
          "title": "Requires Billing Write",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "A boolean indicating whether the permission set requires billing write access."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_provisioning_public_permission_set",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/users/2026-09/roles",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "roles"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09",
                "roles"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_provisioning_public_seat": {
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "A string providing additional details about the seat."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the seat."
        },
        {
          "name": "remainingSeats",
          "title": "Remaining Seats",
          "type": "`$INTEGER`",
          "short": "An integer indicating the number of seats that are still available.",
          "format": "int32"
        }
      ],
      "name": "user_provisioning_public_seat",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/users/2026-09/seats",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "seats"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09",
                "seats"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_provisioning_public_team": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the team, represented as a string."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the team, represented as a string."
        },
        {
          "name": "secondaryUserIds",
          "title": "Secondary User Ids",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of strings representing the IDs of users who are secondary members of the team."
        },
        {
          "name": "userIds",
          "title": "User Ids",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of strings representing the IDs of users who are primary members of the team."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_provisioning_public_team",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/users/2026-09/teams",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "lit": "teams"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09",
                "teams"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_provisioning_public_user": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "short": "The email address of the user."
        },
        {
          "name": "firstName",
          "title": "First Name",
          "type": "`$STRING`",
          "short": "The first name of the user, represented as a string."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The unique identifier for the user, represented as a string."
        },
        {
          "name": "lastName",
          "title": "Last Name",
          "type": "`$STRING`",
          "short": "The last name of the user, represented as a string."
        },
        {
          "name": "primaryTeamId",
          "title": "Primary Team Id",
          "type": "`$STRING`",
          "short": "The ID of the primary team to which the user belongs, represented as a string."
        },
        {
          "name": "roleId",
          "title": "Role Id",
          "type": "`$STRING`",
          "short": "A string representing a single role ID assigned to the user."
        },
        {
          "name": "roleIds",
          "title": "Role Ids",
          "type": "`$ARRAY`",
          "req": true,
          "short": "An array of strings representing the IDs of the roles assigned to the user."
        },
        {
          "name": "seatNames",
          "title": "Seat Names",
          "type": "`$ARRAY`",
          "short": "An array of strings representing the names of seats assigned to the user."
        },
        {
          "name": "secondaryTeamIds",
          "title": "Secondary Team Ids",
          "type": "`$ARRAY`",
          "short": "An array of strings representing the IDs of secondary teams to which the user is associated."
        },
        {
          "name": "sendWelcomeEmail",
          "title": "Send Welcome Email",
          "type": "`$BOOLEAN`",
          "op": {
            "create": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "A boolean indicating whether a welcome email should be sent to the user."
        },
        {
          "name": "superAdmin",
          "title": "Super Admin",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "A boolean indicating whether the user has super admin privileges."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_provisioning_public_user",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/settings/users/2026-09",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/settings/users/2026-09/{userId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "user_id"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09",
                "{user_id}"
              ],
              "rename": {
                "param": {
                  "userId": "user_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ],
                "query": [
                  {
                    "name": "id_property",
                    "orig": "id_property",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "id_property",
                  "user_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/settings/users/2026-09/{userId}",
              "segments": [
                {
                  "lit": "settings"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "2026-09"
                },
                {
                  "var": "user_id"
                }
              ],
              "parts": [
                "settings",
                "users",
                "2026-09",
                "{user_id}"
              ],
              "rename": {
                "param": {
                  "userId": "user_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": null
                  }
                ],
                "query": [
                  {
                    "name": "id_property",
                    "orig": "id_property",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": null
                  }
                ]
              },
              "select": {
                "exist": [
                  "id_property",
                  "user_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

