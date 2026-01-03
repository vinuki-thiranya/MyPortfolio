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
  semanticAnalysis?: string[]
  learningOutcomes?: string[]
  architecture?: string[]
  mechanisms?: string[]
  testing?: string[]
  backend?: string[]
  frontend?: string[]
  tools?: string[]
  hardware?: string[]
  performance?: string[]
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
  myRole?: {
    title: string
    responsibilities: string[]
  }
  results?: {
    metrics?: string[]
    impacts?: string[]
    areas?: string[]
    outcomes?: string[]
  }
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
  category?: string
  caseStudy?: CaseStudy
  hasVideo?: boolean
  videoUrl?: string
}