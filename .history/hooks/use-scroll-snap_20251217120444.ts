"use client"

import { useEffect, useCallback, useRef } from 'react'

interface UseScrollSnapOptions {
  threshold?: number
  duration?: number
}

export function useScrollSnap(options: UseScrollSnapOptions = {}) {
  const { threshold = 50, duration = 800 } = options
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const lastScrollTopRef = useRef(0)
  const sectionsRef = useRef<HTMLElement[]>([])

  const updateSections = useCallback(() => {
    // Find all sections with data-scroll-section attribute
    const sections = document.querySelectorAll('[data-scroll-section]')
    sectionsRef.current = Array.from(sections) as HTMLElement[]
  }, [])

  const getCurrentSection = useCallback(() => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const viewportCenter = scrollTop + windowHeight / 2

    let currentIndex = 0
    let minDistance = Infinity

    sectionsRef.current.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const sectionTop = scrollTop + rect.top
      const sectionCenter = sectionTop + rect.height / 2
      const distance = Math.abs(viewportCenter - sectionCenter)

      if (distance < minDistance) {
        minDistance = distance
        currentIndex = index
      }
    })

    return currentIndex
  }, [])

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionsRef.current.length) return

    const section = sectionsRef.current[index]
    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const sectionTop = scrollTop + rect.top

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })
  }, [])

  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return

    const currentScrollTop = window.pageYOffset
    const scrollDelta = currentScrollTop - lastScrollTopRef.current
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Set a timeout to detect when scrolling has stopped
    scrollTimeoutRef.current = setTimeout(() => {
      if (Math.abs(scrollDelta) > threshold) {
        isScrollingRef.current = true
        
        const currentSectionIndex = getCurrentSection()
        let targetIndex = currentSectionIndex

        // Determine scroll direction and target section
        if (scrollDelta > 0) {
          // Scrolling down
          targetIndex = Math.min(currentSectionIndex + 1, sectionsRef.current.length - 1)
        } else {
          // Scrolling up
          targetIndex = Math.max(currentSectionIndex - 1, 0)
        }

        // Scroll to target section
        scrollToSection(targetIndex)

        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrollingRef.current = false
          lastScrollTopRef.current = window.pageYOffset
        }, duration)
      }
    }, 150) // Wait 150ms after scroll stops

    lastScrollTopRef.current = currentScrollTop
  }, [threshold, duration, getCurrentSection, scrollToSection])

  useEffect(() => {
    updateSections()
    lastScrollTopRef.current = window.pageYOffset

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Update sections on resize
    window.addEventListener('resize', updateSections)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateSections)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll, updateSections])

  return {
    scrollToSection,
    getCurrentSection
  }
}