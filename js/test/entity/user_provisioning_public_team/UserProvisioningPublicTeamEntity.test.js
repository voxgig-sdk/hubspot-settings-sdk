
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


describe('UserProvisioningPublicTeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.UserProvisioningPublicTeam()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the team, represented as a string.","t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the team, represented as a string.","t":"`$STRING`","key$":"name","index$":1},"secondaryUserIds":{"a":true,"h":"Secondary User Ids","n":"secondaryUserIds","r":true,"sh":"An array of strings representing the IDs of users who are secondary members of the team.","t":"`$ARRAY`","key$":"secondaryUserIds","index$":2},"userIds":{"a":true,"h":"User Ids","n":"userIds","r":true,"sh":"An array of strings representing the IDs of users who are primary members of the team.","t":"`$ARRAY`","key$":"userIds","index$":3}},"id":{"field":"id","name":"id"},"name":"user_provisioning_public_team","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /settings/users/2026-09/teams","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/settings/users/2026-09/teams","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"users"},{"lit":"2026-09"},{"lit":"teams"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_provisioning_public_team","name__orig":"user_provisioning_public_team","Name":"UserProvisioningPublicTeam","name_":"user_provisioning_public_team","name-":"user-provisioning-public-team","NAME":"USER_PROVISIONING_PUBLIC_TEAM","index$":20}, {"active":true,"entity":"user_provisioning_public_team","key$":"BasicUserProvisioningPublicTeamFlow","kind":"basic","name":"BasicUserProvisioningPublicTeamFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"user_provisioning_public_team_ref01"}}],"index$":0}]}, 'UserProvisioningPublicTeam', {"GET /settings/users/2026-09/teams":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_provisioning_public_team_ref01_data = Object.values(setup.data.existing.user_provisioning_public_team)[0]

    // LIST
    const user_provisioning_public_team_ref01_ent = client.UserProvisioningPublicTeam()
    const user_provisioning_public_team_ref01_match = {}

    const user_provisioning_public_team_ref01_list = (await user_provisioning_public_team_ref01_ent.list(user_provisioning_public_team_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/user_provisioning_public_team/UserProvisioningPublicTeamTestData.json')

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
    ['user_provisioning_public_team01','user_provisioning_public_team02','user_provisioning_public_team03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_TEAM_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_TEAM_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_TEAM_ENTID']
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
  
