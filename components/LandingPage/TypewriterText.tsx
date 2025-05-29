import Typewriter from 'typewriter-effect';

function TypewriterText() {
  return (
    <section className="bg-transparent">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-800 dark:text-sky-400 leading-snug">
          <Typewriter
            options={{
              strings: [
                'Hi, I’m Sandeep Kumar.',
                'Frontend Developer – React',
                'CSE Student 🎓',
                'DSA Proficient',
              ],
              autoStart: true,
              loop: true,
              delay: 90,
              deleteSpeed: 70,
              pauseFor: 1800,
            }}
          />
        </h1>
      </div>
    </section>
  );
}

export default TypewriterText;
