import { JsonRpcProvider, Provider } from 'ethers'

import { EthSdkConfig, RpcURLs } from '../config'
import { NetworkSymbol } from './networks'

const INFURA_PROJECT_URL = '0993a4f4500c4fff88649d28b331898c'

const rpcProviders: RpcURLs = {
  mainnet: `https://mainnet.infura.io/v3/${INFURA_PROJECT_URL}`,
  holesky: `https://holesky.infura.io/v3/${INFURA_PROJECT_URL}`,
  sepolia: `https://sepolia.infura.io/v3/${INFURA_PROJECT_URL}`,
}

export function getRpcProvider(config: EthSdkConfig, network: NetworkSymbol): RpcProvider | null {
  const rpcUrl = config.rpc[network] || rpcProviders[network]

  return rpcUrl ? new JsonRpcProvider(rpcUrl) : null
}

export type RpcProvider = Pick<Provider, 'getCode' | 'getStorage' | 'call'>

export type GetRpcProvider = typeof getRpcProvider
