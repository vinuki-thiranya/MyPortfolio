"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Award, Code, GraduationCap, Download, Github, Linkedin, Instagram, Mail } from "lucide-react"
import { Poppins, Roboto_Mono } from 'next/font/google'

// Load fonts (matching home page)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export default function AboutPage() {
  return (
    <div className={`${poppins.variable} ${robotoMono.variable} min-h-screen bg-[#f8fafc] dark:bg-[#0a192f] transition-colors duration-300`}>
      {/* Navigation */}
      <motion.nav
        className="absolute left-12 top-12 right-12 z-[99] flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Logo */}
        <motion.div
          className="static w-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image src="/images/v-logo.png" alt="Logo" width={40} height={40} className="w-full h-auto" />
        </motion.div>

        {/* Navigation Items */}
        <div className="flex items-center gap-8">
          <Link 
            href="/projects" 
            className="font-poppins text-[#2d3748] dark:text-[#e6f1ff] text-sm font-medium hover:text-[#667eea] dark:hover:text-[#64ffd9] transition-colors duration-200"
          >
            PROJECTS
          </Link>
          <Link 
            href="/#technologies" 
            className="font-poppins text-[#2d3748] dark:text-[#e6f1ff] text-sm font-medium hover:text-[#667eea] dark:hover:text-[#64ffd9] transition-colors duration-200"
          >
            SKILLS
          </Link>
          <Link 
            href="/about" 
            className="font-poppins text-[#667eea] dark:text-[#64ffd9] text-sm font-medium hover:text-[#4c51bf] dark:hover:text-[#4fd1c7] transition-colors duration-200"
          >
            ABOUT
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section - Redesigned Split Layout */}
      <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a192f]/90 via-[#112240]/90 to-[#0a192f]/90">
        <div className="container mx-auto px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 xl:gap-32 items-center w-full max-w-6xl mx-auto">
            
            {/* Left Content */}
            <motion.div
              className="z-10 text-left lg:pr-12 xl:pr-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div 
                className="w-[150px] border-b-2 border-[#64ffd9] text-[#64ffd9] font-poppins text-sm font-semibold tracking-[2px] uppercase mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Get To Know Me
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                About
                <span className="text-[#64ffd9] block">Me</span>
              </motion.h1>
              
              <motion.p
                className="text-lg text-gray-300 font-poppins mb-8 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Passionate about solving problems, exploring modern technologies, and designing user-friendly solutions that make a real impact in the digital world.
              </motion.p>
              
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="px-6 py-3 bg-[#64ffd9]/10 border border-[#64ffd9]/30 rounded-lg">
                  <span className="text-[#64ffd9] font-medium text-sm">Computer Science Student</span>
                </div>
                <div className="px-6 py-3 bg-[#667eea]/10 border border-[#667eea]/30 rounded-lg">
                  <span className="text-[#667eea] font-medium text-sm">Full-Stack Developer</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div
              className="relative z-10 flex justify-center lg:justify-end lg:pl-8 xl:pl-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#64ffd9]/30 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-[#64ffd9]/20 to-[#667eea]/20 rounded-2xl -z-20"></div>
                
                {/* Main Image Container */}
                <div className="relative w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <Image
                    src="/images/about-hero-bg.jpg"
                    alt="Vinuki Thiranya - About Me"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Floating Stats Cards */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-[#0a192f]/90 backdrop-blur-sm border border-[#64ffd9]/30 rounded-xl p-3 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#64ffd9]">6+</div>
                      <div className="text-[10px] text-gray-300">Projects</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-[#0a192f]/90 backdrop-blur-sm border border-[#667eea]/30 rounded-xl p-3 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#667eea]">7+</div>
                      <div className="text-[10px] text-gray-300">Certificates</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#64ffd9]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#667eea]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Description Section */}
      <section id="description" className="py-20 bg-[#f8fafc]/80 dark:bg-[#0a192f]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full max-w-[900px] px-4">
            <div className="tracking-normal leading-7 text-left">
              <motion.div 
                className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                Get To Know Me
              </motion.div>

              <motion.h1
                className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight mb-16"
                data-cursor-target="true"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ cursor: "none", fontFamily: 'var(--font-poppins)' }}
              >
                Who I Am
              </motion.h1>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-6">
                <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-lg leading-8 text-left">
                  I'm passionate about solving problems, exploring modern technologies, and designing user-friendly solutions that make a real impact. I enjoy learning continuously, working on innovative ideas, and creating experiences that bring value to both users and organizations.
                </p>
                <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-lg leading-8 text-left">
                  My journey in software development has been driven by curiosity and a desire to create meaningful experiences. Whether it's building responsive web applications or optimizing user experiences, I approach each project with dedication and attention to detail.
                </p>
                <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-lg leading-8 text-left">
                  My goal is to grow professionally while contributing to meaningful projects that connect creativity with technology. I believe in the power of collaboration and continuous learning to drive innovation in the digital space.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white/30 dark:bg-[#0f1b2e]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full max-w-[900px] px-4">
            <div className="tracking-normal leading-7 text-left">
              <motion.div 
                className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                My Journey
              </motion.div>

              <motion.h1
                className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight mb-16"
                data-cursor-target="true"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ cursor: "none", fontFamily: 'var(--font-poppins)' }}
              >
                Education Timeline
              </motion.h1>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#667eea] to-[#64ffd9] dark:from-[#64ffd9] dark:to-[#667eea]"></div>
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                <div className="absolute left-6 top-2 w-4 h-4 bg-[#667eea] dark:bg-[#64ffd9] rounded-full border-4 border-[#f8fafc] dark:border-[#0a192f] shadow-lg"></div>
                
                <div className="bg-white/50 dark:bg-white/5 p-6 rounded-xl border border-[#e2e8f0]/30 dark:border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-[#667eea] dark:text-[#64ffd9]" />
                    <span className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm font-medium">May 2023 - April 2027</span>
                  </div>
                  <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-xl font-bold mb-2">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-base font-semibold mb-3">
                    Sri Lanka Institute of Information Technology, Malabe
                  </p>
                  <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7">
                    Currently pursuing Bachelor of Science in Computer Science with focus on software engineering, 
                    web development, and modern programming methodologies. Building strong foundation in computer science principles and practical application development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Software Engineering", "Web Development", "Database Systems", "Programming", "Computer Science"].map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 text-[#667eea] dark:text-[#64ffd9] font-poppins text-xs rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                <div className="absolute left-6 top-2 w-4 h-4 bg-[#667eea] dark:bg-[#64ffd9] rounded-full border-4 border-[#f8fafc] dark:border-[#0a192f] shadow-lg"></div>
                
                <div className="bg-white/50 dark:bg-white/5 p-6 rounded-xl border border-[#e2e8f0]/30 dark:border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-[#667eea] dark:text-[#64ffd9]" />
                    <span className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm font-medium">March 2023 - July 2023</span>
                  </div>
                  <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-xl font-bold mb-2">
                    English Language and Literature/Letters
                  </h4>
                  <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-base font-semibold mb-3">
                    Aquinas College of Higher Studies, Maradana Road, Colombo 08
                  </p>
                  <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7">
                    Completed advanced studies in English Language and Literature, enhancing communication skills, 
                    critical thinking, and analytical abilities essential for professional development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["English Literature", "Language Skills", "Communication", "Critical Thinking"].map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 text-[#667eea] dark:text-[#64ffd9] font-poppins text-xs rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-[#f8fafc]/80 dark:bg-[#0a192f]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full max-w-[900px] px-4">
            <div className="tracking-normal leading-7 text-left">
              <motion.div 
                className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                Achievements
              </motion.div>

              <motion.h1
                className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight mb-16"
                data-cursor-target="true"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ cursor: "none", fontFamily: 'var(--font-poppins)' }}
              >
                Certificates & Achievements
              </motion.h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development - 1. Web Design for Beginners */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-[#1a202c] rounded-2xl border border-[#e2e8f0] dark:border-[#2d3748] hover:shadow-2xl transition-all duration-300 h-64"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/certificates/Web Design for Beginners E-Certificate-image.png" 
                  alt="Web Design for Beginners Certificate" 
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                  <div>
                    <h4 className="text-white font-poppins text-lg font-bold mb-2">
                      Web Design for Beginners
                    </h4>
                    <p className="text-[#64ffd9] font-poppins text-xs mb-2 font-medium">
                      CODL-UOM • ID: 7cA831uYML
                    </p>
                    <p className="text-white/80 font-poppins text-xs leading-5">
                      Foundational course covering HTML, CSS, and responsive design principles for creating modern web interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Web Development - 2. Front-End Web Development */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-[#1a202c] rounded-2xl border border-[#e2e8f0] dark:border-[#2d3748] hover:shadow-2xl transition-all duration-300 h-64"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/certificates/Web Development - 2. Front-End Web Development-image.png" 
                  alt="Front-End Web Development Certificate" 
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                  <div>
                    <h4 className="text-white font-poppins text-lg font-bold mb-2">
                      Front-End Web Development
                    </h4>
                    <p className="text-[#64ffd9] font-poppins text-xs mb-2 font-medium">
                      CODL-UOM • ID: 1TCGBvh4nd
                    </p>
                    <p className="text-white/80 font-poppins text-xs leading-5">
                      Advanced front-end development covering JavaScript, frameworks, and modern development tools.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Postman API Fundamentals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-[#1a202c] rounded-2xl border border-[#e2e8f0] dark:border-[#2d3748] hover:shadow-2xl transition-all duration-300 h-64"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/certificates/Postman - Postman API Fundamentals Student Expert - 2025-01-06.png" 
                  alt="Postman Certificate" 
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                  <div>
                    <h4 className="text-white font-poppins text-lg font-bold mb-2">
                      API Fundamentals Student Expert
                    </h4>
                    <p className="text-[#64ffd9] font-poppins text-xs mb-2 font-medium">
                      Postman • Canvas Credentials (Badgr)
                    </p>
                    <p className="text-white/80 font-poppins text-xs leading-5">
                      Comprehensive training in API testing, documentation, and development using Postman platform.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Python for Beginners */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-[#1a202c] rounded-2xl border border-[#e2e8f0] dark:border-[#2d3748] hover:shadow-2xl transition-all duration-300 h-64"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/certificates/Python for Beginners E-Certificate-image.png" 
                  alt="Python for Beginners Certificate" 
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                  <div>
                    <h4 className="text-white font-poppins text-lg font-bold mb-2">
                      Python for Beginners
                    </h4>
                    <p className="text-[#64ffd9] font-poppins text-xs mb-2 font-medium">
                      CODL-UOM • ID: RfFZUXwGMU
                    </p>
                    <p className="text-white/80 font-poppins text-xs leading-5">
                      Introduction to Python programming language covering syntax, data structures, and basic algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Python Programming */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-[#1a202c] rounded-2xl border border-[#e2e8f0] dark:border-[#2d3748] hover:shadow-2xl transition-all duration-300 h-64"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/certificates/Python Programming-image.png" 
                  alt="Python Programming Certificate" 
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                  <div>
                    <h4 className="text-white font-poppins text-lg font-bold mb-2">
                      Python Programming
                    </h4>
                    <p className="text-[#64ffd9] font-poppins text-xs mb-2 font-medium">
                      CODL-UOM • ID: hitik80C6R
                    </p>
                    <p className="text-white/80 font-poppins text-xs leading-5">
                      Advanced Python programming covering object-oriented programming, libraries, and application development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Aviatrix Certified Engineer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-[#1a202c] rounded-2xl border border-[#e2e8f0] dark:border-[#2d3748] hover:shadow-2xl transition-all duration-300 h-64"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/certificates/multicloud-network-associate-certificate-image.png" 
                  alt="Aviatrix Multicloud Network Associate Certificate" 
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                  <div>
                    <h4 className="text-white font-poppins text-lg font-bold mb-2">
                      Multicloud Network Associate
                    </h4>
                    <p className="text-[#64ffd9] font-poppins text-xs mb-2 font-medium">
                      Aviatrix ACE • ID: 2025-28178
                    </p>
                    <p className="text-white/80 font-poppins text-xs leading-5">
                      Cloud networking certification covering multicloud architecture, security, and network operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Foundational C# with Microsoft */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-[#1a202c] rounded-2xl border border-[#e2e8f0] dark:border-[#2d3748] hover:shadow-2xl transition-all duration-300 h-64"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/certificates/multicloud-network-associate-certificate-image.png"
                  alt="Foundational C# with Microsoft Certificate" 
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-center">
                  <div>
                    <h4 className="text-white font-poppins text-lg font-bold mb-2">
                      Foundational C# with Microsoft
                    </h4>
                    <p className="text-[#64ffd9] font-poppins text-xs mb-2 font-medium">
                      freeCodeCamp • ID: vn_-fcswm
                    </p>
                    <p className="text-white/80 font-poppins text-xs leading-5">
                      Comprehensive foundation in C# programming fundamentals, covering syntax, object-oriented programming concepts, and Microsoft development practices.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/30 dark:bg-[#0f1b2e]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-full max-w-[900px] px-4">
            <div className="tracking-normal leading-7 text-left">
              <motion.div 
                className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                Expertise
              </motion.div>

              <motion.h1
                className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight mb-16"
                data-cursor-target="true"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ cursor: "none", fontFamily: 'var(--font-poppins)' }}
              >
                Technical Skills
              </motion.h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Frontend Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-white/5 p-8 rounded-2xl border border-[#e2e8f0]/30 dark:border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667eea] to-[#64ffd9] rounded-2xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-xl font-bold">
                  Frontend
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  { name: "React", level: "Advanced" },
                  { name: "Next.js", level: "Advanced" },
                  { name: "TypeScript", level: "Intermediate" },
                  { name: "Tailwind CSS", level: "Advanced" },
                  { name: "JavaScript", level: "Advanced" },
                  { name: "HTML/CSS", level: "Expert" },
                  { name: "Framer Motion", level: "Intermediate" }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 bg-white/30 dark:bg-white/5 rounded-lg border border-[#e2e8f0]/20 dark:border-white/5 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                  >
                    <span className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-xs font-medium px-2 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 rounded-full">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-white/5 p-8 rounded-2xl border border-[#e2e8f0]/30 dark:border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#64ffd9] to-[#667eea] rounded-2xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-xl font-bold">
                  Backend
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Node.js", level: "Intermediate" },
                  { name: "Express.js", level: "Intermediate" },
                  { name: "Python", level: "Advanced" },
                  { name: "Django", level: "Beginner" },
                  { name: "PostgreSQL", level: "Intermediate" },
                  { name: "MongoDB", level: "Intermediate" },
                  { name: "REST APIs", level: "Advanced" }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 bg-white/30 dark:bg-white/5 rounded-lg border border-[#e2e8f0]/20 dark:border-white/5 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                  >
                    <span className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-xs font-medium px-2 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 rounded-full">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-white/5 p-8 rounded-2xl border border-[#e2e8f0]/30 dark:border-white/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#667eea] via-[#64ffd9] to-[#667eea] rounded-2xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-xl font-bold">
                  Tools & Platforms
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Git & GitHub", level: "Advanced" },
                  { name: "VS Code", level: "Expert" },
                  { name: "Vercel", level: "Advanced" },
                  { name: "Figma", level: "Intermediate" },
                  { name: "Firebase", level: "Intermediate" },
                  { name: "Netlify", level: "Intermediate" },
                  { name: "Postman", level: "Advanced" }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 bg-white/30 dark:bg-white/5 rounded-lg border border-[#e2e8f0]/20 dark:border-white/5 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                  >
                    <span className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-xs font-medium px-2 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 rounded-full">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Left Social Icons */}
      <motion.div
        className="fixed left-12 bottom-0 z-[9] hidden lg:flex flex-col items-center justify-end mx-1.5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="flex flex-col items-center gap-6 mb-12">
          <motion.a
            href="https://linkedin.com/in/vinuki-thiranya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-6 h-6 justify-center items-center text-[#e6f1ff]/60 hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-200 no-underline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://github.com/vinuki-thiranya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-6 h-6 justify-center items-center text-[#e6f1ff]/60 hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-200 no-underline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://instagram.com/vinuki-thiranya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-6 h-6 justify-center items-center text-[#e6f1ff]/60 hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-200 no-underline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
        </div>
        <div className="w-px h-24 bg-[#e6f1ff]/60" />
      </motion.div>

      {/* Right Email */}
      <motion.div
        className="fixed right-12 bottom-0 z-[9] hidden lg:flex flex-col justify-end items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="mb-12">
          <a
            href="mailto:vtkatugampala@gmail.com"
            className="font-poppins text-[#718096] dark:text-[#e6f1ff]/60 text-sm no-underline hover:text-[#5a67d8] dark:hover:text-[#64ffd9] hover:-translate-y-1 transition-all duration-400 block"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            vtkatugampala@gmail.com
          </a>
        </div>
        <div className="w-px h-24 bg-[#e2e8f0] dark:bg-[#e6f1ff]/60" />
      </motion.div>

      {/* Footer */}
      <footer className="bg-[#0a192f] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="font-poppins text-[#e6f1ff]/30 text-sm mb-4 md:mb-0">
              © 2025 . VN For You . All Rights Reserved
            </div>

            <div className="flex gap-8">
              <Link
                href="/style-guide"
                className="font-poppins text-[#e6f1ff]/30 text-sm no-underline hover:text-[#e6f1ff]/60 transition-colors"
              >
                Style Guide
              </Link>
              <Link
                href="/image-licenses"
                className="font-poppins text-[#e6f1ff]/30 text-sm no-underline hover:text-[#e6f1ff]/60 transition-colors"
              >
                Image Licenses
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
