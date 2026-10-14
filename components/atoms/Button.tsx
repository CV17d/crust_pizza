"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer select-none text-center";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs rounded-full",
    md: "px-6 py-2.5 text-xs md:text-sm rounded-full",
    lg: "px-8 py-3.5 text-sm md:text-base rounded-full",
  };

  const variantStyles = {
    primary:
      "bg-[#EB7424] hover:bg-[#D66518] text-white shadow-md hover:shadow-lg",
    secondary:
      "bg-[#EB7424] text-black hover:bg-[#D66518] hover:text-white shadow-sm",
    dark: "bg-[#181818] hover:bg-[#2A2A2A] text-white shadow-md",
    outline:
      "border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
