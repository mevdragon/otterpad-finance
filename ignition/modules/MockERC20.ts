// npx hardhat ignition deploy ./ignition/modules/MockERC20.ts --network sepolia

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const RECIPIENT_ADDRESS = "0x1e8133a74C3Ed3669210860451BF4db2b9c25887";
const INITIAL_SUPPLY = parseEther("1000000"); // 1 million tokens with 18 decimals

const TokenDeploymentModule = buildModule("TokenDeploymentModule", (m) => {
  // Deploy SALE token
  const saleToken = m.contract("MockERC20", ["Sale Token", "SALE", 18n], {
    id: "SaleTokenMock",
  });

  // Deploy PAY token
  const payToken = m.contract("MockERC20", ["Payment Token", "PAY", 18n], {
    id: "PayTokenMock",
  });

  // Mint SALE tokens after deployment
  m.call(saleToken, "mint", [RECIPIENT_ADDRESS, INITIAL_SUPPLY], {
    id: "mintSaleTokens",
  });

  // Mint PAY tokens after deployment
  m.call(payToken, "mint", [RECIPIENT_ADDRESS, INITIAL_SUPPLY], {
    id: "mintPayTokens",
  });

  // Return only the contract deployments
  return {
    saleToken,
    payToken,
  };
});

export default TokenDeploymentModule;