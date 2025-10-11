"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, MessageCircle, Mail, MessageSquare } from "lucide-react"

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [currentView, setCurrentView] = useState<"options" | "answer">("options")
  const [selectedAnswer, setSelectedAnswer] = useState("")

  const chatOptions = [
    {
      id: "services",
      question: "What services do you offer?",
      answer:
        "I offer full-stack web development, custom Webflow development, UI/UX design, and web application development. I specialize in React, Next.js, and modern web technologies.",
    },
    {
      id: "pricing",
      question: "What are your rates?",
      answer:
        "My rates vary depending on the project scope and complexity. For web development projects, I typically charge $75-150/hour or offer fixed-price packages. Contact me for a detailed quote based on your specific needs.",
    },
    {
      id: "timeline",
      question: "How long do projects take?",
      answer:
        "Project timelines depend on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 6-12 weeks. I provide detailed timelines during our initial consultation.",
    },
    {
      id: "process",
      question: "What is your development process?",
      answer:
        "I follow a structured approach: 1) Discovery & Strategy, 2) Design & Prototyping, 3) Development & Testing, 4) Launch & Optimization. I maintain regular communication and provide weekly progress updates.",
    },
    {
      id: "technologies",
      question: "What technologies do you use?",
      answer:
        "I work with modern technologies including React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, and various cloud platforms. I choose the best tech stack based on your project requirements.",
    },
  ]

  const handleOptionClick = (option: (typeof chatOptions)[0]) => {
    setSelectedAnswer(option.answer)
    setCurrentView("answer")
  }

  const handleBackToOptions = () => {
    setCurrentView("options")
    setSelectedAnswer("")
  }

  const handleContactMe = () => {
    // You can change this to WhatsApp link: https://wa.me/1234567890
    window.open("mailto:vtkatugampala@gmail.com
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Chatbot Container */}
          <motion.div
            className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-[#112240] rounded-2xl shadow-2xl border border-[#e2e8f0] dark:border-[#1e2b47] z-[101] overflow-hidden"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#64ffd9] to-[#4fd1c7] text-[#0a192f]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Vinuki Thiranya</h3>
                  <p className="text-xs opacity-80">Online now</p>
                </div>
              </div>
              <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <AnimatePresence mode="wait">
                {currentView === "options" ? (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Welcome Message */}
                    <div className="mb-4">
                      <div className="bg-[#f8fafc] dark:bg-[#0a192f] p-3 rounded-lg rounded-tl-none">
                        <p className="text-[#2d3748] dark:text-[#e6f1ff] text-sm">
                          👋 Hi there! I'm Vinuki. How can I help you today?
                        </p>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="space-y-2">
                      {chatOptions.map((option, index) => (
                        <motion.button
                          key={option.id}
                          onClick={() => handleOptionClick(option)}
                          className="w-full text-left p-3 bg-[#f8fafc] dark:bg-[#1e2b47] hover:bg-[#e2e8f0] dark:hover:bg-[#2d3748] rounded-lg transition-colors border border-transparent hover:border-[#64ffd9]/20"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-[#2d3748] dark:text-[#e6f1ff] text-sm font-medium">
                            {option.question}
                          </span>
                        </motion.button>
                      ))}

                      {/* Contact Me Button */}
                      <motion.button
                        onClick={handleContactMe}
                        className="w-full text-left p-3 bg-gradient-to-r from-[#64ffd9] to-[#4fd1c7] hover:from-[#4fd1c7] hover:to-[#64ffd9] rounded-lg transition-all text-[#0a192f] font-semibold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: chatOptions.length * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Contact Me Directly</span>
                        </div>
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Answer */}
                    <div className="mb-4">
                      <div className="bg-[#f8fafc] dark:bg-[#0a192f] p-3 rounded-lg rounded-tl-none">
                        <p className="text-[#2d3748] dark:text-[#e6f1ff] text-sm leading-relaxed">{selectedAnswer}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button
                        onClick={handleBackToOptions}
                        className="w-full text-left p-3 bg-[#f8fafc] dark:bg-[#1e2b47] hover:bg-[#e2e8f0] dark:hover:bg-[#2d3748] rounded-lg transition-colors"
                      >
                        <span className="text-[#2d3748] dark:text-[#e6f1ff] text-sm">← Ask another question</span>
                      </button>

                      <button
                        onClick={handleContactMe}
                        className="w-full text-left p-3 bg-gradient-to-r from-[#64ffd9] to-[#4fd1c7] hover:from-[#4fd1c7] hover:to-[#64ffd9] rounded-lg transition-all text-[#0a192f] font-semibold"
                      >
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm">Contact Me</span>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-[#f8fafc] dark:bg-[#0a192f] border-t border-[#e2e8f0] dark:border-[#1e2b47]">
              <p className="text-xs text-[#718096] dark:text-[#e6f1ff]/60 text-center">Powered by AI Assistant</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
