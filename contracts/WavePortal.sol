//SPDX-License-Identifier: UNLICENSED

//this is the version of the solidity compiler we want out contract to use. Its saying- when running this, i only want to use this version and nothing lower
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    constructor() {
        console.log("This is a smart contract, good job Batoul!!");
    }
}
