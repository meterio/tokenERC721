import { NFTWalletFactory, NFTWallet, TokenERC20, TokenERC721, TokenERC1155 } from "../typechain";
import { ethers, waffle } from "hardhat";
import { BytesLike, utils, Contract, constants } from "ethers";
import { walletSign } from "./utils/permitSign";

import { expect } from "./utils/expect";

const amount = utils.parseUnits("1", 18);
const deploy = async (name: string, args: any[] = []): Promise<Contract> => {
  return await (
    await ethers.getContractFactory(name)
  ).deploy(...args)
}

const [root, ...accounts] = waffle.provider.getWallets();

describe("controller tests", function () {

  let nftWalletFactory: NFTWalletFactory;
  let erc20: TokenERC20;
  let erc721: TokenERC721;
  let erc1155: TokenERC1155;
  let wallet: NFTWallet;
  let walletAddress: string;
  let signature: BytesLike;


  before(async function () {
    nftWalletFactory = await deploy("NFTWalletFactory") as NFTWalletFactory;
    erc20 = await deploy("TokenERC20", [
      "Token ERC20",
      "TOKEN",
      utils.parseUnits("100000000", 18)
    ]) as TokenERC20;
    erc721 = await deploy("TokenERC721", [
      "Token ERC721",
      "NFT"
    ]) as TokenERC721;
    erc1155 = await deploy("TokenERC1155") as TokenERC1155;
    let user = accounts[0].address;
    let receipt = await nftWalletFactory["deploy(address,uint256)"](user, 1);
    walletAddress = await nftWalletFactory.getAddress(1);
    expect(receipt).to.emit(nftWalletFactory, "NewWallet")
      .withArgs(
        user,
        1,
        walletAddress
      );
    wallet = await ethers.getContractAt("NFTWallet", walletAddress, accounts[0]) as NFTWallet;
  });


  it("send value", async function () {
    let sender = accounts[1];
    let user = accounts[0].address;

    await sender.sendTransaction(
      {
        to: walletAddress,
        value: amount
      }
    )
    expect(await ethers.provider.getBalance(walletAddress)).equal(amount);
  });

  it("withdraw value", async function () {
    let receiver = accounts[1];
    let balanceBefore = await ethers.provider.getBalance(receiver.address);

    await wallet.sendValue(receiver.address, amount);

    let balanceAfter = await ethers.provider.getBalance(receiver.address);
    expect(balanceAfter.sub(balanceBefore)).equal(amount);

  });

  it("send ERC20", async function () {
    await erc20.transfer(walletAddress, amount);

    expect(await erc20.balanceOf(walletAddress)).equal(amount);
  });

  it("withdraw ERC20", async function () {
    let receiver = accounts[1];
    await wallet.safeTransfer(erc20.address, receiver.address, amount);
    expect(await erc20.balanceOf(receiver.address)).equal(amount);

  });


  it("send ERC721", async function () {
    await erc721.mint(walletAddress);
    expect(await erc721.balanceOf(walletAddress)).equal(1);
  });

  it("withdraw ERC721", async function () {
    let receiver = accounts[1];
    await wallet["safeTransferFrom(address,address,uint256)"](erc721.address, receiver.address, 0);
    expect(await erc721.balanceOf(receiver.address)).equal(1);

  });

  it("send ERC1155", async function () {
    await erc1155.mint(walletAddress, 1, amount, "0x00");
    expect(await erc1155.balanceOf(walletAddress, 1)).equal(amount);
  });

  it("withdraw ERC1155", async function () {
    let receiver = accounts[1];
    await wallet["safeTransferFrom(address,address,uint256,uint256)"](erc1155.address, receiver.address, 1, amount);
    expect(await erc1155.balanceOf(receiver.address, 1)).equal(amount);

  });

  it("set owner", async function () {
    let newOwner = accounts[2].address;
    let receipt = await nftWalletFactory.setOwner(walletAddress, newOwner);
    expect(receipt).to.emit(wallet, "NewOwner")
      .withArgs(newOwner);
  });

  it("kill", async function () {
    let sender = accounts[1];
    await sender.sendTransaction(
      {
        to: walletAddress,
        value: amount
      }
    );
    let balance = await ethers.provider.getBalance(walletAddress)
    let receipt = await nftWalletFactory.kill(walletAddress);
    expect(receipt).to.emit(wallet, "Kill")
      .withArgs(
        nftWalletFactory.address,
        accounts[2].address,
        balance
      );
  });

  it("verifySignature", async function () {
    let user = accounts[0];
    signature = await walletSign(
      root,
      nftWalletFactory.address,
      user.address,
      "1",
      await root.getChainId()
    )
    let signer = await nftWalletFactory.verifySignature(
      user.address,
      1,
      signature
    );
    expect(signer).equals(root.address);
  });

  it("deploy with signature", async function () {
    let user = accounts[0];
    let receipt = await nftWalletFactory["deploy(address,uint256,bytes)"](
      user.address,
      1,
      signature
    );
    walletAddress = await nftWalletFactory.getAddress(1);
    expect(receipt).to.emit(nftWalletFactory, "NewWallet")
      .withArgs(
        user.address,
        1,
        walletAddress
      );
  });
});
