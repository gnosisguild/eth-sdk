import { Interface, toBeHex } from 'ethers'

import { Address, parseAddress } from '../config'
import { Abi, JsonFragment } from '../types'
import { RpcProvider } from './getRpcProvider'

export async function detectProxy(address: Address, abi: Abi, provider: RpcProvider): Promise<DetectProxyResult> {
  const stored = await lookForImplementationAddr(address, abi, provider)

  const asNumber = BigInt(stored || 0)
  if (asNumber !== BigInt(0)) {
    const implAddress = toBeHex(asNumber)
    const code = await provider.getCode(implAddress)
    const isContract = BigInt(code) !== BigInt(0)

    if (isContract) {
      return { implAddress: parseAddress(implAddress), isProxy: true }
    }
  }

  return { isProxy: false }
}

export type DetectProxyResult = { implAddress: Address; isProxy: true } | { isProxy: false }

async function lookForImplementationAddr(address: Address, abi: Abi, provider: RpcProvider): Promise<bigint | null> {
  const call = async (name: string) =>
    BigInt(
      await provider.call({
        to: address,
        data: new Interface(abi).encodeFunctionData(name, []),
      }),
    )

  // We check storage slot specified by EIP-1967 to hold implementation address.
  // see https://eips.ethereum.org/EIPS/eip-1967
  {
    const stored = BigInt(await provider.getStorage(address, EIP1967_IMPLEMENTATION_STORAGE_SLOT))
    if (stored !== BigInt(0)) return stored
  }
  // We check storage slot specified by openzeppelin to hold implementation address.
  // see https://github.com/OpenZeppelin/openzeppelin-labs/blob/master/initializer_with_sol_editing/contracts/UpgradeabilityProxy.sol#L24
  {
    const stored = BigInt(await provider.getStorage(address, ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT))
    if (stored !== BigInt(0)) return stored
  }

  // If there is an `.implementation` getter, we try to call it.
  const implementationGetter = abi.find((fragment) => fragment.name === 'implementation')
  if (implementationGetter && isPossibleImplementationGetter(implementationGetter)) {
    return call('implementation')
  }

  // Otherwise, we try shortest getter ending with "Implementation"
  const possibleImplementationGetters = abi.filter(isPossibleImplementationGetter)
  if (possibleImplementationGetters.length) {
    const [frag] = possibleImplementationGetters.sort((a, b) => a.name.length - b.name.length)
    return call(frag.name)
  }

  return null
}

/** @internal */
export const EIP1967_IMPLEMENTATION_STORAGE_SLOT = '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
export const ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT = '0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3'
export const NUMBER_OF_KNOWN_STORAGE_SLOTS = 2

const isPossibleImplementationGetter = (frag: JsonFragment): frag is JsonFragment & { name: string } => {
  if (
    frag.type === 'function' &&
    frag.name &&
    frag.name.match(/[iI]mplementation$/) &&
    (frag.stateMutability === 'view' || frag.stateMutability === 'pure')
  ) {
    const output = frag.outputs?.[0]
    return output?.type === 'address'
  }
  return false
}
