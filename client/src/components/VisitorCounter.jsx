import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './VisitorCounter.css';

const VisitorCounter = () => {
  const [stats, setStats] = useState({
    visitors: 0,
    countries: 52,
    projects: 3
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate unique visitor ID
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
      visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('visitorId', visitorId);
    }

    // Track visitor
    const trackVisitor = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/contact/track-visitor', {
          visitorId
        });
        
        if (response.data.success) {
          setStats({
            visitors: response.data.totalVisitors,
            countries: 52,
            projects: 3
          });
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        // Fallback to localStorage
        const localCount = parseInt(localStorage.getItem('visitorCount') || '1000');
        setStats({
          visitors: localCount,
          countries: 52,
          projects: 3
        });
      } finally {
        setLoading(false);
      }
    };

    trackVisitor();
  }, []);

  // Animated counter
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (stats.visitors > 0) {
      let start = 0;
      const end = stats.visitors;
      const duration = 1000; // 1 second
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayCount(end);
          clearInterval(timer);
        } else {
          setDisplayCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [stats.visitors]);

  if (loading) {
    return (
      <div className="visitor-counter">
        <div className="counter-loading">Loading stats...</div>
      </div>
    );
  }

  return (
    <motion.div 
      className="visitor-counter"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="counter-item">
        <span className="counter-icon">👀</span>
        <div className="counter-details">
          <span className="counter-number">
            {displayCount.toLocaleString()}
          </span>
          <span className="counter-label">Total Visitors</span>
        </div>
      </div>

      <div className="counter-divider"></div>

      <div className="counter-item">
        <span className="counter-icon">🌍</span>
        <div className="counter-details">
          <span className="counter-number">{stats.countries}+</span>
          <span className="counter-label">Countries</span>
        </div>
      </div>

      <div className="counter-divider"></div>

      <div className="counter-item">
        <span className="counter-icon">🚀</span>
        <div className="counter-details">
          <span className="counter-number">{stats.projects}</span>
          <span className="counter-label">Live Projects</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
