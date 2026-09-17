
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


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
      
        basic: {
        },
  
        exchange_rate: {
        },
  
        multicurrency_batch_response_exchange_rate: {
        },
  
        multicurrency_central_exchange_rates_information: {
        },
  
        multicurrency_collection_response_currency_code_info_no_paging: {
        },
  
        multicurrency_collection_response_exchange_rate_forward_paging: {
        },
  
        multicurrency_collection_response_exchange_rate_no_paging: {
        },
  
        multicurrency_company_currency: {
        },
  
        multicurrency_exchange_rate: {
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
  
        user: {
        },
  
        user_provisioning_collection_response_public_permission_set_no: {
        },
  
        user_provisioning_collection_response_public_seat_no_paging: {
        },
  
        user_provisioning_collection_response_public_team_no_paging: {
        },
  
        user_provisioning_collection_response_public_user_forward_paging: {
        },
  
        user_provisioning_public_user: {
        },
  
    }
  }


  entity = {
    "basic": {
      "fields": [],
      "name": "basic",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "team_id",
                    "orig": "team_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "param",
                    "name": "user_id",
                    "orig": "user_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/settings/teams/2026-09/{teamId}/members/{userId}",
              "rename": {
                "param": {
                  "teamId": "team_id",
                  "userId": "user_id"
                }
              },
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
              "select": {
                "exist": [
                  "team_id",
                  "type",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members",
                "{user_id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "team_id",
                    "orig": "team_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/settings/teams/2026-09/{teamId}",
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
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
              "select": {
                "exist": [
                  "team_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2026_09"
          ],
          [
            "2026_09",
            "member"
          ]
        ]
      }
    },
    "exchange_rate": {
      "fields": [],
      "name": "exchange_rate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
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
              "select": {
                "$action": "update_visibility"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "update-visibility"
              ]
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
          "format": "date-time",
          "name": "completedAt",
          "req": true,
          "short": "The datetime the response was completed",
          "type": "`$STRING`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate.",
          "type": "`$ARRAY`"
        },
        {
          "name": "links",
          "short": "The link to the next page with exchange rates.",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "requestedAt",
          "short": "The datetime the of the request.",
          "type": "`$STRING`"
        },
        {
          "name": "results",
          "req": true,
          "short": "An array of exchange rate objects that represent the results of the batch operation.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "startedAt",
          "req": true,
          "short": "The datetime the of the request.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the response (e.g.",
          "type": "`$STRING`"
        }
      ],
      "name": "multicurrency_batch_response_exchange_rate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "batch",
                "create"
              ]
            },
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "batch",
                "read"
              ]
            },
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "batch",
                "update"
              ]
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
          "req": true,
          "short": "Indicates if central exchange rates is enabled for the portal or not.",
          "type": "`$BOOLEAN`"
        }
      ],
      "name": "multicurrency_central_exchange_rates_information",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "central-fx-rates",
                "information"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multicurrency_collection_response_currency_code_info_no_paging": {
      "fields": [
        {
          "name": "currencyCode",
          "req": true,
          "short": "The three-letter code representing a specific currency (ex.",
          "type": "`$STRING`"
        },
        {
          "name": "currencyName",
          "req": true,
          "short": "The full name of the currency (ex.",
          "type": "`$STRING`"
        }
      ],
      "name": "multicurrency_collection_response_currency_code_info_no_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "central-fx-rates",
                "unsupported-currencies"
              ]
            },
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "codes"
              ]
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
          "req": true,
          "short": "The conversion rate between the to and from currency code of this exchange rate.",
          "type": "`$NUMBER`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date the exchange rate was created.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "effectiveAt",
          "req": true,
          "short": "The date the exchange rate is in effect.",
          "type": "`$STRING`"
        },
        {
          "name": "fromCurrencyCode",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "A unique identifier for the exchange rate",
          "type": "`$STRING`"
        },
        {
          "name": "toCurrencyCode",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date the exchange rate was last updated.",
          "type": "`$STRING`"
        },
        {
          "name": "visibleInUI",
          "req": true,
          "short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
          "type": "`$BOOLEAN`"
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
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "from_currency_code",
                    "orig": "from_currency_code",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "to_currency_code",
                    "orig": "to_currency_code",
                    "type": "`$STRING`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "after",
                  "from_currency_code",
                  "limit",
                  "to_currency_code"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multicurrency_collection_response_exchange_rate_no_paging": {
      "fields": [
        {
          "name": "conversionRate",
          "req": true,
          "short": "The conversion rate between the to and from currency code of this exchange rate.",
          "type": "`$NUMBER`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date the exchange rate was created.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "effectiveAt",
          "req": true,
          "short": "The date the exchange rate is in effect.",
          "type": "`$STRING`"
        },
        {
          "name": "fromCurrencyCode",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "A unique identifier for the exchange rate",
          "type": "`$STRING`"
        },
        {
          "name": "toCurrencyCode",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date the exchange rate was last updated.",
          "type": "`$STRING`"
        },
        {
          "name": "visibleInUI",
          "req": true,
          "short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "multicurrency_collection_response_exchange_rate_no_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "current"
              ]
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
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date the company currency was created.",
          "type": "`$STRING`"
        },
        {
          "name": "currencyCode",
          "req": true,
          "short": "The three-letter code representing a specific currency (ex.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The currency code for the company currency",
          "type": "`$STRING`"
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
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "company-currency"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "company-currency"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multicurrency_exchange_rate": {
      "fields": [
        {
          "name": "conversionRate",
          "req": true,
          "short": "The conversion rate between the to and from currency code of this exchange rate.",
          "type": "`$NUMBER`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date the exchange rate was created.",
          "type": "`$STRING`"
        },
        {
          "name": "currencyCode",
          "req": true,
          "short": "The currency code being added to the HubSpot portal for use with central exchange rates.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "effectiveAt",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The date the exchange rate is in effect.",
          "type": "`$STRING`"
        },
        {
          "name": "fromCurrencyCode",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "A unique identifier for the exchange rate",
          "type": "`$STRING`"
        },
        {
          "name": "toCurrencyCode",
          "req": true,
          "short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date the exchange rate was last updated.",
          "type": "`$STRING`"
        },
        {
          "name": "visibleInUI",
          "req": true,
          "short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "multicurrency_exchange_rate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "central-fx-rates",
                "add-currency"
              ]
            },
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "exchange_rate_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
              "rename": {
                "param": {
                  "exchangeRateId": "id"
                }
              },
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
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "exchange_rate_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
              "rename": {
                "param": {
                  "exchangeRateId": "id"
                }
              },
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
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "currencies",
                "2026-09",
                "exchange-rates",
                "{id}"
              ]
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
          "req": true,
          "short": "Indicates whether the tax rate group is currently active.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date and time when the tax rate was created.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the tax rate.",
          "type": "`$STRING`"
        },
        {
          "name": "label",
          "req": true,
          "short": "The display label for the tax rate.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the tax rate.",
          "type": "`$STRING`"
        },
        {
          "name": "percentageRate",
          "req": true,
          "short": "The percentage rate applied.",
          "type": "`$NUMBER`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date and time when the tax rate was last updated.",
          "type": "`$STRING`"
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
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "active",
                    "orig": "active",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "active",
                  "after",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tax-rates",
                "2026-09",
                "tax-rates"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "tax_rate_group_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/tax-rates/2026-09/tax-rates/{taxRateGroupId}",
              "rename": {
                "param": {
                  "taxRateGroupId": "id"
                }
              },
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
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tax-rates",
                "2026-09",
                "tax-rates",
                "{id}"
              ]
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
          "format": "date-time",
          "name": "completedAt",
          "req": true,
          "short": "The date and time when the batch operation was completed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "errors",
          "short": "An array of StandardError objects detailing any errors that occurred during the batch operation.",
          "type": "`$ARRAY`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "An array of team member assignments, where each item specifies the details of a team member to be assigned.",
          "type": "`$ARRAY`"
        },
        {
          "name": "links",
          "short": "A map of link names to associated URIs providing additional information about the batch operation.",
          "type": "`$OBJECT`"
        },
        {
          "format": "int32",
          "name": "numErrors",
          "short": "The number of errors encountered during the batch operation.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "requestedAt",
          "short": "The date and time when the batch operation was requested, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "results",
          "req": true,
          "short": "An array of TeamMemberResponse objects representing the results of the batch operation.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "startedAt",
          "req": true,
          "short": "The date and time when the batch operation started, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the batch operation.",
          "type": "`$STRING`"
        }
      ],
      "name": "teams_batch_response_team_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "team_id",
                    "orig": "team_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/settings/teams/2026-09/{teamId}/members/batch",
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
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
              "select": {
                "exist": [
                  "team_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members",
                "batch"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2026_09"
          ]
        ]
      }
    },
    "teams_collection_response_team_member_response_forward_paging": {
      "fields": [
        {
          "name": "type",
          "req": true,
          "short": "The type of membership the user has in the team.",
          "type": "`$STRING`"
        },
        {
          "name": "userId",
          "req": true,
          "short": "The unique identifier for the user, represented as a string.",
          "type": "`$STRING`"
        }
      ],
      "name": "teams_collection_response_team_member_response_forward_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "team_id",
                    "orig": "team_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/settings/teams/2026-09/{teamId}/members",
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
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
              "select": {
                "exist": [
                  "after",
                  "limit",
                  "team_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2026_09"
          ]
        ]
      }
    },
    "teams_collection_response_team_response_forward_paging": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the team, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the team, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "parentTeamId",
          "short": "The unique identifier of the parent team, if applicable, represented as a string.",
          "type": "`$STRING`"
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
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "after",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09"
              ]
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
          "req": true,
          "short": "The unique identifier for the team, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "members",
          "req": true,
          "short": "An array of team members to be assigned to the new team.",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the team, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "parentTeamId",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "The unique identifier of the parent team, if applicable, represented as a string.",
          "type": "`$STRING`"
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
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "team_id",
                    "orig": "team_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/settings/teams/2026-09/{teamId}",
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
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
              "select": {
                "exist": [
                  "team_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "team_id",
                    "orig": "team_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/settings/teams/2026-09/{teamId}",
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
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
              "select": {
                "exist": [
                  "team_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2026_09"
          ]
        ]
      }
    },
    "teams_team_member": {
      "fields": [
        {
          "name": "type",
          "req": true,
          "short": "The type of team member assignment.",
          "type": "`$STRING`"
        },
        {
          "name": "userId",
          "req": true,
          "short": "The unique identifier for the user being assigned to the team.",
          "type": "`$STRING`"
        }
      ],
      "name": "teams_team_member",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "team_id",
                    "orig": "team_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/settings/teams/2026-09/{teamId}/members",
              "rename": {
                "param": {
                  "teamId": "team_id"
                }
              },
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
              "select": {
                "exist": [
                  "team_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "teams",
                "2026-09",
                "{team_id}",
                "members"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2026_09"
          ]
        ]
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
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "user_id",
                    "orig": "user_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "id_property",
                    "orig": "id_property",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/settings/users/2026-09/{userId}",
              "rename": {
                "param": {
                  "userId": "user_id"
                }
              },
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
              "select": {
                "exist": [
                  "id_property",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09",
                "{user_id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2026_09"
          ]
        ]
      }
    },
    "user_provisioning_collection_response_public_permission_set_no": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the permission set.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the permission set.",
          "type": "`$STRING`"
        },
        {
          "name": "requiresBillingWrite",
          "req": true,
          "short": "A boolean indicating whether the permission set requires billing write access.",
          "type": "`$BOOLEAN`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_provisioning_collection_response_public_permission_set_no",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09",
                "roles"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_provisioning_collection_response_public_seat_no_paging": {
      "fields": [
        {
          "name": "description",
          "short": "A string providing additional details about the seat.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the seat.",
          "type": "`$STRING`"
        },
        {
          "format": "int32",
          "name": "remainingSeats",
          "short": "An integer indicating the number of seats that are still available.",
          "type": "`$INTEGER`"
        }
      ],
      "name": "user_provisioning_collection_response_public_seat_no_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09",
                "seats"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_provisioning_collection_response_public_team_no_paging": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the team, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the team, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "secondaryUserIds",
          "req": true,
          "short": "An array of strings representing the IDs of users who are secondary members of the team.",
          "type": "`$ARRAY`"
        },
        {
          "name": "userIds",
          "req": true,
          "short": "An array of strings representing the IDs of users who are primary members of the team.",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_provisioning_collection_response_public_team_no_paging",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09",
                "teams"
              ]
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
          "req": true,
          "short": "The email address of the user.",
          "type": "`$STRING`"
        },
        {
          "name": "firstName",
          "short": "The first name of the user, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the user, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "lastName",
          "short": "The last name of the user, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "primaryTeamId",
          "short": "The ID of the primary team to which the user belongs, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "roleId",
          "short": "A string representing a single role ID assigned to the user.",
          "type": "`$STRING`"
        },
        {
          "name": "roleIds",
          "req": true,
          "short": "An array of strings representing the IDs of the roles assigned to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "seatNames",
          "short": "An array of strings representing the names of seats assigned to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "secondaryTeamIds",
          "short": "An array of strings representing the IDs of secondary teams to which the user is associated.",
          "type": "`$ARRAY`"
        },
        {
          "name": "sendWelcomeEmail",
          "short": "A boolean indicating whether a welcome email should be sent to the user.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "superAdmin",
          "req": true,
          "short": "A boolean indicating whether the user has super admin privileges.",
          "type": "`$BOOLEAN`"
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
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "after",
                  "limit"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09"
              ]
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
          "req": true,
          "short": "The email address of the user.",
          "type": "`$STRING`"
        },
        {
          "name": "firstName",
          "short": "The first name of the user, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The unique identifier for the user, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "lastName",
          "short": "The last name of the user, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "primaryTeamId",
          "short": "The ID of the primary team to which the user belongs, represented as a string.",
          "type": "`$STRING`"
        },
        {
          "name": "roleId",
          "short": "A string representing a single role ID assigned to the user.",
          "type": "`$STRING`"
        },
        {
          "name": "roleIds",
          "req": true,
          "short": "An array of strings representing the IDs of the roles assigned to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "seatNames",
          "short": "An array of strings representing the names of seats assigned to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "secondaryTeamIds",
          "short": "An array of strings representing the IDs of secondary teams to which the user is associated.",
          "type": "`$ARRAY`"
        },
        {
          "name": "sendWelcomeEmail",
          "op": {
            "create": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "A boolean indicating whether a welcome email should be sent to the user.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "superAdmin",
          "req": true,
          "short": "A boolean indicating whether the user has super admin privileges.",
          "type": "`$BOOLEAN`"
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
              "args": {},
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
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "user_id",
                    "orig": "user_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "id_property",
                    "orig": "id_property",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/settings/users/2026-09/{userId}",
              "rename": {
                "param": {
                  "userId": "user_id"
                }
              },
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
              "select": {
                "exist": [
                  "id_property",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09",
                "{user_id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "user_id",
                    "orig": "user_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "id_property",
                    "orig": "id_property",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/settings/users/2026-09/{userId}",
              "rename": {
                "param": {
                  "userId": "user_id"
                }
              },
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
              "select": {
                "exist": [
                  "id_property",
                  "user_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "settings",
                "users",
                "2026-09",
                "{user_id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "2026_09"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

