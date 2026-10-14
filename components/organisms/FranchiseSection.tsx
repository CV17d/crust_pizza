"use client";

import React from "react";
import Image from "next/image";
import FranchiseCard from "@/components/molecules/FranchiseCard";
import QuickContactBadge from "@/components/atoms/QuickContactBadge";

interface FranchiseSectionProps {
  className?: string;
  onRequestSubmit?: () => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({
  className = "",
  onRequestSubmit,
}) => {
  return (
    <section
      id="franchise"
      aria-label="Own Your Own Crust Pizza Co."
      className={`w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Franchise Pitch & CTA Button */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <FranchiseCard onRequestClick={onRequestSubmit} />
        </div>

        {/* Center Column: Illuminated Storefront Building Photo */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div className="relative w-full max-w-[340px] aspect-[257/139] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-lg border border-black/5 bg-neutral-900 group">
            <Image
              src="/images/franchise/storefront.png"
              alt="Crust Pizza Co. modern tavern storefront"
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column: "SUBMIT A REQUEST" & 3 Quick Contact Badges */}
        <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-2 sm:pt-0">
          <div className="flex flex-col items-start lg:items-start">
            <h3 className="font-display font-extrabold uppercase tracking-tight text-[#1A1A1A] text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5">
              SUBMIT A REQUEST
            </h3>

            {/* 3 Orange Action Badges */}
            <div className="flex items-center gap-3 sm:gap-4">
              <QuickContactBadge label="LOCATIONS" href="#locations" />
              <QuickContactBadge label="GET IN TOUCH" href="#contact" />
              <QuickContactBadge label="FOLLOW US" href="#social" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
