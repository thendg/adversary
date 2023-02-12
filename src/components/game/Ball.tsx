import { useEffect, useState } from "react";
import { Position } from "./model";

export default function Ball({ startPos }: { startPos: Position }) {
  const [pos, setPos] = useState(startPos);

  return (
    <div
      className={`w-6 h-6 rounded-full bg-white`}
      style={{ position: "absolute", left: pos.x, top: pos.y }}
    />
  );
}
