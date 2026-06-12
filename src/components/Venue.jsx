import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';
import './Venue.css';

const Venue = () => {
  return (
    <section className="section venue-section" id="venue">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="section-title">The Venue</h2>
        <p className="section-subtitle">Where the magic happens</p>
      </motion.div>

      <div className="venue-container">
        <motion.div 
          className="venue-card glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="venue-icon">
            <FaMapMarkerAlt />
          </div>
          <h3 className="venue-name">The Oberoi Udaivilas</h3>
          <p className="venue-address">
            Badi-Gorela Mulla Talai Road, Haridas Ji Ki Magri,<br/>
            Udaipur, Rajasthan 313001, India
          </p>
          <p className="venue-desc">
            Located on the banks of Lake Pichola, The Oberoi Udaivilas stands on the 200 year old hunting grounds of the Maharana of Mewar. Spread over fifty acres, which includes a twenty-acre wildlife sanctuary with deer and wild boar. The hotel affords spectacular views across the verdant gardens and sparkling Lake Pichola.
          </p>
          <a 
            href="https://goo.gl/maps/placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary venue-btn"
          >
            <FaDirections style={{ marginRight: '10px' }} />
            Get Directions
          </a>
        </motion.div>

        <motion.div 
          className="venue-map"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Embedding a placeholder Google Map centered on Udaipur */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115865.0435889953!2d73.65213692476573!3d24.585445208688463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
