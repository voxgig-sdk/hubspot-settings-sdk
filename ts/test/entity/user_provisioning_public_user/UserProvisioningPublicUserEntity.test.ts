

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('UserProvisioningPublicUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotSettingsSDK.test()
    const ent = testsdk.UserProvisioningPublicUser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_SETTINGS_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_provisioning_public_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"email","req":true,"short":"The email address of the user.","type":"`$STRING`","index$":0},{"active":true,"name":"firstName","req":false,"short":"The first name of the user, represented as a string.","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier for the user, represented as a string.","type":"`$STRING`","index$":2},{"active":true,"name":"lastName","req":false,"short":"The last name of the user, represented as a string.","type":"`$STRING`","index$":3},{"active":true,"name":"primaryTeamId","req":false,"short":"The ID of the primary team to which the user belongs, represented as a string.","type":"`$STRING`","index$":4},{"active":true,"name":"roleId","req":false,"short":"A string representing a single role ID assigned to the user.","type":"`$STRING`","index$":5},{"active":true,"name":"roleIds","req":true,"short":"An array of strings representing the IDs of the roles assigned to the user.","type":"`$ARRAY`","index$":6},{"active":true,"name":"seatNames","req":false,"short":"An array of strings representing the names of seats assigned to the user.","type":"`$ARRAY`","index$":7},{"active":true,"name":"secondaryTeamIds","req":false,"short":"An array of strings representing the IDs of secondary teams to which the user is associated.","type":"`$ARRAY`","index$":8},{"active":true,"name":"sendWelcomeEmail","op":{"create":{"req":true,"type":"`$BOOLEAN`"}},"req":false,"short":"A boolean indicating whether a welcome email should be sent to the user.","type":"`$BOOLEAN`","index$":9},{"active":true,"name":"superAdmin","req":true,"short":"A boolean indicating whether the user has super admin privileges.","type":"`$BOOLEAN`","index$":10}],"id":{"field":"id","name":"id"},"name":"user_provisioning_public_user","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /settings/users/2026-09","json":"{\"operationId\":\"post-/settings/users/2026-09\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"email\":{\"description\":\"The email address of the user being provisioned. This is a required field and must be unique.\",\"example\":null,\"type\":\"string\"},\"firstName\":{\"description\":\"The first name of the user.\",\"example\":null,\"type\":\"string\"},\"lastName\":{\"description\":\"The last name of the user.\",\"example\":null,\"type\":\"string\"},\"primaryTeamId\":{\"description\":\"The identifier for the primary team to which the user belongs.\",\"example\":null,\"type\":\"string\"},\"roleId\":{\"description\":\"The identifier for the role assigned to the user.\",\"example\":null,\"type\":\"string\"},\"seatNames\":{\"description\":\"An array of seat names assigned to the user, representing different permissions or access levels.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"secondaryTeamIds\":{\"description\":\"An array of identifiers for secondary teams to which the user is associated.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"sendWelcomeEmail\":{\"description\":\"A boolean indicating whether a welcome email should be sent to the user upon provisioning. This is a required field.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"email\",\"sendWelcomeEmail\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"email\":{\"description\":\"The email address of the user. This is a required field and must be unique.\",\"example\":null,\"type\":\"string\"},\"firstName\":{\"description\":\"The first name of the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"lastName\":{\"description\":\"The last name of the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"primaryTeamId\":{\"description\":\"The ID of the primary team to which the user belongs, represented as a string.\",\"example\":null,\"type\":\"string\"},\"roleId\":{\"description\":\"A string representing a single role ID assigned to the user.\",\"example\":null,\"type\":\"string\"},\"roleIds\":{\"description\":\"An array of strings representing the IDs of the roles assigned to the user. This is a required field.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"seatNames\":{\"description\":\"An array of strings representing the names of seats assigned to the user.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"secondaryTeamIds\":{\"description\":\"An array of strings representing the IDs of secondary teams to which the user is associated.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"sendWelcomeEmail\":{\"description\":\"A boolean indicating whether a welcome email should be sent to the user.\",\"example\":null,\"type\":\"boolean\"},\"superAdmin\":{\"description\":\"A boolean indicating whether the user has super admin privileges. This is a required field.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"email\",\"id\",\"roleIds\",\"superAdmin\"],\"type\":\"object\"}}},\"description\":\"successful operation\",\"headers\":{\"Location\":{\"description\":\"URL of the newly created resource\",\"explode\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}}},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, providing a general classification of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"crm.objects.users.write\"]},{\"oauth2\":[\"settings.users.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/settings/users/2026-09","segments":[{"lit":"settings"},{"lit":"users"},{"lit":"2026-09"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"user_id","orig":"user_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":null,"kind":"query","name":"id_property","orig":"id_property","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /settings/users/2026-09/{userId}","json":"{\"operationId\":\"get-/settings/users/2026-09/{userId}\",\"parameters\":[{\"description\":\"The unique identifier of the user to retrieve.\",\"explode\":false,\"in\":\"path\",\"name\":\"userId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"Specifies the property used to identify the user. Valid values are 'USER_ID' and 'EMAIL'.\",\"explode\":true,\"in\":\"query\",\"name\":\"idProperty\",\"required\":false,\"schema\":{\"enum\":[\"EMAIL\",\"USER_ID\"],\"example\":null,\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"email\":{\"description\":\"The email address of the user. This is a required field and must be unique.\",\"example\":null,\"type\":\"string\"},\"firstName\":{\"description\":\"The first name of the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"lastName\":{\"description\":\"The last name of the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"primaryTeamId\":{\"description\":\"The ID of the primary team to which the user belongs, represented as a string.\",\"example\":null,\"type\":\"string\"},\"roleId\":{\"description\":\"A string representing a single role ID assigned to the user.\",\"example\":null,\"type\":\"string\"},\"roleIds\":{\"description\":\"An array of strings representing the IDs of the roles assigned to the user. This is a required field.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"seatNames\":{\"description\":\"An array of strings representing the names of seats assigned to the user.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"secondaryTeamIds\":{\"description\":\"An array of strings representing the IDs of secondary teams to which the user is associated.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"sendWelcomeEmail\":{\"description\":\"A boolean indicating whether a welcome email should be sent to the user.\",\"example\":null,\"type\":\"boolean\"},\"superAdmin\":{\"description\":\"A boolean indicating whether the user has super admin privileges. This is a required field.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"email\",\"id\",\"roleIds\",\"superAdmin\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, providing a general classification of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"settings.users.read\"]},{\"oauth2\":[\"crm.objects.users.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/settings/users/2026-09/{userId}","rename":{"param":{"userId":"user_id"}},"segments":[{"lit":"settings"},{"lit":"users"},{"lit":"2026-09"},{"var":"user_id"}],"select":{"exist":["id_property","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"user_id","orig":"user_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":null,"kind":"query","name":"id_property","orig":"id_property","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /settings/users/2026-09/{userId}","json":"{\"operationId\":\"put-/settings/users/2026-09/{userId}\",\"parameters\":[{\"description\":\"The unique identifier of the user to update.\",\"explode\":false,\"in\":\"path\",\"name\":\"userId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"Specifies the property to use for identifying the user. Valid values are 'USER_ID' or 'EMAIL'.\",\"explode\":true,\"in\":\"query\",\"name\":\"idProperty\",\"required\":false,\"schema\":{\"enum\":[\"EMAIL\",\"USER_ID\"],\"example\":null,\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"firstName\":{\"description\":\"The first name of the user. It is a string value.\",\"example\":null,\"type\":\"string\"},\"lastName\":{\"description\":\"The last name of the user. It is a string value.\",\"example\":null,\"type\":\"string\"},\"primaryTeamId\":{\"description\":\"The identifier for the user's primary team. It is a string value.\",\"example\":null,\"type\":\"string\"},\"roleId\":{\"description\":\"The identifier for the user's role. It is a string value.\",\"example\":null,\"type\":\"string\"},\"seatNames\":{\"description\":\"An array of seat names associated with the user. Each item in the array is a string.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"secondaryTeamIds\":{\"description\":\"An array of identifiers for the user's secondary teams. Each item in the array is a string.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"email\":{\"description\":\"The email address of the user. This is a required field and must be unique.\",\"example\":null,\"type\":\"string\"},\"firstName\":{\"description\":\"The first name of the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"lastName\":{\"description\":\"The last name of the user, represented as a string.\",\"example\":null,\"type\":\"string\"},\"primaryTeamId\":{\"description\":\"The ID of the primary team to which the user belongs, represented as a string.\",\"example\":null,\"type\":\"string\"},\"roleId\":{\"description\":\"A string representing a single role ID assigned to the user.\",\"example\":null,\"type\":\"string\"},\"roleIds\":{\"description\":\"An array of strings representing the IDs of the roles assigned to the user. This is a required field.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"seatNames\":{\"description\":\"An array of strings representing the names of seats assigned to the user.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"secondaryTeamIds\":{\"description\":\"An array of strings representing the IDs of secondary teams to which the user is associated.\",\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"sendWelcomeEmail\":{\"description\":\"A boolean indicating whether a welcome email should be sent to the user.\",\"example\":null,\"type\":\"boolean\"},\"superAdmin\":{\"description\":\"A boolean indicating whether the user has super admin privileges. This is a required field.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"email\",\"id\",\"roleIds\",\"superAdmin\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, providing a general classification of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further context.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"crm.objects.users.write\"]},{\"oauth2\":[\"settings.users.write\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"cpq.quotes.read\":\"\",\"cpq.quotes.write\":\"\",\"crm.objects.quotes.read\":\"\",\"crm.objects.quotes.write\":\"\",\"settings.currencies.read\":\"\",\"settings.currencies.write\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/settings/users/2026-09/{userId}","rename":{"param":{"userId":"user_id"}},"segments":[{"lit":"settings"},{"lit":"users"},{"lit":"2026-09"},{"var":"user_id"}],"select":{"exist":["id_property","user_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["2026_09"]]},"key$":"user_provisioning_public_user","name__orig":"user_provisioning_public_user","Name":"UserProvisioningPublicUser","name_":"user_provisioning_public_user","name-":"user-provisioning-public-user","NAME":"USER_PROVISIONING_PUBLIC_USER","index$":20}, {"active":true,"entity":"user_provisioning_public_user","key$":"BasicUserProvisioningPublicUserFlow","kind":"basic","name":"BasicUserProvisioningPublicUserFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"user_provisioning_public_user_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"user_provisioning_public_user_ref01","srcdatavar":"user_provisioning_public_user_ref01_data","suffix":"_up0","textfield":"email"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_provisioning_public_user_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"user_provisioning_public_user_ref01","srcdatavar":"user_provisioning_public_user_ref01_data","suffix":"_dt0"},"match":{"id":"user_provisioning_public_user01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_provisioning_public_user_ref01"}}],"index$":2}]}, 'UserProvisioningPublicUser')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const user_provisioning_public_user_ref01_ent = client.UserProvisioningPublicUser()
    let user_provisioning_public_user_ref01_data = setup.data.new.user_provisioning_public_user['user_provisioning_public_user_ref01']

    user_provisioning_public_user_ref01_data = (await user_provisioning_public_user_ref01_ent.create(user_provisioning_public_user_ref01_data)).data()
    assert(null != user_provisioning_public_user_ref01_data.id)


    // UPDATE
    const user_provisioning_public_user_ref01_data_up0: any = {}
    user_provisioning_public_user_ref01_data_up0.id = user_provisioning_public_user_ref01_data.id

    const user_provisioning_public_user_ref01_markdef_up0 = { name: 'email', value: 'Mark01-user_provisioning_public_user_ref01_' + setup.now }
    ;(user_provisioning_public_user_ref01_data_up0 as any)[user_provisioning_public_user_ref01_markdef_up0.name] = user_provisioning_public_user_ref01_markdef_up0.value

    const user_provisioning_public_user_ref01_resdata_up0 = (await user_provisioning_public_user_ref01_ent.update(user_provisioning_public_user_ref01_data_up0)).data()
    assert(user_provisioning_public_user_ref01_resdata_up0.id === user_provisioning_public_user_ref01_data_up0.id)

    assert((user_provisioning_public_user_ref01_resdata_up0 as any)[user_provisioning_public_user_ref01_markdef_up0.name] === user_provisioning_public_user_ref01_markdef_up0.value)


    // LOAD
    const user_provisioning_public_user_ref01_match_dt0: any = {}
    user_provisioning_public_user_ref01_match_dt0.id = user_provisioning_public_user_ref01_data.id
    const user_provisioning_public_user_ref01_data_dt0 = (await user_provisioning_public_user_ref01_ent.load(user_provisioning_public_user_ref01_match_dt0)).data()
    assert(user_provisioning_public_user_ref01_data_dt0.id === user_provisioning_public_user_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_provisioning_public_user/UserProvisioningPublicUserTestData.json')

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
    ['user_provisioning_public_user01','user_provisioning_public_user02','user_provisioning_public_user03','2026_0901','2026_0902','2026_0903'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID': idmap,
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  idmap = env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID']

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_SETTINGS_TEST_USER_PROVISIONING_PUBLIC_USER_ENTID']
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
  
