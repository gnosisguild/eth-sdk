import { expect } from 'earljs'
import { JsonRpcProvider } from 'ethers'

import { EthSdkConfig } from '../config'
import { createEthSdkConfig } from '../config'
import { getRpcProvider } from './getRpcProvider'
import { UserProvidedNetworkSymbol } from './networks'

describe(getRpcProvider.name, () => {
  const config = createEthSdkConfig({ contracts: {} })

  it('defaults to a built-in URL', () => {
    const provider = getRpcProvider(config, 'mainnet') as JsonRpcProvider

    expect(provider._getConnection().url).toEqual('https://mainnet.infura.io/v3/0993a4f4500c4fff88649d28b331898c')
  })

  it('uses the RPC url from config', () => {
    const cfg: EthSdkConfig = {
      ...config,
      rpc: { sepolia: 'https://sepolia.test', polygon: 'https://polygonMumbai.test' },
    }

    let provider = getRpcProvider(cfg, 'sepolia') as JsonRpcProvider

    expect(provider._getConnection().url).toEqual('https://sepolia.test')

    provider = getRpcProvider(cfg, 'polygon') as JsonRpcProvider

    expect(provider._getConnection().url).toEqual('https://polygonMumbai.test')
  })

  it('returns null when there is no RPC URL for given network', () => {
    const provider = getRpcProvider(config, UserProvidedNetworkSymbol('user-provided'))

    expect(provider).toEqual(null)
  })
})
