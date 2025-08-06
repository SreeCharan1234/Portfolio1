"use client";

import { motion } from "framer-motion";
import { Code, Globe, Laptop, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: Globe,
      title: "Modern Technologies",
      description: "Working with the latest frameworks and tools"
    },
    {
      icon: Laptop,
      title: "Professional Experience",
      description: "Currently working at MAQ Software Solutions"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong experience in agile development and teamwork"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate full stack developer with a love for creating innovative solutions
            and building robust applications that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Building the Future with Code
            </h3>
            <p className="text-muted-foreground">
              Currently working as a Full Stack Developer at MAQ Software Solutions, 
              I specialize in creating end-to-end applications using modern technologies. 
              My journey in software development has been driven by curiosity and 
              a constant desire to learn and grow.
            </p>
            <p className="text-muted-foreground">
              I believe in writing clean, maintainable code and following best practices. 
              Whether it&apos;s building responsive user interfaces or designing scalable 
              backend systems, I approach each project with dedication and attention to detail.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new technologies, 
              participating in hackathons, or contributing to open source projects.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-background p-6 rounded-lg shadow-lg border border-border/50"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-primary">2+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">15+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">10+</h3>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary">8+</h3>
            <p className="text-muted-foreground">Hackathons</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
