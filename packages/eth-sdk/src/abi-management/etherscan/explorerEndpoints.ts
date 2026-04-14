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
  sonic: {
    url: makeAbiPubUrl(NetworkID.SONIC),
    apiKey: '',
  },
  berachain: {
    url: makeAbiPubUrl(NetworkID.BERACHAIN),
    apiKey: '',
  },
  mantle: {
    url: makeAbiPubUrl(NetworkID.MANTLE),
    apiKey: '',
  },
  zkevm: {
    url: makeAbiPubUrl(NetworkID.ZKEVM),
    apiKey: '',
  },
  unichain: {
    url: makeAbiPubUrl(NetworkID.UNICHAIN),
    apiKey: '',
  },
  worldchain: {
    url: makeAbiPubUrl(NetworkID.WORLDCHAIN),
    apiKey: '',
  },
  linea: {
    url: makeAbiPubUrl(NetworkID.LINEA),
    apiKey: '',
  },
  ink: {
    url: makeAbiPubUrl(NetworkID.INK),
    apiKey: '',
  },
  blast: {
    url: makeAbiPubUrl(NetworkID.BLAST),
    apiKey: '',
  },
  flare: {
    url: makeAbiPubUrl(NetworkID.FLARE),
    apiKey: '',
  },
  hyperevm: {
    url: makeAbiPubUrl(NetworkID.HYPEREVM),
    apiKey: '',
  },
  scroll: {
    url: makeAbiPubUrl(NetworkID.SCROLL),
    apiKey: '',
  },
  plasma: {
    url: makeAbiPubUrl(NetworkID.PLASMA),
    apiKey: '',
  },
  megaeth: {
    url: makeAbiPubUrl(NetworkID.MEGAETH),
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
