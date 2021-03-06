import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";
import { HDAccountsConfig } from "@nomiclabs/buidler/types";

usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-waffle");

interface HDAccountsConfigExtended extends HDAccountsConfig {
  url: string;
}

/**
 * @dev You must have a `.env` file. Follow the example in `.env.example`.
 * @param {string} network The name of the testnet
 */
function createHDAccountConfig(network: string): HDAccountsConfigExtended {
  if (!process.env.MNEMONIC) {
    console.log("Please set your MNEMONIC in a .env file");
    process.exit(1);
  }

  if (!process.env.INFURA_API_KEY) {
    console.log("Please set your INFURA_API_KEY");
    process.exit(1);
  }

  return {
    initialIndex: 0,
    mnemonic: process.env.MNEMONIC,
    path: "m/44'/60'/0'/0",
    url: `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`,
  };
}

const config: BuidlerConfig = {
  defaultNetwork: "buidlerevm",
  mocha: {
    delay: true,
  },
  networks: {
    buidlerevm: {
      chainId: 31337,
    },
    ropsten: {
      ...createHDAccountConfig("ropsten"),
      chainId: 3,
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    root: "./",
    sources: "./contracts",
    tests: "./test",
  },
  solc: {
    /* https://buidler.dev/buidler-evm/#solidity-optimizer-support */
    optimizer: {
      enabled: false,
      runs: 200,
    },
    version: "0.6.9",
  },
};

export default config;
