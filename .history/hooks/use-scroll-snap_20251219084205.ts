"use client"

import { useEffect, useCallback, useRef } from 'react'

interface UseScrollSnapOptions {
  threshold?: number
  duration?: number
}

export function useScrollSnap(options: UseScrollSnapOptions = {}) {
  const { threshold = 30, duration = 1000 } = options
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const lastScrollTopRef = useRef(0)
  const sectionsRef = useRef<HTMLElement[]>([])
  const wheelDeltaRef = useRef(0)

  const updateSections = useCallback(() => {
    // Find all sections with data-scroll-section attribute
    const sections = document.querySelectorAll('[data-scroll-section]')
    sectionsRef.current = Array.from(sections) as HTMLElement[]
  }, [])

  const getCurrentSection = useCallback(() => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const viewportTop = scrollTop

    let currentIndex = 0
    let minDistance = Infinity

    sectionsRef.current.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const sectionTop = scrollTop + rect.top
      const distance = Math.abs(viewportTop - sectionTop)

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
    if (!section) return

    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const sectionTop = scrollTop + rect.top

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })
  }, [])

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrollingRef.current) {
      e.preventDefault()
      return
    }

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Set a timeout to detect when wheel scrolling has stopped
    scrollTimeoutRef.current = setTimeout(() => {
      if (Math.abs(e.deltaY) > threshold) {
        e.preventDefault()
        isScrollingRef.current = true
        
        const currentSectionIndex = getCurrentSection()
        let targetIndex = currentSectionIndex

        // Always move only one section regardless of scroll intensity
        if (e.deltaY > 0) {
          // Scrolling down - move to next section only
          targetIndex = Math.min(currentSectionIndex + 1, sectionsRef.current.length - 1)
        } else {
          // Scrolling up - move to previous section only
          targetIndex = Math.max(currentSectionIndex - 1, 0)
        }

        // Only snap if we're moving to a different section
        if (targetIndex !== currentSectionIndex) {
          scrollToSection(targetIndex)
        }

        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrollingRef.current = false
        }, duration)
      }
    }, 100) // Wait 100ms after wheel stops
  }, [threshold, duration, getCurrentSection, scrollToSection])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isScrollingRef.current) return

    const currentSectionIndex = getCurrentSection()
    let targetIndex = currentSectionIndex

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault()
        targetIndex = Math.min(currentSectionIndex + 1, sectionsRef.current.length - 1)
        break
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault()
        targetIndex = Math.max(currentSectionIndex - 1, 0)
        break
      case 'Home':
        e.preventDefault()
        targetIndex = 0
        break
      case 'End':
        e.preventDefault()
        targetIndex = sectionsRef.current.length - 1
        break
      default:
        return
    }

    if (targetIndex !== currentSectionIndex) {
      isScrollingRef.current = true
      scrollToSection(targetIndex)
      
      setTimeout(() => {
        isScrollingRef.current = false
      }, duration)
    }
  }, [getCurrentSection, scrollToSection, duration])

  useEffect(() => {
    updateSections()
    lastScrollTopRef.current = window.pageYOffset

    // Add wheel event listener (with passive: false to allow preventDefault)
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    // Add keyboard event listener
    window.addEventListener('keydown', handleKeyDown)

    // Update sections on resize
    window.addEventListener('resize', updateSections)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', updateSections)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleWheel, handleKeyDown, updateSections])

  return {
    scrollToSection,
    getCurrentSection
  }
}