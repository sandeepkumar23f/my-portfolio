// import { CodeIcon, WeatherIcon, CalculatorIcon } from "./icon";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Virtual Assistant",
//       description: "A voice-controlled AI assistant built with HTML, CSS, and JavaScript that can perform tasks like answering questions, setting reminders, and more.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       icon: <CodeIcon className="w-8 h-8" />,
//       link: "#",
//       github: "#"
//     },
//     {
//       title: "Weather App",
//       description: "A responsive weather application that displays current weather conditions and forecasts using a weather API.",
//       technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
//       icon: <WeatherIcon className="w-8 h-8" />,
//       link: "#",
//       github: "#"
//     },
//     {
//       title: "Basic Calculator",
//       description: "A clean, functional calculator with standard arithmetic operations and a modern UI design.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       icon: <CalculatorIcon className="w-8 h-8" />,
//       link: "#",
//       github: "#"
//     }
//   ];

//   return (
//     <section id="projects" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Here are some of the projects I've built to showcase my skills in web development.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-blue-100 p-3 rounded-full mr-4">
//                     {project.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
//                 </div>
//                 <p className="text-gray-600 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, i) => (
//                     <span 
//                       key={i}
//                       className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex space-x-4">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
//                   >
//                     Live Demo
//                   </a>
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors"
//                     >
//                       GitHub
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-600 mb-6">
//             Want to see more of my work?
//           </p>
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
//           >
//             Visit My GitHub
//             <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
