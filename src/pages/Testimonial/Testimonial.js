import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company XYZ',
    quote: 'An outstanding professional with a keen eye for detail. Highly recommended!'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Project Manager, ABC Corp',
    quote: 'Delivered exceptional results on time and within budget. A pleasure to work with.'
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
