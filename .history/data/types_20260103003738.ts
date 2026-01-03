export interface ProjectResult {
  title: string
  icon: string
}

export interface CaseStudyPipeline {
  step: string
  description: string
}

export interface CaseStudySolutions {
  problem: string[]
  solution: string[]
  impact: string[]
}

export interface TechnicalImplementation {
  description: string
  semanticAnalysis: string[]
  learningOutcomes: string[]
}

export interface LearningOutcomes {
  areas: string[]
  outcomes: string[]
}

export interface CaseStudy {
  overview: string
  pipeline?: CaseStudyPipeline[]
  problems?: string[]
  problemsIntro?: string
  problemsMotivation?: string
  solutions?: CaseStudySolutions
  technicalImplementation?: TechnicalImplementation
  learningOutcomes?: LearningOutcomes
  conclusion?: string
}

export interface ProjectData {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  detailedDescription: string
  image: string
  images: string[]
  technologies: string[]
  skills: string[]
  keyFeatures: string[]
  period: string
  liveUrl: string
  githubUrl: string
  timeline: string
  role: string
  teamSize: string
  results: ProjectResult[]
  caseStudy?: CaseStudy
  hasVideo?: boolean
  videoUrl?: string
}