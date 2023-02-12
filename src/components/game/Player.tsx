import { useEffect, useState } from "react";
import { Bounds, Position } from "./model";
import { io } from "socket.io-client";

const socket = io("ws://localhost:4000");

const STEP = 10;

export default function Player({
  startPos,
  bounds,
  gameID,
  isPlayer = false,
}: {
  startPos: Position;
  bounds: Bounds;
  gameID: string;
  isPlayer?: boolean;
}) {
  const [pos, setPos] = useState(startPos);

  function getServerData(data?: { [key: string]: any }) {
    return {
      id: socket.id,
      gameID,
      data,
    };
  }

  function moveY(value: number) {
    if (value > 0) pos.y = Math.min(bounds.ymax, pos.y + value);
    else pos.y = Math.max(bounds.ymin, pos.y + value);
    socket.emit("request_position_update", getServerData(pos));
    setPos({ ...pos });
  }

  function onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case "w":
        moveY(-STEP);
        break;
      case "s":
        moveY(STEP);
        break;
    }
  }

  if (isPlayer) {
    useEffect(() => {
      document.addEventListener("keydown", onKeyDown, false);
      return () => {
        document.removeEventListener("keydown", onKeyDown, false);
      };
    }, []);

    useEffect(() => {
      socket.on("connect", () => {
        console.log("connected");
      });

      socket.on("disconnect", () => {
        console.log("disconnected");
      });

      socket.emit("join", getServerData());

      return () => {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("join");
      };
    }, []);
  } else {
    useEffect(() => {
      socket.on("position_update", (data) => {
        console.log(data);
        setPos({ ...data });
      });

      return () => {
        socket.off("data");
      };
    }, []);
  }

  return (
    <>
      <div
        className="bg-white w-3 h-32"
        style={{ position: "absolute", left: pos.x, top: pos.y }}
      />
    </>
  );
}
