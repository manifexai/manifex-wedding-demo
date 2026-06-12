import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      {/* Fallback image if user hasn't provided one. Using a high quality Unsplash placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
        alt="Wedding Background" 
        className="hero-bg"
      />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="hero-pretitle">The Wedding Of</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <h1 className="hero-title">Aarav <span className="hero-heart">❤️</span> Diya</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="hero-date">28 December 2026</p>
          <p className="hero-location">Udaipur, Rajasthan</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <button className="btn-primary hero-btn" onClick={scrollToNext}>
            View Invitation
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div 
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
