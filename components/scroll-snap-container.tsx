"use client"

import { ReactNode } from 'react'
import { useScrollSnap } from '@/hooks/use-scroll-snap'

interface ScrollSnapContainerProps {
  children: ReactNode
  threshold?: number
  duration?: number
}

export default function ScrollSnapContainer({ 
  children, 
  threshold = 50, 
  duration = 800 
}: ScrollSnapContainerProps) {
  useScrollSnap({ threshold, duration })

  return (
    <div className="scroll-snap-container">
      {children}
    </div>
  )
}