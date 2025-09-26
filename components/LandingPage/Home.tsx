import TypewriterText from "./TypewriterText";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center w-full px-4 sm:px-6 lg:px-8 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <TypewriterText />
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-2 sm:px-0">
            Passionate about building modern, responsive UIs using React. I&apos;m a CSE student with a strong foundation in DSA, having solved 1000 DSA problems on LeetCode &amp; GFG and other plateforms.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start gap-14 text-2xl">
            <a
              href="https://github.com/sandeepkumar23f/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-b9674829a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sandeep21000552@gmail.com"
              className="hover:text-red-400 transition-colors duration-200"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/_san_deep_yadav__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div className="relative">
            {/* Replace <img> with Next.js Image component for performance */}
            <img
              src="img.jpg"
              alt="Sandeep Kumar"
              className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover border-4 border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse opacity-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
