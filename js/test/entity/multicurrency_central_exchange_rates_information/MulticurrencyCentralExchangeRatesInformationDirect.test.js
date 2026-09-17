
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


const { HubspotSettingsSDK } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
} = require('../../utility')


describe('MulticurrencyCentralExchangeRatesInformationDirect', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_SETTINGS_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new HubspotSettingsSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-load-multicurrency_central_exchange_rates_information', async (t) => {
    if (liveScenariosActive()) { t.skip('Covered by live operation scenarios'); return }
    const setup = directSetup({ id: 'direct01' })
    const { client, calls } = setup

    const params = {}
    if (!setup.live) {

    }

    const result = await client.direct({
      path: 'settings/currencies/2026-09/central-fx-rates/information',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(setup.live ? result.status >= 200 && result.status < 300 : result.status === 200)
    assert(null != result.data)

    if (!setup.live) {
      assert(result.data.id === 'direct01')
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
    }
  })

})



function liveScenariosActive() { return false && process.env.HUBSPOT_SETTINGS_TEST_LIVE === 'TRUE' }
function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'HUBSPOT_SETTINGS_TEST_MULTICURRENCY_CENTRAL_EXCHANGE_RATES_INFORMATION_ENTID': {},
    'HUBSPOT_SETTINGS_TEST_LIVE': 'FALSE',
    'HUBSPOT_SETTINGS_APIKEY': '',
  })

  const live = 'TRUE' === env.HUBSPOT_SETTINGS_TEST_LIVE

  if (live) {
    // Merged so the generated fields win: sdk-test-control.json's
    // test.client.options adds to the live client, it does not redirect it.
    const client = new HubspotSettingsSDK(
      Object.assign({}, liveClientOptions(), {
      apikey: env.HUBSPOT_SETTINGS_APIKEY,
      }))

    let idmap = env['HUBSPOT_SETTINGS_TEST_MULTICURRENCY_CENTRAL_EXCHANGE_RATES_INFORMATION_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url, init) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new HubspotSettingsSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} }
}
  
