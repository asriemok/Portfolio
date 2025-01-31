// src/Helmet.js
import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetComponent() {
  return (
    <Helmet>
      <title>My Portfolio</title>
      <meta name="description" content="My portfolio website showcasing my work and blog." />
      <meta name="keywords" content="portfolio, blog, projects" />
    </Helmet>
  );
}

export default HelmetComponent;
