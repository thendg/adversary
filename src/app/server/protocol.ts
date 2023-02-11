import { type } from "os";

type Message = {
    kind: "match-request" | "new-match" | "join-match";

    /**
     * The game that we are searching for a match for. You will only
     * be matched with people in the same game.
     */
    game: string;

    /**
     * The version of the game. You will only be matched with people
     * that have the same version number.
     */
    version: number;

    /**
     * The peerjs ID that people can use to connect to you.
     */
    clientID: string;
}

type ClientMessage = {
    kind: "match-request";

    /**
     * The game that we are searching for a match for. You will only
     * be matched with people in the same game.
     */
    game: string;

    /**
     * The version of the game. You will only be matched with people
     * that have the same version number.
     */
    version: number;

    /**
     * The peerjs ID that people can use to connect to you.
     */
    clientID: string;
};

type ServerMessage = {
    /**
     * The server tells the client to act as a host and wait for
     * incoming connections.
     */
    kind: "new-match"
} | {
    /**
     * The server tells the client to act as a client and connect
     * to the specified id.
     */
    kind: "join-match"
    gameID: number;
};

export type{ClientMessage, ServerMessage}
