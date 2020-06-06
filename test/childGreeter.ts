import chai from "chai";
import { ethers } from "@nomiclabs/buidler";
import { Wallet } from "ethers";

import { ChildGreeter } from "../typechain/ChildGreeter";

const { expect } = chai;

export function shouldBehaveLikeChildGreeter(wallets: Wallet[]) {
  describe("getBlockNumber", function () {
    it("should sum up the number", async function () {
      const childGreeter: ChildGreeter = this.childGreeter;

      const result = await childGreeter.sum(ethers.utils.bigNumberify(10), ethers.utils.bigNumberify(20));
      expect(result).to.equal(30);
    });
  });
}
