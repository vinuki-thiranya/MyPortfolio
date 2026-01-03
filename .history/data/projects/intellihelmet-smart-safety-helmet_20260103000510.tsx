import { ProjectData } from '../types'

export const intelliHelmetProject: ProjectData = {
  id: 5,
  slug: "intellihelmet-smart-safety-helmet",
  title: "INTELLIHELMET",
  subtitle: "THE SMART SAFETY HELMET",
  description: "Developed a smart safety helmet tailored for miners with advanced sensor integration including atmospheric pressure, gas detection, heart rate monitoring, and temperature sensors.",
  fullDescription: "In our first semester at SLIIT, my team and I undertook an ambitious project to develop a smart safety helmet tailored for miners. The primary objective was to enhance miners' safety and monitoring through cutting-edge technology integration.",
  detailedDescription: "We created a comprehensive database to store vital information about miners, including their personal details, health records, and working hours. This database was designed to ensure quick access and real-time updates, improving overall safety and response times.",
  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Arduino", "IoT", "BMP280", "MQ135", "MAX30102", "Web Design", "HTML/CSS"],
  skills: ["IoT Development", "Sensor Integration", "Real-time Monitoring", "Database Design", "Web Dashboard", "Safety Systems"],
  keyFeatures: [
    "BMP280 Atmospheric Pressure Sensor: Used to measure altitude and monitor atmospheric pressure changes within the mining environment",
    "MQ135 Gas Sensor: Essential for detecting the presence of harmful gases, thereby preventing exposure to dangerous air quality",
    "MAX30102 Heart Rate Sensor: Monitors the heart rate of miners in real time, allowing for immediate response if irregularities are detected",
    "Temperature Sensor: Tracks the ambient temperature to prevent overheating and ensure a safe working environment",
    "Vibration Motor: Provides immediate haptic feedback in case of emergencies or when the sensors detect unsafe conditions",
    "Supervisor Dashboard: Created a dedicated website for mine supervisors to monitor miners' real-time data with comprehensive insights"
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
    { title: "Emergency Response", icon: "alert" }
  ]
}