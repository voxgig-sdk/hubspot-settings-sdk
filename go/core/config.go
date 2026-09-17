package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotSettings",
			"slug": "hubspot-settings",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "hapikey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"basic": map[string]any{},
				"exchange_rate": map[string]any{},
				"multicurrency_batch_response_exchange_rate": map[string]any{},
				"multicurrency_central_exchange_rates_information": map[string]any{},
				"multicurrency_collection_response_currency_code_info_no_paging": map[string]any{},
				"multicurrency_collection_response_exchange_rate_forward_paging": map[string]any{},
				"multicurrency_collection_response_exchange_rate_no_paging": map[string]any{},
				"multicurrency_company_currency": map[string]any{},
				"multicurrency_exchange_rate": map[string]any{},
				"tax_rate": map[string]any{},
				"teams_batch_response_team_member": map[string]any{},
				"teams_collection_response_team_member_response_forward_paging": map[string]any{},
				"teams_collection_response_team_response_forward_paging": map[string]any{},
				"teams_team": map[string]any{},
				"teams_team_member": map[string]any{},
				"user": map[string]any{},
				"user_provisioning_collection_response_public_permission_set_no": map[string]any{},
				"user_provisioning_collection_response_public_seat_no_paging": map[string]any{},
				"user_provisioning_collection_response_public_team_no_paging": map[string]any{},
				"user_provisioning_collection_response_public_user_forward_paging": map[string]any{},
				"user_provisioning_public_user": map[string]any{},
			},
		},
		"entity": map[string]any{
			"basic": map[string]any{
				"fields": []any{},
				"name": "basic",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "2026_09_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/settings/teams/2026-09/{teamId}/members/{userId}",
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "2026_09_id",
										"userId": "user_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "2026_09_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "user_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"2026_09_id",
										"type",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{2026_09_id}",
									"members",
									"{user_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/settings/teams/2026-09/{teamId}",
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "team_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
						[]any{
							"2026_09",
							"member",
						},
					},
				},
			},
			"exchange_rate": map[string]any{
				"fields": []any{},
				"name": "exchange_rate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/currencies/2026-09/exchange-rates/update-visibility",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
									map[string]any{
										"lit": "update-visibility",
									},
								},
								"select": map[string]any{
									"$action": "update_visibility",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"update-visibility",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"multicurrency_batch_response_exchange_rate": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The datetime the response was completed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "The link to the next page with exchange rates.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The datetime the of the request.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of exchange rate objects that represent the results of the batch operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The datetime the of the request.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the response (e.g.",
						"type": "`$STRING`",
					},
				},
				"name": "multicurrency_batch_response_exchange_rate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/currencies/2026-09/exchange-rates/batch/create",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "create",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"batch",
									"create",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/currencies/2026-09/exchange-rates/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"batch",
									"read",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/currencies/2026-09/exchange-rates/batch/update",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"batch",
									"update",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"multicurrency_central_exchange_rates_information": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "centralExchangeRatesEnabled",
						"req": true,
						"short": "Indicates if central exchange rates is enabled for the portal or not.",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "multicurrency_central_exchange_rates_information",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/central-fx-rates/information",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "central-fx-rates",
									},
									map[string]any{
										"lit": "information",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"central-fx-rates",
									"information",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"multicurrency_collection_response_currency_code_info_no_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "currencyCode",
						"req": true,
						"short": "The three-letter code representing a specific currency (ex.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyName",
						"req": true,
						"short": "The full name of the currency (ex.",
						"type": "`$STRING`",
					},
				},
				"name": "multicurrency_collection_response_currency_code_info_no_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/central-fx-rates/unsupported-currencies",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "central-fx-rates",
									},
									map[string]any{
										"lit": "unsupported-currencies",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"central-fx-rates",
									"unsupported-currencies",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/codes",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "codes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"codes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"multicurrency_collection_response_exchange_rate_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversionRate",
						"req": true,
						"short": "The conversion rate between the to and from currency code of this exchange rate.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date the exchange rate was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "effectiveAt",
						"req": true,
						"short": "The date the exchange rate is in effect.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fromCurrencyCode",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "A unique identifier for the exchange rate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toCurrencyCode",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date the exchange rate was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibleInUI",
						"req": true,
						"short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "multicurrency_collection_response_exchange_rate_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "from_currency_code",
											"orig": "from_currency_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "to_currency_code",
											"orig": "to_currency_code",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/exchange-rates",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"from_currency_code",
										"limit",
										"to_currency_code",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"multicurrency_collection_response_exchange_rate_no_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversionRate",
						"req": true,
						"short": "The conversion rate between the to and from currency code of this exchange rate.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date the exchange rate was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "effectiveAt",
						"req": true,
						"short": "The date the exchange rate is in effect.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fromCurrencyCode",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "A unique identifier for the exchange rate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toCurrencyCode",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date the exchange rate was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibleInUI",
						"req": true,
						"short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "multicurrency_collection_response_exchange_rate_no_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/exchange-rates/current",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
									map[string]any{
										"lit": "current",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"current",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"multicurrency_company_currency": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date the company currency was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyCode",
						"req": true,
						"short": "The three-letter code representing a specific currency (ex.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The currency code for the company currency",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "multicurrency_company_currency",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/company-currency",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "company-currency",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"company-currency",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/settings/currencies/2026-09/company-currency",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "company-currency",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"company-currency",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"multicurrency_exchange_rate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversionRate",
						"req": true,
						"short": "The conversion rate between the to and from currency code of this exchange rate.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date the exchange rate was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyCode",
						"req": true,
						"short": "The currency code being added to the HubSpot portal for use with central exchange rates.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "effectiveAt",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The date the exchange rate is in effect.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fromCurrencyCode",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "A unique identifier for the exchange rate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toCurrencyCode",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date the exchange rate was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "visibleInUI",
						"req": true,
						"short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "multicurrency_exchange_rate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/currencies/2026-09/central-fx-rates/add-currency",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "central-fx-rates",
									},
									map[string]any{
										"lit": "add-currency",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"central-fx-rates",
									"add-currency",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/currencies/2026-09/exchange-rates",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "exchange_rate_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
								"rename": map[string]any{
									"param": map[string]any{
										"exchangeRateId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "exchange_rate_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
								"rename": map[string]any{
									"param": map[string]any{
										"exchangeRateId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "currencies",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "exchange-rates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tax_rate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"req": true,
						"short": "Indicates whether the tax rate group is currently active.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the tax rate was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the tax rate.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"req": true,
						"short": "The display label for the tax rate.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the tax rate.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "percentageRate",
						"req": true,
						"short": "The percentage rate applied.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the tax rate was last updated.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "tax_rate",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tax-rates/2026-09/tax-rates",
								"segments": []any{
									map[string]any{
										"lit": "tax-rates",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "tax-rates",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active",
										"after",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tax-rates",
									"2026-09",
									"tax-rates",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "tax_rate_group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tax-rates/2026-09/tax-rates/{taxRateGroupId}",
								"rename": map[string]any{
									"param": map[string]any{
										"taxRateGroupId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tax-rates",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "tax-rates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tax-rates",
									"2026-09",
									"tax-rates",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_batch_response_team_member": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"short": "An array of StandardError objects detailing any errors that occurred during the batch operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "An array of team member assignments, where each item specifies the details of a team member to be assigned.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A map of link names to associated URIs providing additional information about the batch operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int32",
						"name": "numErrors",
						"short": "The number of errors encountered during the batch operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of TeamMemberResponse objects representing the results of the batch operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch operation.",
						"type": "`$STRING`",
					},
				},
				"name": "teams_batch_response_team_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "2026_09_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/teams/2026-09/{teamId}/members/batch",
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "2026_09_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "2026_09_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"2026_09_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{2026_09_id}",
									"members",
									"batch",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"teams_collection_response_team_member_response_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of membership the user has in the team.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "userId",
						"req": true,
						"short": "The unique identifier for the user, represented as a string.",
						"type": "`$STRING`",
					},
				},
				"name": "teams_collection_response_team_member_response_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "2026_09_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/teams/2026-09/{teamId}/members",
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "2026_09_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "2026_09_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"2026_09_id",
										"after",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{2026_09_id}",
									"members",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"teams_collection_response_team_response_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the team, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the team, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parentTeamId",
						"short": "The unique identifier of the parent team, if applicable, represented as a string.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "teams_collection_response_team_response_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/teams/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the team, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "members",
						"req": true,
						"short": "An array of team members to be assigned to the new team.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the team, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parentTeamId",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The unique identifier of the parent team, if applicable, represented as a string.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "teams_team",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/teams/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/teams/2026-09/{teamId}",
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "team_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "team_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/settings/teams/2026-09/{teamId}",
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "team_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"teams_team_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of team member assignment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "userId",
						"req": true,
						"short": "The unique identifier for the user being assigned to the team.",
						"type": "`$STRING`",
					},
				},
				"name": "teams_team_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "2026_09_id",
											"orig": "team_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/teams/2026-09/{teamId}/members",
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "2026_09_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "teams",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "2026_09_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"2026_09_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{2026_09_id}",
									"members",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"user": map[string]any{
				"fields": []any{},
				"name": "user",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "id_property",
											"orig": "id_property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/settings/users/2026-09/{userId}",
								"rename": map[string]any{
									"param": map[string]any{
										"userId": "user_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "user_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_property",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"{user_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"user_provisioning_collection_response_public_permission_set_no": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the permission set.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the permission set.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requiresBillingWrite",
						"req": true,
						"short": "A boolean indicating whether the permission set requires billing write access.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_provisioning_collection_response_public_permission_set_no",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/users/2026-09/roles",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "roles",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"roles",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_provisioning_collection_response_public_seat_no_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "A string providing additional details about the seat.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the seat.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "remainingSeats",
						"short": "An integer indicating the number of seats that are still available.",
						"type": "`$INTEGER`",
					},
				},
				"name": "user_provisioning_collection_response_public_seat_no_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/users/2026-09/seats",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "seats",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"seats",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_provisioning_collection_response_public_team_no_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the team, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the team, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "secondaryUserIds",
						"req": true,
						"short": "An array of strings representing the IDs of users who are secondary members of the team.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "userIds",
						"req": true,
						"short": "An array of strings representing the IDs of users who are primary members of the team.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_provisioning_collection_response_public_team_no_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/users/2026-09/teams",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "teams",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"teams",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_provisioning_collection_response_public_user_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"req": true,
						"short": "The email address of the user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "firstName",
						"short": "The first name of the user, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the user, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastName",
						"short": "The last name of the user, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "primaryTeamId",
						"short": "The ID of the primary team to which the user belongs, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "roleId",
						"short": "A string representing a single role ID assigned to the user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "roleIds",
						"req": true,
						"short": "An array of strings representing the IDs of the roles assigned to the user.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "seatNames",
						"short": "An array of strings representing the names of seats assigned to the user.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "secondaryTeamIds",
						"short": "An array of strings representing the IDs of secondary teams to which the user is associated.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sendWelcomeEmail",
						"short": "A boolean indicating whether a welcome email should be sent to the user.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "superAdmin",
						"req": true,
						"short": "A boolean indicating whether the user has super admin privileges.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_provisioning_collection_response_public_user_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/users/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_provisioning_public_user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"req": true,
						"short": "The email address of the user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "firstName",
						"short": "The first name of the user, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the user, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastName",
						"short": "The last name of the user, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "primaryTeamId",
						"short": "The ID of the primary team to which the user belongs, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "roleId",
						"short": "A string representing a single role ID assigned to the user.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "roleIds",
						"req": true,
						"short": "An array of strings representing the IDs of the roles assigned to the user.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "seatNames",
						"short": "An array of strings representing the names of seats assigned to the user.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "secondaryTeamIds",
						"short": "An array of strings representing the IDs of secondary teams to which the user is associated.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sendWelcomeEmail",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether a welcome email should be sent to the user.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "superAdmin",
						"req": true,
						"short": "A boolean indicating whether the user has super admin privileges.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_provisioning_public_user",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/settings/users/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "id_property",
											"orig": "id_property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/settings/users/2026-09/{userId}",
								"rename": map[string]any{
									"param": map[string]any{
										"userId": "user_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "user_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_property",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"{user_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "id_property",
											"orig": "id_property",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/settings/users/2026-09/{userId}",
								"rename": map[string]any{
									"param": map[string]any{
										"userId": "user_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "user_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_property",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"{user_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
