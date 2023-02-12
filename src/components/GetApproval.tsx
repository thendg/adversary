import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";
import { abi } from "../contracts/artifacts/src/contracts/Demo.sol/MyToken.json";
import { ERC721TokenType, Link } from "@imtbl/imx-sdk";

export default async function GetApproval({
  contractAddress,
  tokenID_,
}: {
  contractAddress: Address;
  tokenID_: string;
}) {
  const unsignedTransferRequest = {
    type: "ERC721",
    tokenId: tokenID_,
    tokenAddress: contractAddress,
    receiver: "0x94e89d68f6F2b60B99af547d77E910ACd830D7A9",
  };

 

  const link = new Link("https://link.sandbox.x.immutable.com");
  const transferResponsePayload = await link.transfer([
    {
      type: "ERC721",
      tokenId: tokenID_,
      tokenAddress: contractAddress,
      status: "success",
      toAddress: "0x94e89d68f6F2b60B99af547d77E910ACd830D7A9",
      //txId: 123,
    },
  ]);

  // const { config } = usePrepareContractWrite({
  //   address: contractAddress,
  //   abi: abi,
  //   functionName: "approve",
  //   args: ["0x86Ba0e84e40Bff84A0bEb2Fc042cd22d83Df29Af", tokenID],
  // });

  // const { write } = useContractWrite(config);

  return (
    <div>
      <button disabled={!write} onClick={() => write?.()}>
        Approve
      </button>
    </div>
  );
}

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
