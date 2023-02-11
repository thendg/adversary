import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef(function (
  {
    placeHolder,
    className,
  }: {
    placeHolder?: string;
    className?: string;
  },
  ref: ForwardedRef<HTMLInputElement | null>
) {
  return (
    <input
      placeholder={placeHolder}
      className={`font-ibm-plex-mono shadow border-t-0 rounded py-2 px-3 text-center focus:outline-none focus:shadow-outline ${className}`}
      ref={ref}
    />
  );
});

export default Input;
