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
    
    // Get section id for special handling
    const sectionId = section.id
    let targetPosition = sectionTop
    
    // Center the technologies and experience sections on the page
    if (sectionId === 'technologies' || sectionId === 'experience') {
      // Calculate position to center the section vertically
      const sectionHeight = rect.height
      
      // If section fits in viewport, center it
      if (sectionHeight <= windowHeight) {
        targetPosition = sectionTop - (windowHeight - sectionHeight) / 2
      } else {
        // If section is taller than viewport, scroll to show content with padding from top
        targetPosition = sectionTop - 80
      }
      
      // Ensure we don't scroll past the top of the page
      targetPosition = Math.max(0, targetPosition)
    }

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }, [])

  const isAtSectionBottom = useCallback((section: HTMLElement) => {
    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const sectionTop = scrollTop + rect.top
    const sectionBottom = sectionTop + rect.height
    const viewportBottom = scrollTop + windowHeight
    
    // For work section, require being very close to the bottom (within 10px)
    // This makes the last card stay in place until a strong scroll
    if (section.id === 'work') {
      return viewportBottom >= sectionBottom - 10
    }
    
    // For other sections, consider at bottom if within 50px
    return viewportBottom >= sectionBottom - 50
  }, [])

  const isAtSectionTop = useCallback((section: HTMLElement) => {
    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const sectionTop = scrollTop + rect.top
    
    // Consider at top if we're within 50px of section top
    return scrollTop <= sectionTop + 50
  }, [])

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrollingRef.current) {
      e.preventDefault()
      return
    }

    // Require more deliberate scroll movement before triggering section navigation
    if (Math.abs(e.deltaY) > 20) {
      const currentSectionIndex = getCurrentSection()
      const currentSection = sectionsRef.current[currentSectionIndex]
      
      if (!currentSection) return
      
      // Special handling for sections that need internal scrolling (experience and work)
      if (currentSection.id === 'experience' || currentSection.id === 'work') {
        // Allow normal scrolling within these sections
        if (e.deltaY > 0) {
          // Scrolling down - only snap to next section if at bottom
          if (!isAtSectionBottom(currentSection)) {
            // Allow normal scroll within the section
            return
          }
        } else {
          // Scrolling up - only snap to previous section if at top
          if (!isAtSectionTop(currentSection)) {
            // Allow normal scroll within the section
            return
          }
        }
      }
      
      // For all other sections or when at experience section boundaries, use snap behavior
      e.preventDefault()
      isScrollingRef.current = true
      
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
  }, [getCurrentSection, scrollToSection, duration, isAtSectionBottom, isAtSectionTop])

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