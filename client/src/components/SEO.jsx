import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Your Name - Portfolio | Full Stack Developer',
  description = 'Full Stack Developer portfolio showcasing projects in React, Node.js, MongoDB. Explore my work in web development, UI/UX design, and more.',
  keywords = 'your name, full stack developer, web developer, react developer, portfolio, MERN stack, javascript developer, frontend developer, backend developer',
  author = 'Your Name',
  image = 'https://your-portfolio-url.com/portfolio-preview.jpg',
  url = 'https://your-portfolio-url.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Your Name Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@yourtwitterhandle" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#007bff" />
      <meta name="msapplication-TileColor" content="#007bff" />
    </Helmet>
  );
};

export default SEO;
