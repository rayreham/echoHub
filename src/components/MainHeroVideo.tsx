import React, { useRef } from 'react';
import config from '../config/index.json';

const MainHeroVideo = () => {
  const { mainHero } = config;
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
      <video
        ref={videoRef}
        className="h-56 md:h-96 lg:w-full"
        autoPlay
        loop
        onClick={togglePlayPause}
      >
        <source src={mainHero.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MainHeroVideo;
