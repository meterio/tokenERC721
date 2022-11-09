/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TokenERC20 } from "../TokenERC20";

export class TokenERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<TokenERC20> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<TokenERC20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  attach(address: string): TokenERC20 {
    return super.attach(address) as TokenERC20;
  }
  connect(signer: Signer): TokenERC20__factory {
    return super.connect(signer) as TokenERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenERC20 {
    return new Contract(address, _abi, signerOrProvider) as TokenERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ee738038062000ee78339810160408190526200003491620002cb565b82828233838381600390805190602001906200005292919062000172565b5080516200006890600490602084019062000172565b5050506200007d81836200008a60201b60201c565b50505050505050620003b3565b6001600160a01b038216620000e55760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f991906200033b565b90915550506001600160a01b03821660009081526020819052604081208054839290620001289084906200033b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001809062000360565b90600052602060002090601f016020900481019282620001a45760008555620001ef565b82601f10620001bf57805160ff1916838001178555620001ef565b82800160010185558215620001ef579182015b82811115620001ef578251825591602001919060010190620001d2565b50620001fd92915062000201565b5090565b5b80821115620001fd576000815560010162000202565b600082601f83011262000229578081fd5b81516001600160401b03808211156200024657620002466200039d565b604051601f8301601f19908116603f011681019082821181831017156200027157620002716200039d565b816040528381526020925086838588010111156200028d578485fd5b8491505b83821015620002b0578582018301518183018401529082019062000291565b83821115620002c157848385830101525b9695505050505050565b600080600060608486031215620002e0578283fd5b83516001600160401b0380821115620002f7578485fd5b620003058783880162000218565b945060208601519150808211156200031b578384fd5b506200032a8682870162000218565b925050604084015190509250925092565b600082198211156200035b57634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200037557607f821691505b602082108114156200039757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610b2480620003c36000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101ad578063a457c2d7146101b5578063a9059cbb146101c8578063dd62ed3e146101db57600080fd5b806342966c681461015c57806370a082311461017157806379cc67901461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc610214565b6040516100e99190610a1b565b60405180910390f35b6101056101003660046109da565b6102a6565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b61010561013536600461099f565b6102bc565b604051601281526020016100e9565b6101056101573660046109da565b61036b565b61016f61016a366004610a03565b6103a7565b005b61011961017f36600461094c565b6001600160a01b031660009081526020819052604090205490565b61016f6101a83660046109da565b6103b4565b6100dc61043a565b6101056101c33660046109da565b610449565b6101056101d63660046109da565b6104e2565b6101196101e936600461096d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461022390610a9d565b80601f016020809104026020016040519081016040528092919081815260200182805461024f90610a9d565b801561029c5780601f106102715761010080835404028352916020019161029c565b820191906000526020600020905b81548152906001019060200180831161027f57829003601f168201915b5050505050905090565b60006102b33384846104ef565b50600192915050565b60006102c9848484610613565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103535760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61036085338584036104ef565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102b39185906103a2908690610a6e565b6104ef565b6103b133826107e2565b50565b60006103c083336101e9565b90508181101561041e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b606482015260840161034a565b61042b83338484036104ef565b61043583836107e2565b505050565b60606004805461022390610a9d565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104cb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161034a565b6104d833858584036104ef565b5060019392505050565b60006102b3338484610613565b6001600160a01b0383166105515760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161034a565b6001600160a01b0382166105b25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161034a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106775760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161034a565b6001600160a01b0382166106d95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161034a565b6001600160a01b038316600090815260208190526040902054818110156107515760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161034a565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610788908490610a6e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107d491815260200190565b60405180910390a350505050565b6001600160a01b0382166108425760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161034a565b6001600160a01b038216600090815260208190526040902054818110156108b65760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161034a565b6001600160a01b03831660009081526020819052604081208383039055600280548492906108e5908490610a86565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b80356001600160a01b038116811461094757600080fd5b919050565b60006020828403121561095d578081fd5b61096682610930565b9392505050565b6000806040838503121561097f578081fd5b61098883610930565b915061099660208401610930565b90509250929050565b6000806000606084860312156109b3578081fd5b6109bc84610930565b92506109ca60208501610930565b9150604084013590509250925092565b600080604083850312156109ec578182fd5b6109f583610930565b946020939093013593505050565b600060208284031215610a14578081fd5b5035919050565b6000602080835283518082850152825b81811015610a4757858101830151858201604001528201610a2b565b81811115610a585783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610a8157610a81610ad8565b500190565b600082821015610a9857610a98610ad8565b500390565b600181811c90821680610ab157607f821691505b60208210811415610ad257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220501d31560f8035a55ff49cba0794ff28400a7e686fb549ccd8a83150731d780c64736f6c63430008040033";