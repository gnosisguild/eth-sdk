import { assert } from 'conditional-type-checks'
import { expect } from 'earljs'
import { JsonRpcProvider, Provider, Signer } from 'ethers'
import { glob } from 'typechain'

import * as sdk from './outDir'
import type * as types from './outDir/types'

type Extends<T, U> = T extends U ? true : false

describe('with other Etherscan-like explorers', () => {
  const provider = new JsonRpcProvider('https://polygon-rpc.com')

  it('has fetched all ABIs', () => {
    const abis = glob(__dirname, ['abis/**/*.json'])
      .map((path) => path.replace(/[\s\S]*with-etherscanlikes\/abis\//, ''))
      .sort()

    expect(abis).toEqual([
      'arbitrumOne/GraphToken.json',
      'avalanche/WAVAX.json',
      'bsc/WBNB.json',
      'mainnet/DAI Bridge/DAI Bridge Contract.json',
      'optimism/DAI Bridge/DAI Bridge Contract.json',
      'optimism/weth.json',
      'polygon/weth.json',
    ])
  })

  it('has generated an sdk using a working set of predefined API keys', async () => {
    assert<
      Extends<
        typeof sdk,
        {
          getOptimismSdk: (signer: Signer | Provider) => { weth: types.optimism.Weth }
          getPolygonSdk: (signer: Signer | Provider) => { weth: types.polygon.Weth }
          getBscSdk: (signer: Signer | Provider) => { WBNB: types.bsc.WBNB }
          getAvalancheSdk: (signer: Signer | Provider) => { WAVAX: types.WAVAX }
          getArbitrumOneSdk: (signer: Signer | Provider) => { GraphToken: types.GraphToken }
        }
      >
    >(true)

    const polygon = sdk.getPolygonSdk(provider)
    expect(polygon.weth.target).toEqual('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619')
    expect(await polygon.weth.ERC712_VERSION()).toEqual('1')
  })
})
