"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Github, Monitor, Square, TrendingUp, CheckCircle, Code, Calendar, Users } from "lucide-react"
import Contact from '@/components/contact'
import { getProjectBySlug, getOtherProjects } from '@/data'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params as { slug: string }
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Get other projects for "More Work" section
  const otherProjects = getOtherProjects(slug, 2)

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
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="border border-white/20 text-white hover:bg-white/10 bg-transparent px-3 py-1 text-sm rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Images/Video Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto px-8 md:px-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl mx-2">
                {project.hasVideo ? (
                  // YouTube video for projects with video
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} Demo Video`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  // Regular image for other projects
                  <Image
                    src={project.image}
                    alt={`${project.title} main showcase`}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Details */}
        {project.caseStudy && (
          <section className="mb-20">
            <motion.div
              className="max-w-4xl mx-auto space-y-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-[#64ffd9] mb-4">Case Study</p>
                <h2 className="text-5xl font-black mb-4">Project Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.caseStudy.overview}
                </p>
              </div>

              {project.caseStudy.pipeline && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white/90">The project follows a complete compiler pipeline:</h3>
                  <ul className="grid gap-3 text-gray-300 text-lg">
                    {project.caseStudy.pipeline.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="text-[#64ffd9] text-xl">{item.step}</span> – {item.description}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-gray-500">
                    This approach ensures that invalid or incomplete form definitions are detected early, reducing runtime issues and improving developer feedback.
                  </p>
                </div>
              )}

              {project.caseStudy.problems && (
                <div className="space-y-4">
                  <h2 className="text-5xl font-black mb-4">User Problems & Motivation</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Traditional HTML form creation often leads to:
                  </p>
                  <ul className="grid gap-2 text-gray-300 text-lg">
                    {project.caseStudy.problems.map((problem, index) => (
                      <li key={index}> - {problem}</li>
                    ))}
                  </ul>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    FORMLANG++ addresses these challenges by providing a higher-level abstraction that focuses on what the form should contain, rather than how it should be implemented in HTML.
                  </p>
                </div>
              )}

              {project.caseStudy.solutions && (
                <div className="space-y-6">
                  <h2 className="text-5xl font-black mb-4">Key Solutions Implemented</h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      { title: "Problem", body: project.caseStudy.solutions.problem },
                      { title: "Solution", body: project.caseStudy.solutions.solution },
                      { title: "Impact", body: project.caseStudy.solutions.impact }
                    ].map((column) => (
                      <div key={column.title} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                        <p className="text-lg uppercase tracking-[0.3em] text-[#64ffd9]">{column.title}</p>
                        <div className="space-y-2 text-gray-200 text-lg">
                          {column.body.map((item, index) => (
                            <p key={index} className="leading-relaxed">{item}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.caseStudy.technicalImplementation && (
                <div className="space-y-4">
                  <h2 className="text-5xl font-black mb-4">Technical Implementation</h2>
                  <p className="text-gray-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: project.caseStudy.technicalImplementation.description }} />
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Semantic analysis ensures that:
                  </p>
                  <ul className="grid gap-2 text-gray-200 text-lg">
                    {project.caseStudy.technicalImplementation.semanticAnalysis.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The final code generation phase traverses the AST to produce structured, standards-compliant HTML5 with embedded validation attributes. Robust error handling provides meaningful compiler messages, helping users quickly identify and fix issues in their .form files.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    This project strengthened practical understanding of:
                  </p>
                  <ul className="grid gap-2 text-gray-200 text-lg">
                    {project.caseStudy.technicalImplementation.learningOutcomes.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.caseStudy.learningOutcomes && (
                <div className="space-y-6">
                  <h2 className="text-5xl font-black mb-4">Results & Learning Outcomes</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      { title: "Area", body: project.caseStudy.learningOutcomes.areas },
                      { title: "Outcome", body: project.caseStudy.learningOutcomes.outcomes }
                    ].map((column) => (
                      <div key={column.title} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                        <p className="text-lg uppercase tracking-[0.3em] text-[#64ffd9]">{column.title}</p>
                        <div className="space-y-2 text-gray-200 text-lg">
                          {column.body.map((item, index) => (
                            <p key={index} className="leading-relaxed">{item}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.caseStudy.conclusion && (
                <>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    FORMLANG++ successfully demonstrates how compiler theory can be applied to solve real-world development problems, transforming abstract concepts into a practical engineering solution.
                  </p>

                  <h2 className="text-5xl font-black mb-4">Conclusion & Key Takeaways</h2>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.caseStudy.conclusion}
                  </p>
                </>
              )}
            </motion.div>
          </section>
        )}

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

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center px-8">
            {project.results.map((result, index) => (
              <motion.div 
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 mx-auto bg-[#64ffd9]/20 rounded-md flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-[#64ffd9]" />
                </div>
                <h3 className="text-xl font-semibold">{result.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-4">TECH STACK</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools used to bring this project to life
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#0a192f]/80 border border-[#64ffd9]/20 backdrop-blur-sm overflow-hidden rounded-xl">
                <div className="p-12">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-[#64ffd9]/10 hover:bg-[#64ffd9]/20 rounded-lg p-3 text-center transition-all duration-200 border border-[#64ffd9]/10 hover:border-[#64ffd9]/30">
                          <div className="w-10 h-10 mx-auto mb-3 bg-[#64ffd9]/20 rounded-md flex items-center justify-center group-hover:bg-[#64ffd9]/30 transition-all duration-200">
                            <Code className="h-5 w-5 text-[#64ffd9]" />
                          </div>
                          <h4 className="text-white font-medium text-xs group-hover:text-[#64ffd9] transition-colors duration-200">
                            {tech}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-[#64ffd9]/20">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-[#64ffd9] text-[#64ffd9] hover:bg-[#64ffd9] hover:text-[#0a192f] bg-transparent transition-all duration-200 px-4 py-2 text-sm rounded-lg flex items-center"
                      >
                        <Monitor className="mr-2 h-4 w-4" />
                        Visit Live
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-[#64ffd9] text-[#64ffd9] hover:bg-[#64ffd9] hover:text-[#0a192f] bg-transparent transition-all duration-200 px-4 py-2 text-sm rounded-lg flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-8">
            {otherProjects.map((otherProject, index) => (
              <motion.div
                key={otherProject.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${otherProject.slug}`}>
                  <div className="bg-gray-100 border-0 overflow-hidden hover:bg-gray-200 transition-colors group cursor-pointer rounded-xl">
                    <div className="p-4">
                      <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">{otherProject.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{otherProject.description}</p>
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
                  </div>
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
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white/20 bg-transparent hover:bg-white/10 p-2 rounded-lg inline-block"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="flex mt-24 md:mt-32 justify-between items-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#e6f1ff]/30 text-sm">© 2025 . VN For You . All Rights Reserved</div>

              <div className="flex justify-end items-center gap-8">
                <a
                  href="/style-guide"
                  className="text-[#e6f1ff]/30 text-sm no-underline hover:text-[#e6f1ff]/60 transition-colors"
                >
                  Style Guide
                </a>
                <a
                  href=""
                  className="text-[#e6f1ff]/30 text-sm no-underline hover:text-[#e6f1ff]/60 transition-colors"
                >
                  Image Licenses
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}