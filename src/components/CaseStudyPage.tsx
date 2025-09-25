"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Target,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { CaseStudyData } from "@/lib/case-study-data";
import { BRAND } from "@/lib/constants";

interface CaseStudyPageProps {
  caseStudy: CaseStudyData;
}

const CaseStudyPage = memo<CaseStudyPageProps>(({ caseStudy }) => {
  const {
    title,
    description,
    client,
    projectType,
    duration,
    teamSize,
    location,
    date,
    technologies,
    challenges,
    solutions,
    results,
    testimonial,
    gallery,
    technicalSpecs,
    impact,
  } = caseStudy;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/gallery"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Gallery
            </Link>
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/praman-logo.jpeg"
                  alt={`${BRAND.FULL_NAME} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                Case Study
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {projectType}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {location}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {teamSize}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {duration}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={caseStudy.src}
                  alt={caseStudy.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Client
                  </h3>
                  <p className="text-gray-600">{client}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Technical Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Accuracy
                    </span>
                    <p className="text-lg font-semibold">
                      {technicalSpecs.accuracy}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Point Density
                    </span>
                    <p className="text-lg font-semibold">
                      {technicalSpecs.pointDensity}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">
                      Coverage
                    </span>
                    <p className="text-lg font-semibold">
                      {technicalSpecs.coverage}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Challenges
              </h2>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm font-bold">!</span>
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Solutions
              </h2>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Results & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The project delivered exceptional results that exceeded client
              expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {impact.accuracyImprovement}
                </h3>
                <p className="text-gray-600">Accuracy Improvement</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {impact.timeSaved}
                </h3>
                <p className="text-gray-600">Time Saved</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {impact.costReduction}
                </h3>
                <p className="text-gray-600">Cost Reduction</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {impact.clientSatisfaction}
                </h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">View Full Size</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results for your project. Contact us
            for a free consultation and discover how Praman 3D can help you
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/gallery")}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

CaseStudyPage.displayName = "CaseStudyPage";

export default CaseStudyPage;
