"use client"; // For Framer Motion and potential client-side interactions

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // Using react-icons for link icons

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveDemoUrl,
  githubUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out"
    >
      <div className="p-6">
        <h3 className="text-2xl font-heading font-semibold mb-3 text-purple-700 dark:text-green-400">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 font-sans text-sm mb-4 h-20 overflow-y-auto"> {/* Fixed height for description */}
          {description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-start space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          {liveDemoUrl && liveDemoUrl !== "#" && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <FiExternalLink className="mr-1 h-4 w-4" />
              Live Demo
            </a>
          )}
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FiGithub className="mr-1 h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
