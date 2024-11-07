// src/config/chains.ts
export interface ChainConfig {
  chain: string;
  chainIdDecimal: string;
  factoryAddress: string;
  isDisabled: boolean;
  explorerUrl: string;
}

export const SUPPORTED_CHAINS: ChainConfig[] = [
  {
    chain: "Sepolia",
    chainIdDecimal: "11155111",
    factoryAddress: "0xD1D3Ff570e819a218956e7094BEa5CA42eb5D5B0",
    isDisabled: false,
    explorerUrl: "https://sepolia.etherscan.io",
  },
  {
    chain: "Polygon",
    chainIdDecimal: "137",
    factoryAddress: "0xBc255963Da9C9bdeD90774c821B3FAC81Bf487C1", // To be filled
    isDisabled: false,
    explorerUrl: "https://polygonscan.com",
  },
  {
    chain: "Arbitrum One",
    chainIdDecimal: "42161",
    factoryAddress: "0x4BaC8705e5029a028ee67fDbC6767598fB1E6fEc",
    isDisabled: false,
    explorerUrl: "https://arbiscan.io",
  },
  // {
  //   chain: "Base Mainnet",
  //   chainIdDecimal: "8453",
  //   factoryAddress: "___________", // To be filled
  //   isDisabled: true,
  //   explorerUrl: "https://basescan.org",
  // },
];

export const getFactoryAddress = (chainId: string): string => {
  const chain = SUPPORTED_CHAINS.find((c) => c.chainIdDecimal === chainId);
  if (!chain) throw new Error(`Unsupported chain ID: ${chainId}`);
  return chain.factoryAddress;
};

export const getChainName = (chainId: string): string => {
  const chain = SUPPORTED_CHAINS.find((c) => c.chainIdDecimal === chainId);
  if (!chain) throw new Error(`Unsupported chain ID: ${chainId}`);
  return chain.chain;
};

export const ERC20_ABI = [
  {
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
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
        name: "spender",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
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
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
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
        name: "",
        type: "uint8",
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
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
