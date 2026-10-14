import React from "react";
import Navbar from "@/components/organisms/Navbar";
import HeroBanner from "@/components/organisms/HeroBanner";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <div className={`w-full flex flex-col ${className}`}>
      {/* Top Global Navigation Bar */}
      <Navbar />

      {/* Main Hero Showcase */}
      <div className="w-full pt-1 pb-6 md:pb-10">
        <HeroBanner />
      </div>
    </div>
  );
};

export default HeroSection;
