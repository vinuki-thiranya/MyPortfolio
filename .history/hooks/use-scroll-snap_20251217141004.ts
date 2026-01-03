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

  const isNearSectionEnd = useCallback((sectionIndex: number, scrollDirection: 'up' | 'down') => {
    if (sectionIndex < 0 || sectionIndex >= sectionsRef.current.length) return false
    
    const section = sectionsRef.current[sectionIndex]
    const rect = section.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const scrollTop = window.pageYOffset
    const sectionTop = scrollTop + rect.top
    const sectionBottom = sectionTop + rect.height
    const currentScrollPosition = scrollTop + windowHeight / 2

    if (scrollDirection === 'down') {
      // Check if we're near the bottom of the current section (80% through)
      const progressThrough = (currentScrollPosition - sectionTop) / rect.height
      return progressThrough >= 0.8
    } else {
      // Check if we're near the top of the current section (20% from top)
      const progressThrough = (currentScrollPosition - sectionTop) / rect.height
      return progressThrough <= 0.2
    }
  }, [])

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrollingRef.current) {
      e.preventDefault()
      return
    }

    // Accumulate wheel delta
    wheelDeltaRef.current += e.deltaY

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Set a timeout to detect when wheel scrolling has stopped
    scrollTimeoutRef.current = setTimeout(() => {
      if (Math.abs(wheelDeltaRef.current) > threshold) {
        const currentSectionIndex = getCurrentSection()
        const scrollDirection = wheelDeltaRef.current > 0 ? 'down' : 'up'
        
        // Only snap if we're near the end of the current section
        if (isNearSectionEnd(currentSectionIndex, scrollDirection)) {
          e.preventDefault()
          isScrollingRef.current = true
          
          let targetIndex = currentSectionIndex

          // Determine scroll direction and target section
          if (scrollDirection === 'down') {
            targetIndex = Math.min(currentSectionIndex + 1, sectionsRef.current.length - 1)
          } else {
            targetIndex = Math.max(currentSectionIndex - 1, 0)
          }

          // Only snap if we're moving to a different section
          if (targetIndex !== currentSectionIndex) {
            scrollToSection(targetIndex)
          }

          // Reset scrolling flag and wheel delta after animation
          setTimeout(() => {
            isScrollingRef.current = false
            wheelDeltaRef.current = 0
          }, duration)
        } else {
          // Reset wheel delta if we're not ready to snap
          wheelDeltaRef.current = 0
        }
      } else {
        wheelDeltaRef.current = 0
      }
    }, 150) // Wait 150ms after wheel stops
  }, [threshold, duration, getCurrentSection, scrollToSection, isNearSectionEnd])

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