"use client";

import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="text-white relative overflow-hidden h-screen flex items-center"
        style={{
          background:
            "linear-gradient(to bottom right, #ea580c, #f97316, #4f46e5)",
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
                  Project Portfolio
                </div>
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                style={{ color: "white" }}
              >
                Project Gallery
              </h1>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "white" }}
              >
                Explore our comprehensive portfolio of 3D laser scanning and
                digital documentation projects. From heritage conservation to
                industrial applications, see how we deliver precision and
                excellence.
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
                    Why Choose Our Services?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Heritage conservation expertise
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Advanced 3D scanning technology
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Precision documentation
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Global project experience
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <ProjectGallery
        title="Our Complete Portfolio"
        description="Browse through our extensive collection of 3D laser scanning projects, heritage conservation work, and digital documentation services. Each project showcases our commitment to precision, quality, and innovation."
        className="py-20"
      />

      {/* Project Categories Info */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#1a1a1a" }}
            >
              Project Categories
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#374151" }}
            >
              Our projects span across multiple categories, each requiring
              specialized expertise and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-bg-primary rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1a1a1a" }}
              >
                Heritage Conservation
              </h3>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Preserving cultural heritage through non-invasive 3D
                documentation, restoration planning, and digital archiving of
                historic structures.
              </p>
            </div>

            <div className="bg-bg-primary rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1a1a1a" }}
              >
                Equipment & Technology
              </h3>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                State-of-the-art 3D laser scanning equipment and advanced
                technology for precise data capture and analysis.
              </p>
            </div>

            <div className="bg-bg-primary rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1a1a1a" }}
              >
                Data Analysis
              </h3>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Comprehensive data analysis and interpretation of 3D scanning
                results for structural assessment and conservation planning.
              </p>
            </div>

            <div className="bg-bg-primary rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1a1a1a" }}
              >
                Documentation Process
              </h3>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Systematic documentation processes using advanced 3D scanning
                technology for comprehensive project delivery.
              </p>
            </div>

            <div className="bg-bg-primary rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1a1a1a" }}
              >
                3D Modeling
              </h3>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Advanced 3D modeling and reconstruction from laser scanning data
                for heritage preservation and visualization.
              </p>
            </div>

            <div className="bg-bg-primary rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#1a1a1a" }}
              >
                3D Visualization
              </h3>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Advanced 3D visualization and rendering of heritage structures
                for documentation, analysis, and presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-white py-20"
        style={{ backgroundColor: "#ea580c" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "white" }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: "white" }}
          >
            If you're planning a survey, conservation project, retrofit or an
            asset audit - Praman 3D can help. Contact us for a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
              style={{ color: "#ea580c" }}
            >
              Get Free Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors inline-flex items-center justify-center"
              style={{ color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#ea580c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Request Sample Deliverables
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
