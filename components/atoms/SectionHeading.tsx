import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "left",
  className = "",
  size = "md",
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const sizeClass = {
    sm: "text-lg sm:text-xl md:text-2xl",
    md: "text-xl sm:text-2xl md:text-3xl",
    lg: "text-2xl sm:text-3xl md:text-4xl lg:text-[40px]",
    xl: "text-3xl sm:text-4xl md:text-5xl lg:text-[52px]",
  }[size];

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <h2
        className={`font-display font-extrabold uppercase tracking-tight text-[#1A1A1A] leading-[1.08] ${sizeClass}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 font-sans max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
