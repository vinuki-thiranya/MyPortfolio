import { ProjectData } from '../types'

export const dogwoodFloraProject: ProjectData = {
  id: 4,
  slug: "dogwood-flora-management-system",
  title: "DOGWOOD FLORA",
  subtitle: "FULL-STACK ONLINE FLORAL SHOP MANAGEMENT SYSTEM",
  description: "Dogwood Flora is a full-stack web application developed to manage the online operations of a floral shop, including product display, customer ordering, and administrative workflows. The project was completed as part of the Object Oriented Analysis and Design module at SLIIT, applying OOAD principles to a real-world business scenario.",
  fullDescription: "The system was designed to improve both customer experience and shop owner efficiency by providing a clean, responsive storefront for customers and a secure administrative dashboard for managing products and orders. By combining a robust Java backend with a dynamic server-side rendered frontend, Dogwood Flora demonstrates practical full-stack development using the MVC architecture.",
  detailedDescription: "Dogwood Flora was developed to digitize and streamline common floral shop operations that are often handled manually. The platform enables customers to browse floral products, view detailed descriptions, and place orders through an intuitive web interface, while administrators can securely manage inventory, update product listings, and track customer orders.",
  image: "/images/dogwood4",
  images: [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563181071-84c6c2e3129b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "HTML5", "CSS3", "Git", "GitHub"],
  skills: ["Full-stack Java Development", "MVC Architecture", "RESTful Services", "Database Design", "Template Engines", "CRUD Operations", "Object-Oriented Design", "Responsive Web Design", "Team Collaboration"],
  keyFeatures: [
    "Customer-facing product catalog with detailed descriptions and order placement functionality",
    "Secure admin dashboard for inventory management, product updates, and order tracking",
    "Role-based authentication system with encrypted password storage and session handling",
    "Product CRUD operations using Spring Boot and MySQL for efficient inventory management",
    "Responsive design using Bootstrap for optimal user experience across all devices",
    "Server-side rendering with Thymeleaf templating engine for dynamic HTML views",
    "Centralized MySQL database for reliable storage of product, user, and order data",
    "Clean separation between customer and admin functionalities with role-based access"
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
    { title: "System Architecture", icon: "layers" },
    { title: "Database Integration", icon: "database" },
    { title: "Team Collaboration", icon: "git-branch" }
  ],
  caseStudy: {
    overview: "The system follows a layered MVC architecture, ensuring clear separation of concerns between the data layer, business logic, and presentation layer. This approach improves maintainability, scalability, and team collaboration while addressing the common challenges faced by small retail businesses in managing their online operations.\n\nAs part of the Object Oriented Analysis and Design module at SLIIT, this project provided practical experience in applying OOAD principles to a real-world business scenario, from requirements analysis to implementation and testing.",
    problems: [
      "Lack of a centralized online product catalog",
      "Manual product and inventory management",
      "No structured order tracking system",
      "Limited visibility into customer orders",
      "Poor separation between customer and admin functionalities"
    ],
    solutions: {
      problem: [
        "Manual product handling and inventory management",
        "No online storefront for customers to browse products",
        "Unsecured admin access to business operations",
        "Scattered order data and customer information",
        "Poor UI responsiveness across different devices"
      ],
      solution: [
        "Product CRUD operations with Spring Boot backend",
        "Customer-facing product catalog with intuitive UI",
        "Role-based authentication and secure admin dashboard",
        "Centralized MySQL database for reliable data persistence",
        "Bootstrap-based responsive design for all screen sizes"
      ],
      impact: [
        "Efficient inventory management and product updates",
        "Improved customer shopping experience and engagement",
        "Protected admin functionality and secure business operations",
        "Reliable data storage and easy order tracking",
        "Better usability across desktop, tablet, and mobile devices"
      ]
    },
    myRole: {
      title: "Backend Developer & Frontend Integration",
      responsibilities: [
        "Implemented product CRUD features using Spring Boot and MySQL",
        "Developed customer-facing product views using Thymeleaf and Bootstrap",
        "Integrated frontend templates with backend business logic",
        "Designed database schema for products, orders, and users",
        "Implemented role-based authentication and access control",
        "Ensured responsive design across all device types",
        "Collaborated with team members using Git and GitHub version control"
      ]
    },
    technicalImplementation: {
      description: "The backend was developed using Spring Boot, providing RESTful services and business logic for product management, order handling, and user authentication. MySQL was used as the persistent data store, ensuring reliable storage of product, user, and order data. The frontend was built using Thymeleaf for server-side rendering, combined with Bootstrap to deliver a responsive and visually consistent interface. This approach allowed rapid development while maintaining clear integration between frontend views and backend logic.",
      backend: [
        "Java Spring Boot framework for business logic and APIs",
        "Spring MVC architecture for clean separation of concerns",
        "MySQL database with optimized schema design",
        "JPA/Hibernate for object-relational mapping",
        "Spring Security for authentication and authorization"
      ],
      frontend: [
        "Thymeleaf template engine for server-side rendering",
        "Bootstrap framework for responsive design and UI components",
        "HTML5 and CSS3 for semantic markup and styling",
        "JavaScript for interactive client-side functionality",
        "Responsive layouts for all screen sizes and devices"
      ],
      architecture: [
        "MVC (Model-View-Controller) architecture pattern",
        "Layered architecture with clear separation of concerns",
        "RESTful service design for backend APIs",
        "Object-oriented design principles throughout the codebase",
        "Modular structure for maintainability and scalability"
      ]
    },
    results: {
      areas: [
        "Full-Stack Development",
        "OOAD Principles",
        "Database Integration",
        "UI Development",
        "Team Collaboration"
      ],
      outcomes: [
        "Practical experience with Java-based web applications",
        "Applied MVC and modular design patterns in practice",
        "Reliable CRUD operations with MySQL database",
        "Responsive layouts using Bootstrap framework",
        "Version-controlled teamwork with Git and GitHub"
      ]
    },
    conclusion: "Dogwood Flora strengthened my understanding of object-oriented design, MVC architecture, and full-stack Java development. Building both customer-facing and admin-level features reinforced the importance of clean system design, role-based access control, and maintainable code structure. The project highlighted how well-designed software can significantly improve small business operations by automating workflows, enhancing customer engagement, and providing reliable data management. Overall, Dogwood Flora represents a solid foundation in enterprise-style Java web application development and demonstrates practical application of software engineering principles in a real-world context."
  },
  hasVideo: false,
  videoUrl: null
}