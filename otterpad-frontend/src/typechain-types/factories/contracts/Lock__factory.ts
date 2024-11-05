/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../common";
import type { Lock, LockInterface } from "../../contracts/Lock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080601f61029038819003918201601f19168301916001600160401b038311848410176100bc578084926020946040528339810103126100b757518042101561006657600055600180546001600160a01b031916331790556040516101bd90816100d38239f35b60405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c908163251c1aa31461016d575080633ccfd60b1461006e57638da5cb5b1461004357600080fd5b3461006a578160031936011261006a5760015490516001600160a01b039091168152602090f35b5080fd5b503461006a578160031936011261006a5781544210610131576001546001600160a01b0316338190036100f65782808080937fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9386478151908152426020820152a147908282156100ed575bf1156100e3575080f35b51903d90823e3d90fd5b506108fc6100d9565b815162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b6044820152606490fd5b5162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b6044820152606490fd5b83903461006a578160031936011261006a57602091548152f3fea26469706673582212208cba98d3f65c04ffdd44dc330e2c27d290b436a9fb8af604dc3c42f1ce1d531c64736f6c63430008180033";

type LockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lock__factory extends ContractFactory {
  constructor(...args: LockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_unlockTime, overrides || {});
  }
  override deploy(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_unlockTime, overrides || {}) as Promise<
      Lock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lock__factory {
    return super.connect(runner) as Lock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new Interface(_abi) as LockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lock {
    return new Contract(address, _abi, runner) as unknown as Lock;
  }
}
