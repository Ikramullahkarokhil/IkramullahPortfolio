import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const approaches = [
    "Clean and maintainable code",
    "Responsive and intuitive design",
    "Performance optimization",
    "Modern development practices",
    "User-centered approach",
    "Continuous learning"
  ];

  const cardClasses = "min-h-[220px] md:h-[220px] bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between";
  const gradientCardClasses = "min-h-[220px] md:h-[220px] backdrop-blur-lg rounded-2xl p-4 md:p-6 transition-all duration-300 flex flex-col justify-between";

  return (
    <div className="py-12 md:py-20 px-4" id="about">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              className={cardClasses}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  Who I Am
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                  I am a passionate software developer with expertise in modern web and mobile 
                  development technologies. My focus is on creating responsive and user-friendly 
                  applications that provide exceptional user experiences.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className={`${gradientCardClasses} bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/40 hover:to-purple-600/40`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  What I Do
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                  I specialize in building modern web applications and mobile apps using 
                  React JS and React Native. My approach combines technical expertise with 
                  creative problem-solving to deliver outstanding results.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              className={cardClasses}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  My Approach
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {approaches.map((approach, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"
                      />
                      <span className="text-blue-200 text-sm">{approach}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={`${gradientCardClasses} bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/40 hover:to-blue-600/40`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Experience Highlights
                </h3>
                <div className="space-y-3">
                  <div className="relative pl-6">
                    <motion.div
                      className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-blue-100 text-sm md:text-base">Frontend Development Expert</p>
                  </div>
                  <div className="relative pl-6">
                    <motion.div
                      className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-blue-100 text-sm md:text-base">Mobile App Development Specialist</p>
                  </div>
                  <div className="relative pl-6">
                    <motion.div
                      className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-400"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-blue-100 text-sm md:text-base">UI/UX Design Enthusiast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;