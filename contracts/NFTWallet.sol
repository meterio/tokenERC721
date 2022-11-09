// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";

interface IERC721 {
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
}

interface IERC1155 {
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}

contract NFTWallet {
    address public factory;
    address public owner;
    using SafeERC20 for IERC20;
    using Address for address;
    using Address for address payable;
    event NewOwner(address owner);
    event Kill(address factory, address owner, uint256 balance);

    constructor() {
        factory = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner!");
        _;
    }
    modifier onlyFactory() {
        require(msg.sender == factory, "forbidden");
        _;
    }

    function kill() external onlyFactory {
        emit Kill(factory, owner, address(this).balance);
        selfdestruct(payable(owner));
    }

    function setOwner(address _owner) external onlyFactory {
        owner = _owner;
        emit NewOwner(owner);
    }

    receive() external payable {}

    function sendValue(address payable to, uint256 amount) external onlyOwner {
        to.sendValue(amount);
    }

    function safeTransfer(
        IERC20 token,
        address to,
        uint256 amount
    ) external onlyOwner {
        token.safeTransfer(to, amount);
    }

    function safeTransferFrom(
        address token,
        address to,
        uint256 tokenId
    ) external onlyOwner {
        token.functionCall(
            abi.encodeWithSelector(
                IERC721(token).safeTransferFrom.selector,
                address(this),
                to,
                tokenId
            ),
            "Token ERC721 transfer fail!"
        );
    }

    function safeTransferFrom(
        address token,
        address to,
        uint256 id,
        uint256 amount
    ) external onlyOwner {
        token.functionCall(
            abi.encodeWithSelector(
                IERC1155(token).safeTransferFrom.selector,
                address(this),
                to,
                id,
                amount,
                new bytes(0)
            ),
            "Token ERC1155 transfer fail!"
        );
    }

    function callFunction(address target, bytes calldata data)
        external
        payable
    {
        (bool success, bytes memory returndata) = target.call{value: msg.value}(
            data
        );
        Address.verifyCallResult(success, returndata, "call faile");
    }

    function safeBatchTransferFrom(
        address token,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts
    ) external onlyOwner {
        token.functionCall(
            abi.encodeWithSelector(
                IERC1155(token).safeTransferFrom.selector,
                address(this),
                to,
                ids,
                amounts,
                new bytes(0)
            ),
            "Token ERC1155 transfer fail!"
        );
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4) {
        return this.onERC721Received.selector;
    }

    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}
