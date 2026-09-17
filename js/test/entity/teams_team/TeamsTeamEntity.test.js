
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

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":true,"short":"The unique identifier for the team, represented as a string.","type":"`$STRING`","index$":0},{"active":true,"name":"members","req":true,"short":"An array of team members to be assigned to the new team.","type":"`$ARRAY`","index$":1},{"active":true,"name":"name","req":true,"short":"The name of the team, represented as a string.","type":"`$STRING`","index$":2},{"active":true,"name":"parentTeamId","op":{"update":{"req":true,"type":"`$OBJECT`"}},"req":false,"short":"The unique identifier of the parent team, if applicable, represented as a string.","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"teams_team","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /settings/teams/2026-09","json":"{\"operationId\":\"post-/settings/teams/2026-09\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"members\":{\"description\":\"An array of team members to be assigned to the new team. Each member is represented by a TeamMemberAssignment object. This is a required field.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"type\":{\"description\":\"The type of team member assignment. It is a string and can be either 'DEFAULT' or 'EXTRA'.\",\"enum\":[\"DEFAULT\",\"EXTRA\"],\"example\":null,\"type\":\"string\"},\"userId\":{\"description\":\"The unique identifier for the user being assigned to the team. It is a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"type\",\"userId\"],\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the team to be created. This is a required field and must be a string.\",\"example\":null,\"type\":\"string\"},\"parentTeamId\":{\"description\":\"The unique identifier of the parent team, if the new team is a sub-team. This is an optional field and must be a string if provided.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"members\",\"name\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"id\":{\"description\":\"The unique identifier for the team, represented as a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the team, represented as a string.\",\"example\":null,\"type\":\"string\"},\"parentTeamId\":{\"description\":\"The unique identifier of the parent team, if applicable, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"}}},\"description\":\"successful operation\",\"headers\":{\"Location\":{\"description\":\"URL of the newly created resource\",\"explode\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}}},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object containing context about the error condition. It includes additional properties where each is an array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, formatted as a UUID. This should be included with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs, providing documentation about the error or recommended remediation steps. It is an object with string properties.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more detailed information about the error. It is a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"settings.users.teams.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/settings/teams/2026-09","segments":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"team_id","orig":"team_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /settings/teams/2026-09/{teamId}","json":"{\"operationId\":\"get-/settings/teams/2026-09/{teamId}\",\"parameters\":[{\"description\":\"The unique identifier of the team to retrieve.\",\"explode\":false,\"in\":\"path\",\"name\":\"teamId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"id\":{\"description\":\"The unique identifier for the team, represented as a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the team, represented as a string.\",\"example\":null,\"type\":\"string\"},\"parentTeamId\":{\"description\":\"The unique identifier of the parent team, if applicable, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object containing context about the error condition. It includes additional properties where each is an array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, formatted as a UUID. This should be included with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs, providing documentation about the error or recommended remediation steps. It is an object with string properties.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more detailed information about the error. It is a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"settings.users.teams.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/settings/teams/2026-09/{teamId}","rename":{"param":{"teamId":"team_id"}},"segments":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"}],"select":{"exist":["team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"team_id","orig":"team_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PATCH /settings/teams/2026-09/{teamId}","json":"{\"operationId\":\"patch-/settings/teams/2026-09/{teamId}\",\"parameters\":[{\"description\":\"The unique identifier of the team to update.\",\"explode\":false,\"in\":\"path\",\"name\":\"teamId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"name\":{\"description\":\"An object representing the new name for the team.\",\"example\":null,\"properties\":{},\"type\":\"object\"},\"parentTeamId\":{\"description\":\"An object representing the ID of the parent team to which this team will be associated.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"name\",\"parentTeamId\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"id\":{\"description\":\"The unique identifier for the team, represented as a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the team, represented as a string.\",\"example\":null,\"type\":\"string\"},\"parentTeamId\":{\"description\":\"The unique identifier of the parent team, if applicable, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object containing context about the error condition. It includes additional properties where each is an array of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, formatted as a UUID. This should be included with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs, providing documentation about the error or recommended remediation steps. It is an object with string properties.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more detailed information about the error. It is a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"settings.users.teams.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/settings/teams/2026-09/{teamId}","rename":{"param":{"teamId":"team_id"}},"segments":[{"lit":"settings"},{"lit":"teams"},{"lit":"2026-09"},{"var":"team_id"}],"select":{"exist":["team_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["2026_09"]]},"key$":"teams_team","name__orig":"teams_team","Name":"TeamsTeam","name_":"teams_team","name-":"teams-team","NAME":"TEAMS_TEAM","index$":13}, {"active":true,"entity":"teams_team","key$":"BasicTeamsTeamFlow","kind":"basic","name":"BasicTeamsTeamFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"teams_team_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"teams_team_ref01","srcdatavar":"teams_team_ref01_data","suffix":"_up0","textfield":"name"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_team_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"teams_team_ref01","srcdatavar":"teams_team_ref01_data","suffix":"_dt0"},"match":{"id":"teams_team01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-teams_team_ref01"}}],"index$":2}]}, 'TeamsTeam')
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
    const teams_team_ref01_data_up0 = {}
    teams_team_ref01_data_up0.id = teams_team_ref01_data.id

    const teams_team_ref01_markdef_up0 = { name: 'name', value: 'Mark01-teams_team_ref01_' + setup.now }
    teams_team_ref01_data_up0 [teams_team_ref01_markdef_up0.name] = teams_team_ref01_markdef_up0.value

    const teams_team_ref01_resdata_up0 = (await teams_team_ref01_ent.update(teams_team_ref01_data_up0)).data()
    assert(teams_team_ref01_resdata_up0.id === teams_team_ref01_data_up0.id)

    assert(teams_team_ref01_resdata_up0[teams_team_ref01_markdef_up0.name] === teams_team_ref01_markdef_up0.value)


    // LOAD
    const teams_team_ref01_match_dt0 = {}
    teams_team_ref01_match_dt0.id = teams_team_ref01_data.id
    const teams_team_ref01_data_dt0 = (await teams_team_ref01_ent.load(teams_team_ref01_match_dt0)).data()
    assert(teams_team_ref01_data_dt0.id === teams_team_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
    ['teams_team01','teams_team02','teams_team03','2026_0901','2026_0902','2026_0903'],
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
  
