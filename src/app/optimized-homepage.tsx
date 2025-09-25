"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Globe,
  Building,
  Zap,
  CheckCircle,
} from "lucide-react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui";
import HeroSection from "@/components/HeroSection";
import OptimizedProjectGallery from "@/components/OptimizedProjectGallery";
import ErrorBoundary from "@/components/ErrorBoundary";
import { BRAND, ROUTES, COMMON_BENEFITS } from "@/lib/constants";

// Memoized service card component
const ServiceCard = memo<{
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}>(({ title, description, icon: Icon, href }) => (
  <Card
    variant="elevated"
    padding="lg"
    className="group hover:shadow-xl transition-all duration-300"
  >
    <CardHeader>
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <CardTitle className="text-xl group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-text-secondary leading-relaxed mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </CardContent>
  </Card>
));

ServiceCard.displayName = "ServiceCard";

// Memoized benefit item component
const BenefitItem = memo<{
  benefit: string;
  index: number;
}>(({ benefit, index }) => (
  <li className="flex items-start space-x-3 group">
    <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
    <span className="text-text-primary group-hover:text-primary-600 transition-colors duration-300">
      {benefit}
    </span>
  </li>
));

BenefitItem.displayName = "BenefitItem";

// Memoized CTA section component
const CTASection = memo(() => (
  <section
    className="text-white py-20 relative overflow-hidden"
    style={{
      background: `linear-gradient(to bottom right, ${BRAND.PRIMARY}, ${BRAND.PRIMARY_DARK}, ${BRAND.PRIMARY_DARKER})`,
    }}
  >
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

    <div
      className={`max-w-7xl mx-auto ${BRAND.CONTAINER_PADDING} text-center relative z-10`}
    >
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="relative w-12 h-12">
          <img
            src={BRAND.LOGO}
            alt={`${BRAND.FULL_NAME} Logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-white text-lg">{BRAND.TAGLINE}</p>
        </div>
      </div>
      <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
        If you&apos;re planning a survey, conservation project, retrofit or an
        asset audit - {BRAND.NAME} can help. Contact us for a free consultation
        and let us preserve your cultural heritage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => (window.location.href = ROUTES.CONTACT)}
          className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
        >
          Get Free Consultation
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => (window.location.href = ROUTES.CONTACT)}
          className="border-white text-white hover:bg-white hover:text-orange-600"
        >
          Request Sample Deliverables
        </Button>
      </div>
    </div>
  </section>
));

CTASection.displayName = "CTASection";

const OptimizedHomepage = memo(() => {
  // Memoized services data
  const services = useMemo(
    () => [
      {
        title: "3D Laser Scanning",
        description:
          "Millimetre precision capture of as-built geometry with rapid, non-destructive methods.",
        icon: Target,
        href: ROUTES.SERVICES.LASER_SCANNING,
      },
      {
        title: "LiDAR Processing",
        description:
          "High-quality point cloud processing for infrastructure, forestry, and urban planning.",
        icon: Globe,
        href: ROUTES.SERVICES.LIDAR_PROCESSING,
      },
      {
        title: "CAD & BIM Modelling",
        description:
          "Intelligent 3D models and Building Information Modelling for construction workflows.",
        icon: Building,
        href: ROUTES.SERVICES.CAD_MODELING,
      },
      {
        title: "Heritage Conservation",
        description:
          "Digital documentation and conservation planning for cultural heritage sites.",
        icon: Zap,
        href: ROUTES.SERVICES.HERITAGE_CONSERVATION,
      },
    ],
    []
  );

  // Memoized benefits data
  const benefits = useMemo(
    () => [
      "Heritage conservation expertise",
      "Advanced 3D scanning technology",
      "Precision documentation",
      "Global project experience",
      "Fast turnaround with quality control",
      "Non-destructive data capture methods",
    ],
    []
  );

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          title="Professional 3D Laser Scanning & Digital Documentation"
          subtitle={BRAND.TAGLINE}
          description={BRAND.DESCRIPTION}
          backgroundGradient="linear-gradient(to bottom right, #ea580c, #c2410c, #9a3412)"
          primaryButtonText="Get Free Quote"
          primaryButtonHref={ROUTES.CONTACT}
          secondaryButtonText="Learn More"
          secondaryButtonHref={ROUTES.ABOUT}
          benefits={benefits}
          cardTitle="Why Choose Praman 3D?"
        />

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className={`max-w-7xl mx-auto ${BRAND.CONTAINER_PADDING}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide the full spectrum of point-cloud and spatial
                services, delivered with fast turnaround and meticulous quality
                control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className={`max-w-7xl mx-auto ${BRAND.CONTAINER_PADDING}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-16 h-16">
                    <img
                      src={BRAND.LOGO}
                      alt={`${BRAND.FULL_NAME} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                      About {BRAND.NAME}
                    </h2>
                    <p className="text-text-secondary text-lg">
                      Engineering Services
                    </p>
                  </div>
                </div>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Headquartered in {BRAND.LOCATION}, we bring practical
                  experience across a wide range of industries and project
                  types. Our mission is simple: to deliver clear, reliable,
                  archive-grade 3D data that helps clients make better
                  decisions.
                </p>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  We provide the full spectrum of point-cloud and spatial
                  services, delivered with fast turnaround and meticulous
                  quality control. All processing is done in-house by our highly
                  skilled CAD and modelling team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => (window.location.href = ROUTES.ABOUT)}
                  >
                    Learn More About Us
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => (window.location.href = ROUTES.CONTACT)}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card variant="elevated" padding="lg" className="text-center">
                  <CardContent>
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Precision & Accuracy
                    </h3>
                    <p className="text-text-secondary">
                      Millimeter-accurate 3D data for critical decision-making.
                    </p>
                  </CardContent>
                </Card>
                <Card variant="elevated" padding="lg" className="text-center">
                  <CardContent>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Sustainable Solutions
                    </h3>
                    <p className="text-text-secondary">
                      Non-destructive methods for preserving fragile sites.
                    </p>
                  </CardContent>
                </Card>
                <Card variant="elevated" padding="lg" className="text-center">
                  <CardContent>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Global Expertise
                    </h3>
                    <p className="text-text-secondary">
                      Worldwide operations with local cultural sensitivity.
                    </p>
                  </CardContent>
                </Card>
                <Card variant="elevated" padding="lg" className="text-center">
                  <CardContent>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Fast Turnaround
                    </h3>
                    <p className="text-text-secondary">
                      Efficient delivery without compromising quality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <OptimizedProjectGallery
          title="Our Project Portfolio"
          description="Explore our comprehensive portfolio of 3D laser scanning and digital documentation projects across heritage conservation, infrastructure, and industrial applications."
        />

        {/* CTA Section */}
        <CTASection />
      </div>
    </ErrorBoundary>
  );
});

OptimizedHomepage.displayName = "OptimizedHomepage";

export default OptimizedHomepage;
