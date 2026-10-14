"use client";

import React from "react";
import CircularIconBadge from "@/components/atoms/CircularIconBadge";
import Button from "@/components/atoms/Button";

interface PromoDarkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const PromoDarkCard: React.FC<PromoDarkCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonHref = "#",
  onButtonClick,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#181818] text-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 md:p-7 flex flex-col items-center text-center justify-between shadow-xl border border-white/5 transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      {/* Top Circular Badge */}
      <div className="mb-3 sm:mb-4">
        <CircularIconBadge icon={icon} size="md" />
      </div>

      {/* Title & Description */}
      <div className="flex-1 flex flex-col justify-center my-1 sm:my-2">
        <h3 className="font-display font-extrabold uppercase text-sm sm:text-base md:text-[17px] tracking-wide text-white leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed max-w-[210px] mx-auto">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-4 sm:mt-5 w-full">
        <Button
          variant="primary"
          size="sm"
          href={buttonHref}
          onClick={onButtonClick}
          className="!rounded-full !w-full !max-w-[190px] !py-2 !text-[11px] sm:!text-xs !font-black !tracking-wider shadow-md hover:scale-105"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PromoDarkCard;
