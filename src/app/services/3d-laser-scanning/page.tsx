"use client";

import { Target, Zap, Shield, Clock } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function LaserScanning() {
  const additionalBenefits = [
    {
      icon: Target,
      title: "Reduce Site Visits",
      description:
        "Get more accurate information remotely, reducing rework and travel.",
    },
    {
      icon: Shield,
      title: "Lower Risk",
      description:
        "Non-contact scanning preserves sensitive heritage and hazardous sites.",
    },
    {
      icon: Clock,
      title: "Save Time and Cost",
      description:
        "Fewer manual measurements and faster handover to designers and builders.",
    },
    {
      icon: Zap,
      title: "Improve Decision Making",
      description:
        "Visual and measurable documentation supports planning and approvals.",
    },
  ];

  return (
    <ServicePageTemplate
      serviceKey="3d-laser-scanning"
      additionalBenefits={additionalBenefits}
    />
  );
}
