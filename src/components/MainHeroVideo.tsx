import React, { useRef, useState } from 'react';

import config from '../config/index.json';

const MainHeroVideo = () => {
  const { mainHero } = config;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center flex-col">
      <div className="text-primary text-3xl font-semibold mb-4">
        Watch Demo!
      </div>
      <video
        ref={videoRef}
        className="h-56 md:h-96 lg:w-full"
        loop
        onClick={togglePlayPause}
      >
        <source src={mainHero.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className={`px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary transition duration-300 ease-in-out hover:bg-white hover:text-primary hover:border-primary mt-4`}
        onClick={togglePlayPause}
      >
        {isPlaying ? <span>PAUSE</span> : <span>PLAY DEMO</span>}
      </button>
    </div>
  );
};

export default MainHeroVideo;
