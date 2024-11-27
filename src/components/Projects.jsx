import React from 'react'
import { motion } from 'framer-motion'
import adilFashion from '../assets/adil-fashion.jpg'
import holyQuran from '../assets/holy-quran.jpg'
import portfolio from '../assets/portfolio.jpg'
import SEO from './SEO'

const Projects = () => {
  const projects = [
    {
      title: 'AdilFashion App',
      description: 'A comprehensive mobile application for tailor shop management. Features include customer measurements tracking, order management, and appointment scheduling.',
      technologies: ['React Native', 'Expo', 'Sqlite', 'Formik', 'React Native Paper'],
      image: adilFashion,
      link: 'https://github.com/Ikramullahkarokhil/AdilFashion'
    },
    {
      title: 'HolyQuran App',
      description: 'A multilingual Quran application featuring translations in Pashto, Dari, English, and Arabic. Includes audio recitations and verse-by-verse navigation.',
      technologies: ['React Native', 'Expo', 'SQLite', 'RESTful APIs'],
      image: holyQuran,
      link: 'https://github.com/Ikramullahkarokhil/HolyQuran'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations and a clean, professional design.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: portfolio,
      link: 'https://github.com/Ikramullahkarokhil/IkramullahPortfolio'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <SEO />
      <div className="py-20 px-4" id="projects">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transform-gpu transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-blue-100 mb-4 h-24 overflow-y-auto">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-400/20 text-blue-100 text-sm px-3 py-1 rounded-full hover:bg-blue-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-colors text-center"
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Projects 