"use client"

import { useEffect, useCallback, useRef } from 'react'

interface UseScrollSnapOptions {
  threshold?: number
  duration?: number
}

export function useScrollSnap(options: UseScrollSnapOptions = {}) {
  const { threshold = 20, duration = 600 } = options
  const isScrollingRef = useRef(false)
  const lastScrollTopRef = useRef(0)
  const sectionsRef = useRef<HTMLElement[]>([])
  const lastScrollTime = useRef(0)

  const updateSections = useCallback(() => {
    const sections = document.querySelectorAll('[data-scroll-section]')
    sectionsRef.current = Array.from(sections) as HTMLElement[]
  }, [])

  const getCurrentSection = useCallback(() => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const viewportTop = scrollTop
    const viewportMiddle = scrollTop + windowHeight / 2

    let currentIndex = -1
    let closestDistance = Infinity

    sectionsRef.current.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const sectionTop = scrollTop + rect.top
      const sectionMiddle = sectionTop + rect.height / 2
      const distance = Math.abs(viewportMiddle - sectionMiddle)

      if (distance < closestDistance) {
        closestDistance = distance
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
    
    const sectionId = section.id
    let targetPosition = sectionTop
    
    // Center sections on the page
    if (sectionId === 'technologies' || sectionId === 'experience' || sectionId === 'journey') {
      const sectionHeight = rect.height
      
      if (sectionHeight <= windowHeight) {
        // Center the section
        targetPosition = sectionTop - (windowHeight - sectionHeight) / 2
      } else {
        // Show top with some padding
        targetPosition = sectionTop - 80
      }
      
      targetPosition = Math.max(0, targetPosition)
    } else {
      // For other sections, show top
      targetPosition = Math.max(0, sectionTop - 80)
    }

    isScrollingRef.current = true
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })

    setTimeout(() => {
      isScrollingRef.current = false
    }, duration)
  }, [duration])

  const isAtSectionBottom = useCallback((section: HTMLElement) => {
    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const sectionTop = scrollTop + rect.top
    const sectionBottom = sectionTop + rect.height
    const viewportBottom = scrollTop + windowHeight
    
    // More lenient threshold for leaving the work section
    return viewportBottom >= sectionBottom - 30
  }, [])

  const isAtSectionTop = useCallback((section: HTMLElement) => {
    const rect = section.getBoundingClientRect()
    const scrollTop = window.pageYOffset
    const sectionTop = scrollTop + rect.top
    
    return scrollTop <= sectionTop + 30
  }, [])

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrollingRef.current) {
      e.preventDefault()
      return
    }

    const now = Date.now()
    if (now - lastScrollTime.current < 400) {
      return
    }

    // More sensitive threshold
    if (Math.abs(e.deltaY) > threshold) {
      const currentSectionIndex = getCurrentSection()
      const currentSection = sectionsRef.current[currentSectionIndex]
      
      if (!currentSection) return
      
      // Special handling for work section
      if (currentSection.id === 'work') {
        const rect = currentSection.getBoundingClientRect()
        const scrollTop = window.pageYOffset
        const windowHeight = window.innerHeight
        
        // Check if we're near the bottom of work section
        const sectionTop = scrollTop + rect.top
        const sectionBottom = sectionTop + rect.height
        const viewportBottom = scrollTop + windowHeight
        
        const isNearBottom = viewportBottom >= sectionBottom - 100
        
        if (e.deltaY > 0 && isNearBottom) {
          // Scrolling down near bottom of work section
          e.preventDefault()
          lastScrollTime.current = now
          scrollToSection(currentSectionIndex + 1)
          return
        }
        
        // For work section, allow normal internal scrolling
        // The work component handles its own card navigation
        return
      }
      
      // For experience section, check if we're at boundaries
      if (currentSection.id === 'experience') {
        if (e.deltaY > 0) {
          // Scrolling down - only snap if at bottom
          if (!isAtSectionBottom(currentSection)) {
            return
          }
        } else {
          // Scrolling up - only snap if at top
          if (!isAtSectionTop(currentSection)) {
            return
          }
        }
      }
      
      // For all other sections, use snap behavior
      e.preventDefault()
      lastScrollTime.current = now
      
      let targetIndex = currentSectionIndex

      if (e.deltaY > 0) {
        targetIndex = Math.min(currentSectionIndex + 1, sectionsRef.current.length - 1)
      } else {
        targetIndex = Math.max(currentSectionIndex - 1, 0)
      }

      if (targetIndex !== currentSectionIndex) {
        scrollToSection(targetIndex)
      }
    }
  }, [getCurrentSection, scrollToSection, threshold, isAtSectionBottom, isAtSectionTop])

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

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
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