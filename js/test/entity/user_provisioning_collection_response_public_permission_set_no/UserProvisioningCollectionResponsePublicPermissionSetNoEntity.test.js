
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


describe('UserProvisioningCollectionResponsePublicPermissionSetNoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.UserProvisioningCollectionResponsePublicPermissionSetNo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":true,"short":"The unique identifier for the permission set.","type":"`$STRING`","index$":0},{"active":true,"name":"name","req":true,"short":"The name of the permission set.","type":"`$STRING`","index$":1},{"active":true,"name":"requiresBillingWrite","req":true,"short":"A boolean indicating whether the permission set requires billing write access.","type":"`$BOOLEAN`","index$":2}],"id":{"field":"id","name":"id"},"name":"user_provisioning_collection_response_public_permission_set_no","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /settings/users/2026-09/roles","json":"{\"operationId\":\"get-/settings/users/2026-09/roles\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of PublicPermissionSet objects, each representing a specific permission set. This property is required.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"id\":{\"description\":\"The unique identifier for the permission set. It is a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the permission set. It is a string.\",\"example\":null,\"type\":\"string\"},\"requiresBillingWrite\":{\"description\":\"A boolean indicating whether the permission set requires billing write access.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"id\",\"name\",\"requiresBillingWrite\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, providing a general classification of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"settings.users.read\"]},{\"oauth2\":[\"crm.objects.users.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/settings/users/2026-09/roles","segments":[{"lit":"settings"},{"lit":"users"},{"lit":"2026-09"},{"lit":"roles"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"user_provisioning_collection_response_public_permission_set_no","name__orig":"user_provisioning_collection_response_public_permission_set_no","Name":"UserProvisioningCollectionResponsePublicPermissionSetNo","name_":"user_provisioning_collection_response_public_permission_set_no","name-":"user-provisioning-collection-response-public-permission-set-no","NAME":"USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_PERMISSION_SET_NO","index$":16}, {"active":true,"entity":"user_provisioning_collection_response_public_permission_set_no","key$":"BasicUserProvisioningCollectionResponsePublicPermissionSetNoFlow","kind":"basic","name":"BasicUserProvisioningCollectionResponsePublicPermissionSetNoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"user_provisioning_collection_response_public_permission_set_no_ref01"}}],"index$":0}]}, 'UserProvisioningCollectionResponsePublicPermissionSetNo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_provisioning_collection_response_public_permission_set_no_ref01_data = Object.values(setup.data.existing.user_provisioning_collection_response_public_permission_set_no)[0]

    // LIST
    const user_provisioning_collection_response_public_permission_set_no_ref01_ent = client.UserProvisioningCollectionResponsePublicPermissionSetNo()
    const user_provisioning_collection_response_public_permission_set_no_ref01_match = {}

    const user_provisioning_collection_response_public_permission_set_no_ref01_list = (await user_provisioning_collection_response_public_permission_set_no_ref01_ent.list(user_provisioning_collection_response_public_permission_set_no_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/user_provisioning_collection_response_public_permission_set_no/UserProvisioningCollectionResponsePublicPermissionSetNoTestData.json')

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
    ['user_provisioning_collection_response_public_permission_set_no01','user_provisioning_collection_response_public_permission_set_no02','user_provisioning_collection_response_public_permission_set_no03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_PERMISSION_SET_NO_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_PERMISSION_SET_NO_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_COLLECTION_RESPONSE_PUBLIC_PERMISSION_SET_NO_ENTID']
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
  
