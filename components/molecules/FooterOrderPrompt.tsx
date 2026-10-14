"use client";

import React from "react";
import Logo from "@/components/atoms/Logo";

interface FooterOrderPromptProps {
  className?: string;
  onOrderClick?: () => void;
}

export const FooterOrderPrompt: React.FC<FooterOrderPromptProps> = ({
  className = "",
  onOrderClick,
}) => {
  return (
    <div
      onClick={onOrderClick}
      className={`flex items-center gap-3 sm:gap-4 select-none group cursor-pointer ${className}`}
    >
      <Logo size={52} className="group-hover:scale-105" />

      <h3 className="font-display font-black uppercase text-[#1A1A1A] group-hover:text-[#EB7424] transition-colors text-base sm:text-lg md:text-xl tracking-tight leading-tight">
        WANT TO PLACE AN
        <br />
        ORDER NOW?
      </h3>
    </div>
  );
};

export default FooterOrderPrompt;
