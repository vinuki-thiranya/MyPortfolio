"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ArrowUpRight } from "lucide-react"

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
      "Developed a domain-specific language (DSL) called FormLang++ to simplify and automate creating dynamic, validated HTML forms using a declarative, human-readable syntax.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    technologies: ["C", "Flex", "Bison"],
    liveUrl: "#",
    githubUrl: "https://github.com/it23425590/Formlang-DSL",
    slug: "formlang-plus-plus",
  },
  {
    id: 2,
    title: "Auto Service Spare Parts Management System",
    description:
      "A full-stack web app to streamline spare parts management with secure authentication and admin controls.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
    technologies: ["React", "Spring Boot", "JWT", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "auto-service",
  },
  {
    id: 3,
    title: "Distributed Logging System",
    description:
      "Fault-tolerant distributed logging system with time synchronization and failure handling.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Python", "FastAPI", "Distributed Systems"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "distributed-logging",
  },
  {
    id: 4,
    title: "Dogwood Flora – Online Floral Shop",
    description:
      "Full-stack floral shop system with product management and customer views.",
    image: "/images/dogwood-project-card.mp4",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "dogwood-flora",
  },
  {
    id: 5,
    title: "INTELLIHELMET",
    description:
      "Smart safety helmet with IoT sensors and real-time monitoring dashboard.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    technologies: ["Arduino", "IoT"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "intellihelmet",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built using Next.js and Framer Motion.",
    image: "/images/portfolio project card.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "portfolio",
  },
]

export default function Work() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const sectionRef = useRef<HTMLDivElement>(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()

      // ✅ Lock ONLY when section fully occupies viewport
      const fullyPinned =
        rect.top <= 0 && rect.bottom >= window.innerHeight

      if (!fullyPinned) return

      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0

      // ✅ HARD RELEASE at boundaries
      if (
        (activeCardIndex === projects.length - 1 && scrollingDown) ||
        (activeCardIndex === 0 && scrollingUp)
      ) {
        return
      }

      e.preventDefault()

      if (isAnimatingRef.current) return
      isAnimatingRef.current = true

      if (scrollingDown && activeCardIndex < projects.length - 1) {
        setActiveCardIndex(i => i + 1)
      }

      if (scrollingUp && activeCardIndex > 0) {
        setActiveCardIndex(i => i - 1)
      }

      setTimeout(() => {
        isAnimatingRef.current = false
      }, 600)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [activeCardIndex])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative min-h-screen bg-gradient-to-br from-[#0a192f] to-[#0f172a]"
    >
      {/* HEADER */}
      <div className="sticky top-0 z-40 pt-16 pb-8 px-10">
        <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
        <p className="text-white/60 mt-4">
          Some selected works I’ve built recently.
        </p>
      </div>

      {/* CARD STACK */}
      <div className="relative max-w-5xl mx-auto px-4 h-[340px]">
        {projects.map((project, index) => {
          const isActive = index === activeCardIndex

          return (
            <motion.div
              key={project.id}
              className="absolute inset-0"
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : index < activeCardIndex ? -120 : 120,
                scale: isActive ? 1 : 0.95,
                zIndex: isActive ? 20 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ pointerEvents: isActive ? "auto" : "none" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                {project.image.endsWith(".mp4") ? (
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
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* INDICATOR */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveCardIndex(i)}
            className={`w-2 rounded-full transition-all ${
              i === activeCardIndex
                ? "h-6 bg-[#64ffd9]"
                : "h-2 bg-[#64ffd9]/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
