import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = 'Crafting Stories Through Code & Design';
  
  // Typing Animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Real Projects Data (Same as Projects Page)
  const featuredProjects = [
    {
      id: 1,
      title: 'Clearify-BG',
      category: 'AI Tool',
      description: 'Advanced background removal app powered by AI. Remove backgrounds from images instantly.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      technologies: ['React', 'Remove.bg API', 'Node.js'],
      liveDemo: 'https://your-clearify-bg-demo.vercel.app',
      github: 'https://github.com/yourusername/clearify-bg'
    },
    {
      id: 2,
      title: 'Food-App',
      category: 'Web App',
      description: 'Discover delicious recipes from around the world. Search by ingredients or cuisine type.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      technologies: ['React', 'Spoonacular API', 'CSS3'],
      liveDemo: 'https://your-food-app-demo.vercel.app',
      github: 'https://github.com/yourusername/food-app'
    },
    {
      id: 3,
      title: 'Biblio-Binge',
      category: 'Web App',
      description: 'Your personal book discovery platform. Search millions of books and create reading lists.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
      technologies: ['React', 'Google Books API', 'Tailwind CSS'],
      liveDemo: 'https://your-biblio-binge-demo.vercel.app',
      github: 'https://github.com/yourusername/biblio-binge'
    }
  ];

  return (
    <div className="home-page">
      {/* SEO Meta Tags */}
      <SEO 
        title="Your Name - Portfolio | Full Stack Developer"
        description="Full Stack Developer specializing in MERN stack. Explore my projects including Clearify-BG, Food-App, and Biblio-Binge. Available for freelance work."
        keywords="your name, portfolio, full stack developer, react developer, node.js, mongodb, web development, clearify-bg, food app, biblio binge"
        url="https://your-portfolio-url.com"
      />
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <motion.div 
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <motion.div 
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="badge-dot"></span>
                College Student & Developer
              </motion.div>
              
              <motion.h1 
                className="gradient-text"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                Hi, I'm a Anuj Garola, MERN Developer 👨‍💻
              </motion.h1>
              
              <motion.p 
                className="typing-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {text}<span className="cursor-blink">|</span>
              </motion.p>
              
              <motion.div 
                className="hero-stats"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1
                    }
                  }
                }}
              >
                <motion.div className="stat-box" variants={scaleIn}>
                  <h3>10+</h3>
                  <p>Projects</p>
                </motion.div>
                <motion.div className="stat-box" variants={scaleIn}>
                  <h3>3+</h3>
                  <p>Clients</p>
                </motion.div>
                <motion.div className="stat-box" variants={scaleIn}>
                  <h3>0</h3>
                  <p>Years Exp</p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  <span>View My Work</span>
                  <span>→</span>
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <span>Let's Talk</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: CSS Student Avatar */}
            <motion.div 
              className="hero-avatar"
              initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="avatar-container">
                {/* Rotating Rings */}
                <div className="avatar-ring ring-1"></div>
                <div className="avatar-ring ring-2"></div>
                <div className="avatar-ring ring-3"></div>
                
                {/* Student Character */}
                <div className="avatar-character">
                  <div className="avatar-head">
                    <div className="avatar-face">
                      <div className="avatar-eyes">
                        <div className="eye left"></div>
                        <div className="eye right"></div>
                      </div>
                      <div className="avatar-mouth"></div>
                    </div>
                    <div className="avatar-hair"></div>
                  </div>
                  <div className="avatar-body">
                    <div className="avatar-shirt"></div>
                    <div className="avatar-arms">
                      <div className="arm left"></div>
                      <div className="arm right"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div 
                  className="floating-icon icon-1"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity
                  }}
                >
                  💻
                </motion.div>
                <motion.div 
                  className="floating-icon icon-2"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  📚
                </motion.div>
                <motion.div 
                  className="floating-icon icon-3"
                  animate={{ 
                    y: [0, -25, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  🎓
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="section-label">What I Do</span>
            <h2>My Expertise</h2>
          </motion.div>
          
          <div className="skills-grid">
            {[
              { icon: '💻', title: 'Frontend', desc: 'React, Next.js, JavaScript' },
              { icon: '⚙️', title: 'Backend', desc: 'Node.js, Express, MongoDB' },
              { icon: '🎨', title: 'UI/UX', desc: 'Figma, Adobe XD' },
              { icon: '🚀', title: 'Deployment', desc: 'Vercel, Netlify, AWS' }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section - UPDATED WITH REAL PROJECTS */}
      <section className="featured-projects-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="section-label">Portfolio</span>
            <h2>Featured Projects</h2>
          </motion.div>
          
          <div className="projects-showcase">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <div className="project-thumbnail">
                  <img 
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="overlay-buttons-home">
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-btn-home"
                      >
                        🌐 Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-btn-home"
                      >
                        💻 GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="view-all-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link to="/projects" className="btn btn-primary btn-large">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing</h2>
            <p>Have a project in mind? Let's discuss how I can help!</p>
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

export default Home;
