"use client";

import { memo } from "react";
import { CheckCircle, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import ServiceHero from "@/components/ServiceHero";
import { serviceConfigs, type ServiceConfig } from "@/lib/service-configs";

interface ServicePageTemplateProps {
  serviceKey: string;
  additionalBenefits?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
}

const ServicePageTemplate = memo<ServicePageTemplateProps>(
  ({ serviceKey, additionalBenefits = [] }) => {
    const config = serviceConfigs[serviceKey];

    if (!config) {
      throw new Error(`Service configuration not found for key: ${serviceKey}`);
    }

    const {
      applications,
      deliverables,
      processSteps,
      whyChooseUs,
      industries,
      ctaTitle,
      ctaDescription,
      ctaButtons,
    } = config;

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <ServiceHero
          title={config.title}
          subtitle={config.subtitle}
          description={config.description}
          backgroundGradient={config.backgroundGradient}
          primaryButtonText={config.primaryButtonText}
          primaryButtonHref={config.primaryButtonHref}
          secondaryButtonText={config.secondaryButtonText}
          secondaryButtonHref={config.secondaryButtonHref}
          benefits={config.benefits}
          cardTitle={config.cardTitle}
          icon={config.icon}
        />

        {/* What is the Service */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What is {config.title}?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {config.description}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our {config.title.toLowerCase()} services combine cutting-edge
                  technology with expert knowledge to deliver accurate, reliable
                  results that support your project goals and decision-making
                  processes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  How the Process Works
                </h3>
                <ol className="space-y-4">
                  {processSteps.map((step) => (
                    <li key={step.step} className="flex items-start space-x-3">
                      <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <span className="font-semibold">{step.title}</span>
                        <span className="block text-blue-100 text-sm mt-1">
                          {step.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {config.title} saves time and reduces risk across many fields
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <config.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Deliver
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don&apos;t just collect data – we turn it into actionable
                intelligence
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Typical Deliverables Include:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{deliverable}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-blue-100 mt-8 text-lg">
                All outputs are produced so they can be imported easily into
                commonly used CAD and BIM software.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        {additionalBenefits.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits to Your Project
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Why choose Praman 3D for your {config.title.toLowerCase()}{" "}
                  needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {additionalBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Praman 3D */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Praman 3D
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Praman 3D {config.title} combines modern hardware, refined
                  processes and experienced staff to deliver reliable results:
                </p>
                <ul className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700 font-semibold">
                          {item.title}
                        </span>
                        <span className="block text-gray-600 text-sm mt-1">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Typical Industries We Serve
                </h3>
                <ul className="space-y-3">
                  {industries.map((industry, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Globe className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaTitle}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    button.variant === "primary"
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : button.variant === "secondary"
                      ? "bg-blue-500 text-white hover:bg-blue-400"
                      : "border-2 border-white text-white hover:bg-white hover:text-blue-600"
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
);

ServicePageTemplate.displayName = "ServicePageTemplate";

export default ServicePageTemplate;
