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

const projects: Project[] = [ /* SAME PROJECT DATA – UNCHANGED */ ]

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const fullyInView =
        rect.top <= 0 && rect.bottom >= window.innerHeight

      if (!fullyInView) return

      // ✅ Release scroll immediately at edges
      if (activeCardIndex === projects.length - 1 && e.deltaY > 0) return
      if (activeCardIndex === 0 && e.deltaY < 0) return

      // Lock scroll only when changing cards
      e.preventDefault()

      if (isAnimatingRef.current) return
      isAnimatingRef.current = true

      if (e.deltaY > 0 && activeCardIndex < projects.length - 1) {
        setActiveCardIndex(i => i + 1)
      }

      if (e.deltaY < 0 && activeCardIndex > 0) {
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
    <div
      id="work"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-[#0a192f] to-[#0f172a]"
    >
      {/* ================= HEADER ================= */}
      {/* SAME HEADER CODE – UNCHANGED */}

      {/* ================= CARD STACK ================= */}
      <div className="relative max-w-5xl mx-auto h-[320px] mt-20">
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
              style={{
                pointerEvents: isActive ? "auto" : "none",
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* ================= CARD CONTENT ================= */}
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

      {/* ================= INDICATOR ================= */}
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
    </div>
  )
}
