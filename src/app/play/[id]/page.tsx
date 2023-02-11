"use client";

import Title from "@/components/Title";

export default function Game({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-red-600 via-red-300 to-orange-500 background-animate">
      <Title className="bg-black mt-5 text-xl">{`[[${params.id}]]`}</Title>
    </div>
  );
}
