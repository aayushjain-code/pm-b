"use client";

import { Building, Layers, Cpu, Shield } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function BIMModelling() {
  const additionalBenefits = [
    {
      icon: Building,
      title: "BIM Expertise",
      description:
        "Specialized knowledge in Building Information Modeling workflows.",
    },
    {
      icon: Layers,
      title: "Multi-discipline Coordination",
      description:
        "Seamless integration of architectural, structural, and MEP systems.",
    },
    {
      icon: Cpu,
      title: "Advanced Software",
      description:
        "Proficiency in Revit, ArchiCAD, and other leading BIM platforms.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
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
