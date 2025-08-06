"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, Users, Award } from "lucide-react";
import Image from "next/image";

const Hackathons = () => {
  const hackathons = [
    {
      id: "devfest",
      name: "DevFest",
      title: "Best Innovation Award",
      position: "1st Place",
      description: "Won first place for developing an innovative AI-powered solution for smart city management.",
      image: "/assets/images/hackathons/devfest/main.jpg",
      date: "November 2023",
      location: "Google Developer Community",
      team: "4 members",
      technologies: ["React", "Node.js", "AI/ML", "IoT"],
      achievements: [
        "Best Innovation Award",
        "People's Choice Award",
        "₹50,000 Prize Money"
      ]
    },
    {
      id: "microsoft",
      name: "Microsoft Hackathon",
      title: "Azure Innovation Challenge",
      position: "2nd Place",
      description: "Developed a cloud-based healthcare solution using Microsoft Azure services.",
      image: "/assets/images/hackathons/microsoft/main.jpg",
      date: "October 2023",
      location: "Microsoft India",
      team: "3 members",
      technologies: ["Azure", "React", "C#", ".NET"],
      achievements: [
        "2nd Place Winner",
        "Azure Credits Worth ₹25,000",
        "Microsoft Certification"
      ]
    },
    {
      id: "kriyeta",
      name: "Kriyeta 3.0",
      title: "Technical Innovation",
      position: "Winners",
      description: "Created an innovative solution for sustainable agriculture using IoT and machine learning.",
      image: "/assets/images/hackathons/kriyeta3.0/main.jpg",
      date: "September 2023",
      location: "Technical Festival",
      team: "5 members",
      technologies: ["IoT", "Python", "React", "MongoDB"],
      achievements: [
        "Overall Winners",
        "Best Technical Implementation",
        "₹30,000 Prize Money"
      ]
    },
    {
      id: "build-a-thon",
      name: "Build-a-thon",
      title: "Rapid Prototyping Challenge",
      position: "3rd Place",
      description: "Built a rapid prototyping solution for e-commerce platforms in 24 hours.",
      image: "/assets/images/hackathons/build-a-thon/1717163413765.jpg",
      date: "August 2023",
      location: "Tech Community",
      team: "2 members",
      technologies: ["Next.js", "Node.js", "Stripe", "MongoDB"],
      achievements: [
        "3rd Place",
        "Best UI/UX Design",
        "Mentorship Program"
      ]
    },
    {
      id: "code-a-haunt",
      name: "Code-a-haunt",
      title: "Halloween Coding Challenge",
      position: "Finalist",
      description: "Participated in a themed coding challenge focusing on creative problem-solving.",
      image: "/assets/images/hackathons/code-a-haunt/main.jpg",
      date: "October 2022",
      location: "Online Event",
      team: "Solo",
      technologies: ["JavaScript", "HTML/CSS", "Animation"],
      achievements: [
        "Top 10 Finalist",
        "Creative Coding Award",
        "Community Recognition"
      ]
    },
    {
      id: "arena",
      name: "Arena",
      title: "Competitive Programming",
      position: "Top Performer",
      description: "Competed in algorithmic challenges and data structure problems.",
      image: "/assets/images/hackathons/arena/main.jpg",
      date: "March 2023",
      location: "Programming Contest",
      team: "Solo",
      technologies: ["C++", "Algorithms", "Data Structures"],
      achievements: [
        "Top 50 Performers",
        "Problem Solving Excellence",
        "Certificate of Merit"
      ]
    },
    {
      id: "code-of-duty",
      name: "Code of Duty",
      title: "Competitive Programming Championship",
      position: "Winner",
      description: "Won the competitive programming championship with excellent problem-solving skills.",
      image: "/assets/images/hackathons/code-of-duty/main.jpg",
      date: "December 2023",
      location: "University Competition",
      team: "Solo",
      technologies: ["C++", "Algorithms", "Data Structures", "Dynamic Programming"],
      achievements: [
        "Championship Winner",
        "Fastest Solution Award",
        "₹15,000 Prize Money"
      ]
    },
    {
      id: "code-carvan",
      name: "Coding Blocks LPU",
      title: "Web Development Challenge",
      position: "2nd Place",
      description: "Developed a comprehensive web application for student management system.",
      image: "/assets/images/hackathons/codingblockslpu/main.jpg",
      date: "January 2023",
      location: "Lovely Professional University",
      team: "3 members",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      achievements: [
        "2nd Place Winner",
        "Best Backend Implementation",
        "Internship Opportunity"
      ]
    }
  ];

  return (
    <section id="hackathons" className="py-20">
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
              backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Hackathons & Competitions
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto cursor-default"
            whileHover={{ 
              scale: 1.02,
              color: "#6366f1"
            }}
            transition={{ duration: 0.3 }}
          >
            My journey through various hackathons and competitive programming events, showcasing innovation and problem-solving skills.
          </motion.p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center"
        >
          <motion.div 
            className="bg-background border border-border/50 rounded-lg p-6 shadow-lg cursor-default"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "#3b82f6",
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
              y: -5
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
            >
              8+
            </motion.h3>
            <p className="text-muted-foreground text-sm">Hackathons</p>
          </motion.div>
          <motion.div 
            className="bg-background border border-border/50 rounded-lg p-6 shadow-lg cursor-default"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "#10b981",
              boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)",
              y: -5
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.1, color: "#10b981" }}
            >
              5
            </motion.h3>
            <p className="text-muted-foreground text-sm">Wins/Top Places</p>
          </motion.div>
          <motion.div 
            className="bg-background border border-border/50 rounded-lg p-6 shadow-lg cursor-default"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "#8b5cf6",
              boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)",
              y: -5
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.1, color: "#8b5cf6" }}
            >
              20+
            </motion.h3>
            <p className="text-muted-foreground text-sm">Team Members</p>
          </motion.div>
          <motion.div 
            className="bg-background border border-border/50 rounded-lg p-6 shadow-lg cursor-default"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "#ec4899",
              boxShadow: "0 10px 25px rgba(236, 72, 153, 0.2)",
              y: -5
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.1, color: "#ec4899" }}
            >
              2
            </motion.h3>
            <p className="text-muted-foreground text-sm">Years Active</p>
          </motion.div>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-background border border-border/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hackathon.image}
                  alt={hackathon.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-semibold">
                    {hackathon.position}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{hackathon.name}</h3>
                    <h4 className="text-primary font-semibold mb-2">{hackathon.title}</h4>
                  </div>
                  <Trophy className="h-6 w-6 text-primary flex-shrink-0" />
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {hackathon.description}
                </p>

                {/* Meta Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {hackathon.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {hackathon.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {hackathon.team}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h5 className="font-semibold text-sm mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-1">
                    {hackathon.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-xs rounded border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h5 className="font-semibold text-sm mb-2">Achievements:</h5>
                  <div className="space-y-1">
                    {hackathon.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <Award className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <motion.a
                  href={`/hackathon/${hackathon.id}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-muted hover:bg-muted/80 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-border/50"
                >
                  View Details
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-background border border-border/50 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m always excited about participating in hackathons and coding competitions. 
            If you&apos;re organizing an event or looking for a team member, let&apos;s connect!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Let&apos;s Team Up
            <Users className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
