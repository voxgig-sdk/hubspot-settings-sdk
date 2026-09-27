

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


describe('TeamsBatchResponseTeamMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.TeamsBatchResponseTeamMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'teams_batch_response_team_member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completedAt":{"a":true,"fo":"date-time","h":"Completed At","n":"completedAt","r":true,"sh":"The date and time when the batch operation was completed, in ISO 8601 format.","t":"`$STRING`","key$":"completedAt","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":false,"sh":"An array of StandardError objects detailing any errors that occurred during the batch operation.","t":"`$ARRAY`","key$":"errors","index$":1},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":true,"sh":"An array of team member assignments, where each item specifies the details of a team member to be assigned.","t":"`$ARRAY`","key$":"inputs","index$":2},"links":{"a":true,"h":"Links","n":"links","r":false,"sh":"A map of link names to associated URIs providing additional information about the batch operation.","t":"`$OBJECT`","key$":"links","index$":3},"numErrors":{"a":true,"fo":"int32","h":"Num Errors","n":"numErrors","r":false,"sh":"The number of errors encountered during the batch operation.","t":"`$INTEGER`","key$":"numErrors","index$":4},"requestedAt":{"a":true,"fo":"date-time","h":"Requested At","n":"requestedAt","r":false,"sh":"The date and time when the batch operation was requested, in ISO 8601 format.","t":"`$STRING`","key$":"requestedAt","index$":5},"results":{"a":true,"h":"Results","n":"results","r":true,"sh":"An array of TeamMemberResponse objects representing the results of the batch operation.","t":"`$ARRAY`","key$":"results","index$":6},"startedAt":{"a":true,"fo":"date-time","h":"Started At","n":"startedAt","r":true,"sh":"The date and time when the batch operation started, in ISO 8601 format.","t":"`$STRING`","key$":"startedAt","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The current status of the batch operation.","t":"`$STRING`","key$":"status","index$":8}},"name":"teams_batch_response_team_member","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /settings/teams/2026-09/{teamId}/members/batch","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/settings/teams/2026-09/{teamId}/members/batch","q":{"exist":["team_id"]},"r":{"param":{"teamId":"team_id"}},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"},{"lit":"members"},{"lit":"batch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"teams_batch_response_team_member","name__orig":"teams_batch_response_team_member","Name":"TeamsBatchResponseTeamMember","name_":"teams_batch_response_team_member","name-":"teams-batch-response-team-member","NAME":"TEAMS_BATCH_RESPONSE_TEAM_MEMBER","index$":10}, {"active":true,"entity":"teams_batch_response_team_member","key$":"BasicTeamsBatchResponseTeamMemberFlow","kind":"basic","name":"BasicTeamsBatchResponseTeamMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"teams_batch_response_team_member_ref01"},"m":{"team_id":"team01"},"o":"create","s":[],"v":[],"index$":0}]}, 'TeamsBatchResponseTeamMember', {"POST /settings/teams/2026-09/{teamId}/members/batch":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"An array of team member assignments, where each item specifies the details of a team member to be assigned. Each item is of type 'TeamMemberAssignment'.","example":null,"items":{"required":["type","userId"],"type":"object","properties":{"type":{"type":"string","description":"The type of team member assignment. It is a string and can be either 'DEFAULT' or 'EXTRA'.","example":null,"enum":[],"key$":"type"},"userId":{"type":"string","description":"The unique identifier for the user being assigned to the team. It is a string.","example":null,"key$":"userId"}},"example":null,"x-ref":"#/components/schemas/TeamsTeamMemberAssignment"},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/TeamsBatchInputTeamMemberAssignment","index$":1},"example":null}},"required":true},"parameters":[{"name":"teamId","in":"path","description":"The unique identifier of the team to which members will be assigned.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const teams_batch_response_team_member_ref01_ent = client.TeamsBatchResponseTeamMember()
    let teams_batch_response_team_member_ref01_data = setup.data.new.teams_batch_response_team_member['teams_batch_response_team_member_ref01']
    teams_batch_response_team_member_ref01_data['team_id'] = setup.idmap['team01']

    teams_batch_response_team_member_ref01_data = (await teams_batch_response_team_member_ref01_ent.create(teams_batch_response_team_member_ref01_data)).data()
    assert(null != teams_batch_response_team_member_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/teams_batch_response_team_member/TeamsBatchResponseTeamMemberTestData.json')

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
    ['teams_batch_response_team_member01','teams_batch_response_team_member02','teams_batch_response_team_member03','team01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_TEAMS_BATCH_RESPONSE_TEAM_MEMBER_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_TEAMS_BATCH_RESPONSE_TEAM_MEMBER_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_TEAMS_BATCH_RESPONSE_TEAM_MEMBER_ENTID']
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
  
