"use client";

import React from "react";

interface FeatureIconBadgeProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const FeatureIconBadge: React.FC<FeatureIconBadgeProps> = ({
  icon,
  label,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center group cursor-pointer select-none ${className}`}
    >
      {/* Orange Squircle Container */}
      <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[14px] sm:rounded-[18px] bg-[#EB7424] group-hover:bg-[#D66518] text-white flex items-center justify-center shadow-xs transition-all duration-200 group-hover:scale-105 active:scale-95">
        {icon}
      </div>

      {/* Label */}
      <span className="mt-2 text-[10px] sm:text-[11px] font-display font-extrabold uppercase tracking-wider text-[#1A1A1A] text-center max-w-[76px] leading-tight group-hover:text-[#EB7424] transition-colors">
        {label}
      </span>
    </div>
  );
};

export default FeatureIconBadge;
