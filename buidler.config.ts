import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-waffle");

const config: BuidlerConfig = {
  defaultNetwork: "buidlerevm",
  mocha: {
    delay: true,
  },
  networks: {
    buidlerevm: {
      chainId: 31337,
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
