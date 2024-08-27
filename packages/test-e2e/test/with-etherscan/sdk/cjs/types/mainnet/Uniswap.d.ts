import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface UniswapInterface extends Interface {
    getFunction(nameOrSignature: "createPool" | "enableFeeAmount" | "feeAmountTickSpacing" | "getPool" | "owner" | "parameters" | "setOwner"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "FeeAmountEnabled" | "OwnerChanged" | "PoolCreated"): EventFragment;
    encodeFunctionData(functionFragment: "createPool", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "enableFeeAmount", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "feeAmountTickSpacing", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPool", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "parameters", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOwner", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableFeeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeAmountTickSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
}
export declare namespace FeeAmountEnabledEvent {
    type InputTuple = [fee: BigNumberish, tickSpacing: BigNumberish];
    type OutputTuple = [fee: bigint, tickSpacing: bigint];
    interface OutputObject {
        fee: bigint;
        tickSpacing: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnerChangedEvent {
    type InputTuple = [oldOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [oldOwner: string, newOwner: string];
    interface OutputObject {
        oldOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PoolCreatedEvent {
    type InputTuple = [
        token0: AddressLike,
        token1: AddressLike,
        fee: BigNumberish,
        tickSpacing: BigNumberish,
        pool: AddressLike
    ];
    type OutputTuple = [
        token0: string,
        token1: string,
        fee: bigint,
        tickSpacing: bigint,
        pool: string
    ];
    interface OutputObject {
        token0: string;
        token1: string;
        fee: bigint;
        tickSpacing: bigint;
        pool: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Uniswap extends BaseContract {
    connect(runner?: ContractRunner | null): Uniswap;
    waitForDeployment(): Promise<this>;
    interface: UniswapInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    createPool: TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        fee: BigNumberish
    ], [
        string
    ], "nonpayable">;
    enableFeeAmount: TypedContractMethod<[
        fee: BigNumberish,
        tickSpacing: BigNumberish
    ], [
        void
    ], "nonpayable">;
    feeAmountTickSpacing: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        bigint
    ], "view">;
    getPool: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish
    ], [
        string
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    parameters: TypedContractMethod<[
    ], [
        [
            string,
            string,
            string,
            bigint,
            bigint
        ] & {
            factory: string;
            token0: string;
            token1: string;
            fee: bigint;
            tickSpacing: bigint;
        }
    ], "view">;
    setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "createPool"): TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        fee: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "enableFeeAmount"): TypedContractMethod<[
        fee: BigNumberish,
        tickSpacing: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "feeAmountTickSpacing"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getPool"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "parameters"): TypedContractMethod<[
    ], [
        [
            string,
            string,
            string,
            bigint,
            bigint
        ] & {
            factory: string;
            token0: string;
            token1: string;
            fee: bigint;
            tickSpacing: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "setOwner"): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
    getEvent(key: "FeeAmountEnabled"): TypedContractEvent<FeeAmountEnabledEvent.InputTuple, FeeAmountEnabledEvent.OutputTuple, FeeAmountEnabledEvent.OutputObject>;
    getEvent(key: "OwnerChanged"): TypedContractEvent<OwnerChangedEvent.InputTuple, OwnerChangedEvent.OutputTuple, OwnerChangedEvent.OutputObject>;
    getEvent(key: "PoolCreated"): TypedContractEvent<PoolCreatedEvent.InputTuple, PoolCreatedEvent.OutputTuple, PoolCreatedEvent.OutputObject>;
    filters: {
        "FeeAmountEnabled(uint24,int24)": TypedContractEvent<FeeAmountEnabledEvent.InputTuple, FeeAmountEnabledEvent.OutputTuple, FeeAmountEnabledEvent.OutputObject>;
        FeeAmountEnabled: TypedContractEvent<FeeAmountEnabledEvent.InputTuple, FeeAmountEnabledEvent.OutputTuple, FeeAmountEnabledEvent.OutputObject>;
        "OwnerChanged(address,address)": TypedContractEvent<OwnerChangedEvent.InputTuple, OwnerChangedEvent.OutputTuple, OwnerChangedEvent.OutputObject>;
        OwnerChanged: TypedContractEvent<OwnerChangedEvent.InputTuple, OwnerChangedEvent.OutputTuple, OwnerChangedEvent.OutputObject>;
        "PoolCreated(address,address,uint24,int24,address)": TypedContractEvent<PoolCreatedEvent.InputTuple, PoolCreatedEvent.OutputTuple, PoolCreatedEvent.OutputObject>;
        PoolCreated: TypedContractEvent<PoolCreatedEvent.InputTuple, PoolCreatedEvent.OutputTuple, PoolCreatedEvent.OutputObject>;
    };
}
