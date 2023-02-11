"use client";

import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Button from "./Button";

export default function ConnectedWallet({
  children,
}: {
  children?: JSX.Element;
}) {
  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return isConnected && children ? (
    children
  ) : (
    <div className="w-full h-screen gap-4 flex flex-col justify-center items-center bg-gradient-to-r from-red-600 via-red-300 to-orange-500 background-animate">
      <div className="flex gap-5">
        <Button className="text-5xl" onClick={() => connect()}>
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}
