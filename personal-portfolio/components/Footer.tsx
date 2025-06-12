"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'; // Import useTheme

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false); // For handling theme hydration
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Effect for dynamic year
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Effect for showing scroll-to-top button
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    // Use resolvedTheme to decide the next theme if current theme is 'system'
    const currentActualTheme = theme === 'system' ? resolvedTheme : theme;
    setTheme(currentActualTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    // Return a placeholder or null until mounted to avoid hydration mismatch
    // Or return the button structure with a default icon but disabled
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm font-sans">
            &copy; {currentYear} Adept Agent. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full h-[34px] w-[34px]"> {/* Placeholder size */}
              {/* Intentionally empty or a static placeholder to avoid mismatch */}
            </div>
            {/* Scroll-to-Top Button can also be conditional on mounted if it uses theme-dependent styles not covered by dark: */}
          </div>
        </div>
      </footer>
    );
  }

  // Determine which icon to show based on the current theme (light or dark)
  // resolvedTheme gives the actual theme when theme is 'system'
  const effectiveTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm font-sans">
          &copy; {currentYear} Adept Agent. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {effectiveTheme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>

          {/* Scroll-to-Top Button */}
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-purple-500 dark:bg-green-500 text-white hover:bg-purple-600 dark:hover:bg-green-600 transition-colors"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={18} />
            </motion.button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
