'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/hero'
import MouseAnimationSection from '@/components/mouse-animation-section'
import IntroSection from '@/components/intro-section'
import IntroDarkSection from '@/components/intro-dark-section'
import Technologies from '@/components/technologies'
import About from '@/components/about'
import OnlyAboutDesc from '@/components/only_about_desc'
import Experience from '@/components/experience'
import Work from '@/components/work'
import Contact from '@/components/contact'
import Entry from '@/components/entry'
import ScrollSnapContainer from '@/components/scroll-snap-container'


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
   

      {/* Main site */}
      <ScrollSnapContainer threshold={30} duration={1000}>
        {/* Hero Section */}
        <div data-scroll-section id="hero">
          <Hero />
        </div>
        
        {/* Mouse Animation Section (transition) */}
        <div id="mouse-animation">
          <MouseAnimationSection />
        </div>
        
        {/* About Me Section */}
        <div data-scroll-section id="about">
          <OnlyAboutDesc />
        </div>
        
        {/* Featured Projects Header */}
        <div data-scroll-section id="work-header">
          <Work showHeaderOnly={true} />
        </div>
        
        {/* Individual Project Cards as separate scroll sections */}
        <div data-scroll-section id="project-1">
          <Work showProjectOnly={0} />
        </div>
        <div data-scroll-section id="project-2">
          <Work showProjectOnly={1} />
        </div>
        <div data-scroll-section id="project-3">
          <Work showProjectOnly={2} />
        </div>
        <div data-scroll-section id="project-4">
          <Work showProjectOnly={3} />
        </div>
        <div data-scroll-section id="project-5">
          <Work showProjectOnly={4} />
        </div>
        <div data-scroll-section id="project-6">
          <Work showProjectOnly={5} />
        </div>
        
        {/* My Journey Section */}
        <div data-scroll-section id="experience" className="scroll-section-journey">
          <Experience />
        </div>
        
        {/* My Tools & Skills Section */}
        <div data-scroll-section id="technologies">
          <Technologies />
        </div>
        
        {/* Contact Section */}
        <div data-scroll-section id="contact">
          <Contact />
        </div>
      </ScrollSnapContainer>
    </>
  )
}