// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "./Base64.sol";

contract ERC721Twitter is EIP712, ERC721, AccessControlEnumerable {
    using Strings for uint256;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    mapping(uint256 => string) public username;

    bytes32 public constant PERMIT_TYPEHASH =
        keccak256(
            "ERC721Twitter(address user,uint256 tokenId,string _username)"
        );

    constructor(
        string memory name, //代币名称
        string memory symbol //代币缩写
    ) ERC721(name, symbol) EIP712("ERC721Twitter", "1.0") {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControlEnumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function mint(
        address user,
        uint256 tokenId,
        string calldata _username
    ) public {
        require(
            hasRole(MINTER_ROLE, _msgSender()),
            "ERC721MinterBurnerPauser: must have minter role to mint"
        );
        username[tokenId] = _username;
        _mint(user, tokenId);
    }

    function setUsername(
        uint256 tokenId,
        string calldata _username,
        bytes memory signatures
    ) public {
        bytes32 hash = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    PERMIT_TYPEHASH,
                    msg.sender,
                    tokenId,
                    keccak256(abi.encode(_username))
                )
            )
        );
        address signer = ECDSA.recover(hash, signatures);
        require(
            hasRole(MINTER_ROLE, signer),
            "ERC721MinterBurnerPauser: must have minter role to mint"
        );
        username[tokenId] = _username;
    }

    function tokenURI(uint _tokenId)
        public
        view
        override
        returns (string memory output)
    {
        output = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: black; font-family: Impact; font-size: 50px; }</style><rect width='100%' height='100%' fill='#aaaaff' /><text x='10' y='60' class='base'>";

        output = string(
            abi.encodePacked(
                output,
                "@",
                username[_tokenId],
                "</text></svg>"
            )
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        "{'name': 'NFT #",
                        _tokenId.toString(),
                        "', 'description': 'Voltswap locks, can be used to boost gauge yields, vote on token emission, and receive bribes', 'image': 'data:image/svg+xml;base64,",
                        Base64.encode(bytes(output)),
                        "'}"
                    )
                )
            )
        );
        output = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
    }
}
