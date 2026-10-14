"use client";

import React from "react";

interface PriceBadgeProps {
  price?: string | number;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export const PriceBadge: React.FC<PriceBadgeProps> = ({
  price = "$9",
  className = "",
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || `Order item for ${price}`}
      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EB7424] hover:bg-[#D66518] text-white flex items-center justify-center font-extrabold text-[10px] sm:text-xs shadow-xs transition-transform duration-150 active:scale-90 cursor-pointer select-none shrink-0 ${className}`}
    >
      {price}
    </button>
  );
};

export default PriceBadge;
