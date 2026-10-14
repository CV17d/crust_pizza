"use client";

import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "orange" | "dark" | "transparent";
  icon: React.ReactNode;
  ariaLabel: string;
  className?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "orange",
  icon,
  ariaLabel,
  className = "",
  onClick,
  ...props
}) => {
  const variantStyles = {
    orange:
      "bg-[#EB7424] text-white hover:bg-[#D66518] shadow-xs active:scale-95",
    dark: "bg-[#1C1C1C] text-white hover:bg-[#333333] shadow-xs active:scale-95",
    transparent:
      "bg-transparent text-[#1C1C1C] hover:text-[#EB7424] active:scale-95",
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
