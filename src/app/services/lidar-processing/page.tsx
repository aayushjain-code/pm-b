"use client";

import { Globe, Cpu, Leaf, Target } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function LiDARProcessing() {
  const additionalBenefits = [
    {
      icon: Globe,
      title: "Advanced Processing",
      description:
        "State-of-the-art algorithms for maximum accuracy and efficiency.",
    },
    {
      icon: Cpu,
      title: "Scalable Solutions",
      description:
        "Handle large datasets efficiently with cloud-based processing.",
    },
    {
      icon: Leaf,
      title: "Environmental Focus",
      description:
        "Specialized processing for forestry and environmental applications.",
    },
    {
      icon: Target,
      title: "Custom Workflows",
      description:
        "Tailored processing workflows for specific project requirements.",
    },
  ];

  return (
    <ServicePageTemplate
      serviceKey="lidar-processing"
      additionalBenefits={additionalBenefits}
    />
  );
}
