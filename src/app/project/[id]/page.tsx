"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import sreeData from "@/data/sree.json";

// Helper function to get project data from JSON
const getProjectFromJSON = (id: string) => {
  const projectMappings: { [key: string]: string } = {
    "agrivision": "AgriVision",
    "health-buddy": "Health Buddy",
    "study-buddy": "Study Buddy",
    "sarthi": "Sarthi",
    "suraksha-suchak": "Suraksha Suchak",
    "code-off-duty": "Code Off Duty"
  };
  
  const projectName = projectMappings[id];
  if (!projectName) return null;
  
  return sreeData.projects.find(project => 
    project.name.toLowerCase().includes(projectName.toLowerCase())
  );
};

// Project data with all images and details
const projectsData = {
  "agrivision": {
    id: "agrivision",
    title: "AgriVision",
    description: "A comprehensive agricultural platform with AI-powered crop detection, growth monitoring, and market insights.",
    fullDescription: "AgriVision is a revolutionary agricultural platform that combines artificial intelligence, machine learning, and IoT technologies to transform modern farming. The platform provides farmers with intelligent insights for crop management, disease detection, growth monitoring, and market analysis.",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "Express.js", "OpenCV", "FastAPI"],
    features: [
      "AI-powered plant disease detection using computer vision",
      "Real-time crop growth monitoring with IoT sensors",
      "Market price predictions using historical data analysis",
      "Voice-to-text functionality for easy data input",
      "Weather-based recommendations and alerts",
      "Crop planning and scheduling tools",
      "Yield prediction and optimization",
      "Mobile-responsive dashboard"
    ],
    images: [
      "/assets/images/projects/agrivision/landingpage.png",
      "/assets/images/projects/agrivision/apiofondemand.png",
      "/assets/images/projects/agrivision/cropdetails.png",
      "/assets/images/projects/agrivision/ecosystem.png",
      "/assets/images/projects/agrivision/plantai.png",
      "/assets/images/projects/agrivision/plantfind.png",
      "/assets/images/projects/agrivision/plantgrpth.png"
    ],
    liveDemo: "#",
    github: "#",
    category: "Full Stack",
    timeline: "3 months",
    team: "4 members",
    highlights: [
      "95% accuracy in disease detection",
      "30% increase in crop yield for pilot farmers",
      "Real-time monitoring of 500+ parameters"
    ]
  },
  "health-buddy": {
    id: "health-buddy",
    title: "Health Buddy",
    description: "A health management system with disease prediction, hospital finder, and medicine tracking.",
    fullDescription: "Health Buddy is a comprehensive healthcare management platform that leverages machine learning to predict health risks, provides location-based healthcare services, and helps users manage their medications and health records efficiently.",
    technologies: ["React", "Node.js", "Machine Learning", "MongoDB", "Express.js", "Geolocation API", "TensorFlow", "JWT"],
    features: [
      "Heart disease prediction using ML algorithms",
      "Nearby hospitals and pharmacies finder with real-time data",
      "Medicine tracking and reminder system",
      "Health dashboard with comprehensive analytics",
      "Emergency contact integration",
      "Health record management",
      "Appointment scheduling",
      "Telemedicine consultation support"
    ],
    images: [
      "/assets/images/projects/health-buddy/dashbord.png",
      "/assets/images/projects/health-buddy/login.png",
      "/assets/images/projects/health-buddy/heartdiseasePrediction.jpg",
      "/assets/images/projects/health-buddy/nearbyhospitals.png",
      "/assets/images/projects/health-buddy/nearbychemit.png",
      "/assets/images/projects/health-buddy/nearbymedicines.png",
      "/assets/images/projects/health-buddy/1.jpg",
      "/assets/images/projects/health-buddy/2.jpg",
      "/assets/images/projects/health-buddy/3.jpg",
      "/assets/images/projects/health-buddy/4.jpg",
      "/assets/images/projects/health-buddy/5.jpg",
      "/assets/images/projects/health-buddy/6.jpg",
      "/assets/images/projects/health-buddy/7.jpg",
      "/assets/images/projects/health-buddy/8.jpg",
      "/assets/images/projects/health-buddy/9.jpg",
      "/assets/images/projects/health-buddy/10.jpg"
    ],
    liveDemo: "#",
    github: "#",
    category: "Healthcare",
    timeline: "4 months",
    team: "3 members",
    highlights: [
      "88% accuracy in heart disease prediction",
      "Integration with 200+ healthcare providers",
      "24/7 emergency support system"
    ]
  },
  "study-buddy": {
    id: "study-buddy",
    title: "Study Buddy",
    description: "An educational platform with coding challenges, roadmaps, and peer-to-peer learning features.",
    fullDescription: "Study Buddy is an innovative educational platform designed to enhance learning through interactive coding challenges, personalized learning roadmaps, and collaborative features that connect students worldwide.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Code Editor API", "OAuth", "Redis", "WebRTC"],
    features: [
      "Interactive coding challenges with auto-grading",
      "Personalized learning roadmaps based on skill level",
      "1v1 coding competitions with real-time scoring",
      "Real-time collaboration tools for group projects",
      "Progress tracking and skill assessment",
      "Peer mentoring system",
      "Study group formation",
      "Achievement and certification system"
    ],
    images: [
      "/assets/images/projects/study-buddy/dashboard.png",
      "/assets/images/projects/study-buddy/signup.png",
      "/assets/images/projects/study-buddy/codeeditor.png",
      "/assets/images/projects/study-buddy/code editor 2.png",
      "/assets/images/projects/study-buddy/1 vs 1.png",
      "/assets/images/projects/study-buddy/1 vs 1 2.png",
      "/assets/images/projects/study-buddy/1 vs 1 4.png",
      "/assets/images/projects/study-buddy/1vs1 1.png",
      "/assets/images/projects/study-buddy/roadmap.png",
      "/assets/images/projects/study-buddy/leetcode.png",
      "/assets/images/projects/study-buddy/testyourself1.png",
      "/assets/images/projects/study-buddy/Screenshot 2025-01-11 122732.png"
    ],
    liveDemo: "#",
    github: "#",
    category: "Education",
    timeline: "2 months",
    team: "2 members",
    highlights: [
      "10,000+ coding challenges available",
      "500+ active learning paths",
      "92% user satisfaction rate"
    ]
  },
  "sarthi": {
    id: "sarthi",
    title: "Sarthi",
    description: "A comprehensive logistics and transportation management system with payment integration.",
    fullDescription: "Sarthi is a modern logistics and transportation management platform that streamlines the entire supply chain process, from order management to delivery tracking, with integrated payment solutions and real-time monitoring.",
    technologies: ["React", "Node.js", "Razorpay", "MongoDB", "Express.js", "Google Maps API", "Socket.io", "Redis"],
    features: [
      "Real-time shipment tracking with GPS integration",
      "Secure payment gateway integration with multiple options",
      "AI-powered route optimization for efficiency",
      "Comprehensive driver management system",
      "Customer feedback and rating system",
      "Automated invoice generation",
      "Fleet management and maintenance tracking",
      "Analytics dashboard for business insights"
    ],
    images: [
      "/assets/images/projects/sarthi/home.png",
      "/assets/images/projects/sarthi/aboutus.png",
      "/assets/images/projects/sarthi/work.png",
      "/assets/images/projects/sarthi/paymentgateway.png",
      "/assets/images/projects/sarthi/razor pay.png",
      "/assets/images/projects/sarthi/feedback.png",
      "/assets/images/projects/sarthi/pikle.png"
    ],
    liveDemo: "#",
    github: "#",
    category: "Logistics",
    timeline: "3 months",
    team: "4 members",
    highlights: [
      "40% reduction in delivery time",
      "99.9% payment success rate",
      "50+ fleet partners integrated"
    ]
  },
  "suraksha-suchak": {
    id: "suraksha-suchak",
    title: "Suraksha Suchak",
    description: "A security monitoring and alert system for enhanced safety and surveillance.",
    fullDescription: "Suraksha Suchak is an advanced security monitoring system that uses computer vision and AI to provide comprehensive surveillance solutions for homes, offices, and public spaces with intelligent threat detection capabilities.",
    technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io", "Computer Vision", "OpenCV", "TensorFlow"],
    features: [
      "Real-time video monitoring with HD quality",
      "Automatic threat detection using AI algorithms",
      "Emergency alert system with instant notifications",
      "Multi-camera support and management",
      "Mobile notifications and remote access",
      "Facial recognition and access control",
      "Motion detection and tracking",
      "Cloud storage for recorded footage"
    ],
    images: [
      "/assets/images/projects/surasksha-suchak/1.jpg",
      "/assets/images/projects/surasksha-suchak/2.jpg",
      "/assets/images/projects/surasksha-suchak/3.jpg",
      "/assets/images/projects/surasksha-suchak/4.jpg",
      "/assets/images/projects/surasksha-suchak/5.jpg",
      "/assets/images/projects/surasksha-suchak/6.jpg",
      "/assets/images/projects/surasksha-suchak/7.jpg",
      "/assets/images/projects/surasksha-suchak/8.jpg"
    ],
    liveDemo: "#",
    github: "#",
    category: "Security",
    timeline: "5 months",
    team: "5 members",
    highlights: [
      "99.7% threat detection accuracy",
      "Sub-second alert response time",
      "24/7 monitoring capability"
    ]
  },
  "code-off-duty": {
    id: "code-off-duty",
    title: "Code Off Duty",
    description: "A competitive programming platform with contests, leaderboards, and skill assessments.",
    fullDescription: "Code Off Duty is a comprehensive competitive programming platform designed to enhance coding skills through challenging contests, real-time competitions, and detailed performance analytics.",
    technologies: ["React", "Node.js", "Judge0 API", "MongoDB", "Socket.io", "Redis", "Docker", "Kubernetes"],
    features: [
      "Online code execution with multiple language support",
      "Contest management with automated judging",
      "Real-time leaderboards and rankings",
      "Skill-based matching for fair competition",
      "Comprehensive performance analytics",
      "Problem categorization and difficulty levels",
      "Discussion forums and solution sharing",
      "Virtual contest environments"
    ],
    images: [
      "/assets/images/projects/code-off-duty/1.png",
      "/assets/images/projects/code-off-duty/2.png",
      "/assets/images/projects/code-off-duty/3.png",
      "/assets/images/projects/code-off-duty/4.png",
      "/assets/images/projects/code-off-duty/5.png",
      "/assets/images/projects/code-off-duty/6.png",
      "/assets/images/projects/code-off-duty/7.png",
      "/assets/images/projects/code-off-duty/8.png",
      "/assets/images/projects/code-off-duty/9.png",
      "/assets/images/projects/code-off-duty/10.png",
      "/assets/images/projects/code-off-duty/11.png",
      "/assets/images/projects/code-off-duty/12.png",
      "/assets/images/projects/code-off-duty/13.png",
      "/assets/images/projects/code-off-duty/14.png",
      "/assets/images/projects/code-off-duty/15.png"
    ],
    liveDemo: "#",
    github: "#",
    category: "EdTech",
    timeline: "4 months",
    team: "3 members",
    highlights: [
      "5000+ programming problems",
      "Support for 20+ programming languages",
      "10,000+ registered users"
    ]
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projectsData[resolvedParams.id as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-muted/50 via-muted/70 to-muted/50 border-b border-border/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-gradient-to-r from-primary to-purple-600 text-white text-sm rounded-full shadow-lg">
                {project.category}
              </span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            {/* About Project */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-tl from-card via-card/80 to-muted/30 border border-border/50 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-tr from-muted/20 via-card to-muted/40 border border-border/50 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 card-3d rounded-lg bg-gradient-to-br from-card to-muted/30"
                  >
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technologies Used */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-lg bg-gradient-to-bl from-card via-muted/20 to-card border border-border/50 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="px-4 py-2 card-3d rounded-lg text-sm font-medium bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar - 30% */}
          <div className="lg:col-span-2 space-y-6">
            {/* All Project Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-br from-muted/30 via-card to-muted/50 border border-border/50 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">All Screenshots</h3>
              <div className="space-y-3">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-lg overflow-hidden border border-border/50 shadow-sm bg-gradient-to-br from-card to-muted/20"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-tl from-card via-muted/20 to-card border border-border/50 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Project Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-muted/30 to-card border border-border/30">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Timeline: {project.timeline}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-card to-muted/30 border border-border/30">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Team: {project.team}</span>
                </div>
              </div>
            </motion.div>

            {/* Project Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-lg bg-gradient-to-tr from-muted/40 via-card to-muted/20 border border-border/50 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Key Highlights</h3>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200/30 dark:border-emerald-800/30">
                    <Star className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 p-4 rounded-lg bg-gradient-to-bl from-card via-muted/30 to-card border border-border/50 shadow-lg"
            >
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full card-3d hover:bg-muted/30 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                View Code
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
