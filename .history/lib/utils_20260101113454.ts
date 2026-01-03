import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const rect = element.getBoundingClientRect()
  const scrollTop = window.pageYOffset
  const elementTop = scrollTop + rect.top
  const windowHeight = window.innerHeight
  
  let targetPosition = elementTop
  
  // For specific sections, center them on the page
  if (sectionId === 'technologies' || sectionId === 'experience') {
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
}
