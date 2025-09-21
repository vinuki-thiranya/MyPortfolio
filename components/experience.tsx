"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Experience() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      type: "Full-time",
      description: "Led development of responsive web applications using React, TypeScript, and modern CSS frameworks.",
      link: "https://company.com",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      type: "Full-time",
      description:
        "Developed and maintained client websites and web applications with focus on performance and accessibility.",
      link: "https://agency.com",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Contributed to various projects including e-commerce platforms and content management systems.",
      link: "https://startup.com",
    },
  ]

  return (
    <section className="flex pt-[150px] pb-0 justify-center items-center bg-white dark:bg-[#0a192f] transition-colors duration-300">
      <div className="w-full max-w-[900px] px-4">
        <motion.div
          className="tracking-normal leading-7 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-[200px] ml-[3px] border-b border-[#e2e8f0] dark:border-[#e6f1ff]/15 font-poppins text-[#2d3748] dark:text-[#e6f1ff] text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5">
            Where I've Worked
          </div>

          <h1 className="mt-5 mb-15 font-poppins text-[#1a202c] dark:text-[#e6f1ff]/90 text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold">
            Experience
          </h1>

          <p className="w-full max-w-[400px] text-[#4a5568] dark:text-[#e6f1ff]/80 font-poppins text-base leading-7 mb-20 mt-10">
            Here's a brief rundown of my most recent experiences and accomplishments.
          </p>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-7 border-b border-[#e2e8f0] dark:border-[#e6f1ff]/15 ${index === experiences.length - 1 ? "mb-0 border-b-0" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <a
                    href={exp.link}
                    className="flex items-center font-poppins text-[#5a67d8] dark:text-[#64ffd9]/80 no-underline hover:text-[#4c51bf] dark:hover:text-[#64ffd9] transition-colors"
                  >
                    <span>Visit Company</span>
                    <span className="ml-4 text-xs">→</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
