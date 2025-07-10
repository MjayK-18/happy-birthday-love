import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const hearts = Array.from({ length: 10 });

const typewriterText = 'Happy Birthday Love 💖';

function useTypewriter(text: string, speed = 80) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
};

const HeroSection: React.FC = () => {
  const typed = useTypewriter(typewriterText, 80);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-pink-400"
    >
      {/* Floating Hearts */}
      {hearts.map((_, i) => {
        const size = Math.random() * 32 + 24;
        const left = Math.random() * 90 + '%';
        const delay = Math.random() * 2;
        const duration = Math.random() * 4 + 6;
        return (
          <motion.div
            key={i}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: '-10vh', opacity: 0.7 }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left,
              bottom: '-10vh',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 32 29.6"
              fill="pink"
              className="drop-shadow-lg opacity-70"
            >
              <path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,11.1,16,19.2,16,19.2s16-8.1,16-19.2C32,4.7,27.3,0,23.6,0z" />
            </svg>
          </motion.div>
        );
      })}

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-700 text-center drop-shadow-lg mb-4">
          {typed}
          <span className="blinking-cursor">|</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-pink-900 font-medium text-center mb-8">
          Shine Even Brighter 🌟
        </h2>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop' }}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#be185d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <span className="text-pink-700 text-sm mt-1 font-semibold">Scroll Down</span>
      </motion.div>

      {/* Blinking cursor style */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: #be185d;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;