"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';

const experienceData = [
  {
    id: 1,
    date: "2021 - Present",
    title: "Senior Software Engineer",
    institution: "Innovatech Solutions Inc.",
    description: "Leading the development of cutting-edge web applications using Next.js, TypeScript, and GraphQL. Mentoring junior developers and driving architectural decisions.",
    type: "job" as "job" | "education",
  },
  {
    id: 2,
    date: "2019 - 2021",
    title: "Full-Stack Developer",
    institution: "Web Wizards LLC",
    description: "Developed and maintained responsive websites and e-commerce platforms for various clients. Specialized in React, Node.js, and cloud deployments.",
    type: "job" as "job" | "education",
  },
  {
    id: 3,
    date: "2015 - 2019",
    title: "B.S. in Computer Science",
    institution: "State University of Technology",
    description: "Graduated with honors. Focused on software development, algorithms, and artificial intelligence. Active member of the coding club.",
    type: "education" as "job" | "education",
  },
];

const ResumeExperience = () => {
  return (
    <section id="resume" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-20 text-gray-800 dark:text-white"
        >
          My Journey
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* This div creates the central timeline bar if needed, but individual items have their own lines for simplicity here */}
          {/* <div className="absolute left-5 top-0 h-full w-1 bg-purple-300 dark:bg-green-700 rounded-full"></div> */}

          {experienceData.map((item, index) => (
            <ExperienceItem
              key={item.id}
              date={item.date}
              title={item.title}
              institution={item.institution}
              description={item.description}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeExperience;
