import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await axios.post(
        'http://localhost:5000/api/contact',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.span 
              className="section-label"
              variants={scaleIn}
            >
              Get In Touch
            </motion.span>
            <motion.h1 
              className="gradient-text"
              variants={fadeInUp}
            >
              Let's Work Together
            </motion.h1>
            <motion.p 
              className="contact-subtitle"
              variants={fadeInUp}
            >
              Have a project in mind? I'd love to hear about it!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="form-header">
                <h2>Send Me a Message</h2>
                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <motion.div 
                  className="form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  variants={fadeInUp}
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  ></textarea>
                </motion.div>

                <motion.button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div 
                    className="status-message success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    className="status-message error"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right: Contact Info & Social */}
            <motion.div 
              className="contact-info-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              {/* Contact Cards */}
              <motion.div 
                className="contact-cards"
                variants={staggerContainer}
              >
                {/* Email Card */}
                <motion.a 
                  href="mailto:anujgarola15@gmail.com"
                  className="contact-card"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="card-icon">📧</div>
                  <h3>Email</h3>
                  <p>anujgarola15@gmail.com</p>
                  <span className="card-link">Send an email →</span>
                </motion.a>

                {/* Location Card */}
                <motion.div 
                  className="contact-card"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="card-icon">📍</div>
                  <h3>Location</h3>
                  <p>India</p>
                  <span className="card-link">Available worldwide</span>
                </motion.div>

                {/* Phone Card (Optional) */}
                <motion.a 
                  href="tel:+918788790348"
                  className="contact-card"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="card-icon">📱</div>
                  <h3>Phone</h3>
                  <p>+91 87887 90348</p>
                  <span className="card-link">Call me →</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="social-links-section"
                variants={fadeInUp}
              >
                <h3>Connect With Me</h3>
                <div className="social-links-grid">
                  <motion.a 
                    href="https://github.com/anujGarola26?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="social-icon github">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a 
                    href="www.linkedin.com/in/anujgarola26" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="social-icon linkedin">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="social-icon twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </div>
                    <span>Twitter</span>
                  </motion.a>

                  <motion.a 
                    href="https://instagram.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="social-icon instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span>Instagram</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div 
                className="availability-card"
                variants={scaleIn}
              >
                <div className="availability-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">Available for Work</span>
                </div>
                <p>Currently accepting new projects and opportunities!</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <motion.section 
        className="map-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="map-placeholder">
          <div className="map-content">
            <h3>📍 Based in India</h3>
            <p>Available for remote work worldwide</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
