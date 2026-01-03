import { ProjectData } from '../types'

export const autoServiceProject: ProjectData = {
  id: 2,
  slug: "auto-service-management-system",
  title: "AUTO SERVICE SPARE PARTS",
  subtitle: "SECURE & RESPONSIVE SPARE PARTS MANAGEMENT PLATFORM FOR AUTO SERVICE SHOPS",
  description: "A fully responsive web application designed to streamline spare part operations for an auto service shop in Dambulla, focusing on secure authentication, role-based access control, and modern user experience.",
  fullDescription: "The Auto Service Spare Parts Management System is a fully responsive web application designed to streamline spare part operations for an auto service shop in Dambulla. The project focused on building a secure, scalable, and user-friendly platform that supports efficient spare part management, role-based access control, and smooth collaboration between staff and administrators.",
  detailedDescription: "Developed as part of a group project associated with SLIIT, the system combines modern frontend technologies with a robust backend architecture. A strong emphasis was placed on security, authentication, and user experience to ensure safe access to sensitive operations while maintaining a clean and intuitive interface across devices.",
  image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["React.js", "Spring Boot", "Spring Security", "JWT", "MySQL", "Tailwind CSS"],
  skills: ["Authentication Systems", "User Management", "Role-based Authorization", "Token Management", "Exception Handling", "CRUD Operations", "RESTful APIs", "Agile Development"],
  keyFeatures: [
    "Secure user registration and login using Spring Boot and JWT-based stateless authentication",
    "JWT authentication with refresh token and verification token handling for secure session lifecycles",
    "Email verification workflows during user signup using tokenized email links",
    "Password reset functionality with secure, time-bound tokens",
    "Role-based authorization for admin and staff users with differentiated access",
    "Complete JWT token lifecycle management including generation, validation, and renewal",
    "Centralized exception handling for stable APIs and meaningful error responses",
    "Admin-level user management features enabling full CRUD operations on user accounts",
    "Fully responsive UI optimized for desktop and mobile devices",
    "Project coordination and task tracking using Jira for agile development"
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
    { title: "Security Implementation", icon: "lock" },
    { title: "Responsive Design", icon: "monitor" },
    { title: "Team Collaboration", icon: "git-branch" }
  ],
  caseStudy: {
    overview: "Auto Service Dambulla required a modern web-based solution to manage spare parts, users, and administrative operations efficiently. The system was designed to replace manual and fragmented workflows with a centralized digital platform that supports secure user access, clear role separation, and responsive usability. The project followed an agile development approach, with tasks managed using Jira and version control handled via GitHub. The frontend delivers a responsive and modern UI, while the backend ensures secure API communication, authentication, and authorization.",
    problems: [
      "Lack of secure authentication and role-based access",
      "Manual user handling with no centralized control",
      "Poor usability on mobile and smaller devices",
      "No structured workflow for user verification and password recovery",
      "Risk of unauthorized access to administrative functions"
    ],
    solutions: {
      problem: [
        "Insecure access to system resources",
        "No role separation between admin and staff",
        "Manual user account management",
        "Weak password recovery mechanisms",
        "Poor mobile device compatibility"
      ],
      solution: [
        "JWT-based authentication with Spring Security",
        "Role-based authorization for Admin/Staff roles",
        "Admin-level user management with full CRUD operations",
        "Token-based email verification and password reset",
        "Fully responsive UI built with Tailwind CSS"
      ],
      impact: [
        "Secure stateless sessions with JWT tokens",
        "Controlled access to features based on roles",
        "Centralized user control and management",
        "Improved account security and recovery options",
        "Better accessibility across all device types"
      ]
    },
    technicalImplementation: {
      description: "The backend was built using Spring Boot and Spring Security, following RESTful API principles and clean architecture practices. JWT was used for stateless authentication, ensuring scalability and secure communication between the frontend and backend. The frontend was developed using React.js and styled with Tailwind CSS, delivering a modern, responsive interface optimized for both desktop and mobile devices. Authentication flows were tightly integrated with the backend APIs to ensure smooth user experiences during login, registration, verification, and password recovery.",
      backend: [
        "Java Spring Boot framework for RESTful APIs",
        "Spring Security for authentication and authorization",
        "JWT (JSON Web Tokens) for stateless authentication",
        "MySQL database for data persistence",
        "Centralized exception handling and validation"
      ],
      frontend: [
        "React.js with functional components and hooks",
        "Tailwind CSS for responsive and modern UI",
        "Axios for API communication with backend",
        "Context API for state management",
        "Responsive design for all screen sizes"
      ],
      tools: [
        "Jira for project management and task tracking",
        "GitHub for version control and collaboration",
        "Postman for API testing and documentation",
        "Figma for UI/UX design and prototyping"
      ]
    },
    results: {
      metrics: [
        "Security",
        "Usability",
        "Maintainability",
        "Collaboration",
        "Reliability"
      ],
      impacts: [
        "Strong authentication and authorization enforcement",
        "Fully responsive UI across all devices",
        "Modular backend architecture with clean code",
        "Improved team coordination via Jira and agile sprints",
        "Stable APIs with centralized error handling and validation"
      ]
    },
    conclusion: "This project strengthened my practical understanding of secure full-stack application development, particularly in authentication, authorization, and backend integration. Building a complete JWT-based security flow reinforced the importance of protecting user data and enforcing access control in real-world systems. The project also highlighted the value of teamwork, agile development, and clean system design when building scalable applications. Overall, the Auto Service Spare Parts Management System demonstrates my ability to design and implement secure backend solutions while collaborating effectively within a full-stack development team."
  },
  hasVideo: false,
  videoUrl: null
}