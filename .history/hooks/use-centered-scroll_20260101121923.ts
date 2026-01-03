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
    
    // Center the section in the viewport if requested or if it's the technologies/experience section
    if (centerInViewport || sectionId === 'technologies' || sectionId === 'experience') {
      const elementHeight = rect.height
      // Center the section by positioning it so that the middle of the section aligns with the middle of the viewport
      targetPosition = elementTop - (windowHeight / 2) + (elementHeight / 2)
      
      // Ensure we don't scroll past the top of the page
      targetPosition = Math.max(0, targetPosition)
      
      // Ensure we don't scroll past the bottom of the page
      const maxScrollTop = document.documentElement.scrollHeight - windowHeight
      targetPosition = Math.min(targetPosition, maxScrollTop)
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