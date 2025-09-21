"use client"

import { motion } from "framer-motion"

export default function Grid() {
  const cols = 6
  const rows = 3
  const totalTiles = cols * rows

  return (
    <motion.div
      className="absolute inset-0 z-[8] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full h-full grid grid-cols-6 grid-rows-3 gap-0">
        {Array.from({ length: totalTiles }).map((_, index) => {
          // Calculate row and column for sequential animation
          const row = Math.floor(index / cols)
          const col = index % cols
          const sequentialIndex = row * cols + col

          return (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#0a192f] border-0"
              initial={{ opacity: 0.95 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.0 + sequentialIndex * 0.15,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>
    </motion.div>
  )
}
