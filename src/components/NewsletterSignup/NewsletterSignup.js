// src/components/NewsletterSignup.js

import React, { useState } from 'react';
import './NewsletterSignup.css'; // Create this stylesheet next

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <div className="newsletter-signup">
      <h2 className="newsletter-heading">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
