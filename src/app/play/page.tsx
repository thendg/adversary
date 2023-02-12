"use client";

import Button from "@/components/Button";
import ConnectedWallet from "@/components/ConnectedWallet";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Play() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function create() {
    if (inputRef.current) {
      // opponent address is inputRef.current.value
      inputRef.current.value = "";
    }
  }

  function join() {
    if (inputRef.current) {
      router.push(`/play/${inputRef.current.value}`);
    }
  }

  return (
    <ConnectedWallet>
      <div className="w-full h-screen gap-4 flex flex-col justify-center items-center bg-gradient-to-r from-gray-400 to-black-900 background-animate">
        <Title>Play</Title>
        <Input
          className="w-2/5 bg-white text-black"
          placeHolder="Enter a Game ID or the address of your opponent..."
          ref={inputRef}
        />
        <div className="flex gap-5">
          <Button className="text-3xl" onClick={create}>
            Create
          </Button>
          <Button className="text-3xl" onClick={join}>
            Join
          </Button>
        </div>
      </div>
    </ConnectedWallet>
  );
}
