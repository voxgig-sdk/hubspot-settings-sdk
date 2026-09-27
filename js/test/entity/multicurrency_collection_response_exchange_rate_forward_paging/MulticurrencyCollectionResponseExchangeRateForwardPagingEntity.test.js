
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


describe('MulticurrencyCollectionResponseExchangeRateForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.MulticurrencyCollectionResponseExchangeRateForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversionRate":{"a":true,"h":"Conversion Rate","n":"conversionRate","r":true,"sh":"The conversion rate between the to and from currency code of this exchange rate.","t":"`$NUMBER`","key$":"conversionRate","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date the exchange rate was created.","t":"`$STRING`","key$":"createdAt","index$":1},"effectiveAt":{"a":true,"fo":"date-time","h":"Effective At","n":"effectiveAt","r":true,"sh":"The date the exchange rate is in effect.","t":"`$STRING`","key$":"effectiveAt","index$":2},"fromCurrencyCode":{"a":true,"h":"From Currency Code","n":"fromCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.","t":"`$STRING`","key$":"fromCurrencyCode","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"A unique identifier for the exchange rate","t":"`$STRING`","key$":"id","index$":4},"toCurrencyCode":{"a":true,"h":"To Currency Code","n":"toCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.","t":"`$STRING`","key$":"toCurrencyCode","index$":5},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"The date the exchange rate was last updated.","t":"`$STRING`","key$":"updatedAt","index$":6},"visibleInUI":{"a":true,"h":"Visible In Ui","n":"visibleInUI","r":true,"sh":"This indicates if the exchange rate is shown in the MultiCurrency settings page.","t":"`$BOOLEAN`","key$":"visibleInUI","index$":7}},"id":{"field":"id","name":"id"},"name":"multicurrency_collection_response_exchange_rate_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /settings/currencies/2026-09/exchange-rates","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"query","n":"from_currency_code","or":"from_currency_code","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":null,"k":"query","n":"to_currency_code","or":"to_currency_code","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/settings/currencies/2026-09/exchange-rates","q":{"exist":["after","from_currency_code","limit","to_currency_code"]},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"multicurrency_collection_response_exchange_rate_forward_paging","name__orig":"multicurrency_collection_response_exchange_rate_forward_paging","Name":"MulticurrencyCollectionResponseExchangeRateForwardPaging","name_":"multicurrency_collection_response_exchange_rate_forward_paging","name-":"multicurrency-collection-response-exchange-rate-forward-paging","NAME":"MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_FORWARD_PAGING","index$":7}, {"active":true,"entity":"multicurrency_collection_response_exchange_rate_forward_paging","key$":"BasicMulticurrencyCollectionResponseExchangeRateForwardPagingFlow","kind":"basic","name":"BasicMulticurrencyCollectionResponseExchangeRateForwardPagingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"multicurrency_collection_response_exchange_rate_forward_paging_ref01"}}],"index$":0}]}, 'MulticurrencyCollectionResponseExchangeRateForwardPaging', {"GET /settings/currencies/2026-09/exchange-rates":{"protocol":"http","parameters":[{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":0},{"name":"fromCurrencyCode","in":"query","description":"Filter results by the source currency code. Valid values include standard currency codes such as 'USD', 'EUR', etc.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null,"enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XUA","YER","ZAR","ZMW","ZWL"]},"index$":1},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null,"default":100},"index$":2},{"name":"toCurrencyCode","in":"query","description":"Filter results by the target currency code. Valid values include standard currency codes such as 'USD', 'EUR', etc.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null,"enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XUA","YER","ZAR","ZMW","ZWL"]},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let multicurrency_collection_response_exchange_rate_forward_paging_ref01_data = Object.values(setup.data.existing.multicurrency_collection_response_exchange_rate_forward_paging)[0]

    // LIST
    const multicurrency_collection_response_exchange_rate_forward_paging_ref01_ent = client.MulticurrencyCollectionResponseExchangeRateForwardPaging()
    const multicurrency_collection_response_exchange_rate_forward_paging_ref01_match = {}

    const multicurrency_collection_response_exchange_rate_forward_paging_ref01_list = (await multicurrency_collection_response_exchange_rate_forward_paging_ref01_ent.list(multicurrency_collection_response_exchange_rate_forward_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/multicurrency_collection_response_exchange_rate_forward_paging/MulticurrencyCollectionResponseExchangeRateForwardPagingTestData.json')

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
    ['multicurrency_collection_response_exchange_rate_forward_paging01','multicurrency_collection_response_exchange_rate_forward_paging02','multicurrency_collection_response_exchange_rate_forward_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_FORWARD_PAGING_ENTID']
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
  
