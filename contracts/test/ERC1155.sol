// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract TokenERC1155 is ERC1155PresetMinterPauser {
    constructor() ERC1155PresetMinterPauser("") {}
}
