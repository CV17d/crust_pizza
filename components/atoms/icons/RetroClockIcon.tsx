import React from "react";

export const RetroClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        x="5"
        y="5"
        width="90"
        height="90"
        rx="22"
        fill="#E87922"
        stroke="#FDF0D5"
        strokeWidth="2"
      />

      {/* Anillo exterior claro */}
      <circle
        cx="50"
        cy="50"
        r="26"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="3"
      />

      {/* Anillo interior punteado */}
      <circle
        cx="50"
        cy="50"
        r="18"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2.5"
        strokeDasharray="4 5"
      />

      {/* Punto central */}
      <circle cx="50" cy="50" r="4.5" fill="#FDF0D5" />

      {/* Manecillas / Punteros */}
      <path
        d="M50 50 L50 33"
        stroke="#FDF0D5"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M50 50 L62 57"
        stroke="#FDF0D5"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RetroClockIcon;
