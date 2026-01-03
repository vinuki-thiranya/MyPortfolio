"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { useCenteredScroll } from "@/hooks/use-centered-scroll"
import Chatbot from "./chatbot"

export default function Navigation() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const { scrollToTechnologies } = useCenteredScroll()

  const navItems = [
   
    { num: "", text: "PROJECTS", href: "#work" },
    { num: "", text: "SKILLS", href: "#technologies" },
  ]

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsChatbotOpen(true)
  }

  const handleSkillsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToTechnologies()
  }

  return (
    <>
      <motion.div
        className="absolute left-12 top-12 right-12 z-[99] flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        {/* Logo (animated like Projects) */}
        <motion.div
          className="static w-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <Image src="/images/v-logo.png" alt="Logo" width={40} height={40} className="w-full h-auto" />
        </motion.div>

        {/* Navigation */}
        <nav className="flex justify-end items-center">
          {/* Navigation Items */}
          <div className="flex items-center gap-8">
            <Link 
              href="/#work" 
              className="font-poppins text-[#2d3748] dark:text-[#e6f1ff] text-sm font-medium hover:text-[#667eea] dark:hover:text-[#64ffd9] transition-colors duration-200"
            >
              PROJECTS
            </Link>
            <button 
              onClick={handleSkillsClick}
              className="font-poppins text-[#2d3748] dark:text-[#e6f1ff] text-sm font-medium hover:text-[#667eea] dark:hover:text-[#64ffd9] transition-colors duration-200"
            >
              SKILLS
            </button>
            <Link 
              href="/about" 
              className="font-poppins text-[#667eea] dark:text-[#64ffd9] text-sm font-medium hover:text-[#4c51bf] dark:hover:text-[#4fd1c7] transition-colors duration-200"
            >
              ABOUT
            </Link>
          </div>
        </nav>
      </motion.div>

      {/* Chatbot Component */}
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  )
}
