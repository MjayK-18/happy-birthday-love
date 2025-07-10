import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaHeart } from 'react-icons/fa';

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
    <div className="fixed top-20 right-4 z-50 flex items-center bg-white/80 rounded-full shadow-lg px-4 py-2 gap-2 backdrop-blur-md border border-pink-200">
      <span className="text-pink-400 text-xl animate-pulse"><FaHeart /></span>
      <button
        onClick={togglePlay}
        className="focus:outline-none text-pink-700 hover:text-pink-900 transition-colors text-lg"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
    </div>
  );
};

export default BackgroundMusicPlayer;