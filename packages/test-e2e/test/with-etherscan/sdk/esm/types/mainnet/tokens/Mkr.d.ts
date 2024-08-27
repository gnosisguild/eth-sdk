import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface MkrInterface extends Interface {
    getFunction(nameOrSignature: "name" | "stop" | "approve(address,uint256)" | "approve(address)" | "setOwner" | "totalSupply" | "transferFrom" | "decimals" | "mint(address,uint256)" | "mint(uint256)" | "burn(uint256)" | "burn(address,uint256)" | "setName" | "balanceOf" | "stopped" | "setAuthority" | "owner" | "symbol" | "transfer" | "push" | "move" | "start" | "authority" | "allowance" | "pull"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Mint" | "Burn" | "LogSetAuthority" | "LogSetOwner" | "LogNote" | "Transfer" | "Approval"): EventFragment;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve(address,uint256)", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approve(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint(address,uint256)", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burn(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burn(address,uint256)", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setName", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "push", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "move", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "start", values?: undefined): string;
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "pull", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
}
export declare namespace MintEvent {
    type InputTuple = [guy: AddressLike, wad: BigNumberish];
    type OutputTuple = [guy: string, wad: bigint];
    interface OutputObject {
        guy: string;
        wad: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BurnEvent {
    type InputTuple = [guy: AddressLike, wad: BigNumberish];
    type OutputTuple = [guy: string, wad: bigint];
    interface OutputObject {
        guy: string;
        wad: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LogSetAuthorityEvent {
    type InputTuple = [authority: AddressLike];
    type OutputTuple = [authority: string];
    interface OutputObject {
        authority: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LogSetOwnerEvent {
    type InputTuple = [owner: AddressLike];
    type OutputTuple = [owner: string];
    interface OutputObject {
        owner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LogNoteEvent {
    type InputTuple = [
        sig: BytesLike,
        guy: AddressLike,
        foo: BytesLike,
        bar: BytesLike,
        wad: BigNumberish,
        fax: BytesLike
    ];
    type OutputTuple = [
        sig: string,
        guy: string,
        foo: string,
        bar: string,
        wad: bigint,
        fax: string
    ];
    interface OutputObject {
        sig: string;
        guy: string;
        foo: string;
        bar: string;
        wad: bigint;
        fax: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [from: string, to: string, value: bigint];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [owner: string, spender: string, value: bigint];
    interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Mkr extends BaseContract {
    connect(runner?: ContractRunner | null): Mkr;
    waitForDeployment(): Promise<this>;
    interface: MkrInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    name: TypedContractMethod<[], [string], "view">;
    stop: TypedContractMethod<[], [void], "nonpayable">;
    "approve(address,uint256)": TypedContractMethod<[
        guy: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    "approve(address)": TypedContractMethod<[
        guy: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    setOwner: TypedContractMethod<[owner_: AddressLike], [void], "nonpayable">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transferFrom: TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    "mint(address,uint256)": TypedContractMethod<[
        guy: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "mint(uint256)": TypedContractMethod<[
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "burn(uint256)": TypedContractMethod<[
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "burn(address,uint256)": TypedContractMethod<[
        guy: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setName: TypedContractMethod<[name_: BytesLike], [void], "nonpayable">;
    balanceOf: TypedContractMethod<[src: AddressLike], [bigint], "view">;
    stopped: TypedContractMethod<[], [boolean], "view">;
    setAuthority: TypedContractMethod<[
        authority_: AddressLike
    ], [
        void
    ], "nonpayable">;
    owner: TypedContractMethod<[], [string], "view">;
    symbol: TypedContractMethod<[], [string], "view">;
    transfer: TypedContractMethod<[
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    push: TypedContractMethod<[
        dst: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    move: TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    start: TypedContractMethod<[], [void], "nonpayable">;
    authority: TypedContractMethod<[], [string], "view">;
    allowance: TypedContractMethod<[
        src: AddressLike,
        guy: AddressLike
    ], [
        bigint
    ], "view">;
    pull: TypedContractMethod<[
        src: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "stop"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "approve(address,uint256)"): TypedContractMethod<[
        guy: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "approve(address)"): TypedContractMethod<[guy: AddressLike], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "setOwner"): TypedContractMethod<[owner_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "mint(address,uint256)"): TypedContractMethod<[
        guy: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mint(uint256)"): TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "burn(uint256)"): TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "burn(address,uint256)"): TypedContractMethod<[
        guy: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setName"): TypedContractMethod<[name_: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[src: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "stopped"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "setAuthority"): TypedContractMethod<[authority_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        dst: AddressLike,
        wad: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "push"): TypedContractMethod<[
        dst: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "move"): TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "start"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "authority"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        src: AddressLike,
        guy: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "pull"): TypedContractMethod<[
        src: AddressLike,
        wad: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "Mint"): TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    getEvent(key: "Burn"): TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
    getEvent(key: "LogSetAuthority"): TypedContractEvent<LogSetAuthorityEvent.InputTuple, LogSetAuthorityEvent.OutputTuple, LogSetAuthorityEvent.OutputObject>;
    getEvent(key: "LogSetOwner"): TypedContractEvent<LogSetOwnerEvent.InputTuple, LogSetOwnerEvent.OutputTuple, LogSetOwnerEvent.OutputObject>;
    getEvent(key: "LogNote"): TypedContractEvent<LogNoteEvent.InputTuple, LogNoteEvent.OutputTuple, LogNoteEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    filters: {
        "Mint(address,uint256)": TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        Mint: TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        "Burn(address,uint256)": TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        Burn: TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        "LogSetAuthority(address)": TypedContractEvent<LogSetAuthorityEvent.InputTuple, LogSetAuthorityEvent.OutputTuple, LogSetAuthorityEvent.OutputObject>;
        LogSetAuthority: TypedContractEvent<LogSetAuthorityEvent.InputTuple, LogSetAuthorityEvent.OutputTuple, LogSetAuthorityEvent.OutputObject>;
        "LogSetOwner(address)": TypedContractEvent<LogSetOwnerEvent.InputTuple, LogSetOwnerEvent.OutputTuple, LogSetOwnerEvent.OutputObject>;
        LogSetOwner: TypedContractEvent<LogSetOwnerEvent.InputTuple, LogSetOwnerEvent.OutputTuple, LogSetOwnerEvent.OutputObject>;
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)": TypedContractEvent<LogNoteEvent.InputTuple, LogNoteEvent.OutputTuple, LogNoteEvent.OutputObject>;
        LogNote: TypedContractEvent<LogNoteEvent.InputTuple, LogNoteEvent.OutputTuple, LogNoteEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    };
}
