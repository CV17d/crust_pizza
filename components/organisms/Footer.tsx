"use client";

import React from "react";
import FooterOrderPrompt from "@/components/molecules/FooterOrderPrompt";
import FooterNav from "@/components/molecules/FooterNav";

interface FooterProps {
  className?: string;
  onOrderClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  className = "",
  onOrderClick,
}) => {
  return (
    <footer
      className={`w-full border-t border-black/10 mt-4 sm:mt-6 pt-6 pb-10 md:pt-8 md:pb-12 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left Side: Order Now CTA with Brand Emblem */}
        <FooterOrderPrompt onOrderClick={onOrderClick} />

        {/* Right Side: Navigation Links */}
        <FooterNav />
      </div>

      {/* Copyright Note */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 mt-6 pt-4 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-sans">
        <p>© 2026 Crust Pizza Co. All rights reserved.</p>
        <p className="mt-1 sm:mt-0">Chicago-Style Thin Crust Pizza Made From Scratch.</p>
      </div>
    </footer>
  );
};

export default Footer;
