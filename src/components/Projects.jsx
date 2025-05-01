import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import adilFashion from "../assets/adil-fashion.jpg";
import holyQuran from "../assets/holy-quran.jpg";
import portfolio from "../assets/portfolio.jpg";
import SEO from "./SEO";

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  // Fallback images for projects that don't have custom images
  const fallbackImages = {
    AdilFashion: adilFashion,
    HolyQuran: holyQuran,
    IkramullahPortfolio: portfolio,
    default:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  };

  // Predefined projects to use as fallback when GitHub API fails
  const fallbackProjects = [
    {
      id: 1,
      name: "AdilFashion",
      description:
        "A comprehensive mobile application for tailor shop management developed with React Native. Features include customer profile management, detailed measurement tracking, order history, appointment scheduling, invoice generation, and inventory management. The app streamlines tailoring operations by digitizing the entire workflow from customer onboarding to delivery.",
      technologies: [
        "React Native",
        "Expo",
        "SQLite",
        "Formik",
        "React Native Paper",
      ],
      link: "https://github.com/Ikramullahkarokhil/AdilFashion",
      homepage: null,
      stars: 3,
      forks: 0,
      image: adilFashion,
      created_at: "Feb 2022",
      has_readme: true,
    },
    {
      id: 2,
      name: "HolyQuran",
      description:
        "A feature-rich multilingual Quran application offering translations in Pashto, Dari, English, and Arabic. Includes audio recitations by renowned reciters, verse-by-verse navigation, bookmarking system, search functionality, and night mode. Built with React Native and Expo, this app provides an immersive and respectful experience for Quran study.",
      technologies: ["React Native", "Expo", "SQLite", "RESTful APIs"],
      link: "https://github.com/Ikramullahkarokhil/HolyQuran",
      homepage: null,
      stars: 2,
      forks: 0,
      image: holyQuran,
      created_at: "Mar 2022",
      has_readme: true,
    },
    {
      id: 3,
      name: "IkramullahPortfolio",
      description:
        "A modern responsive portfolio website showcasing my skills and projects. Built with React, Tailwind CSS, and Framer Motion, this portfolio features dynamic GitHub project fetching, smooth animations, and optimized SEO. The site automatically stays up-to-date with my latest work through GitHub API integration.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      link: "https://github.com/Ikramullahkarokhil/IkramullahPortfolio",
      homepage: "https://ikramullahkarokhail.vercel.app",
      stars: 1,
      forks: 0,
      image: portfolio,
      created_at: "Nov 2023",
      has_readme: true,
    },
    {
      id: 4,
      name: "Farhannet",
      description:
        "A full-featured web application for a telecommunications company. This project provides service management, customer accounts, billing integration, and support ticket systems. Built with React, the application features a responsive dashboard with real-time analytics and reporting tools.",
      technologies: ["JavaScript", "React", "CSS"],
      link: "https://github.com/Ikramullahkarokhil/Farhannet",
      homepage: null,
      stars: 1,
      forks: 0,
      image: fallbackImages.default,
      created_at: "Apr 2022",
      has_readme: false,
    },
    {
      id: 5,
      name: "ADM",
      description:
        "A comprehensive data management system with RESTful API integration. This React-based application offers advanced data visualization, user authentication, role-based access control, and export functionality. Features include intuitive filtering and sorting capabilities, bulk operations, and an audit trail system.",
      technologies: ["JavaScript", "React", "RESTful APIs", "HTML", "CSS"],
      link: "https://github.com/Ikramullahkarokhil/ADM",
      homepage: null,
      stars: 0,
      forks: 0,
      image: fallbackImages.default,
      created_at: "May 2022",
      has_readme: false,
    },
    {
      id: 6,
      name: "AsanSystemWeb",
      description:
        "A native Android application developed with Kotlin that streamlines business operations. Features Firebase integration for real-time data synchronization, offline capabilities, user authentication, and push notifications. The app includes inventory management, sales tracking, and reporting modules.",
      technologies: ["Kotlin", "Android", "Firebase"],
      link: "https://github.com/Ikramullahkarokhil/AsanSystemWeb",
      homepage: null,
      stars: 0,
      forks: 0,
      image: fallbackImages.default,
      created_at: "Jun 2022",
      has_readme: false,
    },
  ];

  // Backup descriptions if README is not available
  const fallbackDescriptions = {
    AdilFashion:
      "A comprehensive mobile application for tailor shop management developed with React Native.",
    HolyQuran:
      "A multilingual Quran application with translations in Pashto, Dari, English, and Arabic.",
    IkramullahPortfolio:
      "A modern responsive portfolio website showcasing skills and projects.",
    Farhannet:
      "A web application for telecommunications services and management.",
    ADM: "A data management system with RESTful API integration.",
    AsanSystemWeb:
      "A native Android application developed with Kotlin for business operations.",
  };

  // Tech stack mapping based on common file extensions in repositories
  const getTechStack = (languages, name) => {
    const defaultTechs = {
      AdilFashion: [
        "React Native",
        "Expo",
        "SQLite",
        "Formik",
        "React Native Paper",
      ],
      HolyQuran: ["React Native", "Expo", "SQLite", "RESTful APIs"],
      IkramullahPortfolio: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      Farhannet: ["JavaScript", "React", "CSS"],
      ADM: ["JavaScript", "React", "RESTful APIs", "HTML", "CSS"],
      AsanSystemWeb: ["Kotlin", "Android", "Firebase"],
    };

    if (defaultTechs[name]) {
      return defaultTechs[name];
    }

    // If we have languages data from GitHub API
    if (languages && Object.keys(languages).length > 0) {
      return Object.keys(languages);
    }

    // Fallback to generic techs
    return ["JavaScript", "React", "CSS"];
  };

  // Helper function to fetch README content
  const fetchReadmeContent = async (owner, repo) => {
    try {
      // First try to get the README
      const readmeResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`
      );

      if (!readmeResponse.ok) {
        // If README not found, return null
        return null;
      }

      const readmeData = await readmeResponse.json();

      // GitHub returns README content as base64 encoded
      if (readmeData.content && readmeData.encoding === "base64") {
        // Decode the base64 content
        const decodedContent = atob(readmeData.content.replace(/\n/g, ""));

        // Extract a summary from the README (first paragraph or first 300 chars)
        let summary = "";

        // Try to find the first paragraph after any headers
        const paragraphMatch = decodedContent.match(
          /(?:^|\n)(?!#)(.+?)(?=\n\n|\n#|$)/s
        );

        if (paragraphMatch && paragraphMatch[1]) {
          summary = paragraphMatch[1].trim();
        } else {
          // If no clear paragraph, just take the first 300 chars
          summary = decodedContent.substring(0, 300).trim();
        }

        // Clean up Markdown syntax for better display
        summary = summary
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Replace markdown links with just the text
          .replace(/[*_]{2}([^*_]+)[*_]{2}/g, "$1") // Remove bold/italic markers
          .replace(/[*_]([^*_]+)[*_]/g, "$1") // Remove single asterisks/underscores
          .replace(/```[^`]*```/g, "") // Remove code blocks
          .replace(/`([^`]+)`/g, "$1") // Remove inline code
          .trim();

        // If summary is too short, try to get a bit more content
        if (summary.length < 100 && decodedContent.length > 300) {
          summary = decodedContent
            .substring(0, 500)
            .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
            .replace(/[*_]{2}([^*_]+)[*_]{2}/g, "$1")
            .replace(/[*_]([^*_]+)[*_]/g, "$1")
            .replace(/```[^`]*```/g, "")
            .replace(/`([^`]+)`/g, "$1")
            .trim();
        }

        return summary;
      }

      return null;
    } catch (error) {
      console.error(`Error fetching README for ${repo}:`, error);
      return null;
    }
  };

  // Fetch GitHub projects
  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        setLoading(true);

        // Set a timeout to detect if the API call is taking too long
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(
            () => reject(new Error("GitHub API request timed out")),
            8000
          );
        });

        // Actual API call to GitHub
        const fetchPromise = fetch(
          "https://api.github.com/users/Ikramullahkarokhil/repos"
        );

        // Race between timeout and API call
        const response = await Promise.race([fetchPromise, timeoutPromise]);

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data || data.length === 0) {
          throw new Error("No repositories found");
        }

        // Process each repo with languages and README
        const projectsWithDetails = await Promise.all(
          data.map(async (repo) => {
            try {
              // Fetch languages
              const langResponse = await fetch(repo.languages_url);
              const languages = await langResponse.json();

              // Fetch README content
              const readmeContent = await fetchReadmeContent(
                "Ikramullahkarokhil",
                repo.name
              );

              // Use README content if available, otherwise fallback
              const description =
                readmeContent ||
                fallbackDescriptions[repo.name] ||
                repo.description ||
                `A ${
                  repo.name
                } project developed by Ikramullah Karokhail using ${
                  Object.keys(languages).join(", ") || "modern web technologies"
                }.`;

              return {
                id: repo.id,
                name: repo.name,
                description: description,
                languages: languages,
                technologies: getTechStack(languages, repo.name),
                link: repo.html_url,
                homepage: repo.homepage,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                image: fallbackImages[repo.name] || fallbackImages.default,
                created_at: new Date(repo.created_at).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                  }
                ),
                has_readme: !!readmeContent,
              };
            } catch (error) {
              console.error(`Error processing repo ${repo.name}:`, error);

              return {
                id: repo.id,
                name: repo.name,
                description:
                  fallbackDescriptions[repo.name] ||
                  repo.description ||
                  `A ${repo.name} project developed by Ikramullah Karokhail.`,
                languages: {},
                technologies: getTechStack({}, repo.name),
                link: repo.html_url,
                homepage: repo.homepage,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                image: fallbackImages[repo.name] || fallbackImages.default,
                created_at: repo.created_at
                  ? new Date(repo.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "N/A",
                has_readme: false,
              };
            }
          })
        );

        setGithubProjects(projectsWithDetails);
        setUsingFallback(false);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);

        // Use fallback projects instead of showing an error
        setGithubProjects(fallbackProjects);
        setUsingFallback(true);
        setError(null); // Clear error so we don't show error state
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

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

  // Show loading state
  if (loading) {
    return (
      <div className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full mb-8"></div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
          </div>
          <p className="text-white mt-4">Loading projects from GitHub...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-red-400 mb-8">
            Unable to connect to GitHub API: {error}
          </p>
          <motion.button
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors shadow-lg"
          >
            Try Again
          </motion.button>
        </div>
      </div>
    );
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
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-white mb-4">
              My GitHub Projects
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Explore my open source projects from GitHub. These projects
              showcase my skills and expertise in various technologies.
            </p>
            {usingFallback && (
              <p className="text-yellow-300 mt-2 text-sm max-w-2xl mx-auto">
                Note: Displaying locally stored project information due to
                GitHub API unavailability.
              </p>
            )}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transform-gpu"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} - GitHub project by Ikramullah Karokhail`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <span className="bg-gray-900/70 text-yellow-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                      {project.stars}
                    </span>
                    <span className="bg-gray-900/70 text-blue-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      {project.forks}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <span className="bg-gray-900/70 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {project.created_at}
                    </span>
                    {project.has_readme && (
                      <span className="bg-gray-900/70 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        README
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-blue-100 mb-4 h-32 overflow-y-auto text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-400/20 text-blue-100 text-sm px-3 py-1 rounded-full hover:bg-blue-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-blue-400/20 text-blue-100 text-sm px-3 py-1 rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-colors text-center"
                    >
                      GitHub Repo
                    </motion.a>
                    {project.homepage && (
                      <motion.a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-blue-500/70 hover:bg-blue-500/90 text-white py-2 rounded-lg transition-colors text-center"
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
