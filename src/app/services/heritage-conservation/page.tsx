"use client";

import { Shield, Globe, Eye, Leaf } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function HeritageConservation() {
  const additionalBenefits = [
    {
      icon: Shield,
      title: "Cultural Expertise",
      description:
        "Deep understanding of cultural heritage and conservation principles.",
    },
    {
      icon: Globe,
      title: "International Standards",
      description: "Compliance with UNESCO and ICOMOS guidelines.",
    },
    {
      icon: Eye,
      title: "Non-invasive Methods",
      description:
        "Advanced 3D scanning that preserves fragile heritage sites.",
    },
    {
      icon: Leaf,
      title: "Community Engagement",
      description:
        "Collaborative approach with local communities and stakeholders.",
    },
  ];

  return (
    <ServicePageTemplate
      serviceKey="heritage-conservation"
      additionalBenefits={additionalBenefits}
    />
  );
}
