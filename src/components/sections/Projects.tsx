"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import sreeData from "@/data/sree.json";

// Helper function to get project data from JSON
const getProjectDataFromJSON = (projectId: string) => {
  const projectMappings: { [key: string]: string } = {
    "agrivision": "AgriVision",
    "health-buddy": "Health Buddy", 
    "study-buddy": "Study Buddy",
    "sarthi": "Sarthi",
    "suraksha-suchak": "Suraksha Suchak",
    "code-off-duty": "Code Off Duty"
  };
  
  const projectName = projectMappings[projectId];
  if (!projectName) return null;
  
  return sreeData.projects.find(project => 
    project.name.toLowerCase().includes(projectName.toLowerCase()) ||
    project.name.toLowerCase() === projectName.toLowerCase()
  );
};

const Projects = () => {
  // Base projects structure with hardcoded data as fallback
  const baseProjects = [
    {
      id: "agrivision",
      title: "AgriVision",
      description: "A comprehensive agricultural platform with AI-powered crop detection, growth monitoring, and market insights.",
      image: "/assets/images/projects/agrivision/landingpage.png",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "Express.js"],
      features: [
        "AI-powered plant disease detection",
        "Crop growth monitoring",
        "Market price predictions",
        "Voice-to-text functionality",
        "Weather-based recommendations"
      ],
      liveDemo: "#",
      github: "#",
      category: "Full Stack",
      timeline: "3 months",
      team: "4 members"
    },
    {
      id: "health-buddy",
      title: "Health Buddy",
      description: "A health management system with disease prediction, hospital finder, and medicine tracking.",
      image: "/assets/images/projects/health-buddy/dashbord.png",
      technologies: ["React", "Node.js", "Machine Learning", "MongoDB", "Express.js", "Geolocation API"],
      features: [
        "Heart disease prediction using ML",
        "Nearby hospitals and pharmacies finder",
        "Medicine tracking and reminders",
        "Health dashboard with analytics",
        "Emergency contact integration"
      ],
      liveDemo: "#",
      github: "#",
      category: "Healthcare",
      timeline: "4 months",
      team: "3 members"
    },
    {
      id: "study-buddy",
      title: "Study Buddy",
      description: "An educational platform with coding challenges, roadmaps, and peer-to-peer learning features.",
      image: "/assets/images/projects/study-buddy/dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Code Editor API", "OAuth"],
      features: [
        "Interactive coding challenges",
        "Learning roadmaps",
        "1v1 coding competitions",
        "Real-time collaboration",
        "Progress tracking"
      ],
      liveDemo: "#",
      github: "#",
      category: "Education",
      timeline: "2 months",
      team: "2 members"
    },
    {
      id: "sarthi",
      title: "Sarthi",
      description: "A comprehensive logistics and transportation management system with payment integration.",
      image: "/assets/images/projects/sarthi/home.png",
      technologies: ["React", "Node.js", "Razorpay", "MongoDB", "Express.js", "Google Maps API"],
      features: [
        "Real-time tracking",
        "Payment gateway integration",
        "Route optimization",
        "Driver management",
        "Customer feedback system"
      ],
      liveDemo: "#",
      github: "#",
      category: "Logistics",
      timeline: "3 months",
      team: "4 members"
    },
    {
      id: "suraksha-suchak",
      title: "Suraksha Suchak",
      description: "A security monitoring and alert system for enhanced safety and surveillance.",
      image: "/assets/images/projects/surasksha-suchak/1.jpg",
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io", "Computer Vision"],
      features: [
        "Real-time video monitoring",
        "Automatic threat detection",
        "Emergency alert system",
        "Multi-camera support",
        "Mobile notifications"
      ],
      liveDemo: "#",
      github: "#",
      category: "Security",
      timeline: "5 months",
      team: "5 members"
    },
    {
      id: "code-off-duty",
      title: "Code Off Duty",
      description: "A competitive programming platform with contests, leaderboards, and skill assessments.",
      image: "/assets/images/projects/code-off-duty/1.png",
      technologies: ["React", "Node.js", "Judge0 API", "MongoDB", "Socket.io", "Redis"],
      features: [
        "Online code execution",
        "Contest management",
        "Real-time leaderboards",
        "Skill-based matching",
        "Performance analytics"
      ],
      liveDemo: "#",
      github: "#",
      category: "EdTech",
      timeline: "4 months",
      team: "3 members"
    }
  ];

  // Enhanced projects with JSON data integration
  const projects = baseProjects.map(project => {
    const jsonData = getProjectDataFromJSON(project.id);
    return {
      ...project,
      liveDemo: jsonData?.liveDemo || jsonData?.deploymentLink || project.liveDemo,
      github: jsonData?.githubLink || project.github
    };
  });

  const categories = ["All", "Full Stack", "Healthcare", "Education", "Logistics", "Security", "EdTech"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 cursor-default"
            whileHover={{ 
              scale: 1.05,
              backgroundImage: "linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6, #ec4899)",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.5)"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto cursor-default"
            whileHover={{ 
              scale: 1.02,
              color: "#10b981"
            }}
            transition={{ duration: 0.3 }}
          >
            A showcase of my work including full-stack applications, machine learning projects, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {project.team}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-xs rounded border border-border/50">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-1">
                        <span className="h-1 w-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-border hover:bg-muted px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </motion.a>
                  </div>
                  <motion.a
                    href={`/project/${project.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-muted hover:bg-muted/80 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-border/50"
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
