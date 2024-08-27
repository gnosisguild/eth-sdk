import { invert } from 'lodash'
import { Opaque, SafeDictionary } from 'ts-essentials'

// note: copied from https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-etherscan/src/network/prober.ts
export enum NetworkID {
  MAINNET = 1,
  HOLESKY = 17000,
  SEPOLIA = 11155111,
  GNOSIS = 100,
  BASE = 8453,
  BSC = 56,
  OPTIMISTIC_ETHEREUM = 10,
  POLYGON = 137,
  ARBITRUM_ONE = 42161,
  AVALANCHE = 43114,
  CELO = 42220,
}

export const networkIDtoSymbol = {
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
