import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MUSIC_SRC = '/music/romantic-piano-loop.mp3'; // User should replace this with their own file

const BackgroundMusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div 
      className="fixed top-20 right-4 z-50 flex items-center bg-white/90 rounded-full shadow-lg px-4 py-3 gap-3 backdrop-blur-md border border-romantic-200/50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.05, x: -5 }}
    >
      <motion.span 
        className="text-romantic-400 text-xl"
        animate={{ scale: playing ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.5, repeat: playing ? Infinity : 0 }}
      >
        💖
      </motion.span>
      <motion.button
        onClick={togglePlay}
        className="focus:outline-none text-romantic-700 hover:text-romantic-900 transition-colors text-lg font-poppins font-medium"
        aria-label={playing ? 'Pause music' : 'Play music'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {playing ? '⏸️' : '▶️'}
      </motion.button>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
    </motion.div>
  );
};

export default BackgroundMusicPlayer;