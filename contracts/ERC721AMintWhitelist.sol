// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract ERC721AMint is ERC721A, Ownable {
    uint256 public maxSupply = 9999;
    uint256 public cost = 0.1 ether;
    uint256 public wlcost = 0.05 ether;
    uint256 public maxMintPerTx = 5;
    uint256 public maxMintPerAccount = 5;
    bool public saleActive;
    string public baseURI;
    bytes32 public root;
    mapping(address => uint256) public accountMinted;
    mapping(address => bool) public wlClaimed;

    constructor() ERC721A("Azuki", "AZUKI") {}

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract");
        _;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mint(uint256 quantity) external payable callerIsUser {
        require(saleActive, "Sale must be active to mint");
        require(
            quantity > 0 && quantity <= maxMintPerTx,
            "Sender is trying to mint too many in a single transaction"
        );
        require(
            accountMinted[msg.sender] + quantity <= maxMintPerAccount,
            "Sender is trying to mint more than allocated tokens"
        );
        require(msg.value >= cost * quantity, "Amount of ether is not enough");
        require(
            totalSupply() + quantity <= maxSupply,
            "Mint would exceed max supply of mints"
        );
        accountMinted[msg.sender] += quantity;
        maxSupply += quantity;
        _safeMint(msg.sender, quantity);
    }

    function wlMint(bytes32[] calldata proof, uint256 quantity) public payable {
        require(!wlClaimed[msg.sender], "aleardy claimed!");
        wlClaimed[msg.sender] = true;
        require(
            msg.value >= wlcost * quantity,
            "Amount of ether is not enough"
        );
        require(
            MerkleProof.verify(
                proof,
                root,
                keccak256(abi.encode(quantity, msg.sender))
            ),
            "invalid merkle proof"
        );
        accountMinted[msg.sender] += quantity;
        maxSupply += quantity;
        _safeMint(msg.sender, quantity);
    }

    function setMaxSupply(uint256 _maxSupply) public onlyOwner {
        maxSupply = _maxSupply;
    }

    function setCost(uint256 _cost) public onlyOwner {
        cost = _cost;
    }

    function setWlCost(uint256 _wlcost) public onlyOwner {
        wlcost = _wlcost;
    }

    function setMaxMintPerTx(uint256 _maxMintPerTx) public onlyOwner {
        maxMintPerTx = _maxMintPerTx;
    }

    function setMaxMintPerAccount(uint256 _maxMintPerAccount) public onlyOwner {
        maxMintPerAccount = _maxMintPerAccount;
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

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }
}
