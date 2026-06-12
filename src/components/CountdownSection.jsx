import React from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import './CountdownSection.css';

const CountdownSection = () => {
  // Target date: 28 December 2026
  const weddingDate = new Date('2026-12-28T09:00:00');

  // Custom renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="countdown-completed">The wait is over!</div>;
    } else {
      return (
        <div className="countdown-timer">
          <div className="time-box">
            <span className="time-value">{days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time-value">{seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="countdown-section">
      <div className="countdown-overlay"></div>
      <div className="countdown-content glass">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="countdown-title">Counting down to forever</h2>
          <Countdown date={weddingDate} renderer={renderer} />
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
