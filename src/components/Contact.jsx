import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">We are here to help</p>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-card groom-card glass"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-avatar groom-avatar"></div>
          <h3 className="contact-role">The Groom</h3>
          <h4 className="contact-name">Aarav Patel</h4>
          <div className="contact-links">
            <a href="tel:+919876543210" className="contact-link phone">
              <FaPhoneAlt /> Call
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-card bride-card glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-avatar bride-avatar"></div>
          <h3 className="contact-role">The Bride</h3>
          <h4 className="contact-name">Diya Sharma</h4>
          <div className="contact-links">
            <a href="tel:+919876543211" className="contact-link phone">
              <FaPhoneAlt /> Call
            </a>
            <a href="https://wa.me/919876543211" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="qr-section glass text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3>Scan & Save Our Date</h3>
        <div className="qr-code">
          {/* Using a placeholder image for the QR code */}
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Aarav%20and%20Diya%20Wedding%20-%2028%20Dec%202026" alt="Save the date QR code" />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
