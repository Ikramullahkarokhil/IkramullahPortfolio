import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiAward, FiBriefcase, FiCalendar } from "react-icons/fi";

const Resume = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Work experience data - updated as requested
  const workExperience = [
    {
      title: "Lead Developer - ADM E-commerce Platform",
      company: "Afghan Digital Market",
      period: "2022 - Present",
      location: "Kabul, Afghanistan",
      description:
        "Developed a comprehensive e-commerce mobile application using React Native and Expo. Created an end-to-end shopping experience including product browsing, user authentication, shopping cart functionality, order management, and payment integration. Implemented a responsive design for optimal user experience across different mobile devices.",
      achievements: [
        "Built a complete e-commerce solution with 25+ screens and features",
        "Implemented secure payment gateway integrations for multiple providers",
        "Created an intuitive admin dashboard for inventory and order management",
        "Optimized app performance resulting in 40% faster load times and smoother transitions",
        "Integrated real-time notifications for order updates and promotions",
      ],
    },
    {
      title: "Full Stack Developer - Farhannet ISP Portal",
      company: "Farhannet Communications",
      period: "2021 - 2022",
      location: "Kabul, Afghanistan",
      description:
        "Designed and developed a comprehensive web application for Farhannet ISP customers to view available packages, track subscription validity, manage account details, and raise support tickets. Implemented a responsive dashboard with real-time data visualization for bandwidth usage and implemented automatic notifications for package expiry.",
      achievements: [
        "Reduced customer service calls by 35% through intuitive self-service portal",
        "Developed custom data visualization tools for bandwidth monitoring",
        "Created an automated notification system for subscription renewals",
        "Integrated secure payment processing for package upgrades and renewals",
        "Implemented advanced search and filtering for service packages",
      ],
    },
    {
      title: "Frontend Developer - Personal Portfolio",
      company: "Freelance",
      period: "2023",
      location: "Kabul, Afghanistan",
      description:
        "Designed and developed a modern portfolio website using React, Tailwind CSS, and Framer Motion. Implemented dynamic content fetching from GitHub API, responsive design for all device sizes, and optimized SEO for better discoverability. Created interactive UI components with smooth animations and transitions to showcase technical skills and projects effectively.",
      achievements: [
        "Developed a responsive portfolio with 100% lighthouse performance score",
        "Implemented dynamic GitHub repository integration for automatic project updates",
        "Designed a modern UI with interactive animations and micro-interactions",
        "Optimized SEO resulting in improved search engine visibility",
        "Created an accessible interface following WCAG guidelines",
      ],
    },
  ];

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              A passionate Full Stack Developer with expertise in React, React
              Native, and modern web technologies. Specializing in creating
              responsive, user-friendly applications with a focus on performance
              and clean code. Proven track record of delivering high-quality
              solutions that drive business growth and enhance user experience.
            </p>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            className="flex justify-center mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="/resume/Ikramullah-Karokhail CV.pdf"
              download
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Work Experience Timeline */}
            <motion.div className="md:col-span-2" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FiBriefcase className="mr-2" /> Work Experience
              </h3>

              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-3 bottom-8 w-0.5 bg-blue-400/30"></div>

                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-3 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-4 border-gray-900 z-10">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-white">
                          {job.title}
                        </h4>
                        <span className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full flex items-center">
                          <FiCalendar className="mr-1" /> {job.period}
                        </span>
                      </div>

                      <p className="text-lg text-blue-200 mb-2">
                        {job.company} • {job.location}
                      </p>
                      <p className="text-blue-100 mb-4">{job.description}</p>

                      <div className="space-y-1">
                        <p className="text-sm text-white font-medium">
                          Key Achievements:
                        </p>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-blue-100 flex items-start"
                            >
                              <span className="inline-block w-1 h-1 rounded-full bg-blue-400 mt-2 mr-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Offered */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Services</h3>

                <div className="space-y-4">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/15 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-lg font-semibold text-white">
                      Mobile App Development
                    </h4>
                    <p className="text-blue-100">
                      Cross-platform mobile applications with React Native and
                      Expo for iOS and Android with focus on performance and
                      user experience.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/15 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-lg font-semibold text-white">
                      Web Application Development
                    </h4>
                    <p className="text-blue-100">
                      Custom modern web applications using React, responsive
                      design, state management, and optimal performance
                      optimization.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/15 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-lg font-semibold text-white">
                      UI/UX Design
                    </h4>
                    <p className="text-blue-100">
                      Intuitive and engaging user interfaces designed for
                      optimal user experience with focus on accessibility and
                      modern design principles.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
