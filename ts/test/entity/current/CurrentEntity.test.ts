

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotSettingsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CurrentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.Current()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'current.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversionRate":{"a":true,"h":"Conversion Rate","n":"conversionRate","r":true,"sh":"The conversion rate between the to and from currency code of this exchange rate.","t":"`$NUMBER`","key$":"conversionRate","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date the exchange rate was created.","t":"`$STRING`","key$":"createdAt","index$":1},"effectiveAt":{"a":true,"fo":"date-time","h":"Effective At","n":"effectiveAt","r":true,"sh":"The date the exchange rate is in effect.","t":"`$STRING`","key$":"effectiveAt","index$":2},"fromCurrencyCode":{"a":true,"h":"From Currency Code","n":"fromCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.","t":"`$STRING`","key$":"fromCurrencyCode","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"A unique identifier for the exchange rate","t":"`$STRING`","key$":"id","index$":4},"toCurrencyCode":{"a":true,"h":"To Currency Code","n":"toCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.","t":"`$STRING`","key$":"toCurrencyCode","index$":5},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"The date the exchange rate was last updated.","t":"`$STRING`","key$":"updatedAt","index$":6},"visibleInUI":{"a":true,"h":"Visible In Ui","n":"visibleInUI","r":true,"sh":"This indicates if the exchange rate is shown in the MultiCurrency settings page.","t":"`$BOOLEAN`","key$":"visibleInUI","index$":7}},"id":{"field":"id","name":"id"},"name":"current","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /settings/currencies/2026-09/exchange-rates/current","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/settings/currencies/2026-09/exchange-rates/current","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"exchange-rates"},{"lit":"current"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"current","name__orig":"current","Name":"Current","name_":"current","name-":"current","NAME":"CURRENT","index$":3}, {"active":true,"entity":"current","key$":"BasicCurrentFlow","kind":"basic","name":"BasicCurrentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"current_ref01"}}],"index$":0}]}, 'Current', {"GET /settings/currencies/2026-09/exchange-rates/current":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let current_ref01_data = Object.values(setup.data.existing.current)[0] as any

    // LIST
    const current_ref01_ent = client.Current()
    const current_ref01_match: any = {}

    const current_ref01_list = (await current_ref01_ent.list(current_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/current/CurrentTestData.json')

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
    ['current01','current02','current03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_CURRENT_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_CURRENT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_CURRENT_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
