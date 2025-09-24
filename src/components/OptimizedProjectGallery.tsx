"use client";

import { useState, useEffect, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import {
  BRAND,
  IMAGES,
  COLORS,
  SERVICE_CATEGORIES,
  CATEGORY_LABELS,
} from "@/lib/constants";
import { caseStudyData, type CaseStudyData } from "@/lib/case-study-data";

interface ProjectImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  location?: string;
  date?: string;
  caseStudyId?: string;
}

interface ProjectGalleryProps {
  images?: ProjectImage[];
  title?: string;
  description?: string;
  className?: string;
}

// Memoized image component for better performance
const ProjectImageCard = memo<{
  image: ProjectImage;
  index: number;
  onImageClick: (index: number) => void;
  onCaseStudyClick: (caseStudyId: string) => void;
}>(({ image, index, onImageClick, onCaseStudyClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleCardClick = useCallback(() => {
    if (image.caseStudyId) {
      onCaseStudyClick(image.caseStudyId);
    } else {
      onImageClick(index);
    }
  }, [image.caseStudyId, onCaseStudyClick, onImageClick, index]);

  return (
    <div
      className="group cursor-pointer bg-bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden h-80">
        <img
          src={imageError ? IMAGES.FALLBACK : image.src}
          alt={image.alt}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading={index < 8 ? "eager" : "lazy"}
        />
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
            <div className="text-neutral-400 text-sm">Loading...</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center space-x-2 mb-2">
            {image.caseStudyId ? (
              <>
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">View Case Study</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">View Details</span>
              </>
            )}
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
              {CATEGORY_LABELS[image.category as keyof typeof CATEGORY_LABELS]}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {image.title || image.alt}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">
          {image.description ||
            "Professional 3D laser scanning and documentation services"}
        </p>
        <div className="flex items-center text-text-muted text-xs mt-2">
          {image.location && (
            <span className="flex items-center mr-3">
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
  );
});

ProjectImageCard.displayName = "ProjectImageCard";

// Memoized filter button component
const FilterButton = memo<{
  category: string;
  isSelected: boolean;
  onClick: (category: string) => void;
}>(({ category, isSelected, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(category);
  }, [category, onClick]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isSelected) {
        e.currentTarget.style.backgroundColor = "#e5e7eb";
        e.currentTarget.style.color = "#111827";
      }
    },
    [isSelected]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isSelected) {
        e.currentTarget.style.backgroundColor = "#f3f4f6";
        e.currentTarget.style.color = "#1f2937";
      }
    },
    [isSelected]
  );

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
        ${isSelected ? "shadow-md" : "hover:shadow-md"}
      `}
      style={{
        backgroundColor: isSelected ? COLORS.PRIMARY : "#f3f4f6",
        color: isSelected ? COLORS.WHITE : COLORS.DARK_GRAY,
        border: isSelected ? "none" : "1px solid #d1d5db",
      }}
    >
      {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
    </button>
  );
});

FilterButton.displayName = "FilterButton";

// Memoized modal component
const ImageModal = memo<{
  isOpen: boolean;
  currentImage: ProjectImage | null;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}>(
  ({
    isOpen,
    currentImage,
    currentIndex,
    totalImages,
    onClose,
    onNext,
    onPrev,
  }) => {
    if (!isOpen || !currentImage) return null;

    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
        <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {currentImage.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {currentIndex + 1} of {totalImages} •{" "}
                {CATEGORY_LABELS[
                  currentImage.category as keyof typeof CATEGORY_LABELS
                ] || "Project"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-700 hover:text-gray-900"
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
                target.src = IMAGES.FALLBACK;
              }}
            />

            {/* Navigation Buttons */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10 text-gray-700 hover:text-gray-900"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10 text-gray-700 hover:text-gray-900"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Description */}
          <div className="p-4 bg-white border-t border-gray-200">
            <p className="leading-relaxed text-base mb-3 text-gray-800">
              {currentImage.description}
            </p>
            <div className="flex flex-wrap items-center text-sm text-gray-600">
              {currentImage.location && (
                <span className="flex items-center mr-4 mb-1">
                  <MapPin className="h-4 w-4 mr-1 text-blue-600" />{" "}
                  {currentImage.location}
                </span>
              )}
              {currentImage.date && (
                <span className="flex items-center mr-4 mb-1">
                  <Calendar className="h-4 w-4 mr-1 text-blue-600" />{" "}
                  {currentImage.date}
                </span>
              )}
              <span className="flex items-center mb-1">
                <Calendar className="h-4 w-4 mr-1 text-blue-600" />{" "}
                {currentImage.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ImageModal.displayName = "ImageModal";

const OptimizedProjectGallery = memo<ProjectGalleryProps>(
  ({
    images = [],
    title = "Our Projects",
    description = "Explore our portfolio of 3D laser scanning and digital documentation projects",
    className = "",
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    // Memoized project images data
    const allProjectImages: ProjectImage[] = useMemo(
      () => [
        {
          src: IMAGES.LOGO,
          alt: `${BRAND.FULL_NAME} Logo`,
          title: BRAND.FULL_NAME,
          description: BRAND.DESCRIPTION,
          category: SERVICE_CATEGORIES.HERITAGE,
          location: BRAND.LOCATION,
          date: BRAND.ESTABLISHED,
          caseStudyId: "praman-engineering-services",
        },
        {
          src: "/images/image-02.jpeg",
          alt: "Historic Temple 3D Documentation",
          title: "Ancient Temple 3D Documentation",
          description:
            "Comprehensive 3D documentation of a 12th-century temple complex using advanced laser scanning technology for conservation planning and digital preservation.",
          category: SERVICE_CATEGORIES.HERITAGE,
          location: "Rajasthan, India",
          date: "March 2025",
          caseStudyId: "heritage-temple-documentation",
        },
        {
          src: "/images/image-04.jpeg",
          alt: "Industrial Plant 3D Modeling",
          title: "Petrochemical Plant 3D Documentation",
          description:
            "Comprehensive 3D documentation of a major petrochemical facility for maintenance planning, safety analysis, and expansion design.",
          category: SERVICE_CATEGORIES.MODELING,
          location: "Gujarat, India",
          date: "February 2025",
          caseStudyId: "industrial-plant-modeling",
        },
        {
          src: "/images/image-05.jpeg",
          alt: "Bridge Structural Analysis",
          title: "Historic Bridge Structural Assessment",
          description:
            "Detailed structural analysis of a 150-year-old railway bridge using 3D laser scanning for safety assessment and restoration planning.",
          category: SERVICE_CATEGORIES.ANALYSIS,
          location: "Maharashtra, India",
          date: "January 2025",
          caseStudyId: "bridge-structural-analysis",
        },
        {
          src: "/images/image-06.jpeg",
          alt: "Museum Digital Archive Project",
          title: "National Museum Digital Archive",
          description:
            "Comprehensive digital documentation of museum artifacts and exhibits for virtual museum creation and cultural preservation.",
          category: SERVICE_CATEGORIES.HERITAGE,
          location: "New Delhi, India",
          date: "December 2024",
          caseStudyId: "museum-digital-archive",
        },
        // Add more images without case studies for modal view
        {
          src: "/images/image-01.jpeg",
          alt: "3D Laser Scanning Equipment Setup",
          title: "Professional Scanning Setup",
          description:
            "High-precision 3D laser scanning equipment in action, capturing detailed measurements for heritage conservation projects.",
          category: SERVICE_CATEGORIES.EQUIPMENT,
          location: "Heritage Site",
          date: "September 2025",
        },
        {
          src: "/images/image-03.jpeg",
          alt: "Detailed Architectural Elements",
          title: "Architectural Detail Capture",
          description:
            "High-resolution capture of intricate architectural details for preservation and restoration planning.",
          category: SERVICE_CATEGORIES.HERITAGE,
          location: "Monument Site",
          date: "September 2025",
        },
        {
          src: "/images/image-07.jpeg",
          alt: "Precision Measurement Tools",
          title: "Measurement Equipment",
          description:
            "Professional-grade measurement tools and equipment for accurate 3D data capture.",
          category: SERVICE_CATEGORIES.EQUIPMENT,
          location: "Field Site",
          date: "September 2025",
        },
        {
          src: "/images/image-08.jpeg",
          alt: "Digital Documentation Process",
          title: "Digital Documentation",
          description:
            "Advanced digital documentation process using cutting-edge 3D scanning technology.",
          category: SERVICE_CATEGORIES.PROCESS,
          location: "Project Site",
          date: "September 2025",
        },
        {
          src: "/images/image-09.jpeg",
          alt: "Heritage Site Survey",
          title: "Site Survey Work",
          description:
            "Comprehensive site survey and documentation for heritage conservation projects.",
          category: SERVICE_CATEGORIES.HERITAGE,
          location: "Historic Site",
          date: "September 2025",
        },
        {
          src: "/images/image-10.jpeg",
          alt: "3D Modeling Process",
          title: "3D Modeling",
          description:
            "Advanced 3D modeling and reconstruction from laser scanning data for heritage preservation.",
          category: SERVICE_CATEGORIES.MODELING,
          location: "Digital Studio",
          date: "September 2025",
        },
      ],
      []
    );

    const displayImages = images.length > 0 ? images : allProjectImages;

    const categories = useMemo(() => {
      const uniqueCategories = new Set(
        displayImages.map((img) => img.category)
      );
      return ["all", ...Array.from(uniqueCategories)];
    }, [displayImages]);

    const filteredImages = useMemo(() => {
      return selectedCategory === "all"
        ? displayImages
        : displayImages.filter((img) => img.category === selectedCategory);
    }, [displayImages, selectedCategory]);

    const currentImage = useMemo(() => {
      return filteredImages[currentIndex] || filteredImages[0];
    }, [filteredImages, currentIndex]);

    const nextImage = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    }, [filteredImages.length]);

    const prevImage = useCallback(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }, [filteredImages.length]);

    const openModal = useCallback((index: number) => {
      setCurrentIndex(index);
      setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const handleCategoryChange = useCallback((category: string) => {
      setSelectedCategory(category);
      setCurrentIndex(0);
    }, []);

    const handleCaseStudyClick = useCallback((caseStudyId: string) => {
      window.open(
        `/case-study/${caseStudyId}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <section className={`py-20 bg-bg-secondary ${className}`}>
        <div className={`max-w-7xl mx-auto ${BRAND.CONTAINER_PADDING}`}>
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.DARK_GRAY }}
            >
              {title}
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: COLORS.MEDIUM_GRAY }}
            >
              {description}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onClick={handleCategoryChange}
              />
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredImages.map((image, index) => (
              <ProjectImageCard
                key={`${image.src}-${index}`}
                image={image}
                index={index}
                onImageClick={openModal}
                onCaseStudyClick={handleCaseStudyClick}
              />
            ))}
          </div>

          {/* Modal */}
          <ImageModal
            isOpen={isModalOpen}
            currentImage={currentImage}
            currentIndex={currentIndex}
            totalImages={filteredImages.length}
            onClose={closeModal}
            onNext={nextImage}
            onPrev={prevImage}
          />
        </div>
      </section>
    );
  }
);

OptimizedProjectGallery.displayName = "OptimizedProjectGallery";

export default OptimizedProjectGallery;
