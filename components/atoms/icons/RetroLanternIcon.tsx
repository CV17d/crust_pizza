import React from "react";

export const RetroLanternIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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

      {/* Base de la lámpara */}
      <path
        d="M 32 80 L 68 80 A 3 3 0 0 0 71 77 A 3 3 0 0 0 68 74 L 32 74 A 3 3 0 0 0 29 77 A 3 3 0 0 0 32 80 Z"
        fill="#FDF0D5"
      />

      {/* Cuerpo exterior de la lámpara/farol */}
      <path
        d="M 32 74 C 25 65 26 43 40 33 C 42 31 43 29 45 29 H 55 C 57 29 58 31 60 33 C 74 43 75 65 68 74 Z"
        fill="#FDF0D5"
      />

      {/* Cuello e hito superior (asa) */}
      <path
        d="M 45 29 C 45 27 46 25 48 25 H 52 C 54 25 55 27 55 29 Z"
        fill="#FDF0D5"
      />
      <circle
        cx="50"
        cy="20"
        r="5"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2.5"
      />

      {/* Espacio interior vacío (recorte naranja) */}
      <path
        d="M 36 71 C 31 62 31.5 45 42 37 C 44 35 45 34 46 34 H 54 C 55 34 56 35 58 37 C 68.5 45 69 62 64 71 Z"
        fill="#E87922"
      />

      {/* Detalle interior (llama / forma de 6) */}
      <path
        d="M 48 65 A 6 6 0 1 0 54 59 A 4 4 0 0 1 50 55 C 48 51 51 45 52.5 43 C 54 41 51.5 45 49 48 C 45 53 43 59 48 65 Z"
        fill="#FDF0D5"
      />

      {/* Pequeño punto decorativo superior de la llama */}
      <circle cx="51.5" cy="48" r="1.5" fill="#E87922" />
    </svg>
  );
};

export default RetroLanternIcon;
