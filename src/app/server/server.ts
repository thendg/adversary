import WebSocket from 'ws';
import * as log from "loglevel";
import { ClientMessage, ServerMessage } from './protocol';

export class Server {
    wss: WebSocket.Server;
    games: Array<{ gameID: number, full: boolean }>;
    nextGameID: number;

    constructor(port: number) {
        this.wss = new WebSocket.Server({
          port: port,
        });
        this.games = [];
        this.nextGameID = 0;

        this.wss.on("connection", (conn) => {
            console.log("connected.")


            let clientID: string | null = null;
            conn.on("message", (data: string) => {
                log.debug(`Received data: ${data}.`);
                let msg: ClientMessage = JSON.parse(data);
    
                if (msg.kind === "match-request") {
                    if (clientID) throw new Error(`Already sent a match request.`);
    
                    clientID = msg.clientID;
                    
                    let gameID = this.findGame();
                    if (gameID === null) {
                        // If we found no game, then make new game
                        this.games.push({
                            gameID: this.nextGameID,
                            full: false
                        })
                        let resp: ServerMessage = { kind: "new-match" };
                        conn.send(JSON.stringify(resp));
                    } else {
                        // If we found a game, tell our client to join that room
                        // and clear it from the list.
                        let resp: ServerMessage = { kind: "join-match", gameID: gameID };
                        conn.send(JSON.stringify(resp));
                        this.removeGame(gameID);
                    }
                }
            });



            conn.on("close", () => {
                console.log("disconnected.")
            });
        });
    }

    findGame(): number | null {
        let games = this.games.filter(r => { r.full === false });
        if(games.length > 0) {
            return games[0].gameID;
        }
        return null;
    }

    removeGame(gameID: number) {
        this.games = this.games.filter(game => game.gameID === gameID)
    }



    close() {
        this.wss.close();
    }
}

// when people join a game room, you somehow store their info so you can send to them later
// when someone in a game room sends you a state update, update everyone else in that room of the state update