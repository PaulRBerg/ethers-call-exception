import chai from "chai";
import { ethers } from "@nomiclabs/buidler";
import { Wallet } from "ethers";

import { Greeter } from "../typechain/Greeter";

const { expect } = chai;

export function shouldBehaveLikeGreeter(wallets: Wallet[]) {
  describe("greet", function () {
    it("should return the greeting", async function () {
      const greeter: Greeter = this.greeter;
      expect(await greeter.greet()).to.equal("Hello from greeter!");
    });
  });

  describe("getBlockNumber", function () {
    it("should sum up the number", async function () {
      const greeter: Greeter = this.greeter;

      const result = await greeter.sum(ethers.utils.bigNumberify(10), ethers.utils.bigNumberify(20));
      expect(result).to.equal(30);
    });
  });
}
