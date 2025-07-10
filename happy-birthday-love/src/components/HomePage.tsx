import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import MemoriesGallery from './MemoriesGallery';
import LoveNotes from './LoveNotes';
import FloatingBalloons from './FloatingBalloons';
import ConfettiButton from './ConfettiButton';
import ConfettiEffect from './ConfettiEffect';
import BackgroundMusicPlayer from './BackgroundMusicPlayer';
import FloatingSparkles from './FloatingSparkles';

const HomePage: React.FC = () => {
  return (
    <ConfettiEffect triggerOnScroll={true} triggerOnClick={false}>
      {/* Background Effects */}
      <FloatingBalloons />
      <FloatingSparkles />
      
      {/* UI Controls */}
      <ConfettiButton />
      <BackgroundMusicPlayer />
      
      {/* Main Content Sections */}
      <div className="relative">
        <HeroSection />
        <MemoriesGallery />
        <LoveNotes />
      </div>
    </ConfettiEffect>
  );
};

export default HomePage;