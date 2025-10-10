import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Your Actual Projects Data
  const projects = [
    {
      id: 1,
      title: 'Clearify-BG',
      category: 'AI Tool',
      description: 'Advanced background removal app powered by AI. Remove backgrounds from images instantly with high precision.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      technologies: ['React', 'Remove.bg API', 'Node.js', 'Express'],
      liveDemo: 'https://your-clearify-bg-demo.vercel.app', // ← Yahan apna live URL daalo
      github: 'https://github.com/yourusername/clearify-bg', // ← Yahan GitHub link daalo
      featured: true,
      tags: ['AI', 'Image Processing', 'SaaS']
    },
    {
      id: 2,
      title: 'Food-App',
      category: 'Web App',
      description: 'Discover delicious recipes from around the world. Search by ingredients, cuisine type, or dietary preferences.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      technologies: ['React', 'Spoonacular API', 'CSS3', 'Axios'],
      liveDemo: 'https://your-food-app-demo.vercel.app', // ← Yahan apna live URL daalo
      github: 'https://github.com/yourusername/food-app', // ← Yahan GitHub link daalo
      featured: true,
      tags: ['Food', 'Recipe Search', 'API Integration']
    },
    {
      id: 3,
      title: 'Biblio-Binge',
      category: 'Web App',
      description: 'Your personal book discovery platform. Search millions of books, read reviews, and create your reading list.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
      technologies: ['React', 'Google Books API', 'Redux', 'Tailwind CSS'],
      liveDemo: 'https://your-biblio-binge-demo.vercel.app', // ← Yahan apna live URL daalo
      github: 'https://github.com/yourusername/biblio-binge', // ← Yahan GitHub link daalo
      featured: true,
      tags: ['Books', 'Search Engine', 'Reading List']
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="container">
          <motion.div
            className="projects-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.span 
              className="section-label"
              variants={scaleIn}
            >
              My Work
            </motion.span>
            <motion.h1 
              className="gradient-text"
              variants={fadeInUp}
            >
              Projects
            </motion.h1>
            <motion.p 
              className="projects-subtitle"
              variants={fadeInUp}
            >
              Showcasing my latest work and creative solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-grid-section">
        <div className="container">
          {/* Filter Buttons */}
          <motion.div 
            className="projects-filter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {['all', 'web app', 'ai tool'].map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card-full"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="project-overlay-full">
                    <div className="overlay-buttons">
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-btn btn-live"
                      >
                        <span>🌐</span> Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-btn btn-github"
                      >
                        <span>💻</span> View Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="project-details-full">
                  <div className="project-header">
                    <span className="project-category-badge">{project.category}</span>
                    {project.featured && (
                      <span className="featured-badge">⭐ Featured</span>
                    )}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* Tags */}
                  <div className="project-tags-full">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="project-tech-stack">
                    <span className="tech-label">Built with:</span>
                    <div className="tech-badges">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Live
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More Projects Coming Soon */}
          <motion.div 
            className="more-projects-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="coming-soon-card">
              <motion.div 
                className="coming-soon-icon"
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                🚀
              </motion.div>
              <h3>More Projects Coming Soon!</h3>
              <p>I'm constantly working on new exciting projects. Stay tuned for updates!</p>
              <div className="social-follow">
                <span>Follow me for updates:</span>
                <div className="social-icons">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="projects-cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Working Together?</h2>
            <p>Let's discuss your project and create something amazing!</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start a Project
              </Link>
              <a href="mailto:your@email.com" className="btn btn-secondary btn-large">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
