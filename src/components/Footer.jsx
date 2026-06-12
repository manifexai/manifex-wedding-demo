import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="footer-content"
      >
        <h2 className="footer-title">Aarav & Diya</h2>
        <p className="footer-thanks">Thank you for being part of our special day</p>
        <div className="footer-divider"></div>
        <p className="footer-date">28 . 12 . 2026</p>
        <p className="footer-credits">Made with ❤️ for the perfect wedding</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
