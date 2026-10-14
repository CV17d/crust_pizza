"use client";

import React from "react";
import Button from "@/components/atoms/Button";

interface FranchiseCardProps {
  className?: string;
  onRequestClick?: () => void;
}

export const FranchiseCard: React.FC<FranchiseCardProps> = ({
  className = "",
  onRequestClick,
}) => {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <h2 className="font-display font-extrabold uppercase tracking-tight text-[#1A1A1A] text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.08]">
        WANT TO OWN YOUR OWN
        <br />
        CRUST PIZZA CO.?
      </h2>

      <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs md:text-[13px] text-neutral-600 font-sans leading-relaxed max-w-sm">
        Join our rapidly growing franchise family backed by proven operational
        playbooks, proprietary recipes, and an intensely loyal fan base.
      </p>

      <div className="mt-4 sm:mt-6">
        <Button
          variant="primary"
          size="md"
          href="#franchise-form"
          onClick={onRequestClick}
          className="!rounded-full !px-7 !py-2.5 !text-xs sm:!text-[13px] !font-black !tracking-wider shadow-md hover:scale-105"
        >
          SUBMIT A REQUEST
        </Button>
      </div>
    </div>
  );
};

export default FranchiseCard;
