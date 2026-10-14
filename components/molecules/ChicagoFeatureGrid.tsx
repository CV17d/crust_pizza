"use client";

import React from "react";
import FeatureIconBadge from "@/components/atoms/FeatureIconBadge";
import RetroClockIcon from "@/components/atoms/icons/RetroClockIcon";
import RetroTvIcon from "@/components/atoms/icons/RetroTvIcon";
import RetroTrainIcon from "@/components/atoms/icons/RetroTrainIcon";
import RetroLanternIcon from "@/components/atoms/icons/RetroLanternIcon";
import RetroArmchairIcon from "@/components/atoms/icons/RetroArmchairIcon";
import RetroCompassIcon from "@/components/atoms/icons/RetroCompassIcon";

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
      id: "clock",
      label: "ORDER ONLINE",
      icon: <RetroClockIcon />,
    },
    {
      id: "tv",
      label: "CATERING",
      icon: <RetroTvIcon />,
    },
    {
      id: "train",
      label: "FAST CASUAL",
      icon: <RetroTrainIcon />,
    },
    {
      id: "lantern",
      label: "LEARN MORE",
      icon: <RetroLanternIcon />,
    },
    {
      id: "armchair",
      label: "RESTAURANT PICKUP",
      icon: <RetroArmchairIcon />,
    },
    {
      id: "compass",
      label: "FRANCHISING",
      icon: <RetroCompassIcon />,
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
