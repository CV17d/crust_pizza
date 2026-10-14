"use client";

import React from "react";
import FeatureIconBadge from "@/components/atoms/FeatureIconBadge";
import {
  Clock,
  Store,
  Pizza,
  Sparkles,
  Armchair,
  Award,
} from "lucide-react";

interface FeatureItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ChicagoFeatureGridProps {
  className?: string;
  onFeatureClick?: (id: string) => void;
}

export const ChicagoFeatureGrid: React.FC<ChicagoFeatureGridProps> = ({
  className = "",
  onFeatureClick,
}) => {
  const features: FeatureItem[] = [
    {
      id: "online-order",
      label: "ORDER ONLINE",
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />,
    },
    {
      id: "catering",
      label: "CATERING",
      icon: <Store className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />,
    },
    {
      id: "fast-casual",
      label: "FAST CASUAL",
      icon: <Pizza className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />,
    },
    {
      id: "learn-more",
      label: "LEARN MORE",
      icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />,
    },
    {
      id: "heritage",
      label: "OUR HERITAGE",
      icon: <Armchair className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />,
    },
    {
      id: "franchise",
      label: "FRANCHISE",
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />,
    },
  ];

  return (
    <div
      className={`grid grid-cols-3 gap-x-3 sm:gap-x-5 md:gap-x-6 gap-y-4 sm:gap-y-6 justify-center items-start ${className}`}
    >
      {features.map((feat) => (
        <FeatureIconBadge
          key={feat.id}
          icon={feat.icon}
          label={feat.label}
          onClick={() => onFeatureClick && onFeatureClick(feat.id)}
        />
      ))}
    </div>
  );
};

export default ChicagoFeatureGrid;
