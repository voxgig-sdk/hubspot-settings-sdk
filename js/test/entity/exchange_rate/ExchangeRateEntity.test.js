
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotSettingsSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ExchangeRateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.ExchangeRate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversionRate":{"a":true,"h":"Conversion Rate","n":"conversionRate","r":true,"sh":"The conversion rate between the to and from currency code of this exchange rate.","t":"`$NUMBER`","key$":"conversionRate","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date the exchange rate was created.","t":"`$STRING`","key$":"createdAt","index$":1},"effectiveAt":{"a":true,"fo":"date-time","h":"Effective At","n":"effectiveAt","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The date the exchange rate is in effect.","t":"`$STRING`","key$":"effectiveAt","index$":2},"fromCurrencyCode":{"a":true,"h":"From Currency Code","n":"fromCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.","t":"`$STRING`","key$":"fromCurrencyCode","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"A unique identifier for the exchange rate","t":"`$STRING`","key$":"id","index$":4},"toCurrencyCode":{"a":true,"h":"To Currency Code","n":"toCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.","t":"`$STRING`","key$":"toCurrencyCode","index$":5},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"The date the exchange rate was last updated.","t":"`$STRING`","key$":"updatedAt","index$":6},"visibleInUI":{"a":true,"h":"Visible In Ui","n":"visibleInUI","r":true,"sh":"This indicates if the exchange rate is shown in the MultiCurrency settings page.","t":"`$BOOLEAN`","key$":"visibleInUI","index$":7}},"id":{"field":"id","name":"id"},"name":"exchange_rate","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /settings/currencies/2026-09/exchange-rates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/settings/currencies/2026-09/exchange-rates","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /settings/currencies/2026-09/exchange-rates/update-visibility","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/settings/currencies/2026-09/exchange-rates/update-visibility","q":{"$action":"update_visibility"},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"lit":"update-visibility"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /settings/currencies/2026-09/exchange-rates/{exchangeRateId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"exchange_rate_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/settings/currencies/2026-09/exchange-rates/{exchangeRateId}","q":{"exist":["id"]},"r":{"param":{"exchangeRateId":"id"}},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /settings/currencies/2026-09/exchange-rates/{exchangeRateId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"exchange_rate_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/settings/currencies/2026-09/exchange-rates/{exchangeRateId}","q":{"exist":["id"]},"r":{"param":{"exchangeRateId":"id"}},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"exchange_rate","name__orig":"exchange_rate","Name":"ExchangeRate","name_":"exchange_rate","name-":"exchange-rate","NAME":"EXCHANGE_RATE","index$":4}, {"active":true,"entity":"exchange_rate","key$":"BasicExchangeRateFlow","kind":"basic","name":"BasicExchangeRateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"exchange_rate_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"exchange_rate_ref01","srcdatavar":"exchange_rate_ref01_data","suffix":"_up0","textfield":"createdAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-exchange_rate_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"exchange_rate_ref01","srcdatavar":"exchange_rate_ref01_data","suffix":"_dt0"},"m":{"id":"exchange_rate01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-exchange_rate_ref01"}}],"index$":2}]}, 'ExchangeRate', {"POST /settings/currencies/2026-09/exchange-rates":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["conversionRate","fromCurrencyCode"],"type":"object","properties":{"conversionRate":{"type":"number","description":"The conversion rate between the to and from currency code of this exchange rate.","example":null,"key$":"conversionRate"},"effectiveAt":{"type":"string","description":"The date the exchange rate is in effect.","format":"date-time","example":null,"key$":"effectiveAt"},"fromCurrencyCode":{"type":"string","description":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert from.","example":null,"enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XUA","YER","ZAR","ZMW","ZWL"],"key$":"fromCurrencyCode"}},"example":null,"x-ref":"#/components/schemas/MulticurrencyExchangeRateCreateRequest","index$":1},"example":null}},"required":true},"parameters":[]},"POST /settings/currencies/2026-09/exchange-rates/update-visibility":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["fromCurrencyCode","toCurrencyCode","visibleInUI"],"type":"object","properties":{"fromCurrencyCode":{"type":"string","description":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert from.","example":null,"enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XUA","YER","ZAR","ZMW","ZWL"]},"toCurrencyCode":{"type":"string","description":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert to.","example":null,"enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XUA","YER","ZAR","ZMW","ZWL"]},"visibleInUI":{"type":"boolean","description":"This indicates if the currency pair is shown in the MultiCurrency settings page. Setting this to false will remove the currency pair from the settings page.","example":null}},"example":null,"x-ref":"#/components/schemas/MulticurrencyCurrencyPairUpdate"},"example":null}},"required":true},"parameters":[]},"GET /settings/currencies/2026-09/exchange-rates/{exchangeRateId}":{"protocol":"http","parameters":[{"name":"exchangeRateId","in":"path","description":"The unique identifier of the exchange rate to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]},"PATCH /settings/currencies/2026-09/exchange-rates/{exchangeRateId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["conversionRate"],"type":"object","properties":{"conversionRate":{"type":"number","description":"The updated conversion rate between the to and from currency code of this exchange rate.","example":null,"key$":"conversionRate"},"effectiveAt":{"type":"string","description":"The date the exchange rate is in effect.","format":"date-time","example":null,"key$":"effectiveAt"}},"example":null,"x-ref":"#/components/schemas/MulticurrencyExchangeRateMultiplier","index$":1},"example":null}},"required":true},"parameters":[{"name":"exchangeRateId","in":"path","description":"The unique identifier of the exchange rate to update.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const exchange_rate_ref01_ent = client.ExchangeRate()
    let exchange_rate_ref01_data = setup.data.new.exchange_rate['exchange_rate_ref01']

    exchange_rate_ref01_data = (await exchange_rate_ref01_ent.create(exchange_rate_ref01_data)).data()
    assert(null != exchange_rate_ref01_data.id)


    // UPDATE
    const exchange_rate_ref01_data_up0 = {}
    exchange_rate_ref01_data_up0.id = exchange_rate_ref01_data.id

    const exchange_rate_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-exchange_rate_ref01_' + setup.now }
    exchange_rate_ref01_data_up0 [exchange_rate_ref01_markdef_up0.name] = exchange_rate_ref01_markdef_up0.value

    const exchange_rate_ref01_resdata_up0 = (await exchange_rate_ref01_ent.update(exchange_rate_ref01_data_up0)).data()
    assert(exchange_rate_ref01_resdata_up0.id === exchange_rate_ref01_data_up0.id)

    assert(exchange_rate_ref01_resdata_up0[exchange_rate_ref01_markdef_up0.name] === exchange_rate_ref01_markdef_up0.value)


    // LOAD
    const exchange_rate_ref01_match_dt0 = {}
    exchange_rate_ref01_match_dt0.id = exchange_rate_ref01_data.id
    const exchange_rate_ref01_data_dt0 = (await exchange_rate_ref01_ent.load(exchange_rate_ref01_match_dt0)).data()
    assert(exchange_rate_ref01_data_dt0.id === exchange_rate_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/exchange_rate/ExchangeRateTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotSettingsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['exchange_rate01','exchange_rate02','exchange_rate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_EXCHANGE_RATE_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_EXCHANGE_RATE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_EXCHANGE_RATE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotSettingsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HUBSPOT_SETTINGS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HUBSPOT_SETTINGS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
