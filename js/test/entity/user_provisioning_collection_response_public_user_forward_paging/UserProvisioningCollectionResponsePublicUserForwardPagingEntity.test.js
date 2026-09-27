
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


describe('UserProvisioningCollectionResponsePublicUserForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.UserProvisioningCollectionResponsePublicUserForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"h":"Email","n":"email","r":true,"sh":"The email address of the user.","t":"`$STRING`","key$":"email","index$":0},"firstName":{"a":true,"h":"First Name","n":"firstName","r":false,"sh":"The first name of the user, represented as a string.","t":"`$STRING`","key$":"firstName","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier for the user, represented as a string.","t":"`$STRING`","key$":"id","index$":2},"lastName":{"a":true,"h":"Last Name","n":"lastName","r":false,"sh":"The last name of the user, represented as a string.","t":"`$STRING`","key$":"lastName","index$":3},"primaryTeamId":{"a":true,"h":"Primary Team Id","n":"primaryTeamId","r":false,"sh":"The ID of the primary team to which the user belongs, represented as a string.","t":"`$STRING`","key$":"primaryTeamId","index$":4},"roleId":{"a":true,"h":"Role Id","n":"roleId","r":false,"sh":"A string representing a single role ID assigned to the user.","t":"`$STRING`","key$":"roleId","index$":5},"roleIds":{"a":true,"h":"Role Ids","n":"roleIds","r":true,"sh":"An array of strings representing the IDs of the roles assigned to the user.","t":"`$ARRAY`","key$":"roleIds","index$":6},"seatNames":{"a":true,"h":"Seat Names","n":"seatNames","r":false,"sh":"An array of strings representing the names of seats assigned to the user.","t":"`$ARRAY`","key$":"seatNames","index$":7},"secondaryTeamIds":{"a":true,"h":"Secondary Team Ids","n":"secondaryTeamIds","r":false,"sh":"An array of strings representing the IDs of secondary teams to which the user is associated.","t":"`$ARRAY`","key$":"secondaryTeamIds","index$":8},"sendWelcomeEmail":{"a":true,"h":"Send Welcome Email","n":"sendWelcomeEmail","r":false,"sh":"A boolean indicating whether a welcome email should be sent to the user.","t":"`$BOOLEAN`","key$":"sendWelcomeEmail","index$":9},"superAdmin":{"a":true,"h":"Super Admin","n":"superAdmin","r":true,"sh":"A boolean indicating whether the user has super admin privileges.","t":"`$BOOLEAN`","key$":"superAdmin","index$":10}},"id":{"field":"id","name":"id"},"name":"user_provisioning_collection_response_public_user_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /settings/users/2026-09","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/settings/users/2026-09","q":{"exist":["after","limit"]},"r":{},"s":[{"lit":"settings"},{"lit":"users"},{"lit":"2026-09"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_provisioning_collection_response_public_user_forward_paging","name__orig":"user_provisioning_collection_response_public_user_forward_paging","Name":"UserProvisioningCollectionResponsePublicUserForwardPaging","name_":"user_provisioning_collection_response_public_user_forward_paging","name-":"user-provisioning-collection-response-public-user-forward-paging","NAME":"USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_USER_FORWARD_PAGING","index$":17}, {"active":true,"entity":"user_provisioning_collection_response_public_user_forward_paging","key$":"BasicUserProvisioningCollectionResponsePublicUserForwardPagingFlow","kind":"basic","name":"BasicUserProvisioningCollectionResponsePublicUserForwardPagingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"user_provisioning_collection_response_public_user_forward_paging_ref01"}}],"index$":0}]}, 'UserProvisioningCollectionResponsePublicUserForwardPaging', {"GET /settings/users/2026-09":{"protocol":"http","parameters":[{"name":"after","in":"query","description":"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":0},{"name":"limit","in":"query","description":"The maximum number of results to display per page.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_provisioning_collection_response_public_user_forward_paging_ref01_data = Object.values(setup.data.existing.user_provisioning_collection_response_public_user_forward_paging)[0]

    // LIST
    const user_provisioning_collection_response_public_user_forward_paging_ref01_ent = client.UserProvisioningCollectionResponsePublicUserForwardPaging()
    const user_provisioning_collection_response_public_user_forward_paging_ref01_match = {}

    const user_provisioning_collection_response_public_user_forward_paging_ref01_list = (await user_provisioning_collection_response_public_user_forward_paging_ref01_ent.list(user_provisioning_collection_response_public_user_forward_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/user_provisioning_collection_response_public_user_forward_paging/UserProvisioningCollectionResponsePublicUserForwardPagingTestData.json')

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
    ['user_provisioning_collection_response_public_user_forward_paging01','user_provisioning_collection_response_public_user_forward_paging02','user_provisioning_collection_response_public_user_forward_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_USER_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_USER_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_USER_FORWARD_PAGING_ENTID']
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
  
