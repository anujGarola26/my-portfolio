import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WhatsAppChat.css';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // ← 🔥 YAHAN APNA NUMBER DAALO (Country code ke saath, without + sign)
  const phoneNumber = '919876543210'; // Example: 919876543210 for +91 9876543210
  // Format: CountryCode + Number (no spaces, no +)
  // India: 91XXXXXXXXXX
  // US: 1XXXXXXXXXX
  // UK: 44XXXXXXXXXX

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I visited your portfolio and would like to connect with you.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div 
        className="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        <svg viewBox="0 0 32 32" fill="white">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.924 0-7.435 6.050-13.485 13.485-13.485s13.485 6.050 13.485 13.485c0 7.435-6.050 13.485-13.485 13.485zM21.960 18.284c-0.307-0.154-1.819-0.898-2.102-1.001-0.283-0.102-0.488-0.154-0.693 0.154s-0.796 1.001-0.976 1.206c-0.179 0.205-0.359 0.231-0.667 0.077s-1.301-0.479-2.476-1.528c-0.916-0.816-1.534-1.824-1.713-2.131s-0.019-0.473 0.135-0.626c0.139-0.139 0.308-0.359 0.462-0.539s0.205-0.308 0.308-0.513c0.102-0.205 0.051-0.385-0.026-0.539s-0.693-1.671-0.949-2.285c-0.256-0.597-0.513-0.513-0.693-0.523-0.179-0.010-0.385-0.010-0.590-0.010s-0.539 0.077-0.821 0.385c-0.283 0.308-1.078 1.053-1.078 2.569s1.104 2.978 1.258 3.183c0.154 0.205 2.156 3.298 5.229 4.624 0.731 0.313 1.301 0.501 1.746 0.641 0.734 0.234 1.401 0.201 1.929 0.122 0.588-0.087 1.819-0.744 2.075-1.462s0.256-1.334 0.179-1.462c-0.077-0.128-0.283-0.205-0.590-0.359z"/>
        </svg>
        <span className="chat-badge">1</span>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-popup"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            <div className="chat-header">
              <div className="chat-avatar">
                <span>👨‍💻</span>
              </div>
              <div className="chat-info">
                <h4>Chat with Me</h4>
                <p className="online-status">
                  <span className="status-dot-green"></span>
                  Online now
                </p>
              </div>
              <button 
                className="chat-close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="chat-body">
              <div className="chat-message">
                <p>Hi there! 👋</p>
                <p>How can I help you today?</p>
                <span className="message-time">Just now</span>
              </div>
              <div className="quick-replies">
                <button className="quick-reply">💼 Discuss a project</button>
                <button className="quick-reply">❓ Ask a question</button>
                <button className="quick-reply">🤝 Collaborate</button>
              </div>
            </div>

            <div className="chat-footer">
              <button 
                className="whatsapp-btn"
                onClick={handleWhatsAppClick}
              >
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                </svg>
                Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;
