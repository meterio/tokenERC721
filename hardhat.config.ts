import "hardhat-typechain";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import { task } from "hardhat/config";
import { Signer, utils } from "ethers";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { compileSetting, allowVerifyChain } from "./scripts/deployTool";
import { RPCS } from "./scripts/network";
import { MerkleTree } from 'merkletreejs';
import { walletSign, twitterSign } from "./test/utils/permitSign";

import {
  deployContract,
  BN,
  getContract,
  getContractJson,
  MINTER_ROLE,
} from "./scripts/helper";
import { getSign } from "./scripts/permitSign"

import { ERC721AMint, ERC721Twitter, NFTWalletFactory } from './typechain'


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

task("deploy", "deploy contract")
  .setAction(
    async ({ }, { ethers, run, network }) => {
      await run("compile");
      const [deployer] = await ethers.getSigners();

      const factory = await deployContract(
        "contracts/ERC721AMint.sol:ERC721AMint",
        network.name,
        ethers.getContractFactory,
        deployer
      ) as ERC721AMint;
    }
  );
// npx hardhat getroot --json ./leaves.json
task("getroot", "set root")
  .addParam("json", "json file")
  .setAction(
    async ({ json }, { ethers, run, network }) => {
      let jsonArr = JSON.parse(readFileSync(json).toString());
      let hashArr: any[] = [];
      for (let i = 0; i < jsonArr.length; i++) {
        hashArr[i] = utils.defaultAbiCoder.encode(["uint256", "address"], [BN(jsonArr[i].amount), jsonArr[i].address]);
      }
      const leaves = hashArr.map(x => ethers.utils.keccak256(x));
      const tree = new MerkleTree(leaves, ethers.utils.keccak256, { sort: true });
      const root = "0x" + tree.getRoot().toString('hex')
      console.log('root:', root)
    }
  );
// npx hardhat makeproof --json ./leaves.json
task("makeproof", "make proof")
  .addParam("json", "json file")
  .setAction(
    async ({ json }, { ethers, run, network }) => {
      let jsonArr = JSON.parse(readFileSync(json).toString());
      let hashArr: any[] = [];
      for (let i = 0; i < jsonArr.length; i++) {
        hashArr[i] = utils.defaultAbiCoder.encode(["uint256", "address"], [BN(jsonArr[i].amount), jsonArr[i].address]);
      }
      const leaves = hashArr.map(x => ethers.utils.keccak256(x));
      const tree = new MerkleTree(leaves, ethers.utils.keccak256, { sort: true });
      const root = "0x" + tree.getRoot().toString('hex')

      console.log(root)

      for (let i = 0; i < jsonArr.length; i++) {
        const leaf = ethers.utils.keccak256(hashArr[i]);
        const proof = tree.getHexProof(leaf);
        jsonArr[i].proof = (JSON.stringify(proof)).replace(/\"/g, '');
        jsonArr[i].leaf = leaf;
        console.log("verify:", tree.verify(proof, leaf, root))
        console.log("proof", proof)
      }
      writeFileSync(json, JSON.stringify(jsonArr));

    }
  );

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

task("dt", "deploy ERC721 Twitter contract")
  .setAction(
    async ({ }, { ethers, run, network }) => {
      // await run("compile");
      const [deployer] = await ethers.getSigners();
      const factory = await deployContract(
        "ERC721Twitter",
        network.name,
        ethers.getContractFactory,
        deployer,
        ["Twitter username NFT", "TUN"]
      ) as ERC721Twitter;
    }
  );

task("dw", "deploy wallet contract")
  .setAction(
    async ({ }, { ethers, run, network }) => {
      await run("compile");
      const [deployer] = await ethers.getSigners();
      const factory = await deployContract(
        "NFTWalletFactory",
        network.name,
        ethers.getContractFactory,
        deployer
      ) as NFTWalletFactory;
    }
  );

/*
npx hardhat ws \
--contract 0xddaefa94207e0df66e029ae175736c984ee83d85 \
--user 0xb88c136dC8ca5A8B3819B0Aeadf7c8706F59D897 \
--id "100000" \
--network metertest
*/
task("ws", "wallet signature")
  .addParam("contract", "nftWalletFactory address")
  .addParam("user", "user address")
  .addParam("id", "user id")
  .setAction(
    async ({ contract, user, id }, { ethers, run, network }) => {
      const [signer] = await ethers.getSigners();
      let signature = await walletSign(
        signer,
        contract,
        user,
        id,
        await signer.getChainId()
      )
      console.log("signer:", signer.address);
      console.log("signature:", signature);
    }
  );

/*
npx hardhat ts \
--contract 0x81d6e72b9cdcc865ec5f2ce64e24d0d92661f9e6 \
--user 0xb88c136dC8ca5A8B3819B0Aeadf7c8706F59D897 \
--name "user name" \
--id "100000" \
--network metertest
*/
task("ts", "twitter nft signature")
  .addParam("contract", "twitter nft address")
  .addParam("user", "user address")
  .addParam("name", "user name")
  .addParam("id", "token id")
  .setAction(
    async ({ contract, user, name, id }, { ethers, run, network }) => {
      const [signer] = await ethers.getSigners();
      let signature = await twitterSign(
        signer,
        contract,
        user,
        id,
        name,
        await signer.getChainId()
      )
      console.log("signer:", signer.address);
      console.log("signature:", signature);
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
