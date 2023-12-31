import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: "0.8.18"
    }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      }
    },
  },
  networks: {
    hardhat:
    {
    },
    besu: {
      url: "http://localhost:8545",
      accounts:
        ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
    },
  },
};

export default config;
