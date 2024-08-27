import { expect, mockFn } from 'earljs'
import { ZeroAddress } from 'ethers'

import { traverseContractsMap } from './traverse'
import { EthSdkContracts, parseAddress } from './types'

describe('traverse', () => {
  it('traverses not-nested definitions', async () => {
    const def: EthSdkContracts = {
      mainnet: {
        dai: parseAddress(ZeroAddress),
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseContractsMap(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledExactlyWith([['mainnet', ['dai'], ZeroAddress]])
  })

  it('traverses nested definitions', async () => {
    const def: EthSdkContracts = {
      mainnet: {
        maker: {
          dai: parseAddress('0x6b175474e89094c44da98b954eedeac495271d0f'),
        },
        compound: {
          cDai: parseAddress('0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'),
        },
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseContractsMap(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledExactlyWith([
      ['mainnet', ['maker', 'dai'], '0x6b175474e89094c44da98b954eedeac495271d0f'],
      ['mainnet', ['compound', 'cDai'], '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'],
    ])
  })
})
