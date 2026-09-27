
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


describe('UserProvisioningPublicSeatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.UserProvisioningPublicSeat()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A string providing additional details about the seat.","t":"`$STRING`","key$":"description","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the seat.","t":"`$STRING`","key$":"name","index$":1},"remainingSeats":{"a":true,"fo":"int32","h":"Remaining Seats","n":"remainingSeats","r":false,"sh":"An integer indicating the number of seats that are still available.","t":"`$INTEGER`","key$":"remainingSeats","index$":2}},"name":"user_provisioning_public_seat","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /settings/users/2026-09/seats","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/settings/users/2026-09/seats","q":{},"r":{},"s":[{"lit":"settings"},{"lit":"users"},{"lit":"2026-09"},{"lit":"seats"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_provisioning_public_seat","name__orig":"user_provisioning_public_seat","Name":"UserProvisioningPublicSeat","name_":"user_provisioning_public_seat","name-":"user-provisioning-public-seat","NAME":"USER_PROVISIONING_PUBLIC_SEAT","index$":19}, {"active":true,"entity":"user_provisioning_public_seat","key$":"BasicUserProvisioningPublicSeatFlow","kind":"basic","name":"BasicUserProvisioningPublicSeatFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"user_provisioning_public_seat_ref01"}}],"index$":0}]}, 'UserProvisioningPublicSeat', {"GET /settings/users/2026-09/seats":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_provisioning_public_seat_ref01_data = Object.values(setup.data.existing.user_provisioning_public_seat)[0]

    // LIST
    const user_provisioning_public_seat_ref01_ent = client.UserProvisioningPublicSeat()
    const user_provisioning_public_seat_ref01_match = {}

    const user_provisioning_public_seat_ref01_list = (await user_provisioning_public_seat_ref01_ent.list(user_provisioning_public_seat_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/user_provisioning_public_seat/UserProvisioningPublicSeatTestData.json')

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
    ['user_provisioning_public_seat01','user_provisioning_public_seat02','user_provisioning_public_seat03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_SEAT_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_SEAT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_SEAT_ENTID']
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
  
