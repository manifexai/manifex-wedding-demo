import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaRing, FaPlane, FaHeart } from 'react-icons/fa';
import './Story.css';

const storyEvents = [
  {
    id: 1,
    title: 'First Met',
    date: 'June 2021',
    description: 'We bumped into each other at a quaint coffee shop in London. What started as a shared table during a rainy afternoon turned into a conversation that lasted for hours.',
    icon: <FaCoffee />,
  },
  {
    id: 2,
    title: 'First Trip Together',
    date: 'October 2022',
    description: 'Our first international trip to Paris. We got lost in the cobblestone streets, ate too many croissants, and realized we made the perfect travel partners.',
    icon: <FaPlane />,
  },
  {
    id: 3,
    title: 'The Proposal',
    date: 'December 2024',
    description: 'Under the northern lights in Iceland, Aarav got down on one knee. It was magical, freezing, and absolutely perfect. Diya said yes before he could even finish the question.',
    icon: <FaRing />,
  },
  {
    id: 4,
    title: 'Our Wedding Day',
    date: 'December 2026',
    description: 'The beginning of our forever. We can\'t wait to celebrate this special day with all our friends and family in the beautiful city of Udaipur.',
    icon: <FaHeart />,
  }
];

const Story = () => {
  return (
    <section className="section story-section" id="story">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">How it all began</p>
      </motion.div>

      <div className="timeline">
        {storyEvents.map((event, index) => (
          <motion.div 
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="timeline-content glass">
              <div className="timeline-icon">
                {event.icon}
              </div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-date">{event.date}</p>
              <p className="timeline-desc">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Story;
