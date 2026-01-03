"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowUpRight, Filter, X } from "lucide-react"

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
    description:
      "Developed a domain-specific language (DSL) called FormLang++ to simplify and automate creating dynamic, validated HTML forms using a declarative, human-readable syntax. Built using C, Flex (Lex), and Bison (Yacc).",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["C", "Flex (Lex)", "Bison (Yacc)", "Parsing"],
    liveUrl: "https://github.com/it23425590/Formlang-DSL",
    githubUrl: "https://github.com/it23425590/Formlang-DSL",
    slug: "formlang-plus-plus",
    category: "Compiler Design",
    year: "2024"
  },
  {
    id: 2,
    title: "Auto Service Spare Parts Management System",
    description:
      "Designed and developed a fully responsive web application to streamline spare part management for an auto service shop, with secure user access, admin controls, and modern UI/UX. Led the Authentication & User Management Module.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
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
    description:
      "Developed a fault-tolerant distributed logging system designed to maintain high availability, consistency, and reliability even during node failures. Specialized in Time Synchronization & Fault Tolerance Module using NTP and heartbeat algorithms.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
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
    description:
      "Designed and developed a full-stack web application for managing a floral shop's online operations. Implemented product CRUD features and customer-facing product views using Spring Boot, Thymeleaf, and MySQL.",
    image:
      "/images/dogwood-project-card.mp4",
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
    description:
      "Developed a smart safety helmet for miners with advanced sensor integration including atmospheric pressure, gas detection, heart rate monitoring, and temperature sensors. Created comprehensive web dashboard for real-time monitoring.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
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
    description:
      "A modern portfolio website with animated transitions, dark mode, responsive design, and smooth scroll animations built with Next.js, TypeScript, and Framer Motion for enhanced user experience.",
    image:
      "/images/portfolio project card.png",
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
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { 
    threshold: 0.1,
    margin: "-100px 0px"
  })

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#0a192f] dark:to-[#0f172a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
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
              className="motion-heading cursor-target hero-heading mt-0 mb-6 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
              data-cursor-target="true"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ cursor: "none", fontFamily: 'var(--font-playfair), var(--font-inter)' }}
            >
              All Projects
            </motion.h1>

            <motion.p 
              className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-lg leading-8 max-w-3xl mb-8"
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

              <div className={`flex flex-wrap gap-3 ${showFilters ? 'block' : 'hidden md:flex'}`}>
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
      <section className="pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36" ref={containerRef}>
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
                className="group relative overflow-hidden bg-white dark:bg-[#112240] border border-[#e2e8f0] dark:border-[#1e2b47] shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl cursor-pointer h-[400px]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image?.endsWith('.mp4') ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#64ffd9]/20 text-[#64ffd9] text-xs rounded-full border border-[#64ffd9]/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/20 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 h-52 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-3 line-clamp-2 group-hover:text-[#667eea] dark:group-hover:text-[#64ffd9] transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#4a5568] dark:text-[#a8b2d1] text-sm leading-6 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#f7fafc] dark:bg-[#1a365d] text-[#2d3748] dark:text-[#e6f1ff] text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-[#f7fafc] dark:bg-[#1a365d] text-[#4a5568] dark:text-[#a8b2d1] text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#667eea] hover:bg-[#4c51bf] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      View
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-[#667eea] text-[#667eea] hover:bg-[#667eea] hover:text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
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