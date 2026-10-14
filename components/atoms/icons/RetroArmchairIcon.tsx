import React from "react";

export const RetroArmchairIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "w-full h-full",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      {...props}
    >
      {/* Fondo naranja con esquinas redondeadas y borde claro */}
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="22"
        fill="#E87922"
        stroke="#FDF0D5"
        strokeWidth="2"
      />

      {/* Base de las ruedas */}
      <line
        x1="34"
        y1="74"
        x2="66"
        y2="74"
        stroke="#FDF0D5"
        strokeWidth="2"
      />
      <circle
        cx="32"
        cy="80"
        r="3"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2"
      />
      <circle
        cx="68"
        cy="80"
        r="3"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2"
      />
      <line
        x1="32"
        y1="74"
        x2="32"
        y2="77"
        stroke="#FDF0D5"
        strokeWidth="2"
      />
      <line
        x1="68"
        y1="74"
        x2="68"
        y2="77"
        stroke="#FDF0D5"
        strokeWidth="2"
      />

      {/* Estructura del Sillón */}
      <path
        d="M 27 58 A 2 2 0 0 0 29 60 H 71 A 2 2 0 0 0 73 58"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 29 64 H 71 V 70 H 29 Z"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="3"
      />

      {/* Respaldo alto */}
      <path
        d="M 31 58 V 26 A 2 2 0 0 1 33 24 H 59 A 2 2 0 0 1 61 26 V 38"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Reposabrazos exterior */}
      <path
        d="M 65 39 A 4 4 0 0 1 71 43 V 58"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Cojín central / Respaldo interno */}
      <rect
        x="36"
        y="37"
        width="24"
        height="21"
        rx="3"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="4"
      />
    </svg>
  );
};

export default RetroArmchairIcon;
