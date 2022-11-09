import { Signer, VoidSigner, BigNumber } from "ethers"
import { BytesLike, } from "@ethersproject/bytes";
export async function twitterSign(
  wallet: Signer,
  verifyingContract: string,
  user: string,
  tokenId: string,
  _username: string,
  chainId: number
): Promise<BytesLike> {

  const name = "ERC721Twitter";
  const version = "1.0";
  let signer = wallet as VoidSigner;
  let signature = await signer._signTypedData(
    { name, version, chainId, verifyingContract },
    {
      ERC721Twitter: [
        { name: "user", type: "address" },
        { name: "tokenId", type: "uint256" },
        { name: "_username", type: "string" }
      ],
    },
    {
      user: user,
      tokenId: tokenId,
      _username: _username
    }
  );
  return signature;
}

export async function walletSign(
  wallet: Signer,
  verifyingContract: string,
  user: string,
  uid: string,
  chainId: number
): Promise<BytesLike> {

  const name = "NFTWallet";
  const version = "1.0";
  let signer = wallet as VoidSigner;
  let signature = await signer._signTypedData(
    { name, version, chainId, verifyingContract },
    {
      NFTWallet: [
        { name: "user", type: "address" },
        { name: "uid", type: "uint256" }
      ],
    },
    {
      user: user,
      uid: uid
    }
  );
  return signature;
}
