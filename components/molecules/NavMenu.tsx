"use client";

import React from "react";
import NavLink from "@/components/atoms/NavLink";

interface NavMenuProps {
  className?: string;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  className = "",
  activeItem = "HOME",
  onItemClick,
}) => {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "MENU", href: "#menu" },
    { label: "LOCATIONS", href: "#locations" },
    { label: "ORDER ONLINE", href: "#order" },
  ];

  return (
    <nav
      aria-label="Main Navigation Left"
      className={`flex items-center gap-2 sm:gap-4 lg:gap-6 ${className}`}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          href={item.href}
          isActive={activeItem === item.label}
          onClick={() => onItemClick && onItemClick(item.label)}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMenu;
