import React from 'react';
import { motion } from 'framer-motion';

const sparkles = Array.from({ length: 20 });

const sparkleVariants = {
  float: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    opacity: [0.3, 1, 0.3],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const heartVariants = {
  float: {
    y: [0, -15, 0],
    x: [0, -8, 0],
    opacity: [0.4, 0.8, 0.4],
    scale: [0.9, 1.1, 0.9],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

const starVariants = {
  twinkle: {
    opacity: [0.2, 1, 0.2],
    scale: [0.7, 1.3, 0.7],
    rotate: [0, 180, 360],
    transition: {
      duration: 2.5,
      repeat: Infinity,
    },
  },
};

const FloatingSparkles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Sparkles */}
      {sparkles.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 2;
        const size = Math.random() * 8 + 4;
        
        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            variants={sparkleVariants}
            initial="float"
            animate="float"
            transition={{
              delay,
              duration: 3 + Math.random() * 2,
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff69b4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
        );
      })}

      {/* Small Hearts */}
      {Array.from({ length: 8 }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 3;
        const size = Math.random() * 6 + 3;
        
        return (
          <motion.div
            key={`heart-${i}`}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            variants={heartVariants}
            initial="float"
            animate="float"
            transition={{
              delay,
              duration: 4 + Math.random() * 2,
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 32 29.6"
              fill="#ff69b4"
            >
              <path d="M23.6,0c-2.6,0-5,1.3-6.6,3.3C15.4,1.3,13,0,10.4,0C4.7,0,0,4.7,0,10.4c0,11.1,16,19.2,16,19.2s16-8.1,16-19.2C32,4.7,27.3,0,23.6,0z" />
            </svg>
          </motion.div>
        );
      })}

      {/* Twinkling Stars */}
      {Array.from({ length: 12 }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 2;
        const size = Math.random() * 6 + 3;
        
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            variants={starVariants}
            initial="twinkle"
            animate="twinkle"
            transition={{
              delay,
              duration: 2.5 + Math.random() * 1.5,
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="#ffd700"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingSparkles;