import React, { useState } from 'react';
import './Testimonial.css'; // Import CSS file

const TestimonialSection = () => {
  // Sample testimonial data
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 3,
      author: 'Alice Johnson',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]);

  // State for form input fields
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique id for the new testimonial
    const id = Math.floor(Math.random() * 10000) + 1;
    // Create a new testimonial object
    const newTestimonial = {
      id,
      author,
      text,
    };
    // Add the new testimonial to the existing array of testimonials
    setTestimonials([...testimonials, newTestimonial]);
    // Reset form fields
    setAuthor('');
    setText('');
  };

  
  return (
    <div>
    <div className="testimonial-section">
      <div className="testimonials-container">
        <div className="testimonials">
          <h2>Personal Stories</h2>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="add-testimonial-form">
          <h2>Share your Personal Story</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Your Name:</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="testimonial">Your Experience</label>
              <textarea
                id="testimonial"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSection;
