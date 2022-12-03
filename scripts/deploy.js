// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

//ethers.js --> Library which allows you to deploy and interact with your smart contract

async function main(){
  const MoodContract = await ethers.getContractFactory("Mood");//Fecting the contarct to be deployed 

  const moodFactory = await moodFactory.deploy(); //deploying the contract 

  await moodFactoryDeploy.deployed(); // confirming that the contract id deployed

  console.log("The contract has been deployed to : " moodFactoryDeploy.address);

}


