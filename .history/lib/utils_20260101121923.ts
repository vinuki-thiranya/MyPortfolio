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
  
  // For the technologies and experience sections, center them perfectly in the viewport
  if (sectionId === 'technologies' || sectionId === 'experience') {
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
}
