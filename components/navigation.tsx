"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import Chatbot from "./chatbot"

export default function Navigation() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  const navItems = [
    { num: "", text: "About", href: "#about" },
    { num: "", text: "Work", href: "#work" },
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

  return (
    <>
      <motion.div
        className="absolute left-12 top-12 right-12 z-[99] flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        {/* Logo */}
        <div className="static w-10">
          <Image src="/images/v-logo.png" alt="Logo" width={40} height={40} className="w-full h-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex justify-end items-center">
          <div className="hidden md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.num}
                href={item.href}
                className="flex ml-10 flex-col items-start font-mono text-[#667eea] dark:text-[#64ffd9] text-sm font-medium no-underline group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              >
                <div className="flex items-center">
                  <span className="mr-2.5 text-[#667eea] dark:text-[#64ffd9]">{item.num}.</span>
                  <span className="text-[#2d3748] dark:text-white group-hover:text-[#5a67d8] dark:group-hover:text-[#64ffd9] transition-colors">
                    {item.text}
                  </span>
                </div>
                <div className="w-full h-px mt-[3px] bg-[#667eea] dark:bg-[#64ffd9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}

            {/* Contact Button - Triggers Chatbot */}
            <motion.button
              onClick={handleContactClick}
              className="flex ml-10 flex-col items-start font-mono text-[#667eea] dark:text-[#64ffd9] text-sm font-medium no-underline group cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              <div className="flex items-center">
                <span className="mr-2.5 text-[#667eea] dark:text-[#64ffd9]">.</span>
                <span className="text-[#2d3748] dark:text-white group-hover:text-[#5a67d8] dark:group-hover:text-[#64ffd9] transition-colors">
                  Contact
                </span>
              </div>
              <div className="w-full h-px mt-[3px] bg-[#667eea] dark:bg-[#64ffd9] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.num}
                href={item.href}
                className="font-poppins text-[#2d3748] dark:text-white text-sm font-medium no-underline hover:text-[#5a67d8] dark:hover:text-[#64ffd9] transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              >
                {item.text}
              </motion.a>
            ))}

            {/* Mobile Contact Button */}
            <motion.button
              onClick={handleContactClick}
              className="font-poppins text-[#2d3748] dark:text-white text-sm font-medium no-underline hover:text-[#5a67d8] dark:hover:text-[#64ffd9] transition-colors cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Theme Toggle */}
          
        </nav>
      </motion.div>

      {/* Chatbot Component */}
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  )
}
