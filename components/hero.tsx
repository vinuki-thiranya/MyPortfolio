"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Navigation from "./navigation"
import Grid from "./grid"
import Footer from "./footer"
import { Download, Github, Linkedin, Facebook, Instagram } from "lucide-react"
import { Playfair_Display, Inter } from 'next/font/google'

// Load fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax transforms for different elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.6, 0.8])
  
  return (
    <section ref={heroRef} className="relative flex overflow-hidden h-screen justify-center items-center bg-white dark:bg-[#0a192f] transition-colors duration-300">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url(/images/bg-texture.png)",
          y: backgroundY,
          scale: backgroundScale
        }}
      />

      {/* Hero Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url(/images/yd.png)",
          y: backgroundY,
          scale: backgroundScale
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#667eea]/5 to-[#764ba2]/5 dark:bg-[#64ffd9]/5 z-[2]"
        style={{ pointerEvents: "none" }}
      />

      {/* Dynamic Dark Overlay for Background */}
      <motion.div
        className="absolute inset-0 bg-black z-[2]"
        style={{ 
          pointerEvents: "none",
          opacity: overlayOpacity
        }}
      />

      {/* Light Beam Effect */}
      <motion.div
        className="absolute inset-0 z-[4]"
        style={{ pointerEvents: "none" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        

        
        


      </motion.div>

      <Navigation />

      {/* Hero Content */}
      <motion.div
        className="relative z-[9] w-full max-w-[900px] px-8 md:px-12 lg:px-4 mt-[200px] md:mt-[160px] lg:mt-[140px] font-normal"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ fontFamily: 'var(--font-playfair), var(--font-inter)' }}
      >

       
       
  
        <motion.h1
          className="motion-heading cursor-target hero-heading mt-0 mb-1 lg:mb-2 text-[#1a202c] dark:text-[#e6f1ff] text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-bold py-px"
          data-cursor-target="true"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          style={{ cursor: "none" }}
        >
          {""} 
        </motion.h1>

        <div className="flex flex-col">
  <motion.h1
    className="motion-heading cursor-target hero-heading mt-0 mb-1 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[75px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
    data-cursor-target="true"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 2.4 }}
          style={{ cursor: "none", fontFamily: 'var(--font-playfair), var(--font-inter)' }}
  >
    {"HELLO, I'M"}
  </motion.h1>

  <motion.h1
    className="motion-heading cursor-target hero-heading mt-0 mb-2 text-[#2d3748] dark:text-[#e6f1ff]/90 text-4xl md:text-6xl lg:text-[80px] leading-[45px] md:leading-[70px] lg:leading-[90px] font-black tracking-tight"
    data-cursor-target="true"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 2.6 }}
    style={{ cursor: "none", fontFamily: 'var(--font-playfair), var(--font-inter)' }}
  >
    {" VINUKI THIRANYA"}
  </motion.h1>
</div>

       


        <motion.p
          className="mb-4 md:mb-6 lg:mb-8 text-[#4a5568] dark:text-[#e6f1ff]/70 text-lg leading-6 md:leading-7 lg:leading-8 max-w-[650px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          style={{ fontFamily: 'var(--font-inter)' }}
        >
        <span className="text-[#2d3748] dark:text-[#e6f1ff] text-xl block mb-1.5 mt-2 font-medium leading-7">
  Computer Science Undergraduate | Software Engineer
</span>
          Passionate about solving complex problems, exploring modern technologies, and creating innovative, user-friendly solutions that add real value.
        </motion.p>


        {/* Action Buttons - Improved Styling */}
        <motion.div
          className="flex flex-wrap gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        >
          <motion.a
            href="/cv.pdf"
            download
            className="cursor-target hero-button group relative flex items-center justify-center px-6 py-3 font-poppins font-medium rounded-lg overflow-hidden transition-all duration-300"
            data-cursor-target="true"
            style={{
              background: "linear-gradient(135deg, #64ffd9 0%, #4fd1c7 100%)",
              boxShadow: "0 4px 15px rgba(100, 255, 217, 0.3)",
              cursor: "none",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 20px rgba(100, 255, 217, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center text-[#0a192f]">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#64ffd9] to-[#4fd1c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target hero-button group relative flex items-center justify-center px-6 py-3 font-poppins font-medium rounded-lg border-2 border-[#64ffd9] bg-transparent overflow-hidden transition-all duration-300"
            data-cursor-target="true"
            style={{ cursor: "none" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(100, 255, 217, 0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center text-[#64ffd9] dark:text-[#64ffd9] group-hover:text-[#e6f1ff] transition-colors duration-300">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </span>
            <span className="absolute inset-0 bg-[#64ffd9] opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>

        {/* Mobile Social Media */}
        <motion.div
          className="block lg:hidden mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-10 h-10 justify-center items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#e6f1ff] hover:text-[#64ffd9] transition-all duration-300"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-10 h-10 justify-center items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#e6f1ff] hover:text-[#64ffd9] transition-all duration-300"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-10 h-10 justify-center items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#e6f1ff] hover:text-[#64ffd9] transition-all duration-300"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="text-center">
            <motion.a
              href="mailto:vtkatugampala@gmail.com"
              className="inline-block font-poppins text-[#e6f1ff]/80 hover:text-[#64ffd9] text-sm transition-colors"
              whileHover={{ y: -2 }}
            >
              vtkatugampala@gmail.com
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <div className="hidden lg:block">
        <Footer />
      </div>
    </section>
  )
}