import { ProjectData } from '../types'

export const portfolioWebsiteProject: ProjectData = {
  id: 6,
  slug: "portfolio-website",
  title: "PERSONAL PORTFOLIO WEBSITE",
  subtitle: "MODERN RESPONSIVE PORTFOLIO WITH SMOOTH ANIMATIONS",
  description: "A modern, responsive personal portfolio website designed and developed to showcase technical skills, projects, and experience with a focus on performance, accessibility, and smooth user interactions using modern frontend technologies.",
  fullDescription: "Designed and developed a modern, responsive personal portfolio website to showcase my technical skills, projects, and experience. The website focuses on performance, accessibility, and smooth user interactions using modern frontend technologies with a clean, engaging design that represents my personal brand.",
  detailedDescription: "This portfolio website was built to demonstrate modern web development practices while providing an optimal user experience. It features smooth animations, responsive design, and optimized performance across all devices. The website serves as both a professional showcase and a technical demonstration of my frontend development capabilities.",
  image: "/images/portfolio project card.png",
  images: [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
  skills: ["Frontend Development", "Responsive UI Design", "Animation & UX", "TypeScript", "Next.js", "Performance Optimization", "SEO", "Accessibility", "Component Architecture"],
  keyFeatures: [
    "Fully responsive design optimized for desktop, tablet, and mobile devices",
    "Smooth animations and micro-interactions powered by Framer Motion",
    "Dark / Light mode toggle with seamless transitions and persistent user preference",
    "Scroll-based and viewport-triggered animations for enhanced user experience",
    "Server-side rendering (SSR) with Next.js for improved performance and SEO",
    "Type-safe development using TypeScript for maintainability and reliability",
    "Optimized performance with lazy loading and image optimization strategies",
    "Dynamic project routing with detailed case study pages and interactive elements",
    "Accessible navigation and semantic HTML structure for better usability",
    "Comprehensive design system with consistent styling using Tailwind CSS"
  ],
  period: "Jul 2025 – Aug 2025",
  liveUrl: "#",
  githubUrl: "https://github.com/vinuki-thiranya/MyPortfolio",
  timeline: "2 months",
  role: "Full Stack Developer & Designer",
  teamSize: "Individual Project",
  results: [
    { title: "Modern Design", icon: "palette" },
    { title: "Performance", icon: "zap" },
    { title: "User Experience", icon: "smile" },
    { title: "Responsive Layout", icon: "monitor" },
    { title: "Type Safety", icon: "shield" }
  ],
  caseStudy: {
    overview: "This portfolio website was created to showcase my technical skills, projects, and professional experience through an engaging and interactive user interface. Built with modern web technologies, the site emphasizes performance, accessibility, and smooth user interactions while providing a clean, contemporary design that reflects my personal brand and development approach.\n\nAs an individual project, it allowed me to implement best practices in frontend development, including component architecture, state management, and responsive design principles. The website serves as both a practical demonstration of my capabilities and a functional portfolio for potential employers and collaborators.",
    problems: [
      "Need for a professional online presence to showcase projects and skills",
      "Requirement for responsive design that works across all devices",
      "Importance of performance optimization for better user experience",
      "Need for accessibility compliance to reach all users",
      "Desire for engaging animations without compromising performance"
    ],
    solutions: {
      problem: [
        "Lack of professional online portfolio for project showcase",
        "Poor mobile experience on existing solutions",
        "Slow loading times and performance issues",
        "Inaccessible navigation and content structure",
        "Static, unengaging user interface"
      ],
      solution: [
        "Modern portfolio website built with Next.js and TypeScript",
        "Fully responsive design using Tailwind CSS framework",
        "Performance optimization with SSR and image optimization",
        "Accessible navigation and semantic HTML structure",
        "Smooth animations with Framer Motion library"
      ],
      impact: [
        "Professional online presence with project showcase",
        "Seamless experience across all devices and screen sizes",
        "Fast loading times and optimal performance scores",
        "Improved accessibility for all users",
        "Engaging user interface with smooth interactions"
      ]
    },
    myRole: {
      title: "Full Stack Developer & Designer",
      responsibilities: [
        "Designed and developed the complete website architecture and user interface",
        "Implemented responsive design using Tailwind CSS for all screen sizes",
        "Created smooth animations and interactions using Framer Motion",
        "Set up dark/light mode toggle with persistent user preferences",
        "Optimized performance with Next.js server-side rendering and lazy loading",
        "Implemented TypeScript for type safety and maintainable codebase",
        "Ensured accessibility compliance with semantic HTML and ARIA labels",
        "Developed dynamic routing for project pages and case studies",
        "Integrated GitHub repository for version control and deployment"
      ]
    },
    technicalImplementation: {
      description: "The website was built using Next.js with TypeScript, providing server-side rendering for optimal performance and SEO. Tailwind CSS was used for responsive styling, while Framer Motion handled smooth animations and transitions. The architecture follows modern React patterns with reusable components, proper state management, and optimized asset loading. Performance was prioritized through code splitting, image optimization, and efficient bundle sizes.",
      frontend: [
        "Next.js framework with App Router for server-side rendering",
        "TypeScript for type safety and improved developer experience",
        "React with functional components and hooks architecture",
        "Tailwind CSS for utility-first responsive styling",
        "Framer Motion for smooth animations and transitions"
      ],
      performance: [
        "Server-side rendering (SSR) for improved initial load times",
        "Image optimization with Next.js Image component",
        "Code splitting and lazy loading for efficient bundles",
        "Minimal dependencies and optimized asset delivery",
        "Progressive enhancement and graceful degradation"
      ],
      features: [
        "Dark/light mode toggle with system preference detection",
        "Scroll-triggered and viewport-based animations",
        "Responsive navigation with mobile hamburger menu",
        "Dynamic project pages with case study content",
        "Accessible form controls and interactive elements"
      ]
    },
    results: {
      areas: [
        "Frontend Development",
        "Responsive UI Design",
        "Animation & UX",
        "TypeScript Proficiency",
        "Next.js Mastery"
      ],
      outcomes: [
        "Hands-on experience with modern React and Next.js ecosystem",
        "Practical application of responsive design principles",
        "Implementation of smooth animations and user interactions",
        "Type-safe development with TypeScript for reliability",
        "Deep understanding of Next.js features and optimizations"
      ]
    },
    conclusion: "This portfolio website project represents a comprehensive demonstration of modern frontend development skills and best practices. By combining Next.js, TypeScript, and Framer Motion, I created a performant, accessible, and visually engaging platform to showcase my work. The project reinforced the importance of user-centered design, performance optimization, and maintainable code architecture. It serves as both a functional portfolio and a testament to my ability to build modern web applications with attention to detail, user experience, and technical excellence."
  },
  hasVideo: false,
  videoUrl: null
}