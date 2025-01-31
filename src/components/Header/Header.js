import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import ThemeToggle from "./../ThemeToggle/ThemeToggle ";

function Header() {
  return (
    <header className="gradient-background header">
      <nav className="nav">
        <ul className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contact
          </NavLink>
        </ul>
        {/* <button className="theme-toggle" onClick={ThemeToggle}>Toggle Theme</button> */}
      </nav>
      <div>

      <ThemeToggle /> {/* Properly aligned toggle button */}
      <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "logout" : "nav-lo")}
          >
            Login
          </NavLink>
      </div>
    </header>
  );
}

export default Header;
