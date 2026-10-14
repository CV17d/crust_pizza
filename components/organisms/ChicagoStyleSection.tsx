"use client";

import React from "react";
import Button from "@/components/atoms/Button";
import TextLink from "@/components/atoms/TextLink";
import ChicagoFeatureGrid from "@/components/molecules/ChicagoFeatureGrid";
import TeamPolaroids from "@/components/molecules/TeamPolaroids";

interface ChicagoStyleSectionProps {
  className?: string;
  onLearnMore?: () => void;
  onSeeLocations?: () => void;
}

export const ChicagoStyleSection: React.FC<ChicagoStyleSectionProps> = ({
  className = "",
  onLearnMore,
  onSeeLocations,
}) => {
  return (
    <section
      id="about"
      aria-label="Home of the Chicago-Style Thin Crust Pizza"
      className={`w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
        {/* Left Column: Headline, Story copy, CTA and Location Link */}
        <div className="flex flex-col lg:col-span-5 pr-0 lg:pr-4">
          <h2
            className="font-display font-extrabold uppercase tracking-tight text-[#1A1A1A] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.06]"
          >
            HOME OF THE
            <br />
            CHICAGO-STYLE
            <br />
            THIN CRUST PIZZA
          </h2>

          <p className="mt-4 sm:mt-5 text-xs sm:text-[13px] md:text-sm text-neutral-600 font-sans leading-relaxed max-w-md">
            Handcrafted thin-crust dough rolled crisp and baked to tavern-style
            perfection. Layered with our signature vine-ripened tomato sauce and
            smothered in Wisconsin whole-milk mozzarella for an authentic taste
            of Chicago tradition.
          </p>

          {/* Action Row */}
          <div className="mt-6 sm:mt-8 flex items-center gap-5 sm:gap-6">
            <Button
              variant="primary"
              size="md"
              href="#about-details"
              onClick={onLearnMore}
              className="!rounded-full !px-7 !py-2.5 !text-xs sm:!text-[13px] !font-black !tracking-wider shadow-md hover:scale-105"
            >
              LEARN MORE
            </Button>

            <TextLink
              href="#locations"
              onClick={onSeeLocations}
              className="hover:underline"
            >
              SEE LOCATIONS
            </TextLink>
          </div>
        </div>

        {/* Center Column: 3x2 Orange Feature Badges */}
        <div className="flex justify-center items-center lg:col-span-4 py-2">
          <ChicagoFeatureGrid />
        </div>

        {/* Right Column: Polaroid Team Photos with Tape Stickers */}
        <div className="flex justify-center lg:justify-end items-center md:col-span-2 lg:col-span-3 pt-4 sm:pt-0">
          <TeamPolaroids />
        </div>
      </div>
    </section>
  );
};

export default ChicagoStyleSection;
