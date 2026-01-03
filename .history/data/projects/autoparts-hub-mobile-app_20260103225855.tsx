import { ProjectData } from '../types'

export const autoPartsHubProject: ProjectData = {
  id: 7,
  slug: "autoparts-hub-mobile-app",
  title: "AUTOPARTS HUB",
  subtitle: "SME MOBILE APPLICATION (UI/UX DESIGN)",
  description: "A comprehensive mobile application UI/UX solution designed to empower Sri Lankan automobile spare parts SMEs by improving digital presence and customer engagement.",
  fullDescription: "Designed as part of the Human–Computer Interaction (SE2082) assignment at SLIIT, AutoParts Hub is a mobile application UI/UX solution tailored for Sri Lankan automobile spare parts SMEs. The project focuses on applying HCI principles to solve real-world business challenges, including digital visibility, structured catalogs, and efficient customer communication.",
  detailedDescription: "The project involved a complete UI/UX design lifecycle, starting from user research and persona development to low-fidelity wireframing and high-fidelity interactive prototyping. By conducting interviews with shop owners and mechanics, the design addresses specific pain points like manual order management and poor digital presence. The final solution features a polished, thumb-friendly interface with advanced search, live chat support, and a seamless checkout flow, all while ensuring accessibility and inclusive design for users with varying digital literacy levels.",
  image: "/images/autoparts-high-fidelity.png",
  images: [
    "/images/autoparts-high-fidelity.png",
    "/images/autoparts-low-fidelity.png"
  ],
  technologies: ["Figma", "Mobile UI/UX Design", "HCI Principles", "User Research", "Wireframing", "Prototyping", "Usability Testing"],
  skills: ["UI/UX Design", "Human–Computer Interaction", "User Research", "Accessibility Design", "Mobile App Design", "SME-Focused Solutions", "Visual Hierarchy", "Interactive Prototyping"],
  keyFeatures: [
    "User-centric onboarding and secure authentication (Sign In/Up/Recovery)",
    "Home dashboard with featured products and category-based browsing",
    "Advanced search and filtering system for specific spare parts",
    "Detailed product pages with high-quality visuals and specifications",
    "Wishlist and Favorites management for quick access",
    "Streamlined cart and checkout flow optimized for mobile",
    "Real-time order tracking and notification system",
    "Integrated live chat for direct customer-to-shop communication",
    "Comprehensive profile and settings management",
    "Help and support section for enhanced user assistance"
  ],
  period: "2025",
  liveUrl: "https://www.figma.com/design/yvUJ1ye36c4lcS3VROYQc8/HCI-Assignment-1?node-id=0-1&p=f&t=uPmuiB0sKTelx6DN-0",
  githubUrl: "https://www.figma.com/design/yvUJ1ye36c4lcS3VROYQc8/HCI-Assignment-1?node-id=26-559&p=f&t=uPmuiB0sKTelx6DN-0",
  timeline: "Assignment Project",
  role: "UI/UX Designer",
  teamSize: "Individual Project",
  results: [
    { title: "User Research", icon: "users" },
    { title: "HCI Principles", icon: "brain" },
    { title: "Interactive Prototype", icon: "mouse-pointer" },
    { title: "Accessibility", icon: "accessibility" },
    { title: "SME Solution", icon: "briefcase" }
  ],
  caseStudy: {
    overview: "AutoParts Hub was designed to bridge the gap between traditional automobile spare parts SMEs in Sri Lanka and the digital marketplace. The project applied Human–Computer Interaction (HCI) principles to create a solution that is not only visually appealing but also highly functional and accessible for a diverse user base, including shop owners, mechanics, and vehicle owners.",
    problems: [
      "Difficulty managing online orders and customer inquiries",
      "Lack of digital visibility and structured product catalogs",
      "Poor customer communication and engagement",
      "Fragmented workflows for tracking deliveries and payments",
      "Usability barriers for users with limited digital literacy"
    ],
    problemsIntro: "Through user research and interviews, several critical challenges were identified for local SMEs:",
    problemsMotivation: "These challenges highlighted the need for a dedicated mobile solution that simplifies the end-to-end customer journey while supporting SME business goals.",
    solutions: {
      problem: [
        "Manual and disorganized order handling",
        "Inconsistent product information",
        "Slow communication channels",
        "Complex checkout processes",
        "Inaccessible design for non-tech users"
      ],
      solution: [
        "Automated order management and tracking system",
        "Structured category-based digital catalog",
        "Integrated live chat and notification system",
        "Thumb-friendly, streamlined checkout flow",
        "Inclusive design with high contrast and clear labels"
      ],
      impact: [
        "Improved operational efficiency for shop owners",
        "Enhanced product discovery and customer trust",
        "Faster response times and better engagement",
        "Reduced cart abandonment and higher conversion",
        "Better accessibility for all user segments"
      ]
    },
    technicalImplementation: {
      description: "The design process followed a user-centered approach, beginning with extensive research and persona development. Low-fidelity wireframes were created to establish the navigation hierarchy and screen structure, which were then iterated into a high-fidelity interactive prototype using Figma. The final design prioritizes visual hierarchy, thumb-friendly interactions, and accessibility compliance to ensure a seamless experience across all user touchpoints.",
      backend: [
        "User Research & Interviews",
        "Persona Development",
        "User Stories & Scenarios",
        "Competitive Analysis",
        "Information Architecture",
        "User Flow Mapping"
      ],
      frontend: [
        "Low-Fidelity Wireframing",
        "High-Fidelity Prototyping (Figma)",
        "Visual Branding & Typography",
        "Interactive Micro-interactions",
        "Accessibility Compliance (WCAG)",
        "Usability Testing & Iteration"
      ],
      tools: [
        "Figma for design and prototyping",
        "FigJam for user research and mapping",
        "Adobe Illustrator for custom icons",
        "Google Forms for user surveys",
        "Think-Aloud method for usability testing"
      ]
    }
  }
}
