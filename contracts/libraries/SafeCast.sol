// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

library SafeCast {
    function toUint216(uint256 value) internal pure returns (uint216) {
        require(value < 2**216, "!EXCEEDS 216 bits");
        return uint216(value);
    }

    function toUint104(uint256 value) internal pure returns (uint104) {
        require(value < 2**104, "!EXCEEDS 104 bits");
        return uint104(value);
    }

    function toUint48(uint256 value) internal pure returns (uint48) {
        require(value < 2**48, "!EXCEEDS 48 bits");
        return uint48(value);
    }

    function toUint40(uint256 value) internal pure returns (uint40) {
        require(value < 2**40, "!EXCEEDS 40 bits");
        return uint40(value);
    }
}
