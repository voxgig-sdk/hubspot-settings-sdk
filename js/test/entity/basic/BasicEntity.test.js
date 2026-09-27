
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


describe('BasicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.Basic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"basic","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /settings/teams/2026-09/{teamId}/members/{userId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":null,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/settings/teams/2026-09/{teamId}/members/{userId}","q":{"exist":["team_id","type","user_id"]},"r":{"param":{"teamId":"team_id","userId":"user_id"}},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"},{"lit":"members"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /settings/teams/2026-09/{teamId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/settings/teams/2026-09/{teamId}","q":{"exist":["team_id"]},"r":{"param":{"teamId":"team_id"}},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"basic","name__orig":"basic","Name":"Basic","name_":"basic","name-":"basic","NAME":"BASIC","index$":1}, {"active":true,"entity":"basic","key$":"BasicBasicFlow","kind":"basic","name":"BasicBasicFlow","param":{},"step":[]}, 'Basic', {"DELETE /settings/teams/2026-09/{teamId}/members/{userId}":{"protocol":"http","parameters":[{"name":"teamId","in":"path","description":"The unique identifier of the team from which the member will be removed.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"userId","in":"path","description":"The unique identifier of the user to be removed from the team.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":1},{"name":"type","in":"query","description":"Specifies the type of removal. Acceptable values are 'DEFAULT' or 'EXTRA'. Defaults to 'DEFAULT'.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null,"default":"DEFAULT","enum":["DEFAULT","EXTRA"]},"index$":2}]},"DELETE /settings/teams/2026-09/{teamId}":{"protocol":"http","parameters":[{"name":"teamId","in":"path","description":"The unique identifier of the team to delete.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let basic_ref01_data = Object.values(setup.data.existing.basic)[0]

  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/basic/BasicTestData.json')

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
    ['basic01','basic02','basic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_BASIC_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_BASIC_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_BASIC_ENTID']
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
  
