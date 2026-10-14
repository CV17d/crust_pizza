"use client";

import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive = false,
  className = "",
  onClick,
}) => {
  if (isActive) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center bg-[#EB7424] text-black font-extrabold uppercase text-xs md:text-[13px] tracking-wider px-3.5 py-1.5 rounded-[4px] shadow-xs select-none transition-transform duration-150 hover:brightness-105 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center text-[#1C1C1C] hover:text-[#EB7424] font-extrabold uppercase text-xs md:text-[13px] tracking-wider transition-colors duration-150 px-2 py-1 select-none ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
