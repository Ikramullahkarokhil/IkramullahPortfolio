import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  // Animation variants
  const navAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const navItemStyles = scrolled
    ? {
        normal: 'text-gray-600 hover:text-blue-600',
        bg: 'hover:bg-blue-50',
        active: 'text-blue-600'
      }
    : {
        normal: 'text-white/90 hover:text-white',
        bg: 'hover:bg-white/10',
        active: 'text-white'
      };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/60 backdrop-blur-[6px] shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" onClick={(e) => handleClick(e, 'home')}>
              <Logo scrolled={scrolled} />
            </a>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  custom={i}
                  variants={itemAnimation}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
                    ${navItemStyles.normal} ${navItemStyles.bg}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            variants={itemAnimation}
            custom={5}
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 
                ${navItemStyles.normal} ${navItemStyles.bg}`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { 
          height: 'auto',
          opacity: 1,
          transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.2 }
          }
        } : { 
          height: 0,
          opacity: 0,
          transition: {
            height: { duration: 0.3 },
            opacity: { duration: 0.2 }
          }
        }}
        className={`md:hidden overflow-hidden ${
          scrolled ? 'bg-white/60' : 'bg-black/20'
        } backdrop-blur-[6px]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleClick(e, item.toLowerCase())}
              className={`block px-3 py-2 rounded-md text-base font-medium 
                transition-all duration-200 ${navItemStyles.normal} ${navItemStyles.bg}`}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 