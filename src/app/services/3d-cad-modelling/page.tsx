"use client";

import { Building, Layers, Cpu, Shield } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CADModelling() {
  const additionalBenefits = [
    {
      icon: Building,
      title: "Expert Modelers",
      description:
        "Experienced CAD professionals with deep industry knowledge.",
    },
    {
      icon: Layers,
      title: "Flexible LOD",
      description:
        "Models delivered at appropriate Level of Detail for your needs.",
    },
    {
      icon: Cpu,
      title: "Advanced Software",
      description: "Latest CAD and BIM software for maximum compatibility.",
    },
    {
      icon: Shield,
      title: "Quality Focus",
      description:
        "Rigorous quality control ensures model accuracy and completeness.",
    },
  ];

  return (
    <ServicePageTemplate
      serviceKey="3d-cad-modelling"
      additionalBenefits={additionalBenefits}
    />
  );
}
