

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


describe('TaxRateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.TaxRate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tax_rate.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"sh":"Indicates whether the tax rate group is currently active.","t":"`$BOOLEAN`","key$":"active","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date and time when the tax rate was created.","t":"`$STRING`","key$":"createdAt","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the tax rate.","t":"`$STRING`","key$":"id","index$":2},"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"The display label for the tax rate.","t":"`$STRING`","key$":"label","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the tax rate.","t":"`$STRING`","key$":"name","index$":4},"percentageRate":{"a":true,"h":"Percentage Rate","n":"percentageRate","r":true,"sh":"The percentage rate applied.","t":"`$NUMBER`","key$":"percentageRate","index$":5},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"The date and time when the tax rate was last updated.","t":"`$STRING`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"tax_rate","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /tax-rates/2026-09/tax-rates","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/tax-rates/2026-09/tax-rates","q":{"exist":["active","after","limit"]},"r":{},"s":[{"lit":"tax-rates"},{"lit":"2026-09"},{"lit":"tax-rates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /tax-rates/2026-09/tax-rates/{taxRateGroupId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"tax_rate_group_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tax-rates/2026-09/tax-rates/{taxRateGroupId}","q":{"exist":["id"]},"r":{"param":{"taxRateGroupId":"id"}},"s":[{"lit":"tax-rates"},{"lit":"2026-09"},{"lit":"tax-rates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tax_rate","name__orig":"tax_rate","Name":"TaxRate","name_":"tax_rate","name-":"tax-rate","NAME":"TAX_RATE","index$":9}, {"active":true,"entity":"tax_rate","key$":"BasicTaxRateFlow","kind":"basic","name":"BasicTaxRateFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tax_rate_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"tax_rate_ref01","srcdatavar":"tax_rate_ref01_data","suffix":"_dt0"},"m":{"id":"tax_rate01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tax_rate_ref01"}}],"index$":1}]}, 'TaxRate', {"GET /tax-rates/2026-09/tax-rates":{"protocol":"http","parameters":[{"name":"active","in":"query","description":"A boolean to filter results by their active status.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":0},{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":1},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":2}]},"GET /tax-rates/2026-09/tax-rates/{taxRateGroupId}":{"protocol":"http","parameters":[{"name":"taxRateGroupId","in":"path","description":"The unique identifier of the tax rate group to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tax_rate_ref01_data = Object.values(setup.data.existing.tax_rate)[0] as any

    // LIST
    const tax_rate_ref01_ent = client.TaxRate()
    const tax_rate_ref01_match: any = {}

    const tax_rate_ref01_list = (await tax_rate_ref01_ent.list(tax_rate_ref01_match)).map((e: any) => e.data())


    // LOAD
    const tax_rate_ref01_match_dt0: any = {}
    tax_rate_ref01_match_dt0.id = tax_rate_ref01_data.id
    const tax_rate_ref01_data_dt0 = (await tax_rate_ref01_ent.load(tax_rate_ref01_match_dt0)).data()
    assert(tax_rate_ref01_data_dt0.id === tax_rate_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tax_rate/TaxRateTestData.json')

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
    ['tax_rate01','tax_rate02','tax_rate03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_TAX_RATE_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_TAX_RATE_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_TAX_RATE_ENTID']
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
  
