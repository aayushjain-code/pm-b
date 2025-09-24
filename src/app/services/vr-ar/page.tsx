"use client";

import { Eye, Cpu, Globe, Zap } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function VRAR() {
  const additionalBenefits = [
    {
      icon: Eye,
      title: "Immersive Experiences",
      description:
        "Create engaging VR/AR experiences that captivate audiences.",
    },
    {
      icon: Cpu,
      title: "Cutting-edge Technology",
      description: "Latest VR/AR hardware and software for maximum impact.",
    },
    {
      icon: Globe,
      title: "Cross-platform Development",
      description: "Applications that work across multiple VR/AR platforms.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimized applications that run smoothly on target devices.",
    },
  ];

  return (
    <ServicePageTemplate
      serviceKey="vr-ar"
      additionalBenefits={additionalBenefits}
    />
  );
}
