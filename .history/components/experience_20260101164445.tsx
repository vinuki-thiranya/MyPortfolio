"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Experience() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const experiences = [
    {
      title: "The Art of Code Architecture",
      company: "Core Programming & System Design",
      period: "Academic & Project Experience",
      type: "Expertise Area",
      description: "My journey began with mastering the art of writing elegant code in Java and Python, where I learned to think like an architect - building robust systems with Object-Oriented Programming principles at their core. I don't just write code; I craft maintainable, scalable solutions that stand the test of time. From designing system architectures to implementing seamless CI/CD workflows, I approach every challenge with both technical precision and creative problem-solving.",
      skills: ["Java", "Python", "OOP", "Clean Code", "System Design", "Agile", "Git"],
      link: "#",
    },
    {
      title: "Algorithmic Problem Solving",
      company: "Computational Thinking & Optimization",
      period: "Continuous Practice & Application",
      type: "Technical Skills",
      description: "I see data structures and algorithms as the building blocks of computational thinking - each array, tree, and graph telling its own story of efficiency and elegance. My passion lies in transforming complex problems into optimized solutions, whether it's navigating intricate graph traversals or designing lightning-fast sorting algorithms. I've developed an intuitive understanding of when to deploy which structure, turning theoretical complexity into practical performance gains that make applications sing.",
      skills: ["DSA", "Big-O Analysis", "Problem Solving", "Optimization", "BFS/DFS", "Sorting Algorithms"],
      link: "#",
    },
    {
      title: "Data Storytelling & Database Design",
      company: "Intelligent Data Management",
      period: "Academic & Project Implementation",
      type: "System Design",
      description: "Data tells stories, and I've learned to be its storyteller. I approach database design as crafting the perfect narrative structure - where every table, relationship, and index serves a purpose in the larger story. From orchestrating complex joins that reveal hidden insights to designing ETL processes that transform raw data into actionable intelligence, I build databases that don't just store information but empower decision-making and drive business value.",
      skills: ["SQL", "Database Design", "CRUD", "Joins", "Indexing", "Data Modeling", "ETL"],
      link: "#",
    },
    {
      title: "Full-Stack Craftsmanship",
      company: "Web Technologies & API Integration",
      period: "Hands-on Project Experience",
      type: "Technical Skills",
      description: "Building applications is my canvas, and full-stack development is my art. I love the dance between frontend elegance and backend power - creating interfaces that feel intuitive while engineering robust APIs that work tirelessly behind the scenes. From e-commerce platforms that handle real transactions to domain-specific applications that solve real-world problems, I bridge the gap between user experience and technical excellence, crafting digital experiences that users love and systems that scale.",
      skills: ["HTML/CSS/JS", "React", "Spring Boot", "REST APIs", "PHP", "Bootstrap"],
      link: "#",
    },
    {
      title: "Developer's Workshop",
      company: "Professional Workflow & Collaboration",
      period: "Project & Team Experience",
      type: "Best Practices",
      description: "Great software isn't built in isolation - it's a symphony of collaboration, precision, and continuous improvement. I've embraced the rhythm of Agile development, where every sprint tells a story of progress and every standup strengthens team alignment. Mastering tools like Git and modern IDEs has taught me that the true art of development lies not just in writing code, but in crafting workflows that enable creativity, ensure quality, and foster teamwork that turns ambitious ideas into shipped products.",
      skills: ["Git/GitHub", "IntelliJ", "VS Code", "Debugging", "Agile", "Sprints"],
      link: "#",
    },
  ]

  return (
    <section className="flex py-[80px] justify-center items-center bg-white dark:bg-[#0a192f] transition-colors duration-300 min-h-screen" id="experience">
      <div className="w-full max-w-[900px] px-4 text-center">
         <div className="tracking-normal leading-7 text-left">
          
           <motion.div 
             className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ amount: 0.3 }}
           >
             My Tech Journey
           </motion.div>

            <motion.h1
              className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
              data-cursor-target="true"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 2.4 }}
              style={{ cursor: "none", fontFamily: 'var(--font-playfair), var(--font-inter)' }}
            >
              My Journey
            </motion.h1>

          <motion.p 
            className="w-full max-w-[4000px] text-[#4a5568] dark:text-[#e6f1ff]/80 font-poppins text-base leading-7 mb-20 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ threshold: 0.3 }}
          >
            Every line of code tells a story. Here's mine - a journey of transforming complex challenges 
            into elegant solutions, one algorithm at a time.
          </motion.p>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-7 border-b border-[#e2e8f0] dark:border-[#e6f1ff]/15 ${index === experiences.length - 1 ? "mb-0 border-b-0" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.2 }}
            >
              <div
                className="flex justify-between cursor-pointer pb-7 items-end"
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                onMouseEnter={() => setOpenAccordion(index)}
                onMouseLeave={() => setOpenAccordion(null)}
              >
                <div className="flex-1 my-1">
                  <h3 className="mb-1 font-poppins text-[#2d3748] dark:text-[#e6f1ff]/90 text-xl font-medium mt-0 px-0 border-0">
                    {exp.title}
                  </h3>
                  <div className="font-poppins text-[#718096] dark:text-[#e6f1ff]/60 text-sm">
                    {exp.company} • {exp.period}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-poppins text-[#5a67d8] dark:text-[#64ffd9]/80 text-sm">{exp.type}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#718096] dark:text-[#e6f1ff]/60 transition-transform ${
                      openAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  height: openAccordion === index ? "auto" : 0,
                  opacity: openAccordion === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mt-7 pb-7">
                  <p className="mb-5 font-poppins text-[#4a5568] dark:text-[#e6f1ff]/70 text-base leading-7 italic">
                    {exp.description}
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-[#667eea]/10 dark:bg-[#64ffda]/10 text-[#667eea] dark:text-[#64ffda] text-xs font-medium rounded-full border border-[#667eea]/20 dark:border-[#64ffda]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center font-poppins text-[#5a67d8] dark:text-[#64ffd9]/80 text-sm">
                    <span>Core Competency Area</span>
                    <span className="ml-4 text-xs">✓</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}