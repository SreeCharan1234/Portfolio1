"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Firebase", level: 80 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Jira", level: 80 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 65 },
        { name: "Mobile UI/UX", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 70 },
        { name: "C++", level: 65 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-background border border-border/50 rounded-lg p-6 shadow-lg"
        >
          <h4 className="text-lg font-semibold mb-4 text-center">Proficiency Legend</h4>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-green-500 rounded"></div>
              <span className="text-sm">Expert (90%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-blue-500 rounded"></div>
              <span className="text-sm">Advanced (80-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-yellow-500 rounded"></div>
              <span className="text-sm">Intermediate (70-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-2 bg-orange-500 rounded"></div>
              <span className="text-sm">Beginner (60-69%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
