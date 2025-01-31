import React from 'react';
import './About.css'; // Ensure you have this CSS file
import { motion } from 'framer-motion'; // For animations

function About() {
  return (
    <div className="about">
      <section className="intro">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
          About Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}>
          Hi, I'm Asratu, a passionate full-stack software developer with expertise in front-end and back-end technologies.
        </motion.p>
      </section>
      <section className="detailss">
        <motion.div 
          className="profile-info"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="../../images/profile.jpg" alt="Profile" className="profile-image" />
          <div className="bio">
            <h2>My Journey</h2>
            <p>
              With over 9 years of experience in the tech industry, I've worked on a variety of projects ranging from web applications to enterprise solutions.
            </p>
            <p>
              My technical skills include <span className="highlight">React, Django, Node.js, Express, and C#</span>. I am dedicated to continuous learning and embracing new challenges.
            </p>
          </div>
        </motion.div>
        <motion.div 
          className="skills"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Django</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>C#</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
