//SPDX-License-Identifier: UNLICENSED

//this is the version of the solidity compiler we want out contract to use. Its saying- when running this, i only want to use this version and nothing lower
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract JokePortal {
    uint256 totalJokes;

    constructor() {
        console.log("This is a smart contract, good job Batoul!!");
    }

    function joke() public {
        totalJokes += 1;
        console.log("%s sent a Joke!", msg.sender);
    }

    function getTotalJokes() public view returns (uint256) {
        console.log("We have %d total Jokes!", totalJokes);
        return totalJokes;
    }
}

//totalJokes variable auto initialized to 0- its a state variable and is permanently stored in contract storage.
//We now need to update run.js and call our functions.
