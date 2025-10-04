"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Experience() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const experiences = [
    {
      title: "Software Engineering",
      company: "Core Foundation & Architecture",
      period: "Academic & Project Experience",
      type: "Expertise Area",
      description: "I have a solid foundation in core software engineering principles, including Object-Oriented Programming (OOP), Data Structures & Algorithms, and Design Patterns, which I apply to build efficient and maintainable solutions. My experience includes system design and architecture, creating scalable applications with RESTful API design and database-backed services. I am skilled in Agile & Scrum methodologies, Git-based version control, and have practical exposure to CI/CD workflows for smooth software delivery.",
      link: "#",
    },
    {
      title: "Web & Application Development",
      company: "Full-Stack Development Lifecycle",
      period: "Hands-on Project Experience",
      type: "Technical Skills",
      description: "My expertise covers the full-stack development lifecycle, from designing databases and backends with Spring Boot, PHP, and SQL, to building responsive frontends with React, Next.js, and Bootstrap. I have worked on e-commerce and domain-specific platforms (floral shop, pineapple store, spare parts shop), ensuring features such as authentication, order management, and event booking workflows. Performance, maintainability, and user experience are core aspects of my development approach.",
      link: "#",
    },
    {
      title: "Data & Systems",
      company: "Database Design & Distributed Systems",
      period: "Academic & Lab Implementation",
      type: "System Design",
      description: "I have hands-on experience with database design, data modeling, and ETL concepts, applying them in real-world systems to ensure data integrity, consistency, and reliability. My academic background also covers distributed systems concepts such as replication, fault tolerance, and consensus, which I have explored through coursework and lab-based implementations.",
      link: "#",
    },
    {
      title: "AI & Applied Machine Learning",
      company: "NLP & AI-Powered Applications",
      period: "Project Applications",
      type: "Emerging Tech",
      description: "While not my primary focus, I have applied AI concepts in projects, particularly in Natural Language Processing (NLP) and AI-powered applications. This includes integrating Gemini AI for generating customized interview questions and applying data preprocessing and evaluation techniques to deliver practical, user-facing solutions.",
      link: "#",
    },
  ]

  return (
    <section className="flex pt-[150px] pb-0 justify-center items-center bg-white dark:bg-[#0a192f] transition-colors duration-300">
      <div className="w-full max-w-[900px] px-4">
         <div className="tracking-normal leading-7 text-left">
          

           <motion.div 
                      className="w-[200px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ amount: 0.3 }}
                    >
                       What I’ve Learned
                    </motion.div>



           
            <motion.h1 
              className="mt-2 mb-4 text-[#1a202c] dark:text-[#e6f1ff]/90 font-poppins text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            >
              
            </motion.h1>
            <motion.h1
            className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
            data-cursor-target="true"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 2.4 }}

            style={{ cursor: "none", fontFamily: 'var(--font-playfair), var(--font-inter)' }}>
              {"Experience"}
              </motion.h1>

          <motion.p 
            className="w-full max-w-[4000px] text-[#4a5568] dark:text-[#e6f1ff]/80 font-poppins text-base leading-7 mb-20 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ threshold: 0.3 }}
          >
            Here's a brief rundown of my  experiences and skills.
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
                  <p className="mb-5 font-poppins text-[#4a5568] dark:text-[#e6f1ff]/70 text-base leading-7">
                    {exp.description}
                  </p>
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
