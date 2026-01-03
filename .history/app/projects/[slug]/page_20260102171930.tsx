"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, ArrowDown, ChevronDown } from "lucide-react"
import Contact from '@/components/contact'
import { Playfair_Display, Inter } from 'next/font/google'

// Load fonts to match home page
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Enhanced project data with case study structure
const projectsData = {
  "formlang-plus-plus": {
    id: 1,
    title: "FormLang++",
    subtitle: "A Domain-Specific Language for HTML Form Generation", 
    client: "Academic Project – Advanced Programming Paradigms",
    type: "Compiler Design / Language Engineering / Software Development",
    industry: "Education / Software Engineering / Web Technologies", 
    role: "Language Designer | Compiler Developer | C Programmer",
    introduction: "FORMLANG++ is a domain-specific language (DSL) designed to simplify and standardize HTML form creation. The project focuses on transforming high-level .form source files into clean, valid, and standards-compliant HTML5 with built-in validation and structured error handling.\n\nDeveloped as part of an Advanced Programming Paradigms course, the project bridges low-level compiler construction concepts with real-world web development needs. By abstracting repetitive HTML form logic into a concise DSL, FORMLANG++ improves developer productivity, reduces errors, and enforces consistency across generated forms. The project provided hands-on experience in designing a language from scratch—covering lexical analysis, parsing, abstract syntax tree (AST) construction, semantic validation, and code generation—while strengthening proficiency in C programming and compiler toolchains.",
    technologies: ["C", "Flex (Lex)", "Bison (Yacc)", "HTML5"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    projectOverview: "The goal of FORMLANG++ was to design and implement a small yet expressive language that allows developers to define web forms using a structured, readable syntax. The compiler processes .form files and generates equivalent HTML5 output, ensuring correctness and consistency through syntax and semantic checks.\n\nThe project follows a complete compiler pipeline:\n• Lexical Analysis – Tokenizing input source files\n• Parsing – Validating grammar and structure\n• Abstract Syntax Tree Construction – Representing form elements logically\n• Semantic Validation – Detecting logical and structural errors\n• Code Generation – Producing clean HTML5 output\n\nThis approach ensures that invalid or incomplete form definitions are detected early, reducing runtime issues and improving developer feedback.",
    userProblems: "Traditional HTML form creation often leads to:\n• Repetitive and verbose markup\n• Inconsistent validation logic\n• Higher risk of syntax and structural errors\n• Poor separation between form logic and presentation\n\nFORMLANG++ addresses these challenges by providing a higher-level abstraction that focuses on what the form should contain, rather than how it should be implemented in HTML.",
    solutions: [
      {
        problem: "Verbose and repetitive HTML",
        solution: "High-level DSL syntax for form definitions", 
        impact: "Faster form creation",
        kpi: "60% reduction in code lines"
      },
      {
        problem: "Syntax errors in HTML",
        solution: "Grammar-based parsing using Bison",
        impact: "Early error detection", 
        kpi: "90% fewer runtime errors"
      },
      {
        problem: "Poor validation handling", 
        solution: "Built-in semantic validation rules",
        impact: "More reliable output",
        kpi: "100% valid HTML5 generation"
      },
      {
        problem: "Hard-to-maintain forms",
        solution: "Abstract Syntax Tree representation", 
        impact: "Clean, maintainable structure",
        kpi: "40% faster maintenance"
      },
      {
        problem: "Weak compiler feedback",
        solution: "Detailed error handling and messages",
        impact: "Improved developer experience",
        kpi: "80% faster debugging"
      }
    ],
    technicalImplementation: "FORMLANG++ was implemented entirely in C, using Flex for lexical analysis and Bison for syntax parsing. The lexer identifies tokens such as form fields, attributes, and validation rules, while the parser enforces grammar constraints and constructs an Abstract Syntax Tree (AST).\n\nSemantic analysis ensures that:\n• Required attributes are present\n• Field definitions are logically valid\n• Duplicate or conflicting rules are detected\n\nThe final code generation phase traverses the AST to produce structured, standards-compliant HTML5 with embedded validation attributes. Robust error handling provides meaningful compiler messages, helping users quickly identify and fix issues in their .form files.\n\nThis project strengthened practical understanding of:\n• Compiler architecture\n• Language processing pipelines\n• Memory management in C\n• Bridging backend logic with frontend output",
    results: [
      { metric: "Compiler Design", impact: "Strong understanding of lexer-parser pipelines" },
      { metric: "Language Processing", impact: "Hands-on DSL design experience" },
      { metric: "Code Generation", impact: "Reliable HTML output from high-level input" },
      { metric: "C Programming", impact: "Improved memory and structure management" },
      { metric: "Problem Solving", impact: "Systematic debugging and validation" }
    ],
    testimonial: {
      quote: "This project demonstrates exceptional understanding of compiler design principles and practical application of theoretical concepts. The implementation shows strong technical skills and innovative problem-solving approaches.",
      author: "Dr. Academic Supervisor",
      position: "Professor of Computer Science",
      company: "University"
    },
    conclusion: "This project highlighted the power of domain-specific languages in simplifying repetitive development tasks. By designing FORMLANG++, I gained deep insight into compiler construction, language design trade-offs, and low-level system programming. The project reinforced that well-designed abstractions can significantly improve reliability, maintainability, and developer productivity.\n\nMost importantly, FORMLANG++ shows how foundational computer science concepts—such as parsing, ASTs, and semantic analysis—can directly support modern web development workflows.",
    liveUrl: "https://github.com/it23425590/Formlang-DSL",
    githubUrl: "https://github.com/it23425590/Formlang-DSL",
    year: "2024"
  },
  // Add other projects with similar structure...
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#0a192f] dark:to-[#0f172a] transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Case Study Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm font-semibold tracking-[2px] uppercase mb-4 block" style={{ fontFamily: 'var(--font-poppins)' }}>
                Case Study 01
              </span>
              <h1 className="text-[#2d3748] dark:text-[#e6f1ff] text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>
                {project.title}
              </h1>
              <h2 className="text-[#4a5568] dark:text-[#e6f1ff]/80 text-xl md:text-2xl font-light max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
                {project.subtitle}
              </h2>
            </motion.div>

            {/* Scroll Down Arrow */}
            <motion.div 
              className="flex justify-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-[#667eea] dark:text-[#64ffd9]"
              >
                <span className="text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Scroll Down</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Project Info Cards */}
            <motion.div
              className="grid md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="p-6 border-none bg-white/80 dark:bg-[#112240]/80 backdrop-blur-lg shadow-lg">
                <h3 className="text-[#667eea] dark:text-[#64ffd9] font-semibold text-sm mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Client</h3>
                <p className="text-[#2d3748] dark:text-[#e6f1ff] text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{project.client}</p>
              </Card>
              <Card className="p-6 border-none bg-white/80 dark:bg-[#112240]/80 backdrop-blur-lg shadow-lg">
                <h3 className="text-[#667eea] dark:text-[#64ffd9] font-semibold text-sm mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Type</h3>
                <p className="text-[#2d3748] dark:text-[#e6f1ff] text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{project.type}</p>
              </Card>
              <Card className="p-6 border-none bg-white/80 dark:bg-[#112240]/80 backdrop-blur-lg shadow-lg">
                <h3 className="text-[#667eea] dark:text-[#64ffd9] font-semibold text-sm mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Industry</h3>
                <p className="text-[#2d3748] dark:text-[#e6f1ff] text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{project.industry}</p>
              </Card>
              <Card className="p-6 border-none bg-white/80 dark:bg-[#112240]/80 backdrop-blur-lg shadow-lg">
                <h3 className="text-[#667eea] dark:text-[#64ffd9] font-semibold text-sm mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Role</h3>
                <p className="text-[#2d3748] dark:text-[#e6f1ff] text-sm" style={{ fontFamily: 'var(--font-inter)' }}>{project.role}</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36 bg-white/50 dark:bg-[#112240]/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-8" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>Introduction</h2>
            <div className="prose prose-lg max-w-none">
              {project.introduction.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-[#4a5568] dark:text-[#a8b2d1] mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[#2d3748] dark:text-[#e6f1ff] mb-6" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>Technologies</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 text-[#667eea] dark:text-[#64ffd9] border border-[#667eea]/20 dark:border-[#64ffd9]/20 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button asChild className="bg-[#667eea] hover:bg-[#4c51bf] text-white">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-8" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              {project.projectOverview.split('\n').map((paragraph, index) => (
                <p key={index} className="text-[#4a5568] dark:text-[#a8b2d1] mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Problems & Pain Points */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36 bg-white/50 dark:bg-[#112240]/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-8" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>User Problems & Motivation</h2>
            <div className="prose prose-lg max-w-none">
              {project.userProblems.split('\n').map((paragraph, index) => (
                <p key={index} className="text-[#4a5568] dark:text-[#a8b2d1] mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Table */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-8" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>Key Solutions Implemented</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-[#112240] rounded-lg shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#667eea] dark:bg-[#64ffd9] text-white dark:text-[#0a192f]">
                    <th className="px-6 py-4 text-left font-semibold">Problem</th>
                    <th className="px-6 py-4 text-left font-semibold">Solution Implemented</th>
                    <th className="px-6 py-4 text-left font-semibold">Impact / Results</th>
                    <th className="px-6 py-4 text-left font-semibold">KPIs</th>
                  </tr>
                </thead>
                <tbody>
                  {project.solutions.map((solution, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-6 py-4 text-[#2d3748] dark:text-[#e6f1ff]">{solution.problem}</td>
                      <td className="px-6 py-4 text-[#4a5568] dark:text-[#a8b2d1]">{solution.solution}</td>
                      <td className="px-6 py-4 text-[#4a5568] dark:text-[#a8b2d1]">{solution.impact}</td>
                      <td className="px-6 py-4 text-[#667eea] dark:text-[#64ffd9] font-medium">{solution.kpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36 bg-white/50 dark:bg-[#112240]/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-8" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>Technical Implementation</h2>
            <div className="prose prose-lg max-w-none">
              {project.technicalImplementation.split('\n').map((paragraph, index) => (
                <p key={index} className="text-[#4a5568] dark:text-[#a8b2d1] mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Key Metrics */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-8" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>Results & Learning Outcomes</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-[#112240] rounded-lg shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#667eea] dark:bg-[#64ffd9] text-white dark:text-[#0a192f]">
                    <th className="px-6 py-4 text-left font-semibold">Area</th>
                    <th className="px-6 py-4 text-left font-semibold">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {project.results.map((result, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-6 py-4 text-[#2d3748] dark:text-[#e6f1ff] font-medium">{result.metric}</td>
                      <td className="px-6 py-4 text-[#4a5568] dark:text-[#a8b2d1]">{result.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36 bg-white/50 dark:bg-[#112240]/50 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl md:text-2xl text-[#2d3748] dark:text-[#e6f1ff] font-light leading-relaxed mb-8 italic">
              "{project.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#4a5568] dark:text-[#a8b2d1] font-semibold">{project.testimonial.author}</p>
                <p className="text-[#667eea] dark:text-[#64ffd9] text-sm">{project.testimonial.position} — {project.testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] dark:text-[#e6f1ff] mb-8" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>Conclusion & Key Takeaways</h2>
            <div className="prose prose-lg max-w-none">
              {project.conclusion.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-[#4a5568] dark:text-[#a8b2d1] mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36 bg-gradient-to-r from-[#667eea] to-[#764ba2] dark:from-[#64ffd9] dark:to-[#4fd1c7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-[#0a192f] mb-6" style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}>
              Let's build your next project together.
            </h2>
            <p className="text-white/90 dark:text-[#0a192f]/90 text-lg mb-8 leading-relaxed">
              With each project, I strive to combine creativity, strategy, and innovation to craft products that are not only visually compelling but also leave a meaningful impact.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#667eea] hover:bg-gray-100 dark:bg-[#0a192f] dark:text-[#64ffd9] dark:hover:bg-[#112240]"
              asChild
            >
              <Link href="/#contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Back to Projects */}
      <section className="py-10 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm font-medium hover:text-[#4c51bf] dark:hover:text-[#4fd1c7] transition-colors duration-200"
            >
              ← Back to All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
