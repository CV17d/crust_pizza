"use client";

import React from "react";
import Image from "next/image";

interface WhyChooseUsCardProps {
  className?: string;
  onPhotoClick?: (index: number) => void;
}

export const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  className = "",
  onPhotoClick,
}) => {
  const photos = [
    { id: 1, src: "/images/ways/gallery/photo-1.png", alt: "Fresh baked artisan thin-crust pizza" },
    { id: 2, src: "/images/ways/gallery/photo-2.png", alt: "Homemade pasta skillet" },
    { id: 3, src: "/images/ways/gallery/photo-3.png", alt: "Smiling happy guests and team" },
    { id: 4, src: "/images/ways/gallery/photo-4.png", alt: "Square tavern-cut pepperoni pizza" },
    { id: 5, src: "/images/ways/gallery/photo-5.png", alt: "Sharing dinner with friends" },
    { id: 6, src: "/images/ways/gallery/photo-6.png", alt: "Carryout pizza ready for home" },
  ];

  return (
    <div
      className={`bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 shadow-sm border border-black/5 flex flex-col justify-between ${className}`}
    >
      <h3 className="font-display font-extrabold uppercase text-sm sm:text-base md:text-[17px] text-[#1A1A1A] tracking-wide mb-3">
        WHY CHOOSE US
      </h3>

      {/* 3x2 Photo Grid */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 rounded-[14px] overflow-hidden">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => onPhotoClick && onPhotoClick(index)}
            className="relative aspect-[95/88] overflow-hidden bg-neutral-100 group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 33vw, 120px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
