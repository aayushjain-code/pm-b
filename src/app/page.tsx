"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Globe,
  Shield,
  Zap,
  Building,
  Factory,
  Eye,
  Layers,
} from "lucide-react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui";
import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "3D Laser Scanning",
      description:
        "Millimetre precision capture of as-built geometry with rapid, non-destructive methods.",
      icon: Target,
      href: "/services/3d-laser-scanning",
    },
    {
      title: "LiDAR Processing",
      description:
        "High-quality point cloud processing for infrastructure, forestry, and urban planning.",
      icon: Globe,
      href: "/services/lidar-processing",
    },
    {
      title: "CAD & BIM Modelling",
      description:
        "Intelligent 3D models and Building Information Modelling for construction workflows.",
      icon: Building,
      href: "/services/3d-cad-modelling",
    },
    {
      title: "Plant Modelling",
      description:
        "3D plant design services for power, chemical, oil & gas, and manufacturing facilities.",
      icon: Factory,
      href: "/services/plant-modelling",
    },
    {
      title: "VR & AR Services",
      description:
        "Immersive virtual and augmented reality experiences for design validation and training.",
      icon: Eye,
      href: "/services/vr-ar",
    },
    {
      title: "Heritage Conservation",
      description:
        "Non-invasive 3D documentation for cultural heritage preservation and restoration.",
      icon: Shield,
      href: "/services/heritage-conservation",
    },
  ];

  const benefits = [
    "Archive-grade accuracy you can rely on",
    "Non-intrusive methods protecting fragile sites",
    "In-house expertise from field to CAD deliverables",
    "Flexible deliverables tailored to your workflow",
    "Global reach with local sensitivity",
    "Fast turnaround with meticulous quality control",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="text-white relative overflow-hidden h-screen flex items-center"
        style={{
          background:
            "linear-gradient(to bottom right, #ea580c, #c2410c, #9a3412)",
        }}
      >
        {/* Heritage-inspired background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        {/* Additional heritage texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-600/20 to-orange-800/40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/praman-logo.jpeg"
                    alt="Praman Engineering Services Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div
                  className="text-sm font-semibold tracking-wide uppercase"
                  style={{ color: "white" }}
                >
                  Heritage Conservation Specialists
                </div>
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                style={{ color: "white" }}
              >
                Professional 3D Laser Scanning & Digital Documentation
              </h1>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "white" }}
              >
                Praman 3D delivers clear, reliable, archive-grade 3D data that
                helps clients make better decisions, protect assets and tell
                stronger stories about the built environment. Preserving
                cultural heritage through cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = "/about")}
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Learn More
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
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Why Choose Praman 3D?
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the full spectrum of point-cloud and spatial services,
              delivered with fast turnaround and meticulous quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card
                  variant="elevated"
                  padding="lg"
                  hover
                  className="group border-gray-200 hover:border-yellow-200"
                >
                  <CardContent>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-yellow-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/praman-logo.jpeg"
                    alt="Praman Engineering Services Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                    About Praman 3D
                  </h2>
                  <p className="text-text-secondary text-lg">
                    Engineering Services
                  </p>
                </div>
              </div>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Headquartered in India and operating worldwide, we bring
                practical experience across a wide range of industries and
                project types. Our mission is simple: to deliver clear,
                reliable, archive-grade 3D data that helps clients make better
                decisions.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                We provide the full spectrum of point-cloud and spatial
                services, delivered with fast turnaround and meticulous quality
                control. All processing is done in-house by our highly skilled
                CAD and modelling team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => (window.location.href = "/about")}
                >
                  Learn More About Us
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "/contact")}
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Fast Turnaround
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Rapid capture and processing with industry-leading speed
                  </p>
                </CardContent>
              </Card>
              <Card variant="elevated" padding="lg" className="text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quality Assured
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Meticulous quality control and archive-grade deliverables
                  </p>
                </CardContent>
              </Card>
              <Card variant="elevated" padding="lg" className="text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Global Reach
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Operating worldwide with local expertise and sensitivity
                  </p>
                </CardContent>
              </Card>
              <Card variant="elevated" padding="lg" className="text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Full Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    End-to-end solutions from field capture to final
                    deliverables
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Conservation Values Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/praman-logo.jpeg"
                  alt="Praman Engineering Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  Heritage Conservation Excellence
                </h2>
                <p className="text-text-secondary text-lg">
                  Preserving Cultural Legacy
                </p>
              </div>
            </div>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Inspired by organizations like INTACH and India Studies, we
              combine traditional craftsmanship respect with cutting-edge
              technology to preserve and document cultural heritage for future
              generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card variant="elevated" padding="lg" className="text-center">
              <CardContent>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Cultural Heritage
                </h3>
                <p className="text-text-secondary">
                  Documenting and preserving historic monuments, temples, and
                  architectural marvels with precision and respect.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="lg" className="text-center">
              <CardContent>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Precision Technology
                </h3>
                <p className="text-text-secondary">
                  Using state-of-the-art 3D laser scanning for
                  millimeter-accurate documentation without physical contact.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="lg" className="text-center">
              <CardContent>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Global Impact
                </h3>
                <p className="text-text-secondary">
                  Serving clients worldwide while maintaining deep respect for
                  local cultural values and traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <ProjectGallery
        title="Our Project Portfolio"
        description="Explore our comprehensive portfolio of 3D laser scanning and digital documentation projects across heritage conservation, infrastructure, and industrial applications."
      />

      {/* CTA Section */}
      <section
        className="text-white py-20 relative overflow-hidden"
        style={{
          backgroundColor: "#ea580c",
        }}
      >
        {/* Heritage-inspired background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative w-12 h-12">
              <Image
                src="/images/praman-logo.jpeg"
                alt="Praman Engineering Services Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-white text-lg">
                Heritage Conservation Specialists
              </p>
            </div>
          </div>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            If you&apos;re planning a survey, conservation project, retrofit or
            an asset audit - Praman 3D can help. Contact us for a free
            consultation and let us preserve your cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Request Sample Deliverables
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
