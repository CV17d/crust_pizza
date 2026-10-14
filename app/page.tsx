import React from "react";
import HeroSection from "@/components/organisms/HeroSection";
import MenuSection from "@/components/organisms/MenuSection";
import ChicagoStyleSection from "@/components/organisms/ChicagoStyleSection";
import WaysToEnjoySection from "@/components/organisms/WaysToEnjoySection";
import FranchiseSection from "@/components/organisms/FranchiseSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#F7F5EE] text-[#1A1A1A]">
      {/* SECTION 1: Header & Hero Section */}
      <HeroSection />

      {/* SECTION 2: Our Menu Featured Dishes */}
      <MenuSection />

      {/* SECTION 3: Home of the Chicago-Style Thin Crust Pizza */}
      <ChicagoStyleSection />

      {/* SECTION 4: Ways to Enjoy, Community, & Why Choose Us */}
      <WaysToEnjoySection />

      {/* SECTION 5: Franchise Opportunities & Storefront */}
      <FranchiseSection />

      {/* FOOTER: Brand Order Prompt & Navigation */}
      <Footer />
    </main>
  );
}
