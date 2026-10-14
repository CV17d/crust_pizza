import React from "react";

export const RetroTvIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      {/* Fondo naranja con esquinas muy redondeadas y borde claro */}
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

      {/* Patas de la pantalla */}
      <path d="M32 75 L28 80 L35 80 L37 75 Z" fill="#FDF0D5" />
      <path d="M68 75 L72 80 L65 80 L63 75 Z" fill="#FDF0D5" />

      {/* Carcasa principal */}
      <path
        d="M25 24 h50 a 4 4 0 0 1 4 4 v42 a 4 4 0 0 1 -4 4 H25 a 4 4 0 0 1 -4 -4 v-42 a 4 4 0 0 1 4 -4 z"
        fill="#FDF0D5"
      />

      {/* Botones inferiores */}
      <circle cx="28" cy="71" r="2" fill="#E87922" />
      <circle cx="72" cy="71" r="2" fill="#E87922" />

      {/* Pantalla interior */}
      <rect x="29" y="29" width="42" height="37" rx="1" fill="#E87922" />

      {/* Borde interno de la pantalla */}
      <rect
        x="32"
        y="32"
        width="36"
        height="31"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2"
      />

      {/* Líneas del laberinto (izquierda) */}
      <path
        d="M36 36 h5 v6 h-5 v6 h9 v-12"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <path
        d="M41 54 v-5 h4 v10"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />

      {/* Líneas del laberinto (derecha) */}
      <path
        d="M64 36 h-5 v6 h5 v6 h-9 v-12"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <path
        d="M59 54 v-5 h-4 v10"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />

      {/* Detalle divisor central */}
      <line
        x1="50"
        y1="36"
        x2="50"
        y2="58"
        stroke="#FDF0D5"
        strokeWidth="2"
      />
    </svg>
  );
};

export default RetroTvIcon;
