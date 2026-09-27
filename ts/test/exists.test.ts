
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HubspotSettingsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HubspotSettingsSDK.test()
    equal(testsdk instanceof HubspotSettingsSDK, true,
      'HubspotSettingsSDK.test() must return a client synchronously')
  })

})
