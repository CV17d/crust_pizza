import React from "react";

export const RetroTrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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

      {/* Chasis y Base Inferior */}
      <path
        d="M 33 65 L 67 65 A 4 4 0 0 1 71 69 L 71 70 A 2 2 0 0 1 69 72 L 31 72 A 2 2 0 0 1 29 70 L 29 69 A 4 4 0 0 1 33 65 Z"
        fill="#FDF0D5"
      />

      {/* Parachoques inferior central */}
      <path d="M 37 72 L 63 72 L 58 78 L 50 81 L 42 78 Z" fill="#FDF0D5" />
      <path
        d="M 45 72 L 45 77 M 50 72 L 50 80 M 55 72 L 55 77"
        stroke="#E87922"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Detalles inferiores de las ruedas/vías */}
      <path
        d="M 29 70 C 24 70 20 73 20 77 C 20 78 21 79 23 79 C 26 79 27 75 29 73 Z"
        fill="#FDF0D5"
      />
      <path
        d="M 71 70 C 76 70 80 73 80 77 C 80 78 79 79 77 79 C 74 79 73 75 71 73 Z"
        fill="#FDF0D5"
      />

      {/* Ruedas frontales redondas */}
      <circle cx="35" cy="71" r="4.5" fill="#FDF0D5" />
      <circle cx="65" cy="71" r="4.5" fill="#FDF0D5" />
      <circle cx="35" cy="71" r="1.5" fill="#E87922" />
      <circle cx="65" cy="71" r="1.5" fill="#E87922" />

      {/* Cabina Central (Arco Grande) */}
      <path d="M 35 65 V 39 A 15 15 0 0 1 65 39 V 65 Z" fill="#FDF0D5" />
      <path d="M 39 65 V 41 A 11 11 0 0 1 61 41 V 65 Z" fill="#E87922" />

      {/* Ventana central tipo 8 */}
      <circle cx="50" cy="46" r="4.5" fill="#FDF0D5" />
      <circle cx="50" cy="55" r="4.5" fill="#FDF0D5" />
      <circle cx="50" cy="46" r="1.5" fill="#E87922" />
      <circle cx="50" cy="55" r="1.5" fill="#E87922" />

      {/* Chimenea Superior */}
      <path d="M 46 25 H 54 V 28 H 46 Z" fill="#FDF0D5" />
      <path
        d="M 44 21 C 44 20 45 19 47 19 H 53 C 55 19 56 20 56 21 L 54 25 H 46 Z"
        fill="#FDF0D5"
      />

      {/* Estructuras Laterales */}
      <path d="M 24 65 V 50 A 5 5 0 0 1 29 45 H 35 V 65 Z" fill="#FDF0D5" />
      <path d="M 27 50 H 31 V 54 H 27 Z" fill="#E87922" />
      <path d="M 27 56 H 31 V 61 H 27 Z" fill="#E87922" />

      <path d="M 76 65 V 50 A 5 5 0 0 0 71 45 H 65 V 65 Z" fill="#FDF0D5" />
      <path d="M 69 50 H 73 V 54 H 69 Z" fill="#E87922" />
      <path d="M 69 56 H 73 V 61 H 69 Z" fill="#E87922" />
    </svg>
  );
};

export default RetroTrainIcon;
