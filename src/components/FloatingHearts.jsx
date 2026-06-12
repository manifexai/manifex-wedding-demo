import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate an array of hearts with random properties
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of screen width
      size: Math.random() * 15 + 10, // px size between 10 and 25
      duration: Math.random() * 10 + 10, // seconds between 10 and 20
      delay: Math.random() * 10, // delay between 0 and 10s
    }));
    
    setHearts(newHearts);
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0 }}
          animate={{
            y: '-10vh',
            x: [`${heart.x}vw`, `${heart.x + (Math.random() > 0.5 ? 5 : -5)}vw`, `${heart.x}vw`],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <FaHeart size={heart.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
