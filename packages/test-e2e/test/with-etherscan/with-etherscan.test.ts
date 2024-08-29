import { assert, IsExact } from 'conditional-type-checks'
import { expect } from 'earljs'
import { JsonRpcProvider } from 'ethers'

import { env } from '../e2e-utils'
import { getMainnetSdk, MainnetSdk } from './sdk'
import type { Dai, Mkr, ProxyCustomImplementation, ProxyStandardStorageSlot, Uniswap, WithGasFields } from './sdk/types'

describe('with ABIs from Etherscan', () => {
  const provider = new JsonRpcProvider(env.E2E_RPC)
  const sdk = getMainnetSdk(provider)

  it('sdk works', async () => {
    expect((await sdk.tokens.dai.totalSupply()).toString()).not.toEqual('0')
    expect((await sdk.tokens.mkr.totalSupply()).toString()).not.toEqual('0')

    // assert sdk shape
    assert<IsExact<MainnetSdk, typeof sdk>>(true)
    assert<
      IsExact<
        MainnetSdk,
        {
          tokens: { dai: Dai; mkr: Mkr }
          uniswap: Uniswap
          withGasFields: WithGasFields
          proxies: {
            proxyStandardStorageSlot: ProxyStandardStorageSlot
            proxyCustomImplementation: ProxyCustomImplementation
          }
        }
      >
    >(true)
  })

  describe('following proxies', () => {
    it('fetches implementation for the standard storage slot 0x360894...', async () => {
      const contract = sdk.proxies.proxyStandardStorageSlot
      expect(await contract.name()).toEqual('1 Set Dollar Stake')
    })

    it('fetches implementation for custom proxy', async () => {
      const contract = sdk.proxies.proxyCustomImplementation

      const maxAssets = await contract.maxAssets()
      const isComptroller = await contract.isComptroller()

      expect(maxAssets > BigInt(0)).toEqual(true)
      expect(isComptroller).toEqual(true)
    })
  }).timeout(10000)
})
