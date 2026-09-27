
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


describe('UnsupportedCurrencyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.UnsupportedCurrency()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"currencyCode":{"a":true,"h":"Currency Code","n":"currencyCode","r":true,"sh":"The three-letter code representing a specific currency (ex.","t":"`$STRING`","key$":"currencyCode","index$":0},"currencyName":{"a":true,"h":"Currency Name","n":"currencyName","r":true,"sh":"The full name of the currency (ex.","t":"`$STRING`","key$":"currencyName","index$":1}},"name":"unsupported_currency","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /settings/currencies/2026-09/central-fx-rates/unsupported-currencies","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/settings/currencies/2026-09/central-fx-rates/unsupported-currencies","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"central-fx-rates"},{"lit":"unsupported-currencies"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"unsupported_currency","name__orig":"unsupported_currency","Name":"UnsupportedCurrency","name_":"unsupported_currency","name-":"unsupported-currency","NAME":"UNSUPPORTED_CURRENCY","index$":15}, {"active":true,"entity":"unsupported_currency","key$":"BasicUnsupportedCurrencyFlow","kind":"basic","name":"BasicUnsupportedCurrencyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"unsupported_currency_ref01"}}],"index$":0}]}, 'UnsupportedCurrency', {"GET /settings/currencies/2026-09/central-fx-rates/unsupported-currencies":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let unsupported_currency_ref01_data = Object.values(setup.data.existing.unsupported_currency)[0]

    // LIST
    const unsupported_currency_ref01_ent = client.UnsupportedCurrency()
    const unsupported_currency_ref01_match = {}

    const unsupported_currency_ref01_list = (await unsupported_currency_ref01_ent.list(unsupported_currency_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/unsupported_currency/UnsupportedCurrencyTestData.json')

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
    ['unsupported_currency01','unsupported_currency02','unsupported_currency03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_UNSUPPORTED_CURRENCY_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_UNSUPPORTED_CURRENCY_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_UNSUPPORTED_CURRENCY_ENTID']
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
  
