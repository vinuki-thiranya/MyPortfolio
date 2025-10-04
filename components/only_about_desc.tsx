"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function OnlyAboutDesc() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    threshold: 0.3,
    margin: "-100px 0px"
  })

  const lines = [
    "I’m passionate about solving problems, exploring modern technologies, and designing user-friendly solutions that make a real impact. I enjoy learning continuously, working on innovative ideas, and creating experiences that bring value to both users and organizations",
    "",
    "    My goal is to grow professionally while contributing to meaningful projects that connect creativity with technology."
  ]

  return (
        <section className="flex pt-[150px] pb-[100px] justify-center items-center bg-[#f8fafc] dark:bg-[#0a192f] transition-colors duration-300">
      <div className="w-full max-w-[900px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
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
            className="mt-2.5 mb-6 text-[#1a202c] dark:text-[#e6f1ff]/90 font-poppins text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.3 }}
          >
            about me
          </motion.h1>

          <div className="space-y-2 mt-12" ref={ref}>
            {lines.map((line, index) => (
              <motion.div
                key={index}
                className={`${line === "" ? "h-4" : "text-[#4a5568] dark:text-[#e6f1ff]/70 font-poppins text-base leading-7"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
