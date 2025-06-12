"use client"; // Ensures this component is treated as a Client Component

import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'; // Corrected import

interface ExperienceItemProps {
  date: string;
  title: string;
  institution: string;
  description: string;
  type?: 'job' | 'education'; // Optional type to differentiate styling/icon
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  date,
  title,
  institution,
  description,
  type = 'job',
}) => {
  const IconComponent = type === 'job' ? FiBriefcase : FiBookOpen; // Corrected usage

  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'job' ? -50 : 50 }} // Slide from left for job, right for education (example)
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-8 flex"
    >
      {/* Icon and Timeline Line */}
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 dark:bg-green-500 text-white shadow-md">
          <IconComponent size={20} />
        </div>
        <div className="w-px h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <div className="p-5 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
          <p className="text-sm font-sans text-purple-600 dark:text-green-400 mb-1">{date}</p>
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-md font-sans font-medium text-gray-600 dark:text-gray-300 mb-3">{institution}</p>
          <p className="text-sm font-sans text-gray-700 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
