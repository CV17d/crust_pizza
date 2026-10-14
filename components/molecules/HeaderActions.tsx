"use client";

import React from "react";
import NavLink from "@/components/atoms/NavLink";
import IconButton from "@/components/atoms/IconButton";
import { User } from "lucide-react";

interface HeaderActionsProps {
  className?: string;
  onCallClick?: () => void;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  className = "",
  onCallClick,
}) => {
  return (
    <div
      className={`flex items-center gap-2 sm:gap-4 lg:gap-5 ${className}`}
      aria-label="Navigation Actions Right"
    >
      <NavLink href="#about">ABOUT</NavLink>
      <NavLink href="#contact">CONTACT</NavLink>

      {/* User profile action badge */}
      <IconButton
        variant="orange"
        ariaLabel="User Profile / Rewards"
        icon={<User className="w-4 h-4 text-white stroke-[2.5]" />}
      />

      {/* Twitter / Social icon */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Twitter"
        className="w-7 h-7 flex items-center justify-center text-[#1C1C1C] hover:text-[#EB7424] transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-4 h-4 fill-current"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Call Now button */}
      <button
        type="button"
        onClick={onCallClick}
        className="text-[#1C1C1C] hover:text-[#EB7424] font-extrabold uppercase text-xs md:text-[13px] tracking-wider transition-colors duration-150 cursor-pointer select-none ml-1 whitespace-nowrap"
      >
        CALL NOW
      </button>
    </div>
  );
};

export default HeaderActions;
