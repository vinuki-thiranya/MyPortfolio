"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
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
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce platform built with modern technologies, featuring user authentication, payment processing, inventory management, and an intuitive admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://ecommerce-example.com",
    githubUrl: "https://github.com/user/ecommerce",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built for modern teams.",
    image:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    liveUrl: "https://taskapp-example.com",
    githubUrl: "https://github.com/user/taskapp",
    slug: "task-management-app",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A comprehensive weather dashboard providing real-time weather data, 5-day forecasts, and location-based services with an intuitive and responsive interface.",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    technologies: ["React", "OpenWeather API", "Geolocation"],
    liveUrl: "https://weather-example.com",
    githubUrl: "https://github.com/user/weather-app",
    slug: "weather-dashboard",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern portfolio website with animated transitions, dark mode, responsive design, and interactive chatbot for enhanced user engagement.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio-example.com",
    githubUrl: "https://github.com/user/portfolio",
    slug: "portfolio-website",
  },
  {
    id: 5,
    title: "Recipe Finder",
    description:
      "A comprehensive recipe discovery application that helps users find, save, and plan meals with detailed nutritional information and smart search capabilities.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    technologies: ["JavaScript", "Edamam API", "Local Storage"],
    liveUrl: "https://recipes-example.com",
    githubUrl: "https://github.com/user/recipe-finder",
    slug: "recipe-finder",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness tracking application that helps users monitor workouts, track progress, and achieve their fitness goals with detailed analytics and insights.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    technologies: ["TypeScript", "Chart.js", "Firebase"],
    liveUrl: "https://fitness-example.com",
    githubUrl: "https://github.com/user/fitness-tracker",
    slug: "fitness-tracker",
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
     <div className="bg-gradient-to-br from-[#0a192f] to-[#0f172a] py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-[900px] mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-[400px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-4">
              Some Things I've Built
            </div>
            <h1 className="mt-2 mb-4 text-[#1a202c] dark:text-[#e6f1ff]/90 font-poppins text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold">
              my projects
            </h1>
            <p className="w-full mb-8 text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7">
              Here are some selected projects I've worked on. Each represents unique challenges and solutions.
            </p>
          </motion.div>

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