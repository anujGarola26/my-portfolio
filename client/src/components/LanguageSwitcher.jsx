import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className="language-switcher">
      <motion.button
        className="lang-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-code">{currentLang.code.toUpperCase()}</span>
        <motion.span
          className="lang-arrow"
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-name">{lang.name}</span>
                {language === lang.code && <span className="checkmark">✓</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
