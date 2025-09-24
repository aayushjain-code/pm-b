"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "3D Laser Scanning", href: "/services/3d-laser-scanning" },
    { name: "LiDAR Data Processing", href: "/services/lidar-processing" },
    { name: "3D CAD Modelling", href: "/services/3d-cad-modelling" },
    { name: "3D BIM Modelling", href: "/services/3d-bim-modelling" },
    { name: "Plant Modelling", href: "/services/plant-modelling" },
    { name: "VR & AR Services", href: "/services/vr-ar" },
    { name: "Heritage Conservation", href: "/services/heritage-conservation" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/praman-logo.jpeg"
                alt="Praman Engineering Services Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-text-primary">
                Praman 3D
              </span>
              <span className="text-xs text-text-secondary">
                Engineering Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-primary-600 transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-text-secondary hover:text-primary-600 transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-text-secondary hover:bg-primary-50 hover:text-primary-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/gallery"
              className="text-text-secondary hover:text-primary-600 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-text-secondary hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-text-secondary hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <div>
                <button
                  className="flex items-center text-text-secondary hover:text-primary-600 transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-text-tertiary hover:text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className="text-text-secondary hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-text-secondary hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.location.href = "/contact";
                  setIsMenuOpen(false);
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
