"use client"; // For potential Framer Motion use later

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", level: "90%" },
  { name: "React", level: "85%" },
  { name: "Next.js", level: "80%" },
  { name: "Tailwind CSS", level: "95%" },
  { name: "Framer Motion", level: "70%" },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
            {/* Left Column (or Top on Mobile) - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full md:w-1/3 flex justify-center md:justify-start"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500 dark:border-green-400">
                <Image
                  src="/placeholder-avatar.svg" // Using the created SVG
                  alt="Adept Agent - Avatar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional: for performance
                  style={{ objectFit: "cover" }} // Use style for objectFit
                  className="rounded-full"
                />
              </div>
            </motion.div>

            {/* Right Column (or Bottom on Mobile) - Text and Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="w-full md:w-2/3"
            >
              <p className="text-lg md:text-xl font-sans mb-6 leading-relaxed">
                Hello! I'm Adept Agent, a passionate software engineer specializing in building creative and performant digital experiences. I thrive on transforming complex problems into elegant, user-centric solutions. My journey in tech is driven by a constant curiosity and a desire to learn and grow.
              </p>
              <p className="text-lg md:text-xl font-sans mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>

              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6">Key Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="mb-4"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium font-sans text-purple-700 dark:text-green-400">{skill.name}</span>
                      <span className="text-sm font-medium font-sans text-purple-700 dark:text-green-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-green-400 dark:to-teal-500 h-2.5 rounded-full"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
