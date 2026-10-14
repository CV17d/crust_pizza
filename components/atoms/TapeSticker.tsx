import React from "react";

interface TapeStickerProps {
  className?: string;
  width?: string;
  height?: string;
  rotate?: string;
}

export const TapeSticker: React.FC<TapeStickerProps> = ({
  className = "",
  width = "w-16 md:w-20",
  height = "h-5 md:h-6",
  rotate = "-rotate-12",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute ${width} ${height} ${rotate} bg-[#ECE5D4]/75 border-y border-[#D6CBB4]/50 backdrop-blur-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.12)] pointer-events-none select-none z-20 ${className}`}
      style={{
        clipPath:
          "polygon(0% 4%, 4% 0%, 96% 2%, 100% 6%, 98% 94%, 94% 100%, 3% 97%, 0% 93%)",
      }}
    />
  );
};

export default TapeSticker;
