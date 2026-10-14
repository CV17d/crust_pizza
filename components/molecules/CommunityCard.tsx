"use client";

import React from "react";
import Image from "next/image";

interface CommunityCardProps {
  className?: string;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-transparent p-1 sm:p-2 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 ${className}`}
    >
      {/* Text Info */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-xs sm:text-sm font-bold text-[#1A1A1A] tracking-wider mb-1">
          @yourbrandhandle
        </span>
        <h3 className="font-display font-extrabold uppercase text-base sm:text-lg md:text-xl text-[#1A1A1A] tracking-tight leading-tight">
          LET&apos;S WORK TOGETHER
          <br />
          FOR OUR COMMUNITY
        </h3>
        <p className="mt-2 text-[11px] sm:text-xs text-neutral-600 font-sans leading-relaxed max-w-xs">
          Partnering with neighborhood schools, sports leagues, and local charities
          to raise dough and support hometown causes.
        </p>
      </div>

      {/* Community Graphic Illustration */}
      <div className="relative w-[110px] sm:w-[125px] aspect-[105/95] shrink-0">
        <Image
          src="/images/ways/community-illustration.png"
          alt="Community outreach & fundraising partners"
          fill
          sizes="130px"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CommunityCard;
