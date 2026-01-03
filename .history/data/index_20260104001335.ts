import { ProjectData } from './types'
import { formlangPlusPlusProject } from './projects/formlang-plus-plus'
import { autoServiceProject } from './projects/auto-service-management-system'
import { distributedLoggingProject } from './projects/distributed-logging-system'
import { dogwoodFloraProject } from './projects/dogwood-flora-management-system'
import { intelliHelmetProject } from './projects/intellihelmet-smart-safety-helmet'
import { portfolioWebsiteProject } from './projects/portfolio-website'
import { autoPartsHubProject } from './projects/autoparts-hub-mobile-app'
import { smartCampusProject } from './projects/smart-campus-mobile-app'
import { mockMateProject } from './projects/mockmate'

export const projectsData: Record<string, ProjectData> = {
  "formlang-plus-plus": formlangPlusPlusProject,
  "auto-service-management-system": autoServiceProject,
  "distributed-logging-system": distributedLoggingProject,
  "dogwood-flora-management-system": dogwoodFloraProject,
  "intellihelmet-smart-safety-helmet": intelliHelmetProject,
  "portfolio-website": portfolioWebsiteProject,
  "autoparts-hub-mobile-app": autoPartsHubProject,
  "smart-campus-mobile-app": smartCampusProject,
  "mockmate": mockMateProject,
}

export const getAllProjects = (): ProjectData[] => {
  return Object.values(projectsData)
}

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData[slug]
}

export const getOtherProjects = (currentSlug: string, limit: number = 2): ProjectData[] => {
  return Object.values(projectsData)
    .filter(project => project.slug !== currentSlug)
    .slice(0, limit)
}