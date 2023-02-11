// SPDX-License-Identifier: MIT
// States that we are open source with respect to the MIT open-source license

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
// Author: @miron-bykov
contract Adversary {
    // holds address and tokenID from the original contract (in which the nft was first minted)
    struct Token {
        uint256 tokenID;
        IERC721 originalContract;
    }

    struct Game {
        address host;
        address challenger;
        Token[] prizePool;
    }

    address private admin;
    uint256 private nextGameID;
    mapping(uint256 => Game) public games;

    constructor() {
        admin = msg.sender;
        nextGameID = 0;
    }

    function setNextID() private {
        nextGameID++;
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

        Token[] memory temporaryPool = new Token[](tokenIDs.length);
        for (uint256 i = 0; i < tokenIDs.length; i++) {
            temporaryPool[i] = (Token(tokenIDs[i], originalContracts[i]));
        }
        games[nextGameID] = Game(host, challenger, temporaryPool);
    }

    function payout(uint gameID, address winner) public onlyAdmin {
        Token[] memory prizes = games[gameID].prizePool;
        for (uint256 i = 0; i < prizes.length; i++) {
            prizes[i].originalContract.safeTransferFrom(address(this), winner, prizes[i].tokenID);
        }
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admins can call this function.");
        _;
    }
}
