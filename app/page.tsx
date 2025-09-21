'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/hero'
import Technologies from '@/components/technologies'
import About from '@/components/about'
import Experience from '@/components/experience'
import Work from '@/components/work'
import Contact from '@/components/contact'
import Entry from '@/components/entry'
import FloatingStars from '@/components/FloatingStars' // Import the new component

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [loadingStep, setLoadingStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingStep(1), 100)  // Start #64FED8 fall
    const timer2 = setTimeout(() => setLoadingStep(2), 700)  // Start final #0a192f fall
    const timer3 = setTimeout(() => setLoading(false), 1700) // End loading

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0a192f]" // Base background
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            {/* #64FED8 falling layer */}
            {loadingStep >= 1 && (
              <motion.div
                className="absolute inset-0 bg-[#64FED8]"
                initial={{ y: '-100%' }}
                animate={{
                  y: 0
                }}
                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }} // Starts slow, falls fast
              />
            )}

            {/* Final #0a192f layer */}
            {loadingStep >= 2 && (
              <motion.div
                className="absolute inset-0 bg-[#0a192f]"
                initial={{ y: '-100%' }}
                animate={{
                  y: 0
                }}
                transition={{ duration: 0.9, ease: 'easeIn' }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add the floating stars background */}
      <FloatingStars />

      {/* Main site */}
      <div >
        <Hero />
        <Work />
        <Entry />
        <About />
        <Experience />
        <Technologies />
        <Contact />
      </div>
    </>
  )
}