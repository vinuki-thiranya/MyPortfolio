import { ProjectData } from '../types'

export const portfolioWebsiteProject: ProjectData = {
  id: 6,
  slug: "portfolio-website",
  title: "PORTFOLIO WEBSITE",
  subtitle: "MODERN RESPONSIVE PORTFOLIO",
  description: "A modern portfolio website with animated transitions, dark mode, responsive design, and smooth scroll animations built with Next.js, TypeScript, and Framer Motion.",
  fullDescription: "This portfolio website showcases my projects, skills, and experience through an engaging and interactive user interface. Built with modern web technologies, it features smooth animations, responsive design, and optimized performance for enhanced user experience.",
  detailedDescription: "The website includes project detail pages with dynamic routing, scroll-triggered animations, and a comprehensive design system. Every component is carefully crafted to provide seamless navigation and visual appeal while maintaining excellent performance across all devices.",
  image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
  skills: ["Frontend Development", "Responsive Design", "Animation", "Performance Optimization", "SEO", "Accessibility"],
  keyFeatures: [
    "Dark mode toggle with smooth transitions and persistent user preference",
    "Scroll-triggered animations using Framer Motion for enhanced engagement",
    "Fully responsive design optimized for all devices and screen sizes",
    "Dynamic project routing with detailed case study pages",
    "Optimized performance with lazy loading and image optimization",
    "Accessible navigation and semantic HTML structure"
  ],
  period: "Jan 2024 - Present",
  liveUrl: "#",
  githubUrl: "https://github.com/vinuki-thiranya/MyPortfolio",
  timeline: "Ongoing",
  role: "Full Stack Developer & Designer",
  teamSize: "Individual Project",
  results: [
    { title: "Modern Design", icon: "palette" },
    { title: "Performance", icon: "zap" },
    { title: "User Experience", icon: "smile" }
  ]
}