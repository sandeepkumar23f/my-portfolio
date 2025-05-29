"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="bg-white min-h-screen flex items-center w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-800 mb-6">
            About <span className="text-amber-500">Me</span>
          </h2>
          <div className="space-y-5 text-gray-600 text-lg sm:text-xl leading-relaxed">
            <p>
              I'm a dedicated and enthusiastic web developer passionate about building responsive and accessible web applications. With a strong foundation in <span className="font-semibold text-cyan-700">HTML, CSS, JavaScript,React</span>, and modern frameworks, I enjoy bringing ideas to life through code.
            </p>
            <p>
              I thrive on solving problems, continuously learning new technologies, and contributing to projects that make a meaningful impact. Whether it's crafting intuitive UIs or optimizing performance, I focus on writing clean and maintainable code.
            </p>
            <p>
              Outside of development, I love exploring new tools, participating in coding challenges, and sharing what I learn with the community.
            </p>
          </div>
        </motion.div>

        {/* Card Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2"
        >
          <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-3xl shadow-xl max-w-md w-full border border-cyan-200 transition-transform duration-300 transform hover:scale-[1.03]">
            <div className="flex items-center mb-6">
              <div className="bg-cyan-200 p-3 rounded-xl mr-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyan-800">My Mission</h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To design and build inclusive, innovative digital experiences that solve real-world challenges and empower people through technology. I'm committed to growing as a developer while contributing to meaningful and impactful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
