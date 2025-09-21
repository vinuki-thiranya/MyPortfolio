"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Github, ExternalLink, Calendar, Code, Users } from "lucide-react"

type ProjectDetail = {
  title: string
  description: string
  fullDescription: string
  tags: string[]
  image: string
  github?: string
  link?: string
  category: string
  features: string[]
  techStack: string[]
  challenges: string[]
  outcomes: string[]
  timeline: string
  role: string
  teamSize?: string
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-[98vw] h-[96vh] bg-[#0a192f] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-[#112240] hover:bg-[#1e2b47] rounded-full text-[#a8b2d1] hover:text-white transition-all duration-200"
            >
              <X size={20} />
            </motion.button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto h-full">
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Side - Image and Basic Info */}
                <div className="lg:w-2/5 relative">
                  {/* Hero Image - Increased height for larger modal */}
                  <div className="relative h-80 lg:h-[50vh] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-transparent" />
                  </div>

                  {/* Project Info Cards - Moved to left side */}
                  <div className="p-8">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="bg-[#112240] rounded-xl p-4">
                        <Calendar className="text-[#64ffd9] mb-2" size={20} />
                        <h3 className="text-white font-semibold mb-1 text-sm">Timeline</h3>
                        <p className="text-[#a8b2d1] text-sm">{project.timeline}</p>
                      </div>
                      <div className="bg-[#112240] rounded-xl p-4">
                        <Code className="text-[#64ffd9] mb-2" size={20} />
                        <h3 className="text-white font-semibold mb-1 text-sm">Role</h3>
                        <p className="text-[#a8b2d1] text-sm">{project.role}</p>
                      </div>
                      {project.teamSize && (
                        <div className="bg-[#112240] rounded-xl p-4">
                          <Users className="text-[#64ffd9] mb-2" size={20} />
                          <h3 className="text-white font-semibold mb-1 text-sm">Team Size</h3>
                          <p className="text-[#a8b2d1] text-sm">{project.teamSize}</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Right Side - Main Content */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  {/* Title and Description - Now prominently displayed */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">{project.title}</h1>
                    <p className="text-[#a8b2d1] text-xl mb-6">{project.description}</p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
                    <div className="text-[#a8b2d1] leading-relaxed whitespace-pre-line text-base lg:text-lg">
                      {project.fullDescription}
                    </div>
                  </motion.div>

                  {/* Tech Stack - Compact version */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-[#112240] text-[#64ffd9] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons - Moved up */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4 mb-8"
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-[#112240] hover:bg-[#1e2b47] text-white rounded-lg transition-all duration-200 text-base"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-[#64ffd9] hover:bg-[#4cbfb0] text-[#0a192f] rounded-lg transition-all duration-200 font-semibold text-base"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </motion.div>

                  {/* Features - Compact */}
                  <motion.details
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="group"
                  >
                    <summary className="text-xl font-bold text-white mb-3 cursor-pointer hover:text-[#64ffd9] transition-colors">
                      Key Features ▼
                    </summary>
                    <div className="mt-4 space-y-3">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#64ffd9] rounded-full mt-2 flex-shrink-0" />
                          <p className="text-[#a8b2d1] text-base">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </motion.details>

                  {/* Challenges - Collapsible */}
                  <motion.details
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="group"
                  >
                    <summary className="text-xl font-bold text-white mb-3 cursor-pointer hover:text-[#64ffd9] transition-colors">
                      Challenges & Solutions ▼
                    </summary>
                    <div className="mt-4 space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="bg-[#112240] rounded-lg p-5">
                          <p className="text-[#a8b2d1] text-base">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </motion.details>

                  {/* Outcomes - Collapsible */}
                  <motion.details
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="group"
                  >
                    <summary className="text-xl font-bold text-white mb-3 cursor-pointer hover:text-[#64ffd9] transition-colors">
                      Outcomes & Impact ▼
                    </summary>
                    <div className="mt-4 space-y-3">
                      {project.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#64ffd9] rounded-full mt-2 flex-shrink-0" />
                          <p className="text-[#a8b2d1] text-base">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </motion.details>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
