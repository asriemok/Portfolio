import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="social-links">
            <a href="https://twitter.com/Asrie2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/asratu-mekonenn-583352217/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Asriemok" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href=" https://www.facebook.com/asrie.mekonenn/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://t.me/Asrie21" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>&copy; 2024 Asrie's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
