"use client";

import React from "react";
import Image from "next/image";
import PriceBadge from "@/components/atoms/PriceBadge";

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  price: string;
}

interface MenuCardProps {
  item: MenuItem;
  className?: string;
  onSelect?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  className = "",
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect && onSelect(item)}
      className={`group relative bg-white rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-sm hover:shadow-md border border-black/[0.06] transition-all duration-200 flex flex-col cursor-pointer ${className}`}
    >
      {/* Dish Image Banner */}
      <div className="relative w-full aspect-[161/80] sm:aspect-[161/82] overflow-hidden bg-neutral-100">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 relative bg-white">
        <div>
          <h3 className="font-display font-extrabold uppercase text-xs sm:text-sm md:text-[15px] text-[#1A1A1A] tracking-wider leading-snug">
            {item.title}
          </h3>
          <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 font-sans leading-tight line-clamp-2 pr-6">
            {item.description}
          </p>
        </div>

        {/* Price / Add Badge in Bottom-Right */}
        <div className="flex justify-end items-center mt-2 pt-0.5">
          <PriceBadge
            price={item.price}
            ariaLabel={`Add ${item.title} to order for ${item.price}`}
          />
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
