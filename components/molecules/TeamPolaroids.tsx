"use client";

import React from "react";
import Image from "next/image";
import TapeSticker from "@/components/atoms/TapeSticker";

interface TeamPolaroidsProps {
  className?: string;
}

export const TeamPolaroids: React.FC<TeamPolaroidsProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      {/* Top-Left Masking Tape */}
      <TapeSticker
        className="-top-2 left-4 sm:-top-3 sm:left-6 z-20"
        rotate="-rotate-25"
        width="w-14 sm:w-16"
        height="h-5 sm:h-6"
      />

      {/* Main Photographic Polaroid Cluster */}
      <div className="relative w-[240px] sm:w-[270px] md:w-[290px] aspect-[250/210] filter drop-shadow-md transition-transform duration-300 hover:rotate-1 hover:scale-105">
        <Image
          src="/images/about/team-polaroids.png"
          alt="Crust Pizza Co. Founders & Store Team"
          fill
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 270px, 300px"
          className="object-contain"
        />
      </div>

      {/* Bottom-Right Masking Tape */}
      <TapeSticker
        className="-bottom-2 right-4 sm:-bottom-3 sm:right-6 z-20"
        rotate="-rotate-15"
        width="w-14 sm:w-16"
        height="h-5 sm:h-6"
      />
    </div>
  );
};

export default TeamPolaroids;
