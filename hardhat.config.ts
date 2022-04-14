import "hardhat-typechain";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import { task } from "hardhat/config";
import { Signer, utils } from "ethers";
import { compileSetting, allowVerifyChain } from "./scripts/deployTool";
import { RPCS } from "./scripts/network";

import {
  deployContract,
  BN,
  getContract,
  getContractJson,
  MINTER_ROLE,
} from "./scripts/helper";
import { getSign } from "./scripts/permitSign"

// import { ERC20MintablePauseable, ERC20MintablePauseableUpgradeable } from './typechain'


const dotenv = require("dotenv");
dotenv.config();
// import Colors = require("colors.ts");
// Colors.enable();

task("accounts", "Prints the list of accounts", async (taskArgs, bre) => {
  const accounts = await bre.ethers.getSigners();

  for (const account of accounts) {
    let address = await account.getAddress();
    console.log(
      address,
      (await bre.ethers.provider.getBalance(address)).toString()
    );
  }
});

// npx hardhat deploy --name ttt --symbol ttt --supply 1000000000000000000000000 --owner 0x319a0cfD7595b0085fF6003643C7eD685269F851 --network metermain
// task("deploy", "deploy contract")
//   .addParam("name", "Token name")
//   .addParam("symbol", "Token symbol")
//   .addParam("supply", "Token initialSupply require decimal")
//   .addParam("owner", "Token will mint to owner address")
//   .setAction(
//     async ({ name, symbol, supply, owner }, { ethers, run, network }) => {
//       await run("compile");
//       const signers = await ethers.getSigners();

//       const token = await deployContract(
//         ethers,
//         "ERC20MintablePauseable",
//         network.name,
//         signers[0],
//         [name, symbol, supply, owner]
//       ) as ERC20MintablePauseable;

//     }
//   );

// npx hardhat mint --to 0x319a0cfD7595b0085fF6003643C7eD685269F851 --amount 10000000000000000000000 --network metermain
// task("mint", "mint token")
//   .addParam("to", "mint to address")
//   .addParam("amount", "mint amount")
//   .setAction(
//     async ({ to, amount }, { ethers, run, network }) => {

//       await run("compile");
//       const signers = await ethers.getSigners();

//       let token = (await ethers.getContractAt(
//         "ERC20MintablePauseableUpgradeable",
//         getContract(network.name, "ERC20MintablePauseableUpgradeable"),
//         signers[0]
//       )) as ERC20MintablePauseableUpgradeable;

//       await token.mint(to, amount);
//     }
//   );
// npx hardhat veri
task("veri", "verify contracts").setAction(
  async ({ }, { ethers, run, network }) => {
    if (allowVerifyChain.indexOf(network.name) > -1) {
      await run(
        "verify:verify",
        getContractJson(network.name, "ERC20MintablePauseableUpgradeable")
      );
    }
  }
);

export default {
  networks: RPCS,
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  },
  solidity: {
    compilers: [compileSetting("0.8.4", 200)],
  },
  mocha: {
    timeout: 200000,
  },
};
