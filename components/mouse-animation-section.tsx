"use client"

import { useState, useEffect } from "react"

export default function MouseAnimationSection() {
  const [isVisible, setIsVisible] = useState(true)

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#intro-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle scroll-based visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show when at top (0-200px) or when scrolled back to top area
      if (scrollPosition < 200) {
        setIsVisible(true)
      } else if (scrollPosition > windowHeight * 0.5) {
        // Hide when scrolled down significantly
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
        <section className="relative h-64 bg-[#0a192f] flex items-center justify-center">
      {/* Mouse Animation */}
      <div className="cursor-pointer group" onClick={scrollToNextSection}>
        <div className="relative">
          {/* Mouse Body with subtle pulse animation */}
          <div className="w-8 h-12 border-2 border-white/60 rounded-full relative group-hover:border-white/80 transition-colors flex justify-center animate-[mousePulse_3s_ease-in-out_infinite]">
            {/* Mouse Dot/Wheel - Larger and centered */}
            <div className="absolute bottom-2 w-2 h-2 bg-white/80 rounded-full animate-[scrollDot_2s_infinite]" />
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            transform: translateY(-16px);
            opacity: 0;
          }
          100% {
            transform: translateY(-16px);
            opacity: 0;
          }
        }
        
        @keyframes mousePulse {
          0% {
            transform: translateY(0);
            border-color: rgba(255, 255, 255, 0.6);
          }
          50% {
            transform: translateY(-5px);
            border-color: rgba(255, 255, 255, 0.8);
          }
          100% {
            transform: translateY(0);
            border-color: rgba(255, 255, 255, 0.6);
          }
        }
      `}</style>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  )
}