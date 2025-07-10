import React from 'react';
import HeroSection from './components/HeroSection';
import MemoriesGallery from './components/MemoriesGallery';
import LoveNotes from './components/LoveNotes';
import FloatingBalloons from './components/FloatingBalloons';
import ConfettiButton from './components/ConfettiButton';
import ConfettiEffect from './components/ConfettiEffect';
import BackgroundMusicPlayer from './components/BackgroundMusicPlayer';
import FloatingSparkles from './components/FloatingSparkles';

function App() {
  return (
    <ConfettiEffect triggerOnScroll={true} triggerOnClick={false}>
      <FloatingBalloons />
      <FloatingSparkles />
      <ConfettiButton />
      <BackgroundMusicPlayer />
      <HeroSection />
      <MemoriesGallery />
      <LoveNotes />
    </ConfettiEffect>
  );
}

export default App;
