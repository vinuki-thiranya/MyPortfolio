"use client"

import { motion } from "framer-motion"

export default function IntroDarkSection() {
  return (
    <section className="bg-[#0a192f] dark:bg-[#0a192f] py-20 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Large Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight">
              Hi, I'm Vinuki,
              <br />a designer and
              <br />
              full-stack developer.
            </h2>
          </motion.div>

          {/* Right Column - Smaller Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center"
          >
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              With expertise in modern web technologies, I work with companies to create intuitive and
              engaging digital experiences that drive results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}