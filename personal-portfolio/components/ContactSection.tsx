"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLink from './SocialLink';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white"
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 md:gap-16">
          {/* Contact Form on the left/top */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <ContactForm />
          </div>

          {/* Contact Info and Social Links on the right/bottom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Connect with Me
            </h3>
            <p className="font-sans text-gray-600 dark:text-gray-300 mb-6 lg:max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
            </p>

            <div className="flex space-x-6 mb-6 justify-center lg:justify-start">
              <SocialLink href="https://github.com/yourusername" label="GitHub" icon={<FaGithub size={30} />} />
              <SocialLink href="https://linkedin.com/in/yourusername" label="LinkedIn" icon={<FaLinkedin size={30} />} />
              <SocialLink href="mailto:youremail@example.com" label="Email" icon={<FaEnvelope size={30} />} />
            </div>

            <div className="font-sans text-gray-600 dark:text-gray-300">
              <p>Alternatively, you can email me directly at:</p>
              <a href="mailto:youremail@example.com" className="text-purple-600 dark:text-green-400 hover:underline">
                youremail@example.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
