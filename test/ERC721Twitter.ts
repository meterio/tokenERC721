import { ERC721Twitter } from "../typechain";
import { ethers, waffle } from "hardhat";
import { BytesLike, utils, Wallet, Contract, constants } from "ethers";
import { twitterSign } from "./utils/permitSign"

import { expect } from "./utils/expect";

const amount = utils.parseUnits("1", 18);
const deploy = async (name: string, args: any[] = []): Promise<Contract> => {
  return await (
    await ethers.getContractFactory(name)
  ).deploy(...args)
}

const [root, ...accounts] = waffle.provider.getWallets();

describe("controller tests", function () {

  let nft: ERC721Twitter;

  let signature: BytesLike;

  before(async function () {
    nft = await deploy("ERC721Twitter", ["NFT Token", "NFT"]) as ERC721Twitter;
  });


  it("mint", async function () {
    let holder = accounts[1];

    let receipt = await nft["mint(address,uint256,string)"](holder.address, 1, "username");
    expect(receipt).to.emit(nft, "Transfer")
      .withArgs(
        constants.AddressZero,
        holder.address,
        1
      );
  });

  it("verifySignature", async function () {
    let holder = accounts[1];
    signature = await twitterSign(
      root,
      nft.address,
      holder.address,
      "1",
      "new name",
      await root.getChainId()
    )
    let signer = await nft.verifySignature(holder.address, 1, "new name", signature);
    expect(signer).equals(root.address);
  });

  it("setUsername", async function () {
    let holder = accounts[1];
    let receipt = await nft.connect(holder).setUsername(1, "new name", signature);
    expect(receipt).to.emit(nft, "SetUsername")
      .withArgs(
        "username",
        "new name",
        1
      );
  });

  it("verifySignature", async function () {
    let holder = accounts[2];
    signature = await twitterSign(
      root,
      nft.address,
      holder.address,
      "2",
      "new Token",
      await root.getChainId()
    )
    let signer = await nft.verifySignature(holder.address, 2, "new Token", signature);
    expect(signer).equals(root.address);
  });

  it("mint", async function () {
    let holder = accounts[2];

    let receipt = await nft["mint(address,uint256,string,bytes)"](holder.address, 2, "new Token", signature);
    expect(receipt).to.emit(nft, "Transfer")
      .withArgs(
        constants.AddressZero,
        holder.address,
        2
      );
  });
});
