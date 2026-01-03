import { ProjectData } from '../types'

export const autoServiceProject: ProjectData = {
  id: 2,
  slug: "auto-service-management-system",
  title: "AUTO SERVICE SPARE PARTS",
  subtitle: "RESPONSIVE WEB APPLICATION FOR AUTO SERVICE SHOP", 
  description: "Designed and developed a fully responsive web application to streamline spare part management for an auto service shop, with secure user access, admin controls, and modern UI/UX.",
  fullDescription: "As a key contributor, I was responsible for building the Authentication & User Management Module, ensuring robust security and user experience across the platform. The system features secure user access, admin controls, and a smooth, modern user interface.",
  detailedDescription: "The frontend was built using React.js and styled with Tailwind CSS, while the backend was developed with Java and Spring Boot. JWT-based authentication was implemented for secure access, and project tasks were efficiently managed using Jira.",
  image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["React.js", "Spring Boot", "Spring Security", "JWT", "MySQL", "Tailwind CSS"],
  skills: ["Authentication Systems", "User Management", "Role-based Authorization", "Token Management", "Exception Handling", "CRUD Operations"],
  keyFeatures: [
    "Developed secure user registration and login functionality using Spring Boot and JWT for stateless authentication",
    "Implemented JWT-based authentication with refresh token and verification token handling for secure session lifecycle", 
    "Integrated email verification on signup and password reset workflows with tokenized email links",
    "Designed and enforced role-based authorization, allowing differentiated access for roles like admin and staff",
    "Managed complete token lifecycle, including generation, storage, and validation",
    "Built centralized exception handling for meaningful API responses and stability",
    "Developed user management features for admin-level control over user accounts (CRUD operations)"
  ],
  period: "Mar 2025 - Jun 2025",
  liveUrl: "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group-08-auto-spares-and-services",
  githubUrl: "https://github.com/SLIIT-FacultyOfComputing/se-group-project-group-08-auto-spares-and-services",
  timeline: "4 months",
  role: "Authentication & User Management Module Developer",
  teamSize: "Team Project",
  results: [
    { title: "Authentication System", icon: "shield" },
    { title: "User Management", icon: "users" },
    { title: "Security Implementation", icon: "lock" }
  ]
}