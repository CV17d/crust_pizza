"use client";

import React from "react";
import Link from "next/link";

interface FooterNavProps {
  className?: string;
}

export const FooterNav: React.FC<FooterNavProps> = ({ className = "" }) => {
  const links = [
    { label: "MENU", href: "#menu" },
    { label: "CATERING", href: "#catering" },
    { label: "LOCATIONS", href: "#locations" },
    { label: "COMMISSIONS", href: "#commissions" },
    { label: "PRIVACY", href: "#privacy" },
    { label: "TERMS", href: "#terms" },
  ];

  return (
    <nav
      aria-label="Footer Navigation"
      className={`flex flex-wrap items-center justify-start md:justify-end gap-x-5 sm:gap-x-7 gap-y-2 ${className}`}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="font-display font-extrabold uppercase text-xs sm:text-[13px] md:text-sm tracking-wider text-[#1A1A1A] hover:text-[#EB7424] transition-colors select-none"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default FooterNav;
