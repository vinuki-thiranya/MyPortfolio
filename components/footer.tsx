"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <>
      {/* Left Footer */}
      <motion.div
        className="hidden lg:block fixed left-15 top-auto right-auto bottom-0 z-[9] flex flex-col justify-end items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        <div className="w-px h-25 bg-[#e2e8f0] dark:bg-[#e6f1ff]/60" />
      </motion.div>

      {/* Right Footer */}
      <motion.div
        className="fixed right-12 bottom-0 z-[9] flex flex-col justify-end items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <div className="mb-24">
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
    </>
  )
}
