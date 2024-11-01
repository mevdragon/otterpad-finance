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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ReentrantToken,
  ReentrantTokenInterface,
} from "../../contracts/ReentrantToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fundraiser",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fundraiser",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001a3938038062001a39833981810160405281019062000037919062000447565b6040518060400160405280600e81526020017f5265656e7472616e74546f6b656e0000000000000000000000000000000000008152506040518060400160405280600581526020017f5245454e540000000000000000000000000000000000000000000000000000008152508160039081620000b49190620006f3565b508060049081620000c69190620006f3565b5050508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050620001193369d3c21bcecceda10000006200012060201b60201c565b50620008dd565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620001955760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200018c9190620007eb565b60405180910390fd5b620001a960008383620001ad60201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160362000203578060026000828254620001f6919062000837565b92505081905550620002d9565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000292578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401620002899392919062000883565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000324578060026000828254039250508190555062000371565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003d09190620008c0565b60405180910390a3505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200040f82620003e2565b9050919050565b620004218162000402565b81146200042d57600080fd5b50565b600081519050620004418162000416565b92915050565b60006020828403121562000460576200045f620003dd565b5b6000620004708482850162000430565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004fb57607f821691505b602082108103620005115762000510620004b3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200057b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200053c565b6200058786836200053c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005d4620005ce620005c8846200059f565b620005a9565b6200059f565b9050919050565b6000819050919050565b620005f083620005b3565b62000608620005ff82620005db565b84845462000549565b825550505050565b600090565b6200061f62000610565b6200062c818484620005e5565b505050565b5b8181101562000654576200064860008262000615565b60018101905062000632565b5050565b601f821115620006a3576200066d8162000517565b62000678846200052c565b8101602085101562000688578190505b620006a062000697856200052c565b83018262000631565b50505b505050565b600082821c905092915050565b6000620006c860001984600802620006a8565b1980831691505092915050565b6000620006e38383620006b5565b9150826002028217905092915050565b620006fe8262000479565b67ffffffffffffffff8111156200071a576200071962000484565b5b620007268254620004e2565b6200073382828562000658565b600060209050601f8311600181146200076b576000841562000756578287015190505b620007628582620006d5565b865550620007d2565b601f1984166200077b8662000517565b60005b82811015620007a5578489015182556001820191506020850194506020810190506200077e565b86831015620007c55784890151620007c1601f891682620006b5565b8355505b6001600288020188555050505b505050505050565b620007e58162000402565b82525050565b6000602082019050620008026000830184620007da565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000844826200059f565b915062000851836200059f565b92508282019050808211156200086c576200086b62000808565b5b92915050565b6200087d816200059f565b82525050565b60006060820190506200089a6000830186620007da565b620008a9602083018562000872565b620008b8604083018462000872565b949350505050565b6000602082019050620008d7600083018462000872565b92915050565b60805161113262000907600039600081816102ec01528181610341015261050101526111326000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806370a082311161006657806370a082311461015d57806389585d101461018d57806395d89b41146101ab578063a9059cbb146101c9578063dd62ed3e146101f95761009e565b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100f157806323b872dd1461010f578063313ce5671461013f575b600080fd5b6100ab610229565b6040516100b89190610cbc565b60405180910390f35b6100db60048036038101906100d69190610d77565b6102bb565b6040516100e89190610dd2565b60405180910390f35b6100f96102de565b6040516101069190610dfc565b60405180910390f35b61012960048036038101906101249190610e17565b6102e8565b6040516101369190610dd2565b60405180910390f35b6101476104ae565b6040516101549190610e86565b60405180910390f35b61017760048036038101906101729190610ea1565b6104b7565b6040516101849190610dfc565b60405180910390f35b6101956104ff565b6040516101a29190610edd565b60405180910390f35b6101b3610523565b6040516101c09190610cbc565b60405180910390f35b6101e360048036038101906101de9190610d77565b6105b5565b6040516101f09190610dd2565b60405180910390f35b610213600480360381019061020e9190610ef8565b6105d8565b6040516102209190610dfc565b60405180910390f35b60606003805461023890610f67565b80601f016020809104026020016040519081016040528092919081815260200182805461026490610f67565b80156102b15780601f10610286576101008083540402835291602001916102b1565b820191906000526020600020905b81548152906001019060200180831161029457829003601f168201915b5050505050905090565b6000806102c661065f565b90506102d3818585610667565b600191505092915050565b6000600254905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361049a5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16836040516024016103879190610dfc565b6040516020818303038152906040527fd96a094a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516104119190610fdf565b6000604051808303816000865af19150503d806000811461044e576040519150601f19603f3d011682016040523d82523d6000602084013e610453565b606091505b505090508015610498576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048f90611042565b60405180910390fd5b505b6104a5848484610679565b90509392505050565b60006012905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606004805461053290610f67565b80601f016020809104026020016040519081016040528092919081815260200182805461055e90610f67565b80156105ab5780601f10610580576101008083540402835291602001916105ab565b820191906000526020600020905b81548152906001019060200180831161058e57829003601f168201915b5050505050905090565b6000806105c061065f565b90506105cd8185856106a8565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b610674838383600161079c565b505050565b60008061068461065f565b9050610691858285610973565b61069c8585856106a8565b60019150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361071a5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107119190610edd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361078c5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107839190610edd565b60405180910390fd5b610797838383610a07565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361080e5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016108059190610edd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108805760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016108779190610edd565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561096d578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109649190610dfc565b60405180910390a35b50505050565b600061097f84846105d8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a0157818110156109f1578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016109e893929190611062565b60405180910390fd5b610a008484848403600061079c565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a59578060026000828254610a4d91906110c8565b92505081905550610b2c565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ae5578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610adc93929190611062565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b755780600260008282540392505081905550610bc2565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c1f9190610dfc565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c66578082015181840152602081019050610c4b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c8e82610c2c565b610c988185610c37565b9350610ca8818560208601610c48565b610cb181610c72565b840191505092915050565b60006020820190508181036000830152610cd68184610c83565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d0e82610ce3565b9050919050565b610d1e81610d03565b8114610d2957600080fd5b50565b600081359050610d3b81610d15565b92915050565b6000819050919050565b610d5481610d41565b8114610d5f57600080fd5b50565b600081359050610d7181610d4b565b92915050565b60008060408385031215610d8e57610d8d610cde565b5b6000610d9c85828601610d2c565b9250506020610dad85828601610d62565b9150509250929050565b60008115159050919050565b610dcc81610db7565b82525050565b6000602082019050610de76000830184610dc3565b92915050565b610df681610d41565b82525050565b6000602082019050610e116000830184610ded565b92915050565b600080600060608486031215610e3057610e2f610cde565b5b6000610e3e86828701610d2c565b9350506020610e4f86828701610d2c565b9250506040610e6086828701610d62565b9150509250925092565b600060ff82169050919050565b610e8081610e6a565b82525050565b6000602082019050610e9b6000830184610e77565b92915050565b600060208284031215610eb757610eb6610cde565b5b6000610ec584828501610d2c565b91505092915050565b610ed781610d03565b82525050565b6000602082019050610ef26000830184610ece565b92915050565b60008060408385031215610f0f57610f0e610cde565b5b6000610f1d85828601610d2c565b9250506020610f2e85828601610d2c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f7f57607f821691505b602082108103610f9257610f91610f38565b5b50919050565b600081519050919050565b600081905092915050565b6000610fb982610f98565b610fc38185610fa3565b9350610fd3818560208601610c48565b80840191505092915050565b6000610feb8284610fae565b915081905092915050565b7f5265656e7472616e63792073686f756c642068617665206661696c6564000000600082015250565b600061102c601d83610c37565b915061103782610ff6565b602082019050919050565b6000602082019050818103600083015261105b8161101f565b9050919050565b60006060820190506110776000830186610ece565b6110846020830185610ded565b6110916040830184610ded565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110d382610d41565b91506110de83610d41565b92508282019050808211156110f6576110f5611099565b5b9291505056fea26469706673582212208a9c5c62357c69918ccde85c4236278fb128476832d895dd139c3355d47115dd64736f6c63430008180033";

type ReentrantTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentrantTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentrantToken__factory extends ContractFactory {
  constructor(...args: ReentrantTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _fundraiser: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_fundraiser, overrides || {});
  }
  override deploy(
    _fundraiser: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_fundraiser, overrides || {}) as Promise<
      ReentrantToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ReentrantToken__factory {
    return super.connect(runner) as ReentrantToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrantTokenInterface {
    return new Interface(_abi) as ReentrantTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ReentrantToken {
    return new Contract(address, _abi, runner) as unknown as ReentrantToken;
  }
}