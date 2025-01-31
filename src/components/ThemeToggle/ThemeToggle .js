import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {darkMode ? <FaSun /> : <FaMoon />} {/* Toggle between sun and moon icons */}
    </button>
  );
}

export default ThemeToggle;
