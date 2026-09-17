
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


describe('MulticurrencyCollectionResponseExchangeRateNoPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.MulticurrencyCollectionResponseExchangeRateNoPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"conversionRate","req":true,"short":"The conversion rate between the to and from currency code of this exchange rate.","type":"`$NUMBER`","index$":0},{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"The date the exchange rate was created.","type":"`$STRING`","index$":1},{"active":true,"format":"date-time","name":"effectiveAt","req":true,"short":"The date the exchange rate is in effect.","type":"`$STRING`","index$":2},{"active":true,"name":"fromCurrencyCode","req":true,"short":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"A unique identifier for the exchange rate","type":"`$STRING`","index$":4},{"active":true,"name":"toCurrencyCode","req":true,"short":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.","type":"`$STRING`","index$":5},{"active":true,"format":"date-time","name":"updatedAt","req":true,"short":"The date the exchange rate was last updated.","type":"`$STRING`","index$":6},{"active":true,"name":"visibleInUI","req":true,"short":"This indicates if the exchange rate is shown in the MultiCurrency settings page.","type":"`$BOOLEAN`","index$":7}],"id":{"field":"id","name":"id"},"name":"multicurrency_collection_response_exchange_rate_no_paging","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /settings/currencies/2026-09/exchange-rates/current","json":"{\"operationId\":\"get-/settings/currencies/2026-09/exchange-rates/current\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of exchange rate objects, each representing the conversion rate details between two currencies.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"conversionRate\":{\"description\":\"The conversion rate between the to and from currency code of this exchange rate.\",\"example\":null,\"type\":\"number\"},\"createdAt\":{\"description\":\"The date the exchange rate was created.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"effectiveAt\":{\"description\":\"The date the exchange rate is in effect.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"fromCurrencyCode\":{\"description\":\"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.\",\"enum\":[\"AED\",\"AFN\",\"ALL\",\"AMD\",\"ANG\",\"AOA\",\"ARS\",\"AUD\",\"AWG\",\"AZN\",\"BAM\",\"BBD\",\"BDT\",\"BGN\",\"BHD\",\"BIF\",\"BMD\",\"BND\",\"BOB\",\"BOV\",\"BRL\",\"BSD\",\"BTN\",\"BWP\",\"BYN\",\"BZD\",\"CAD\",\"CDF\",\"CHE\",\"CHF\",\"CHW\",\"CLF\",\"CLP\",\"CNY\",\"COP\",\"COU\",\"CRC\",\"CUC\",\"CUP\",\"CVE\",\"CZK\",\"DJF\",\"DKK\",\"DOP\",\"DZD\",\"EGP\",\"ERN\",\"ETB\",\"EUR\",\"FJD\",\"FKP\",\"GBP\",\"GEL\",\"GHS\",\"GIP\",\"GMD\",\"GNF\",\"GTQ\",\"GYD\",\"HKD\",\"HNL\",\"HRK\",\"HTG\",\"HUF\",\"IDR\",\"ILS\",\"INR\",\"IQD\",\"IRR\",\"ISK\",\"JMD\",\"JOD\",\"JPY\",\"KES\",\"KGS\",\"KHR\",\"KMF\",\"KPW\",\"KRW\",\"KWD\",\"KYD\",\"KZT\",\"LAK\",\"LBP\",\"LKR\",\"LRD\",\"LSL\",\"LYD\",\"MAD\",\"MDL\",\"MGA\",\"MKD\",\"MMK\",\"MNT\",\"MOP\",\"MRU\",\"MUR\",\"MVR\",\"MWK\",\"MXN\",\"MXV\",\"MYR\",\"MZN\",\"NAD\",\"NGN\",\"NIO\",\"NOK\",\"NPR\",\"NZD\",\"OMR\",\"PAB\",\"PEN\",\"PGK\",\"PHP\",\"PKR\",\"PLN\",\"PYG\",\"QAR\",\"RON\",\"RSD\",\"RUB\",\"RWF\",\"SAR\",\"SBD\",\"SCR\",\"SDG\",\"SEK\",\"SGD\",\"SHP\",\"SLL\",\"SOS\",\"SRD\",\"SSP\",\"STN\",\"SVC\",\"SYP\",\"SZL\",\"THB\",\"TJS\",\"TMT\",\"TND\",\"TOP\",\"TRY\",\"TTD\",\"TWD\",\"TZS\",\"UAH\",\"UGX\",\"USD\",\"USN\",\"UYI\",\"UYU\",\"UZS\",\"VEF\",\"VND\",\"VUV\",\"WST\",\"XAF\",\"XAG\",\"XAU\",\"XBA\",\"XBB\",\"XBC\",\"XBD\",\"XCD\",\"XDR\",\"XOF\",\"XPD\",\"XPF\",\"XPT\",\"XSU\",\"XUA\",\"YER\",\"ZAR\",\"ZMW\",\"ZWL\"],\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"A unique identifier for the exchange rate\",\"example\":null,\"type\":\"string\"},\"toCurrencyCode\":{\"description\":\"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.\",\"enum\":[\"AED\",\"AFN\",\"ALL\",\"AMD\",\"ANG\",\"AOA\",\"ARS\",\"AUD\",\"AWG\",\"AZN\",\"BAM\",\"BBD\",\"BDT\",\"BGN\",\"BHD\",\"BIF\",\"BMD\",\"BND\",\"BOB\",\"BOV\",\"BRL\",\"BSD\",\"BTN\",\"BWP\",\"BYN\",\"BZD\",\"CAD\",\"CDF\",\"CHE\",\"CHF\",\"CHW\",\"CLF\",\"CLP\",\"CNY\",\"COP\",\"COU\",\"CRC\",\"CUC\",\"CUP\",\"CVE\",\"CZK\",\"DJF\",\"DKK\",\"DOP\",\"DZD\",\"EGP\",\"ERN\",\"ETB\",\"EUR\",\"FJD\",\"FKP\",\"GBP\",\"GEL\",\"GHS\",\"GIP\",\"GMD\",\"GNF\",\"GTQ\",\"GYD\",\"HKD\",\"HNL\",\"HRK\",\"HTG\",\"HUF\",\"IDR\",\"ILS\",\"INR\",\"IQD\",\"IRR\",\"ISK\",\"JMD\",\"JOD\",\"JPY\",\"KES\",\"KGS\",\"KHR\",\"KMF\",\"KPW\",\"KRW\",\"KWD\",\"KYD\",\"KZT\",\"LAK\",\"LBP\",\"LKR\",\"LRD\",\"LSL\",\"LYD\",\"MAD\",\"MDL\",\"MGA\",\"MKD\",\"MMK\",\"MNT\",\"MOP\",\"MRU\",\"MUR\",\"MVR\",\"MWK\",\"MXN\",\"MXV\",\"MYR\",\"MZN\",\"NAD\",\"NGN\",\"NIO\",\"NOK\",\"NPR\",\"NZD\",\"OMR\",\"PAB\",\"PEN\",\"PGK\",\"PHP\",\"PKR\",\"PLN\",\"PYG\",\"QAR\",\"RON\",\"RSD\",\"RUB\",\"RWF\",\"SAR\",\"SBD\",\"SCR\",\"SDG\",\"SEK\",\"SGD\",\"SHP\",\"SLL\",\"SOS\",\"SRD\",\"SSP\",\"STN\",\"SVC\",\"SYP\",\"SZL\",\"THB\",\"TJS\",\"TMT\",\"TND\",\"TOP\",\"TRY\",\"TTD\",\"TWD\",\"TZS\",\"UAH\",\"UGX\",\"USD\",\"USN\",\"UYI\",\"UYU\",\"UZS\",\"VEF\",\"VND\",\"VUV\",\"WST\",\"XAF\",\"XAG\",\"XAU\",\"XBA\",\"XBB\",\"XBC\",\"XBD\",\"XCD\",\"XDR\",\"XOF\",\"XPD\",\"XPF\",\"XPT\",\"XSU\",\"XUA\",\"YER\",\"ZAR\",\"ZMW\",\"ZWL\"],\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date the exchange rate was last updated.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"visibleInUI\":{\"description\":\"This indicates if the exchange rate is shown in the MultiCurrency settings page.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"conversionRate\",\"createdAt\",\"effectiveAt\",\"fromCurrencyCode\",\"id\",\"toCurrencyCode\",\"updatedAt\",\"visibleInUI\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"cpq.quotes.write\"]},{\"oauth2\":[\"crm.objects.quotes.read\"]},{\"oauth2\":[\"settings.currencies.read\"]},{\"oauth2\":[\"crm.objects.quotes.write\"]},{\"oauth2\":[\"cpq.quotes.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/settings/currencies/2026-09/exchange-rates/current","segments":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"lit":"current"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"multicurrency_collection_response_exchange_rate_no_paging","name__orig":"multicurrency_collection_response_exchange_rate_no_paging","Name":"MulticurrencyCollectionResponseExchangeRateNoPaging","name_":"multicurrency_collection_response_exchange_rate_no_paging","name-":"multicurrency-collection-response-exchange-rate-no-paging","NAME":"MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_NO_PAGING","index$":6}, {"active":true,"entity":"multicurrency_collection_response_exchange_rate_no_paging","key$":"BasicMulticurrencyCollectionResponseExchangeRateNoPagingFlow","kind":"basic","name":"BasicMulticurrencyCollectionResponseExchangeRateNoPagingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"multicurrency_collection_response_exchange_rate_no_paging_ref01"}}],"index$":0}]}, 'MulticurrencyCollectionResponseExchangeRateNoPaging')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let multicurrency_collection_response_exchange_rate_no_paging_ref01_data = Object.values(setup.data.existing.multicurrency_collection_response_exchange_rate_no_paging)[0]

    // LIST
    const multicurrency_collection_response_exchange_rate_no_paging_ref01_ent = client.MulticurrencyCollectionResponseExchangeRateNoPaging()
    const multicurrency_collection_response_exchange_rate_no_paging_ref01_match = {}

    const multicurrency_collection_response_exchange_rate_no_paging_ref01_list = (await multicurrency_collection_response_exchange_rate_no_paging_ref01_ent.list(multicurrency_collection_response_exchange_rate_no_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/multicurrency_collection_response_exchange_rate_no_paging/MulticurrencyCollectionResponseExchangeRateNoPagingTestData.json')

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
    ['multicurrency_collection_response_exchange_rate_no_paging01','multicurrency_collection_response_exchange_rate_no_paging02','multicurrency_collection_response_exchange_rate_no_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_NO_PAGING_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_NO_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_COLLECTION_RESPONSE_EXCHANGE_RATE_NO_PAGING_ENTID']
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
  
