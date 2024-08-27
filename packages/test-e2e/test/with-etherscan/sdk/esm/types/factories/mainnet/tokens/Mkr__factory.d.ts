import { type ContractRunner } from "ethers";
import type { Mkr, MkrInterface } from "../../../mainnet/tokens/Mkr";
export declare class Mkr__factory {
    static readonly abi: readonly [{
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "stop";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "owner_";
            readonly type: "address";
        }];
        readonly name: "setOwner";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "name_";
            readonly type: "bytes32";
        }];
        readonly name: "setName";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "stopped";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "authority_";
            readonly type: "address";
        }];
        readonly name: "setAuthority";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "push";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "move";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "start";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [];
        readonly name: "authority";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "guy";
            readonly type: "address";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "guy";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "pull";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly name: "symbol_";
            readonly type: "bytes32";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Mint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Burn";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "authority";
            readonly type: "address";
        }];
        readonly name: "LogSetAuthority";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "LogSetOwner";
        readonly type: "event";
    }, {
        readonly anonymous: true;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "sig";
            readonly type: "bytes4";
        }, {
            readonly indexed: true;
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "foo";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly name: "bar";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly name: "wad";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly name: "fax";
            readonly type: "bytes";
        }];
        readonly name: "LogNote";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }];
    static createInterface(): MkrInterface;
    static connect(address: string, runner?: ContractRunner | null): Mkr;
}
