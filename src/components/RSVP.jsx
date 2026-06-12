import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or Firebase
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds for demonstration
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', attending: 'yes', guests: '1', message: '' });
    }, 5000);
  };

  return (
    <section className="section rsvp-section" id="rsvp">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="section-title">RSVP</h2>
        <p className="section-subtitle">Please respond by November 1st, 2026</p>
      </motion.div>

      <motion.div 
        className="rsvp-container glass"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {submitted ? (
          <div className="rsvp-success">
            <h3>Thank You!</h3>
            <p>Your RSVP has been received. We look forward to seeing you!</p>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Mr. & Mrs. Sharma"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="attending">Will you attend?</label>
                <select id="attending" name="attending" value={formData.attending} onChange={handleChange}>
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
              
              <div className="form-group half">
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" name="guests" value={formData.guests} onChange={handleChange} disabled={formData.attending === 'no'}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message for the couple (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="3"
                placeholder="Looking forward to it!"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary rsvp-submit">
              Send RSVP
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default RSVP;
