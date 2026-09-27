

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


describe('TeamsTeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.TeamsTeam()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_team.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the team, represented as a string.","t":"`$STRING`","key$":"id","index$":0},"members":{"a":true,"h":"Members","n":"members","r":true,"sh":"An array of team members to be assigned to the new team.","t":"`$ARRAY`","key$":"members","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the team, represented as a string.","t":"`$STRING`","key$":"name","index$":2},"parentTeamId":{"a":true,"h":"Parent Team Id","n":"parentTeamId","op":{"update":{"req":true,"type":"`$OBJECT`"}},"r":false,"sh":"The unique identifier of the parent team, if applicable, represented as a string.","t":"`$STRING`","key$":"parentTeamId","index$":3}},"id":{"field":"id","name":"id"},"name":"teams_team","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /settings/teams/2026-09","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/settings/teams/2026-09","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /settings/teams/2026-09/{teamId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/settings/teams/2026-09/{teamId}","q":{"exist":["team_id"]},"r":{"param":{"teamId":"team_id"}},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /settings/teams/2026-09/{teamId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/settings/teams/2026-09/{teamId}","q":{"exist":["team_id"]},"r":{"param":{"teamId":"team_id"}},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"teams_team","name__orig":"teams_team","Name":"TeamsTeam","name_":"teams_team","name-":"teams-team","NAME":"TEAMS_TEAM","index$":13}, {"active":true,"entity":"teams_team","key$":"BasicTeamsTeamFlow","kind":"basic","name":"BasicTeamsTeamFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_team_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"teams_team_ref01","srcdatavar":"teams_team_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_team_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"teams_team_ref01","srcdatavar":"teams_team_ref01_data","suffix":"_dt0"},"m":{"id":"teams_team01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_team_ref01"}}],"index$":2}]}, 'TeamsTeam', {"POST /settings/teams/2026-09":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["members","name"],"type":"object","properties":{"members":{"type":"array","description":"An array of team members to be assigned to the new team. Each member is represented by a TeamMemberAssignment object. This is a required field.","example":null,"items":{"required":["type","userId"],"type":"object","properties":{"type":{"type":"string","description":"The type of team member assignment. It is a string and can be either 'DEFAULT' or 'EXTRA'.","example":null,"enum":[],"key$":"type"},"userId":{"type":"string","description":"The unique identifier for the user being assigned to the team. It is a string.","example":null,"key$":"userId"}},"example":null,"x-ref":"#/components/schemas/TeamsTeamMemberAssignment"},"key$":"members"},"name":{"type":"string","description":"The name of the team to be created. This is a required field and must be a string.","example":null,"key$":"name"},"parentTeamId":{"type":"string","description":"The unique identifier of the parent team, if the new team is a sub-team. This is an optional field and must be a string if provided.","example":null,"key$":"parentTeamId"}},"example":null,"x-ref":"#/components/schemas/TeamsTeamCreateRequest","index$":1},"example":null}},"required":true},"parameters":[]},"GET /settings/teams/2026-09/{teamId}":{"protocol":"http","parameters":[{"name":"teamId","in":"path","description":"The unique identifier of the team to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]},"PATCH /settings/teams/2026-09/{teamId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["name","parentTeamId"],"type":"object","properties":{"name":{"type":"object","properties":{},"description":"An object representing the new name for the team.","example":null,"key$":"name"},"parentTeamId":{"type":"object","properties":{},"description":"An object representing the ID of the parent team to which this team will be associated.","example":null,"key$":"parentTeamId"}},"example":null,"x-ref":"#/components/schemas/TeamsTeamUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"teamId","in":"path","description":"The unique identifier of the team to update.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const teams_team_ref01_ent = client.TeamsTeam()
    let teams_team_ref01_data = setup.data.new.teams_team['teams_team_ref01']

    teams_team_ref01_data = (await teams_team_ref01_ent.create(teams_team_ref01_data)).data()
    assert(null != teams_team_ref01_data.id)


    // UPDATE
    const teams_team_ref01_data_up0: any = {}
    teams_team_ref01_data_up0.id = teams_team_ref01_data.id

    const teams_team_ref01_markdef_up0 = { name: 'name', value: 'Mark01-teams_team_ref01_' + setup.now }
    ;(teams_team_ref01_data_up0 as any)[teams_team_ref01_markdef_up0.name] = teams_team_ref01_markdef_up0.value

    const teams_team_ref01_resdata_up0 = (await teams_team_ref01_ent.update(teams_team_ref01_data_up0)).data()
    assert(teams_team_ref01_resdata_up0.id === teams_team_ref01_data_up0.id)

    assert((teams_team_ref01_resdata_up0 as any)[teams_team_ref01_markdef_up0.name] === teams_team_ref01_markdef_up0.value)


    // LOAD
    const teams_team_ref01_match_dt0: any = {}
    teams_team_ref01_match_dt0.id = teams_team_ref01_data.id
    const teams_team_ref01_data_dt0 = (await teams_team_ref01_ent.load(teams_team_ref01_match_dt0)).data()
    assert(teams_team_ref01_data_dt0.id === teams_team_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_team/TeamsTeamTestData.json')

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
    ['teams_team01','teams_team02','teams_team03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_TEAMS_TEAM_ENTID']
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
  
