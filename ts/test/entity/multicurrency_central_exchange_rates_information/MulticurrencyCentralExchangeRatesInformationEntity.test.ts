

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


describe('MulticurrencyCentralExchangeRatesInformationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.MulticurrencyCentralExchangeRatesInformation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'multicurrency_central_exchange_rates_information.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"centralExchangeRatesEnabled":{"a":true,"h":"Central Exchange Rates Enabled","n":"centralExchangeRatesEnabled","r":true,"sh":"Indicates if central exchange rates is enabled for the portal or not.","t":"`$BOOLEAN`","key$":"centralExchangeRatesEnabled","index$":0}},"name":"multicurrency_central_exchange_rates_information","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /settings/currencies/2026-09/central-fx-rates/information","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/settings/currencies/2026-09/central-fx-rates/information","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"central-fx-rates"},{"lit":"information"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"multicurrency_central_exchange_rates_information","name__orig":"multicurrency_central_exchange_rates_information","Name":"MulticurrencyCentralExchangeRatesInformation","name_":"multicurrency_central_exchange_rates_information","name-":"multicurrency-central-exchange-rates-information","NAME":"MULTICURRENCY_CENTRAL_EXCHANGE_RATES_INFORMATION","index$":6}, {"active":true,"entity":"multicurrency_central_exchange_rates_information","key$":"BasicMulticurrencyCentralExchangeRatesInformationFlow","kind":"basic","name":"BasicMulticurrencyCentralExchangeRatesInformationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"multicurrency_central_exchange_rates_information_ref01","srcdatavar":"multicurrency_central_exchange_rates_information_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-multicurrency_central_exchange_rates_information_ref01"}}],"index$":0}]}, 'MulticurrencyCentralExchangeRatesInformation', {"GET /settings/currencies/2026-09/central-fx-rates/information":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let multicurrency_central_exchange_rates_information_ref01_data = Object.values(setup.data.existing.multicurrency_central_exchange_rates_information)[0] as any

    // LOAD
    const multicurrency_central_exchange_rates_information_ref01_ent = client.MulticurrencyCentralExchangeRatesInformation()
    const multicurrency_central_exchange_rates_information_ref01_match_dt0: any = {}
    const multicurrency_central_exchange_rates_information_ref01_data_dt0 = (await multicurrency_central_exchange_rates_information_ref01_ent.load(multicurrency_central_exchange_rates_information_ref01_match_dt0)).data()
    assert(null != multicurrency_central_exchange_rates_information_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/multicurrency_central_exchange_rates_information/MulticurrencyCentralExchangeRatesInformationTestData.json')

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
    ['multicurrency_central_exchange_rates_information01','multicurrency_central_exchange_rates_information02','multicurrency_central_exchange_rates_information03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_MULTICURRENCY_CENTRAL_EXCHANGE_RATES_INFORMATION_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_CENTRAL_EXCHANGE_RATES_INFORMATION_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_CENTRAL_EXCHANGE_RATES_INFORMATION_ENTID']
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
  
