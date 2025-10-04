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
    technologies: ["C", "Flex (Lex)", "Bison (Yacc)", "Parsing", "Compiler Design"],
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
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinuki-thiranya/MyPortfolio",
    slug: "portfolio-website",
  },
]

export default function Work() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

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
        threshold: 0.2,
        rootMargin: "-100px 0px -100px 0px",
      },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div id="work" className="bg-gradient-to-br from-[#0a192f] to-[#0f172a] py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-[900px] mx-auto">
          {/* Section Heading */}
          <div>
            <motion.div 
              className="w-[250px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              Some Things I've Built
            </motion.div>
            
            <motion.h1 
              className="mt-2 mb-4 text-[#1a202c] dark:text-[#e6f1ff]/90 font-poppins text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            >
              projects
            </motion.h1>
            
            <motion.p 
              className="w-full mb-8 text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              Here are some selected projects I've worked on. Each represents unique challenges and solutions.
            </motion.p>
          </div>

      {/* Projects Container */}
      <div ref={containerRef} className="relative">
        <div className="max-w-5xl mx-auto px-4 pb-16">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { projectRefs.current[index] = el }}
                data-project-id={project.id}
                className={`project-card sticky transition-all duration-1000 ease-out ${
                  visibleProjects.includes(project.id)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-32 scale-90"
                }`}
                style={{
                  zIndex: index + 1,
                  top: `${20 + index * 4}px`,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden bg-white dark:bg-[#112240] border border-[#e2e8f0] dark:border-[#1e2b47] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl group cursor-pointer h-[500px]">
                  {/* Full Card Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
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
                      {/* Desktop: concise title only on hover (no description/techs) */}
                      <div className="hidden lg:block">
                        <motion.h3
                          className="text-4xl font-bold text-white mb-6"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                        >
                          {project.title}
                        </motion.h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}