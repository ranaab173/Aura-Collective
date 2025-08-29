
import React from 'react';
import { motion } from 'framer-motion';
import { ImageAssets } from '../constants/ImageAssets';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        src={ImageAssets.heroVideo}
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium"
        >
          Elevating Digital Presence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200"
        >
          We craft bespoke digital experiences for luxury brands that demand distinction.
        </motion.p>
      </div>
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5, delay: 1.2 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
          <a href="#services" aria-label="Scroll down">
            <svg className="w-6 h-6 text-white animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
      </motion.div>
    </section>
  );
};

export default Hero;
