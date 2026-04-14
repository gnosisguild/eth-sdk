export enum NetworkID {
  MAINNET = 1,
  GNOSIS = 100,
  BASE = 8453,
  BSC = 56,
  OPTIMISTIC_ETHEREUM = 10,
  POLYGON = 137,
  ARBITRUM_ONE = 42161,
  AVALANCHE = 43114,
  CELO = 42220,
  SONIC = 146,
  BERACHAIN = 80094,
  MANTLE = 5000,
  HOLESKY = 17000,
  SEPOLIA = 11155111,
  BASE_SEPOLIA = 84532,
  ZKEVM = 1101,
  UNICHAIN = 130,
  WORLDCHAIN = 480,
  LINEA = 59144,
  INK = 57073,
  BLAST = 81457,
  FLARE = 14,
  BOB = 60808,
  HEMI = 43111,
  KATANA = 747474,
  HYPEREVM = 999,
  SCROLL = 534352,
  PLASMA = 9745,
  MEGAETH = 4326,
}

export const networkIDtoShortName = {
  [NetworkID.MAINNET]: 'eth',
  [NetworkID.HOLESKY]: 'holesky', // todo
  [NetworkID.SEPOLIA]: 'sep',
  [NetworkID.GNOSIS]: 'gno',
  [NetworkID.BASE]: 'base',
  [NetworkID.BASE_SEPOLIA]: 'basesep',
  [NetworkID.BSC]: 'bnb',
  [NetworkID.OPTIMISTIC_ETHEREUM]: 'oeth',
  [NetworkID.POLYGON]: 'matic',
  [NetworkID.ARBITRUM_ONE]: 'arb1',
  [NetworkID.AVALANCHE]: 'avax',
  [NetworkID.CELO]: 'celo',
  [NetworkID.SONIC]: 'sonic',
  [NetworkID.BERACHAIN]: 'berachain',
  [NetworkID.MANTLE]: 'mantle',
  [NetworkID.ZKEVM]: 'zkevm',
  [NetworkID.UNICHAIN]: 'unichain',
  [NetworkID.WORLDCHAIN]: 'wc',
  [NetworkID.BOB]: 'bob',
  [NetworkID.HEMI]: 'hemi',
  [NetworkID.KATANA]: 'katana',
  [NetworkID.LINEA]: 'linea',
  [NetworkID.INK]: 'ink',
  [NetworkID.BLAST]: 'blast',
  [NetworkID.FLARE]: 'flr',
  [NetworkID.HYPEREVM]: 'hyperevm',
  [NetworkID.SCROLL]: 'scr',
  [NetworkID.PLASMA]: 'plasma',
  [NetworkID.MEGAETH]: 'megaeth',
} as const

// To keep backward compatibility with old network symbols
export const networkIDtoLegacySymbol = {
  [NetworkID.MAINNET]: 'mainnet',
  [NetworkID.HOLESKY]: 'holesky',
  [NetworkID.SEPOLIA]: 'sepolia',
  [NetworkID.GNOSIS]: 'gnosis',
  [NetworkID.BASE]: 'base',
  [NetworkID.BSC]: 'bsc',
  [NetworkID.OPTIMISTIC_ETHEREUM]: 'optimism',
  [NetworkID.POLYGON]: 'polygon',
  [NetworkID.ARBITRUM_ONE]: 'arbitrumOne',
  [NetworkID.AVALANCHE]: 'avalanche',
  [NetworkID.CELO]: 'celo',
  [NetworkID.SONIC]: 'sonic',
  [NetworkID.BERACHAIN]: 'berachain',
  [NetworkID.MANTLE]: 'mantle',
  [NetworkID.ZKEVM]: 'zkevm',
  [NetworkID.UNICHAIN]: 'unichain',
  [NetworkID.WORLDCHAIN]: 'worldchain',
  [NetworkID.LINEA]: 'linea',
  [NetworkID.INK]: 'ink',
  [NetworkID.BLAST]: 'blast',
  [NetworkID.FLARE]: 'flare',
  [NetworkID.HYPEREVM]: 'hyperevm',
  [NetworkID.SCROLL]: 'scroll',
  [NetworkID.PLASMA]: 'plasma',
  [NetworkID.MEGAETH]: 'megaeth',
} as const

export type NetworkShortName = (typeof networkIDtoShortName)[keyof typeof networkIDtoShortName]
export type LegacyNetworkSymbol = (typeof networkIDtoLegacySymbol)[keyof typeof networkIDtoLegacySymbol]

export type NetworkSymbol = NetworkShortName | LegacyNetworkSymbol

export type PredefinedNetworkSymbol = LegacyNetworkSymbol
export type UserProvidedNetworkSymbol = NetworkSymbol

// export const shortNameToNetworkId: SafeDictionary<NetworkID, NetworkSymbol> = invert(networkIDtoShortName)
// export const legacySymbolToNetworkId: SafeDictionary<NetworkID, NetworkSymbol> = invert(networkIDtoLegacySymbol)
