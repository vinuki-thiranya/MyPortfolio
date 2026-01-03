"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Footer from "./footer"

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
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const lastScrollTime = useRef(0)
  const previousScrollY = useRef(0)
  const wasInViewRef = useRef(false) // Track if section was previously in view

  // Initialize with first card when entering from top, last card when from bottom
  useEffect(() => {
    const handleSectionEntry = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Check if section is currently in view
      const isInView = rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5
      
      // Check if we're ENTERING the section (wasn't in view before, now is)
      if (isInView && !wasInViewRef.current) {
        const currentScrollY = window.pageYOffset
        const scrollDirection = currentScrollY > previousScrollY.current ? 'down' : 'up'
        
        // If entering from bottom (scrolling up), start with last card
        if (scrollDirection === 'up') {
          setActiveCardIndex(projects.length - 1)
        }
        // If entering from top (scrolling down), start with first card  
        else {
          setActiveCardIndex(0)
        }
      }
      
      // Update tracking refs
      wasInViewRef.current = isInView
      previousScrollY.current = window.pageYOffset
    }

    window.addEventListener('scroll', handleSectionEntry)
    return () => window.removeEventListener('scroll', handleSectionEntry)
  }, [])

  // Handle scroll to navigate between cards
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      
      // Only handle wheel events when work section is properly in view
      if (rect.top > 100 || rect.bottom < window.innerHeight * 0.5) {
        return
      }

      const isAtFirstCardAndScrollingUp = activeCardIndex === 0 && e.deltaY < 0
      const isAtLastCardAndScrollingDown = activeCardIndex === projects.length - 1 && e.deltaY > 0

      // If at the boundaries, do nothing and let the main scroll snap handle it.
      if (isAtFirstCardAndScrollingUp || isAtLastCardAndScrollingDown) {
        return
      }

      // If we are not at the boundaries, prevent default scroll and handle card navigation.
      e.preventDefault()

      // Prevent rapid scrolling
      const now = Date.now()
      if (now - lastScrollTime.current < 800) {
        return
      }

      // Require strong scroll push to change cards
      if (Math.abs(e.deltaY) > 30) {
        lastScrollTime.current = now
        
        if (e.deltaY > 0) {
          // Scrolling down - next card
          if (activeCardIndex < projects.length - 1) {
            setActiveCardIndex(prev => prev + 1)
          }
        } else {
          // Scrolling up - previous card
          if (activeCardIndex > 0) {
            setActiveCardIndex(prev => prev - 1)
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [activeCardIndex])

  return (
    <div id="work" ref={sectionRef} className="bg-gradient-to-br from-[#0a192f] to-[#0f172a] relative min-h-screen">
      
      {/* Fixed Header Section */}
      <div className="sticky top-0 z-50 bg-gradient-to-br from-[#0a192f] to-[#0f172a] pt-12 pb-4 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-[900px] mx-auto">
          <div>
            <motion.div 
              className="w-[250px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              Some Things I've Built
            </motion.div>
            
            <motion.h1 
              className="mt-2 mb-2 text-[#1a202c] dark:text-[#e6f1ff]/90 font-poppins text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            >
              
            </motion.h1>
            <motion.h1
            className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
            data-cursor-target="true"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 2.4 }}

            style={{ cursor: "none", fontFamily: 'var(--font-playfair), var(--font-inter)' }}>
              {"Featured Projects"}
              </motion.h1>

              
            <motion.p 
              className="w-full mb-4 text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              Here are some selected projects I've worked on. Each represents unique challenges and solutions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Projects Container - Fixed card display area */}
      <div 
        ref={containerRef} 
        className="relative px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36 min-h-[500px]"
      >
        <div className="max-w-5xl mx-auto px-4 pb-16 relative">
          {/* View All Projects Link - Top Right */}
          <motion.div
            className="absolute top-0 right-4 z-30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: "easeOut"
            }}
            viewport={{ amount: 0.3 }}
          >
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm font-medium hover:text-[#4c51bf] dark:hover:text-[#4fd1c7] transition-colors duration-200 no-underline"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Single card display area */}
          <div className="relative h-[320px]">
            {projects.map((project, index) => {
              // Calculate animation state
              const isActive = index === activeCardIndex
              const isLastCard = index === projects.length - 1
              const isPreviousCard = index < activeCardIndex
              
              // Determine Y position and visibility
              let yPosition = 0
              let isVisible = false
              
              if (isActive) {
                // Active card is always visible at position 0
                yPosition = 0
                isVisible = true
              } else if (isLastCard && activeCardIndex === projects.length - 1) {
                // Last card stays visible and fixed when it's active
                yPosition = 0
                isVisible = true
              } else if (isPreviousCard) {
                // Previous cards slide up and become invisible
                yPosition = -100
                isVisible = false
              } else {
                // Future cards stay below and invisible
                yPosition = 100
                isVisible = false
              }

              return (
                <motion.div
                  key={project.id}
                  ref={(el) => { projectRefs.current[index] = el }}
                  data-project-id={project.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0,
                    y: yPosition,
                    scale: isActive ? 1 : 0.95,
                    zIndex: isActive ? 20 : isLastCard ? 10 : 5
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ 
                    pointerEvents: isActive ? 'auto' : 'none',
                    visibility: isVisible ? 'visible' : 'hidden'
                  }}
                >
                <div className="relative overflow-hidden bg-white dark:bg-[#112240] border border-[#e2e8f0] dark:border-[#1e2b47] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl group cursor-pointer h-[320px]">
                  {/* Full Card Background Media */}
                  <div className="absolute inset-0">
                    {project.image?.endsWith('.mp4') ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onError={(e) => console.error('Video failed to load:', e)}
                        onLoadStart={() => console.log('Video started loading:', project.image)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      >
                        <source src={project.image} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    {/* Gradient Overlay - Always present but subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Project Title and Arrow Icon - Always Visible at Top Left */}
                  <div className="absolute top-0 left-0 p-8 z-10 flex items-center gap-4">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: hoveredProject === project.id ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Arrow Icon in Box */}
                    <motion.div
                      className="flex items-center justify-center w-10 h-10 bg-[#64ffd9]/20 border border-[#64ffd9]/40 rounded-lg backdrop-blur-sm"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 0 : 1,
                        scale: hoveredProject === project.id ? 0.8 : 1
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(100, 255, 217, 0.3)" }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#64ffd9]" />
                    </motion.div>
                  </div>

                  {/* Hover Content Overlay - Only visible on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 flex flex-col justify-between p-8 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ pointerEvents: hoveredProject === project.id ? "auto" : "none" }}
                  >
                    {/* Top Section - Empty for spacing */}
                    <div></div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="hidden lg:block">
                        <motion.h3
                          className="text-4xl font-bold text-white mb-6"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{
                            y: hoveredProject === project.id ? 0 : 30,
                            opacity: hoveredProject === project.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {project.title}
                        </motion.h3>

                        <motion.p
                          className="text-[#a8b2d1] mb-6 text-lg leading-relaxed"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{
                            y: hoveredProject === project.id ? 0 : 30,
                            opacity: hoveredProject === project.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {project.description}
                        </motion.p>

                        {/* Technologies */}
                        <motion.div
                          className="flex flex-wrap gap-3 mb-8"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{
                            y: hoveredProject === project.id ? 0 : 30,
                            opacity: hoveredProject === project.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-[#64ffd9]/20 text-[#64ffd9] text-sm rounded-full border border-[#64ffd9]/30 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                      </div>

                      {/* Action Buttons */}
                      <motion.div
                        className="flex gap-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{
                          y: hoveredProject === project.id ? 0 : 30,
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#64ffd9] hover:bg-[#4fd1c7] text-[#0a192f] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight className="w-5 h-5 mr-2" />
                          View Project
                        </Link>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-[#64ffd9] text-[#64ffd9] hover:bg-[#64ffd9] hover:text-[#0a192f] font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              )
            })}
          </div>

          {/* Right side indicator - positioned absolute */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: "easeOut"
            }}
            viewport={{ amount: 0.3 }}
          >
            {/* Card indicator dots */}
            <div className="flex flex-col items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCardIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeCardIndex 
                      ? 'bg-[#64ffd9] h-6' 
                      : 'bg-[#64ffd9]/30 hover:bg-[#64ffd9]/50'
                  }`}
                />
              ))}
              
              {/* Counter */}
              <span className="mt-3 text-[#64ffd9]/60 text-xs font-poppins rotate-90 whitespace-nowrap">
                {activeCardIndex + 1} / {projects.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}