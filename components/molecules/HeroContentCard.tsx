"use client";

import React from "react";
import Button from "@/components/atoms/Button";
import TapeSticker from "@/components/atoms/TapeSticker";

interface HeroContentCardProps {
  className?: string;
  onOrderClick?: () => void;
}

export const HeroContentCard: React.FC<HeroContentCardProps> = ({
  className = "",
  onOrderClick,
}) => {
  return (
    <div
      className={`relative z-10 flex flex-col justify-center max-w-[420px] lg:max-w-[460px] ${className}`}
    >
      {/* Scotch tape accent on top-left corner */}
      <TapeSticker
        className="-top-3 -left-3 md:-top-4 md:-left-4"
        rotate="-rotate-15"
      />

      {/* Main torn paper black card */}
      <div
        className="relative bg-[#181818]/95 backdrop-blur-[2px] text-white p-6 sm:p-8 md:p-9 shadow-2xl"
        style={{
          clipPath:
            "polygon(0% 1%, 98% 0%, 100% 4%, 98% 97%, 100% 100%, 2% 99%, 0% 95%)",
          borderRadius: "2px",
        }}
      >
        {/* Subtle paper grain texture highlight */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Headline */}
        <h1
          className="relative text-white font-extrabold uppercase tracking-tight leading-[1.04] text-2xl sm:text-3xl md:text-4xl lg:text-[42px]"
          style={{ fontFamily: "var(--font-oswald), sans-serif" }}
        >
          FOR DELICIOUS,
          <br />
          MADE-FROM
          <br />
          SCRATCH PIZZAS
        </h1>

        {/* Subtitle */}
        <p className="relative mt-2.5 sm:mt-3 text-[#D1D1D1] text-[11px] sm:text-xs md:text-[13px] leading-relaxed max-w-[340px] font-sans">
          Handcrafted crust, signature vine-ripened sauce, and premium aged
          mozzarella made fresh every day.
        </p>

        {/* Order Online Button */}
        <div className="relative mt-4 sm:mt-6">
          <Button
            variant="primary"
            size="md"
            href="#order"
            onClick={onOrderClick}
            className="!rounded-full !px-7 !py-2.5 !text-xs sm:!text-[13px] !font-black !tracking-wider shadow-md hover:scale-105"
          >
            Order Online
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContentCard;
