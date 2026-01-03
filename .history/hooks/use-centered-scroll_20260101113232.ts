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
    
    // Center the section in the viewport if requested or if it's the technologies section
    if (centerInViewport || sectionId === 'technologies') {
      const elementHeight = rect.height
      targetPosition = elementTop - (windowHeight - elementHeight) / 2
      
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

  return {
    scrollToSection,
    scrollToTechnologies
  }
}