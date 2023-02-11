import { ReactNode } from "react";

export default function Title({ children }: { children?: ReactNode }) {
  return <h1 className="text-9xl font-bungee font-bold">{children}</h1>;
}
