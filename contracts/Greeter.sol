// SPDX-License-Identifier: LGPL-3.0-or-later

pragma solidity ^0.6.9;

import "@nomiclabs/buidler/console.sol";

contract Greeter {
    string public greeting;

    constructor(string memory _greeting) public {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function sum(uint256 a, uint256 b) external virtual pure returns (uint256) {
        return a + b;
    }

    function greet() external virtual view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) external virtual {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
