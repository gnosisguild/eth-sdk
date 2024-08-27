import type { URLString } from '../../utils/utility-types'
import { NetworkID, NetworkSymbol, PredefinedNetworkSymbol, UserProvidedNetworkSymbol } from '../networks'

const makeAbiPubUrl = (networkId: NetworkID) =>
  `https://api.abi.pub/v1/chains/${networkId}/etherscan` as `http${string}`

export const predefinedExplorerEndpoints: PredefinedExplorerEndpoints = {
  mainnet: {
    url: makeAbiPubUrl(NetworkID.MAINNET),
    apiKey: '',
  },
  holesky: {
    url: makeAbiPubUrl(NetworkID.HOLESKY),
    apiKey: '',
  },
  sepolia: {
    url: makeAbiPubUrl(NetworkID.SEPOLIA),
    apiKey: '',
  },
  gnosis: {
    url: makeAbiPubUrl(NetworkID.GNOSIS),
    apiKey: '',
  },
  optimism: {
    url: makeAbiPubUrl(NetworkID.OPTIMISTIC_ETHEREUM),
    apiKey: '',
  },
  arbitrumOne: {
    url: makeAbiPubUrl(NetworkID.ARBITRUM_ONE),
    apiKey: '',
  },
  base: {
    url: makeAbiPubUrl(NetworkID.BASE),
    apiKey: '',
  },
  bsc: {
    url: makeAbiPubUrl(NetworkID.BSC),
    apiKey: '',
  },
  polygon: {
    url: makeAbiPubUrl(NetworkID.POLYGON),
    apiKey: '',
  },
  avalanche: {
    url: makeAbiPubUrl(NetworkID.AVALANCHE),
    apiKey: '',
  },
  celo: {
    url: makeAbiPubUrl(NetworkID.CELO),
    apiKey: '',
  },
}

interface PredefinedExplorerEndpoints extends Record<PredefinedNetworkSymbol, ExplorerEndpointConfig> {}

/** @internal */
export interface ExplorerEndpointConfig {
  url: URLString
  apiKey: string
}

export interface UserEtherscanURLs extends Record<UserProvidedNetworkSymbol, URLString> {}
export type UserEtherscanKeys = { [P in NetworkSymbol]?: string }
export interface UserEtherscanURLsInput extends Record<string, URLString> {}
