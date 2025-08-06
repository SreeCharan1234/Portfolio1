"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  K Sree Charan
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Full Stack Developer at{" "}
                <span className="text-primary font-semibold">MAQ Software Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about creating innovative solutions and building robust applications 
                with modern technologies. I love turning ideas into reality through code.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Let&apos;s Connect
                <Mail className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-border hover:bg-muted px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:example@email.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full animate-pulse opacity-20"></div>
                <Image
                  src="/assets/images/profile.png"
                  alt="K Sree Charan"
                  fill
                  className="object-cover rounded-full border-4 border-background shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-border/50"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
