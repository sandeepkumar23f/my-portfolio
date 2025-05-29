const Skills = () => {
  return (
    <section className="w-full min-h-screen bg-white pt-28 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-amber-500 mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {/* Frontend */}
          <div className="bg-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-amber-600 mb-6 text-center">
              Frontend
            </h3>
            <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React.js, Next.js</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>Responsive & Mobile-First Design</li>
              <li>REST APIs & Fetching Data</li>
            </ul>
          </div>

          {/* DSA */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
              DSA
            </h3>
            <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
              <li>Strong Problem Solving</li>
              <li>Proficient in C++, JavaScript</li>
              <li>LeetCode, GFG</li>
              <li>Data Structures: Arrays, Trees, Graphs</li>
              <li>Algorithms: DP, Backtracking</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">
              Tools & Workflow
            </h3>
            <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
              <li>Git & GitHub</li>
              <li>VS Code, Chrome DevTools</li>
              <li>NPM, Vite, Webpack (basics)</li>
              <li>CI/CD, Debugging Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
