import { invert } from 'lodash'
import { Opaque, SafeDictionary } from 'ts-essentials'

// note: copied from https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-etherscan/src/network/prober.ts
export enum NetworkID {
  MAINNET = 1,
  HOLESKY = 17000,
  SEPOLIA = 11155111,
  GNOSIS = 100,
  BASE = 8453,
  // Binance Smart Chain
  BSC = 56,
  BSC_TESTNET = 97,
  // Fantom mainnet
  OPERA = 250,
  FTM_TESTNET = 4002,
  // Optimism
  OPTIMISTIC_ETHEREUM = 10,
  // Polygon
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  // Arbitrum
  ARBITRUM_ONE = 42161,
  ARBITRUM_TESTNET = 421611,
  // Avalanche
  AVALANCHE = 43114,
  AVALANCHE_FUJI_TESTNET = 43113,
}

export const networkIDtoSymbol = {
  [NetworkID.MAINNET]: 'mainnet',
  [NetworkID.HOLESKY]: 'holesky',
  [NetworkID.SEPOLIA]: 'sepolia',
  [NetworkID.GNOSIS]: 'gnosis',
  [NetworkID.BASE]: 'base',
  [NetworkID.BSC]: 'bsc',
  [NetworkID.BSC_TESTNET]: 'bscTestnet',
  [NetworkID.OPERA]: 'opera',
  [NetworkID.FTM_TESTNET]: 'ftmTestnet',
  [NetworkID.OPTIMISTIC_ETHEREUM]: 'optimism',
  [NetworkID.POLYGON]: 'polygon',
  [NetworkID.POLYGON_MUMBAI]: 'polygonMumbai',
  [NetworkID.ARBITRUM_ONE]: 'arbitrumOne',
  [NetworkID.AVALANCHE]: 'avalanche',
  [NetworkID.AVALANCHE_FUJI_TESTNET]: 'fuji',
} as const

export type UserProvidedNetworkSymbol = Opaque<string, 'UserProvidedNetworkSymbol'>

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserProvidedNetworkSymbol = (s: string): UserProvidedNetworkSymbol => s as UserProvidedNetworkSymbol

export function isUserProvidedNetwork(
  symbol: NetworkSymbol,
  userNetworks: Record<UserProvidedNetworkSymbol, string | number | undefined>,
): symbol is UserProvidedNetworkSymbol {
  return !!(symbol in userNetworks && userNetworks[symbol as keyof typeof userNetworks])
}

export type PredefinedNetworkSymbol = (typeof networkIDtoSymbol)[keyof typeof networkIDtoSymbol]

export type NetworkSymbol = UserProvidedNetworkSymbol | PredefinedNetworkSymbol

export const symbolToNetworkId: SafeDictionary<NetworkID, PredefinedNetworkSymbol> = invert(networkIDtoSymbol) as any
