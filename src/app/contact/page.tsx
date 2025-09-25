"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  Button,
  Input,
  Textarea,
  Select,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui";
import Image from "next/image";
import { SelectOption } from "@/components/ui/Select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const services: SelectOption[] = [
    { value: "3d-laser-scanning", label: "3D Laser Scanning" },
    { value: "lidar-processing", label: "LiDAR Data Processing" },
    { value: "3d-cad-modelling", label: "3D CAD Modelling" },
    { value: "3d-bim-modelling", label: "3D BIM Modelling" },
    { value: "plant-modelling", label: "Plant Modelling" },
    { value: "vr-ar", label: "VR & AR Services" },
    { value: "heritage-conservation", label: "Heritage Conservation" },
    { value: "other", label: "Other" },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-bg-secondary flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <Card variant="elevated" padding="lg">
            <CardContent>
              <CheckCircle className="h-16 w-16 text-success-500 mx-auto mb-4" />
              <CardTitle className="text-2xl mb-4 text-gray-900">
                Thank You!
              </CardTitle>
              <p className="mb-6 text-gray-600">
                Your message has been sent successfully. We&apos;ll get back to
                you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="primary"
                size="md"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
                  Get In Touch
                </div>
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                style={{ color: "white" }}
              >
                Contact Us
              </h1>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "white" }}
              >
                Ready to start your project? Get in touch for a free
                consultation, sample deliverables, or a pilot survey. We&apos;ll
                propose a clear capture strategy and transparent pricing.
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
                    Why Contact Us?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Free consultation and project assessment
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Sample deliverables and pilot surveys
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Clear capture strategy and transparent pricing
                      </span>
                    </li>
                    <li className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-success-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-white group-hover:text-orange-100 transition-colors duration-300">
                        Fast response within 24 hours
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#1a1a1a" }}
            >
              Get In Touch
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#374151" }}
            >
              Fill out the form below and we&apos;ll get back to you within 24
              hours with a detailed response to your inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={(value) =>
                          setFormData({ ...formData, name: value })
                        }
                        placeholder="Your full name"
                        required
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(value) =>
                          setFormData({ ...formData, email: value })
                        }
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={(value) =>
                          setFormData({ ...formData, company: value })
                        }
                        placeholder="Your company name"
                      />
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(value) =>
                          setFormData({ ...formData, phone: value })
                        }
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <Select
                      label="Service Interest"
                      name="service"
                      value={formData.service}
                      onChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                      options={services}
                      placeholder="Select a service"
                    />

                    <Textarea
                      label="Project Details"
                      name="message"
                      value={formData.message}
                      onChange={(value) =>
                        setFormData({ ...formData, message: value })
                      }
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      rows={6}
                      required
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: "#1a1a1a" }}
                      >
                        Office Locations
                      </h3>
                      <p style={{ color: "#374151" }}>
                        India & Australia
                        <br />
                        Global operations with local expertise
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: "#1a1a1a" }}
                      >
                        Phone
                      </h3>
                      <p style={{ color: "#374151" }}>
                        +91 XXX XXX XXXX
                        <br />
                        Available 9 AM - 6 PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: "#1a1a1a" }}
                      >
                        Email
                      </h3>
                      <p style={{ color: "#374151" }}>
                        info@praman3d.com
                        <br />
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="filled" padding="lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Quick Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">
                    For urgent inquiries or immediate assistance, call us
                    directly or use our quick response options.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open("tel:+91XXXXXXXXXX")}
                    >
                      Call Now
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open("mailto:info@praman3d.com")}
                    >
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
            Don&apos;t wait - get in touch today for a free consultation and
            discover how Praman 3D can help you achieve your project goals with
            precision and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Send Message Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("tel:+91XXXXXXXXXX")}
            >
              Call Us Directly
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
