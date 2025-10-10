import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// Translations
const translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    
    // Home Page
    heroTitle: 'Hi, I\'m a Student Developer 👨‍💻',
    heroSubtitle: 'Crafting Stories Through Code & Design',
    viewWork: 'View My Work',
    letsTalk: 'Let\'s Talk',
    myExpertise: 'My Expertise',
    featuredProjects: 'Featured Projects',
    viewAllProjects: 'View All Projects',
    
    // Footer
    rights: 'All rights reserved',
    madeWith: 'Made with',
    
    // Common
    readMore: 'Read More',
    learnMore: 'Learn More',
    getInTouch: 'Get In Touch'
  },
  hi: {
    // Navbar
    home: 'होम',
    about: 'के बारे में',
    projects: 'प्रोजेक्ट्स',
    contact: 'संपर्क करें',
    
    // Home Page
    heroTitle: 'नमस्ते, मैं एक छात्र डेवलपर हूँ 👨‍💻',
    heroSubtitle: 'कोड और डिज़ाइन के माध्यम से कहानियाँ बनाना',
    viewWork: 'मेरे काम देखें',
    letsTalk: 'बात करें',
    myExpertise: 'मेरी विशेषज्ञता',
    featuredProjects: 'फीचर्ड प्रोजेक्ट्स',
    viewAllProjects: 'सभी प्रोजेक्ट्स देखें',
    
    // Footer
    rights: 'सर्वाधिकार सुरक्षित',
    madeWith: 'के साथ बनाया',
    
    // Common
    readMore: 'और पढ़ें',
    learnMore: 'और जानें',
    getInTouch: 'संपर्क में रहें'
  },
  es: {
    // Navbar
    home: 'Inicio',
    about: 'Acerca de',
    projects: 'Proyectos',
    contact: 'Contacto',
    
    // Home Page
    heroTitle: 'Hola, soy un desarrollador estudiante 👨‍💻',
    heroSubtitle: 'Creando historias a través del código y el diseño',
    viewWork: 'Ver mi trabajo',
    letsTalk: 'Hablemos',
    myExpertise: 'Mi experiencia',
    featuredProjects: 'Proyectos destacados',
    viewAllProjects: 'Ver todos los proyectos',
    
    // Footer
    rights: 'Todos los derechos reservados',
    madeWith: 'Hecho con',
    
    // Common
    readMore: 'Leer más',
    learnMore: 'Aprender más',
    getInTouch: 'Ponerse en contacto'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
