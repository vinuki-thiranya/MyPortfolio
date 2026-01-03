import { ProjectData } from '../types'

export const distributedLoggingProject: ProjectData = {
  id: 3,
  slug: "distributed-logging-system",
  title: "DISTRIBUTED LOGGING SYSTEM",
  subtitle: "FAULT-TOLERANT DISTRIBUTED ARCHITECTURE",
  description: "Developed a fault-tolerant distributed logging system designed to maintain high availability, consistency, and reliability even during node failures.",
  fullDescription: "Specialized in Time Synchronization & Fault Tolerance Module using NTP and heartbeat algorithms. The system featured fault tolerance, data replication and consistency, time synchronization, and consensus algorithms to ensure secure and robust user authentication in a distributed environment.",
  detailedDescription: "In a distributed system, accurate and consistent timestamps are crucial for event ordering and debugging. I developed a robust time synchronization module to ensure log accuracy across all server nodes.",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Python", "FastAPI", "PostgreSQL", "Flask", "SQLite", "NTP"],
  skills: ["Distributed Systems", "Time Synchronization", "Fault Tolerance", "Heartbeat Algorithms", "Clock Skew Correction", "Load Testing"],
  keyFeatures: [
    "Used NTP (Network Time Protocol) with fallback configurations to sync server clocks to reliable sources",
    "Collected and analyzed heartbeat timestamps to evaluate clock skew and tune synchronization intervals",
    "Designed a time-window-based buffering mechanism to reorder out-of-sync logs while maintaining system responsiveness",
    "Implemented dynamic delta offset correction for nodes with consistent drift to ensure accurate log generation",
    "Simulated real-world scenarios (clock drift, network latency, and load spikes) to test the resilience and accuracy",
    "Benchmarked sync intervals and finalized a configuration with 10-second syncs, achieving ±5ms skew with minimal overhead"
  ],
  period: "Apr 2025 - May 2025",
  liveUrl: "https://github.com/it23425590/ds_project_group08",
  githubUrl: "https://github.com/it23425590/ds_project_group08",
  timeline: "2 months",
  role: "Time Synchronization & Fault Tolerance Module Developer",
  teamSize: "Team Project",
  results: [
    { title: "Time Synchronization", icon: "clock" },
    { title: "Fault Tolerance", icon: "shield" },
    { title: "System Reliability", icon: "check" }
  ]
}