import { type ContractRunner } from "ethers";
import type { Uniswap, UniswapInterface } from "../../mainnet/Uniswap";
export declare class Uniswap__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly indexed: true;
            readonly internalType: "int24";
            readonly name: "tickSpacing";
            readonly type: "int24";
        }];
        readonly name: "FeeAmountEnabled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnerChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token0";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token1";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly indexed: false;
            readonly internalType: "int24";
            readonly name: "tickSpacing";
            readonly type: "int24";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly name: "PoolCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenA";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenB";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }];
        readonly name: "createPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickSpacing";
            readonly type: "int24";
        }];
        readonly name: "enableFeeAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly name: "feeAmountTickSpacing";
        readonly outputs: readonly [{
            readonly internalType: "int24";
            readonly name: "";
            readonly type: "int24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly name: "getPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "parameters";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "factory";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token1";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }, {
            readonly internalType: "int24";
            readonly name: "tickSpacing";
            readonly type: "int24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }];
        readonly name: "setOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): UniswapInterface;
    static connect(address: string, runner?: ContractRunner | null): Uniswap;
}
