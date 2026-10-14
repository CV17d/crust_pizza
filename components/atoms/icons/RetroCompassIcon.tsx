import React from "react";

export const RetroCompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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

      {/* Soporte curvo inferior */}
      <path
        d="M 31 77 C 31 74, 34 72, 37 72 H 63 C 66 72, 69 74, 69 77"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 36 60 C 31 66, 31 74, 31 76 C 31 78, 33 79, 34 78 C 36 76, 36 74, 38 72"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 64 60 C 69 66, 69 74, 69 76 C 69 78, 67 79, 66 78 C 64 76, 64 74, 62 72"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Travesaño inferior decorativo */}
      <line
        x1="39"
        y1="67"
        x2="61"
        y2="67"
        stroke="#FDF0D5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="67" r="1.5" fill="#FDF0D5" />

      {/* Estructura circular del cuerpo principal */}
      <circle
        cx="50"
        cy="43"
        r="21"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="3.5"
      />

      {/* Detalle superior de agarre/ornamento */}
      <path
        d="M 45 22.5 C 45 20, 48 18, 50 18 C 52 18, 55 20, 55 22.5"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="16" r="1" fill="#FDF0D5" />

      {/* Llave de cuerda o adorno lateral derecho */}
      <path
        d="M 69 36 C 73 34, 75 35, 74 39 C 73 42, 69 41, 68 41"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 68 45 C 72 45, 74 48, 73 51 C 71 53, 67 50, 66 48"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Esfera interior */}
      <circle
        cx="50"
        cy="43"
        r="16.5"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="1.5"
      />

      {/* Detalle interior espiral */}
      <path
        d="M 50 28.5 A 14.5 14.5 0 0 1 63 43 A 11 11 0 0 1 50 54 A 8.5 8.5 0 0 1 40 43.5 A 6 6 0 0 1 49 38 A 3.5 3.5 0 0 1 52.5 42 A 1.5 1.5 0 0 1 50.5 44"
        fill="none"
        stroke="#FDF0D5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Agujas / Marcas del cuadrante */}
      <line
        x1="50"
        y1="43"
        x2="44"
        y2="48"
        stroke="#FDF0D5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="43"
        x2="57"
        y2="39"
        stroke="#FDF0D5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="43"
        r="2"
        fill="#E87922"
        stroke="#FDF0D5"
        strokeWidth="1"
      />
    </svg>
  );
};

export default RetroCompassIcon;
