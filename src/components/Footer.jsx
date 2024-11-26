import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import * as Yup from 'yup';

const Footer = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [errors, setErrors] = useState({});

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

  // Validation Schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters')
      .max(1000, 'Message must be less than 1000 characters')
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus({ success: false, message: '' });

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      message: formRef.current.message.value
    };

    try {
      // Validate form data
      await validationSchema.validate(formData, { abortEarly: false });
      
      setIsSubmitting(true);

      const result = await emailjs.send(
        'service_4bfhn2j',
        'template_r5hzmzs',
        formData,
        'QD4h7CecBMPc-KuqX'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! Ikramullah will get back to you soon.'
        });
        formRef.current.reset();
      }
    } catch (error) {
      if (error.inner) {
        // Yup validation errors
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        // EmailJS error
        setSubmitStatus({
          success: false,
          message: 'Failed to send message. Please try again.'
        });
        console.error('EmailJS Error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-12 bg-white/5 backdrop-blur-lg" id="contact">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    errors.name ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    errors.email ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    errors.message ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors resize-none`}
                ></textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 
                  ${isSubmitting 
                    ? 'bg-blue-400/50 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center ${
                    submitStatus.success ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 text-blue-100 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">ikramullahkarokhail@gmail.com</span>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 text-blue-100 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+93779747449</span>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 text-blue-100 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Ahmadshah baba mena, Kabul, Afghanistan</span>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/ikramullah-karokhil-002431245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-colors text-blue-100 hover:text-blue-400"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/Ikramullahkarokhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600/20 transition-colors text-blue-100 hover:text-purple-400"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/Karokhail_ikram"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400/20 transition-colors text-blue-100 hover:text-blue-400"
                >
                  <FaTwitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10 text-center text-blue-100"
        >
          <p>© 2024 Ikramullah Karokhail. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 