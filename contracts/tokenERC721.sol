// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721AMint is ERC721A, Ownable {
    uint256 public maxSupply = 9999;
    uint256 public cost = 0.001 ether;
    uint256 public maxMintPerTx = 5;
    uint256 public maxMintPerAccount = 5;
    bool public saleActive;
    string public baseURI;
    mapping(address => uint256) public accountMinted;

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
        _safeMint(msg.sender, quantity);
    }

    function setMaxSupply(uint256 _maxSupply) public onlyOwner {
        maxSupply = _maxSupply;
    }

    function setCost(uint256 _cost) public onlyOwner {
        cost = _cost;
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

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }
}
