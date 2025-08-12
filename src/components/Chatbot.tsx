"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import Image from "next/image";
import sreeData from "@/data/sree.json";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  images?: string[];
  teamMembers?: {
    names: string[];
    photos: string[];
    linkedinUrls: string[];
  };
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm K Sree Charan's AI assistant. I can help you learn more about his skills, projects, and experience. Ask me about specific projects like 'AgriVision' or 'Health Buddy', or hackathons like 'DevFest' or 'Microsoft' to see detailed information with photos! How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showHackathons, setShowHackathons] = useState(false);

  // Helper function to get project details
  const getProjectDetails = (projectName: string) => {
    const project = sreeData.projects.find(p => 
      p.name.toLowerCase().includes(projectName.toLowerCase())
    );
    if (project) {
      return {
        text: `${project.name} is a ${project.category} project. ${project.description} 
        
📅 Duration: ${project.duration}
👥 Team Size: ${project.teamSize}
🔧 Technologies: ${project.technologies.join(", ")}
✨ Features: ${project.features.join(", ")}

🤝 Team Members: ${project.Members ? project.Members.join(", ") : "Not specified"}`,
        images: project.Project_photo.slice(0, 2),
        teamMembers: project.Members && project.member_profile_photos && project.member_linkedin_urls ? {
          names: project.Members,
          photos: project.member_profile_photos,
          linkedinUrls: project.member_linkedin_urls
        } : undefined
      };
    }
    return null;
  };

  // Helper function to get hackathon details
  const getHackathonDetails = (hackathonName: string) => {
    const hackathon = sreeData.hackathons.events.find(h => 
      h.event.toLowerCase().includes(hackathonName.toLowerCase())
    );
    if (hackathon) {
      return {
        text: `${hackathon.event} - ${hackathon.result}
        
Date: ${hackathon.monthYear}
Host: ${hackathon.host}
Team Size: ${hackathon.teamSize}
Technologies: ${hackathon.technologies.join(", ")}
Awards: ${hackathon.awards.join(", ")}
${hackathon.members ? `Team Members: ${hackathon.members.join(", ")}` : ""}`,
        images: hackathon.event_photos.slice(0, 2)
      };
    }
    return null;
  };

  const predefinedResponses = {
    skills: `I have expertise in: ${sreeData.skills.frontend ? Object.keys(sreeData.skills.frontend).join(", ") : ""}, ${sreeData.skills.backend ? Object.keys(sreeData.skills.backend).join(", ") : ""}, and many other modern technologies. I'm passionate about full-stack development and AI/ML solutions.`,
    projects: `Some of my notable projects include ${sreeData.projects.map(p => p.name).join(", ")}. Each project showcases different aspects of my technical skills. Ask me about any specific project to see details and screenshots!`,
    experience: `I'm currently working as a ${sreeData.workExperience[0].role} at ${sreeData.workExperience[0].company} in ${sreeData.workExperience[0].location}. I have ${sreeData.experienceSummary.yearsExperience} years of experience and have completed ${sreeData.experienceSummary.projectsCompleted} projects.`,
    education: `I have a ${sreeData.education[0].degree} in ${sreeData.education[0].field} from ${sreeData.education[0].institution} with ${sreeData.education[0].grade} CGPA. I've also earned various certifications in cloud computing, web development, and AI/ML.`,
    hackathons: `I'm an active participant in hackathons and competitive programming. I've participated in ${sreeData.hackathons.totalParticipated} hackathons with ${sreeData.hackathons.winsOrTopPlaces} wins/top places including ${sreeData.hackathons.events.map(h => h.event).join(", ")}. Ask me about any specific hackathon to see photos and details!`,
    contact: `You can reach me at ${sreeData.contact.email} or connect with me on LinkedIn and GitHub. I'm based in ${sreeData.contact.location} and always open to discussing new opportunities and collaborations!`,
    certifications: `I have several certifications including ${sreeData.certifications.map(c => c.name).join(", ")}. These certifications demonstrate my expertise in various technologies and platforms.`,
    default: "That's an interesting question! I can tell you about my skills, projects, experience, education, hackathons, certifications, or how to contact me. You can also ask about specific projects or hackathons for detailed information with photos. What would you like to know more about?",
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const lowercaseInput = inputText.toLowerCase();
      let response = predefinedResponses.default;
      let images: string[] = [];
      let teamMembers: {
        names: string[];
        photos: string[];
        linkedinUrls: string[];
      } | undefined = undefined;

      // Enhanced keyword matching with image support
      if (lowercaseInput.includes("skill") || lowercaseInput.includes("technology") || lowercaseInput.includes("tech")) {
        response = predefinedResponses.skills;
      } else if (lowercaseInput.includes("project") && !lowercaseInput.includes("agrivision") && !lowercaseInput.includes("health") && !lowercaseInput.includes("study")) {
        response = predefinedResponses.projects;
      } else if (lowercaseInput.includes("experience") || lowercaseInput.includes("job") || lowercaseInput.includes("career")) {
        response = predefinedResponses.experience;
      } else if (lowercaseInput.includes("education") || lowercaseInput.includes("study") || lowercaseInput.includes("degree")) {
        response = predefinedResponses.education;
      } else if (lowercaseInput.includes("hackathon") || lowercaseInput.includes("competition") || lowercaseInput.includes("contest")) {
        response = predefinedResponses.hackathons;
      } else if (lowercaseInput.includes("contact") || lowercaseInput.includes("reach") || lowercaseInput.includes("email")) {
        response = predefinedResponses.contact;
      } else if (lowercaseInput.includes("certification") || lowercaseInput.includes("certificate")) {
        response = predefinedResponses.certifications;
      } else if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi") || lowercaseInput.includes("hey")) {
        response = "Hello! Nice to meet you! I'm here to help you learn more about K Sree Charan. What would you like to know?";
      }
      
      // Specific Project Matching using helper function
      else {
        const projectResult = getProjectDetails(lowercaseInput);
        if (projectResult) {
          response = projectResult.text;
          images = projectResult.images;
          teamMembers = projectResult.teamMembers;
        } else {
          // Specific Hackathon Matching using helper function
          const hackathonResult = getHackathonDetails(lowercaseInput);
          if (hackathonResult) {
            response = hackathonResult.text;
            images = hackathonResult.images;
          }
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
        images: images.length > 0 ? images : undefined,
        teamMembers: teamMembers,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 2 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
        
        {/* Notification Badge */}
        <motion.div
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          1
        </motion.div>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Bot className="h-8 w-8" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs opacity-90">Online • Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  title="Close chat"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === "bot" && (
                          <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                        )}
                        {message.sender === "user" && (
                          <User className="h-4 w-4 mt-1 flex-shrink-0 text-white/80" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          
                          {/* Display Images */}
                          {message.images && message.images.length > 0 && (
                            <div className="mt-3 space-y-2">
                              <div className="grid grid-cols-1 gap-2">
                                {message.images.map((image, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="relative overflow-hidden rounded-lg"
                                  >
                                    <Image
                                      src={image}
                                      alt={`Project/Hackathon screenshot ${index + 1}`}
                                      width={200}
                                      height={128}
                                      className="w-full h-auto max-h-32 object-cover rounded-lg border border-border/20"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                      }}
                                    />
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Display Team Members */}
                          {message.teamMembers && message.teamMembers.names.length > 0 && (
                            <div className="mt-4">
                              <h4 className="text-sm font-semibold mb-3 text-blue-600 dark:text-blue-400">
                                👥 Team Members:
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {message.teamMembers.names.map((name, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="text-center"
                                  >
                                    <motion.button
                                      onClick={() => {
                                        if (message.teamMembers?.linkedinUrls[index]) {
                                          window.open(message.teamMembers.linkedinUrls[index], '_blank');
                                        }
                                      }}
                                      className="block hover:scale-105 transition-transform duration-200"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      title={`Connect with ${name} on LinkedIn`}
                                    >
                                      <div className="relative">
                                        <Image
                                          src={message.teamMembers?.photos[index] || '/assets/images/default-avatar.png'}
                                          alt={`${name} profile photo`}
                                          width={50}
                                          height={50}
                                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                                          onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/assets/images/default-avatar.png';
                                          }}
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                          <span className="text-white text-xs">💼</span>
                                        </div>
                                      </div>
                                    </motion.button>
                                    <p className="text-xs mt-1 text-center max-w-[60px] truncate" title={name}>
                                      {name.split(' ')[0]}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className={`text-xs mt-2 ${message.sender === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-muted p-3 rounded-2xl flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about K Sree Charan..."
                    className="flex-1 px-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
                    disabled={isTyping}
                  />
                  <motion.button
                    onClick={handleSend}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="h-4 w-4" />
                  </motion.button>
                </div>
                
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Skills", "Experience", "Contact"].map((action) => (
                    <motion.button
                      key={action}
                      onClick={() => setInputText(action.toLowerCase())}
                      className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full border border-border/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {action}
                    </motion.button>
                  ))}
                  
                  {/* Projects Toggle Button */}
                  <motion.button
                    onClick={() => setShowProjects(!showProjects)}
                    className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full border border-blue-200 dark:border-blue-800 transition-colors text-blue-700 dark:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Projects {showProjects ? "▼" : "▶"}
                  </motion.button>
                  
                  {/* Hackathons Toggle Button */}
                  <motion.button
                    onClick={() => setShowHackathons(!showHackathons)}
                    className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 rounded-full border border-purple-200 dark:border-purple-800 transition-colors text-purple-700 dark:text-purple-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hackathons {showHackathons ? "▼" : "▶"}
                  </motion.button>
                </div>
                
                {/* Project Quick Actions - Expandable */}
                <AnimatePresence>
                  {showProjects && (
                    <motion.div
                      className="flex flex-wrap gap-2 mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {sreeData.projects.map((project, index) => (
                        <motion.button
                          key={project.name}
                          onClick={() => {
                            setInputText(project.name);
                            setShowProjects(false); // Auto-collapse after selection
                          }}
                          className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800 transition-colors text-blue-700 dark:text-blue-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          {project.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Hackathon Quick Actions - Expandable */}
                <AnimatePresence>
                  {showHackathons && (
                    <motion.div
                      className="flex flex-wrap gap-2 mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {sreeData.hackathons.events.map((hackathon, index) => (
                        <motion.button
                          key={hackathon.event}
                          onClick={() => {
                            setInputText(hackathon.event);
                            setShowHackathons(false); // Auto-collapse after selection
                          }}
                          className="px-2 py-1 text-xs bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800 transition-colors text-purple-700 dark:text-purple-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          {hackathon.event}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
