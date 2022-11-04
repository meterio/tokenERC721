// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract ERC721AMint is ERC721Enumerable, Ownable {
    uint256 public maxSupply = 9999;
    uint256 public maxMintPerAccount = 2;
    bool public saleActive;
    string public baseURI;
    bytes32 public root;
    mapping(address => uint256) public accountMinted;
    mapping(address => uint256) public wlClaimed;

    constructor() ERC721("Azuki", "AZUKI") {}

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract");
        _;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mint(uint256 quantity) external callerIsUser {
        require(saleActive, "Sale must be active to mint");
        require(
            quantity > 0,
            "Sender is trying to mint too many in a single transaction"
        );
        require(
            accountMinted[msg.sender] + quantity <= maxMintPerAccount,
            "Sender is trying to mint more than allocated tokens"
        );
        require(
            totalSupply() + quantity <= maxSupply,
            "Mint would exceed max supply of mints"
        );
        accountMinted[msg.sender] += quantity;
        maxSupply += quantity;
        _safeMint(msg.sender, quantity);
    }

    function wlMint(bytes32[] calldata proof, uint256 quantity) public {
        wlClaimed[msg.sender] = wlClaimed[msg.sender] + quantity;
        require(
            wlClaimed[msg.sender] <= maxMintPerAccount,
            "Sender is trying to mint more than allocated tokens"
        );
        require(
            MerkleProof.verify(proof, root, keccak256(abi.encode(msg.sender))),
            "invalid merkle proof"
        );
        wlClaimed[msg.sender] += quantity;
        maxSupply += quantity;
        _safeMint(msg.sender, quantity);
    }

    function airdrop(address[] calldata accounts) public onlyOwner {
        for (uint256 i; i < accounts.length; ++i) {
            _safeMint(accounts[i], 1);
        }
    }

    function setSaleActive(bool _saleActive) public onlyOwner {
        saleActive = _saleActive;
    }

    function setBaseURI(string memory baseURI_) public onlyOwner {
        baseURI = baseURI_;
    }

    function setRoot(bytes32 _root) public onlyOwner {
        root = _root;
    }
}
