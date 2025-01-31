// src/pages/Testimonials.js

import React from 'react';
import './Testimonials.css'; // Ensure you have this CSS file
import { motion } from 'framer-motion'; // For animations

function Testimonials() {
  const testimonialsData = [
    {
      text: "Asratu's work exceeded our expectations. Their attention to detail and innovative solutions were key to the project's success.",
      name: "John Doe, CEO at TechCorp",
    },
    {
      text: "Working with Asratu was a pleasure. Their expertise in full-stack development brought our vision to life.",
      name: "Jane Smith, Project Manager at WebWorks",
    },
    {
      text: "Asratu is a true professional. Their ability to solve complex problems and deliver on time is unparalleled.",
      name: "Michael Brown, Lead Developer at CodeMasters",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials">
      <h1 className="testimonials-title">What People Are Saying</h1>
      <p className="testimonials-intro">
        Here are some kind words from clients and colleagues:
      </p>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
