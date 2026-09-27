
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


describe('TeamsTeamMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.TeamsTeamMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of team member assignment.","t":"`$STRING`","key$":"type","index$":0},"userId":{"a":true,"h":"User Id","n":"userId","r":true,"sh":"The unique identifier for the user being assigned to the team.","t":"`$STRING`","key$":"userId","index$":1}},"name":"teams_team_member","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /settings/teams/2026-09/{teamId}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/settings/teams/2026-09/{teamId}/members","q":{"exist":["team_id"]},"r":{"param":{"teamId":"team_id"}},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"teams_team_member","name__orig":"teams_team_member","Name":"TeamsTeamMember","name_":"teams_team_member","name-":"teams-team-member","NAME":"TEAMS_TEAM_MEMBER","index$":14}, {"active":true,"entity":"teams_team_member","key$":"BasicTeamsTeamMemberFlow","kind":"basic","name":"BasicTeamsTeamMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_team_member_ref01"},"m":{"team_id":"team01"},"o":"create","s":[],"v":[],"index$":0}]}, 'TeamsTeamMember', {"POST /settings/teams/2026-09/{teamId}/members":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["type","userId"],"type":"object","properties":{"type":{"type":"string","description":"The type of team member assignment. It is a string and can be either 'DEFAULT' or 'EXTRA'.","example":null,"enum":["DEFAULT","EXTRA"],"key$":"type"},"userId":{"type":"string","description":"The unique identifier for the user being assigned to the team. It is a string.","example":null,"key$":"userId"}},"example":null,"x-ref":"#/components/schemas/TeamsTeamMemberAssignment","index$":1},"example":null}},"required":true},"parameters":[{"name":"teamId","in":"path","description":"The unique identifier of the team to which members will be added.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const teams_team_member_ref01_ent = client.TeamsTeamMember()
    let teams_team_member_ref01_data = setup.data.new.teams_team_member['teams_team_member_ref01']
    teams_team_member_ref01_data['team_id'] = setup.idmap['team01']

    teams_team_member_ref01_data = (await teams_team_member_ref01_ent.create(teams_team_member_ref01_data)).data()
    assert(null != teams_team_member_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/teams_team_member/TeamsTeamMemberTestData.json')

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
    ['teams_team_member01','teams_team_member02','teams_team_member03','team01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_MEMBER_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_MEMBER_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_MEMBER_ENTID']
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
  
