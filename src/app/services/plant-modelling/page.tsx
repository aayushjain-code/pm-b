"use client";

import { Wrench, Shield, Globe, Cpu } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PlantModelling() {
  const additionalBenefits = [
    {
      icon: Wrench,
      title: "Industrial Expertise",
      description:
        "Deep understanding of industrial processes and plant operations.",
    },
    {
      icon: Shield,
      title: "Safety Focus",
      description:
        "Models designed to support safety and compliance requirements.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "Compliance with international industrial standards and practices.",
    },
    {
      icon: Cpu,
      title: "Integration Capability",
      description:
        "Seamless integration with existing plant management systems.",
    },
  ];

  return (
    <ServicePageTemplate
      serviceKey="plant-modelling"
      additionalBenefits={additionalBenefits}
    />
  );
}
