"use client";

import React from "react";
import SectionHeading from "@/components/atoms/SectionHeading";
import Button from "@/components/atoms/Button";
import MenuCard, { MenuItem } from "@/components/molecules/MenuCard";

interface MenuSectionProps {
  className?: string;
  onViewCompleteMenu?: () => void;
  onItemSelect?: (item: MenuItem) => void;
}

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    id: "chicken-parm",
    title: "CHICKEN PARM",
    description:
      "Tender baked cutlet topped with rich house marinara and bubbling mozzarella.",
    imageSrc: "/images/dishes/chicken-parm.png",
    price: "$9",
  },
  {
    id: "chicken-alfredo",
    title: "CHICKEN ALFREDO",
    description:
      "Fettuccine tossed in signature creamy garlic alfredo with seasoned chicken breast.",
    imageSrc: "/images/dishes/chicken-alfredo.png",
    price: "$10",
  },
  {
    id: "spaghetti-meatballs",
    title: "SPAGHETTI & MEATBALLS",
    description:
      "Authentic Italian meatballs simmered in slow-cooked tomato sauce over pasta.",
    imageSrc: "/images/dishes/spaghetti-meatballs.png",
    price: "$10",
  },
  {
    id: "baked-mac-cheese",
    title: "BAKED MAC & CHEESE",
    description:
      "Elbow macaroni baked in rich three-cheese sauce topped with golden breadcrumbs.",
    imageSrc: "/images/dishes/baked-mac-cheese.png",
    price: "$10",
  },
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  className = "",
  onViewCompleteMenu,
  onItemSelect,
}) => {
  return (
    <section
      id="menu"
      aria-label="Our Menu Featured Dishes"
      className={`w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 ${className}`}
    >
      {/* Section Header */}
      <div className="mb-4 sm:mb-6">
        <SectionHeading title="OUR MENU" size="md" align="left" />
      </div>

      {/* 4-Column Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {DEFAULT_MENU_ITEMS.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onSelect={onItemSelect}
          />
        ))}
      </div>

      {/* Centered CTA Button */}
      <div className="flex justify-center mt-7 sm:mt-9 md:mt-11">
        <Button
          variant="primary"
          size="lg"
          href="#full-menu"
          onClick={onViewCompleteMenu}
          className="!rounded-full !px-8 sm:!px-10 !py-3 !text-xs sm:!text-[13px] !font-black !tracking-wider shadow-md hover:scale-105"
        >
          VIEW OUR COMPLETE MENU
        </Button>
      </div>
    </section>
  );
};

export default MenuSection;
