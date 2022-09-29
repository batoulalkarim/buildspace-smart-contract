const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const jokeContractFactory = await hre.ethers.getContractFactory("JokePortal");
    const jokeContract = await jokeContractFactory.deploy();
    await jokeContract.deployed();

    console.log("JokePortal address: ", jokeContract.address);
};

const runMain = async () => {
    try {
        await main ();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();

//This file is us creating a new block and getting our smart contract on it. This code 
//is super similar to the run.js file. 
//before making this file, we opened a new terminal and ran npx hardhat node so that we can have 
//a server running endlessly,because remember, when we run scripts/run.js were creating a new 
//local eth network, deploying our contract, but then hardhat automaticaally destroys that local 
//network. We need to keep the network alive so we can keep talking to it.
// this is the command we'll run to deploy: npx hardhat run scripts/deploy.js --network localhost
