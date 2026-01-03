"use client"

import { useCallback } from 'react'

export function useCenteredScroll() {
  const scrollToSection = useCallback((sectionId: string, centerInViewport = false) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const elementTop = scrollTop + rect.top
    const windowHeight = window.innerHeight
    
    let targetPosition = elementTop
    
    // Center the section in the viewport if requested or if it's a special section
    if (centerInViewport || sectionId === 'technologies' || sectionId === 'experience') {
      const elementHeight = rect.height
      const availableSpace = windowHeight - elementHeight
      
      // Center the section if there's enough space, otherwise align to top with some offset
      if (availableSpace > 0) {
        targetPosition = elementTop - availableSpace / 2
      } else {
        // If section is taller than viewport, align with small top offset
        targetPosition = elementTop - 50
      }
      
      // Ensure we don't scroll past the top of the page
      targetPosition = Math.max(0, targetPosition)
    }

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }, [])

  const scrollToTechnologies = useCallback(() => {
    scrollToSection('technologies', true)
  }, [scrollToSection])

  const scrollToExperience = useCallback(() => {
    scrollToSection('experience', true)
  }, [scrollToSection])

  return {
    scrollToSection,
    scrollToTechnologies,
    scrollToExperience
  }
}