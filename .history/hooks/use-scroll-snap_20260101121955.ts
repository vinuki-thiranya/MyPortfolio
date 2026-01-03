"use client"

import { useEffect, useCallback, useRef } from 'react'

interface UseScrollSnapOptions {
  threshold?: number
  duration?: number
}

export function useScrollSnap(options: UseScrollSnapOptions = {}) {
  const { threshold = 30, duration = 400 } = options
  const isScrollingRef = useRef(false)
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
    const windowHeight = window.innerHeight
    
    // For the technologies section, center it on the page
    const sectionId = section.id
    let targetPosition = sectionTop
    
    if (sectionId === 'technologies') {
      // Calculate position to center the section vertically
      const sectionHeight = rect.height
      const availableSpace = windowHeight - sectionHeight
      
      // Center the section if there's enough space, otherwise align to top with some offset
      if (availableSpace > 0) {
        targetPosition = sectionTop - availableSpace / 2
      } else {
        // If section is taller than viewport, align with small top offset
        targetPosition = sectionTop - 50
      }
      
      // Ensure we don't scroll past the top of the page
      targetPosition = Math.max(0, targetPosition)
    }

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }, [])

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrollingRef.current) {
      e.preventDefault()
      return
    }

    // Ultra-sensitive response to any scroll movement above minimal threshold
    if (Math.abs(e.deltaY) > 3) {
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

      // Reset scrolling flag after animation with shorter delay
      setTimeout(() => {
        isScrollingRef.current = false
      }, duration * 0.6) // 60% of duration for faster responsiveness
    }
  }, [getCurrentSection, scrollToSection, duration])

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
    }
  }, [handleWheel, handleKeyDown, updateSections])

  return {
    scrollToSection,
    getCurrentSection
  }
}