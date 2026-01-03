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
  
  // For the technologies section, center it on the page
  if (sectionId === 'technologies') {
    const elementHeight = rect.height
    targetPosition = elementTop - (windowHeight - elementHeight) / 2
    
    // Ensure we don't scroll past the top of the page
    targetPosition = Math.max(0, targetPosition)
  }

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}
