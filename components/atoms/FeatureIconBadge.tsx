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
      {/* Vector Badge Container */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] flex items-center justify-center drop-shadow-xs transition-all duration-200 group-hover:scale-105 active:scale-95">
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
