"use client";

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import PageLoader from './PageLoader'; // Import the PageLoader
import { AnimatePresence } from 'framer-motion';

interface ThemeProvidersProps {
  children: React.ReactNode;
}

export function ThemeProviders({ children }: ThemeProvidersProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust delay as needed (e.g., 1500ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence>
        {loading && <PageLoader />}
      </AnimatePresence>
      {!loading && children}
    </ThemeProvider>
  );
}
