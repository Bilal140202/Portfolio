"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Assuming ProjectCard.tsx is in the same directory

// Placeholder project data
const projectsData = [
  {
    id: 1,
    title: "Ecoleta - Recycling Locator",
    description: "A platform to connect people with waste collection points. Built during Next Level Week by Rocketseat, focusing on sustainability.",
    techStack: ["Node.js", "React", "React Native", "TypeScript", "Expo"],
    liveDemoUrl: "#", // Replace with actual URL if available
    githubUrl: "https://github.com/yourusername/ecoleta", // Replace with actual URL
  },
  {
    id: 2,
    title: "DevFinances - Personal Finance Tracker",
    description: "A simple application to track income and expenses, helping users manage their personal finances effectively. Built with vanilla JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/yourusername/devfinances",
  },
  {
    id: 3,
    title: "Proffy - Online Tutoring Platform",
    description: "A platform connecting students with teachers for online classes. Features real-time chat and scheduling. From another NLW event.",
    techStack: ["Node.js", "React", "TypeScript", "Socket.io"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/yourusername/proffy",
  },
  {
    id: 4,
    title: "Portfolio Website v1",
    description: "My first personal portfolio website built to showcase my initial projects and skills as a budding web developer.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                liveDemoUrl={project.liveDemoUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
