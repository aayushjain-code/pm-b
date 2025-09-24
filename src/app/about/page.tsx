"use client";

import {
  CheckCircle,
  Users,
  Target,
  Globe,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import { Button } from "@/components/ui";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "Mayank Jain",
      role: "Founder",
      description:
        "Leading the vision and strategic direction of Praman 3D with extensive experience in surveying and digital documentation.",
    },
    {
      name: "Vikas Sandheliya",
      role: "Co-Founder",
      description:
        "Bringing technical expertise and project delivery experience to ensure high-quality digital archives and client satisfaction.",
    },
    {
      name: "Nishant Katare",
      role: "Co-Founder",
      description:
        "Combining surveying know-how with innovative approaches to deliver cutting-edge 3D scanning solutions.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy You Can Rely On",
      description:
        "Archive-grade captures that support restoration, fabrication and legal documentation with millimetre precision.",
    },
    {
      icon: Shield,
      title: "Non-Intrusive Methods",
      description:
        "We protect fragile sites and operational environments by scanning from a distance, ensuring no damage to heritage or sensitive areas.",
    },
    {
      icon: Users,
      title: "In-House Expertise",
      description:
        "From field capture to CAD deliverables, our team manages every step for better control and confidentiality.",
    },
    {
      icon: Globe,
      title: "Global Reach, Local Sensitivity",
      description:
        "We combine international technical standards with respect for local regulations and cultural protocols.",
    },
    {
      icon: Award,
      title: "Quality & Futureproofing",
      description:
        "We deliver raw master files in archival formats with detailed metadata and secure backups for long-term value.",
    },
  ];

  const industries = [
    "Industrial plants and oil & gas facilities",
    "Offshore platforms and vessels",
    "Architectural and heritage conservation",
    "FMCG infrastructure",
    "Urban regeneration projects",
    "Large civil works and infrastructure",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 text-white relative overflow-hidden h-screen flex items-center">
        {/* Heritage-inspired background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        {/* Additional heritage texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-600/20 to-amber-800/40"></div>

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
                <div className="text-sm font-semibold tracking-wide uppercase text-yellow-100">
                  About Our Company
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                About Praman 3D
              </h1>
              <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                Professional surveying and digital documentation company
                specializing in high-accuracy 3D laser scanning, operating
                worldwide with practical experience across diverse industries
                and project types.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-white text-yellow-600 hover:bg-yellow-50 shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = "/gallery")}
                  className="border-white text-white hover:bg-white hover:text-yellow-600"
                >
                  View Our Work
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
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-yellow-100 transition-colors duration-300">
                        Global expertise with local cultural sensitivity
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-yellow-100 transition-colors duration-300">
                        High-accuracy 3D laser scanning technology
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-yellow-100 transition-colors duration-300">
                        Fast turnaround with quality control
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-yellow-100 transition-colors duration-300">
                        Heritage conservation specialization
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is simple: to deliver clear, reliable, archive-grade
                3D data that helps clients make better decisions, protect assets
                and tell stronger stories about the built environment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide the full spectrum of point-cloud and spatial
                services, delivered with fast turnaround and meticulous quality
                control. All processing is done in-house by our highly skilled
                CAD and modelling team to ensure fast, secure delivery and
                consistent quality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600 to-amber-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    3D Laser Scanning & Point Clouds with millimetre precision
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>2D Documentation & Measured Drawings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>
                    3D Modelling & Meshes for visualization and analysis
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Building Information Modelling (BIM) workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Plant, Offshore & Ship Modelling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Mining, Topography & GIS services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>NDT (Non-Destructive Testing) Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Clients Choose Praman 3D
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and client satisfaction drives
              everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services fit projects where precision and trust matter across
              diverse industries.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-yellow-100">{industry}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-yellow-100 mt-8 text-lg">
              Whether the goal is restoration, retrofit, regulatory compliance
              or public engagement, we provide the data you need.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, our leadership combines surveying know-how, project
              delivery experience and a commitment to high-quality digital
              archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <ProjectGallery
        title="Our Work in Action"
        description="See our 3D laser scanning and digital documentation projects across heritage conservation, infrastructure, and industrial applications."
      />

      {/* CTA Section */}
      <section className="bg-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            If you're planning a survey, conservation project, retrofit or an
            asset audit - Praman 3D can help. Contact us for a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center justify-center"
            >
              Request Sample Deliverables
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
