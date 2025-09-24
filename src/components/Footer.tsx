import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "3D Laser Scanning", href: "/services/3d-laser-scanning" },
    { name: "LiDAR Data Processing", href: "/services/lidar-processing" },
    { name: "3D CAD Modelling", href: "/services/3d-cad-modelling" },
    { name: "3D BIM Modelling", href: "/services/3d-bim-modelling" },
    { name: "Plant Modelling", href: "/services/plant-modelling" },
    { name: "VR & AR Services", href: "/services/vr-ar" },
    { name: "Heritage Conservation", href: "/services/heritage-conservation" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
  ];

  return (
    <footer className="bg-bg-dark text-text-inverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/praman-logo.jpeg"
                  alt="Praman Engineering Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-text-inverse">
                  Praman 3D
                </span>
                <span className="text-xs text-text-inverse opacity-80">
                  Engineering Services
                </span>
              </div>
            </div>
            <p className="text-text-inverse text-sm opacity-90">
              Professional surveying and digital documentation company
              specializing in high-accuracy 3D laser scanning and spatial
              services.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-text-inverse opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 text-text-inverse opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="h-5 w-5 text-text-inverse opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-inverse">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-text-inverse opacity-80 hover:opacity-100 transition-opacity text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-inverse">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-inverse opacity-80 hover:opacity-100 transition-opacity text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-inverse">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-text-inverse opacity-70" />
                <span className="text-text-inverse text-sm opacity-90">
                  India & Australia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-text-inverse opacity-70" />
                <span className="text-text-inverse text-sm opacity-90">
                  +91 XXX XXX XXXX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-text-inverse opacity-70" />
                <span className="text-text-inverse text-sm opacity-90">
                  info@praman3d.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-text-inverse opacity-20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-text-inverse text-sm opacity-80">
              &copy; {new Date().getFullYear()} Praman 3D. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-text-inverse opacity-80 hover:opacity-100 text-sm transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-text-inverse opacity-80 hover:opacity-100 text-sm transition-opacity"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
