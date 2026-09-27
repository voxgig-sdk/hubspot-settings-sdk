
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


describe('TeamsCollectionResponseTeamMemberResponseForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.TeamsCollectionResponseTeamMemberResponseForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of membership the user has in the team.","t":"`$STRING`","key$":"type","index$":0},"userId":{"a":true,"h":"User Id","n":"userId","r":true,"sh":"The unique identifier for the user, represented as a string.","t":"`$STRING`","key$":"userId","index$":1}},"name":"teams_collection_response_team_member_response_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /settings/teams/2026-09/{teamId}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/settings/teams/2026-09/{teamId}/members","q":{"exist":["after","limit","team_id"]},"r":{"param":{"teamId":"team_id"}},"s":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"teams_collection_response_team_member_response_forward_paging","name__orig":"teams_collection_response_team_member_response_forward_paging","Name":"TeamsCollectionResponseTeamMemberResponseForwardPaging","name_":"teams_collection_response_team_member_response_forward_paging","name-":"teams-collection-response-team-member-response-forward-paging","NAME":"TEAMS_COLLECTION_RESPONSE_TEAM_MEMBER_RESPONSE_FORWARD_PAGING","index$":11}, {"active":true,"entity":"teams_collection_response_team_member_response_forward_paging","key$":"BasicTeamsCollectionResponseTeamMemberResponseForwardPagingFlow","kind":"basic","name":"BasicTeamsCollectionResponseTeamMemberResponseForwardPagingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"team_id":"team01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"teams_collection_response_team_member_response_forward_paging_ref01"}}],"index$":0}]}, 'TeamsCollectionResponseTeamMemberResponseForwardPaging', {"GET /settings/teams/2026-09/{teamId}/members":{"protocol":"http","parameters":[{"name":"teamId","in":"path","description":"The unique identifier of the team whose members are being retrieved.","required":true,"style":"simple","explode":false,"schema":{"type":"string","example":null},"index$":0},{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource, returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":1},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let teams_collection_response_team_member_response_forward_paging_ref01_data = Object.values(setup.data.existing.teams_collection_response_team_member_response_forward_paging)[0]

    // LIST
    const teams_collection_response_team_member_response_forward_paging_ref01_ent = client.TeamsCollectionResponseTeamMemberResponseForwardPaging()
    const teams_collection_response_team_member_response_forward_paging_ref01_match = {}
    teams_collection_response_team_member_response_forward_paging_ref01_match['team_id'] = setup.idmap['team01']

    const teams_collection_response_team_member_response_forward_paging_ref01_list = (await teams_collection_response_team_member_response_forward_paging_ref01_ent.list(teams_collection_response_team_member_response_forward_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/teams_collection_response_team_member_response_forward_paging/TeamsCollectionResponseTeamMemberResponseForwardPagingTestData.json')

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
    ['teams_collection_response_team_member_response_forward_paging01','teams_collection_response_team_member_response_forward_paging02','teams_collection_response_team_member_response_forward_paging03','team01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_TEAMS_COLLECTION_RESPONSE_TEAM_MEMBER_RESPONSE_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_TEAMS_COLLECTION_RESPONSE_TEAM_MEMBER_RESPONSE_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_TEAMS_COLLECTION_RESPONSE_TEAM_MEMBER_RESPONSE_FORWARD_PAGING_ENTID']
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
  
