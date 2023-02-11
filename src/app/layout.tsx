"use client";

import "./globals.css";
import { WagmiConfig, createClient, configureChains, goerli } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Bungee_Hairline, IBM_Plex_Mono } from "@next/font/google";

const bungeeHairline = Bungee_Hairline({ weight: "400", variable: "--bungee" });
const IBMPlexMono = IBM_Plex_Mono({
  weight: "300",
  variable: "--ibm-plex-mono",
});

const { provider: ethNodeProvider, webSocketProvider: ethWebSocketProvider } =
  configureChains([goerli], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider: ethNodeProvider,
  webSocketProvider: ethWebSocketProvider,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bungeeHairline.variable} ${IBMPlexMono.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <WagmiConfig client={client}>
        <body>{children}</body>
      </WagmiConfig>
    </html>
  );
}
