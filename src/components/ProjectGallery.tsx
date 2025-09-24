"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  MapPin,
  Calendar,
} from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  location?: string;
  date?: string;
}

interface ProjectGalleryProps {
  images?: ProjectImage[];
  title?: string;
  description?: string;
  className?: string;
}

const ProjectGallery = ({
  images = [],
  title = "Our Projects",
  description = "Explore our portfolio of 3D laser scanning and digital documentation projects",
  className = "",
}: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // All project images from assets-1
  const allProjectImages: ProjectImage[] = [
    {
      src: "/images/praman-logo.jpeg",
      alt: "Praman Engineering Services Logo",
      title: "Praman Engineering Services",
      description:
        "Professional engineering services specializing in 3D laser scanning, digital documentation, and heritage conservation with a commitment to precision and cultural sensitivity.",
      category: "heritage",
      location: "India & Australia",
      date: "Established 2025",
    },
    {
      src: "/images/image-01.jpeg",
      alt: "3D Laser Scanning Equipment Setup",
      title: "Professional Scanning Setup",
      description:
        "High-precision 3D laser scanning equipment in action, capturing detailed measurements for heritage conservation projects.",
      category: "equipment",
      location: "Heritage Site",
      date: "September 2025",
    },
    {
      src: "/images/image-02.jpeg",
      alt: "Historic Building Documentation",
      title: "Heritage Building Scan",
      description:
        "Comprehensive 3D documentation of historic architecture using advanced laser scanning technology.",
      category: "heritage",
      location: "Historic District",
      date: "September 2025",
    },
    {
      src: "/images/image-03.jpeg",
      alt: "Detailed Architectural Elements",
      title: "Architectural Detail Capture",
      description:
        "High-resolution capture of intricate architectural details for preservation and restoration planning.",
      category: "heritage",
      location: "Monument Site",
      date: "September 2025",
    },
    {
      src: "/images/image-04.jpeg",
      alt: "Structural Analysis Data",
      title: "Structural Documentation",
      description:
        "Detailed structural analysis and documentation for heritage conservation and restoration projects.",
      category: "analysis",
      location: "Heritage Site",
      date: "September 2025",
    },
    {
      src: "/images/image-05.jpeg",
      alt: "3D Point Cloud Visualization",
      title: "Point Cloud Data",
      description:
        "Advanced 3D point cloud visualization showing precise measurements and spatial relationships.",
      category: "visualization",
      location: "Digital Lab",
      date: "September 2025",
    },
    {
      src: "/images/image-06.jpeg",
      alt: "Heritage Conservation Work",
      title: "Conservation Project",
      description:
        "Ongoing heritage conservation work with detailed 3D documentation for restoration planning.",
      category: "heritage",
      location: "Conservation Site",
      date: "September 2025",
    },
    {
      src: "/images/image-07.jpeg",
      alt: "Precision Measurement Tools",
      title: "Measurement Equipment",
      description:
        "Professional-grade measurement tools and equipment for accurate 3D data capture.",
      category: "equipment",
      location: "Field Site",
      date: "September 2025",
    },
    {
      src: "/images/image-08.jpeg",
      alt: "Digital Documentation Process",
      title: "Digital Documentation",
      description:
        "Advanced digital documentation process using cutting-edge 3D scanning technology.",
      category: "process",
      location: "Project Site",
      date: "September 2025",
    },
    {
      src: "/images/image-09.jpeg",
      alt: "Heritage Site Survey",
      title: "Site Survey Work",
      description:
        "Comprehensive heritage survey and documentation for conservation and restoration planning.",
      category: "heritage",
      location: "Historic Site",
      date: "September 2025",
    },
    {
      src: "/images/image-10.jpeg",
      alt: "3D Modeling Process",
      title: "3D Modeling",
      description:
        "Advanced 3D modeling and reconstruction from laser scanning data for heritage preservation.",
      category: "modeling",
      location: "Digital Studio",
      date: "September 2025",
    },
    {
      src: "/images/image-11.jpeg",
      alt: "Technical Analysis",
      title: "Technical Analysis",
      description:
        "Detailed technical analysis and documentation for structural assessment and conservation planning.",
      category: "analysis",
      location: "Research Lab",
      date: "September 2025",
    },
    {
      src: "/images/image-12.jpeg",
      alt: "Heritage Documentation",
      title: "Heritage Documentation",
      description:
        "Comprehensive heritage documentation using state-of-the-art 3D scanning technology.",
      category: "heritage",
      location: "Cultural Site",
      date: "September 2025",
    },
    {
      src: "/images/image-13.jpeg",
      alt: "Precision Scanning",
      title: "Precision Scanning",
      description:
        "High-precision laser scanning for detailed architectural and structural documentation.",
      category: "equipment",
      location: "Heritage Site",
      date: "September 2025",
    },
    {
      src: "/images/image-14.jpeg",
      alt: "Data Processing",
      title: "Data Processing",
      description:
        "Advanced data processing and analysis of 3D scanning results for conservation projects.",
      category: "process",
      location: "Digital Lab",
      date: "September 2025",
    },
    {
      src: "/images/image-15.jpeg",
      alt: "Heritage Restoration",
      title: "Restoration Planning",
      description:
        "Detailed restoration planning using 3D documentation and analysis for heritage conservation.",
      category: "heritage",
      location: "Restoration Site",
      date: "September 2025",
    },
    {
      src: "/images/image-16.jpeg",
      alt: "3D Visualization",
      title: "3D Visualization",
      description:
        "Advanced 3D visualization and rendering of heritage structures for documentation and analysis.",
      category: "visualization",
      location: "Digital Studio",
      date: "September 2025",
    },
    {
      src: "/images/image-17.jpeg",
      alt: "Field Work Documentation",
      title: "Field Documentation",
      description:
        "Comprehensive field work documentation using professional 3D scanning equipment.",
      category: "process",
      location: "Field Site",
      date: "September 2025",
    },
    {
      src: "/images/image-18.jpeg",
      alt: "Heritage Analysis",
      title: "Heritage Analysis",
      description:
        "Detailed heritage analysis and documentation for conservation and restoration projects.",
      category: "analysis",
      location: "Heritage Site",
      date: "September 2025",
    },
    {
      src: "/images/image-19.jpeg",
      alt: "Technical Documentation",
      title: "Technical Documentation",
      description:
        "Professional technical documentation using advanced 3D scanning and measurement tools.",
      category: "equipment",
      location: "Project Site",
      date: "September 2025",
    },
    {
      src: "/images/image-20.jpeg",
      alt: "Conservation Planning",
      title: "Conservation Planning",
      description:
        "Strategic conservation planning using detailed 3D documentation and analysis.",
      category: "heritage",
      location: "Conservation Center",
      date: "September 2025",
    },
    {
      src: "/images/image-21.jpeg",
      alt: "Digital Reconstruction",
      title: "Digital Reconstruction",
      description:
        "Advanced digital reconstruction and modeling for heritage preservation and study.",
      category: "modeling",
      location: "Digital Lab",
      date: "September 2025",
    },
    {
      src: "/images/image-22.jpeg",
      alt: "Heritage Survey",
      title: "Heritage Survey",
      description:
        "Comprehensive heritage survey and documentation for conservation and restoration planning.",
      category: "heritage",
      location: "Historic Site",
      date: "September 2025",
    },
    {
      src: "/images/image-23.jpeg",
      alt: "Advanced Scanning Technology",
      title: "Advanced Technology",
      description:
        "State-of-the-art scanning technology for precise heritage documentation and analysis.",
      category: "equipment",
      location: "Technology Center",
      date: "September 2025",
    },
    {
      src: "/images/image-24.jpeg",
      alt: "Heritage Conservation Work",
      title: "Conservation Work",
      description:
        "Professional heritage conservation work with detailed 3D documentation and analysis.",
      category: "heritage",
      location: "Conservation Site",
      date: "September 2025",
    },
    {
      src: "/images/image-25.jpeg",
      alt: "3D Data Analysis",
      title: "Data Analysis",
      description:
        "Comprehensive 3D data analysis and interpretation for heritage conservation projects.",
      category: "analysis",
      location: "Research Facility",
      date: "September 2025",
    },
    {
      src: "/images/image-26.jpeg",
      alt: "Heritage Documentation Process",
      title: "Documentation Process",
      description:
        "Systematic heritage documentation process using advanced 3D scanning technology.",
      category: "process",
      location: "Heritage Site",
      date: "September 2025",
    },
    {
      src: "/images/image-27.jpeg",
      alt: "Precision Measurements",
      title: "Precision Measurements",
      description:
        "High-precision measurements and documentation for heritage conservation and restoration.",
      category: "equipment",
      location: "Field Site",
      date: "September 2025",
    },
    {
      src: "/images/image-28.jpeg",
      alt: "Heritage Restoration",
      title: "Restoration Work",
      description:
        "Professional heritage restoration work with detailed 3D documentation and planning.",
      category: "heritage",
      location: "Restoration Site",
      date: "September 2025",
    },
    {
      src: "/images/image-29.jpeg",
      alt: "3D Modeling Work",
      title: "3D Modeling Work",
      description:
        "Advanced 3D modeling and reconstruction work for heritage preservation projects.",
      category: "modeling",
      location: "Digital Studio",
      date: "September 2025",
    },
    {
      src: "/images/image-30.jpeg",
      alt: "Heritage Analysis",
      title: "Heritage Analysis",
      description:
        "Detailed heritage analysis and documentation for conservation and restoration planning.",
      category: "analysis",
      location: "Heritage Site",
      date: "September 2025",
    },
    {
      src: "/images/image-31.jpeg",
      alt: "Technical Documentation",
      title: "Technical Documentation",
      description:
        "Professional technical documentation using advanced 3D scanning and measurement tools.",
      category: "equipment",
      location: "Project Site",
      date: "September 2025",
    },
    {
      src: "/images/image-32.jpeg",
      alt: "Heritage Conservation",
      title: "Heritage Conservation",
      description:
        "Comprehensive heritage conservation work with detailed 3D documentation and analysis.",
      category: "heritage",
      location: "Conservation Site",
      date: "September 2025",
    },
    {
      src: "/images/image-33.jpeg",
      alt: "Digital Documentation",
      title: "Digital Documentation",
      description:
        "Advanced digital documentation process for heritage conservation and preservation.",
      category: "process",
      location: "Digital Lab",
      date: "September 2025",
    },
    {
      src: "/images/image-34.jpeg",
      alt: "Heritage Survey Work",
      title: "Survey Work",
      description:
        "Professional heritage survey work using state-of-the-art 3D scanning technology.",
      category: "heritage",
      location: "Survey Site",
      date: "September 2025",
    },
    {
      src: "/images/image-35.jpeg",
      alt: "3D Visualization Work",
      title: "3D Visualization",
      description:
        "Advanced 3D visualization and rendering for heritage documentation and analysis.",
      category: "visualization",
      location: "Digital Studio",
      date: "September 2025",
    },
    {
      src: "/images/image-36.jpeg",
      alt: "Latest Project Work",
      title: "Latest Project",
      description:
        "Our most recent heritage conservation project showcasing advanced 3D documentation techniques.",
      category: "heritage",
      location: "Project Site",
      date: "September 2025",
    },
  ];

  const displayImages = images.length > 0 ? images : allProjectImages;

  const categories = [
    "all",
    "heritage",
    "equipment",
    "analysis",
    "process",
    "modeling",
    "visualization",
  ];
  const categoryLabels = {
    all: "All Projects",
    heritage: "Heritage Conservation",
    equipment: "Equipment & Tools",
    analysis: "Data Analysis",
    process: "Documentation Process",
    modeling: "3D Modeling",
    visualization: "3D Visualization",
  };

  const filteredImages =
    selectedCategory === "all"
      ? displayImages
      : displayImages.filter((img) => img.category === selectedCategory);

  const currentImage = filteredImages[currentIndex] || filteredImages[0];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`py-20 bg-bg-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#1a1a1a" }}
          >
            {title}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#374151" }}
          >
            {description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  selectedCategory === category
                    ? "shadow-md"
                    : "hover:shadow-md"
                }
              `}
              style={{
                backgroundColor:
                  selectedCategory === category ? "#ea580c" : "#f3f4f6",
                color: selectedCategory === category ? "white" : "#1f2937",
                border:
                  selectedCategory === category ? "none" : "1px solid #d1d5db",
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.backgroundColor = "#e5e7eb";
                  e.currentTarget.style.color = "#111827";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                  e.currentTarget.style.color = "#1f2937";
                }
              }}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Enhanced layout inspired by heritage sites */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/praman-logo.jpeg"; // Fallback image
                    const loadingDiv = target.nextElementSibling as HTMLElement;
                    if (loadingDiv) loadingDiv.style.display = "none";
                  }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = "1";
                    const loadingDiv = target.nextElementSibling as HTMLElement;
                    if (loadingDiv) loadingDiv.style.display = "none";
                  }}
                  loading={index < 8 ? "eager" : "lazy"}
                  style={{ opacity: 0 }}
                />
                <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
                  <div className="text-neutral-400 text-sm">Loading...</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">View Details</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {image.title || image.alt}
                  </h3>
                  <p className="text-sm text-white line-clamp-2">
                    {image.description ||
                      "Professional 3D laser scanning and documentation services"}
                  </p>
                </div>
                {image.category && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                      {
                        categoryLabels[
                          image.category as keyof typeof categoryLabels
                        ]
                      }
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300"
                  style={{ color: "#1a1a1a" }}
                >
                  {image.title || image.alt}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "#374151" }}
                >
                  {image.description ||
                    "Professional 3D laser scanning and documentation services"}
                </p>
                <div
                  className="flex items-center justify-between text-xs"
                  style={{ color: "#6b7280" }}
                >
                  {image.location && (
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" /> {image.location}
                    </span>
                  )}
                  {image.date && (
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" /> {image.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && currentImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
            <div className="relative max-w-6xl w-full max-h-[90vh] bg-bg-primary rounded-xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-bg-tertiary border-b border-border-light">
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#1a1a1a" }}
                  >
                    {currentImage.title}
                  </h3>
                  <p className="text-white text-sm mt-1">
                    {currentIndex + 1} of {filteredImages.length} •{" "}
                    {categoryLabels[
                      currentImage.category as keyof typeof categoryLabels
                    ] || "Project"}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-neutral-200 transition-colors duration-200"
                  style={{ color: "#1a1a1a" }}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative flex-grow bg-neutral-100 flex items-center justify-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/praman-logo.jpeg"; // Fallback image
                  }}
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-bg-primary/80 hover:bg-bg-primary p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  style={{ color: "#1a1a1a" }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-bg-primary/80 hover:bg-bg-primary p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  style={{ color: "#1a1a1a" }}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Description */}
              <div className="p-4 bg-bg-primary border-t border-border-light">
                <p
                  className="leading-relaxed text-base mb-3"
                  style={{ color: "#1a1a1a" }}
                >
                  {currentImage.description}
                </p>
                <div
                  className="flex flex-wrap items-center text-sm"
                  style={{ color: "#374151" }}
                >
                  {currentImage.location && (
                    <span className="flex items-center mr-4 mb-1">
                      <MapPin className="h-4 w-4 mr-1 text-primary-500" />{" "}
                      {currentImage.location}
                    </span>
                  )}
                  {currentImage.date && (
                    <span className="flex items-center mr-4 mb-1">
                      <Calendar className="h-4 w-4 mr-1 text-primary-500" />{" "}
                      {currentImage.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
