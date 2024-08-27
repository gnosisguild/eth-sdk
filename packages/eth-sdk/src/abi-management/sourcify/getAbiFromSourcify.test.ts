import { expect, mockFn } from 'earljs'

import { parseAddress } from '../../config'
import { FetchJson } from '../../peripherals/fetchJson'
import { Abi } from '../../types'
import { UserProvidedNetworkSymbol } from '../networks'
import { getAbiFromSourcify, SourcifyFile } from './getAbiFromSourcify'

describe(getAbiFromSourcify.name, () => {
  const userNetworkIds = {
    'dethcrypto-test': 1337,
  }

  // see https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#contracts
  const addr = parseAddress('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')

  it('extracts abi from fetched files', async () => {
    const fetchAbi = mockFn<FetchJson<SourcifyFile[]>>(async (_url) => FILES_FROM_SOURCIFY)
    const abi = await getAbiFromSourcify('mainnet', addr, userNetworkIds, fetchAbi)

    expect(fetchAbi).toHaveBeenCalledWith([`https://sourcify.dev/server/files/1/${addr}`])
    expect(abi).toEqual(CONTRACT_ABI)
  })

  it('calls Sourcify with user provided network id', async () => {
    const fetchAbi = mockFn<FetchJson<SourcifyFile[]>>(async (_url) => FILES_FROM_SOURCIFY)
    const _abi = await getAbiFromSourcify(UserProvidedNetworkSymbol('dethcrypto-test'), addr, userNetworkIds, fetchAbi)

    expect(fetchAbi).toHaveBeenCalledWith([
      `https://sourcify.dev/server/files/${userNetworkIds['dethcrypto-test']}/${addr}`,
    ])
  })

  it('throws when network id is not found', async () => {
    const network = UserProvidedNetworkSymbol('cool-net')
    await expect(getAbiFromSourcify(network, addr, {}, async (_url) => FILES_FROM_SOURCIFY)).toBeRejected(
      expect.stringMatching(
        `Network ID for "cool-net" was not found. Please add it to "networkIds" object in the config.`,
      ),
    )
  })
})

const CONTRACT_ABI: Abi = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'guy', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'src', type: 'address' },
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'wad', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'deposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'guy', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
]

const FILES_FROM_SOURCIFY = [{ name: 'metadata.json', content: JSON.stringify({ output: { abi: CONTRACT_ABI } }) }]
