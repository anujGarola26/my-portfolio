import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import anujgarola from '../assets/anujgarola.pdf'; // Ensure you have anujgarola.png in assets folder


const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.span 
              className="section-label"
              variants={scaleIn}
            >
              Get To Know Me
            </motion.span>
            <motion.h1 
              className="gradient-text"
              variants={fadeInUp}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="about-subtitle"
              variants={fadeInUp}
            >
              Passionate Developer | Creative Problem Solver | Lifelong Learner
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-grid">
            {/* Left: Profile Image/Avatar */}
            <motion.div 
              className="about-image-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="profile-card">
                <div className="profile-image-wrapper">
                  {/* Student Avatar */}
                  <div className="profile-avatar">
                    <div className="avatar-rings">
                      <div className="ring ring-1"></div>
                      <div className="ring ring-2"></div>
                      <div className="ring ring-3"></div>
                    </div>
                    <div className="avatar-emoji">👨‍💻</div>
                  </div>
                </div>
                
                <div className="profile-info">
                  <h3>Student Developer</h3>
                  <p>Full Stack | MERN Specialist</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-number">0</span>
                      <span className="stat-label">Years</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">3+</span>
                      <span className="stat-label">Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: About Text */}
            <motion.div 
              className="about-text-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <motion.h2 variants={fadeInUp}>
                Hi, I'm a Passionate Developer! 👋
              </motion.h2>
              
              <motion.p variants={fadeInUp}>
                I'm a full-stack developer with a passion for creating meaningful 
                digital experiences. Currently pursuing my degree while building 
                real-world applications that solve actual problems.
              </motion.p>

              <motion.p variants={fadeInUp}>
                My journey in web development started with curiosity about how 
                websites work. Today, I specialize in the MERN stack and love 
                bringing ideas to life through clean code and beautiful design.
              </motion.p>

              <motion.p variants={fadeInUp}>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer 
                community.
              </motion.p>

              <motion.div 
                className="cta-buttons"
                variants={fadeInUp}
              >
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Let's Connect
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="section-label">My Toolkit</span>
            <h2>Technical Skills</h2>
          </motion.div>

          <motion.div 
            className="skills-categories"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Frontend Skills */}
            <motion.div className="skill-category" variants={scaleIn}>
              <div className="category-icon">💻</div>
              <h3>Frontend Development</h3>
              <div className="skill-tags-grid">
                {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
                  'Tailwind CSS', 'Framer Motion'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div className="skill-category" variants={scaleIn}>
              <div className="category-icon">⚙️</div>
              <h3>Backend Development</h3>
              <div className="skill-tags-grid">
                {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 
                  'GraphQL', 'JWT', 'OAuth'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools & Others */}
            <motion.div className="skill-category" variants={scaleIn}>
              <div className="category-icon">🛠️</div>
              <h3>Tools & Others</h3>
              <div className="skill-tags-grid">
                {['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker', 
                  'Vercel', 'Netlify'].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience/Education Timeline */}
      <section className="about-timeline-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="section-label">My Journey</span>
            <h2>Education & Experience</h2>
          </motion.div>

          <div className="timeline">
            {[
              {
                year: '2023 - Present',
                title: 'Full Stack Developer',
                subtitle: 'Freelance Projects',
                desc: 'Building modern web applications for clients worldwide',
                icon: '💼'
              },
              {
                year: '2022 - Present',
                title: 'Computer Science Student',
                subtitle: 'University Name',
                desc: 'Pursuing Bachelor\'s in Computer Science & Engineering',
                icon: '🎓'
              },
              {
                year: '2021',
                title: 'Started Web Development',
                subtitle: 'Self Learning',
                desc: 'Began learning MERN stack through online courses and projects',
                icon: '🚀'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="about-interests-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="section-label">Beyond Code</span>
            <h2>Interests & Hobbies</h2>
          </motion.div>

          <motion.div 
            className="interests-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { icon: '📚', title: 'Reading Tech Blogs', desc: 'Staying updated with latest tech trends' },
              { icon: '🎮', title: 'Gaming', desc: 'Relaxing with video games' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Creating beautiful interfaces' },
              { icon: '🏃', title: 'Fitness', desc: 'Maintaining work-life balance' }
            ].map((interest, index) => (
              <motion.div 
                key={index}
                className="interest-card"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="interest-icon">{interest.icon}</div>
                <h3>{interest.title}</h3>
                <p>{interest.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="about-cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together!</h2>
            <p>I'm always open to discussing new projects and opportunities.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get In Touch
              </Link>
              <a 
                href={anujgarola} 
                download 
                className="btn btn-secondary btn-large"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
