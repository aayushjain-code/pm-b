"use client";

import { memo } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { BRAND, IMAGES, COLORS, ANIMATIONS } from "@/lib/constants";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundGradient: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  benefits: string[];
  cardTitle: string;
  className?: string;
}

const HeroSection = memo<HeroSectionProps>(
  ({
    title,
    subtitle,
    description,
    backgroundGradient,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref,
    benefits,
    cardTitle,
    className = "",
  }) => {
    const handleButtonClick = (href: string) => {
      if (href.startsWith("http")) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    };

    return (
      <section
        className={`text-white relative overflow-hidden ${BRAND.HERO_HEIGHT} flex items-center ${className}`}
        style={{ background: backgroundGradient }}
      >
        {/* Heritage-inspired background pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${IMAGES.PATTERN})`,
          }}
        />

        {/* Additional heritage texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-600/20 to-orange-800/40" />

        <div
          className={`max-w-7xl mx-auto ${BRAND.CONTAINER_PADDING} py-20 relative`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src={IMAGES.LOGO}
                    alt={`${BRAND.FULL_NAME} Logo`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div
                  className="text-sm font-semibold tracking-wide uppercase"
                  style={{ color: COLORS.WHITE }}
                >
                  {subtitle || BRAND.TAGLINE}
                </div>
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                style={{ color: COLORS.WHITE }}
              >
                {title}
              </h1>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: COLORS.WHITE }}
              >
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => handleButtonClick(primaryButtonHref)}
                  className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleButtonClick(secondaryButtonHref)}
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  {secondaryButtonText}
                </Button>
              </div>
            </div>
            <div
              className="relative animate-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Card
                variant="filled"
                padding="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {cardTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 group"
                      >
                        <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
