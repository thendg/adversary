import "./globals.css";
import { Bungee_Hairline } from "@next/font/google";

const bungeeHairline = Bungee_Hairline({ weight: "400", variable: "--bungee" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bungeeHairline.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
