import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiEffectProps {
  triggerOnScroll?: boolean;
  triggerOnClick?: boolean;
  children?: React.ReactNode;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ 
  triggerOnScroll = true, 
  triggerOnClick = true,
  children 
}) => {
  const hasTriggered = useRef(false);

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

  useEffect(() => {
    if (!triggerOnScroll) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition >= documentHeight * 0.8 && !hasTriggered.current) {
        hasTriggered.current = true;
        fireConfetti();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerOnScroll]);

  const handleClick = () => {
    if (triggerOnClick) {
      fireConfetti();
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};

export default ConfettiEffect;