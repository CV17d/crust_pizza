"use client";

import React from "react";
import Image from "next/image";

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
      {/* Main Photographic Polaroid Cluster with original tape and natural paper blend */}
      <div className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-square transition-transform duration-300 hover:rotate-1 hover:scale-105 mix-blend-multiply">
        <Image
          src="/images/about/team-polaroids-highres.jpg"
          alt="Crust Pizza Co. Founders & Store Team"
          fill
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default TeamPolaroids;
