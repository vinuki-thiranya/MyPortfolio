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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0")

          if (entry.isIntersecting) {
            setVisibleProjects((prev) => {
              if (!prev.includes(projectId)) {
                return [...prev, projectId].sort((a, b) => a - b)
              }
              return prev
            })
          }
        })
      },
      {
        threshold: 0.01, // Extremely sensitive - triggers with minimal intersection
        rootMargin: "200px 0px 0px 0px", // Trigger cards before they're even visible
      },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Ensure first project is always visible when component mounts
  useEffect(() => {
    setVisibleProjects(prev => prev.includes(1) ? prev : [1, ...prev])
  }, [])

  return (
    <div id="work" className="bg-gradient-to-br from-[#0a192f] to-[#0f172a] min-h-screen relative">
      <style jsx>{`
        .last-card-locked {
          position: sticky !important;
          top: 260px !important;
          bottom: auto !important;
        }
        .last-card-locked:before {
          content: '';
          position: absolute;
          top: -260px;
          left: 0;
          right: 0;
          height: 260px;
          pointer-events: none;
        }
      `}</style>
      
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

      {/* Projects Container - Grid Layout */}
      <div ref={containerRef} className="relative px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto px-4 pb-16">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ amount: 0.3, once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden bg-white dark:bg-[#112240] border border-[#e2e8f0] dark:border-[#1e2b47] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl h-[400px]">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image?.endsWith('.mp4') ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      >
                        <source src={project.image} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 h-52 flex flex-col">
                    <h3 className="text-xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-3 line-clamp-2 group-hover:text-[#667eea] dark:group-hover:text-[#64ffd9] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#4a5568] dark:text-[#a8b2d1] text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 text-[#667eea] dark:text-[#64ffd9] text-xs rounded-full border border-[#667eea]/20 dark:border-[#64ffd9]/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-[#718096] text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#667eea] dark:bg-[#64ffd9] hover:bg-[#5a67d8] dark:hover:bg-[#4fd1c7] text-white dark:text-[#0a192f] font-medium text-sm rounded-lg transition-all duration-300 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        View
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-[#667eea] dark:border-[#64ffd9] text-[#667eea] dark:text-[#64ffd9] hover:bg-[#667eea] dark:hover:bg-[#64ffd9] hover:text-white dark:hover:text-[#0a192f] font-medium text-sm rounded-lg transition-all duration-300 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <motion.div
          className="mt-12 flex justify-end max-w-5xl mx-auto px-4"
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
            href="/projects" 
            className="group inline-flex items-center gap-2 text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm font-medium hover:text-[#4c51bf] dark:hover:text-[#4fd1c7] transition-colors duration-200 no-underline"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}