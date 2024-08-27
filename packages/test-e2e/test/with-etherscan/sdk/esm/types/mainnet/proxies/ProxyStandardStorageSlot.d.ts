import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface ProxyStandardStorageSlotInterface extends Interface {
    getFunction(nameOrSignature: "advance" | "allowance" | "allowanceCoupons" | "approve" | "approveCoupons" | "approveFor" | "balanceOf" | "balanceOfBonded" | "balanceOfCoupons" | "balanceOfStaged" | "bond" | "bootstrappingAt" | "calculatePrice" | "calculateReward" | "commit" | "couponPremium" | "couponsExpiration" | "decimals" | "deposit" | "dollar" | "emergencyCommit" | "epoch" | "epochTime" | "expiringCoupons" | "expiringCouponsAtIndex" | "fluidUntil" | "implementation" | "initialize" | "isInitialized" | "isNominated" | "lockedUntil" | "name" | "oracle" | "outstandingCoupons" | "periodFor" | "pool" | "purchaseCoupons" | "recordedVote" | "redeemCoupons" | "rejectFor" | "startFor" | "statusOf" | "symbol" | "totalBonded" | "totalBondedAt" | "totalCoupons" | "totalDebt" | "totalNet" | "totalRedeemable" | "totalStaged" | "totalSupply" | "transfer" | "transferCoupons" | "transferFrom" | "unbond" | "unbondUnderlying" | "vote" | "votesFor" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Advance" | "Bond" | "Commit" | "CouponApproval" | "CouponExpiration" | "CouponPurchase" | "CouponRedemption" | "CouponTransfer" | "Deposit" | "Incentivization" | "Proposal" | "SupplyDecrease" | "SupplyIncrease" | "SupplyNeutral" | "Transfer" | "Unbond" | "Upgraded" | "Vote" | "Withdraw"): EventFragment;
    encodeFunctionData(functionFragment: "advance", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "allowanceCoupons", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveCoupons", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveFor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "balanceOfBonded", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "balanceOfCoupons", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfStaged", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "bond", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bootstrappingAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculatePrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "couponPremium", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "couponsExpiration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dollar", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyCommit", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "expiringCoupons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "expiringCouponsAtIndex", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fluidUntil", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isInitialized", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isNominated", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lockedUntil", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "outstandingCoupons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "periodFor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "purchaseCoupons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "recordedVote", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "redeemCoupons", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rejectFor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "startFor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "statusOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBonded", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBondedAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalCoupons", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalNet", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalRedeemable", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalStaged", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferCoupons", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unbond", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unbondUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vote", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "votesFor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "advance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowanceCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBonded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfStaged", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bootstrappingAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculatePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "couponPremium", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "couponsExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dollar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyCommit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expiringCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expiringCouponsAtIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fluidUntil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isNominated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedUntil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outstandingCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "purchaseCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordedVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rejectFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "statusOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBonded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBondedAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalNet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalRedeemable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStaged", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbondUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votesFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export declare namespace AdvanceEvent {
    type InputTuple = [
        epoch: BigNumberish,
        block: BigNumberish,
        timestamp: BigNumberish
    ];
    type OutputTuple = [epoch: bigint, block: bigint, timestamp: bigint];
    interface OutputObject {
        epoch: bigint;
        block: bigint;
        timestamp: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BondEvent {
    type InputTuple = [
        account: AddressLike,
        start: BigNumberish,
        value: BigNumberish,
        valueUnderlying: BigNumberish
    ];
    type OutputTuple = [
        account: string,
        start: bigint,
        value: bigint,
        valueUnderlying: bigint
    ];
    interface OutputObject {
        account: string;
        start: bigint;
        value: bigint;
        valueUnderlying: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CommitEvent {
    type InputTuple = [account: AddressLike, candidate: AddressLike];
    type OutputTuple = [account: string, candidate: string];
    interface OutputObject {
        account: string;
        candidate: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CouponApprovalEvent {
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
export declare namespace CouponExpirationEvent {
    type InputTuple = [
        epoch: BigNumberish,
        couponsExpired: BigNumberish,
        lessRedeemable: BigNumberish,
        lessDebt: BigNumberish,
        newBonded: BigNumberish
    ];
    type OutputTuple = [
        epoch: bigint,
        couponsExpired: bigint,
        lessRedeemable: bigint,
        lessDebt: bigint,
        newBonded: bigint
    ];
    interface OutputObject {
        epoch: bigint;
        couponsExpired: bigint;
        lessRedeemable: bigint;
        lessDebt: bigint;
        newBonded: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CouponPurchaseEvent {
    type InputTuple = [
        account: AddressLike,
        epoch: BigNumberish,
        dollarAmount: BigNumberish,
        couponAmount: BigNumberish
    ];
    type OutputTuple = [
        account: string,
        epoch: bigint,
        dollarAmount: bigint,
        couponAmount: bigint
    ];
    interface OutputObject {
        account: string;
        epoch: bigint;
        dollarAmount: bigint;
        couponAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CouponRedemptionEvent {
    type InputTuple = [
        account: AddressLike,
        epoch: BigNumberish,
        couponAmount: BigNumberish
    ];
    type OutputTuple = [
        account: string,
        epoch: bigint,
        couponAmount: bigint
    ];
    interface OutputObject {
        account: string;
        epoch: bigint;
        couponAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CouponTransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        epoch: BigNumberish,
        value: BigNumberish
    ];
    type OutputTuple = [
        from: string,
        to: string,
        epoch: bigint,
        value: bigint
    ];
    interface OutputObject {
        from: string;
        to: string;
        epoch: bigint;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DepositEvent {
    type InputTuple = [account: AddressLike, value: BigNumberish];
    type OutputTuple = [account: string, value: bigint];
    interface OutputObject {
        account: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace IncentivizationEvent {
    type InputTuple = [account: AddressLike, amount: BigNumberish];
    type OutputTuple = [account: string, amount: bigint];
    interface OutputObject {
        account: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProposalEvent {
    type InputTuple = [
        candidate: AddressLike,
        account: AddressLike,
        start: BigNumberish,
        period: BigNumberish
    ];
    type OutputTuple = [
        candidate: string,
        account: string,
        start: bigint,
        period: bigint
    ];
    interface OutputObject {
        candidate: string;
        account: string;
        start: bigint;
        period: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SupplyDecreaseEvent {
    type InputTuple = [
        epoch: BigNumberish,
        price: BigNumberish,
        newDebt: BigNumberish
    ];
    type OutputTuple = [epoch: bigint, price: bigint, newDebt: bigint];
    interface OutputObject {
        epoch: bigint;
        price: bigint;
        newDebt: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SupplyIncreaseEvent {
    type InputTuple = [
        epoch: BigNumberish,
        price: BigNumberish,
        newRedeemable: BigNumberish,
        lessDebt: BigNumberish,
        newBonded: BigNumberish
    ];
    type OutputTuple = [
        epoch: bigint,
        price: bigint,
        newRedeemable: bigint,
        lessDebt: bigint,
        newBonded: bigint
    ];
    interface OutputObject {
        epoch: bigint;
        price: bigint;
        newRedeemable: bigint;
        lessDebt: bigint;
        newBonded: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SupplyNeutralEvent {
    type InputTuple = [epoch: BigNumberish];
    type OutputTuple = [epoch: bigint];
    interface OutputObject {
        epoch: bigint;
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
export declare namespace UnbondEvent {
    type InputTuple = [
        account: AddressLike,
        start: BigNumberish,
        value: BigNumberish,
        valueUnderlying: BigNumberish
    ];
    type OutputTuple = [
        account: string,
        start: bigint,
        value: bigint,
        valueUnderlying: bigint
    ];
    interface OutputObject {
        account: string;
        start: bigint;
        value: bigint;
        valueUnderlying: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpgradedEvent {
    type InputTuple = [implementation: AddressLike];
    type OutputTuple = [implementation: string];
    interface OutputObject {
        implementation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace VoteEvent {
    type InputTuple = [
        account: AddressLike,
        candidate: AddressLike,
        vote: BigNumberish,
        bonded: BigNumberish
    ];
    type OutputTuple = [
        account: string,
        candidate: string,
        vote: bigint,
        bonded: bigint
    ];
    interface OutputObject {
        account: string;
        candidate: string;
        vote: bigint;
        bonded: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WithdrawEvent {
    type InputTuple = [account: AddressLike, value: BigNumberish];
    type OutputTuple = [account: string, value: bigint];
    interface OutputObject {
        account: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ProxyStandardStorageSlot extends BaseContract {
    connect(runner?: ContractRunner | null): ProxyStandardStorageSlot;
    waitForDeployment(): Promise<this>;
    interface: ProxyStandardStorageSlotInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    advance: TypedContractMethod<[], [void], "nonpayable">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    allowanceCoupons: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    approveCoupons: TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    approveFor: TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    balanceOfBonded: TypedContractMethod<[
        account: AddressLike
    ], [
        bigint
    ], "view">;
    balanceOfCoupons: TypedContractMethod<[
        account: AddressLike,
        epoch: BigNumberish
    ], [
        bigint
    ], "view">;
    balanceOfStaged: TypedContractMethod<[
        account: AddressLike
    ], [
        bigint
    ], "view">;
    bond: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    bootstrappingAt: TypedContractMethod<[
        epoch: BigNumberish
    ], [
        boolean
    ], "view">;
    calculatePrice: TypedContractMethod<[], [bigint], "view">;
    calculateReward: TypedContractMethod<[], [bigint], "view">;
    commit: TypedContractMethod<[candidate: AddressLike], [void], "nonpayable">;
    couponPremium: TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
    couponsExpiration: TypedContractMethod<[
        epoch: BigNumberish
    ], [
        bigint
    ], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    deposit: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    dollar: TypedContractMethod<[], [string], "view">;
    emergencyCommit: TypedContractMethod<[
        candidate: AddressLike
    ], [
        void
    ], "nonpayable">;
    epoch: TypedContractMethod<[], [bigint], "view">;
    epochTime: TypedContractMethod<[], [bigint], "view">;
    expiringCoupons: TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
    expiringCouponsAtIndex: TypedContractMethod<[
        epoch: BigNumberish,
        i: BigNumberish
    ], [
        bigint
    ], "view">;
    fluidUntil: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    implementation: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[], [void], "nonpayable">;
    isInitialized: TypedContractMethod<[
        candidate: AddressLike
    ], [
        boolean
    ], "view">;
    isNominated: TypedContractMethod<[candidate: AddressLike], [boolean], "view">;
    lockedUntil: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    name: TypedContractMethod<[], [string], "view">;
    oracle: TypedContractMethod<[], [string], "view">;
    outstandingCoupons: TypedContractMethod<[
        epoch: BigNumberish
    ], [
        bigint
    ], "view">;
    periodFor: TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    pool: TypedContractMethod<[], [string], "view">;
    purchaseCoupons: TypedContractMethod<[
        dollarAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    recordedVote: TypedContractMethod<[
        account: AddressLike,
        candidate: AddressLike
    ], [
        bigint
    ], "view">;
    redeemCoupons: TypedContractMethod<[
        couponEpoch: BigNumberish,
        couponAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    rejectFor: TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    startFor: TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    statusOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    symbol: TypedContractMethod<[], [string], "view">;
    totalBonded: TypedContractMethod<[], [bigint], "view">;
    totalBondedAt: TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
    totalCoupons: TypedContractMethod<[], [bigint], "view">;
    totalDebt: TypedContractMethod<[], [bigint], "view">;
    totalNet: TypedContractMethod<[], [bigint], "view">;
    totalRedeemable: TypedContractMethod<[], [bigint], "view">;
    totalStaged: TypedContractMethod<[], [bigint], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferCoupons: TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        epoch: BigNumberish,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    unbond: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    unbondUnderlying: TypedContractMethod<[
        value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    vote: TypedContractMethod<[
        candidate: AddressLike,
        vote: BigNumberish
    ], [
        void
    ], "nonpayable">;
    votesFor: TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    withdraw: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "advance"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "allowanceCoupons"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "approveCoupons"): TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "approveFor"): TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "balanceOfBonded"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "balanceOfCoupons"): TypedContractMethod<[
        account: AddressLike,
        epoch: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "balanceOfStaged"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "bond"): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "bootstrappingAt"): TypedContractMethod<[epoch: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "calculatePrice"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "calculateReward"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "commit"): TypedContractMethod<[candidate: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "couponPremium"): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "couponsExpiration"): TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "dollar"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "emergencyCommit"): TypedContractMethod<[candidate: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "epoch"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "epochTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "expiringCoupons"): TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "expiringCouponsAtIndex"): TypedContractMethod<[
        epoch: BigNumberish,
        i: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "fluidUntil"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "implementation"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "isInitialized"): TypedContractMethod<[candidate: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isNominated"): TypedContractMethod<[candidate: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "lockedUntil"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "outstandingCoupons"): TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "periodFor"): TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "pool"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "purchaseCoupons"): TypedContractMethod<[dollarAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "recordedVote"): TypedContractMethod<[
        account: AddressLike,
        candidate: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "redeemCoupons"): TypedContractMethod<[
        couponEpoch: BigNumberish,
        couponAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rejectFor"): TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "startFor"): TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "statusOf"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalBonded"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalBondedAt"): TypedContractMethod<[epoch: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "totalCoupons"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalDebt"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalNet"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalRedeemable"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalStaged"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferCoupons"): TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        epoch: BigNumberish,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "unbond"): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "unbondUnderlying"): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "vote"): TypedContractMethod<[
        candidate: AddressLike,
        vote: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "votesFor"): TypedContractMethod<[candidate: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    getEvent(key: "Advance"): TypedContractEvent<AdvanceEvent.InputTuple, AdvanceEvent.OutputTuple, AdvanceEvent.OutputObject>;
    getEvent(key: "Bond"): TypedContractEvent<BondEvent.InputTuple, BondEvent.OutputTuple, BondEvent.OutputObject>;
    getEvent(key: "Commit"): TypedContractEvent<CommitEvent.InputTuple, CommitEvent.OutputTuple, CommitEvent.OutputObject>;
    getEvent(key: "CouponApproval"): TypedContractEvent<CouponApprovalEvent.InputTuple, CouponApprovalEvent.OutputTuple, CouponApprovalEvent.OutputObject>;
    getEvent(key: "CouponExpiration"): TypedContractEvent<CouponExpirationEvent.InputTuple, CouponExpirationEvent.OutputTuple, CouponExpirationEvent.OutputObject>;
    getEvent(key: "CouponPurchase"): TypedContractEvent<CouponPurchaseEvent.InputTuple, CouponPurchaseEvent.OutputTuple, CouponPurchaseEvent.OutputObject>;
    getEvent(key: "CouponRedemption"): TypedContractEvent<CouponRedemptionEvent.InputTuple, CouponRedemptionEvent.OutputTuple, CouponRedemptionEvent.OutputObject>;
    getEvent(key: "CouponTransfer"): TypedContractEvent<CouponTransferEvent.InputTuple, CouponTransferEvent.OutputTuple, CouponTransferEvent.OutputObject>;
    getEvent(key: "Deposit"): TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
    getEvent(key: "Incentivization"): TypedContractEvent<IncentivizationEvent.InputTuple, IncentivizationEvent.OutputTuple, IncentivizationEvent.OutputObject>;
    getEvent(key: "Proposal"): TypedContractEvent<ProposalEvent.InputTuple, ProposalEvent.OutputTuple, ProposalEvent.OutputObject>;
    getEvent(key: "SupplyDecrease"): TypedContractEvent<SupplyDecreaseEvent.InputTuple, SupplyDecreaseEvent.OutputTuple, SupplyDecreaseEvent.OutputObject>;
    getEvent(key: "SupplyIncrease"): TypedContractEvent<SupplyIncreaseEvent.InputTuple, SupplyIncreaseEvent.OutputTuple, SupplyIncreaseEvent.OutputObject>;
    getEvent(key: "SupplyNeutral"): TypedContractEvent<SupplyNeutralEvent.InputTuple, SupplyNeutralEvent.OutputTuple, SupplyNeutralEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    getEvent(key: "Unbond"): TypedContractEvent<UnbondEvent.InputTuple, UnbondEvent.OutputTuple, UnbondEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    getEvent(key: "Vote"): TypedContractEvent<VoteEvent.InputTuple, VoteEvent.OutputTuple, VoteEvent.OutputObject>;
    getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    filters: {
        "Advance(uint256,uint256,uint256)": TypedContractEvent<AdvanceEvent.InputTuple, AdvanceEvent.OutputTuple, AdvanceEvent.OutputObject>;
        Advance: TypedContractEvent<AdvanceEvent.InputTuple, AdvanceEvent.OutputTuple, AdvanceEvent.OutputObject>;
        "Bond(address,uint256,uint256,uint256)": TypedContractEvent<BondEvent.InputTuple, BondEvent.OutputTuple, BondEvent.OutputObject>;
        Bond: TypedContractEvent<BondEvent.InputTuple, BondEvent.OutputTuple, BondEvent.OutputObject>;
        "Commit(address,address)": TypedContractEvent<CommitEvent.InputTuple, CommitEvent.OutputTuple, CommitEvent.OutputObject>;
        Commit: TypedContractEvent<CommitEvent.InputTuple, CommitEvent.OutputTuple, CommitEvent.OutputObject>;
        "CouponApproval(address,address,uint256)": TypedContractEvent<CouponApprovalEvent.InputTuple, CouponApprovalEvent.OutputTuple, CouponApprovalEvent.OutputObject>;
        CouponApproval: TypedContractEvent<CouponApprovalEvent.InputTuple, CouponApprovalEvent.OutputTuple, CouponApprovalEvent.OutputObject>;
        "CouponExpiration(uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<CouponExpirationEvent.InputTuple, CouponExpirationEvent.OutputTuple, CouponExpirationEvent.OutputObject>;
        CouponExpiration: TypedContractEvent<CouponExpirationEvent.InputTuple, CouponExpirationEvent.OutputTuple, CouponExpirationEvent.OutputObject>;
        "CouponPurchase(address,uint256,uint256,uint256)": TypedContractEvent<CouponPurchaseEvent.InputTuple, CouponPurchaseEvent.OutputTuple, CouponPurchaseEvent.OutputObject>;
        CouponPurchase: TypedContractEvent<CouponPurchaseEvent.InputTuple, CouponPurchaseEvent.OutputTuple, CouponPurchaseEvent.OutputObject>;
        "CouponRedemption(address,uint256,uint256)": TypedContractEvent<CouponRedemptionEvent.InputTuple, CouponRedemptionEvent.OutputTuple, CouponRedemptionEvent.OutputObject>;
        CouponRedemption: TypedContractEvent<CouponRedemptionEvent.InputTuple, CouponRedemptionEvent.OutputTuple, CouponRedemptionEvent.OutputObject>;
        "CouponTransfer(address,address,uint256,uint256)": TypedContractEvent<CouponTransferEvent.InputTuple, CouponTransferEvent.OutputTuple, CouponTransferEvent.OutputObject>;
        CouponTransfer: TypedContractEvent<CouponTransferEvent.InputTuple, CouponTransferEvent.OutputTuple, CouponTransferEvent.OutputObject>;
        "Deposit(address,uint256)": TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        Deposit: TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        "Incentivization(address,uint256)": TypedContractEvent<IncentivizationEvent.InputTuple, IncentivizationEvent.OutputTuple, IncentivizationEvent.OutputObject>;
        Incentivization: TypedContractEvent<IncentivizationEvent.InputTuple, IncentivizationEvent.OutputTuple, IncentivizationEvent.OutputObject>;
        "Proposal(address,address,uint256,uint256)": TypedContractEvent<ProposalEvent.InputTuple, ProposalEvent.OutputTuple, ProposalEvent.OutputObject>;
        Proposal: TypedContractEvent<ProposalEvent.InputTuple, ProposalEvent.OutputTuple, ProposalEvent.OutputObject>;
        "SupplyDecrease(uint256,uint256,uint256)": TypedContractEvent<SupplyDecreaseEvent.InputTuple, SupplyDecreaseEvent.OutputTuple, SupplyDecreaseEvent.OutputObject>;
        SupplyDecrease: TypedContractEvent<SupplyDecreaseEvent.InputTuple, SupplyDecreaseEvent.OutputTuple, SupplyDecreaseEvent.OutputObject>;
        "SupplyIncrease(uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<SupplyIncreaseEvent.InputTuple, SupplyIncreaseEvent.OutputTuple, SupplyIncreaseEvent.OutputObject>;
        SupplyIncrease: TypedContractEvent<SupplyIncreaseEvent.InputTuple, SupplyIncreaseEvent.OutputTuple, SupplyIncreaseEvent.OutputObject>;
        "SupplyNeutral(uint256)": TypedContractEvent<SupplyNeutralEvent.InputTuple, SupplyNeutralEvent.OutputTuple, SupplyNeutralEvent.OutputObject>;
        SupplyNeutral: TypedContractEvent<SupplyNeutralEvent.InputTuple, SupplyNeutralEvent.OutputTuple, SupplyNeutralEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        "Unbond(address,uint256,uint256,uint256)": TypedContractEvent<UnbondEvent.InputTuple, UnbondEvent.OutputTuple, UnbondEvent.OutputObject>;
        Unbond: TypedContractEvent<UnbondEvent.InputTuple, UnbondEvent.OutputTuple, UnbondEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        "Vote(address,address,uint8,uint256)": TypedContractEvent<VoteEvent.InputTuple, VoteEvent.OutputTuple, VoteEvent.OutputObject>;
        Vote: TypedContractEvent<VoteEvent.InputTuple, VoteEvent.OutputTuple, VoteEvent.OutputObject>;
        "Withdraw(address,uint256)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
        Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    };
}
