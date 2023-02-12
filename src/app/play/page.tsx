"use client";

import Button from "@/components/Button";
import ConnectedWallet from "@/components/ConnectedWallet";
import Input from "@/components/Input";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Address, useContractRead } from "wagmi";
import { abi } from "../../contracts/artifacts/src/contracts/Adversary.sol/Adversary.json";

export default function Play() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // function create() {
  //   if (inputRef.current) {
  //     // opponent address is inputRef.current.value
  //     //inputRef.current.value = "";
  //     const { data, isError, isLoading } = useContractRead({
  //       address: "0x86Ba0e84e40Bff84A0bEb2Fc042cd22d83Df29Af",
  //       abi: abi,
  //       functionName: 'play',
  //       args: [host, inputRef.current.value, tokenids, original contract address]
  //     })
  //   }
  // }

  // function getApproval({
  //   contractAddress,
  //   tokenID,
  // }: {
  //   contractAddress: Address;
  //   tokenID: string;
  // }) {
  //   const { data, isError, isLoading } = useContractRead({
  //     address: contractAddress,
  //     functionName: "approve",
  //     args: ["0x86Ba0e84e40Bff84A0bEb2Fc042cd22d83Df29Af", tokenID],
  //   });
  // }

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
          <Button className="text-3xl">Create</Button>
          <Button className="text-3xl" onClick={join}>
            Join
          </Button>
          <Button
            className="text-3xl"
            // onClick={
            //   () => console.log("lol")
            //   // getApproval({
            //   //   contractAddress: "0x64FecD59485EfCcb307a3E310aEFB60c25112638",
            //   //   tokenID: "1",
            //   // })
            // }
          >
            test approval
          </Button>
        </div>
      </div>
    </ConnectedWallet>
  );
}
