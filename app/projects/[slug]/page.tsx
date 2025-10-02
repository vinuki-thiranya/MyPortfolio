"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Github, Monitor, Square, TrendingUp, CheckCircle, Code, Calendar, Users } from "lucide-react"

// Project data
const projectsData = {
  "formlang-plus-plus": {
    id: 1,
    title: "FORMLANG++",
    subtitle: "DOMAIN-SPECIFIC LANGUAGE FOR HTML FORM GENERATION",
    description: "Developed a domain-specific language (DSL) called FormLang++ to simplify and automate creating dynamic, validated HTML forms using a declarative, human-readable syntax.",
    fullDescription: "Built using C, Flex (Lex), and Bison (Yacc) as part of an advanced programming paradigms course, this project compiles .form files into clean, standards-compliant HTML5 with built-in validation and error handling.",
    detailedDescription: "This project enhanced my expertise in compiler design concepts such as lexical analysis, parsing, abstract syntax trees, and code generation, while improving my proficiency in C programming and bridging backend logic with frontend development.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["C", "Flex (Lex)", "Bison (Yacc)", "Parsing", "Compiler Design"],
    skills: ["Lexical Analysis", "Parsing", "Abstract Syntax Trees", "Code Generation", "Semantic Validation", "Error Handling"],
    keyFeatures: [
      "Declarative syntax for form elements like inputs, selects, radios, and textareas",
      "Semantic validation for required fields, input types, and layout rules", 
      "Robust error reporting for syntax and semantic issues",
      "Automatic generation of clean, styled, and accessible HTML5 code",
      "Extensible design allowing easy addition of new form controls and validation rules"
    ],
    period: "Apr 2025 - Jun 2025",
    liveUrl: "https://github.com/it23425590/Formlang-DSL",
    githubUrl: "https://github.com/it23425590/Formlang-DSL",
    timeline: "3 months",
    role: "Compiler Designer & Developer", 
    teamSize: "Individual Project",
    results: [
      { title: "Compiler Design", icon: "code" },
      { title: "Language Processing", icon: "cpu" },
      { title: "Code Generation", icon: "file" }
    ]
  },
  "auto-service-management-system": {
    id: 2,
    title: "AUTO SERVICE SPARE PARTS",
    subtitle: "RESPONSIVE WEB APPLICATION FOR AUTO SERVICE SHOP", 
    description: "Designed and developed a fully responsive web application to streamline spare part management for an auto service shop, with secure user access, admin controls, and modern UI/UX.",
    fullDescription: "As a key contributor, I was responsible for building the Authentication & User Management Module, ensuring robust security and user experience across the platform. The system features secure user access, admin controls, and a smooth, modern user interface.",
    detailedDescription: "The frontend was built using React.js and styled with Tailwind CSS, while the backend was developed with Java and Spring Boot. JWT-based authentication was implemented for secure access, and project tasks were efficiently managed using Jira.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React.js", "Spring Boot", "Spring Security", "JWT", "MySQL", "Tailwind CSS"],
    skills: ["Authentication Systems", "User Management", "Role-based Authorization", "Token Management", "Exception Handling", "CRUD Operations"],
    keyFeatures: [
      "Developed secure user registration and login functionality using Spring Boot and JWT for stateless authentication",
      "Implemented JWT-based authentication with refresh token and verification token handling for secure session lifecycle", 
      "Integrated email verification on signup and password reset workflows with tokenized email links",
      "Designed and enforced role-based authorization, allowing differentiated access for roles like admin and staff",
      "Managed complete token lifecycle, including generation, storage, and validation",
      "Built centralized exception handling for meaningful API responses and stability",
      "Developed user management features for admin-level control over user accounts (CRUD operations)"
    ],
    period: "Mar 2025 - Jun 2025",
    liveUrl: "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group-08-auto-spares-and-services",
    githubUrl: "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group-08-auto-spares-and-services",
    timeline: "4 months",
    role: "Authentication & User Management Module Developer",
    teamSize: "Team Project",
    results: [
      { title: "Authentication System", icon: "shield" },
      { title: "User Management", icon: "users" },
      { title: "Security Implementation", icon: "lock" }
    ]
  },
  "distributed-logging-system": {
    id: 3,
    title: "DISTRIBUTED LOGGING SYSTEM",
    subtitle: "FAULT-TOLERANT DISTRIBUTED ARCHITECTURE",
    description: "Developed a fault-tolerant distributed logging system designed to maintain high availability, consistency, and reliability even during node failures.",
    fullDescription: "Specialized in Time Synchronization & Fault Tolerance Module using NTP and heartbeat algorithms. The system featured fault tolerance, data replication and consistency, time synchronization, and consensus algorithms to ensure secure and robust user authentication in a distributed environment.",
    detailedDescription: "In a distributed system, accurate and consistent timestamps are crucial for event ordering and debugging. I developed a robust time synchronization module to ensure log accuracy across all server nodes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Flask", "SQLite", "NTP"],
    skills: ["Distributed Systems", "Time Synchronization", "Fault Tolerance", "Heartbeat Algorithms", "Clock Skew Correction", "Load Testing"],
    keyFeatures: [
      "Used NTP (Network Time Protocol) with fallback configurations to sync server clocks to reliable sources",
      "Collected and analyzed heartbeat timestamps to evaluate clock skew and tune synchronization intervals",
      "Designed a time-window-based buffering mechanism to reorder out-of-sync logs while maintaining system responsiveness",
      "Implemented dynamic delta offset correction for nodes with consistent drift to ensure accurate log generation",
      "Simulated real-world scenarios (clock drift, network latency, and load spikes) to test the resilience and accuracy",
      "Benchmarked sync intervals and finalized a configuration with 10-second syncs, achieving ±5ms skew with minimal overhead"
    ],
    period: "Apr 2025 - May 2025",
    liveUrl: "https://github.com/it23425590/ds_project_group08",
    githubUrl: "https://github.com/it23425590/ds_project_group08",
    timeline: "2 months",
    role: "Time Synchronization & Fault Tolerance Module Developer",
    teamSize: "Team Project",
    results: [
      { title: "Time Synchronization", icon: "clock" },
      { title: "Fault Tolerance", icon: "shield" },
      { title: "System Reliability", icon: "check" }
    ]
  },
  "dogwood-flora-management-system": {
    id: 4,
    title: "DOGWOOD FLORA",
    subtitle: "ONLINE FLORAL SHOP MANAGEMENT SYSTEM",
    description: "Designed and developed a full-stack web application for managing a floral shop's online operations as part of Object Oriented Analysis and Design module at SLIIT.",
    fullDescription: "This project was developed to streamline the shop's order handling, product display, and administrative tasks, improving both the customer experience and the owner's workflow. We used the Spring Boot framework to build a robust backend API, handling product management, customer orders, and user authentication.",
    detailedDescription: "I was responsible for implementing the product CRUD features using Spring Boot and MySQL, as well as developing the customer-facing product view using Thymeleaf and Bootstrap. The Thymeleaf templating engine was used to render dynamic HTML views, creating a responsive and visually appealing user interface.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563181071-84c6c2e3129b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "HTML/CSS"],
    skills: ["Full-stack Java Development", "MVC Architecture", "RESTful Services", "Database Design", "Template Engines", "CRUD Operations"],
    keyFeatures: [
      "Customer Interface: Browse floral products, view details, and place orders via an intuitive UI",
      "Admin Dashboard: Secure backend access for managing inventory, updating products, viewing customer orders, and tracking order statuses",
      "Authentication System: Role-based login for admin and users, with encrypted password storage and session handling",
      "Database Integration: Seamless communication with MySQL to persist product data, order records, and user information",
      "Responsive Design: Mobile-friendly interface using Bootstrap for optimal user experience across devices"
    ],
    period: "Jul 2024 - Nov 2024",
    liveUrl: "https://github.com/it23425590/OOAD-Group-Assignment",
    githubUrl: "https://github.com/it23425590/OOAD-Group-Assignment",
    timeline: "5 months",
    role: "Backend Developer & Frontend Integration",
    teamSize: "Team Project",
    results: [
      { title: "Product Management", icon: "package" },
      { title: "Customer Experience", icon: "users" },
      { title: "System Architecture", icon: "layers" }
    ]
  },
  "intellihelmet-smart-safety-helmet": {
    id: 5,
    title: "INTELLIHELMET",
    subtitle: "THE SMART SAFETY HELMET",
    description: "Developed a smart safety helmet tailored for miners with advanced sensor integration including atmospheric pressure, gas detection, heart rate monitoring, and temperature sensors.",
    fullDescription: "In our first semester at SLIIT, my team and I undertook an ambitious project to develop a smart safety helmet tailored for miners. The primary objective was to enhance miners' safety and monitoring through cutting-edge technology integration.",
    detailedDescription: "We created a comprehensive database to store vital information about miners, including their personal details, health records, and working hours. This database was designed to ensure quick access and real-time updates, improving overall safety and response times.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Arduino", "IoT", "BMP280", "MQ135", "MAX30102", "Web Design", "HTML/CSS"],
    skills: ["IoT Development", "Sensor Integration", "Real-time Monitoring", "Database Design", "Web Dashboard", "Safety Systems"],
    keyFeatures: [
      "BMP280 Atmospheric Pressure Sensor: Used to measure altitude and monitor atmospheric pressure changes within the mining environment",
      "MQ135 Gas Sensor: Essential for detecting the presence of harmful gases, thereby preventing exposure to dangerous air quality",
      "MAX30102 Heart Rate Sensor: Monitors the heart rate of miners in real time, allowing for immediate response if irregularities are detected",
      "Temperature Sensor: Tracks the ambient temperature to prevent overheating and ensure a safe working environment",
      "Vibration Motor: Provides immediate haptic feedback in case of emergencies or when the sensors detect unsafe conditions",
      "Supervisor Dashboard: Created a dedicated website for mine supervisors to monitor miners' real-time data with comprehensive insights"
    ],
    period: "Jan 2023 - Nov 2023",
    liveUrl: "#",
    githubUrl: "#",
    timeline: "11 months",
    role: "IoT Developer & Database Designer",
    teamSize: "Team Project",
    results: [
      { title: "Safety Enhancement", icon: "shield" },
      { title: "Real-time Monitoring", icon: "activity" },
      { title: "Emergency Response", icon: "alert" }
    ]
  },
  "portfolio-website": {
    id: 6,
    title: "PORTFOLIO WEBSITE",
    subtitle: "MODERN RESPONSIVE PORTFOLIO",
    description: "A modern portfolio website with animated transitions, dark mode, responsive design, and smooth scroll animations built with Next.js, TypeScript, and Framer Motion.",
    fullDescription: "This portfolio website showcases my projects, skills, and experience through an engaging and interactive user interface. Built with modern web technologies, it features smooth animations, responsive design, and optimized performance for enhanced user experience.",
    detailedDescription: "The website includes project detail pages with dynamic routing, scroll-triggered animations, and a comprehensive design system. Every component is carefully crafted to provide seamless navigation and visual appeal while maintaining excellent performance across all devices.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    skills: ["Frontend Development", "UI/UX Design", "Animation Systems", "Responsive Design", "Performance Optimization", "SEO"],
    keyFeatures: [
      "Smooth scroll animations that retrigger on every scroll direction",
      "Dynamic project detail pages with comprehensive project information", 
      "Responsive design optimized for all device sizes and orientations",
      "Dark mode implementation with seamless color transitions",
      "Performance optimized with Next.js App Router and TypeScript",
      "Interactive components with Framer Motion animations"
    ],
    period: "Ongoing",
    liveUrl: "#",
    githubUrl: "https://github.com/vinuki-thiranya/MyPortfolio",
    timeline: "Ongoing Development",
    role: "Full Stack Developer & Designer", 
    teamSize: "Individual Project",
    results: [
      { title: "Modern Design", icon: "palette" },
      { title: "Performance", icon: "zap" },
      { title: "User Experience", icon: "heart" }
    ]
  }
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  const otherProjects = Object.entries(projectsData)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 2)
    .map(([slug, data]) => ({ ...data, slug }))

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/images/v-logo.png" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
            </Link>
            <Link href="/" className="text-white font-medium hover:text-[#64ffd9] transition-colors">
              Home
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white/20 bg-transparent hover:bg-white/10"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white/20 bg-transparent hover:bg-white/10"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6">
        {/* Project Hero Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-left mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-2xl text-[#64ffd9] mb-8 font-medium">
                {project.subtitle}
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                {project.detailedDescription}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-4">
                {project.skills.map((skill, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Images Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tight">RESULTS</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            {project.results.map((result, index) => (
              <motion.div 
                key={index}
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto bg-[#64ffd9]/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-[#64ffd9]" />
                </div>
                <h3 className="text-2xl font-bold">{result.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-4">TECH STACK</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools used to bring this project to life
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#0a192f]/80 border border-[#64ffd9]/20 backdrop-blur-sm overflow-hidden">
                <div className="p-12">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-[#64ffd9]/10 hover:bg-[#64ffd9]/20 rounded-xl p-6 text-center transition-all duration-300 border border-[#64ffd9]/10 hover:border-[#64ffd9]/30">
                          <div className="w-12 h-12 mx-auto mb-4 bg-[#64ffd9]/20 rounded-lg flex items-center justify-center group-hover:bg-[#64ffd9]/30 transition-all duration-300">
                            <Code className="h-6 w-6 text-[#64ffd9]" />
                          </div>
                          <h4 className="text-white font-medium text-sm group-hover:text-[#64ffd9] transition-colors duration-300">
                            {tech}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-[#64ffd9]/20">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <Button
                        variant="outline"
                        className="border-[#64ffd9] text-[#64ffd9] hover:bg-[#64ffd9] hover:text-[#0a192f] bg-transparent transition-all duration-300 px-8 py-3"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Monitor className="mr-3 h-5 w-5" />
                          Visit Live Site
                          <ExternalLink className="ml-3 h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#64ffd9] text-[#64ffd9] hover:bg-[#64ffd9] hover:text-[#0a192f] bg-transparent transition-all duration-300 px-8 py-3"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="mr-3 h-5 w-5" />
                          View Source Code
                          <ExternalLink className="ml-3 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* More Projects Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl md:text-9xl font-black tracking-tight mb-8">MORE WORK</h1>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {otherProjects.map((otherProject, index) => (
              <motion.div
                key={otherProject.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${otherProject.slug}`}>
                  <Card className="bg-gray-100 border-0 overflow-hidden hover:bg-gray-200 transition-colors group cursor-pointer">
                    <div className="p-8">
                      <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">{otherProject.title}</h3>
                      <p className="text-gray-600 mb-6">{otherProject.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {otherProject.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black/10 text-black text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Footer */}
        <section className="mb-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
            <div className="mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-white/20 bg-transparent hover:bg-white/10"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400 space-y-2">
            <p>© 2025 . WebDev For You . All Rights Reserved</p>
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/style-guide" className="hover:text-[#64ffd9] transition-colors">
                Style Guide
              </Link>
              <Link href="/image-licenses" className="hover:text-[#64ffd9] transition-colors">
                Image Licenses
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
