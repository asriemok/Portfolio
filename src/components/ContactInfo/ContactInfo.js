// src/components/ContactInfo.js

import React from 'react';
import './ContactInfo.css'; // Create this stylesheet next

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2 className="contact-heading">Contact Information</h2>
      <p className="contact-text">Email: your.email@example.com</p>
      <p className="contact-text">Phone: +1234567890</p>
      <p className="contact-text">Address: 123 Your Street, Your City, Your Country</p>
    </div>
  );
}

export default ContactInfo;
