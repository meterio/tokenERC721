// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract TokenERC721 is ERC721PresetMinterPauserAutoId {
    constructor(
        string memory name,
        string memory symbol
    ) ERC721PresetMinterPauserAutoId(name, symbol, "") {}
}
