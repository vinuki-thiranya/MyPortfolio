"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Github, Monitor, Square, TrendingUp, CheckCircle, Code, Calendar, Users } from "lucide-react"

// Project data
const projectsData = {
  "ecommerce-platform": {
    id: 1,
    title: "E-COMMERCE PLATFORM",
    subtitle: "COMPREHENSIVE ONLINE STORE",
    description: "A comprehensive e-commerce platform built with modern technologies, featuring user authentication, payment processing, inventory management, and an intuitive admin dashboard.",
    fullDescription: "At this e-commerce project, my role involved building a complete online retail solution with advanced features and scalable architecture. The platform required consistent user experience across all devices with an effective strategy to manage high traffic volumes.",
    detailedDescription: "The e-commerce platform required sophisticated payment processing with seamless user experience and comprehensive inventory management to handle rapid business growth.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
    skills: ["User Authentication", "Payment Processing", "Inventory Management", "Admin Dashboard", "SEO Optimization"],
    liveUrl: "https://ecommerce-example.com",
    githubUrl: "https://github.com/user/ecommerce",
    timeline: "3 months",
    role: "Full Stack Developer",
    teamSize: "4 developers",
    results: [
      { title: "User Authentication", icon: "users" },
      { title: "Payment Integration", icon: "payment" },
      { title: "Performance", icon: "growth" }
    ]
  },
  "task-management-app": {
    id: 2,
    title: "TASK MANAGEMENT",
    subtitle: "COLLABORATIVE WORKSPACE",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built for modern teams.",
    fullDescription: "At this task management project, my role involved creating a collaborative workspace with real-time synchronization and intuitive user experience. The application required seamless team coordination with effective project management capabilities.",
    detailedDescription: "The task management app required real-time collaboration features with drag-and-drop functionality to streamline team productivity and project coordination.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Vue.js", "Firebase", "Vuetify", "WebSocket", "PWA"],
    skills: ["Real-time Collaboration", "Drag & Drop", "Team Management", "Project Planning", "Offline Sync"],
    liveUrl: "https://taskapp-example.com",
    githubUrl: "https://github.com/user/taskapp",
    timeline: "2 months",
    role: "Frontend Developer",
    teamSize: "3 developers",
    results: [
      { title: "Real-time Sync", icon: "sync" },
      { title: "Team Collaboration", icon: "team" },
      { title: "Productivity", icon: "growth" }
    ]
  },
  "fitness-tracker": {
    id: 6,
    title: "FITNESS TRACKER",
    subtitle: "COMPREHENSIVE HEALTH PLATFORM",
    description: "A comprehensive fitness tracking application that helps users monitor workouts, track progress, and achieve fitness goals with detailed analytics and insights.",
    fullDescription: "At this fitness tracking project, my role involved building a comprehensive health platform with advanced analytics and user-friendly interfaces. The application required detailed progress tracking with effective motivation strategies.",
    detailedDescription: "The fitness tracker required sophisticated data visualization with seamless user experience and comprehensive health monitoring to help users achieve their fitness goals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["TypeScript", "Chart.js", "Firebase", "React", "Material-UI"],
    skills: ["Data Visualization", "Progress Tracking", "Goal Setting", "Social Features", "Device Integration"],
    liveUrl: "https://fitness-example.com",
    githubUrl: "https://github.com/user/fitness-tracker",
    timeline: "2.5 months",
    role: "Full Stack Developer",
    teamSize: "2 developers",
    results: [
      { title: "Progress Analytics", icon: "analytics" },
      { title: "Goal Achievement", icon: "goal" },
      { title: "User Engagement", icon: "growth" }
    ]
  }
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  const otherProjects = Object.entries(projectsData)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 2)
    .map(([slug, data]) => ({ ...data, slug }))

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Fixed Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/images/v-logo.png" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
            </Link>
            <Link href="/" className="text-white font-medium hover:text-[#64ffd9] transition-colors">
              Home
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white/20 bg-transparent hover:bg-white/10"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white/20 bg-transparent hover:bg-white/10"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6">
        {/* Project Hero Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-left mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-2xl text-[#64ffd9] mb-8 font-medium">
                {project.subtitle}
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                {project.detailedDescription}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-4">
                {project.skills.map((skill, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Images Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tight">RESULTS</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            {project.results.map((result, index) => (
              <motion.div 
                key={index}
                className="space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto bg-[#64ffd9]/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-[#64ffd9]" />
                </div>
                <h3 className="text-2xl font-bold">{result.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white border-0 overflow-hidden">
              <div className="p-8">
                <h3 className="text-black text-lg font-semibold mb-6">Technologies Used</h3>
                <div className="grid md:grid-cols-6 gap-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="space-y-4 text-center">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <Code className="h-8 w-8 text-gray-600" />
                      </div>
                      <h4 className="text-black font-medium text-sm">{tech}</h4>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visit site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View Code <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* More Projects Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-8xl md:text-9xl font-black tracking-tight mb-8">MORE WORK</h1>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {otherProjects.map((otherProject, index) => (
              <motion.div
                key={otherProject.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${otherProject.slug}`}>
                  <Card className="bg-gray-100 border-0 overflow-hidden hover:bg-gray-200 transition-colors group cursor-pointer">
                    <div className="p-8">
                      <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">{otherProject.title}</h3>
                      <p className="text-gray-600 mb-6">{otherProject.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {otherProject.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black/10 text-black text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Footer */}
        <section className="mb-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
            <div className="mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-white/20 bg-transparent hover:bg-white/10"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400 space-y-2">
            <p>© 2019 . WebDev For You . All Rights Reserved</p>
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/style-guide" className="hover:text-[#64ffd9] transition-colors">
                Style Guide
              </Link>
              <Link href="/image-licenses" className="hover:text-[#64ffd9] transition-colors">
                Image Licenses
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
