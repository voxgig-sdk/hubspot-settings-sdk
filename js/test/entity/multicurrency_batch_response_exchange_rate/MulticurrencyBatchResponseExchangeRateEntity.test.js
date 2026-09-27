
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


describe('MulticurrencyBatchResponseExchangeRateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.MulticurrencyBatchResponseExchangeRate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completedAt":{"a":true,"fo":"date-time","h":"Completed At","n":"completedAt","r":true,"sh":"The datetime the response was completed","t":"`$STRING`","key$":"completedAt","index$":0},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":true,"sh":"An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate.","t":"`$ARRAY`","key$":"inputs","index$":1},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"The link to the next page with exchange rates.","t":"`$OBJECT`","key$":"links","index$":2},"requestedAt":{"a":true,"fo":"date-time","h":"Requested At","n":"requestedAt","r":false,"sh":"The datetime the of the request.","t":"`$STRING`","key$":"requestedAt","index$":3},"results":{"a":true,"h":"Results","n":"results","r":true,"sh":"An array of exchange rate objects that represent the results of the batch operation.","t":"`$ARRAY`","key$":"results","index$":4},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":true,"sh":"The datetime the of the request.","t":"`$STRING`","key$":"startedAt","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of the response (e.g.","t":"`$STRING`","key$":"status","index$":6}},"name":"multicurrency_batch_response_exchange_rate","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /settings/currencies/2026-09/exchange-rates/batch/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/settings/currencies/2026-09/exchange-rates/batch/create","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"lit":"batch"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /settings/currencies/2026-09/exchange-rates/batch/read","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/settings/currencies/2026-09/exchange-rates/batch/read","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"lit":"batch"},{"lit":"read"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /settings/currencies/2026-09/exchange-rates/batch/update","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/settings/currencies/2026-09/exchange-rates/batch/update","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"lit":"batch"},{"lit":"update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"multicurrency_batch_response_exchange_rate","name__orig":"multicurrency_batch_response_exchange_rate","Name":"MulticurrencyBatchResponseExchangeRate","name_":"multicurrency_batch_response_exchange_rate","name-":"multicurrency-batch-response-exchange-rate","NAME":"MULTICURRENCY_BATCH_RESPONSE_EXCHANGE_RATE","index$":5}, {"active":true,"entity":"multicurrency_batch_response_exchange_rate","key$":"BasicMulticurrencyBatchResponseExchangeRateFlow","kind":"basic","name":"BasicMulticurrencyBatchResponseExchangeRateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"multicurrency_batch_response_exchange_rate_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'MulticurrencyBatchResponseExchangeRate', {"POST /settings/currencies/2026-09/exchange-rates/batch/create":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. This includes properties like fromCurrencyCode, conversionRate, and effectiveAt.","example":null,"items":{"required":["conversionRate","fromCurrencyCode"],"type":"object","properties":{"conversionRate":{"type":"number","description":"The conversion rate between the to and from currency code of this exchange rate.","example":null,"key$":"conversionRate"},"effectiveAt":{"type":"string","description":"The date the exchange rate is in effect.","format":"date-time","example":null,"key$":"effectiveAt"},"fromCurrencyCode":{"type":"string","description":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert from.","example":null,"enum":[],"key$":"fromCurrencyCode"}},"example":null,"x-ref":"#/components/schemas/MulticurrencyExchangeRateCreateRequest"},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/MulticurrencyBatchInputExchangeRateCreateRequest","index$":1},"example":null}},"required":true},"parameters":[]},"POST /settings/currencies/2026-09/exchange-rates/batch/read":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of PublicObjectId objects. Each object contains an ID string representing a unique identifier for a public object. This property is required.","example":null,"items":{"required":["id"],"type":"object","properties":{"id":{"type":"string","description":"A unique identifier for the exchange rate","example":null}},"description":"Contains the Id of a Public Object","example":null,"x-ref":"#/components/schemas/MulticurrencyPublicObjectId"},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/MulticurrencyBatchInputPublicObjectId","index$":1},"example":null}},"required":true},"parameters":[]},"POST /settings/currencies/2026-09/exchange-rates/batch/update":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of ExchangeRateUpdateRequest objects, each representing an individual exchange rate update. This array is required and contains the details of each exchange rate to be updated, including the conversion rate and the effective date.","example":null,"items":{"required":["conversionRate","id"],"type":"object","properties":{"conversionRate":{"type":"number","description":"The updated conversion rate between the to and from currency code of this exchange rate.","example":null},"effectiveAt":{"type":"string","description":"The date the exchange rate will be in effect.","format":"date-time","example":null},"id":{"type":"string","description":"A unique identifier for the exchange rate being updated","example":null}},"example":null,"x-ref":"#/components/schemas/MulticurrencyExchangeRateUpdateRequest"},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/MulticurrencyBatchInputExchangeRateUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const multicurrency_batch_response_exchange_rate_ref01_ent = client.MulticurrencyBatchResponseExchangeRate()
    let multicurrency_batch_response_exchange_rate_ref01_data = setup.data.new.multicurrency_batch_response_exchange_rate['multicurrency_batch_response_exchange_rate_ref01']

    multicurrency_batch_response_exchange_rate_ref01_data = (await multicurrency_batch_response_exchange_rate_ref01_ent.create(multicurrency_batch_response_exchange_rate_ref01_data)).data()
    assert(null != multicurrency_batch_response_exchange_rate_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/multicurrency_batch_response_exchange_rate/MulticurrencyBatchResponseExchangeRateTestData.json')

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
    ['multicurrency_batch_response_exchange_rate01','multicurrency_batch_response_exchange_rate02','multicurrency_batch_response_exchange_rate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_MULTICURRENCY_BATCH_RESPONSE_EXCHANGE_RATE_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_BATCH_RESPONSE_EXCHANGE_RATE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_BATCH_RESPONSE_EXCHANGE_RATE_ENTID']
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
  
