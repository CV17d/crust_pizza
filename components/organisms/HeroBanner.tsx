import React from "react";
import Image from "next/image";
import HeroContentCard from "@/components/molecules/HeroContentCard";

interface HeroBannerProps {
  className?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1360px] mx-auto px-3 sm:px-6 md:px-10 ${className}`}
    >
      <section
        aria-label="Hero - Made from scratch pizzas"
        className="relative w-full rounded-[20px] sm:rounded-[26px] md:rounded-[32px] overflow-hidden shadow-xl border border-black/10 bg-[#241A14] min-h-[380px] sm:min-h-[440px] md:min-h-[490px] flex items-center"
      >
        {/* Photographic background: wood table, hands, sliced pizza, craft beers */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-banner.png"
            alt="Freshly baked Chicago-style thin crust pizza shared among friends"
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1360px"
            className="object-cover object-[72%_center] sm:object-center"
          />
          {/* Subtle gradient vignette on dark left edge for enhanced contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Foreground Content: Torn paper card with headline & CTA button */}
        <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-14 w-full md:w-auto">
          <HeroContentCard />
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
