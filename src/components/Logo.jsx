import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ scrolled }) => {
  const color = scrolled ? "#2563eb" : "#ffffff";
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main letter I */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M 30,20 L 70,20"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          d="M 50,20 L 50,80"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          d="M 30,80 L 70,80"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Letter K overlay */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
          d="M 45,50 L 70,25"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
          d="M 45,50 L 70,75"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Decorative dot */}
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          cx="50"
          cy="50"
          r="4"
          fill={color}
        />
      </svg>
    </motion.div>
  );
};

export const LogoIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main letter I */}
      <path
        d="M 30,20 L 70,20"
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 50,20 L 50,80"
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 30,80 L 70,80"
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Letter K overlay */}
      <path
        d="M 45,50 L 70,25"
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 45,50 L 70,75"
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Decorative dot */}
      <circle
        cx="50"
        cy="50"
        r="4"
        fill="#2563eb"
      />
    </svg>
  );
};

export default Logo; 