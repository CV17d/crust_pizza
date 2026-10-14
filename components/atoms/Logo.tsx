import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 68 }) => {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-center justify-center group select-none transition-transform duration-200 hover:scale-105 ${className}`}
      aria-label="Crust Pizza Co. Home"
    >
      <div
        className="relative flex items-center justify-center rounded-full overflow-hidden"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <Image
          src="/images/crust-logo.png"
          alt="Crust Pizza Co."
          width={size}
          height={size}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
