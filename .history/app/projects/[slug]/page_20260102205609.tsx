"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Monitor, CheckCircle, Code } from "lucide-react"
import Contact from '@/components/contact'

// Project data
const projectsData = {
  "formlang-plus-plus": {
    id: 1,
    title: "FORMLANG++",
        {params.slug === "formlang-plus-plus" && (
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
                <h2 className="text-5xl font-black mb-4">Case Study – FORMLANG++</h2>
                <h3 className="text-2xl font-semibold text-white/90 mb-3">Project Overview</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The goal of FORMLANG++ was to design and implement a small yet expressive language that allows developers to define web forms using a structured,
                  readable syntax. The compiler processes .form files and generates equivalent HTML5 output, ensuring correctness and consistency through syntax
                  and semantic checks.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90">Complete Compiler Pipeline</h3>
                <ul className="grid gap-2 text-gray-300">
                  <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Lexical Analysis</span> – Tokenizing input source files</li>
                  <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Parsing</span> – Validating grammar and structure</li>
                  <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Abstract Syntax Tree Construction</span> – Representing form elements logically</li>
                  <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Semantic Validation</span> – Detecting logical and structural errors</li>
                  <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Code Generation</span> – Producing clean HTML5 output</span></li>
                </ul>
                <p className="text-sm text-gray-500">
                  This approach ensures that invalid or incomplete form definitions are detected early, reducing runtime issues and improving developer feedback.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90">User Problems & Motivation</h3>
                <ul className="grid gap-2 text-gray-300">
                  <li>Repetitive and verbose markup</li>
                  <li>Inconsistent validation logic</li>
                  <li>Higher risk of syntax and structural errors</li>
                  <li>Poor separation between form logic and presentation</li>
                </ul>
                <p className="text-sm text-gray-500">
                  FORMLANG++ addresses these challenges by providing a higher-level abstraction that focuses on what the form should contain, rather than how it should be implemented in HTML.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white/90">Key Solutions Implemented</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {[ ... same as before ... ]}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90">Technical Implementation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  ... same as before ...
                </p>
              </div>
            </motion.div>
          </section>
        )}

        {params.slug === "auto-service-management-system" && (
          <section className="mb-20">
            <motion.div ...> ... new block ...</motion.div>
          </section>
        )}
    ]
  },
  "portfolio-website": {
    id: 6,
    title: "PORTFOLIO WEBSITE",
    subtitle: "MODERN RESPONSIVE PORTFOLIO",
    description: "A modern portfolio website with animated transitions, dark mode, responsive design, and smooth scroll animations built with Next.js, TypeScript, and Framer Motion.",
    fullDescription: "This portfolio website showcases my projects, skills, and experience through an engaging and interactive user interface. Built with modern web technologies, it features smooth animations, responsive design, and optimized performance for enhanced user experience.",
    detailedDescription: "The website includes project detail pages with dynamic routing, scroll-triggered animations, and a comprehensive design system. Every component is carefully crafted to provide seamless navigation and visual appeal while maintaining excellent performance across all devices.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    skills: ["Frontend Development", "Responsive Design", "Animation", "Performance Optimization", "SEO", "Accessibility"],
    keyFeatures: [
      "Dark mode toggle with smooth transitions and persistent user preference",
      "Scroll-triggered animations using Framer Motion for enhanced engagement",
      "Fully responsive design optimized for all devices and screen sizes",
      "Dynamic project routing with detailed case study pages",
      "Optimized performance with lazy loading and image optimization",
      "Accessible navigation and semantic HTML structure"
    ],
    period: "Jan 2024 - Present",
    liveUrl: "#",
    githubUrl: "https://github.com/vinuki-thiranya/MyPortfolio",
    timeline: "Ongoing",
    role: "Full Stack Developer & Designer",
    teamSize: "Individual Project",
    results: [
      { title: "Modern Design", icon: "palette" },
      { title: "Performance", icon: "zap" },
      { title: "User Experience", icon: "smile" }
    ]
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  // Get other projects for "More Work" section
  const otherProjects = Object.values(projectsData)
    .filter(p => p.id !== project.id)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0a0f2a] text-white">
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
                {project.id === 1 ? (
                  // YouTube video for FormLang++ project
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/TE871Ws4tmw?autoplay=1&mute=1"
                      title="FormLang++ Demo Video"
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
                The goal of FORMLANG++ was to design and implement a small yet expressive language that allows developers to define web forms using a structured,
                readable syntax. The compiler processes .form files and generates equivalent HTML5 output, ensuring correctness and consistency through syntax
                and semantic checks.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white/90">The project follows a complete compiler pipeline:</h3>
              {params.slug === "formlang-plus-plus" && (
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
                      <h2 className="text-5xl font-black mb-4">Case Study – FORMLANG++</h2>
                      <h3 className="text-2xl font-semibold text-white/90 mb-3">Project Overview</h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        The goal of FORMLANG++ was to design and implement a small yet expressive language that allows developers to define web forms using a structured,
                        readable syntax. The compiler processes .form files and generates equivalent HTML5 output, ensuring correctness and consistency through syntax
                        and semantic checks.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">Complete Compiler Pipeline</h3>
                      <ul className="grid gap-2 text-gray-300">
                        <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Lexical Analysis</span> – Tokenizing input source files</li>
                        <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Parsing</span> – Validating grammar and structure</li>
                        <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Abstract Syntax Tree Construction</span> – Representing form elements logically</li>
                        <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Semantic Validation</span> – Detecting logical and structural errors</li>
                        <li className="flex items-start gap-3"><span className="text-[#64ffd9]">Code Generation</span> – Producing clean HTML5 output</li>
                      </ul>
                      <p className="text-sm text-gray-500">
                        This approach ensures that invalid or incomplete form definitions are detected early, reducing runtime issues and improving developer feedback.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">User Problems & Motivation</h3>
                      <ul className="grid gap-2 text-gray-300">
                        <li>Repetitive and verbose markup</li>
                        <li>Inconsistent validation logic</li>
                        <li>Higher risk of syntax and structural errors</li>
                        <li>Poor separation between form logic and presentation</li>
                      </ul>
                      <p className="text-sm text-gray-500">
                        FORMLANG++ addresses these challenges by providing a higher-level abstraction that focuses on what the form should contain, rather than how it should be implemented in HTML.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white/90">Key Solutions Implemented</h3>
                      <div className="grid gap-6 md:grid-cols-3">
                        {[
                          {
                            title: "Problem",
                            body: [
                              "Verbose and repetitive HTML",
                              "Syntax errors in HTML",
                              "Poor validation handling",
                              "Hard-to-maintain forms",
                              "Weak compiler feedback"
                            ]
                          },
                          {
                            title: "Solution",
                            body: [
                              "High-level DSL syntax for form definitions",
                              "Grammar-based parsing using Bison",
                              "Built-in semantic validation rules",
                              "Abstract Syntax Tree representation",
                              "Detailed error handling and messages"
                            ]
                          },
                          {
                            title: "Impact",
                            body: [
                              "Faster form creation",
                              "Early error detection",
                              "More reliable output",
                              "Clean, maintainable structure",
                              "Improved developer experience"
                            ]
                          }
                        ].map((column) => (
                          <div key={column.title} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#64ffd9]">{column.title}</p>
                            <div className="space-y-2 text-gray-200 text-sm">
                              {column.body.map((item) => (
                                <p key={item} className="text-sm leading-relaxed">{item}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">Technical Implementation</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        FORMLANG++ was implemented entirely in C, using Flex for lexical analysis and Bison for syntax parsing. The lexer identifies tokens such as form fields,
                        attributes, and validation rules, while the parser enforces grammar constraints and constructs an Abstract Syntax Tree (AST).
                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Semantic analysis ensures that required attributes are present, field definitions are logically valid, and duplicate or conflicting rules are detected.
                        The final code generation phase traverses the AST to produce structured, standards-compliant HTML5 with embedded validation attributes.
                        Robust error handling provides meaningful compiler messages, helping users quickly identify and fix issues in their .form files.
                      </p>
                      <ul className="grid gap-2 text-gray-200 text-sm">
                        <li>Required attributes are present</li>
                        <li>Field definitions are logically valid</li>
                        <li>Duplicate or conflicting rules are detected</li>
                      </ul>
                      <p className="text-sm text-gray-500">
                        This project strengthened practical understanding of compiler architecture, language processing pipelines, memory management in C, and bridging backend logic with frontend output.
                      </p>
                    </div>
                  </motion.div>
                </section>
              )}

              {params.slug === "auto-service-management-system" && (
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
                      <h2 className="text-5xl font-black mb-4">Case Study – AUTO SERVICE SPARE PARTS</h2>
                      <p className="text-2xl font-semibold text-white/90 mb-3">A Secure & Responsive Spare Parts Management Platform for Auto Service Shops</p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        The Auto Service Spare Parts Management System is a fully responsive web application designed to streamline spare part operations for an auto service shop in Dambulla.
                        The project focused on building a secure, scalable, and user-friendly platform that supports efficient spare part management, role-based access control, and smooth collaboration between staff and administrators.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Developed as part of a group project associated with SLIIT, the system combines modern frontend technologies with a robust backend architecture.
                        Security, authentication, and user experience were prioritized to ensure safe access to sensitive operations while maintaining a clean and intuitive interface across devices.
                        The application demonstrates practical implementation of full-stack development principles, secure authentication workflows, and team-based agile development practices.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">Technologies</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-[#0a192f]/70 p-4 text-gray-200">
                          <p className="text-sm uppercase tracking-[0.4em] text-[#64ffd9] mb-2">Frontend</p>
                          <p>React.js</p>
                          <p>Tailwind CSS</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-[#0a192f]/70 p-4 text-gray-200">
                          <p className="text-sm uppercase tracking-[0.4em] text-[#64ffd9] mb-2">Backend & Security</p>
                          <p>Java</p>
                          <p>Spring Boot</p>
                          <p>Spring Security</p>
                          <p>JWT (Access & Refresh Tokens)</p>
                          <p>MySQL</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-[#0a192f]/70 p-4 text-gray-200">
                          <p className="text-sm uppercase tracking-[0.4em] text-[#64ffd9] mb-2">Project Management</p>
                          <p>Jira</p>
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">Project Overview</h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Auto Service Dambulla required a modern web-based solution to manage spare parts, users, and administrative operations efficiently.
                        The system was designed to replace manual and fragmented workflows with a centralized digital platform that supports secure user access, clear role separation, and responsive usability.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        The project followed an agile development approach, with tasks managed using Jira and version control handled via GitHub.
                        The frontend delivers a responsive and modern UI, while the backend ensures secure API communication, authentication, and authorization.
                        Special attention was given to authentication workflows and user lifecycle management to protect system integrity and sensitive business data.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">User Research & Pain Points</h3>
                      <ul className="grid gap-2 text-gray-300 text-lg">
                        <li>Lack of secure authentication and role-based access</li>
                        <li>Manual user handling with no centralized control</li>
                        <li>Poor usability on mobile and smaller devices</li>
                        <li>No structured workflow for user verification and password recovery</li>
                        <li>Risk of unauthorized access to administrative functions</li>
                      </ul>
                      <p className="text-sm text-gray-500">
                        These issues highlighted the need for a secure, scalable, and responsive system with strong access control and user management features.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white/90">Key Solutions Implemented</h3>
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                        <table className="min-w-full divide-y divide-white/10 text-left text-gray-200">
                          <thead className="bg-white/5 text-xs uppercase tracking-[0.4em] text-[#64ffd9]">
                            <tr>
                              <th className="px-6 py-3">Problem</th>
                              <th className="px-6 py-3">Solution</th>
                              <th className="px-6 py-3">Impact / Results</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {[
                              {
                                problem: "Insecure access",
                                solution: "JWT-based authentication with Spring Security",
                                impact: "Secure stateless sessions"
                              },
                              {
                                problem: "No role separation",
                                solution: "Role-based authorization (Admin / Staff)",
                                impact: "Controlled access to features"
                              },
                              {
                                problem: "Manual user handling",
                                solution: "Admin-level user management (CRUD)",
                                impact: "Centralized user control"
                              },
                              {
                                problem: "Weak password recovery",
                                solution: "Token-based email verification & reset",
                                impact: "Improved account security"
                              },
                              {
                                problem: "Poor mobile usability",
                                solution: "Fully responsive UI with Tailwind CSS",
                                impact: "Better accessibility across devices"
                              }
                            ].map((row) => (
                              <tr key={row.problem} className="bg-[#0a192f] even:bg-[#0a192f]/80">
                                <td className="px-6 py-4 font-semibold text-white/90">{row.problem}</td>
                                <td className="px-6 py-4 text-gray-300">{row.solution}</td>
                                <td className="px-6 py-4 text-gray-300">{row.impact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">My Role – Authentication & User Management Module</h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        As a key contributor, I was responsible for designing and implementing the Authentication & User Management Module, covering backend development and frontend integration.
                      </p>
                      <ul className="grid gap-2 text-gray-200 text-base">
                        <li>Developed secure user registration and login using Spring Boot and JWT-based stateless authentication</li>
                        <li>Implemented access tokens and refresh tokens to manage secure session lifecycles</li>
                        <li>Integrated email verification workflows during user signup using tokenized email links</li>
                        <li>Built password reset functionality with secure, time-bound tokens</li>
                        <li>Designed and enforced role-based authorization for admin and staff users</li>
                        <li>Managed the complete JWT token lifecycle, including generation, validation, and renewal</li>
                        <li>Implemented centralized exception handling for stable APIs and meaningful error responses</li>
                        <li>Developed admin-level user management features, enabling full CRUD operations on user accounts</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">Technical Implementation</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        The backend was built using Spring Boot and Spring Security, following RESTful API principles and clean architecture practices.
                        JWT was used for stateless authentication, ensuring scalability and secure communication between the frontend and backend.
                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        The frontend was developed using React.js and styled with Tailwind CSS, delivering a modern, responsive interface optimized for both desktop and mobile devices.
                        Authentication flows were tightly integrated with the backend APIs to ensure smooth user experiences during login, registration, verification, and password recovery.
                        Project coordination and task tracking were managed using Jira for efficient team collaboration.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white/90">Results & Key Outcomes</h3>
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                        <table className="min-w-full divide-y divide-white/10 text-left text-gray-200">
                          <thead className="bg-white/5 text-xs uppercase tracking-[0.4em] text-[#64ffd9]">
                            <tr>
                              <th className="px-6 py-3">Metric</th>
                              <th className="px-6 py-3">Impact</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            {[
                              { metric: "Security", impact: "Strong authentication and authorization enforcement" },
                              { metric: "Usability", impact: "Fully responsive UI across all devices" },
                              { metric: "Maintainability", impact: "Modular backend architecture" },
                              { metric: "Collaboration", impact: "Improved team coordination via Jira" },
                              { metric: "Reliability", impact: "Stable APIs with centralized error handling" }
                            ].map((row) => (
                              <tr key={row.metric} className="bg-[#0a192f] even:bg-[#0a192f]/80">
                                <td className="px-6 py-4 font-semibold text-white/90">{row.metric}</td>
                                <td className="px-6 py-4 text-gray-300">{row.impact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white/90">Conclusion & Key Takeaways</h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        This project strengthened practical understanding of secure full-stack application development, especially around authentication, authorization, and backend integration.
                        Building a complete JWT-based security flow reinforced the importance of protecting user data and enforcing access control in real-world systems.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        The project also highlighted the value of teamwork, agile development, and clean system design when building scalable applications.
                        Overall, the Auto Service Spare Parts Management System demonstrates the ability to design and implement secure backend solutions while collaborating effectively within a full-stack development team.
                      </p>
                    </div>
                  </motion.div>
                </section>
              )}
                      "- Problem Solving"
                    ]
                  },
                  {
                    title: "Outcome",
                    body: [
                      "- Strong understanding of lexer-parser pipelines",
                      "- Hands-on DSL design experience",
                      "- Reliable HTML output from high-level input",
                      "- Improved memory and structure management",
                      "- Systematic debugging and validation"
                    ]
                  },
                ].map((column) => (
                  <div key={column.title} className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-lg uppercase tracking-[0.3em] text-[#64ffd9]">{column.title}</p>
                    <div className="space-y-2 text-gray-200 text-lg">
                      {column.body.map((item) => (
                        <p key={item} className="leading-relaxed">{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

             <p className="text-gray-300 text-lg leading-relaxed">
                FORMLANG++ successfully demonstrates how compiler theory can be applied to solve real-world development problems, transforming abstract concepts into a practical engineering solution.
              </p>

                <h2 className="text-5xl font-black mb-4">Conclusion & Key Takeaways</h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                This project highlighted the power of domain-specific languages in simplifying repetitive development tasks. By designing FORMLANG++, I gained deep insight into compiler construction, language design trade-offs, and low-level system programming. The project reinforced that well-designed abstractions can significantly improve reliability, maintainability, and developer productivity.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Most importantly, FORMLANG++ shows how foundational computer science concepts—such as parsing, ASTs, and semantic analysis—can directly support modern web development workflows.
              </p>




          </motion.div>
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