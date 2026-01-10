import { ProjectData } from '../types'

export const mockMateProject: ProjectData = {
  id: 9,
  slug: "mockmate",
  title: "MockMate",
  subtitle: "AI-POWERED INTERVIEW PREPARATION PLATFORM",
  category: "AI Powered Applications",
  description: "Designed and developed a prototype of an AI-driven interview preparation platform that redefines how candidates prepare for technical interviews, aimed at improving how candidates prepare for interviews through AI-driven, data-based skill evaluation tools.",
  fullDescription: "MockMate is an AI-driven interview preparation platform designed to revolutionize how candidates prepare for technical and professional interviews. Developed to address the high failure rate in technical interviews, it provides a realistic, data-driven environment for candidates to hone their skills.",
  detailedDescription: "Designed and developed a prototype of an AI-driven interview preparation platform that redefines how candidates prepare for technical interviews. The system provides real-time feedback, adaptive question generation, and voice-interactive simulations for realistic practice. Targeted at the $8B global interview preparation market, MockMate aims to reduce preparation time by 40% and improve success rates by 60%.",
  image: "/images/mockmate.png",
  images: [
    "/images/mockmate.png"
  ],
  technologies: ["Next.js", "TypeScript", "Firebase", "AI/ML", "CI/CD", "Voice Processing"],
  skills: ["AI Integration", "Full-Stack Development", "UI/UX Design", "Voice Interaction Design", "Data Analytics", "SaaS Architecture"],
  keyFeatures: [
    "AI-Powered Mock Interviews (Technical & Behavioral)",
    "Adaptive Question Generation based on performance",
    "Real-Time Feedback System on clarity and relevance",
    "Voice-Interactive Simulations for realistic practice",
    "Analytics & Progress Tracking (15+ performance metrics)",
    "Personalized learning paths to identify knowledge gaps",
    "Scalable architecture for individual and enterprise use"
  ],
  period: "Jun 2025 – Present",
  liveUrl: "#",
  githubUrl: "https://github.com/vinuki-thiranya/InterviewMentor_",
  timeline: "Jun 2025 – Present",
  role: "Lead Developer & Designer",
  teamSize: "Individual Project",
  results: [
    { title: "40% Prep Reduction", icon: "zap" },
    { title: "60% Success Increase", icon: "trending-up" },
    { title: "25% Faster APIs", icon: "activity" },
    { title: "$8B Market Potential", icon: "dollar-sign" },
    { title: "Scalable SaaS", icon: "layers" }
  ],
  caseStudy: {
    overview: "Designed and developed a prototype of an AI-driven interview preparation platform that redefines how candidates prepare for technical interviews. The platform is aimed at improving how candidates prepare for interviews through AI-driven, data-based skill evaluation tools.",
    problemsIntro: "The project began with identifying critical issues in existing interview preparation solutions. Research revealed that most platforms rely on static question banks and lack real-time performance evaluation, making preparation inefficient and disengaging.",
    problems: [
      "73% of candidates fail interviews due to inadequate or ineffective preparation",
      "Candidates lack access to realistic mock interview environments",
      "No immediate feedback on communication, technical accuracy, or confidence",
      "Companies lose $15K+ per bad hire due to inefficient hiring processes",
      "Existing platforms do not scale well for institutions or enterprise training"
    ],
    problemsMotivation: "These challenges highlighted the need for an intelligent, data-driven interview preparation system. User research identified pain points such as difficulty identifying personal strengths/weaknesses, lack of structured plans, and high anxiety due to unfamiliar environments.",
    solutions: {
      problem: [
        "Ineffective interview preparation",
        "Generic practice questions",
        "No performance feedback",
        "Low interview confidence",
        "Poor progress tracking"
      ],
      solution: [
        "AI-powered mock interviews",
        "Adaptive question generation",
        "Real-time AI feedback",
        "Voice-based simulations",
        "Analytics dashboard"
      ],
      impact: [
        "40% reduction in preparation time",
        "Personalized learning paths",
        "60% improvement in success rates",
        "Increased user confidence",
        "Data-driven improvement"
      ]
    },
    technicalImplementation: {
      description: "MockMate was built using a modern, scalable tech stack to support performance, reliability, and future expansion. The frontend utilizes Next.js and TypeScript for a robust user interface, while Firebase handles backend services and authentication. AI/ML integration involves adaptive evaluation models and response analysis, complemented by real-time voice processing for simulations.",
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Firebase Auth", "Firestore", "Cloud Functions"],
      tools: ["AI/ML Models", "Voice Processing APIs", "CI/CD Pipelines", "Analytics Engines"],
      performance: [
        "Optimized backend APIs achieving 25% faster response times",
        "Maintained 99.9% uptime during testing phases",
        "Designed scalable architecture suitable for SaaS growth"
      ]
    },
    learningOutcomes: {
      areas: ["AI Integration", "Voice UI/UX", "SaaS Scalability", "Data Analytics"],
      outcomes: [
        "Successfully implemented real-time AI feedback loops",
        "Developed adaptive algorithms for personalized learning",
        "Mastered voice-interactive interface design",
        "Built a scalable architecture for high-concurrency usage"
      ]
    },
    results: {
      metrics: [
        "40% reduction in interview preparation time",
        "60% improvement in interview success rates",
        "Market potential identified at $8B in global services",
        "25% faster API response times",
        "99.9% uptime during performance testing"
      ],
      impacts: [
        "Revolutionized interview prep with AI-driven skill evaluation",
        "Reduced preparation overhead for candidates and institutions",
        "Scalable SaaS model supporting unlimited users",
        "Realistic practice through real-time voice processing"
      ]
    },
    conclusion: "The MockMate project demonstrates how AI-driven design and engineering can significantly improve learning outcomes and real-world performance. By focusing on realism, personalization, and analytics, the platform transforms interview preparation from a passive activity into an intelligent, results-oriented process. This case study reinforces that effective software solutions are not just about advanced technology, but about solving real user problems with clarity, empathy, and measurable impact."
  }
}
