"use client";

import React from "react";

interface CircularIconBadgeProps {
  icon: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const CircularIconBadge: React.FC<CircularIconBadgeProps> = ({
  icon,
  className = "",
  size = "md",
}) => {
  const sizeStyles = {
    sm: "w-9 h-9 text-xs",
    md: "w-11 h-11 sm:w-12 sm:h-12",
    lg: "w-14 h-14",
  }[size];

  return (
    <div
      className={`rounded-full bg-[#EB7424] text-white flex items-center justify-center shadow-xs select-none ${sizeStyles} ${className}`}
    >
      {icon}
    </div>
  );
};

export default CircularIconBadge;
