"use client";
import { HoverEffect } from "../ui/card-hover-effect";

const Projects = () => {
  const projects = [
    {
      title: "CompetiX",
      description:
        "A full-stack MERN application for hosting live quizzes, coding challenges, and typing tests. Implemented email-based OTP authentication, JWT authorization, single-attempt session control, automated timers, real-time leaderboards using Socket.io, and an admin dashboard for event and registration management.",
      link: "https://quiz-arena-gecsv.onrender.com/",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      featured: true,
    },
    {
      title: "Expense Tracker",
      description:
        "A MERN-based expense management system featuring secure JWT authentication, CRUD operations, real-time data visualization with Recharts.js, and a responsive mobile-first UI for tracking expenses by category.",
      link: "https://track-your-expense-r8m6.onrender.com/",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Recharts"],
    },
    {
      title: "Virtual Assistant",
      description:
        "A JavaScript-based voice-controlled virtual assistant utilizing Web Speech APIs to process voice commands, answer user queries, and execute basic automation tasks.",
      link: "https://vaanibysandeep.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    },
    {
      title: "Weather App",
      description:
        "A responsive weather forecasting application that consumes third-party REST APIs to display real-time weather data, temperature, and forecast details with error handling.",
      link: "https://github.com/sandeepkumar23f/weather-app",
      tech: ["HTML", "CSS", "JavaScript", "REST API"],
    },
    {
      title: "Basic Calculator",
      description:
        "A lightweight web-based calculator implementing core arithmetic operations with clean UI design and optimized JavaScript logic.",
      link: "#",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Quiz App",
      description:
        "An interactive quiz application featuring multiple-choice questions, dynamic scoring logic, and client-side state management using JavaScript.",
      link: "https://quizbysandeep.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript"],
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
            Here are some of the projects I have built to showcase my skills in
            web development.
          </p>
        </div>

        <HoverEffect items={projects} />

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* GitHub Button */}
            <a
              href="https://github.com/sandeepkumar23f/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
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

            {/* Resume Button */}
            <a
              href="/sandeep-resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Download Resume
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 14a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm7-12a1 1 0 011 1v7.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 10.586V3a1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
