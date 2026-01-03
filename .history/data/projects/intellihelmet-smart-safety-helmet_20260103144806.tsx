import { ProjectData } from '../types'

export const intelliHelmetProject: ProjectData = {
  id: 5,
  slug: "intellihelmet-smart-safety-helmet",
  title: "INTELLIHELMET",
  subtitle: "SMART SAFETY HELMET FOR REAL-TIME MINER MONITORING",
  description: "INTELLIHELMET is a smart safety helmet designed to enhance miner safety through real-time health and environmental monitoring. Developed during the first semester at SLIIT, the project aimed to reduce workplace accidents and improve emergency response by combining sensor technology, embedded systems, and a web-based monitoring platform.",
  fullDescription: "The system continuously tracks vital health metrics and environmental conditions within mining environments, providing instant alerts when unsafe conditions are detected. By integrating hardware sensors with a centralized database and supervisor dashboard, INTELLIHELMET demonstrates how IoT solutions can improve safety, situational awareness, and decision-making in high-risk industries.",
  detailedDescription: "Mining environments are inherently dangerous due to hazardous gases, extreme temperatures, and physically demanding working conditions. INTELLIHELMET was developed to provide miners and supervisors with real-time insights into both environmental and physiological conditions. The helmet collects sensor data and transmits it to a centralized system where it is stored, processed, and visualized through a web dashboard.",
  image: "/images/intellihelmet-2.jpg",
  images: [
    "/images/intellihelmet-1.jpg",
    "/images/intellihelmet-2.jpg"
  ],
  technologies: ["Arduino", "IoT", "BMP280", "MQ135", "MAX30102", "Temperature Sensor", "Vibration Motor", "HTML5", "CSS3", "Database Design"],
  skills: ["IoT Development", "Sensor Integration", "Real-time Monitoring", "Database Design", "Web Dashboard", "Safety Systems", "Embedded Systems", "Hardware Integration", "Team Collaboration", "Prototype Development"],
  keyFeatures: [
    "BMP280 Atmospheric Pressure Sensor for monitoring altitude and atmospheric pressure changes in mining environments",
    "MQ135 Gas Sensor for detecting harmful gases and preventing exposure to dangerous air quality",
    "MAX30102 Heart Rate Sensor for real-time health monitoring and immediate response to irregularities",
    "Temperature Sensor for tracking ambient temperature to prevent overheating and heat-related risks",
    "Vibration Motor for immediate haptic feedback during emergencies or unsafe conditions",
    "Web-based Supervisor Dashboard for centralized real-time monitoring of miners' status",
    "Arduino-based embedded system for reliable data collection and transmission",
    "Comprehensive database system for storing miner details, health records, and working hours",
    "Real-time alert system for faster emergency response and intervention"
  ],
  period: "Jan 2023 - Nov 2023",
  liveUrl: "#",
  githubUrl: "#",
  timeline: "11 months",
  role: "IoT Developer & Database Designer",
  teamSize: "Team Project",
  results: [
    { title: "Safety Enhancement", icon: "shield" },
    { title: "Real-time Monitoring", icon: "activity" },
    { title: "Emergency Response", icon: "alert" },
    { title: "IoT Development", icon: "cpu" },
    { title: "Sensor Integration", icon: "zap" }
  ],
  caseStudy: {
    overview: "INTELLIHELMET was developed to address critical safety concerns in mining environments, where exposure to harmful gases, atmospheric instability, and health emergencies pose significant risks. The project focused on creating a wearable, real-time safety monitoring system that operates continuously without disrupting miners' work.\n\nSupervisors can monitor miners' status in real time through a web dashboard, allowing faster intervention during emergencies and improved overall safety management. This first-year project marked the beginning of my engineering journey, combining hardware, software, and data systems to solve real-world safety challenges.",
    problems: [
      "Exposure to harmful gases in mining environments",
      "Sudden atmospheric pressure changes affecting miner safety",
      "Heat stress and overheating risks during extended work hours",
      "Undetected health irregularities and emergencies",
      "Delayed emergency response and intervention"
    ],
    solutions: {
      problem: [
        "Harmful gas exposure in confined mining spaces",
        "Atmospheric instability and pressure changes",
        "Health emergencies and undetected physical distress",
        "Overheating and heat-related health risks",
        "Slow or delayed alert systems in emergency situations",
        "Poor visibility of miner status for supervisors"
      ],
      solution: [
        "MQ135 gas sensor integration for air quality monitoring",
        "BMP280 pressure sensor for atmospheric stability tracking",
        "MAX30102 heart rate sensor for continuous health monitoring",
        "Temperature sensor for heat stress prevention",
        "Vibration motor for immediate haptic feedback alerts",
        "Web-based supervisor dashboard for centralized monitoring"
      ],
      impact: [
        "Early detection of unsafe air quality conditions",
        "Increased awareness of pressure and altitude changes",
        "Real-time health tracking and emergency detection",
        "Prevention of heat-related risks and overheating",
        "Immediate haptic feedback for faster response",
        "Centralized real-time monitoring for supervisors"
      ]
    },
    myRole: {
      title: "IoT Developer & Database Designer",
      responsibilities: [
        "Integrated multiple sensors (BMP280, MQ135, MAX30102) with Arduino microcontroller",
        "Designed and implemented the comprehensive database system for miner data storage",
        "Developed data transmission protocols between hardware and central system",
        "Created web-based supervisor dashboard for real-time monitoring",
        "Implemented vibration motor alert system for emergency notifications",
        "Collaborated with team members on hardware assembly and testing",
        "Designed database schema for storing miner details, health records, and sensor data",
        "Ensured reliable real-time data collection and transmission"
      ]
    },
    technicalImplementation: {
      description: "INTELLIHELMET uses an Arduino-based embedded system to collect sensor data from the helmet. The data is transmitted to a backend system where it is stored in a structured database. A web-based dashboard allows supervisors to view real-time metrics and historical records, supporting faster decision-making during emergencies. The system design emphasizes reliability, real-time responsiveness, and ease of use, ensuring that safety information is always accessible when needed.",
      hardware: [
        "Arduino microcontroller for central processing",
        "BMP280 atmospheric pressure sensor for altitude monitoring",
        "MQ135 gas sensor for harmful gas detection",
        "MAX30102 heart rate sensor for physiological monitoring",
        "Temperature sensor for ambient condition tracking",
        "Vibration motor for immediate haptic feedback"
      ],
      software: [
        "Embedded C/C++ for Arduino programming",
        "Database design for structured data storage",
        "HTML5 and CSS3 for web dashboard development",
        "Data transmission protocols for real-time communication",
        "Alert and notification system logic"
      ],
      system: [
        "Real-time data collection and transmission",
        "Centralized database for miner information",
        "Web-based monitoring interface for supervisors",
        "Emergency alert and notification system",
        "Modular design for easy sensor integration and updates"
      ]
    },
    results: {
      areas: [
        "IoT Development",
        "Sensor Integration",
        "Web Development",
        "Safety Systems",
        "Team Collaboration"
      ],
      outcomes: [
        "Hands-on experience with embedded systems and Arduino",
        "Real-time multi-sensor data processing and integration",
        "Dashboard and login system design for supervisor monitoring",
        "Understanding of real-world safety use cases in hazardous environments",
        "Successful first-year group project completion with team collaboration"
      ]
    },
    conclusion: "INTELLIHELMET marked my first large-scale engineering project and laid the foundation for my interest in building practical, technology-driven solutions. The project reinforced the importance of integrating hardware and software to solve real-world problems, especially in safety-critical domains. By combining sensors, embedded systems, databases, and web interfaces, INTELLIHELMET showcases my ability to work across multiple technology layers and collaborate effectively in a team environment. It highlights how thoughtful engineering can directly contribute to improving human safety and well-being, demonstrating the potential of IoT technologies to create meaningful impact in high-risk industries."
  },
  hasVideo: false,
  videoUrl: null
}