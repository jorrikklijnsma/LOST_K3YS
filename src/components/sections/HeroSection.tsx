import React from 'react';
import { motion } from 'framer-motion';
import LOGO from '../../assets/LOGO_TRANS.png';
import SPACE_VIDEO from '../../assets/space_comp.mp4';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[150svh] overflow-hidden">
      {/* Space/Nebula Background */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{ 
            filter: 'brightness(0.7) contrast(1.1)',
          }}
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.playbackRate = 11;
          }}
        >
          <source src={SPACE_VIDEO} type="video/mp4" />
          {/* Fallback to image if video fails */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
            <div className="absolute inset-0 bg-[url(./space_comp.jpeg)] bg-cover bg-center opacity-80" />
          </div>
        </video>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

        {/* Skewed bottom section transition */}
        <div className="absolute top-full left-0 right-0 h-[50svh] bg-gradient-to-b from-cosmic-tertiary to-50% to-cosmic-primary transform -translate-y-[50svh] -skew-y-10 origin-bottom-right" />
      </div>

      {/* Hero Content */}
      <div className="relative font-mono z-10 container mx-auto px-8 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main Logo Typography */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mb-12 mt-20 grid place-items-center"
        >
          <div className="absolute h-[75%] w-[75%] bg-black/80 rounded-full blur-3xl" />
          <img
            src={LOGO}
            alt="Logo"
            className="relative max-w-[50svw] h-full w-full object-cover"
            />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button onClick={() => scrollToSection('booking')}
                 className="mb-20 px-8 py-4 border-2 border-white/40 rounded-lg text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-medium text-lg tracking-wide cursor-pointer">
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