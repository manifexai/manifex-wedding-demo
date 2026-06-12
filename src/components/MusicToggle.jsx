import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';
import './MusicToggle.css';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We create an Audio object. We can use a placeholder romantic music URL or a local file if provided.
    // For now, using a placeholder audio URL.
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Need user interaction to play audio in modern browsers
      audioRef.current.play().catch(error => console.log('Audio play failed:', error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      className={`music-toggle ${isPlaying ? 'playing' : ''}`} 
      onClick={toggleMusic}
      aria-label="Toggle background music"
    >
      {isPlaying ? <FaPause /> : <FaMusic />}
    </button>
  );
};

export default MusicToggle;
