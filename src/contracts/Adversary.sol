// SPDX-License-Identifier: MIT
// States that we are open source with respect to the MIT open-source license

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
contract Adversary {
    // holds address and tokenID from the original contract (in which the nft was first minted)
    struct Token {
        bool exists;
        uint256 tokenID;
        IERC721 originalContract;
    }

    struct Game {
        address host;
        address challenger;
    }

    address private admin;
    uint256 private nextGameID;
    mapping(uint256 => Game) public games;
    mapping(uint256 => mapping (uint256 => Token)) public tokens;

    constructor() {
        admin = msg.sender;
        nextGameID = 0;
    }

    function play(
        address host,
        address challenger,
        uint256[] memory tokenIDs,
        IERC721[] memory originalContracts
    ) public onlyAdmin {
        require(
            tokenIDs.length == originalContracts.length,
            "tokenID and address lists are not same length"
        );

        games[nextGameID] = Game(host, challenger);
        for (uint256 i = 0; i < tokenIDs.length; i++)
            tokens[nextGameID][i] = (Token(true, tokenIDs[i], originalContracts[i]));
        nextGameID++;
    }

    function payout(uint gameID, address winner) public onlyAdmin {
        uint256 id = 0;
        while (true) {
            Token memory token = tokens[gameID][id];
            if (!token.exists) break;
            token.originalContract.safeTransferFrom(address(this), winner, token.tokenID);
            id++;
        }
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admins can call this function.");
        _;
    }
}
