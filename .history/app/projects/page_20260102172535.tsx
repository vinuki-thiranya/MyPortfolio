"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ArrowUpRight, Filter } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  slug: string
  category: string
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "FormLang++ – A Domain-Specific Language for HTML Form Generation",
    description: "A comprehensive domain-specific language (DSL) designed to revolutionize HTML form creation through high-level abstraction. FORMLANG++ transforms structured .form source files into clean, standards-compliant HTML5 with built-in validation and robust error handling.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["C", "Flex (Lex)", "Bison (Yacc)", "HTML5", "Compiler Design", "AST", "Parsing"],
    liveUrl: "https://github.com/it23425590/Formlang-DSL",
    githubUrl: "https://github.com/it23425590/Formlang-DSL",
    slug: "formlang-plus-plus",
    category: "Compiler Design",
    year: "2024"
  },
  {
    id: 2,
    title: "Auto Service Spare Parts Management System",
    description: "Designed and developed a fully responsive web application to streamline spare part management for an auto service shop, with secure user access, admin controls, and modern UI/UX. Led the Authentication & User Management Module.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["React.js", "Spring Boot", "Spring Security", "JWT", "MySQL", "Tailwind CSS"],
    liveUrl: "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group-08-auto-spares-and-services",
    githubUrl: "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group-08-auto-spares-and-services",
    slug: "auto-service-management-system",
    category: "Web Development",
    year: "2024"
  },
  {
    id: 3,
    title: "Distributed Logging System",
    description: "Developed a fault-tolerant distributed logging system designed to maintain high availability, consistency, and reliability even during node failures. Specialized in Time Synchronization & Fault Tolerance Module using NTP and heartbeat algorithms.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Flask", "NTP", "Distributed Systems"],
    liveUrl: "https://github.com/it23425590/ds_project_group08",
    githubUrl: "https://github.com/it23425590/ds_project_group08",
    slug: "distributed-logging-system",
    category: "Distributed Systems",
    year: "2024"
  },
  {
    id: 4,
    title: "Dogwood Flora – Online Floral Shop Management System",
    description: "Designed and developed a full-stack web application for managing a floral shop's online operations. Implemented product CRUD features and customer-facing product views using Spring Boot, Thymeleaf, and MySQL.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "HTML/CSS"],
    liveUrl: "https://github.com/it23425590/OOAD-Group-Assignment",
    githubUrl: "https://github.com/it23425590/OOAD-Group-Assignment",
    slug: "dogwood-flora-management-system",
    category: "Web Development",
    year: "2023"
  },
  {
    id: 5,
    title: "INTELLIHELMET: The Smart Safety Helmet",
    description: "Developed a smart safety helmet for miners with advanced sensor integration including atmospheric pressure, gas detection, heart rate monitoring, and temperature sensors. Created comprehensive web dashboard for real-time monitoring.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Arduino", "IoT", "BMP280", "MQ135", "MAX30102", "Web Design", "HTML/CSS"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "intellihelmet-smart-safety-helmet",
    category: "IoT & Hardware",
    year: "2023"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern portfolio website with animated transitions, dark mode, responsive design, and smooth scroll animations built with Next.js, TypeScript, and Framer Motion for enhanced user experience.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinuki-thiranya/MyPortfolio",
    slug: "portfolio-website",
    category: "Web Development",
    year: "2024"
  },
]

const categories = ["All", "Web Development", "Distributed Systems", "Compiler Design", "IoT & Hardware"]

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1, margin: "-100px 0px" }
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#0a192f] dark:to-[#0f172a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Portfolio
            </motion.div>
            
            <motion.h1
              className="motion-heading cursor-target hero-heading mt-0 mb-6 text-[#2d3748] dark:text-[#e6f1ff]/90 text-5xl md:text-7xl lg:text-[90px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
              data-cursor-target="true"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ cursor: "none" }}
            >
              All Projects
            </motion.h1>

            <motion.p 
              className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-xl leading-[1.9rem] max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A comprehensive collection of my work spanning web development, distributed systems, compiler design, and IoT solutions. Each project represents a unique challenge and learning experience.
            </motion.p>

            {/* Filter Controls */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-[#667eea] hover:bg-[#4c51bf] text-white rounded-lg transition-colors duration-200 md:hidden"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>

              <div className={`flex flex-wrap gap-3 ${showFilters ? 'flex' : 'hidden md:flex'}`}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowFilters(false)
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-[#667eea] text-white"
                        : "bg-white dark:bg-[#112240] text-[#2d3748] dark:text-[#e6f1ff] hover:bg-[#667eea] hover:text-white border border-[#e2e8f0] dark:border-[#1e2b47]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-36" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden backdrop-blur-lg border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl cursor-pointer h-[420px] flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Project Image - Full background */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-[#64ffd9]/90 text-[#0a192f] text-xs font-semibold rounded-full backdrop-blur-md shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1.5 bg-black/70 text-white text-xs font-semibold rounded-full backdrop-blur-md shadow-lg">
                    {project.year}
                  </span>
                </div>

                {/* Project Content - Transparent overlay */}
                <div className="relative z-10 p-5 flex-1 flex flex-col justify-end">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#64ffd9] transition-colors duration-300 leading-tight min-h-[3rem] drop-shadow-lg">
                    {project.title}
                  </h3>
                  
                  {/* Description - exactly 2 lines */}
                  <p className="text-white/90 text-sm leading-5 mb-4 line-clamp-2 h-10 drop-shadow-md">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4 min-h-[2rem]">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white/30 text-white text-xs font-medium rounded-full backdrop-blur-md border border-white/50 hover:bg-[#64ffd9] hover:text-[#0a192f] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 bg-white/30 text-white text-xs font-medium rounded-full backdrop-blur-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons - Always at bottom */}
                  <div className="flex gap-2.5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2.5 bg-[#64ffd9] hover:bg-[#4fd1c7] text-[#0a192f] text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="w-3 h-3 mr-1.5" />
                      View Project
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center px-3 py-2.5 border text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 backdrop-blur-md ${
                        project.githubUrl === "#" 
                          ? "border-gray-400 text-gray-400 cursor-not-allowed" 
                          : "border-white/50 text-white hover:bg-white hover:text-[#0a192f]"
                      }`}
                      onClick={(e) => {
                        if (project.githubUrl === "#") {
                          e.preventDefault()
                        }
                        e.stopPropagation()
                      }}
                    >
                      <Github className="w-3 h-3 mr-1.5" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Projects Found */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#4a5568] dark:text-[#a8b2d1] text-lg">
                No projects found in the "{selectedCategory}" category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut"
            }}
            viewport={{ amount: 0.3 }}
          >
            <Link 
              href="/#work" 
              className="group inline-flex items-center gap-2 text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm font-medium hover:text-[#4c51bf] dark:hover:text-[#4fd1c7] transition-colors duration-200 no-underline"
            >
              ← Back to Featured Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}