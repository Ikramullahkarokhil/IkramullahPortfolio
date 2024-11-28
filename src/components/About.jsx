import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                Hello, I'm Ikramullah Karokhail
              </h3>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                I'm a 23-year-old Software Developer with a Bachelor's degree in Computer Science 
                from Jahan University, Kabul, Afghanistan, graduated in 2023. My passion lies in 
                creating innovative and user-friendly web applications using modern technologies.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/10">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Education</h4>
              <p className="text-base text-blue-100 leading-relaxed">
                Bachelor of Computer Science<br />
                Jahan University, Kabul, Afghanistan<br />
                Graduated: 2023
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/10">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div>
                  <ul className="text-sm sm:text-base text-blue-100 space-y-1.5 sm:space-y-2">
                    <li>• React.js</li>
                    <li>• React Native</li>
                    <li>• JavaScript/ES6+</li>
                    <li>• HTML5 & CSS3</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-sm sm:text-base text-blue-100 space-y-1.5 sm:space-y-2">
                    <li>• Tailwind CSS</li>
                    <li>• Git & GitHub</li>
                    <li>• Responsive Design</li>
                    <li>• RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/10">
              <div className="space-y-4 sm:space-y-6 text-blue-100">
                <div className="bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Professional Focus</h4>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Specializing in front-end development with a strong focus on React.js and React Native applications.
                    Passionate about creating responsive and intuitive user interfaces.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Current Goals</h4>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Actively expanding my expertise in modern web technologies and seeking opportunities
                    to contribute to innovative projects that make a positive impact.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Languages</h4>
                  <ul className="text-sm sm:text-base space-y-1">
                    <li>• English - Professional Working</li>
                    <li>• Pashto - Native</li>
                    <li>• Dari - Fluent</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;