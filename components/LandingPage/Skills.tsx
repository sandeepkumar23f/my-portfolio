"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    {
      title: "MERN",
      items: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "React.js, Next.js",
        "Node.js, Express.js",
        "MongoDB",
        "Tailwind CSS, Bootstrap",
        "REST APIs & Fetching Data",
      ],
      color: "amber",
    },
    {
      title: "DSA",
      items: [
        "Strong Problem Solving",
        "Proficient in C++, JavaScript",
        "LeetCode, GFG, Code Chef ,Code Forces",
        "Data Structures: Arrays, Trees, Graphs",
        "Algorithms: DP, Backtracking",
      ],
      color: "blue",
    },
    {
      title: "Tools & Workflow",
      items: [
        "Git & GitHub",
        "VS Code, Chrome DevTools",
        "NPM, Vite, Webpack (basics)",
        "CI/CD, Debugging Tools",
      ],
      color: "green",
    },
  ];

  const colorMap: Record<
    string,
    { bg: string; border: string; text: string }
  > = {
    amber: {
      bg: "bg-amber-100",
      border: "border-amber-500",
      text: "text-amber-500",
    },
    blue: {
      bg: "bg-blue-100",
      border: "border-blue-500",
      text: "text-blue-500",
    },
    green: {
      bg: "bg-green-100",
      border: "border-green-500",
      text: "text-green-500",
    },
  };

  return (
    <section className="w-full min-h-screen pt-28 px-6 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-amber-500 mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {skills.map((skill, idx) => {
            const colors = colorMap[skill.color];

            return (
              <div
                key={skill.title}
                className="relative group p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className={`absolute inset-0 h-full w-full ${colors.bg} dark:bg-slate-800/[0.8] block rounded-2xl`}
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div
                  className={`bg-black text-white p-8 rounded-2xl shadow-lg border-4 ${colors.border} relative z-10`}
                >
                  <h3
                    className={`text-2xl font-semibold ${colors.text} mb-6 text-center`}
                  >
                    {skill.title}
                  </h3>
                  <ul className="space-y-3 text-white text-base sm:text-lg">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
