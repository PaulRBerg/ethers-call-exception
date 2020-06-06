// SPDX-License-Identifier: LGPL-3.0-or-later

pragma solidity ^0.6.9;

import "./Greeter.sol";

/**
 * To make the bug go away:
 *
 * 1. Remove the "abstract" marker
 * 2. Remove the "is Greeter" extend
 * 3. Uncomment the storage variable declaration below
 * 4. Remove the "override" modifier from the "sum" function
 */
abstract contract ChildGreeter is Greeter {
    // string public greeting;

    constructor(string memory _greeting) public {
        greeting = _greeting;
    }

    function sum(uint256 a, uint256 b) external override pure returns (uint256) {
        return a + b;
    }
}
