"use client";

import Ball from "@/components/game/Ball";
import Player from "@/components/game/Player";
import Score from "@/components/game/Score";
import Title from "@/components/Title";
import { useState } from "react";

const HORIZONTAL_DISTANCE_FROM_CENTER = 600;
const VERTICAL_DISTANCE_FROM_CENTER = 250;

export default function Game({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [scores, setScores] = useState([0, 0]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-red-600 via-red-300 to-orange-500 background-animate">
      <Title className="bg-black mt-5 text-xl">{`[[${params.id}]]`}</Title>
      <Score className="left-4 top-10" score={scores[0]} />
      <div className="relative">
        <Player
          startPos={{
            x: -HORIZONTAL_DISTANCE_FROM_CENTER,
            y: VERTICAL_DISTANCE_FROM_CENTER,
          }}
          bounds={{ ymin: 0, ymax: 600 }}
          isPlayer
        />
        <Ball startPos={{ x: 0, y: VERTICAL_DISTANCE_FROM_CENTER }} />
      </div>
      <Score className="right-4 top-10" score={scores[1]} />
    </div>
  );
}
