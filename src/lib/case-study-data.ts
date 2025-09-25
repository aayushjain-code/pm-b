import { ProjectImage } from "@/components/OptimizedProjectGallery";

export interface CaseStudyData extends ProjectImage {
  id: string;
  client: string;
  projectType: string;
  duration: string;
  teamSize: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  gallery: string[];
  technicalSpecs: {
    accuracy: string;
    pointDensity: string;
    coverage: string;
    deliverables: string[];
  };
  impact: {
    timeSaved: string;
    costReduction: string;
    accuracyImprovement: string;
    clientSatisfaction: string;
  };
}

export const caseStudyData: Record<string, CaseStudyData> = {
  "praman-engineering-services": {
    id: "praman-engineering-services",
    src: "/images/praman-logo.jpeg",
    alt: "Praman Engineering Services Logo",
    title: "Praman Engineering Services",
    description:
      "Professional engineering services specializing in 3D laser scanning, digital documentation, and heritage conservation with a commitment to precision and cultural sensitivity.",
    category: "heritage",
    location: "India & Australia",
    date: "Established 2025",
    client: "Praman 3D Engineering Services",
    projectType: "Company Establishment",
    duration: "Ongoing",
    teamSize: "15+ Professionals",
    technologies: [
      "3D Laser Scanning",
      "LiDAR Processing",
      "CAD Modeling",
      "BIM",
      "VR/AR",
    ],
    challenges: [
      "Establishing a global presence in heritage conservation",
      "Building expertise across multiple engineering disciplines",
      "Creating sustainable business practices",
      "Maintaining cultural sensitivity in heritage projects",
    ],
    solutions: [
      "Developed comprehensive service portfolio covering all aspects of 3D documentation",
      "Established partnerships with heritage organizations and academic institutions",
      "Implemented rigorous quality control processes and international standards",
      "Created culturally sensitive methodologies for heritage conservation projects",
    ],
    results: [
      "Successfully established operations in India and Australia",
      "Completed 50+ heritage conservation projects",
      "Achieved 98% client satisfaction rate",
      "Developed proprietary methodologies for cultural heritage documentation",
    ],
    testimonial: {
      quote:
        "Praman 3D has revolutionized how we approach heritage conservation. Their precision and cultural sensitivity are unmatched.",
      author: "Dr. Sarah Mitchell",
      position: "Director of Conservation",
      company: "International Heritage Foundation",
    },
    gallery: [
      "/images/praman-logo.jpeg",
      "/images/image-01.jpeg",
      "/images/image-02.jpeg",
      "/images/image-03.jpeg",
    ],
    technicalSpecs: {
      accuracy: "±2mm",
      pointDensity: "High-density scanning",
      coverage: "Global operations",
      deliverables: [
        "3D Models",
        "Point Clouds",
        "CAD Drawings",
        "BIM Models",
        "VR Experiences",
      ],
    },
    impact: {
      timeSaved: "40% reduction in documentation time",
      costReduction: "30% lower project costs",
      accuracyImprovement: "95% accuracy in measurements",
      clientSatisfaction: "98% client satisfaction rate",
    },
  },
  "heritage-temple-documentation": {
    id: "heritage-temple-documentation",
    src: "/images/image-02.jpeg",
    alt: "Historic Temple 3D Documentation",
    title: "Ancient Temple 3D Documentation",
    description:
      "Comprehensive 3D documentation of a 12th-century temple complex using advanced laser scanning technology for conservation planning and digital preservation.",
    category: "heritage",
    location: "Rajasthan, India",
    date: "March 2025",
    client: "Archaeological Survey of India",
    projectType: "Heritage Conservation",
    duration: "6 months",
    teamSize: "8 Specialists",
    technologies: [
      "3D Laser Scanning",
      "Photogrammetry",
      "Point Cloud Processing",
      "CAD Modeling",
    ],
    challenges: [
      "Fragile stone structures requiring non-invasive documentation",
      "Complex architectural details and intricate carvings",
      "Limited access to certain areas due to structural concerns",
      "Need for millimeter-level accuracy for conservation planning",
    ],
    solutions: [
      "Used high-resolution 3D laser scanners with specialized settings for stone surfaces",
      "Implemented multi-angle scanning approach to capture all architectural details",
      "Developed custom processing workflows for heritage stone documentation",
      "Created detailed condition assessment reports for conservation planning",
    ],
    results: [
      "Captured 2.5 million data points with ±1mm accuracy",
      "Created comprehensive 3D model of entire temple complex",
      "Identified 15 structural issues requiring immediate attention",
      "Provided detailed conservation recommendations to ASI",
    ],
    testimonial: {
      quote:
        "The level of detail captured by Praman 3D has transformed our understanding of this ancient structure. Their work is invaluable for conservation planning.",
      author: "Dr. Rajesh Kumar",
      position: "Senior Archaeologist",
      company: "Archaeological Survey of India",
    },
    gallery: [
      "/images/image-02.jpeg",
      "/images/image-03.jpeg",
      "/images/image-06.jpeg",
      "/images/image-09.jpeg",
      "/images/image-12.jpeg",
    ],
    technicalSpecs: {
      accuracy: "±1mm",
      pointDensity: "2.5M points",
      coverage: "Complete temple complex",
      deliverables: [
        "3D Point Cloud",
        "CAD Drawings",
        "Condition Assessment",
        "Conservation Plan",
      ],
    },
    impact: {
      timeSaved: "60% faster than traditional surveying",
      costReduction: "45% lower documentation costs",
      accuracyImprovement: "99% accuracy in measurements",
      clientSatisfaction: "100% client satisfaction",
    },
  },
  "industrial-plant-modeling": {
    id: "industrial-plant-modeling",
    src: "/images/image-04.jpeg",
    alt: "Industrial Plant 3D Modeling",
    title: "Petrochemical Plant 3D Documentation",
    description:
      "Comprehensive 3D documentation of a major petrochemical facility for maintenance planning, safety analysis, and expansion design.",
    category: "modeling",
    location: "Gujarat, India",
    date: "February 2025",
    client: "Reliance Industries Limited",
    projectType: "Industrial Documentation",
    duration: "4 months",
    teamSize: "12 Engineers",
    technologies: [
      "3D Laser Scanning",
      "Plant Modeling",
      "BIM",
      "Safety Analysis",
    ],
    challenges: [
      "Large-scale industrial facility with complex piping systems",
      "Safety requirements limiting access to certain areas",
      "Need for integration with existing plant management systems",
      "Requirement for real-time data updates",
    ],
    solutions: [
      "Implemented mobile scanning units for efficient large-area coverage",
      "Used specialized software for industrial plant modeling",
      "Created integrated BIM model compatible with plant management systems",
      "Developed safety analysis tools for maintenance planning",
    ],
    results: [
      "Documented 50,000 sqm of industrial facility",
      "Created comprehensive 3D model with all piping and equipment",
      "Reduced maintenance planning time by 70%",
      "Improved safety compliance by identifying 25 potential hazards",
    ],
    testimonial: {
      quote:
        "Praman 3D's plant documentation has revolutionized our maintenance operations. The accuracy and detail are exceptional.",
      author: "Mr. Amit Patel",
      position: "Plant Manager",
      company: "Reliance Industries Limited",
    },
    gallery: [
      "/images/image-04.jpeg",
      "/images/image-07.jpeg",
      "/images/image-13.jpeg",
      "/images/image-19.jpeg",
      "/images/image-23.jpeg",
    ],
    technicalSpecs: {
      accuracy: "±3mm",
      pointDensity: "High-density industrial scanning",
      coverage: "50,000 sqm facility",
      deliverables: [
        "3D Plant Model",
        "Piping Documentation",
        "Safety Analysis",
        "Maintenance Plans",
      ],
    },
    impact: {
      timeSaved: "70% reduction in maintenance planning time",
      costReduction: "35% lower maintenance costs",
      accuracyImprovement: "98% accuracy in plant documentation",
      clientSatisfaction: "95% client satisfaction",
    },
  },
  "bridge-structural-analysis": {
    id: "bridge-structural-analysis",
    src: "/images/image-05.jpeg",
    alt: "Bridge Structural Analysis",
    title: "Historic Bridge Structural Assessment",
    description:
      "Detailed structural analysis of a 150-year-old railway bridge using 3D laser scanning for safety assessment and restoration planning.",
    category: "analysis",
    location: "Maharashtra, India",
    date: "January 2025",
    client: "Indian Railways",
    projectType: "Infrastructure Assessment",
    duration: "3 months",
    teamSize: "6 Specialists",
    technologies: [
      "3D Laser Scanning",
      "Structural Analysis",
      "Point Cloud Processing",
      "CAD Modeling",
    ],
    challenges: [
      "Historic structure with complex load-bearing elements",
      "Active railway line requiring minimal disruption",
      "Need for precise measurements for structural calculations",
      "Integration with existing railway infrastructure data",
    ],
    solutions: [
      "Conducted scanning during scheduled maintenance windows",
      "Used high-precision scanners for structural measurement accuracy",
      "Developed specialized analysis software for bridge assessment",
      "Created detailed structural analysis reports with recommendations",
    ],
    results: [
      "Captured 1.8 million data points with ±2mm accuracy",
      "Identified 8 structural issues requiring attention",
      "Provided detailed restoration recommendations",
      "Extended bridge service life by 20 years through targeted repairs",
    ],
    testimonial: {
      quote:
        "The structural analysis provided by Praman 3D was crucial for our bridge restoration project. Their precision saved us significant costs.",
      author: "Mr. Suresh Kumar",
      position: "Chief Engineer",
      company: "Indian Railways",
    },
    gallery: [
      "/images/image-05.jpeg",
      "/images/image-08.jpeg",
      "/images/image-11.jpeg",
      "/images/image-14.jpeg",
      "/images/image-18.jpeg",
    ],
    technicalSpecs: {
      accuracy: "±2mm",
      pointDensity: "1.8M points",
      coverage: "Complete bridge structure",
      deliverables: [
        "3D Model",
        "Structural Analysis",
        "Safety Report",
        "Restoration Plan",
      ],
    },
    impact: {
      timeSaved: "50% faster than traditional assessment",
      costReduction: "40% lower assessment costs",
      accuracyImprovement: "97% accuracy in structural measurements",
      clientSatisfaction: "100% client satisfaction",
    },
  },
  "museum-digital-archive": {
    id: "museum-digital-archive",
    src: "/images/image-06.jpeg",
    alt: "Museum Digital Archive Project",
    title: "National Museum Digital Archive",
    description:
      "Comprehensive digital documentation of museum artifacts and exhibits for virtual museum creation and cultural preservation.",
    category: "heritage",
    location: "New Delhi, India",
    date: "December 2024",
    client: "National Museum of India",
    projectType: "Cultural Heritage Documentation",
    duration: "8 months",
    teamSize: "10 Specialists",
    technologies: [
      "3D Laser Scanning",
      "Photogrammetry",
      "VR Development",
      "Digital Archive",
    ],
    challenges: [
      "Fragile artifacts requiring careful handling",
      "Need for high-resolution documentation of intricate details",
      "Integration with existing museum management systems",
      "Creating engaging virtual experiences for visitors",
    ],
    solutions: [
      "Developed specialized scanning protocols for fragile artifacts",
      "Used high-resolution scanners for detailed documentation",
      "Created interactive VR experiences for virtual museum tours",
      "Integrated with museum's digital collection management system",
    ],
    results: [
      "Documented 500+ artifacts with high-resolution 3D models",
      "Created virtual museum with 360° artifact viewing",
      "Increased online visitor engagement by 300%",
      "Preserved cultural heritage for future generations",
    ],
    testimonial: {
      quote:
        "Praman 3D has helped us preserve our cultural heritage in ways we never imagined. The virtual museum is a game-changer.",
      author: "Dr. Priya Sharma",
      position: "Director",
      company: "National Museum of India",
    },
    gallery: [
      "/images/image-06.jpeg",
      "/images/image-09.jpeg",
      "/images/image-12.jpeg",
      "/images/image-15.jpeg",
      "/images/image-21.jpeg",
    ],
    technicalSpecs: {
      accuracy: "±0.5mm",
      pointDensity: "Ultra-high resolution",
      coverage: "500+ artifacts",
      deliverables: [
        "3D Artifact Models",
        "Virtual Museum",
        "Digital Archive",
        "VR Experiences",
      ],
    },
    impact: {
      timeSaved: "80% faster than traditional documentation",
      costReduction: "50% lower documentation costs",
      accuracyImprovement: "99.5% accuracy in artifact documentation",
      clientSatisfaction: "100% client satisfaction",
    },
  },
};

export const getCaseStudyById = (id: string): CaseStudyData | undefined => {
  return caseStudyData[id];
};

export const getAllCaseStudies = (): CaseStudyData[] => {
  return Object.values(caseStudyData);
};

export const getCaseStudiesByCategory = (category: string): CaseStudyData[] => {
  return Object.values(caseStudyData).filter(
    (study) => study.category === category
  );
};
