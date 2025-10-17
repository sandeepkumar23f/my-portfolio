"use client";
import { HoverEffect } from "../ui/card-hover-effect";

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description:
      "A full-stack MERN application to manage personal expenses with secure JWT authentication, interactive Recharts.js visualizations, and a responsive mobile-first design. Users can add, update, delete, and track expenses while seeing spending patterns by category in real time",
      link: "https://track-your-expense-r8m6.onrender.com/",
    },
    {
      title: "Virtual Assistant",
      description:
        "A voice-controlled AI assistant built with HTML, CSS, and JavaScript that can perform tasks like answering questions, setting reminders, and more.",
      link: "https://vaanibysandeep.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application that displays current weather conditions and forecasts using a weather API.",
      link: "https://github.com/sandeepkumar23f/weather-app",
    },
    {
      title: "Basic Calculator",
      description:
        "A clean, functional calculator with standard arithmetic operations and a modern UI design.",
      link: "#",
    },
    {
      title: "Quiz App",
      description:
        "A basic interactive quiz app built with HTML, CSS, and JavaScript, featuring multiple-choice questions and a score tracker.",
      link: "https://quizbysandeep.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Here are some of the projects I have built to showcase my skills in web development.
          </p>
        </div>

        <HoverEffect items={projects} />

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Want to see more of my work&#39;? </p>
          <a
            href="https://github.com/sandeepkumar23f/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Visit My GitHub
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;