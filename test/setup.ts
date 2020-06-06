import chai from "chai";
import { deployContract, solidity } from "ethereum-waffle";
import { ethers } from "@nomiclabs/buidler";
import { Wallet } from "ethers";

import ChildGreeterArtifact from "../artifacts/ChildGreeter.json";
import GreeterArtifact from "../artifacts/Greeter.json";
import { ChildGreeter } from "../typechain/ChildGreeter";
import { Greeter } from "../typechain/Greeter";
import { shouldBehaveLikeGreeter } from "./greeter";
import { shouldBehaveLikeChildGreeter } from "./childGreeter";

chai.use(solidity);
const { expect } = chai;

setTimeout(async function () {
  const wallets = (await ethers.getSigners()) as Wallet[];

  describe("Greeter", function () {
    beforeEach(async function () {
      this.greeter = (await deployContract(wallets[0], GreeterArtifact, ["Hello from greeter!"])) as Greeter;
      this.childGreeter = (await deployContract(wallets[0], ChildGreeterArtifact, [
        "Hello from child greeter!",
      ])) as ChildGreeter;
    });

    shouldBehaveLikeGreeter(wallets);
  });

  describe("ChildGreeter", function () {
    beforeEach(async function () {
      this.childGreeter = (await deployContract(wallets[0], ChildGreeterArtifact, [
        "Hello from child greeter!",
      ])) as ChildGreeter;
    });

    shouldBehaveLikeChildGreeter(wallets);
  });

  run();
}, 1000);
