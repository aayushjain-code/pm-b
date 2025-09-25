// Brand Constants
export const BRAND = {
  NAME: "Praman 3D",
  FULL_NAME: "Praman Engineering Services",
  TAGLINE: "Heritage Conservation Specialists",
  DESCRIPTION:
    "Professional engineering services specializing in 3D laser scanning, digital documentation, and heritage conservation with a commitment to precision and cultural sensitivity.",
  LOCATION: "India & Australia",
  ESTABLISHED: "Established 2025",
  PRIMARY: "#ea580c",
  PRIMARY_DARK: "#c2410c",
  PRIMARY_DARKER: "#9a3412",
  CONTAINER_PADDING: "px-4 sm:px-6 lg:px-8",
  LOGO: "/images/praman-logo.jpeg",
  HERO_HEIGHT: "min-h-screen",
} as const;

// Contact Information
export const CONTACT = {
  PHONE: "+91-9876543210",
  EMAIL: "info@praman3d.com",
  ADDRESS: "Praman 3D Engineering Services, Jaipur, Rajasthan, India",
  RESPONSE_TIME: "We respond within 24 hours",
  AVAILABILITY: "Available 9 AM - 6 PM IST",
} as const;

// Color Constants
export const COLORS = {
  PRIMARY: "#ea580c",
  PRIMARY_DARK: "#c2410c",
  PRIMARY_DARKER: "#9a3412",
  SUCCESS: "#22c55e",
  WHITE: "#ffffff",
  BLACK: "#000000",
  DARK_GRAY: "#1a1a1a",
  MEDIUM_GRAY: "#374151",
  LIGHT_GRAY: "#6b7280",
} as const;

// Animation Constants
export const ANIMATIONS = {
  DURATION: {
    FAST: "200ms",
    NORMAL: "300ms",
    SLOW: "500ms",
  },
  EASING: {
    EASE_IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",
    EASE_OUT: "cubic-bezier(0, 0, 0.2, 1)",
  },
} as const;

// Layout Constants
export const LAYOUT = {
  MAX_WIDTH: "max-w-7xl",
  CONTAINER_PADDING: "px-4 sm:px-6 lg:px-8",
  SECTION_PADDING: "py-20",
  HERO_HEIGHT: "h-screen",
} as const;

// Image Constants
export const IMAGES = {
  LOGO: "/images/praman-logo.jpeg",
  FALLBACK: "/images/praman-logo.jpeg",
  PATTERN:
    "data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
} as const;

// Service Categories
export const SERVICE_CATEGORIES = {
  HERITAGE: "heritage",
  EQUIPMENT: "equipment",
  ANALYSIS: "analysis",
  PROCESS: "process",
  MODELING: "modeling",
  VISUALIZATION: "visualization",
} as const;

// Category Labels
export const CATEGORY_LABELS = {
  all: "All Projects",
  heritage: "Heritage Conservation",
  equipment: "Equipment & Technology",
  analysis: "Data Analysis",
  process: "Documentation Process",
  modeling: "3D Modeling",
  visualization: "3D Visualization",
} as const;

// Common Benefits
export const COMMON_BENEFITS = [
  "Heritage conservation expertise",
  "Advanced 3D scanning technology",
  "Precision documentation",
  "Global project experience",
  "Fast turnaround with quality control",
  "Non-destructive data capture methods",
] as const;

// Navigation Routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  GALLERY: "/gallery",
  CONTACT: "/contact",
  SERVICES: {
    LASER_SCANNING: "/services/3d-laser-scanning",
    LIDAR_PROCESSING: "/services/lidar-processing",
    CAD_MODELING: "/services/3d-cad-modelling",
    BIM_MODELING: "/services/3d-bim-modelling",
    PLANT_MODELING: "/services/plant-modelling",
    VR_AR: "/services/vr-ar",
    HERITAGE_CONSERVATION: "/services/heritage-conservation",
  },
} as const;
