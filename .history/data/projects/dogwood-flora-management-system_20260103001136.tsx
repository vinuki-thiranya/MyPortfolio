import { ProjectData } from '../types'

export const dogwoodFloraProject: ProjectData = {
  id: 4,
  slug: "dogwood-flora-management-system",
  title: "DOGWOOD FLORA",
  subtitle: "ONLINE FLORAL SHOP MANAGEMENT SYSTEM",
  description: "Designed and developed a full-stack web application for managing a floral shop's online operations as part of Object Oriented Analysis and Design module at SLIIT.",
  fullDescription: "This project was developed to streamline the shop's order handling, product display, and administrative tasks, improving both the customer experience and the owner's workflow. We used the Spring Boot framework to build a robust backend API, handling product management, customer orders, and user authentication.",
  detailedDescription: "I was responsible for implementing the product CRUD features using Spring Boot and MySQL, as well as developing the customer-facing product view using Thymeleaf and Bootstrap. The Thymeleaf templating engine was used to render dynamic HTML views, creating a responsive and visually appealing user interface.",
  image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563181071-84c6c2e3129b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "HTML/CSS"],
  skills: ["Full-stack Java Development", "MVC Architecture", "RESTful Services", "Database Design", "Template Engines", "CRUD Operations"],
  keyFeatures: [
    "Customer Interface: Browse floral products, view details, and place orders via an intuitive UI",
    "Admin Dashboard: Secure backend access for managing inventory, updating products, viewing customer orders, and tracking order statuses",
    "Authentication System: Role-based login for admin and users, with encrypted password storage and session handling",
    "Database Integration: Seamless communication with MySQL to persist product data, order records, and user information",
    "Responsive Design: Mobile-friendly interface using Bootstrap for optimal user experience across devices"
  ],
  period: "Jul 2024 - Nov 2024",
  liveUrl: "https://github.com/it23425590/OOAD-Group-Assignment",
  githubUrl: "https://github.com/it23425590/OOAD-Group-Assignment",
  timeline: "5 months",
  role: "Backend Developer & Frontend Integration",
  teamSize: "Team Project",
  results: [
    { title: "Product Management", icon: "package" },
    { title: "Customer Experience", icon: "users" },
    { title: "System Architecture", icon: "layers" }
  ]
}