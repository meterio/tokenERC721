/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NFTWalletFactoryInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "PERMIT_TYPEHASH()": FunctionFragment;
    "deploy(address,uint256,bytes)": FunctionFragment;
    "getAddress(uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "kill(address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setOwner(address,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "verifySignature(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "kill", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySignature",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySignature",
    data: BytesLike
  ): Result;

  events: {
    "NewWallet(address,uint256,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewWallet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export class NFTWalletFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NFTWalletFactoryInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "deploy(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deploy(address,uint256)"(
      user: string,
      uid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAddress(
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getAddress(uint256)"(
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    kill(wallet: string, overrides?: Overrides): Promise<ContractTransaction>;

    "kill(address)"(
      wallet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setOwner(
      wallet: string,
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOwner(address,address)"(
      wallet: string,
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    verifySignature(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "verifySignature(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

  "deploy(address,uint256,bytes)"(
    user: string,
    uid: BigNumberish,
    signatures: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deploy(address,uint256)"(
    user: string,
    uid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAddress(uid: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "getAddress(uint256)"(
    uid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getRoleAdmin(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRoleMember(bytes32,uint256)"(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRoleMemberCount(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "grantRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kill(wallet: string, overrides?: Overrides): Promise<ContractTransaction>;

  "kill(address)"(
    wallet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "renounceRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "revokeRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setOwner(
    wallet: string,
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOwner(address,address)"(
    wallet: string,
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifySignature(
    user: string,
    uid: BigNumberish,
    signatures: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "verifySignature(address,uint256,bytes)"(
    user: string,
    uid: BigNumberish,
    signatures: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

    "deploy(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "deploy(address,uint256)"(
      user: string,
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAddress(uid: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "getAddress(uint256)"(
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kill(wallet: string, overrides?: CallOverrides): Promise<void>;

    "kill(address)"(wallet: string, overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      wallet: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setOwner(address,address)"(
      wallet: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifySignature(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "verifySignature(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    NewWallet(user: null, uid: null, wallet: null): EventFilter;

    RoleAdminChanged(
      role: BytesLike | null,
      previousAdminRole: BytesLike | null,
      newAdminRole: BytesLike | null
    ): EventFilter;

    RoleGranted(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;

    RoleRevoked(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): EventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<BigNumber>;

    "deploy(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deploy(address,uint256)"(
      user: string,
      uid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getAddress(
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAddress(uint256)"(
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kill(wallet: string, overrides?: Overrides): Promise<BigNumber>;

    "kill(address)"(wallet: string, overrides?: Overrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOwner(
      wallet: string,
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setOwner(address,address)"(
      wallet: string,
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifySignature(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifySignature(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DEFAULT_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PERMIT_TYPEHASH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deploy(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deploy(address,uint256)"(
      user: string,
      uid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getAddress(
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAddress(uint256)"(
      uid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kill(wallet: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "kill(address)"(
      wallet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setOwner(
      wallet: string,
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOwner(address,address)"(
      wallet: string,
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifySignature(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifySignature(address,uint256,bytes)"(
      user: string,
      uid: BigNumberish,
      signatures: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}