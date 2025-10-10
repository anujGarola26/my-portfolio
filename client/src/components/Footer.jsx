import React from 'react';
import VisitorCounter from './VisitorCounter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Visitor Counter */}
        <VisitorCounter />
        
        {/* Footer Text */}
        <div className="footer-content">
          <p>
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p>
            Made with ❤️ Anuj
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="https://github.com/anujGarola26?tab=repositories" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="www.linkedin.com/in/anujgarola26" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
