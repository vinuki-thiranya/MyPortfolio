import { ProjectData } from '../types'

export const careerSyncProject: ProjectData = {
  id: 10,
  slug: "careersync-ai",
  title: "CareerSync AI",
  subtitle: "INTELLIGENT CAREER INTELLIGENCE PLATFORM",
  category: "AI Powered Applications",
  description: "A full-stack, AI-powered career intelligence platform designed to modernize the job search experience through intelligent automation, machine learning, and NLP-driven insights.",
  fullDescription: "CareerSync AI is a full-stack, AI-powered career intelligence platform designed to modernize the job search experience through intelligent automation, machine learning, and NLP-driven insights. It bridges the gap between candidate profiles and real-world industry requirements by providing an end-to-end workflow—from structured onboarding to an AI-driven discovery engine that performs real-time skill gap analysis and job matching.",
  detailedDescription: "The platform delivers a comprehensive suite of tools for job seekers, including an AI Resume Analyzer that provides ATS compatibility scoring and keyword gap detection, a Personalized Discovery Engine for real-time job matching, and an Analytics Dashboard for insights into application funnels and salary trends. Built with a robust microservices architecture, it ensures high performance and low-latency ML inference to support real-time recommendations for a large user base.",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Next.js 14", "Laravel 11", "FastAPI", "Python", "Scikit-Learn", "NLP (NLTK/spaCy)", "PostgreSQL", "Docker", "Redis"],
  skills: ["Machine Learning", "Natural Language Processing", "Full-stack Development", "Microservices Architecture", "API Optimization", "Data Analytics"],
  keyFeatures: [
    "AI Resume Analyzer with ATS compatibility scoring and keyword gap detection using NLP",
    "Personalized Discovery Engine for real-time job matching with AI-generated reasoning",
    "Comprehensive Analytics Dashboard for application funnels, conversion rates, and salary trends",
    "Smart Cover Letter Generator that automatically creates tailored, professional content",
    "Secure Onboarding & Identity with persistent career profiles using Laravel Sanctum",
    "Optimized architecture for low-latency ML inference and high-performance data processing"
  ],
  period: "Nov 2025 - Present",
  liveUrl: "#",
  githubUrl: "#",
  timeline: "Nov 2025 - Present",
  role: "Lead Full-stack & AI Developer",
  teamSize: "Individual Project",
  results: [
    { title: "AI-based Job Matching", icon: "zap" },
    { title: "Reduced Manual Effort", icon: "trending-up" },
    { title: "Scalable Architecture", icon: "layers" },
    { title: "Real-time Insights", icon: "activity" }
  ],
  caseStudy: {
    overview: "CareerSync AI was developed to address the growing complexity of the modern job market. Job seekers often struggle to align their resumes and skills with rapidly evolving industry requirements, while traditional job trackers lack the intelligence needed to provide actionable feedback. CareerSync AI bridges this gap by combining AI-driven resume analysis with intelligent job discovery and automation, creating a streamlined, data-backed career progression path.",
    problemsIntro: "Before building CareerSync AI, several key challenges were identified in the job search landscape:",
    problems: [
      "Job seekers struggle to align resumes and skills with rapidly evolving market demands",
      "Traditional job trackers lack intelligence, personalization, and actionable feedback",
      "Manual resume optimization and cover letter creation are time-consuming and prone to errors",
      "Difficulty in identifying specific skill gaps required for target roles",
      "Lack of real-time insights into application performance and market trends"
    ],
    problemsMotivation: "These issues highlighted the need for an end-to-end platform that leverages AI to provide personalized guidance and automation throughout the job application lifecycle.",
    solutions: {
      problem: [
        "Resume-market misalignment",
        "Generic job tracking",
        "Slow resume optimization",
        "Unclear skill gaps",
        "High latency in ML recommendations"
      ],
      solution: [
        "AI Resume Analyzer (NLP-driven)",
        "Intelligent Discovery Engine",
        "Smart Cover Letter Generator",
        "Real-time skill gap analysis",
        "Optimized FastAPI microservices"
      ],
      impact: [
        "Improved job-to-profile relevance",
        "Actionable career intelligence",
        "Reduced manual effort in applications",
        "Clear path to skill acquisition",
        "Low-latency user experience"
      ]
    },
    technicalImplementation: {
      description: "The platform uses a decoupled architecture with a Next.js frontend, a Laravel-based central backend for identity and data management, and a Python-based FastAPI service for ML processing. This setup ensures that heavy NLP and machine learning tasks don't block the main application flow.",
      frontend: [
        "Next.js 14 with App Router",
        "Tailwind CSS for responsive UI",
        "Zustand for state management",
        "Recharts for analytics visualization"
      ],
      backend: [
        "Laravel 11 for core business logic",
        "Laravel Sanctum for secure authentication",
        "PostgreSQL for relational data persistence",
        "Redis for caching and performance optimization"
      ],
      tools: [
        "FastAPI (Python) for ML services",
        "Scikit-Learn for matching algorithms",
        "NLTK & spaCy for NLP tasks",
        "Docker & Docker Compose for orchestration"
      ]
    },
    learningOutcomes: {
      areas: ["Microservices", "NLP Integration", "System Performance", "AI Orchestration"],
      outcomes: [
        "Implemented high-performance NLP pipelines for resume parsing",
        "Architected a scalable multi-language environment (PHP/Python/Node)",
        "Developed custom job-matching algorithms using Scikit-Learn",
        "Optimized Dockerized deployments for low-latency inference"
      ]
    },
    results: {
      metrics: [
        "Significant improvement in job-to-profile relevance",
        "Reduction in manual time spent on resume/cover letter tailoring",
        "High system reliability with Dockerized infrastructure",
        "Scalable platform supporting real-time recommendations"
      ]
    }
  },
  hasVideo: false,
  videoUrl: null
}
