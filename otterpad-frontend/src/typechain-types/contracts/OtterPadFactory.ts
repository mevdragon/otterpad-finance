/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface OtterPadFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createFundraiser"
      | "fundCounterIndex"
      | "funds"
      | "uniswapFactory"
      | "uniswapRouter"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "FundCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "createFundraiser",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike,
      string,
      string,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fundCounterIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "funds", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "uniswapFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapRouter",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createFundraiser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundCounterIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "funds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapRouter",
    data: BytesLike
  ): Result;
}

export namespace FundCreatedEvent {
  export type InputTuple = [
    fundIndex: BigNumberish,
    fund: AddressLike,
    saleToken: AddressLike,
    paymentToken: AddressLike,
    title: string,
    targetLiquidity: BigNumberish,
    upfrontRakeBPS: BigNumberish,
    escrowRakeBPS: BigNumberish,
    foundersWallet: AddressLike,
    lockLPTokenWallet: AddressLike
  ];
  export type OutputTuple = [
    fundIndex: bigint,
    fund: string,
    saleToken: string,
    paymentToken: string,
    title: string,
    targetLiquidity: bigint,
    upfrontRakeBPS: bigint,
    escrowRakeBPS: bigint,
    foundersWallet: string,
    lockLPTokenWallet: string
  ];
  export interface OutputObject {
    fundIndex: bigint;
    fund: string;
    saleToken: string;
    paymentToken: string;
    title: string;
    targetLiquidity: bigint;
    upfrontRakeBPS: bigint;
    escrowRakeBPS: bigint;
    foundersWallet: string;
    lockLPTokenWallet: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OtterPadFactory extends BaseContract {
  connect(runner?: ContractRunner | null): OtterPadFactory;
  waitForDeployment(): Promise<this>;

  interface: OtterPadFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createFundraiser: TypedContractMethod<
    [
      upfrontRakeBPS: BigNumberish,
      escrowRakeBPS: BigNumberish,
      startPrice: BigNumberish,
      endPrice: BigNumberish,
      targetLiquidity: BigNumberish,
      saleToken: AddressLike,
      paymentToken: AddressLike,
      foundersWallet: AddressLike,
      title: string,
      richInfoUrl: string,
      lockLPTokenWallet: AddressLike
    ],
    [string],
    "nonpayable"
  >;

  fundCounterIndex: TypedContractMethod<[], [bigint], "view">;

  funds: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  uniswapFactory: TypedContractMethod<[], [string], "view">;

  uniswapRouter: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createFundraiser"
  ): TypedContractMethod<
    [
      upfrontRakeBPS: BigNumberish,
      escrowRakeBPS: BigNumberish,
      startPrice: BigNumberish,
      endPrice: BigNumberish,
      targetLiquidity: BigNumberish,
      saleToken: AddressLike,
      paymentToken: AddressLike,
      foundersWallet: AddressLike,
      title: string,
      richInfoUrl: string,
      lockLPTokenWallet: AddressLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fundCounterIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "funds"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "uniswapFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "uniswapRouter"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "FundCreated"
  ): TypedContractEvent<
    FundCreatedEvent.InputTuple,
    FundCreatedEvent.OutputTuple,
    FundCreatedEvent.OutputObject
  >;

  filters: {
    "FundCreated(uint256,address,address,address,string,uint256,uint256,uint256,address,address)": TypedContractEvent<
      FundCreatedEvent.InputTuple,
      FundCreatedEvent.OutputTuple,
      FundCreatedEvent.OutputObject
    >;
    FundCreated: TypedContractEvent<
      FundCreatedEvent.InputTuple,
      FundCreatedEvent.OutputTuple,
      FundCreatedEvent.OutputObject
    >;
  };
}
