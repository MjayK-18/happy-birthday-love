import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const balloonColors = [
  '#ff69b4', // hot pink
  '#ff1493', // deep pink
  '#ffb6c1', // light pink
  '#ffc0cb', // pink
  '#ff69b4', // hot pink
  '#ff1493', // deep pink
];

const FloatingBalloons: React.FC = () => {
  const balloonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!balloonsRef.current) return;

    const balloons = balloonsRef.current.children;
    const tl = gsap.timeline({ repeat: -1 });

    // Create balloons on left side
    for (let i = 0; i < 6; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'absolute w-8 h-10 rounded-full opacity-70';
      balloon.style.backgroundColor = balloonColors[i];
      balloon.style.left = `${Math.random() * 20 + 5}%`;
      balloon.style.bottom = '-10vh';
      balloon.style.zIndex = '1';
      balloon.style.pointerEvents = 'none';
      
      // Add balloon string
      const string = document.createElement('div');
      string.className = 'absolute w-px bg-pink-300';
      string.style.height = '20px';
      string.style.left = '50%';
      string.style.top = '100%';
      string.style.transform = 'translateX(-50%)';
      balloon.appendChild(string);
      
      balloonsRef.current.appendChild(balloon);

      // Animate balloon
      gsap.to(balloon, {
        y: '-110vh',
        x: `+=${(Math.random() - 0.5) * 100}`,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
        ease: 'none',
        repeat: -1,
        yoyo: false,
      });
    }

    // Create balloons on right side
    for (let i = 0; i < 6; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'absolute w-8 h-10 rounded-full opacity-70';
      balloon.style.backgroundColor = balloonColors[i];
      balloon.style.left = `${Math.random() * 20 + 75}%`;
      balloon.style.bottom = '-10vh';
      balloon.style.zIndex = '1';
      balloon.style.pointerEvents = 'none';
      
      // Add balloon string
      const string = document.createElement('div');
      string.className = 'absolute w-px bg-pink-300';
      string.style.height = '20px';
      string.style.left = '50%';
      string.style.top = '100%';
      string.style.transform = 'translateX(-50%)';
      balloon.appendChild(string);
      
      balloonsRef.current.appendChild(balloon);

      // Animate balloon
      gsap.to(balloon, {
        y: '-110vh',
        x: `+=${(Math.random() - 0.5) * 100}`,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5 + 2,
        ease: 'none',
        repeat: -1,
        yoyo: false,
      });
    }

    return () => {
      // Cleanup
      if (balloonsRef.current) {
        balloonsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={balloonsRef} 
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default FloatingBalloons;