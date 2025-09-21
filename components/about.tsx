"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: "Description" },
    { id: 1, label: "Education" },
    { id: 2, label: "Certificates" },
    { id: 3, label: "Skills" },
  ]

  const content = {
    0: {
      title: "About Me",
      content: (
        <div className="space-y-6">
          <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7">
            I'm a passionate full-stack developer with over 5 years of experience creating digital experiences that
            combine beautiful design with robust functionality. I specialize in modern web technologies and have a keen
            eye for detail.
          </p>
          <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating
            user-centered solutions.
          </p>
          <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7">
            My goal is to bridge the gap between design and development, creating seamless experiences that users love
            and businesses value.
          </p>
        </div>
      ),
    },
    1: {
      title: "Education",
      content: (
        <div className="space-y-8">
          <div className="border-l-2 border-[#667eea] dark:border-[#64ffd9] pl-6">
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-lg font-semibold mb-2">
              Bachelor of Computer Science
            </h4>
            <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm mb-2">
              University of Technology • 2018-2022
            </p>
            <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-sm leading-6">
              Graduated with honors, specializing in software engineering and web development. Completed capstone
              project on modern web applications.
            </p>
          </div>
          <div className="border-l-2 border-[#667eea] dark:border-[#64ffd9] pl-6">
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-lg font-semibold mb-2">
              Full Stack Web Development Bootcamp
            </h4>
            <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm mb-2">Tech Academy • 2017</p>
            <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-sm leading-6">
              Intensive 6-month program covering modern web technologies, databases, and deployment strategies.
            </p>
          </div>
        </div>
      ),
    },
    2: {
      title: "Certificates",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 dark:bg-white/5 p-4 rounded-lg border border-[#e2e8f0]/30 dark:border-white/10">
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-base font-semibold mb-2">
              AWS Certified Developer
            </h4>
            <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm mb-2">Amazon Web Services • 2023</p>
            <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-sm">
              Associate level certification for developing applications on AWS platform.
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 p-4 rounded-lg border border-[#e2e8f0]/30 dark:border-white/10">
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-base font-semibold mb-2">
              Google Cloud Professional
            </h4>
            <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm mb-2">Google Cloud • 2023</p>
            <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-sm">
              Professional Cloud Developer certification for GCP services.
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 p-4 rounded-lg border border-[#e2e8f0]/30 dark:border-white/10">
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-base font-semibold mb-2">
              React Developer Certification
            </h4>
            <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm mb-2">Meta • 2022</p>
            <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-sm">
              Advanced React development patterns and best practices.
            </p>
          </div>
          <div className="bg-white/10 dark:bg-white/5 p-4 rounded-lg border border-[#e2e8f0]/30 dark:border-white/10">
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-base font-semibold mb-2">
              MongoDB Developer
            </h4>
            <p className="text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm mb-2">MongoDB Inc. • 2022</p>
            <p className="text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-sm">
              Database design and optimization for modern applications.
            </p>
          </div>
        </div>
      ),
    },
    3: {
      title: "Skills",
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-lg font-semibold mb-4">
              Frontend Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular", "SASS/SCSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm rounded-full border border-[#667eea]/20 dark:border-[#64ffd9]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-lg font-semibold mb-4">
              Backend Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm rounded-full border border-[#667eea]/20 dark:border-[#64ffd9]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-lg font-semibold mb-4">
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-3">
              {["Git", "Docker", "AWS", "Vercel", "Figma", "Webflow", "Firebase"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#667eea]/10 dark:bg-[#64ffd9]/10 text-[#667eea] dark:text-[#64ffd9] font-poppins text-sm rounded-full border border-[#667eea]/20 dark:border-[#64ffd9]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <section className="flex pt-[150px] pb-0 justify-center items-center bg-[#f8fafc] dark:bg-[#0a192f] transition-colors duration-300">
      <div className="w-full max-w-[900px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5">
            Get To Know Me
          </div>

          <h1 className="mt-2.5 mb-6 text-[#1a202c] dark:text-[#e6f1ff]/90 font-poppins text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold">
            about me
          </h1>

          <p className="w-full mb-12 text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7">
            Discover more about my background, education, and expertise.
          </p>
        </motion.div>

        {/* Tab Navigation and Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#e2e8f0] dark:border-[#e6f1ff]/15">
            {tabs.map((tab) => (
              <div key={tab.id} onMouseEnter={() => setActiveTab(tab.id)} className="relative group">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-poppins text-sm font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? "text-[#667eea] dark:text-[#64ffd9] border-[#667eea] dark:border-[#64ffd9]"
                      : "text-[#718096] dark:text-[#e6f1ff]/60 border-transparent hover:text-[#4a5568] dark:hover:text-[#e6f1ff]/80"
                  }`}
                >
                  {tab.label}
                </button>
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div
            onMouseEnter={() => setActiveTab(activeTab)}
            onMouseLeave={() => {}} // Keep content visible when hovering over it
          >
            <motion.div
              key={activeTab}
              className="min-h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-2xl font-semibold mb-8">
                {content[activeTab].title}
              </h2>
              {content[activeTab].content}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
