"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Work() {
  const workflow = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "I begin with in-depth research to understand your business goals, target audience, and technical requirements, creating a solid foundation for the project.",
    items: [
      "Competitor analysis",
      "User persona development",
      "Technical assessment",
    ],
    image: "/images/discovery.png",
  },
  {
    step: "02",
    title: "Design & Development",
    description:
      "Transforming ideas into pixel-perfect designs and robust code, with iterative feedback loops to ensure alignment with your vision.",
    items: [
      "Wireframing & prototyping",
      "Agile development sprints",
      "Weekly progress demos",
    ],
    image: "/images/design.jpg",
  },
  {
    step: "03",
    title: "Delivery & Growth",
    description:
      "Launching with precision and supporting your growth with analytics-driven optimizations and ongoing enhancements.",
    items: [
      "Thorough QA testing",
      "Performance optimization",
      "Post-launch support",
    ],
    image: "/images/delivery.jpg",
  },
];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/portrait-1.jpg",
      link: "https://project1.com",
      github: "https://github.com/user/project1",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Firebase", "Vuetify"],
      image: "/images/portrait-2.jpg",
      link: "https://project2.com",
      github: "https://github.com/user/project2",
    },
  ]

  return (
    <section className="flex pt-[150px] pb-0 justify-center items-center bg-[#f8fafc] dark:bg-[#0a192f] transition-colors duration-300">
      {/* Background Texture - Same as Hero */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/images/bg-texture.png)" }}
      />

      {/* Gradient Overlay - Same as Hero */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#667eea]/5 to-[#764ba2]/5 dark:bg-[#64ffd9]/5 z-[2]"
        style={{ pointerEvents: "none" }}
      />

      <div className="w-full max-w-[900px] px-4 relative z-[9]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-[270px] ml-[3px] border-b border-[#667eea] dark:border-[#e6f1ff] text-[#2d3748] dark:text-[#e6f1ff] font-poppins text-sm leading-10 font-semibold tracking-[2px] uppercase mb-5 text-slate-300">
            What I Bring to the Table
          </div>

          <h1 className="mt-2.5 mb-6 text-[#1a202c] dark:text-[#e6f1ff]/90 font-poppins text-6xl md:text-8xl lg:text-[100px] leading-[110px] font-semibold bg-transparent">
            What I Do
          </h1>
        </motion.div>

        <div className="space-y-32">
          {workflow.map((phase, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-32 ${
                index % 2 === 1 ? "justify-end" : ""
              } ${index === workflow.length - 1 ? "mb-0" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Phase Image with Dark Peppermint Filter */}
              <motion.div
                className="relative overflow-hidden w-[580px] h-[360px]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Clear Background Image */}
                <div
                  className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${phase.image})` }}
                />
                
                {/* Dark peppermint green overlay - darker version of #3fb181 */}
                <div
                  className="absolute inset-0 bg-[#2a7d5b] mix-blend-multiply opacity-60 z-[2]"
                  style={{ pointerEvents: "none" }}
                />
                
                {/* Additional subtle dark overlay for depth */}
                <div
                  className="absolute inset-0 bg-[#0a192f] mix-blend-overlay opacity-20 z-[3]"
                  style={{ pointerEvents: "none" }}
                />
              </motion.div>

              {/* Phase Details */}
              <motion.div
                className={`absolute ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } flex w-[450px] flex-col ${
                  index % 2 === 0
                    ? "justify-end items-end"
                    : "justify-start items-start"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="mt-0 mb-1 font-poppins text-[#2d3748] dark:text-[#e6f1ff]/90 text-xl font-medium">
                  {phase.title}
                </h3>

                <div className="mt-5 p-6 rounded-xl bg-white/20 dark:bg-transparent backdrop-blur-sm border border-[#e2e8f0]/30 dark:border-transparent shadow-lg dark:shadow-none">
                  <p
                    className={`mb-5 font-poppins text-[#4a5568] dark:text-[#9ca3af] text-sm leading-6 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    {phase.description}
                  </p>
                  <ul
                    className={`list-disc list-inside space-y-1 font-poppins text-[#2d3748] dark:text-[#e6f1ff]/80 text-sm leading-6 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    {phase.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}