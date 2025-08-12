"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  images?: string[];
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

  const predefinedResponses = {
    skills: "I have expertise in React, Node.js, TypeScript, MongoDB, Express.js, AWS, Python, TensorFlow, and many other modern technologies. I'm passionate about full-stack development and AI/ML solutions.",
    projects: "Some of my notable projects include AgriVision (AI-powered agricultural platform), Health Buddy (ML-based health management), Study Buddy (educational platform), Code Off Duty (task management), Sarthi (navigation app), and Surasksha Suchak (security monitoring system). Ask me about any specific project to see details and screenshots!",
    experience: "I'm currently working as a Full Stack Developer at MAQ Software Solutions in Hyderabad. I have previous experience as a Software Developer Intern and have also worked as a Freelance Web Developer, completing 10+ client projects.",
    education: "I have a strong educational background in Computer Science with focus on software development and emerging technologies. I've also earned various certifications in cloud computing, web development, and AI/ML.",
    hackathons: "I'm an active participant in hackathons and competitive programming. I've participated in DevFest, Microsoft Hackathon, Arena, Build-a-thon, Code-a-haunt, Code of Duty, Coding Blocks LPU, Kriyeta 3.0, and many others with multiple wins! Ask me about any specific hackathon to see photos and details.",
    contact: "You can reach me through the contact form on this website, or connect with me on LinkedIn and GitHub. I'm always open to discussing new opportunities and collaborations!",
    
    // Detailed Project Responses
    agrivision: "AgriVision is an AI-powered agricultural platform that helps farmers with crop planning, disease detection, and yield prediction. It features plant AI recognition, crop details analysis, ecosystem monitoring, and voice-to-text functionality for easy interaction.",
    "health buddy": "Health Buddy is an ML-based health management system that provides personalized health recommendations, tracks vital signs, and offers intelligent health insights using machine learning algorithms.",
    "study buddy": "Study Buddy is an educational platform designed to enhance learning experiences with interactive features, progress tracking, and personalized study recommendations.",
    "code off duty": "Code Off Duty is a comprehensive task management and productivity application with modern UI/UX, featuring project tracking, team collaboration, and efficient workflow management.",
    sarthi: "Sarthi is a navigation and assistance application designed to help users with location-based services, route optimization, and real-time guidance.",
    "surasksha suchak": "Surasksha Suchak is a security monitoring system that provides real-time surveillance, threat detection, and alert mechanisms for enhanced security management.",
    
    // Detailed Hackathon Responses
    devfest: "DevFest was an amazing experience where I won 1st place! It was a Google Developer Groups event focused on modern web technologies and innovative solutions.",
    microsoft: "Microsoft Hackathon was incredibly competitive where I secured 2nd place. The event focused on cloud solutions and AI integration using Microsoft Azure services.",
    arena: "Arena hackathon was a competitive programming and development event where I showcased problem-solving skills and technical expertise.",
    "build a thon": "Build-a-thon was a construction and development themed hackathon focusing on creating practical solutions for real-world problems.",
    "build-a-thon": "Build-a-thon was a construction and development themed hackathon focusing on creating practical solutions for real-world problems.",
    "code a haunt": "Code-a-haunt was a Halloween-themed coding competition with creative challenges and spooky programming problems.",
    "code-a-haunt": "Code-a-haunt was a Halloween-themed coding competition with creative challenges and spooky programming problems.",
    "code of duty": "Code of Duty was a military-themed hackathon focusing on strategic programming challenges and tactical problem-solving.",
    "coding blocks lpu": "Coding Blocks LPU hackathon was organized at Lovely Professional University, featuring algorithmic challenges and development competitions.",
    kriyeta: "Kriyeta 3.0 was a major technical fest hackathon with multiple rounds of competition, showcasing innovation and technical excellence.",
    "kriyeta 3.0": "Kriyeta 3.0 was a major technical fest hackathon with multiple rounds of competition, showcasing innovation and technical excellence.",
    
    default: "That's an interesting question! I can tell you about my skills, projects, experience, education, hackathons, or how to contact me. You can also ask about specific projects like 'AgriVision', 'Health Buddy', 'Study Buddy', etc., or specific hackathons like 'DevFest', 'Microsoft', 'Arena', etc. What would you like to know more about?",
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

      // Enhanced keyword matching with image support
      if (lowercaseInput.includes("skill") || lowercaseInput.includes("technology") || lowercaseInput.includes("tech")) {
        response = predefinedResponses.skills;
      } else if (lowercaseInput.includes("project") || lowercaseInput.includes("work") || lowercaseInput.includes("portfolio")) {
        response = predefinedResponses.projects;
      } else if (lowercaseInput.includes("experience") || lowercaseInput.includes("job") || lowercaseInput.includes("career")) {
        response = predefinedResponses.experience;
      } else if (lowercaseInput.includes("education") || lowercaseInput.includes("study") || lowercaseInput.includes("degree")) {
        response = predefinedResponses.education;
      } else if (lowercaseInput.includes("hackathon") || lowercaseInput.includes("competition") || lowercaseInput.includes("contest")) {
        response = predefinedResponses.hackathons;
      } else if (lowercaseInput.includes("contact") || lowercaseInput.includes("reach") || lowercaseInput.includes("email")) {
        response = predefinedResponses.contact;
      } else if (lowercaseInput.includes("hello") || lowercaseInput.includes("hi") || lowercaseInput.includes("hey")) {
        response = "Hello! Nice to meet you! I'm here to help you learn more about K Sree Charan. What would you like to know?";
      }
      
      // Specific Project Matching
      else if (lowercaseInput.includes("agrivision") || lowercaseInput.includes("agri vision")) {
        response = predefinedResponses.agrivision;
        images = ["/assets/images/projects/agrivision/landingpage.png", "/assets/images/projects/agrivision/plantai.png"];
      } else if (lowercaseInput.includes("health buddy") || lowercaseInput.includes("healthbuddy")) {
        response = predefinedResponses["health buddy"];
        images = ["/assets/images/projects/health-buddy/dashbord.png", "/assets/images/projects/health-buddy/login.png"];
      } else if (lowercaseInput.includes("study buddy") || lowercaseInput.includes("studybuddy")) {
        response = predefinedResponses["study buddy"];
        images = ["/assets/images/projects/study-buddy/dashboard.png", "/assets/images/projects/study-buddy/codeeditor.png"];
      } else if (lowercaseInput.includes("code off duty") || lowercaseInput.includes("codeoffduty")) {
        response = predefinedResponses["code off duty"];
        images = ["/assets/images/projects/code-off-duty/1.png", "/assets/images/projects/code-off-duty/2.png"];
      } else if (lowercaseInput.includes("sarthi")) {
        response = predefinedResponses.sarthi;
        images = ["/assets/images/projects/sarthi/1.png", "/assets/images/projects/sarthi/2.png"];
      } else if (lowercaseInput.includes("surasksha suchak") || lowercaseInput.includes("surasksha") || lowercaseInput.includes("suchak")) {
        response = predefinedResponses["surasksha suchak"];
        images = ["/assets/images/projects/surasksha-suchak/1.png", "/assets/images/projects/surasksha-suchak/2.png"];
      }
      
      // Specific Hackathon Matching
      else if (lowercaseInput.includes("devfest") || lowercaseInput.includes("dev fest")) {
        response = predefinedResponses.devfest;
        images = ["/assets/images/hackathons/devfest/1.jpg", "/assets/images/hackathons/devfest/2.jpg"];
      } else if (lowercaseInput.includes("microsoft")) {
        response = predefinedResponses.microsoft;
        images = ["/assets/images/hackathons/microsoft/1.jpg", "/assets/images/hackathons/microsoft/2.jpg"];
      } else if (lowercaseInput.includes("arena")) {
        response = predefinedResponses.arena;
        images = ["/assets/images/hackathons/arena/1.jpg", "/assets/images/hackathons/arena/2.jpg"];
      } else if (lowercaseInput.includes("build") && (lowercaseInput.includes("thon") || lowercaseInput.includes("a-thon"))) {
        response = predefinedResponses["build-a-thon"];
        images = ["/assets/images/hackathons/build-a-thon/2.jpg", "/assets/images/hackathons/build-a-thon/3.jpg"];
      } else if (lowercaseInput.includes("code") && lowercaseInput.includes("haunt")) {
        response = predefinedResponses["code-a-haunt"];
        images = ["/assets/images/hackathons/code-a-haunt/main.jpg", "/assets/images/hackathons/code-a-haunt/main.jpg"];
      } else if (lowercaseInput.includes("code") && lowercaseInput.includes("duty")) {
        response = predefinedResponses["code of duty"];
        images = ["/assets/images/hackathons/code-of-duty/1.jpg", "/assets/images/hackathons/code-of-duty/2.jpg"];
      } else if (lowercaseInput.includes("coding blocks") || lowercaseInput.includes("lpu")) {
        response = predefinedResponses["coding blocks lpu"];
        images = ["/assets/images/hackathons/codingblockslpu/1.jpg", "/assets/images/hackathons/codingblockslpu/2.jpg"];
      } else if (lowercaseInput.includes("kriyeta")) {
        response = predefinedResponses["kriyeta 3.0"];
        images = ["/assets/images/hackathons/kriyeta3.0/1.jpg", "/assets/images/hackathons/kriyeta3.0/2.jpg"];
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
        images: images.length > 0 ? images : undefined,
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
                      {["AgriVision", "Health Buddy", "Study Buddy", "Code Off Duty", "Sarthi", "Surasksha Suchak"].map((project) => (
                        <motion.button
                          key={project}
                          onClick={() => {
                            setInputText(project);
                            setShowProjects(false); // Auto-collapse after selection
                          }}
                          className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800 transition-colors text-blue-700 dark:text-blue-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          {project}
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
                      {["DevFest", "Microsoft", "Arena", "Build-a-thon", "Code-a-haunt", "Code of Duty", "Coding Blocks LPU", "Kriyeta 3.0"].map((hackathon) => (
                        <motion.button
                          key={hackathon}
                          onClick={() => {
                            setInputText(hackathon);
                            setShowHackathons(false); // Auto-collapse after selection
                          }}
                          className="px-2 py-1 text-xs bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800 transition-colors text-purple-700 dark:text-purple-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          {hackathon}
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
