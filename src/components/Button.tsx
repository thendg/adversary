import { MouseEventHandler, ReactNode } from "react";

function Button({
  children,
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={`rounded-lg border-2 border-white font-bungee px-3 cursor-pointer hover:bg-white hover:text-black transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
