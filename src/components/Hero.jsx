import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for text
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const nameArray = "Ikramullah Karokhail".split("");

  return (
    <div id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * (window.innerWidth < 768 ? 50 : 100) + 20 + 'px',
              height: Math.random() * (window.innerWidth < 768 ? 50 : 100) + 20 + 'px',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center w-full max-w-4xl mx-auto">
          {/* Animated name */}
          <motion.div 
            className="overflow-hidden mb-4 md:mb-6"
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white relative">
              <span className="sr-only">Ikramullah Karokhail</span>
              {nameArray.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={letterAnimation}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Animated role title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative mb-4 md:mb-6"
          >
            <motion.div
              animate={{ 
                background: [
                  "linear-gradient(to right, #60A5FA, #818CF8)",
                  "linear-gradient(to right, #818CF8, #C084FC)",
                  "linear-gradient(to right, #C084FC, #60A5FA)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-lg opacity-30 blur-xl"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white relative">
              Software Developer
            </h2>
          </motion.div>

          {/* Animated specialty text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mb-8 md:mb-12"
          >
            <motion.p
              animate={{ 
                color: ["#E0E7FF", "#EDE9FE", "#E0E7FF"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto px-4"
            >
              Specialized in{" "}
              <span className="font-bold text-white">React JS</span> &{" "}
              <span className="font-bold text-white">React Native</span> Development
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4"
          >
            <motion.button
              onClick={() => handleScroll('contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
            >
              Get in Touch
            </motion.button>
            <motion.button
              onClick={() => handleScroll('projects')}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              onClick={() => handleScroll('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full p-1 cursor-pointer hover:border-blue-200 transition-colors"
            >
              <div className="w-1 h-2 bg-white rounded-full mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 