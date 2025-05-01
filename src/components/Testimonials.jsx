import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      name: "Shafiqullah Ghyasi",
      position: "Full Stack Developer",
      company: "Freelance",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgEvFwcVZDxPFVyYE7EEYWDlloVx1YpXETzC2eTcOozG3nli5sss3h_F-ZBS0I4o8N7E&usqp=CAU",
      testimonial:
        "I've had the pleasure of collaborating with Ikramullah on several projects. His expertise in React and React Native is exceptional. He's not only technically skilled but also has a great understanding of user experience and performance optimization. His ability to solve complex problems and deliver high-quality code makes him a valuable asset to any development team.",
      rating: 5,
    },
    {
      name: "Ahmad Rashid",
      position: "CEO",
      company: "Asan Systems",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      testimonial:
        "Ikramullah's work on our e-commerce platform was outstanding. He demonstrated strong technical skills and a deep understanding of modern web technologies. His attention to detail and commitment to delivering high-quality solutions were evident throughout the project. He's a reliable and skilled developer who consistently exceeds expectations.",
      rating: 5,
    },
    {
      name: "Maryam Ahmadi",
      position: "Project Manager",
      company: "Farhannet",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      testimonial:
        "Working with Ikramullah on the ISP portal project was a great experience. He showed excellent problem-solving skills and was always proactive in suggesting improvements. His ability to understand business requirements and translate them into technical solutions was impressive. He's a team player who consistently delivers quality work.",
      rating: 5,
    },
  ];

  // Handle navigation
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            What clients and colleagues say about working with me. Their
            feedback reflects my commitment to quality and collaboration.
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div className="p-8">
                      {/* Rating */}
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-blue-100 text-lg italic mb-8">
                        "{testimonial.testimonial}"
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center">
                        <div className="mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-300 text-sm">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500/20 hover:bg-blue-500/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicator dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? "bg-blue-400 w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500/20 hover:bg-blue-500/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
