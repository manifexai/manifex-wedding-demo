import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css';

const images = [
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 1" },
  { src: "https://images.unsplash.com/photo-1542037104-e3c751240c4a?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 2" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 3" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 4" },
  { src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 5" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 6" },
  { src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 7" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 8" },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="section gallery-section" id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-subtitle">Moments we cherish</p>
      </motion.div>

      <div className="masonry-grid">
        {images.map((image, i) => (
          <motion.div
            key={i}
            className="masonry-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
            onClick={() => setIndex(i)}
          >
            <div className="image-overlay">
              <span>View</span>
            </div>
            <img src={image.src} alt={image.alt} />
          </motion.div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map(img => ({ src: img.src }))}
      />
    </section>
  );
};

export default Gallery;
