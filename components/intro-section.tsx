"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  const lines = [
    "Hi, I'm Vinuki, a designer and",
    "full-stack developer. With expertise",
    "in modern web technologies, I work",
    "with companies to create intuitive",
    "and engaging digital experiences",
    "that drive results."
  ]

  return (
    <section
      id="intro-section"
      ref={ref}
            className="min-h-screen flex items-center justify-center bg-[#0a192f] dark:bg-[#0a192f] py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Animated Lines */}
          <div className="space-y-2">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.4] text-white/90 overflow-hidden"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 0.3, 
                  ease: "easeOut" 
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>
          
          {/* Subtle accent line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#64ffd9] to-[#4fd1c7] mt-12 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: lines.length * 0.2 + 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  )
}