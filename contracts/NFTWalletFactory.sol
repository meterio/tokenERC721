// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "./NFTWallet.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

contract NFTWalletFactory is AccessControlEnumerable, EIP712 {
    // salt = hash(address,twitter uid)
    event NewWallet(address user, uint256 uid, address wallet);
    bytes32 public constant PERMIT_TYPEHASH =
        keccak256("NFTWallet(address user,uint256 uid)");

    constructor() EIP712("NFTWallet", "1.0") {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    modifier onlyAdmin() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, _msgSender()),
            "NFTWalletFactory: must have admin role to mint"
        );
        _;
    }

    function deploy(address user, uint256 uid)
        external
        onlyAdmin
        returns (address)
    {
        bytes32 salt = keccak256(abi.encode(uid));
        NFTWallet newWallet = new NFTWallet{salt: salt}();
        newWallet.setOwner(user);
        emit NewWallet(user, uid, address(newWallet));
        return address(newWallet);
    }

    function deploy(
        address user,
        uint256 uid,
        bytes memory signatures
    ) external returns (address) {
        address signer = verifySignature(user, uid, signatures);
        require(
            hasRole(DEFAULT_ADMIN_ROLE, signer),
            "NFTWalletFactory: must have admin role to mint"
        );
        bytes32 salt = keccak256(abi.encode(uid));
        NFTWallet newWallet = new NFTWallet{salt: salt}();
        newWallet.setOwner(user);
        emit NewWallet(user, uid, address(newWallet));
        return address(newWallet);
    }

    function setOwner(address payable wallet, address newOwner)
        external
        onlyAdmin
    {
        NFTWallet(wallet).setOwner(newOwner);
    }

    function kill(address payable wallet) external onlyAdmin {
        NFTWallet(wallet).kill();
    }

    function verifySignature(
        address user,
        uint256 uid,
        bytes memory signatures
    ) public view returns (address) {
        bytes32 hash = _hashTypedDataV4(
            keccak256(abi.encode(PERMIT_TYPEHASH, user, uid))
        );
        return ECDSA.recover(hash, signatures);
    }

    function getAddress(uint256 uid) public view returns (address) {
        bytes32 salt = keccak256(abi.encode(uid));
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                salt,
                keccak256(type(NFTWallet).creationCode)
            )
        );
        return address(uint160(uint256(hash)));
    }
}
