import { ReactNode } from "react";

export default function Title({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-9xl font-bungee font-bold ${className}`}>
      {children}
    </h1>
  );
}
