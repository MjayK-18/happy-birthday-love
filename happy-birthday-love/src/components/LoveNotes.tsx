import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const notes = [
  {
    icon: '💌',
    message: 'You make every day brighter just by being you. I love you endlessly!'
  },
  {
    icon: '🌸',
    message: 'Your smile is my favorite thing in the world. Thank you for being my sunshine.'
  },
  {
    icon: '🧸',
    message: 'With you, I feel safe, loved, and truly happy. Happy Birthday, my love!'
  },
];

const cardColors = [
  'bg-pink-100',
  'bg-purple-100',
  'bg-yellow-100',
];

const LoveNotes: React.FC = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (idx: number) => {
    setFlipped(f => f.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="py-16 px-4 bg-white/80">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10 drop-shadow">Love Notes</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {notes.map((note, i) => (
          <motion.div
            key={i}
            className={`relative w-64 h-80 cursor-pointer perspective-1000`}
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: i * 0.18 }}
            onClick={() => handleFlip(i)}
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleFlip(i)}
            aria-pressed={flipped[i]}
          >
            <div className="relative w-full h-full" style={{ perspective: 1000 }}>
              <motion.div
                className={`absolute w-full h-full rounded-3xl shadow-xl ${cardColors[i]} flex items-center justify-center text-6xl font-bold select-none transition-transform duration-500`}
                style={{
                  backfaceVisibility: 'hidden',
                  transform: flipped[i] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  boxShadow: '0 8px 32px 0 rgba(190,24,93,0.10)',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                {note.icon}
              </motion.div>
              <motion.div
                className={`absolute w-full h-full rounded-3xl shadow-xl ${cardColors[i]} flex items-center justify-center px-6 text-center text-lg font-medium text-pink-700 transition-transform duration-500`}
                style={{
                  backfaceVisibility: 'hidden',
                  transform: flipped[i] ? 'rotateY(0deg)' : 'rotateY(-180deg)',
                  boxShadow: '0 8px 32px 0 rgba(190,24,93,0.10)',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                {note.message}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default LoveNotes;