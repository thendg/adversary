import { useEffect, useState } from "react";
import { Bounds, Position } from "./model";

const STEP = 10;

export default function Player({
  startPos,
  bounds,
  isPlayer = false,
}: {
  startPos: Position;
  bounds: Bounds;
  isPlayer?: boolean;
}) {
  const [pos, setPos] = useState(startPos);

  function moveY(value: number) {
    if (value > 0) pos.y = Math.min(bounds.ymax, pos.y + value);
    else pos.y = Math.max(bounds.ymin, pos.y + value);
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
