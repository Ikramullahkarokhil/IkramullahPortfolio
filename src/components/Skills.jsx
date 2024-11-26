import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React JS", level: 90 },
        { name: "React Native", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 85 },
      ]
    },
    {
      category: "Mobile Development",
      items: [
        { name: "Expo", level: 85 },
        { name: "Native APIs", level: 80 },
        { name: "App Publishing", level: 82 },
        { name: "Mobile UI/UX", level: 85 },
      ]
    },
    {
      category: "Development Tools",
      items: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 85 },
        { name: "npm/yarn", level: 82 },
        { name: "REST APIs", level: 85 },
      ]
    }
  ];

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

  return (
    <div className="py-20 px-4" id="skills">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform-gpu"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200 font-medium">{skill.name}</span>
                      <span className="text-blue-300">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-300 transform-gpu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-blue-100">
              And many more skills in development & problem-solving
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills; 