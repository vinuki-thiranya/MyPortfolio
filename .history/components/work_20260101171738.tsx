"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, Mail, Linkedin, Instagram, Facebook } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  slug: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "FormLang++ – A Domain-Specific Language for HTML Form Generation",
    description:
      "Developed a domain-specific language (DSL) called FormLang++ to simplify and automate creating dynamic, validated HTML forms using a declarative, human-readable syntax. Built using C, Flex (Lex), and Bison (Yacc).",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["C", "Flex (Lex)", "Bison (Yacc)", "Parsing" ],
    liveUrl: "https://github.com/it23425590/Formlang-DSL",
    githubUrl: "https://github.com/it23425590/Formlang-DSL",
    slug: "formlang-plus-plus",
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
  },
]

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons)
      return () => carousel.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <div id="work" className="bg-gradient-to-br from-[#0a192f] to-[#0f172a] min-h-screen relative overflow-hidden">
      {/* Left Sidebar - Social Icons */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-5">
          <a 
            href="mailto:vinukithiranya@gmail.com" 
            className="text-[#a8b2d1] hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/vinuki-thiranya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a8b2d1] hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/vinuki-thiranya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a8b2d1] hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a8b2d1] hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <div className="w-[1px] h-24 bg-[#a8b2d1]/30 mt-2"></div>
      </div>

      {/* Right Sidebar - Email */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-5">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a8b2d1] hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="mailto:vinukithiranya@gmail.com" 
            className="text-[#a8b2d1] hover:text-[#64ffd9] transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="w-[1px] h-24 bg-[#a8b2d1]/30 mt-2"></div>
        <a 
          href="mailto:vinukithiranya@gmail.com" 
          className="text-[#a8b2d1] hover:text-[#64ffd9] transition-all duration-300 text-xs tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          vinukithiranya@gmail.com
        </a>
      </div>

      {/* Main Content */}
      <div className="px-6 lg:px-24 xl:px-32 py-16">
        {/* Header Section */}
        <div className="max-w-[1400px] mx-auto mb-12">
          <motion.div 
            className="w-[280px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            Some Things I've Built
          </motion.div>
          
          <motion.h1
            className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
            data-cursor-target="true"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ cursor: "none", fontFamily: 'var(--font-playfair), var(--font-inter)' }}
          >
            Featured Projects
          </motion.h1>
            
          <motion.p 
            className="w-full max-w-[600px] mb-4 text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            Here are some selected projects I've worked on. Each represents unique challenges and solutions.
          </motion.p>
        </div>

        {/* Projects Display - Main Layout */}
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Featured Project - Left/Center */}
            <motion.div 
              className="lg:w-[55%] xl:w-[60%]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ amount: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden bg-white dark:bg-[#112240] border border-[#e2e8f0] dark:border-[#1e2b47] shadow-2xl rounded-2xl group cursor-pointer h-[500px] lg:h-[600px]"
                >
                  {/* Background Media */}
                  <div className="absolute inset-0">
                    {selectedProject.image?.endsWith('.mp4') ? (
                      <video
                        src={selectedProject.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        {selectedProject.title}
                      </h3>
                      
                      <p className="text-[#a8b2d1] mb-6 text-base lg:text-lg leading-relaxed line-clamp-3">
                        {selectedProject.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-[#64ffd9]/20 text-[#64ffd9] text-sm rounded-full border border-[#64ffd9]/30 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Link
                          href={`/projects/${selectedProject.slug}`}
                          className="inline-flex items-center justify-center px-6 py-3 bg-[#64ffd9] hover:bg-[#4fd1c7] text-[#0a192f] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          <ArrowUpRight className="w-5 h-5 mr-2" />
                          View Project
                        </Link>
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#64ffd9] text-[#64ffd9] hover:bg-[#64ffd9] hover:text-[#0a192f] font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Project Cards Carousel - Right Side */}
            <motion.div 
              className="lg:w-[45%] xl:w-[40%] flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ amount: 0.2 }}
            >
              {/* Carousel Header */}
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[#e6f1ff]/80 font-poppins text-lg font-medium">
                  All Projects ({projects.length})
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollCarousel('left')}
                    disabled={!canScrollLeft}
                    className={`p-2 rounded-full border transition-all duration-300 ${
                      canScrollLeft 
                        ? 'border-[#64ffd9]/50 text-[#64ffd9] hover:bg-[#64ffd9]/20 hover:border-[#64ffd9]' 
                        : 'border-[#a8b2d1]/20 text-[#a8b2d1]/30 cursor-not-allowed'
                    }`}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollCarousel('right')}
                    disabled={!canScrollRight}
                    className={`p-2 rounded-full border transition-all duration-300 ${
                      canScrollRight 
                        ? 'border-[#64ffd9]/50 text-[#64ffd9] hover:bg-[#64ffd9]/20 hover:border-[#64ffd9]' 
                        : 'border-[#a8b2d1]/20 text-[#a8b2d1]/30 cursor-not-allowed'
                    }`}
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Cards Container */}
              <div 
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ amount: 0.2 }}
                    className={`flex-shrink-0 w-[280px] snap-start cursor-pointer transition-all duration-300 ${
                      selectedProject.id === project.id 
                        ? 'ring-2 ring-[#64ffd9] ring-offset-2 ring-offset-[#0a192f]' 
                        : ''
                    }`}
                    onClick={() => handleProjectClick(project)}
                    onMouseEnter={() => setHoveredCard(project.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative overflow-hidden bg-[#112240] border border-[#1e2b47] rounded-xl h-[180px] group">
                      {/* Card Background */}
                      <div className="absolute inset-0">
                        {project.image?.endsWith('.mp4') ? (
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>

                      {/* Card Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <h5 className="text-white font-semibold text-sm line-clamp-2 mb-1">
                          {project.title}
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-[#64ffd9]/15 text-[#64ffd9] text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-0.5 text-[#a8b2d1] text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-[#64ffd9]/10 flex items-center justify-center z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-2 text-[#64ffd9] font-medium text-sm">
                          <ArrowUpRight className="w-4 h-4" />
                          <span>View Details</span>
                        </div>
                      </motion.div>

                      {/* Selected Indicator */}
                      {selectedProject.id === project.id && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-[#64ffd9] rounded-full z-30">
                          <div className="absolute inset-0 bg-[#64ffd9] rounded-full animate-ping" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Project Quick Info Cards - Vertical Stack */}
              <div className="mt-6 space-y-3 hidden lg:block">
                {projects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ amount: 0.2 }}
                    onClick={() => handleProjectClick(project)}
                    className={`p-4 bg-[#112240]/60 border rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#112240] ${
                      selectedProject.id === project.id 
                        ? 'border-[#64ffd9]/50' 
                        : 'border-[#1e2b47] hover:border-[#64ffd9]/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        {project.image?.endsWith('.mp4') ? (
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h6 className="text-white font-medium text-sm truncate">{project.title}</h6>
                        <p className="text-[#a8b2d1] text-xs truncate">{project.technologies.slice(0, 3).join(' • ')}</p>
                      </div>
                      <ArrowUpRight className={`w-4 h-4 flex-shrink-0 transition-colors ${
                        selectedProject.id === project.id ? 'text-[#64ffd9]' : 'text-[#a8b2d1]'
                      }`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="mt-16 flex justify-center max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#64ffd9] text-[#64ffd9] font-poppins text-sm font-medium hover:bg-[#64ffd9]/10 rounded-lg transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}