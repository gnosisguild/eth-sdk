import { defineConfig } from '../../../eth-sdk'

export default defineConfig({
  noFollowProxies: true,
  contracts: {
    mainnet: {
      'DAI Bridge': {
        'DAI Bridge Contract': '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      },
    },
    optimism: {
      weth: '0x4200000000000000000000000000000000000006',
      'DAI Bridge': {
        'DAI Bridge Contract': '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      },
    },
    polygon: {
      weth: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    bsc: {
      WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    avalanche: {
      WAVAX: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    },
    arbitrumOne: {
      GraphToken: '0x23a941036ae778ac51ab04cea08ed6e2fe103614',
    },
  },
  outputPath: 'outDir',
})
