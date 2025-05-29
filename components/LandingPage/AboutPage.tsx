const AboutPage = () => {
  return (
    <section className="bg-white min-h-screen flex items-center w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-800 mb-6">About <span className="text-amber-500">Me</span></h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              I'm a passionate developer with experience in building web applications using modern technologies. I love solving problems and creating efficient, user-friendly solutions.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full border border-cyan-100 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-800">My Mission</h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To create clean, accessible, and efficient software that impacts real-world problems. Always learning, always building, and always pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;