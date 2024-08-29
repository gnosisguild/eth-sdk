import { Provider, Signer, Interface, InterfaceAbi } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: Interface | InterfaceAbi, defaultSignerOrProvider: Signer | Provider): unknown;
export type MainnetSdk = ReturnType<typeof getMainnetSdk>;
export declare function getMainnetSdk(defaultSignerOrProvider: Signer | Provider): {
    tokens: {
        dai: types.mainnet.tokens.Dai;
        mkr: types.mainnet.tokens.Mkr;
    };
    uniswap: types.mainnet.Uniswap;
    withGasFields: types.mainnet.WithGasFields;
    proxies: {
        proxyStandardStorageSlot: types.mainnet.proxies.ProxyStandardStorageSlot;
        proxyCustomImplementation: types.mainnet.proxies.ProxyCustomImplementation;
    };
};
