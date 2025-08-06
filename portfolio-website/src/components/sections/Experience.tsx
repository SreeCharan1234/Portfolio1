"use client";

import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "MAQ Software Solutions",
      location: "Hyderabad, India",
      period: "2023 - Present",
      type: "Full-time",
      description: [
        "Developed and maintained full-stack web applications using modern technologies",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive UI components and optimized application performance",
        "Worked with databases and API integrations to create seamless user experiences",
        "Participated in code reviews and followed agile development methodologies"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js", "AWS"]
    },
    {
      title: "Software Developer Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - 2023",
      type: "Internship",
      description: [
        "Assisted in developing web applications and learning modern development practices",
        "Contributed to various projects using React and Node.js",
        "Gained experience in version control, testing, and deployment processes",
        "Collaborated with senior developers on feature implementation"
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Git", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career in software development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background border border-border/50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border/50">
                  <h5 className="font-semibold mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-muted text-sm rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
