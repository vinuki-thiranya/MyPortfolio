import { ProjectData } from '../types'

export const autoPartsHubProject: ProjectData = {
  id: 7,
  slug: "autoparts-hub-mobile-app",
  title: "AUTOPARTS HUB",
  subtitle: "SME MOBILE APPLICATION (UI/UX DESIGN)",
  description: "A comprehensive mobile application UI/UX solution designed to empower Sri Lankan automobile spare parts SMEs by improving digital presence, customer engagement, and operational efficiency.",
  fullDescription: "Designed a comprehensive mobile application UI/UX solution to empower a Sri Lankan automobile spare parts SME by improving digital presence, customer engagement, and operational efficiency. The application was designed by applying Human–Computer Interaction (HCI) principles, focusing on usability, accessibility, and real-world SME needs.",
  detailedDescription: "The app supports end-to-end customer journeys including product discovery, ordering, payments, communication, and account management, tailored for local SME business workflows. This project was completed as part of the Human–Computer Interaction (SE2082) course at SLIIT, focusing on applying theoretical HCI concepts to practical design solutions.",
  image: "/images/autoparts-high-fidelity.png",
  images: [
    "/images/autoparts-high-fidelity.png",
    "/images/autoparts-low-fidelity.png"
  ],
  technologies: ["Figma", "Mobile UI/UX Design", "HCI Principles", "User Research", "Wireframing", "Prototyping", "Usability Testing", "FigJam", "Adobe Illustrator"],
  skills: ["UI/UX Design", "Human–Computer Interaction", "User Research", "Accessibility Design", "Mobile App Design", "SME-Focused Solutions", "Visual Hierarchy", "Interactive Prototyping", "Usability Testing", "Wireframing", "Visual Design"],
  keyFeatures: [
    "Splash & onboarding screens with clear value proposition",
    "User authentication (Sign In / Sign Up / Password Recovery)",
    "Home dashboard with featured products and category-based browsing",
    "Advanced search and filtering system for specific spare parts",
    "Detailed product pages with high-quality visuals and specifications",
    "Wishlist and Favorites management for quick access",
    "Streamlined cart and checkout flow optimized for mobile",
    "Real-time order tracking and notification system",
    "Integrated live chat for direct customer-to-shop communication",
    "Comprehensive profile and settings management",
    "Help and support section for enhanced user assistance",
    "Payment integration flow for seamless transactions",
    "Order history and tracking for customer convenience"
  ],
  period: "2025",
  liveUrl: "https://www.figma.com/design/yvUJ1ye36c4lcS3VROYQc8/HCI-Assignment-1?node-id=0-1&p=f&t=uPmuiB0sKTelx6DN-0",
  githubUrl: "https://www.figma.com/design/yvUJ1ye36c4lcS3VROYQc8/HCI-Assignment-1?node-id=26-559&p=f&t=uPmuiB0sKTelx6DN-0",
  timeline: "Human–Computer Interaction (SE2082) – Assignment 01",
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
    overview: "AutoParts Hub was designed to bridge the gap between traditional automobile spare parts SMEs in Sri Lanka and the digital marketplace. The project applied Human–Computer Interaction (HCI) principles to create a solution that is not only visually appealing but also highly functional and accessible for a diverse user base, including shop owners, mechanics, and vehicle owners.\n\nThe design process followed a user-centered approach, beginning with extensive research and persona development. Low-fidelity wireframes were created to establish the navigation hierarchy and screen structure, which were then iterated into a high-fidelity interactive prototype using Figma. The final design prioritizes visual hierarchy, thumb-friendly interactions, and accessibility compliance to ensure a seamless experience across all user touchpoints.",
    problems: [
      "Difficulty managing online orders and customer inquiries",
      "Lack of digital visibility and structured product catalogs",
      "Poor customer communication and engagement",
      "Fragmented workflows for tracking deliveries and payments",
      "Usability barriers for users with limited digital literacy"
    ],
    problemsIntro: "Through user research and interviews with automobile spare parts shop owners, vehicle owners, and mechanics, several critical challenges were identified for local SMEs:",
    problemsMotivation: "These challenges highlighted the need for a dedicated mobile solution that simplifies the end-to-end customer journey while supporting SME business goals, focusing on product visibility, customer trust, and operational efficiency.",
    conceptualDesign: {
      researchMethods: [
        "Informal interviews with automobile spare parts shop owners",
        "Surveys with vehicle owners and mechanics (customers)",
        "Competitive analysis of existing e-commerce and auto-parts apps"
      ],
      challenges: [
        "Difficulty managing online orders",
        "Poor customer communication",
        "Lack of digital visibility and structured catalogs"
      ],
      personas: [
        "SME owner / admin",
        "End customers (vehicle owners and mechanics)"
      ],
      userStories: [
        "Browsing spare parts by category",
        "Placing orders and tracking delivery",
        "Contacting the shop via live chat"
      ]
    },
    lowFidelityPrototype: {
      focusAreas: [
        "Screen structure and layout",
        "Navigation hierarchy",
        "Task-focused interaction flows"
      ],
      userJourneys: [
        "Onboarding → Login / Signup",
        "Product browsing → Cart → Checkout",
        "Order history → Notifications → Support"
      ],
      designDecisions: [
        "Minimize cognitive load and reduce unnecessary steps",
        "Align with SME business goals (product visibility & customer trust)",
        "Prioritize user efficiency and clarity"
      ]
    },
    highFidelityPrototype: {
      tool: "Figma",
      designElements: [
        "Consistent visual branding, typography, and color schemes",
        "Polished UI components: buttons, icons, forms, cards, and navigation bars",
        "Maintained visual hierarchy to highlight critical actions"
      ],
      interactions: [
        "Smooth transitions and micro-interactions",
        "Optimized layouts for thumb-friendly mobile interactions",
        "Prioritized SME functions: product showcasing, customer inquiries, order management"
      ]
    },
    usabilityLayout: [
      "Organized content using visual hierarchy to highlight critical actions",
      "Optimized layouts for thumb-friendly mobile interactions",
      "Prioritized SME functions: product showcasing, customer inquiries, order management",
      "Ensured smooth and intuitive navigation across all screens"
    ],
    accessibility: [
      "Used readable fonts and sufficient color contrast",
      "Designed large, touch-friendly buttons for ease of use",
      "Reduced cognitive load with clear labels and consistent icons",
      "Considered Sri Lankan user behavior, language familiarity, and SME workflows",
      "Ensured accessibility compliance for users with varying digital literacy levels"
    ],
    usabilityTesting: {
      methods: [
        "Think-aloud method",
        "Post-test questionnaires"
      ],
      tasks: [
        "User registration",
        "Browsing and searching products",
        "Adding items to cart and checkout",
        "Using chat and notifications"
      ],
      issues: [
        "Critical: Navigation clarity issues",
        "Moderate: Visual hierarchy improvements needed",
        "Minor: Interaction flow simplifications"
      ],
      refinements: [
        "Improved navigation clarity",
        "Enhanced visual hierarchy",
        "Simplified interaction flows"
      ]
    },
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
      research: [
        "User Research & Interviews",
        "Persona Development",
        "User Stories & Scenarios",
        "Competitive Analysis",
        "Information Architecture",
        "User Flow Mapping"
      ],
      design: [
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
    },
    conclusion: "This UI/UX design project successfully applied Human–Computer Interaction principles to create a practical solution for Sri Lankan automobile spare parts SMEs. By conducting thorough user research, developing detailed personas, and creating both low and high-fidelity prototypes, the design addresses real-world business challenges while prioritizing user experience and accessibility. The project demonstrates the importance of user-centered design in creating solutions that are not only visually appealing but also functional and accessible for diverse user groups. AutoParts Hub showcases how thoughtful UI/UX design can bridge the gap between traditional businesses and digital transformation, providing a roadmap for similar SME-focused mobile applications."
  },
  hasVideo: false,
  videoUrl: null
}