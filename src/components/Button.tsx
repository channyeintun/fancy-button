import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  style,
  disabled,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "container relative flex items-center justify-center w-fit py-3 px-8 rounded-[2.5rem] bg-[#6D0EFB]",
        "transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]",
        "focus:outline-none focus-visible:outline-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={style}
      {...props}
    >
      <div className="tint-overlay rounded-[2.5rem]">
        <div className="rim-light" />
        <div className="diagonal-highlights" />
      </div>
      <span className="relative z-10 text-white font-parkinsans font-extrabold tracking-wide whitespace-nowrap pointer-events-none drop-shadow-sm">
        {children}
      </span>
    </button>
  );
};

export default Button;
