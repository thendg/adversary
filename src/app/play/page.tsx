"use client";

import Button from "@/components/Button";
import ConnectedWallet from "@/components/ConnectedWallet";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useContractRead } from "wagmi";

export default function Play() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function create() {
    if (inputRef.current) {
      // opponent address is inputRef.current.value
      //inputRef.current.value = "";
      // const { data, isError, isLoading } = useContractRead({
      //   address: "0x86Ba0e84e40Bff84A0bEb2Fc042cd22d83Df29Af",
      //   abi: //Adversary contract abi here,
      //   functionName: 'play',
      //   args: ['host', inputRef.current, tokenids, original contract address]
      // })
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
