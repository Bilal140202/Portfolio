"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi'; // Using a loader icon

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} // Keep it visible while it's rendered
      exit={{ opacity: 0 }} // Animate out
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="mb-4"
      >
        <FiLoader className="text-4xl md:text-5xl text-purple-600 dark:text-green-400" />
      </motion.div>
      <p className="text-lg font-sans text-gray-700 dark:text-gray-300">Loading portfolio...</p>
    </motion.div>
  );
};

export default PageLoader;
