import { ProjectData } from '../types'

export const distributedLoggingProject: ProjectData = {
  id: 3,
  slug: "distributed-logging-system",
  title: "DISTRIBUTED LOGGING SYSTEM",
  subtitle: "FAULT-TOLERANT DISTRIBUTED LOGGING ARCHITECTURE",
  description: "A fault-tolerant backend platform designed to ensure high availability, consistency, and reliability of log data in a distributed environment, maintaining accurate event ordering during node failures.",
  fullDescription: "The Distributed Logging System is a fault-tolerant backend platform designed to ensure high availability, consistency, and reliability of log data in a distributed environment. The system was built to remain operational during node failures while maintaining accurate event ordering and reliable log replication across multiple servers.",
  detailedDescription: "Developed as part of a Distributed Systems course at SLIIT, the project focuses on solving real-world challenges such as clock drift, network latency, and partial system failures. By combining time synchronization, heartbeat monitoring, data replication, and fault-tolerant design principles, the system ensures accurate and consistent log generation even under adverse conditions.",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["Python", "FastAPI", "Flask", "PostgreSQL", "SQLite", "NTP", "GitHub"],
  skills: ["Distributed Systems", "Time Synchronization", "Fault Tolerance", "Heartbeat Algorithms", "Clock Skew Correction", "Load Testing", "System Architecture", "Performance Optimization", "Distributed Coordination"],
  keyFeatures: [
    "Integrated NTP (Network Time Protocol) with fallback sources including pool.ntp.org, time.google.com, and time.windows.com",
    "Collected and analyzed heartbeat timestamps to measure clock skew across nodes",
    "Designed a time-window-based buffering mechanism to reorder out-of-sync logs without degrading responsiveness",
    "Implemented dynamic delta offset correction for nodes with consistent clock drift while preserving raw timestamps for auditing",
    "Simulated real-world failure scenarios such as clock drift, network latency, and load spikes",
    "Benchmarked synchronization intervals and finalized a 10-second sync configuration, achieving ±5 ms clock skew with minimal overhead",
    "Heartbeat-based monitoring for node health and fault detection",
    "Data replication strategies for log consistency across distributed nodes",
    "Resilient architecture maintaining operation during partial system failures"
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
    { title: "System Reliability", icon: "check" },
    { title: "Clock Accuracy", icon: "target" },
    { title: "Debugging Quality", icon: "search" }
  ],
  caseStudy: {
    overview: "In distributed environments, logs are critical for monitoring, debugging, and auditing system behavior. However, inconsistent clocks and node failures can lead to incorrect log ordering and unreliable system analysis. This project aimed to design a distributed logging platform that maintains accurate timestamps, preserves log consistency, and remains available even when individual nodes fail.\n\nThe system incorporates time synchronization, fault tolerance mechanisms, and replication strategies to ensure that logs generated across different nodes can be reliably ordered and analyzed. Emphasis was placed on accuracy, resilience, and minimal performance overhead while providing hands-on experience with distributed system fundamentals and resilience engineering.",
    problems: [
      "Clock drift across server nodes causing incorrect log ordering",
      "Network latency leading to delayed or out-of-order log entries",
      "Node failures affecting log availability and consistency",
      "Difficulty debugging distributed systems without reliable timestamps"
    ],
    solutions: {
      problem: [
        "Clock drift between nodes causing timestamp inconsistencies",
        "Out-of-order log entries due to network latency",
        "Node instability and failures affecting system reliability",
        "Timestamp inaccuracies impacting debugging and analysis",
        "Performance overhead from synchronization mechanisms"
      ],
      solution: [
        "NTP-based time synchronization with fallback servers",
        "Time-window-based buffering mechanism for log reordering",
        "Heartbeat-based monitoring for fault detection and node health",
        "Dynamic delta offset correction for consistent timestamp accuracy",
        "Optimized synchronization intervals to minimize system impact"
      ],
      impact: [
        "Consistent system time across all distributed nodes",
        "Correct log ordering and event sequence maintenance",
        "Improved fault detection and system monitoring capabilities",
        "Accurate event timestamps for reliable debugging and auditing",
        "Minimal performance impact while maintaining synchronization"
      ]
    },
    myRole: {
      title: "Time Synchronization & Fault Tolerance Module Developer",
      responsibilities: [
        "Designed and implemented the Time Synchronization & Fault Tolerance Module",
        "Integrated NTP (Network Time Protocol) with fallback sources including pool.ntp.org, time.google.com, and time.windows.com",
        "Collected and analyzed heartbeat timestamps to measure clock skew across nodes",
        "Designed a time-window-based buffering mechanism to reorder out-of-sync logs without degrading responsiveness",
        "Implemented dynamic delta offset correction for nodes with consistent clock drift while preserving raw timestamps for auditing",
        "Simulated real-world failure scenarios such as clock drift, network latency, and load spikes",
        "Benchmarked synchronization intervals and finalized a 10-second sync configuration, achieving ±5 ms clock skew with minimal overhead",
        "Ensured accurate log timestamps and system resilience across distributed nodes"
      ]
    },
    technicalImplementation: {
      description: "The system was implemented using Python, with FastAPI and Flask used for service communication and API handling. Time synchronization was achieved using NTP, while heartbeat algorithms continuously monitored node health and clock accuracy. A buffering and reordering mechanism was introduced to handle delayed logs caused by network latency or temporary clock inconsistencies. The system was tested under simulated distributed conditions to validate fault tolerance, synchronization accuracy, and performance stability. This architecture ensures that logs remain consistent, traceable, and reliable, even when individual nodes experience failures or timing inconsistencies.",
      architecture: [
        "Python-based distributed system architecture",
        "FastAPI for high-performance RESTful APIs",
        "Flask for additional service components",
        "PostgreSQL for primary data storage",
        "SQLite for lightweight local caching",
        "NTP integration for precise time synchronization"
      ],
      mechanisms: [
        "Network Time Protocol (NTP) with multiple fallback servers",
        "Heartbeat algorithms for continuous node monitoring",
        "Time-window-based buffering for log ordering",
        "Dynamic delta offset correction for clock drift",
        "Replication strategies for data consistency"
      ],
      testing: [
        "Simulated clock drift scenarios",
        "Network latency and packet loss testing",
        "Load spike simulations for performance validation",
        "Node failure and recovery testing",
        "Benchmarking of synchronization intervals"
      ]
    },
    results: {
      metrics: [
        "Clock Accuracy",
        "Fault Tolerance",
        "Log Reliability",
        "System Stability",
        "Debugging Quality"
      ],
      impacts: [
        "±5 ms clock skew across nodes",
        "Continued operation during node failures",
        "Correct event ordering under network latency",
        "Resilient performance under simulated failures",
        "Improved traceability and auditing capabilities"
      ]
    },
    conclusion: "This project deepened my understanding of distributed system challenges, particularly time synchronization and fault tolerance. Designing accurate timestamping mechanisms reinforced the importance of consistent time in debugging and monitoring distributed applications. The project highlighted how careful engineering—combining NTP, heartbeat monitoring, buffering strategies, and performance tuning—can significantly improve system reliability without sacrificing responsiveness. Overall, the Distributed Logging System showcases my ability to design resilient backend systems and handle complex distributed coordination problems while providing practical experience with real-world distributed system challenges."
  },
  hasVideo: false,
  videoUrl: null
}