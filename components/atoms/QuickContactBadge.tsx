"use client";

import React from "react";
import Link from "next/link";

interface QuickContactBadgeProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const QuickContactBadge: React.FC<QuickContactBadgeProps> = ({
  label,
  href = "#contact",
  onClick,
  className = "",
}) => {
  const content = (
    <div
      onClick={onClick}
      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] sm:rounded-[18px] bg-[#EB7424] hover:bg-[#D66518] text-white flex items-center justify-center font-display font-black text-[10px] sm:text-[11px] uppercase tracking-wider text-center p-1.5 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer select-none leading-tight ${className}`}
    >
      {label}
    </div>
  );

  if (href && !onClick) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default QuickContactBadge;
