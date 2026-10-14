"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/atoms/SectionHeading";
import PromoDarkCard from "@/components/molecules/PromoDarkCard";
import CommunityCard from "@/components/molecules/CommunityCard";
import WhyChooseUsCard from "@/components/molecules/WhyChooseUsCard";
import { Award, Pizza } from "lucide-react";

interface WaysToEnjoySectionProps {
  className?: string;
  onAwardLearnMore?: () => void;
  onKidsMenuClick?: () => void;
}

export const WaysToEnjoySection: React.FC<WaysToEnjoySectionProps> = ({
  className = "",
  onAwardLearnMore,
  onKidsMenuClick,
}) => {
  return (
    <section
      id="ways-to-enjoy"
      aria-label="Ways to Enjoy Crust Pizza Co."
      className={`w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 ${className}`}
    >
      {/* Section Header */}
      <div className="mb-4 sm:mb-6">
        <SectionHeading title="WAYS TO ENJOY" size="md" align="left" />
      </div>

      {/* Main Grid: Left Column & Right Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* LEFT COLUMN: Pizza Featured Card + Community Card */}
        <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
          {/* Pepperoni Pizza Card with Center Crust Brand Seal */}
          <div className="relative w-full aspect-[325/335] rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-md border border-black/5 bg-[#2B1B14] group cursor-pointer">
            <Image
              src="/images/ways/pepperoni-pizza.png"
              alt="Handmade tavern-style pepperoni pizza with Crust Pizza Co. emblem"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover group-hover:scale-103 transition-transform duration-500"
              priority
            />
          </div>

          {/* Community Outreach Card */}
          <CommunityCard />
        </div>

        {/* RIGHT COLUMN: 2 Dark Promo Cards + Why Choose Us Photo Grid */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
          {/* Top Row: 2 Dark Promo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <PromoDarkCard
              icon={<Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />}
              title="AWARD-WINNING PIZZA & SERVICE"
              description="Recognized across the region for authentic Chicago thin crust and warm hospitality."
              buttonText="LEARN MORE"
              buttonHref="#awards"
              onButtonClick={onAwardLearnMore}
            />

            <PromoDarkCard
              icon={<Pizza className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />}
              title="KIDS EAT FREE TUESDAYS!"
              description="Bring the whole crew every Tuesday for a complimentary kids meal with adult entree purchase."
              buttonText="SEE OUR COMPLETE MENU"
              buttonHref="#menu"
              onButtonClick={onKidsMenuClick}
            />
          </div>

          {/* Bottom Row: Why Choose Us Photo Gallery */}
          <WhyChooseUsCard />
        </div>
      </div>
    </section>
  );
};

export default WaysToEnjoySection;
