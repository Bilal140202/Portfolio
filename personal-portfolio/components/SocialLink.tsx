"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string; // For accessibility
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors duration-300"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default SocialLink;
