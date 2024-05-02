import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company } = config;
  const { logo, name: companyName } = company;

  return (
    <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="h-9" />
        </div>
        <div className="text-blue-800 dark:text-white text-lg font-bold">
          Co-founders LinkedIns
        </div>
        <div className="flex items-center gap-x-8 mt-2">
          <a
            aria-label="linkedin"
            href="https://www.linkedin.com/in/zachery-macintyre/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            aria-label="linkedin"
            href="https://www.linkedin.com/in/reham-ghoneim/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
