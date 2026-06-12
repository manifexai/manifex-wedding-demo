import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import MusicToggle from './components/MusicToggle';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';
import Story from './components/Story';
import Events from './components/Events';
import CountdownSection from './components/CountdownSection';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <MusicToggle />
      <FloatingHearts />
      <Hero />
      <Story />
      <Events />
      <CountdownSection />
      <Venue />
      <Gallery />
      <RSVP />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
