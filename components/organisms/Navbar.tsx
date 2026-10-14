"use client";

import React, { useState } from "react";
import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";
import HeaderActions from "@/components/molecules/HeaderActions";
import { Menu, X } from "lucide-react";
import NavLink from "@/components/atoms/NavLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`w-full relative z-30 pt-3 pb-3 md:pt-4 md:pb-4 ${className}`}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Left Navigation (Desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-start">
          <NavMenu activeItem="HOME" />
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center shrink-0 mx-2">
          <Logo size={62} />
        </div>

        {/* Right Navigation & Actions (Desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-end">
          <HeaderActions />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#1C1C1C] hover:text-[#EB7424] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F7F5EE] border-b border-black/10 shadow-xl px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2.5">
            <NavLink
              href="/"
              isActive
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink href="#menu" onClick={() => setMobileMenuOpen(false)}>
              MENU
            </NavLink>
            <NavLink href="#locations" onClick={() => setMobileMenuOpen(false)}>
              LOCATIONS
            </NavLink>
            <NavLink href="#order" onClick={() => setMobileMenuOpen(false)}>
              ORDER ONLINE
            </NavLink>
            <NavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
              ABOUT
            </NavLink>
            <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </NavLink>
            <NavLink href="tel:5551234567" onClick={() => setMobileMenuOpen(false)}>
              CALL NOW
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
