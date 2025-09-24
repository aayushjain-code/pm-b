import {
  Target,
  Globe,
  Building,
  Zap,
  Shield,
  Clock,
  Layers,
  Eye,
  Cpu,
  Wrench,
  Leaf,
} from "lucide-react";

export interface ServiceConfig {
  title: string;
  subtitle: string;
  description: string;
  backgroundGradient: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  benefits: string[];
  cardTitle: string;
  icon: React.ComponentType<{ className?: string }>;
  applications: Array<{
    title: string;
    description: string;
  }>;
  deliverables: string[];
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  whyChooseUs: Array<{
    title: string;
    description: string;
  }>;
  industries: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtons: Array<{
    text: string;
    href: string;
    variant: "primary" | "secondary" | "outline";
  }>;
}

export const serviceConfigs: Record<string, ServiceConfig> = {
  "3d-laser-scanning": {
    title: "3D Laser Scanning",
    subtitle: "3D Laser Scanning",
    description:
      "Clear, Accurate, Non-Destructive Measurement with millimetre precision. Capture the exact geometry of real-world objects, buildings and sites using advanced laser technology.",
    backgroundGradient:
      "linear-gradient(to bottom right, #1e40af, #1d4ed8, #2563eb)",
    primaryButtonText: "Get Free Quote",
    primaryButtonHref: "/contact",
    secondaryButtonText: "View Our Work",
    secondaryButtonHref: "/gallery",
    benefits: [
      "Millimeter-level accuracy and precision",
      "Non-destructive data capture methods",
      "Fast field data collection",
      "Heritage conservation expertise",
      "BIM-ready deliverables",
      "Global project experience",
    ],
    cardTitle: "Why Choose Our 3D Scanning?",
    icon: Target,
    applications: [
      {
        title: "Architecture & Restoration",
        description:
          "Accurate as-built documentation for renovation and conservation projects.",
      },
      {
        title: "Heritage & Archaeology",
        description:
          "Non-invasive capture of monuments, sculptures and historic buildings.",
      },
      {
        title: "Construction & BIM",
        description:
          "Precise site surveys and progress monitoring with seamless BIM integration.",
      },
      {
        title: "Industrial Plants & Equipment",
        description:
          "Reverse engineering, piping/layout verification, and retrofits.",
      },
      {
        title: "Bridges & Infrastructure",
        description:
          "Detailed surveys for maintenance, strengthening and expansion.",
      },
      {
        title: "Civil Engineering",
        description:
          "Topographic surveys, earthworks and accurate volume calculations.",
      },
    ],
    deliverables: [
      "High-density point clouds (standard formats)",
      "Registered site scans and panoramic imagery",
      "Accurate as-built 2D plans and elevations",
      "BIM-ready models and CAD deliverables (LOD as required)",
      "Precise measurements and coordinate reports",
      "Visualizations and walkthroughs for stakeholder review",
    ],
    processSteps: [
      {
        step: 1,
        title: "Plan the scan",
        description: "Define the area, targets and required accuracy",
      },
      {
        step: 2,
        title: "Capture data",
        description:
          "Set up scanners and capture the site from multiple positions",
      },
      {
        step: 3,
        title: "Register point clouds",
        description: "Align scans into a single, coherent 3D dataset",
      },
      {
        step: 4,
        title: "Process & clean",
        description:
          "Remove noise, fill gaps, and convert data into usable forms",
      },
      {
        step: 5,
        title: "Deliverables",
        description:
          "Provide point clouds, drawings, BIM/CAD models, measurements and panoramic images",
      },
    ],
    whyChooseUs: [
      {
        title: "Field-to-finish solutions",
        description:
          "From scanning in the field to finished BIM and CAD deliverables",
      },
      {
        title: "Consistent accuracy",
        description:
          "Our scanned data typically achieves an accuracy of 2–4 mm",
      },
      {
        title: "Flexible capture methods",
        description: "Tripod-mounted, handheld and mobile mapping options",
      },
      {
        title: "Faster turnarounds",
        description: "High-density scanners capture more data in less time",
      },
      {
        title: "Global experience",
        description:
          "Operations in India and Australia, with workflows aligned to international standards",
      },
      {
        title: "Quality and reliability",
        description:
          "Trained engineers, strict QA processes and robust data handling",
      },
    ],
    industries: [
      "Architecture, heritage conservation, construction",
      "Oil & gas, petrochemical, mining",
      "Infrastructure, bridge engineering",
      "Manufacturing and facilities management",
    ],
    ctaTitle: "Ready to Get Started?",
    ctaDescription:
      "If you want accurate, fast and non-invasive site capture that integrates with your CAD/BIM workflows, we're ready to help. Request a site assessment or sample deliverable to see how 3D laser scanning can reduce risk, save time and improve outcomes for your project.",
    ctaButtons: [
      { text: "Request a Quote", href: "/contact", variant: "primary" },
      { text: "Schedule a Demo Scan", href: "/contact", variant: "secondary" },
      {
        text: "Ask for Sample Point Cloud",
        href: "/contact",
        variant: "outline",
      },
    ],
  },
  "lidar-processing": {
    title: "LiDAR Data Processing",
    subtitle: "LiDAR Processing",
    description:
      "High-quality point cloud processing for infrastructure, forestry, and urban planning. Transform raw LiDAR data into actionable insights with our advanced processing capabilities.",
    backgroundGradient:
      "linear-gradient(to bottom right, #059669, #10b981, #34d399)",
    primaryButtonText: "Get Free Quote",
    primaryButtonHref: "/contact",
    secondaryButtonText: "View Our Work",
    secondaryButtonHref: "/gallery",
    benefits: [
      "Advanced point cloud processing algorithms",
      "Automated feature extraction and classification",
      "High-resolution terrain modeling",
      "Forestry and vegetation analysis",
      "Urban planning and infrastructure mapping",
      "Custom processing workflows",
    ],
    cardTitle: "Why Choose Our LiDAR Processing?",
    icon: Globe,
    applications: [
      {
        title: "Forestry & Vegetation",
        description:
          "Tree height analysis, canopy density mapping, and forest inventory management.",
      },
      {
        title: "Urban Planning",
        description:
          "3D city modeling, building footprint extraction, and infrastructure mapping.",
      },
      {
        title: "Topographic Mapping",
        description:
          "High-resolution DEM generation and terrain analysis for engineering projects.",
      },
      {
        title: "Flood Modeling",
        description:
          "Precise elevation data for hydrological modeling and flood risk assessment.",
      },
      {
        title: "Mining & Quarrying",
        description:
          "Volume calculations, stockpile monitoring, and mine planning optimization.",
      },
      {
        title: "Environmental Monitoring",
        description:
          "Change detection, erosion analysis, and environmental impact assessment.",
      },
    ],
    deliverables: [
      "Classified point clouds (ground, vegetation, buildings)",
      "High-resolution digital elevation models (DEMs)",
      "3D building models and footprints",
      "Vegetation height and density maps",
      "Terrain analysis and slope maps",
      "Custom GIS datasets and reports",
    ],
    processSteps: [
      {
        step: 1,
        title: "Data Quality Assessment",
        description: "Evaluate point cloud quality, density, and coverage",
      },
      {
        step: 2,
        title: "Pre-processing",
        description: "Noise removal, filtering, and initial data cleaning",
      },
      {
        step: 3,
        title: "Classification",
        description: "Automated and manual point cloud classification",
      },
      {
        step: 4,
        title: "Feature Extraction",
        description: "Extract buildings, vegetation, and terrain features",
      },
      {
        step: 5,
        title: "Analysis & Modeling",
        description: "Generate DEMs, 3D models, and analytical products",
      },
    ],
    whyChooseUs: [
      {
        title: "Advanced Algorithms",
        description:
          "State-of-the-art processing algorithms for maximum accuracy",
      },
      {
        title: "Custom Workflows",
        description:
          "Tailored processing workflows for specific project requirements",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous QA processes ensure data accuracy and completeness",
      },
      {
        title: "Scalable Processing",
        description:
          "Handle large datasets efficiently with cloud-based processing",
      },
      {
        title: "Expert Team",
        description:
          "Experienced geospatial professionals with deep LiDAR expertise",
      },
      {
        title: "Fast Turnaround",
        description:
          "Optimized processing pipelines for quick project delivery",
      },
    ],
    industries: [
      "Forestry and environmental management",
      "Urban planning and development",
      "Mining and natural resources",
      "Infrastructure and transportation",
    ],
    ctaTitle: "Ready to Process Your LiDAR Data?",
    ctaDescription:
      "Transform your raw LiDAR data into actionable insights with our advanced processing capabilities. Get accurate, detailed results that support your project goals.",
    ctaButtons: [
      {
        text: "Request Processing Quote",
        href: "/contact",
        variant: "primary",
      },
      { text: "View Sample Results", href: "/gallery", variant: "secondary" },
      { text: "Discuss Your Project", href: "/contact", variant: "outline" },
    ],
  },
  "3d-cad-modelling": {
    title: "3D CAD Modelling",
    subtitle: "3D CAD Modelling",
    description:
      "Intelligent 3D models and Building Information Modelling for construction workflows. Create accurate, detailed CAD models from point cloud data for seamless integration into your design process.",
    backgroundGradient:
      "linear-gradient(to bottom right, #7c3aed, #8b5cf6, #a78bfa)",
    primaryButtonText: "Get Free Quote",
    primaryButtonHref: "/contact",
    secondaryButtonText: "View Our Work",
    secondaryButtonHref: "/gallery",
    benefits: [
      "Point cloud to CAD conversion",
      "Intelligent 3D modeling",
      "BIM integration and compatibility",
      "Parametric modeling capabilities",
      "Multi-format export options",
      "Quality assurance and validation",
    ],
    cardTitle: "Why Choose Our CAD Modelling?",
    icon: Building,
    applications: [
      {
        title: "Architectural Documentation",
        description:
          "As-built drawings, floor plans, and architectural documentation from point clouds.",
      },
      {
        title: "Structural Engineering",
        description:
          "Structural analysis models, beam layouts, and load calculations.",
      },
      {
        title: "MEP Design",
        description:
          "Mechanical, electrical, and plumbing system modeling and coordination.",
      },
      {
        title: "Heritage Documentation",
        description:
          "Detailed documentation of historic structures for conservation planning.",
      },
      {
        title: "Industrial Design",
        description:
          "Equipment layouts, piping systems, and process flow modeling.",
      },
      {
        title: "Facility Management",
        description:
          "Space planning, asset management, and maintenance documentation.",
      },
    ],
    deliverables: [
      "3D CAD models (AutoCAD, Revit, SolidWorks)",
      "2D drawings and plans",
      "BIM models with LOD specifications",
      "Parametric models for design iteration",
      "Multi-format exports (DWG, RVT, IFC, etc.)",
      "Model validation and quality reports",
    ],
    processSteps: [
      {
        step: 1,
        title: "Point Cloud Analysis",
        description: "Analyze point cloud data and identify key features",
      },
      {
        step: 2,
        title: "Model Planning",
        description: "Plan modeling approach and define LOD requirements",
      },
      {
        step: 3,
        title: "3D Modeling",
        description: "Create accurate 3D models using CAD software",
      },
      {
        step: 4,
        title: "Quality Control",
        description: "Validate model accuracy against point cloud data",
      },
      {
        step: 5,
        title: "Delivery",
        description:
          "Export models in required formats and provide documentation",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Modelers",
        description:
          "Experienced CAD professionals with deep industry knowledge",
      },
      {
        title: "Advanced Software",
        description: "Latest CAD and BIM software for maximum compatibility",
      },
      {
        title: "Quality Focus",
        description:
          "Rigorous quality control ensures model accuracy and completeness",
      },
      {
        title: "Flexible LOD",
        description:
          "Models delivered at appropriate Level of Detail for your needs",
      },
      {
        title: "Multi-format Support",
        description: "Export models in any format your team requires",
      },
      {
        title: "Fast Turnaround",
        description: "Efficient workflows ensure quick project delivery",
      },
    ],
    industries: [
      "Architecture and construction",
      "Engineering and infrastructure",
      "Manufacturing and industrial",
      "Heritage and conservation",
    ],
    ctaTitle: "Ready to Create Your 3D Models?",
    ctaDescription:
      "Transform your point cloud data into intelligent 3D models that integrate seamlessly with your design workflow. Get accurate, detailed CAD models that support your project goals.",
    ctaButtons: [
      { text: "Request Modeling Quote", href: "/contact", variant: "primary" },
      { text: "View Sample Models", href: "/gallery", variant: "secondary" },
      {
        text: "Discuss Your Requirements",
        href: "/contact",
        variant: "outline",
      },
    ],
  },
  "heritage-conservation": {
    title: "Heritage Conservation",
    subtitle: "Heritage Conservation",
    description:
      "Digital documentation and conservation planning for cultural heritage sites. Preserve and protect our cultural legacy with non-invasive 3D documentation and analysis.",
    backgroundGradient:
      "linear-gradient(to bottom right, #dc2626, #ef4444, #f87171)",
    primaryButtonText: "Get Free Quote",
    primaryButtonHref: "/contact",
    secondaryButtonText: "View Our Work",
    secondaryButtonHref: "/gallery",
    benefits: [
      "Non-invasive documentation methods",
      "Cultural sensitivity and expertise",
      "Detailed condition assessment",
      "Conservation planning support",
      "Digital archiving and preservation",
      "International standards compliance",
    ],
    cardTitle: "Why Choose Our Heritage Conservation?",
    icon: Shield,
    applications: [
      {
        title: "Historic Monuments",
        description:
          "Documentation of temples, palaces, and historic monuments for conservation planning.",
      },
      {
        title: "Archaeological Sites",
        description:
          "3D documentation of archaeological sites and artifacts for research and preservation.",
      },
      {
        title: "Museums & Collections",
        description:
          "Digital documentation of museum artifacts and collections for cataloging and research.",
      },
      {
        title: "Cultural Landscapes",
        description:
          "Documentation of cultural landscapes and heritage precincts for management planning.",
      },
      {
        title: "Religious Sites",
        description:
          "Sensitive documentation of religious and sacred sites with cultural respect.",
      },
      {
        title: "World Heritage Sites",
        description:
          "Comprehensive documentation for UNESCO World Heritage Site management.",
      },
    ],
    deliverables: [
      "High-resolution 3D models",
      "Condition assessment reports",
      "Conservation planning documents",
      "Digital archives and databases",
      "Interactive 3D presentations",
      "Research and analysis reports",
    ],
    processSteps: [
      {
        step: 1,
        title: "Site Assessment",
        description: "Evaluate site conditions and plan documentation approach",
      },
      {
        step: 2,
        title: "Cultural Consultation",
        description: "Engage with local communities and cultural experts",
      },
      {
        step: 3,
        title: "3D Documentation",
        description: "Capture detailed 3D data using non-invasive methods",
      },
      {
        step: 4,
        title: "Analysis & Assessment",
        description:
          "Analyze data for condition assessment and conservation needs",
      },
      {
        step: 5,
        title: "Conservation Planning",
        description: "Develop conservation strategies and management plans",
      },
    ],
    whyChooseUs: [
      {
        title: "Cultural Expertise",
        description:
          "Deep understanding of cultural heritage and conservation principles",
      },
      {
        title: "Non-invasive Methods",
        description:
          "Advanced 3D scanning that preserves fragile heritage sites",
      },
      {
        title: "International Standards",
        description: "Compliance with UNESCO and ICOMOS guidelines",
      },
      {
        title: "Community Engagement",
        description:
          "Collaborative approach with local communities and stakeholders",
      },
      {
        title: "Research Focus",
        description: "Support academic research and scholarly documentation",
      },
      {
        title: "Long-term Preservation",
        description:
          "Digital archiving ensures long-term preservation of cultural heritage",
      },
    ],
    industries: [
      "Cultural heritage and museums",
      "Archaeology and research",
      "Tourism and cultural tourism",
      "Education and academia",
    ],
    ctaTitle: "Ready to Preserve Cultural Heritage?",
    ctaDescription:
      "Join us in preserving our cultural legacy through advanced 3D documentation and conservation planning. Protect and share our heritage for future generations.",
    ctaButtons: [
      {
        text: "Discuss Your Heritage Project",
        href: "/contact",
        variant: "primary",
      },
      {
        text: "View Heritage Projects",
        href: "/gallery",
        variant: "secondary",
      },
      { text: "Learn About Our Methods", href: "/about", variant: "outline" },
    ],
  },
  "vr-ar": {
    title: "VR & AR Services",
    subtitle: "VR & AR Services",
    description:
      "Immersive virtual and augmented reality experiences for visualization, training, and presentation. Bring your 3D data to life with cutting-edge VR and AR technology.",
    backgroundGradient:
      "linear-gradient(to bottom right, #8b5cf6, #a855f7, #c084fc)",
    primaryButtonText: "Get Free Quote",
    primaryButtonHref: "/contact",
    secondaryButtonText: "View Our Work",
    secondaryButtonHref: "/gallery",
    benefits: [
      "Immersive 3D visualization",
      "Interactive virtual tours",
      "AR overlay applications",
      "Training and simulation",
      "Client presentation tools",
      "Multi-platform compatibility",
    ],
    cardTitle: "Why Choose Our VR & AR Services?",
    icon: Eye,
    applications: [
      {
        title: "Virtual Site Tours",
        description:
          "Immersive virtual tours of construction sites, heritage sites, and facilities.",
      },
      {
        title: "Design Visualization",
        description:
          "Interactive 3D visualization of architectural and engineering designs.",
      },
      {
        title: "Training Simulations",
        description:
          "VR training environments for safety, operations, and maintenance procedures.",
      },
      {
        title: "Client Presentations",
        description:
          "Engaging presentations that help clients visualize project outcomes.",
      },
      {
        title: "Heritage Experiences",
        description:
          "Virtual reconstruction and exploration of historic sites and monuments.",
      },
      {
        title: "Maintenance Support",
        description:
          "AR applications for equipment maintenance and facility management.",
      },
    ],
    deliverables: [
      "VR applications (Oculus, HTC Vive, etc.)",
      "AR mobile applications",
      "Web-based 3D viewers",
      "Interactive presentations",
      "Training modules and simulations",
      "Multi-platform deployment",
    ],
    processSteps: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Understand project goals and target platforms",
      },
      {
        step: 2,
        title: "3D Asset Preparation",
        description: "Optimize 3D models for VR/AR performance",
      },
      {
        step: 3,
        title: "Application Development",
        description: "Develop VR/AR applications using industry-standard tools",
      },
      {
        step: 4,
        title: "Testing & Optimization",
        description: "Test across platforms and optimize performance",
      },
      {
        step: 5,
        title: "Deployment & Training",
        description: "Deploy applications and provide user training",
      },
    ],
    whyChooseUs: [
      {
        title: "Cutting-edge Technology",
        description: "Latest VR/AR hardware and software for maximum impact",
      },
      {
        title: "Cross-platform Development",
        description: "Applications that work across multiple VR/AR platforms",
      },
      {
        title: "User Experience Focus",
        description:
          "Intuitive interfaces designed for optimal user experience",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimized applications that run smoothly on target devices",
      },
      {
        title: "Custom Solutions",
        description:
          "Tailored VR/AR solutions for specific project requirements",
      },
      {
        title: "Ongoing Support",
        description: "Continuous support and updates for deployed applications",
      },
    ],
    industries: [
      "Architecture and construction",
      "Heritage and cultural sites",
      "Training and education",
      "Entertainment and media",
    ],
    ctaTitle: "Ready to Create Immersive Experiences?",
    ctaDescription:
      "Transform your 3D data into engaging VR and AR experiences that captivate audiences and enhance understanding. Bring your projects to life with immersive technology.",
    ctaButtons: [
      {
        text: "Discuss Your VR/AR Project",
        href: "/contact",
        variant: "primary",
      },
      { text: "View VR/AR Examples", href: "/gallery", variant: "secondary" },
      { text: "Schedule a Demo", href: "/contact", variant: "outline" },
    ],
  },
  "plant-modelling": {
    title: "Plant Modelling",
    subtitle: "Plant Modelling",
    description:
      "Comprehensive 3D modeling of industrial plants, facilities, and equipment. Create accurate as-built models for operations, maintenance, and expansion planning.",
    backgroundGradient:
      "linear-gradient(to bottom right, #f59e0b, #f97316, #fb923c)",
    primaryButtonText: "Get Free Quote",
    primaryButtonHref: "/contact",
    secondaryButtonText: "View Our Work",
    secondaryButtonHref: "/gallery",
    benefits: [
      "Accurate as-built plant models",
      "Equipment and piping documentation",
      "Maintenance and operations support",
      "Expansion and retrofit planning",
      "Safety and compliance documentation",
      "Integration with plant management systems",
    ],
    cardTitle: "Why Choose Our Plant Modelling?",
    icon: Wrench,
    applications: [
      {
        title: "Oil & Gas Facilities",
        description:
          "Comprehensive modeling of refineries, petrochemical plants, and processing facilities.",
      },
      {
        title: "Power Plants",
        description:
          "Detailed modeling of power generation facilities and electrical infrastructure.",
      },
      {
        title: "Manufacturing Plants",
        description:
          "3D models of manufacturing facilities, production lines, and equipment layouts.",
      },
      {
        title: "Mining Operations",
        description:
          "Modeling of mining facilities, processing plants, and material handling systems.",
      },
      {
        title: "Chemical Plants",
        description:
          "Detailed documentation of chemical processing facilities and safety systems.",
      },
      {
        title: "Water Treatment",
        description:
          "Modeling of water treatment plants, pumping stations, and distribution systems.",
      },
    ],
    deliverables: [
      "3D plant models (PDMS, E3D, etc.)",
      "Equipment and piping documentation",
      "Isometric and orthographic drawings",
      "Maintenance and inspection guides",
      "Safety and emergency response plans",
      "Integration with plant management systems",
    ],
    processSteps: [
      {
        step: 1,
        title: "Site Survey",
        description:
          "Comprehensive 3D scanning of plant facilities and equipment",
      },
      {
        step: 2,
        title: "Data Processing",
        description: "Process point cloud data and identify plant components",
      },
      {
        step: 3,
        title: "3D Modeling",
        description:
          "Create accurate 3D models of plant structures and equipment",
      },
      {
        step: 4,
        title: "Documentation",
        description:
          "Generate drawings, reports, and maintenance documentation",
      },
      {
        step: 5,
        title: "Integration",
        description:
          "Integrate models with plant management and maintenance systems",
      },
    ],
    whyChooseUs: [
      {
        title: "Industrial Expertise",
        description:
          "Deep understanding of industrial processes and plant operations",
      },
      {
        title: "Safety Focus",
        description:
          "Models designed to support safety and compliance requirements",
      },
      {
        title: "Maintenance Support",
        description: "Models optimized for maintenance planning and operations",
      },
      {
        title: "Scalable Solutions",
        description: "Models that can grow with your plant expansion needs",
      },
      {
        title: "Integration Capability",
        description:
          "Seamless integration with existing plant management systems",
      },
      {
        title: "Global Standards",
        description:
          "Compliance with international industrial standards and practices",
      },
    ],
    industries: [
      "Oil & gas and petrochemical",
      "Power generation and utilities",
      "Manufacturing and industrial",
      "Mining and natural resources",
    ],
    ctaTitle: "Ready to Model Your Plant?",
    ctaDescription:
      "Transform your industrial facility into a comprehensive 3D model that supports operations, maintenance, and expansion planning. Get accurate, detailed plant models that enhance efficiency and safety.",
    ctaButtons: [
      {
        text: "Request Plant Modeling Quote",
        href: "/contact",
        variant: "primary",
      },
      { text: "View Plant Models", href: "/gallery", variant: "secondary" },
      { text: "Discuss Your Facility", href: "/contact", variant: "outline" },
    ],
  },
};


