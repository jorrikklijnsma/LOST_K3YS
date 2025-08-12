import React from 'react';
import { motion } from 'framer-motion';
import SPACE from '../../assets/space.jpeg';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Space/Nebula Background */}
      <div className="absolute inset-0">
        {/* Placeholder for video/image background */}
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
          {/* Placeholder nebula background - replace with actual image/video */}
          <div className={`JOE JOE absolute inset-0 bg-[url(${SPACE})] bg-cover bg-center opacity-80`} />
        </div>

        {/* Scattered stars effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Larger glowing stars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Skewed bottom section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent transform skew-y-1 origin-bottom-right" />
      </div>

      {/* Hero Content */}
      <div className="relative font-mono z-10 container mx-auto px-8 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main Logo Typography */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none">
            {/* LOST - filled */}
            <div className="text-white mb-4">
              LOST
            </div>
            {/* K3YS - outlined */}
            <div 
              className="text-transparent font-black"
              style={{
                WebkitTextStroke: '3px white'
              }}
            >
              K3YS
            </div>
          </h1>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button onClick={() => scrollToSection('booking')}
                 className="px-8 py-4 border-2 border-white/40 rounded-lg text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-medium text-lg tracking-wide cursor-pointer">
            BOOK US
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;