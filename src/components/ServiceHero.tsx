"use client";

import { memo } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { BRAND, IMAGES, COLORS } from "@/lib/constants";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundGradient: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  benefits: string[];
  cardTitle: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

const ServiceHero = memo<ServiceHeroProps>(
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
    icon: Icon,
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
        className={`text-white relative overflow-hidden h-screen flex items-center ${className}`}
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
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/20" />

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
                <div className="text-sm font-semibold tracking-wide uppercase text-white/90">
                  {subtitle}
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                {title}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => handleButtonClick(primaryButtonHref)}
                  className="bg-white text-gray-900 hover:bg-gray-50 shadow-lg"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleButtonClick(secondaryButtonHref)}
                  className="border-white text-white hover:bg-white hover:text-gray-900"
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
                  <div className="flex items-center space-x-3 mb-4">
                    {Icon && (
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    )}
                    <CardTitle className="text-2xl text-white">
                      {cardTitle}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 group"
                      >
                        <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-white group-hover:text-white/90 transition-colors duration-300">
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

ServiceHero.displayName = "ServiceHero";

export default ServiceHero;
