const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); //exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); //exit Node process while indicating "Uncaught Fatal Exception" error
    }
      // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();

//whats happening in this file?
//  1) const waveContractFactory is what will compile our contract and generate the necessary 
//      files we need to work with our contract under the artifacts directory
//  2) const waveContract- harhat will create a local eth network for us but just for this contract
//      after script completes it destroys that local network. Everytime you run the contract itll be a fresh blockchain. Its kind of like refreshing your 
//      local server everytime so debugging is easier
//  3) await waveContract- were waiting until contract is officially deployed, our constructor runs when we actually deploy
//  4) finally once its deployed waveContract.address will give us the address of the deployed contract. 
//      this address is how we'll find our smart contract onthe blockchain
// Now we run the contract by entering this in terminal: npx hardhat run scripts/run.js

// Finally: HRE explained: Directly from the Hardhat docs themselves you will notice this:

// The Hardhat Runtime Environment, or HRE for short, is an object containing all the functionality that Hardhat exposes when running a task, test or script. In reality, Hardhat is the HRE.

// So what does this mean? Well, every time you run a terminal command that starts with npx hardhat you are getting this hre object built on the fly using the hardhat.config.js specified in your code! 
// This means you will never have to actually do some sort of import into your files like:

// const hre = require("hardhat")