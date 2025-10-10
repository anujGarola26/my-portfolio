import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="logo-circle">
            <span className="logo-text">YR</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Crafting Digital Experiences
        </motion.h2>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>

        <motion.p
          className="loading-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading awesome content...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
