import { ProjectData } from '../types'

export const smartCampusProject: ProjectData = {
  id: 8,
  slug: "smart-campus-mobile-app",
  title: "SMART CAMPUS",
  subtitle: "MOBILE APPLICATION (UI/UX DESIGN)",
  category: "UI/UX Design",
  description: "A centralized Smart Campus mobile application supporting Students, Lecturers, and Administrators.",
  fullDescription: "Designed a Smart Campus mobile application UI/UX that supports three primary user roles: Students, Lecturers, and Administrators. The application centralizes academic, administrative, and communication services into a single platform, improving usability, accessibility, and operational efficiency across the campus.",
  detailedDescription: "The design applies Human–Computer Interaction (HCI) principles to solve real campus problems such as fragmented systems, inefficient communication, and poor information visibility.",
  image: "/images/smart-campus-high-fidelity.png",
  images: [
    "/images/smart-campus-high-fidelity.png",
    "/images/smart-campus-low-fidelity.png"
  ],
  technologies: ["Figma", "UI/UX Design", "Human–Computer Interaction", "Wireframing", "Prototyping", "Usability Testing"],
  skills: ["UI/UX Design", "Role-Based Interface Design", "HCI Principles", "Mobile App UX", "Accessibility Design", "Interaction Design"],
  keyFeatures: [
    "Personalized student dashboard (Schedules, Results, Attendance)",
    "Lecturer dashboard (Attendance marking, Student management)",
    "Admin dashboard (User management, System monitoring)",
    "Campus announcements & notifications",
    "Role-based access control",
    "Academic schedule & exam timetables",
    "Course & timetable management for admins",
    "Unified color scheme and typography",
    "Mobile-first layouts for all roles"
  ],
  period: "2025",
  liveUrl: "https://www.figma.com/design/ZKmdBPOqjPVRRkzn5sIXah/libraray-system?node-id=0-1&p=f&t=3SW7eBGWtTTQyBnu-0",
  githubUrl: "https://www.figma.com/design/yvUJ1ye36c4lcS3VROYQc8/HCI-Assignment-1?node-id=26-559&p=f&t=uPmuiB0sKTelx6DN-0",
  timeline: "Smart Campus UI/UX Design Project",
  role: "UI/UX Designer",
  teamSize: "Individual Project",
  results: [
    { title: "Role-Based Design", icon: "users" },
    { title: "HCI Principles", icon: "brain" },
    { title: "Interactive Prototype", icon: "mouse-pointer" },
    { title: "Accessibility", icon: "accessibility" },
    { title: "Usability Testing", icon: "search" }
  ],
  caseStudy: {
    overview: "Designed a Smart Campus mobile application UI/UX that supports three primary user roles: Students, Lecturers, and Administrators. The application centralizes academic, administrative, and communication services into a single platform, improving usability, accessibility, and operational efficiency across the campus.\n\nThe design applies Human–Computer Interaction (HCI) principles to solve real campus problems such as fragmented systems, inefficient communication, and poor information visibility.",
    pipeline: [
      { step: "Research", description: "Conducted informal interviews and surveys with students and lecturers to identify common usability pain points." },
      { step: "Wireframing", description: "Created low-fidelity wireframes to define navigation structure, screen hierarchy, and role-based access for Students, Lecturers, and Admins." },
      { step: "Prototyping", description: "Developed a high-fidelity interactive prototype using Figma with refined visuals and interactions." },
      { step: "Testing", description: "Conducted usability testing with students, lecturers, and admin users to validate the design." }
    ],
    problemsIntro: "Conceptual Design & User Research\nIdentified key campus challenges through user research:",
    problems: [
      "Fragmented academic and administrative systems",
      "Inefficient communication between students and lecturers",
      "Poor visibility of schedules and campus information"
    ],
    problemsMotivation: "User research was conducted to understand the unique needs of each user role. Students need quick access to schedules and results, lecturers require tools for attendance and course management, and admins need clear dashboards for system operations.",
    technicalImplementation: {
      description: "Low-Fidelity Prototype (Wireframes & User Flows)\nLow-fidelity wireframes were created to define navigation structure, screen hierarchy, and role-based access. For students, this included dashboards with timetables and attendance. For lecturers, class lists and attendance marking flows. For admins, user and schedule management screens.\n\nHigh-Fidelity Prototype (Figma)\nDeveloped a high-fidelity interactive prototype using Figma. Features include personalized dashboards, class schedules, attendance overview, and academic results for students. Lecturers have teaching overviews and attendance marking interfaces. Admins have analytics and user management controls.\n\nUsability & Layout Optimization\nMobile-first layouts for all roles. Frequently used actions prioritized on dashboards. Clear separation of student, lecturer, and admin interfaces. Consistent interaction patterns across the app.\n\nAccessibility & Inclusive Design\nHigh-contrast color combinations, readable font sizes, and touch-friendly UI components. Minimal text complexity for quick comprehension and inclusive design for diverse user capabilities.",
      tools: ["Figma", "UI/UX Design", "Human–Computer Interaction", "Wireframing", "Prototyping", "Usability Testing"]
    },
    conclusion: "Usability Testing & Design Analysis\nUsability testing was conducted with students, lecturers, and admin-type users. Findings showed that navigation was intuitive across roles and dashboard clarity improved task completion time. Iterations were made to improve dashboard layouts, enhance visual hierarchy, and simplify navigation for admin workflows."
  }
}
