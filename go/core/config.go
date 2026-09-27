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
				"add_currency": map[string]any{},
				"basic": map[string]any{},
				"code": map[string]any{},
				"current": map[string]any{},
				"exchange_rate": map[string]any{},
				"multicurrency_batch_response_exchange_rate": map[string]any{},
				"multicurrency_central_exchange_rates_information": map[string]any{},
				"multicurrency_collection_response_exchange_rate_forward_paging": map[string]any{},
				"multicurrency_company_currency": map[string]any{},
				"tax_rate": map[string]any{},
				"teams_batch_response_team_member": map[string]any{},
				"teams_collection_response_team_member_response_forward_paging": map[string]any{},
				"teams_collection_response_team_response_forward_paging": map[string]any{},
				"teams_team": map[string]any{},
				"teams_team_member": map[string]any{},
				"unsupported_currency": map[string]any{},
				"user": map[string]any{},
				"user_provisioning_collection_response_public_user_forward_paging": map[string]any{},
				"user_provisioning_public_permission_set": map[string]any{},
				"user_provisioning_public_seat": map[string]any{},
				"user_provisioning_public_team": map[string]any{},
				"user_provisioning_public_user": map[string]any{},
			},
		},
		"entity": map[string]any{
			"add_currency": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversionRate",
						"title": "Conversion Rate",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The conversion rate between the to and from currency code of this exchange rate.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The currency code being added to the HubSpot portal for use with central exchange rates.",
					},
					map[string]any{
						"name": "effectiveAt",
						"title": "Effective At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate is in effect.",
						"format": "date-time",
					},
					map[string]any{
						"name": "fromCurrencyCode",
						"title": "From Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique identifier for the exchange rate",
					},
					map[string]any{
						"name": "toCurrencyCode",
						"title": "To Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "visibleInUI",
						"title": "Visible In Ui",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "add_currency",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"central-fx-rates",
									"add-currency",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"basic": map[string]any{
				"fields": []any{},
				"name": "basic",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/settings/teams/2026-09/{teamId}/members/{userId}",
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
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "user_id",
									},
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
									"members",
									"{user_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
										"userId": "user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
										"type",
										"user_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/settings/teams/2026-09/{teamId}",
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
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"code": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The three-letter code representing a specific currency (ex.",
					},
					map[string]any{
						"name": "currencyName",
						"title": "Currency Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The full name of the currency (ex.",
					},
				},
				"name": "code",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"codes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"current": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversionRate",
						"title": "Conversion Rate",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The conversion rate between the to and from currency code of this exchange rate.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "effectiveAt",
						"title": "Effective At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate is in effect.",
						"format": "date-time",
					},
					map[string]any{
						"name": "fromCurrencyCode",
						"title": "From Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique identifier for the exchange rate",
					},
					map[string]any{
						"name": "toCurrencyCode",
						"title": "To Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "visibleInUI",
						"title": "Visible In Ui",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "current",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"current",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"exchange_rate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conversionRate",
						"title": "Conversion Rate",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The conversion rate between the to and from currency code of this exchange rate.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "effectiveAt",
						"title": "Effective At",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The date the exchange rate is in effect.",
						"format": "date-time",
					},
					map[string]any{
						"name": "fromCurrencyCode",
						"title": "From Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique identifier for the exchange rate",
					},
					map[string]any{
						"name": "toCurrencyCode",
						"title": "To Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "visibleInUI",
						"title": "Visible In Ui",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "exchange_rate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"update-visibility",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "update_visibility",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"exchangeRateId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "exchange_rate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/settings/currencies/2026-09/exchange-rates/{exchangeRateId}",
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"exchangeRateId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "exchange_rate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"short": "The datetime the response was completed",
						"format": "date-time",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"short": "The link to the next page with exchange rates.",
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"short": "The datetime the of the request.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of exchange rate objects that represent the results of the batch operation.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "The datetime the of the request.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the response (e.g.",
					},
				},
				"name": "multicurrency_batch_response_exchange_rate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"batch",
									"create",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"batch",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
									"batch",
									"update",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Central Exchange Rates Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates if central exchange rates is enabled for the portal or not.",
					},
				},
				"name": "multicurrency_central_exchange_rates_information",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"central-fx-rates",
									"information",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Conversion Rate",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The conversion rate between the to and from currency code of this exchange rate.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "effectiveAt",
						"title": "Effective At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate is in effect.",
						"format": "date-time",
					},
					map[string]any{
						"name": "fromCurrencyCode",
						"title": "From Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique identifier for the exchange rate",
					},
					map[string]any{
						"name": "toCurrencyCode",
						"title": "To Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the exchange rate was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "visibleInUI",
						"title": "Visible In Ui",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "This indicates if the exchange rate is shown in the MultiCurrency settings page.",
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"exchange-rates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "from_currency_code",
											"orig": "from_currency_code",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "to_currency_code",
											"orig": "to_currency_code",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
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
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date the company currency was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The three-letter code representing a specific currency (ex.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The currency code for the company currency",
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"company-currency",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"company-currency",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the tax rate group is currently active.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the tax rate was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the tax rate.",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "The display label for the tax rate.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the tax rate.",
					},
					map[string]any{
						"name": "percentageRate",
						"title": "Percentage Rate",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The percentage rate applied.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the tax rate was last updated.",
						"format": "date-time",
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
								"parts": []any{
									"tax-rates",
									"2026-09",
									"tax-rates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active",
										"after",
										"limit",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tax-rates/2026-09/tax-rates/{taxRateGroupId}",
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
								"parts": []any{
									"tax-rates",
									"2026-09",
									"tax-rates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"taxRateGroupId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "tax_rate_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"short": "An array of StandardError objects detailing any errors that occurred during the batch operation.",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of team member assignments, where each item specifies the details of a team member to be assigned.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"short": "A map of link names to associated URIs providing additional information about the batch operation.",
					},
					map[string]any{
						"name": "numErrors",
						"title": "Num Errors",
						"type": "`$INTEGER`",
						"short": "The number of errors encountered during the batch operation.",
						"format": "int32",
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of TeamMemberResponse objects representing the results of the batch operation.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the batch operation.",
					},
				},
				"name": "teams_batch_response_team_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/settings/teams/2026-09/{teamId}/members/batch",
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
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
									"members",
									"batch",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_collection_response_team_member_response_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of membership the user has in the team.",
					},
					map[string]any{
						"name": "userId",
						"title": "User Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the user, represented as a string.",
					},
				},
				"name": "teams_collection_response_team_member_response_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/settings/teams/2026-09/{teamId}/members",
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
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
										"team_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_collection_response_team_response_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the team, represented as a string.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the team, represented as a string.",
					},
					map[string]any{
						"name": "parentTeamId",
						"title": "Parent Team Id",
						"type": "`$STRING`",
						"short": "The unique identifier of the parent team, if applicable, represented as a string.",
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
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
									},
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
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the team, represented as a string.",
					},
					map[string]any{
						"name": "members",
						"title": "Members",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of team members to be assigned to the new team.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the team, represented as a string.",
					},
					map[string]any{
						"name": "parentTeamId",
						"title": "Parent Team Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The unique identifier of the parent team, if applicable, represented as a string.",
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
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/settings/teams/2026-09/{teamId}",
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
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/settings/teams/2026-09/{teamId}",
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
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_team_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of team member assignment.",
					},
					map[string]any{
						"name": "userId",
						"title": "User Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the user being assigned to the team.",
					},
				},
				"name": "teams_team_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/settings/teams/2026-09/{teamId}/members",
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
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"settings",
									"teams",
									"2026-09",
									"{team_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"teamId": "team_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "team_id",
											"orig": "team_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"team_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"unsupported_currency": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"req": true,
						"short": "The three-letter code representing a specific currency (ex.",
					},
					map[string]any{
						"name": "currencyName",
						"title": "Currency Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The full name of the currency (ex.",
					},
				},
				"name": "unsupported_currency",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"currencies",
									"2026-09",
									"central-fx-rates",
									"unsupported-currencies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/settings/users/2026-09/{userId}",
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"{user_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"userId": "user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_property",
											"orig": "id_property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_property",
										"user_id",
									},
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
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "The email address of the user.",
					},
					map[string]any{
						"name": "firstName",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "The first name of the user, represented as a string.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the user, represented as a string.",
					},
					map[string]any{
						"name": "lastName",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "The last name of the user, represented as a string.",
					},
					map[string]any{
						"name": "primaryTeamId",
						"title": "Primary Team Id",
						"type": "`$STRING`",
						"short": "The ID of the primary team to which the user belongs, represented as a string.",
					},
					map[string]any{
						"name": "roleId",
						"title": "Role Id",
						"type": "`$STRING`",
						"short": "A string representing a single role ID assigned to the user.",
					},
					map[string]any{
						"name": "roleIds",
						"title": "Role Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of strings representing the IDs of the roles assigned to the user.",
					},
					map[string]any{
						"name": "seatNames",
						"title": "Seat Names",
						"type": "`$ARRAY`",
						"short": "An array of strings representing the names of seats assigned to the user.",
					},
					map[string]any{
						"name": "secondaryTeamIds",
						"title": "Secondary Team Ids",
						"type": "`$ARRAY`",
						"short": "An array of strings representing the IDs of secondary teams to which the user is associated.",
					},
					map[string]any{
						"name": "sendWelcomeEmail",
						"title": "Send Welcome Email",
						"type": "`$BOOLEAN`",
						"short": "A boolean indicating whether a welcome email should be sent to the user.",
					},
					map[string]any{
						"name": "superAdmin",
						"title": "Super Admin",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the user has super admin privileges.",
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_provisioning_public_permission_set": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the permission set.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the permission set.",
					},
					map[string]any{
						"name": "requiresBillingWrite",
						"title": "Requires Billing Write",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the permission set requires billing write access.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_provisioning_public_permission_set",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"roles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_provisioning_public_seat": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A string providing additional details about the seat.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the seat.",
					},
					map[string]any{
						"name": "remainingSeats",
						"title": "Remaining Seats",
						"type": "`$INTEGER`",
						"short": "An integer indicating the number of seats that are still available.",
						"format": "int32",
					},
				},
				"name": "user_provisioning_public_seat",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"seats",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_provisioning_public_team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the team, represented as a string.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the team, represented as a string.",
					},
					map[string]any{
						"name": "secondaryUserIds",
						"title": "Secondary User Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of strings representing the IDs of users who are secondary members of the team.",
					},
					map[string]any{
						"name": "userIds",
						"title": "User Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of strings representing the IDs of users who are primary members of the team.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_provisioning_public_team",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"teams",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "The email address of the user.",
					},
					map[string]any{
						"name": "firstName",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "The first name of the user, represented as a string.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the user, represented as a string.",
					},
					map[string]any{
						"name": "lastName",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "The last name of the user, represented as a string.",
					},
					map[string]any{
						"name": "primaryTeamId",
						"title": "Primary Team Id",
						"type": "`$STRING`",
						"short": "The ID of the primary team to which the user belongs, represented as a string.",
					},
					map[string]any{
						"name": "roleId",
						"title": "Role Id",
						"type": "`$STRING`",
						"short": "A string representing a single role ID assigned to the user.",
					},
					map[string]any{
						"name": "roleIds",
						"title": "Role Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of strings representing the IDs of the roles assigned to the user.",
					},
					map[string]any{
						"name": "seatNames",
						"title": "Seat Names",
						"type": "`$ARRAY`",
						"short": "An array of strings representing the names of seats assigned to the user.",
					},
					map[string]any{
						"name": "secondaryTeamIds",
						"title": "Secondary Team Ids",
						"type": "`$ARRAY`",
						"short": "An array of strings representing the IDs of secondary teams to which the user is associated.",
					},
					map[string]any{
						"name": "sendWelcomeEmail",
						"title": "Send Welcome Email",
						"type": "`$BOOLEAN`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A boolean indicating whether a welcome email should be sent to the user.",
					},
					map[string]any{
						"name": "superAdmin",
						"title": "Super Admin",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "A boolean indicating whether the user has super admin privileges.",
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/settings/users/2026-09/{userId}",
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"{user_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"userId": "user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_property",
											"orig": "id_property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_property",
										"user_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/settings/users/2026-09/{userId}",
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
								"parts": []any{
									"settings",
									"users",
									"2026-09",
									"{user_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"userId": "user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_property",
											"orig": "id_property",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_property",
										"user_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
