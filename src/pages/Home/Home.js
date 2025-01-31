// src/pages/Home.js

import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Ensure you have this CSS file

function Home() {
  return (
    <div className="home">
      {/* Introduction Section */}
      <section className="intro animated-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="scrolling-container"
        >
          <span className="scrolling-text">Hi, I'm Asratu!</span>, a full-stack
          software developer with a passion for creating innovative solutions.
        </motion.p>
        <a href="/about" className="learn-more">
          Learn More About Me
        </a>
      </section>

      {/* Portfolio Preview Section */}
      <section className="portfolio-preview">
        <h2>Featured Projects</h2>
        <div className="grid-container">
          {[
            {
              icon: "🛒",
              title: "E-Commerce Platform",
              description:
                "A robust online shopping platform with user authentication, product management, and secure payment gateways.",
              link: "/e-commerce",
            },
            {
              icon: "📱",
              title: "Social Media Dashboard",
              description:
                "A comprehensive dashboard for managing and analyzing social media metrics and user engagement.",
              link: "/social-media-dashboard",
            },
            {
              icon: "🏠",
              title: "Real Estate Management System",
              description:
                "A system for managing property listings, tenant information, and lease agreements with advanced search and filter options.",
              link: "/real-estate-management",
            },
            {
              icon: "✍️",
              title: "Personal Blog",
              description:
                "A dynamic blog platform with content management features, user comments, and SEO optimization.",
              link: "/personal-blog",
            },
            {
              icon: "📊",
              title: "Project Management Tool",
              description:
                "A tool for managing projects, tracking tasks, and collaborating with team members through an intuitive interface.",
              link: "/project-management",
            },
            {
              icon: "🏋️",
              title: "Fitness Tracker App",
              description:
                "An app for tracking fitness goals, workouts, and progress with personalized recommendations and health metrics.",
              link: "/fitness-tracker",
            },
            {
              icon: "🎓",
              title: "Online Learning Platform",
              description:
                "An educational platform offering courses, quizzes, and certificates with user progress tracking and interactive content.",
              link: "/online-learning",
            },
            {
              icon: "🍽️",
              title: "Restaurant Reservation System",
              description:
                "A system for managing restaurant reservations, table availability, and customer feedback with real-time updates.",
              link: "/restaurant-reservation",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="grid-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="view-details">
                View Details
              </a>
            </motion.div>
          ))}
        </div>
        <a href="/projects" className="view-more">
          See More Projects
        </a>
      </section>

      {/* Other sections like contact info, testimonials, etc. */}
    </div>
  );
}

export default Home;
