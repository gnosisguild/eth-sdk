import { type ContractRunner } from "ethers";
import type { WithGasFields, WithGasFieldsInterface } from "../../mainnet/WithGasFields";
export declare class WithGasFields__factory {
    static readonly abi: readonly [{
        readonly name: "TokenExchange";
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "buyer";
            readonly indexed: true;
        }, {
            readonly type: "int128";
            readonly name: "sold_id";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "tokens_sold";
            readonly indexed: false;
        }, {
            readonly type: "int128";
            readonly name: "bought_id";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "tokens_bought";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "AddLiquidity";
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "provider";
            readonly indexed: true;
        }, {
            readonly type: "uint256[3]";
            readonly name: "token_amounts";
            readonly indexed: false;
        }, {
            readonly type: "uint256[3]";
            readonly name: "fees";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "invariant";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "token_supply";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "RemoveLiquidity";
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "provider";
            readonly indexed: true;
        }, {
            readonly type: "uint256[3]";
            readonly name: "token_amounts";
            readonly indexed: false;
        }, {
            readonly type: "uint256[3]";
            readonly name: "fees";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "token_supply";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "RemoveLiquidityOne";
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "provider";
            readonly indexed: true;
        }, {
            readonly type: "uint256";
            readonly name: "token_amount";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "coin_amount";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "RemoveLiquidityImbalance";
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "provider";
            readonly indexed: true;
        }, {
            readonly type: "uint256[3]";
            readonly name: "token_amounts";
            readonly indexed: false;
        }, {
            readonly type: "uint256[3]";
            readonly name: "fees";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "invariant";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "token_supply";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "CommitNewAdmin";
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "deadline";
            readonly indexed: true;
        }, {
            readonly type: "address";
            readonly name: "admin";
            readonly indexed: true;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "NewAdmin";
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "admin";
            readonly indexed: true;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "CommitNewFee";
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "deadline";
            readonly indexed: true;
        }, {
            readonly type: "uint256";
            readonly name: "fee";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "admin_fee";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "NewFee";
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "fee";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "admin_fee";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "RampA";
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "old_A";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "new_A";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "initial_time";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "future_time";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly name: "StopRampA";
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "A";
            readonly indexed: false;
        }, {
            readonly type: "uint256";
            readonly name: "t";
            readonly indexed: false;
        }];
        readonly anonymous: false;
        readonly type: "event";
    }, {
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "_owner";
        }, {
            readonly type: "address[3]";
            readonly name: "_coins";
        }, {
            readonly type: "address";
            readonly name: "_pool_token";
        }, {
            readonly type: "uint256";
            readonly name: "_A";
        }, {
            readonly type: "uint256";
            readonly name: "_fee";
        }, {
            readonly type: "uint256";
            readonly name: "_admin_fee";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly name: "A";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "get_virtual_price";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "calc_token_amount";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [{
            readonly type: "uint256[3]";
            readonly name: "amounts";
        }, {
            readonly type: "bool";
            readonly name: "deposit";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "add_liquidity";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "uint256[3]";
            readonly name: "amounts";
        }, {
            readonly type: "uint256";
            readonly name: "min_mint_amount";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "get_dy";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [{
            readonly type: "int128";
            readonly name: "i";
        }, {
            readonly type: "int128";
            readonly name: "j";
        }, {
            readonly type: "uint256";
            readonly name: "dx";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "get_dy_underlying";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [{
            readonly type: "int128";
            readonly name: "i";
        }, {
            readonly type: "int128";
            readonly name: "j";
        }, {
            readonly type: "uint256";
            readonly name: "dx";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "exchange";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "int128";
            readonly name: "i";
        }, {
            readonly type: "int128";
            readonly name: "j";
        }, {
            readonly type: "uint256";
            readonly name: "dx";
        }, {
            readonly type: "uint256";
            readonly name: "min_dy";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "remove_liquidity";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "_amount";
        }, {
            readonly type: "uint256[3]";
            readonly name: "min_amounts";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "remove_liquidity_imbalance";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "uint256[3]";
            readonly name: "amounts";
        }, {
            readonly type: "uint256";
            readonly name: "max_burn_amount";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "calc_withdraw_one_coin";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "_token_amount";
        }, {
            readonly type: "int128";
            readonly name: "i";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "remove_liquidity_one_coin";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "_token_amount";
        }, {
            readonly type: "int128";
            readonly name: "i";
        }, {
            readonly type: "uint256";
            readonly name: "min_amount";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "ramp_A";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "_future_A";
        }, {
            readonly type: "uint256";
            readonly name: "_future_time";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "stop_ramp_A";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "commit_new_fee";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "new_fee";
        }, {
            readonly type: "uint256";
            readonly name: "new_admin_fee";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "apply_new_fee";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "revert_new_parameters";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "commit_transfer_ownership";
        readonly outputs: readonly [];
        readonly inputs: readonly [{
            readonly type: "address";
            readonly name: "_owner";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "apply_transfer_ownership";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "revert_transfer_ownership";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "admin_balances";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "i";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "withdraw_admin_fees";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "donate_admin_fees";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "kill_me";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "unkill_me";
        readonly outputs: readonly [];
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly name: "coins";
        readonly outputs: readonly [{
            readonly type: "address";
            readonly name: "";
        }];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "arg0";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "balances";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [{
            readonly type: "uint256";
            readonly name: "arg0";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "fee";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "admin_fee";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly type: "address";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "initial_A";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "future_A";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "initial_A_time";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "future_A_time";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "admin_actions_deadline";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "transfer_ownership_deadline";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "future_fee";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "future_admin_fee";
        readonly outputs: readonly [{
            readonly type: "uint256";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly name: "future_owner";
        readonly outputs: readonly [{
            readonly type: "address";
            readonly name: "";
        }];
        readonly inputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): WithGasFieldsInterface;
    static connect(address: string, runner?: ContractRunner | null): WithGasFields;
}
