import React, { useState, useEffect } from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if localStorage is available in the browser environment
      const storedCount = localStorage.getItem('clickCount');
      setClickCount(storedCount ? parseInt(storedCount, 10) : 0);
    }
  }, []);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    // Update localStorage when the button is clicked
    if (typeof window !== 'undefined') {
      localStorage.setItem('clickCount', (clickCount + 1).toString());
    }
  };

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-8xl md:text-6xl">
          <span className="font-light">echo</span>
          <span className="font-bold">Hub</span>
        </h1>
        <h2 className="block text-primary mt-0 text-4xl font-light">
          {mainHero.subtitle}
        </h2>
        <p className="mt-3 text-base black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-0 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
              onClick={handleClick}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
              onClick={handleClick}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
        <p className="mt-2 text-lg font-bold text-black">
          {' '}
          {clickCount === 0
            ? 'Take survey to join the waitlist!'
            : `${clickCount} joined the waitlist!`}{' '}
        </p>
      </div>
    </main>
  );
};

export default MainHero;
