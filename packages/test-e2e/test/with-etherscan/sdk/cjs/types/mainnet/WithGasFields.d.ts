import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface WithGasFieldsInterface extends Interface {
    getFunction(nameOrSignature: "A" | "get_virtual_price" | "calc_token_amount" | "add_liquidity" | "get_dy" | "get_dy_underlying" | "exchange" | "remove_liquidity" | "remove_liquidity_imbalance" | "calc_withdraw_one_coin" | "remove_liquidity_one_coin" | "ramp_A" | "stop_ramp_A" | "commit_new_fee" | "apply_new_fee" | "revert_new_parameters" | "commit_transfer_ownership" | "apply_transfer_ownership" | "revert_transfer_ownership" | "admin_balances" | "withdraw_admin_fees" | "donate_admin_fees" | "kill_me" | "unkill_me" | "coins" | "balances" | "fee" | "admin_fee" | "owner" | "initial_A" | "future_A" | "initial_A_time" | "future_A_time" | "admin_actions_deadline" | "transfer_ownership_deadline" | "future_fee" | "future_admin_fee" | "future_owner"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "TokenExchange" | "AddLiquidity" | "RemoveLiquidity" | "RemoveLiquidityOne" | "RemoveLiquidityImbalance" | "CommitNewAdmin" | "NewAdmin" | "CommitNewFee" | "NewFee" | "RampA" | "StopRampA"): EventFragment;
    encodeFunctionData(functionFragment: "A", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "calc_token_amount", values: [[BigNumberish, BigNumberish, BigNumberish], boolean]): string;
    encodeFunctionData(functionFragment: "add_liquidity", values: [[BigNumberish, BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_dy", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "remove_liquidity", values: [BigNumberish, [BigNumberish, BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance", values: [[BigNumberish, BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ramp_A", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stop_ramp_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit_new_fee", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "apply_new_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "revert_new_parameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit_transfer_ownership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "apply_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "revert_transfer_ownership", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_balances", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw_admin_fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "donate_admin_fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "kill_me", values?: undefined): string;
    encodeFunctionData(functionFragment: "unkill_me", values?: undefined): string;
    encodeFunctionData(functionFragment: "coins", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balances", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_actions_deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer_ownership_deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_owner", values?: undefined): string;
    decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ramp_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop_ramp_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_new_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apply_new_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revert_new_parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "apply_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revert_transfer_ownership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw_admin_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "donate_admin_fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kill_me", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unkill_me", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_actions_deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer_ownership_deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_owner", data: BytesLike): Result;
}
export declare namespace TokenExchangeEvent {
    type InputTuple = [
        buyer: AddressLike,
        sold_id: BigNumberish,
        tokens_sold: BigNumberish,
        bought_id: BigNumberish,
        tokens_bought: BigNumberish
    ];
    type OutputTuple = [
        buyer: string,
        sold_id: bigint,
        tokens_sold: bigint,
        bought_id: bigint,
        tokens_bought: bigint
    ];
    interface OutputObject {
        buyer: string;
        sold_id: bigint;
        tokens_sold: bigint;
        bought_id: bigint;
        tokens_bought: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddLiquidityEvent {
    type InputTuple = [
        provider: AddressLike,
        token_amounts: [BigNumberish, BigNumberish, BigNumberish],
        fees: [BigNumberish, BigNumberish, BigNumberish],
        invariant: BigNumberish,
        token_supply: BigNumberish
    ];
    type OutputTuple = [
        provider: string,
        token_amounts: [bigint, bigint, bigint],
        fees: [bigint, bigint, bigint],
        invariant: bigint,
        token_supply: bigint
    ];
    interface OutputObject {
        provider: string;
        token_amounts: [bigint, bigint, bigint];
        fees: [bigint, bigint, bigint];
        invariant: bigint;
        token_supply: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RemoveLiquidityEvent {
    type InputTuple = [
        provider: AddressLike,
        token_amounts: [BigNumberish, BigNumberish, BigNumberish],
        fees: [BigNumberish, BigNumberish, BigNumberish],
        token_supply: BigNumberish
    ];
    type OutputTuple = [
        provider: string,
        token_amounts: [bigint, bigint, bigint],
        fees: [bigint, bigint, bigint],
        token_supply: bigint
    ];
    interface OutputObject {
        provider: string;
        token_amounts: [bigint, bigint, bigint];
        fees: [bigint, bigint, bigint];
        token_supply: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RemoveLiquidityOneEvent {
    type InputTuple = [
        provider: AddressLike,
        token_amount: BigNumberish,
        coin_amount: BigNumberish
    ];
    type OutputTuple = [
        provider: string,
        token_amount: bigint,
        coin_amount: bigint
    ];
    interface OutputObject {
        provider: string;
        token_amount: bigint;
        coin_amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RemoveLiquidityImbalanceEvent {
    type InputTuple = [
        provider: AddressLike,
        token_amounts: [BigNumberish, BigNumberish, BigNumberish],
        fees: [BigNumberish, BigNumberish, BigNumberish],
        invariant: BigNumberish,
        token_supply: BigNumberish
    ];
    type OutputTuple = [
        provider: string,
        token_amounts: [bigint, bigint, bigint],
        fees: [bigint, bigint, bigint],
        invariant: bigint,
        token_supply: bigint
    ];
    interface OutputObject {
        provider: string;
        token_amounts: [bigint, bigint, bigint];
        fees: [bigint, bigint, bigint];
        invariant: bigint;
        token_supply: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CommitNewAdminEvent {
    type InputTuple = [deadline: BigNumberish, admin: AddressLike];
    type OutputTuple = [deadline: bigint, admin: string];
    interface OutputObject {
        deadline: bigint;
        admin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewAdminEvent {
    type InputTuple = [admin: AddressLike];
    type OutputTuple = [admin: string];
    interface OutputObject {
        admin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CommitNewFeeEvent {
    type InputTuple = [
        deadline: BigNumberish,
        fee: BigNumberish,
        admin_fee: BigNumberish
    ];
    type OutputTuple = [deadline: bigint, fee: bigint, admin_fee: bigint];
    interface OutputObject {
        deadline: bigint;
        fee: bigint;
        admin_fee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewFeeEvent {
    type InputTuple = [fee: BigNumberish, admin_fee: BigNumberish];
    type OutputTuple = [fee: bigint, admin_fee: bigint];
    interface OutputObject {
        fee: bigint;
        admin_fee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RampAEvent {
    type InputTuple = [
        old_A: BigNumberish,
        new_A: BigNumberish,
        initial_time: BigNumberish,
        future_time: BigNumberish
    ];
    type OutputTuple = [
        old_A: bigint,
        new_A: bigint,
        initial_time: bigint,
        future_time: bigint
    ];
    interface OutputObject {
        old_A: bigint;
        new_A: bigint;
        initial_time: bigint;
        future_time: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StopRampAEvent {
    type InputTuple = [A: BigNumberish, t: BigNumberish];
    type OutputTuple = [A: bigint, t: bigint];
    interface OutputObject {
        A: bigint;
        t: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface WithGasFields extends BaseContract {
    connect(runner?: ContractRunner | null): WithGasFields;
    waitForDeployment(): Promise<this>;
    interface: WithGasFieldsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    A: TypedContractMethod<[], [bigint], "view">;
    get_virtual_price: TypedContractMethod<[], [bigint], "view">;
    calc_token_amount: TypedContractMethod<[
        amounts: [BigNumberish, BigNumberish, BigNumberish],
        deposit: boolean
    ], [
        bigint
    ], "view">;
    add_liquidity: TypedContractMethod<[
        amounts: [BigNumberish, BigNumberish, BigNumberish],
        min_mint_amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    get_dy: TypedContractMethod<[
        i: BigNumberish,
        j: BigNumberish,
        dx: BigNumberish
    ], [
        bigint
    ], "view">;
    get_dy_underlying: TypedContractMethod<[
        i: BigNumberish,
        j: BigNumberish,
        dx: BigNumberish
    ], [
        bigint
    ], "view">;
    exchange: TypedContractMethod<[
        i: BigNumberish,
        j: BigNumberish,
        dx: BigNumberish,
        min_dy: BigNumberish
    ], [
        void
    ], "nonpayable">;
    remove_liquidity: TypedContractMethod<[
        _amount: BigNumberish,
        min_amounts: [BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    remove_liquidity_imbalance: TypedContractMethod<[
        amounts: [BigNumberish, BigNumberish, BigNumberish],
        max_burn_amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    calc_withdraw_one_coin: TypedContractMethod<[
        _token_amount: BigNumberish,
        i: BigNumberish
    ], [
        bigint
    ], "view">;
    remove_liquidity_one_coin: TypedContractMethod<[
        _token_amount: BigNumberish,
        i: BigNumberish,
        min_amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    ramp_A: TypedContractMethod<[
        _future_A: BigNumberish,
        _future_time: BigNumberish
    ], [
        void
    ], "nonpayable">;
    stop_ramp_A: TypedContractMethod<[], [void], "nonpayable">;
    commit_new_fee: TypedContractMethod<[
        new_fee: BigNumberish,
        new_admin_fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    apply_new_fee: TypedContractMethod<[], [void], "nonpayable">;
    revert_new_parameters: TypedContractMethod<[], [void], "nonpayable">;
    commit_transfer_ownership: TypedContractMethod<[
        _owner: AddressLike
    ], [
        void
    ], "nonpayable">;
    apply_transfer_ownership: TypedContractMethod<[], [void], "nonpayable">;
    revert_transfer_ownership: TypedContractMethod<[], [void], "nonpayable">;
    admin_balances: TypedContractMethod<[i: BigNumberish], [bigint], "view">;
    withdraw_admin_fees: TypedContractMethod<[], [void], "nonpayable">;
    donate_admin_fees: TypedContractMethod<[], [void], "nonpayable">;
    kill_me: TypedContractMethod<[], [void], "nonpayable">;
    unkill_me: TypedContractMethod<[], [void], "nonpayable">;
    coins: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    balances: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    fee: TypedContractMethod<[], [bigint], "view">;
    admin_fee: TypedContractMethod<[], [bigint], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    initial_A: TypedContractMethod<[], [bigint], "view">;
    future_A: TypedContractMethod<[], [bigint], "view">;
    initial_A_time: TypedContractMethod<[], [bigint], "view">;
    future_A_time: TypedContractMethod<[], [bigint], "view">;
    admin_actions_deadline: TypedContractMethod<[], [bigint], "view">;
    transfer_ownership_deadline: TypedContractMethod<[], [bigint], "view">;
    future_fee: TypedContractMethod<[], [bigint], "view">;
    future_admin_fee: TypedContractMethod<[], [bigint], "view">;
    future_owner: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "A"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "get_virtual_price"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "calc_token_amount"): TypedContractMethod<[
        amounts: [BigNumberish, BigNumberish, BigNumberish],
        deposit: boolean
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "add_liquidity"): TypedContractMethod<[
        amounts: [BigNumberish, BigNumberish, BigNumberish],
        min_mint_amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "get_dy"): TypedContractMethod<[
        i: BigNumberish,
        j: BigNumberish,
        dx: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "get_dy_underlying"): TypedContractMethod<[
        i: BigNumberish,
        j: BigNumberish,
        dx: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "exchange"): TypedContractMethod<[
        i: BigNumberish,
        j: BigNumberish,
        dx: BigNumberish,
        min_dy: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "remove_liquidity"): TypedContractMethod<[
        _amount: BigNumberish,
        min_amounts: [BigNumberish, BigNumberish, BigNumberish]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "remove_liquidity_imbalance"): TypedContractMethod<[
        amounts: [BigNumberish, BigNumberish, BigNumberish],
        max_burn_amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "calc_withdraw_one_coin"): TypedContractMethod<[
        _token_amount: BigNumberish,
        i: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "remove_liquidity_one_coin"): TypedContractMethod<[
        _token_amount: BigNumberish,
        i: BigNumberish,
        min_amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "ramp_A"): TypedContractMethod<[
        _future_A: BigNumberish,
        _future_time: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stop_ramp_A"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "commit_new_fee"): TypedContractMethod<[
        new_fee: BigNumberish,
        new_admin_fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "apply_new_fee"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "revert_new_parameters"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "commit_transfer_ownership"): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "apply_transfer_ownership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "revert_transfer_ownership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "admin_balances"): TypedContractMethod<[i: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "withdraw_admin_fees"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "donate_admin_fees"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "kill_me"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "unkill_me"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "coins"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "balances"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "admin_fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initial_A"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "future_A"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initial_A_time"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "future_A_time"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "admin_actions_deadline"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer_ownership_deadline"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "future_fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "future_admin_fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "future_owner"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "TokenExchange"): TypedContractEvent<TokenExchangeEvent.InputTuple, TokenExchangeEvent.OutputTuple, TokenExchangeEvent.OutputObject>;
    getEvent(key: "AddLiquidity"): TypedContractEvent<AddLiquidityEvent.InputTuple, AddLiquidityEvent.OutputTuple, AddLiquidityEvent.OutputObject>;
    getEvent(key: "RemoveLiquidity"): TypedContractEvent<RemoveLiquidityEvent.InputTuple, RemoveLiquidityEvent.OutputTuple, RemoveLiquidityEvent.OutputObject>;
    getEvent(key: "RemoveLiquidityOne"): TypedContractEvent<RemoveLiquidityOneEvent.InputTuple, RemoveLiquidityOneEvent.OutputTuple, RemoveLiquidityOneEvent.OutputObject>;
    getEvent(key: "RemoveLiquidityImbalance"): TypedContractEvent<RemoveLiquidityImbalanceEvent.InputTuple, RemoveLiquidityImbalanceEvent.OutputTuple, RemoveLiquidityImbalanceEvent.OutputObject>;
    getEvent(key: "CommitNewAdmin"): TypedContractEvent<CommitNewAdminEvent.InputTuple, CommitNewAdminEvent.OutputTuple, CommitNewAdminEvent.OutputObject>;
    getEvent(key: "NewAdmin"): TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
    getEvent(key: "CommitNewFee"): TypedContractEvent<CommitNewFeeEvent.InputTuple, CommitNewFeeEvent.OutputTuple, CommitNewFeeEvent.OutputObject>;
    getEvent(key: "NewFee"): TypedContractEvent<NewFeeEvent.InputTuple, NewFeeEvent.OutputTuple, NewFeeEvent.OutputObject>;
    getEvent(key: "RampA"): TypedContractEvent<RampAEvent.InputTuple, RampAEvent.OutputTuple, RampAEvent.OutputObject>;
    getEvent(key: "StopRampA"): TypedContractEvent<StopRampAEvent.InputTuple, StopRampAEvent.OutputTuple, StopRampAEvent.OutputObject>;
    filters: {
        "TokenExchange(address,int128,uint256,int128,uint256)": TypedContractEvent<TokenExchangeEvent.InputTuple, TokenExchangeEvent.OutputTuple, TokenExchangeEvent.OutputObject>;
        TokenExchange: TypedContractEvent<TokenExchangeEvent.InputTuple, TokenExchangeEvent.OutputTuple, TokenExchangeEvent.OutputObject>;
        "AddLiquidity(address,uint256[3],uint256[3],uint256,uint256)": TypedContractEvent<AddLiquidityEvent.InputTuple, AddLiquidityEvent.OutputTuple, AddLiquidityEvent.OutputObject>;
        AddLiquidity: TypedContractEvent<AddLiquidityEvent.InputTuple, AddLiquidityEvent.OutputTuple, AddLiquidityEvent.OutputObject>;
        "RemoveLiquidity(address,uint256[3],uint256[3],uint256)": TypedContractEvent<RemoveLiquidityEvent.InputTuple, RemoveLiquidityEvent.OutputTuple, RemoveLiquidityEvent.OutputObject>;
        RemoveLiquidity: TypedContractEvent<RemoveLiquidityEvent.InputTuple, RemoveLiquidityEvent.OutputTuple, RemoveLiquidityEvent.OutputObject>;
        "RemoveLiquidityOne(address,uint256,uint256)": TypedContractEvent<RemoveLiquidityOneEvent.InputTuple, RemoveLiquidityOneEvent.OutputTuple, RemoveLiquidityOneEvent.OutputObject>;
        RemoveLiquidityOne: TypedContractEvent<RemoveLiquidityOneEvent.InputTuple, RemoveLiquidityOneEvent.OutputTuple, RemoveLiquidityOneEvent.OutputObject>;
        "RemoveLiquidityImbalance(address,uint256[3],uint256[3],uint256,uint256)": TypedContractEvent<RemoveLiquidityImbalanceEvent.InputTuple, RemoveLiquidityImbalanceEvent.OutputTuple, RemoveLiquidityImbalanceEvent.OutputObject>;
        RemoveLiquidityImbalance: TypedContractEvent<RemoveLiquidityImbalanceEvent.InputTuple, RemoveLiquidityImbalanceEvent.OutputTuple, RemoveLiquidityImbalanceEvent.OutputObject>;
        "CommitNewAdmin(uint256,address)": TypedContractEvent<CommitNewAdminEvent.InputTuple, CommitNewAdminEvent.OutputTuple, CommitNewAdminEvent.OutputObject>;
        CommitNewAdmin: TypedContractEvent<CommitNewAdminEvent.InputTuple, CommitNewAdminEvent.OutputTuple, CommitNewAdminEvent.OutputObject>;
        "NewAdmin(address)": TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
        NewAdmin: TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
        "CommitNewFee(uint256,uint256,uint256)": TypedContractEvent<CommitNewFeeEvent.InputTuple, CommitNewFeeEvent.OutputTuple, CommitNewFeeEvent.OutputObject>;
        CommitNewFee: TypedContractEvent<CommitNewFeeEvent.InputTuple, CommitNewFeeEvent.OutputTuple, CommitNewFeeEvent.OutputObject>;
        "NewFee(uint256,uint256)": TypedContractEvent<NewFeeEvent.InputTuple, NewFeeEvent.OutputTuple, NewFeeEvent.OutputObject>;
        NewFee: TypedContractEvent<NewFeeEvent.InputTuple, NewFeeEvent.OutputTuple, NewFeeEvent.OutputObject>;
        "RampA(uint256,uint256,uint256,uint256)": TypedContractEvent<RampAEvent.InputTuple, RampAEvent.OutputTuple, RampAEvent.OutputObject>;
        RampA: TypedContractEvent<RampAEvent.InputTuple, RampAEvent.OutputTuple, RampAEvent.OutputObject>;
        "StopRampA(uint256,uint256)": TypedContractEvent<StopRampAEvent.InputTuple, StopRampAEvent.OutputTuple, StopRampAEvent.OutputObject>;
        StopRampA: TypedContractEvent<StopRampAEvent.InputTuple, StopRampAEvent.OutputTuple, StopRampAEvent.OutputObject>;
    };
}
