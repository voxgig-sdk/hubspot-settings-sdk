

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


describe('AddCurrencyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.AddCurrency()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'add_currency.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conversionRate":{"a":true,"h":"Conversion Rate","n":"conversionRate","r":true,"sh":"The conversion rate between the to and from currency code of this exchange rate.","t":"`$NUMBER`","key$":"conversionRate","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date the exchange rate was created.","t":"`$STRING`","key$":"createdAt","index$":1},"currencyCode":{"a":true,"h":"Currency Code","n":"currencyCode","r":true,"sh":"The currency code being added to the HubSpot portal for use with central exchange rates.","t":"`$STRING`","key$":"currencyCode","index$":2},"effectiveAt":{"a":true,"fo":"date-time","h":"Effective At","n":"effectiveAt","r":true,"sh":"The date the exchange rate is in effect.","t":"`$STRING`","key$":"effectiveAt","index$":3},"fromCurrencyCode":{"a":true,"h":"From Currency Code","n":"fromCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.","t":"`$STRING`","key$":"fromCurrencyCode","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"A unique identifier for the exchange rate","t":"`$STRING`","key$":"id","index$":5},"toCurrencyCode":{"a":true,"h":"To Currency Code","n":"toCurrencyCode","r":true,"sh":"This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.","t":"`$STRING`","key$":"toCurrencyCode","index$":6},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"The date the exchange rate was last updated.","t":"`$STRING`","key$":"updatedAt","index$":7},"visibleInUI":{"a":true,"h":"Visible In Ui","n":"visibleInUI","r":true,"sh":"This indicates if the exchange rate is shown in the MultiCurrency settings page.","t":"`$BOOLEAN`","key$":"visibleInUI","index$":8}},"id":{"field":"id","name":"id"},"name":"add_currency","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /settings/currencies/2026-09/central-fx-rates/add-currency","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/settings/currencies/2026-09/central-fx-rates/add-currency","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"currencies"},{"lit":"2026-09"},{"lit":"central-fx-rates"},{"lit":"add-currency"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"add_currency","name__orig":"add_currency","Name":"AddCurrency","name_":"add_currency","name-":"add-currency","NAME":"ADD_CURRENCY","index$":0}, {"active":true,"entity":"add_currency","key$":"BasicAddCurrencyFlow","kind":"basic","name":"BasicAddCurrencyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"add_currency_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'AddCurrency', {"POST /settings/currencies/2026-09/central-fx-rates/add-currency":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["currencyCode"],"type":"object","properties":{"currencyCode":{"type":"string","description":"The currency code being added to the HubSpot portal for use with central exchange rates.","example":null,"enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XUA","YER","ZAR","ZMW","ZWL"],"key$":"currencyCode"}},"example":null,"x-ref":"#/components/schemas/MulticurrencyCurrencyCreateRequest","index$":1},"example":null}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const add_currency_ref01_ent = client.AddCurrency()
    let add_currency_ref01_data = setup.data.new.add_currency['add_currency_ref01']

    add_currency_ref01_data = (await add_currency_ref01_ent.create(add_currency_ref01_data)).data()
    assert(null != add_currency_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/add_currency/AddCurrencyTestData.json')

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
    ['add_currency01','add_currency02','add_currency03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_ADD_CURRENCY_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_ADD_CURRENCY_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_ADD_CURRENCY_ENTID']
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
  
