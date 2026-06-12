import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const eventsList = [
  {
    id: 1,
    title: 'Engagement Ceremony',
    date: '26 December 2026',
    time: '18:00 PM Onwards',
    venue: 'The Leela Palace, Udaipur',
    description: 'Join us for an evening of rings, romance, and dancing as we officially get engaged.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Mehendi & Sangeet',
    date: '27 December 2026',
    time: '14:00 PM Onwards',
    venue: 'Taj Lake Palace, Udaipur',
    description: 'A vibrant afternoon of henna, music, and colorful celebrations by the lake.',
    image: 'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Wedding Ceremony',
    date: '28 December 2026',
    time: '09:00 AM - 14:00 PM',
    venue: 'Oberoi Udaivilas, Udaipur',
    description: 'The sacred ceremony where we take our vows and begin our journey together.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Grand Reception',
    date: '28 December 2026',
    time: '19:30 PM Onwards',
    venue: 'City Palace, Udaipur',
    description: 'A luxurious evening of fine dining, speeches, and celebration to conclude our wedding festivities.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800'
  }
];

const Events = () => {
  return (
    <section className="section events-section" id="events">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="section-title">Wedding Events</h2>
        <p className="section-subtitle">Celebrate with us</p>
      </motion.div>

      <div className="events-grid">
        {eventsList.map((event, index) => (
          <motion.div 
            key={event.id}
            className="event-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-date-badge">
                <span className="badge-day">{event.date.split(' ')[0]}</span>
                <span className="badge-month">{event.date.split(' ')[1]}</span>
              </div>
            </div>
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-time"><span>TIME:</span> {event.time}</p>
              <p className="event-venue"><span>VENUE:</span> {event.venue}</p>
              <p className="event-desc">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
