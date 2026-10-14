"use client";

import React from "react";
import Link from "next/link";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  children,
  className = "",
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center text-[#1A1A1A] hover:text-[#EB7424] font-extrabold uppercase text-xs sm:text-[13px] tracking-wider transition-colors duration-150 cursor-pointer select-none ${className}`}
    >
      {children}
    </Link>
  );
};

export default TextLink;
