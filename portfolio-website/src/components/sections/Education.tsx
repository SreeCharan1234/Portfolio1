"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "2020 - 2024",
      grade: "8.5 CGPA",
      description: [
        "Specialized in Software Engineering and Web Development",
        "Completed coursework in Data Structures, Algorithms, and Database Systems",
        "Participated in various technical projects and competitions",
        "Active member of coding clubs and technical societies"
      ],
      achievements: [
        "Dean's List for Academic Excellence",
        "Winner of multiple hackathons",
        "Technical lead for college projects"
      ]
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (PCM)",
      institution: "Intermediate College",
      location: "India",
      period: "2018 - 2020",
      grade: "85%",
      description: [
        "Focused on Mathematics, Physics, and Chemistry",
        "Developed strong analytical and problem-solving skills",
        "Participated in science exhibitions and competitions"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "MongoDB Certified Developer",
    "React Professional Certification",
    "Full Stack Web Development",
    "Agile Development Methodologies"
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning journey in technology and software development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
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
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{edu.field}</h4>
                  <h5 className="text-lg text-muted-foreground mb-2">{edu.institution}</h5>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h6 className="font-semibold mb-2">Key Areas of Study:</h6>
                  <ul className="space-y-1">
                    {edu.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {edu.achievements && (
                  <div className="pt-4 border-t border-border/50">
                    <h6 className="font-semibold mb-2">Achievements:</h6>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIdx) => (
                        <span
                          key={achIdx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-background border border-border/50 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-muted p-4 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-colors"
              >
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
