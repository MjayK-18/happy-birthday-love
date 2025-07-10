import React from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const ConfettiButton: React.FC = () => {
  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ['#ff0000', '#ff69b4', '#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb']
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <motion.button
      onClick={fireConfetti}
      className="fixed top-4 right-4 z-50 bg-gradient-to-r from-romantic-500 to-romantic-600 hover:from-romantic-600 hover:to-romantic-700 text-white font-poppins font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm border border-romantic-300/20"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      🎉 Celebrate!
    </motion.button>
  );
};

export default ConfettiButton;