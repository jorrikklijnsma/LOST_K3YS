import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LOGO from '../../assets/LOGO_TRANS.png';
import SPACE_VIDEO from '../../assets/space_comp.mp4';
import { content } from '@/content/content';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (!video1 || !video2) return;

    let isVideo1Playing = true;

    const setupCrossfade = () => {
      const handleTimeUpdate = () => {
        const currentTime = video1.currentTime;
        const duration = video1.duration;

        // Start crossfade 1 second before video ends
        if (currentTime >= duration - 1) {
          const fadeProgress = (currentTime - (duration - 1)) / 1; // 1 second fade
          
          video1.style.opacity = String(1 - fadeProgress);
          video2.style.opacity = String(1);

          // Start video2 if not already started
          if (video2.paused) {
            video2.currentTime = 0;
            video2.play();
          }
        }
      };

      const handleVideo1Ended = () => {
        // Reset video1 and swap roles
        video1.currentTime = 0;
        video1.style.opacity = '0';
        video2.style.opacity = '1';
        isVideo1Playing = false;

        // Start video1 again for next cycle
        setTimeout(() => {
          video1.play();
        }, (video2.duration - 1) * 1000); // Start 1s before video2 ends
      };

      const handleVideo2TimeUpdate = () => {
        if (isVideo1Playing) return;

        const currentTime = video2.currentTime;
        const duration = video2.duration;

        // Start crossfade 1 second before video2 ends
        if (currentTime >= duration - 1) {
          const fadeProgress = (currentTime - (duration - 1)) / 1;
          
          video2.style.opacity = String(1 - fadeProgress);
          video1.style.opacity = String(1);

          // Start video1 if not already started
          if (video1.paused) {
            video1.currentTime = 0;
            video1.play();
          }
        }
      };

      const handleVideo2Ended = () => {
        // Reset video2 and swap roles back
        video2.currentTime = 0;
        video2.style.opacity = '0';
        video1.style.opacity = '1';
        isVideo1Playing = true;

        // Start video2 again for next cycle
        setTimeout(() => {
          video2.play();
        }, (video1.duration - 1) * 1000);
      };

      // Add event listeners
      video1.addEventListener('timeupdate', handleTimeUpdate);
      video1.addEventListener('ended', handleVideo1Ended);
      video2.addEventListener('timeupdate', handleVideo2TimeUpdate);
      video2.addEventListener('ended', handleVideo2Ended);

      // Cleanup function
      return () => {
        video1.removeEventListener('timeupdate', handleTimeUpdate);
        video1.removeEventListener('ended', handleVideo1Ended);
        video2.removeEventListener('timeupdate', handleVideo2TimeUpdate);
        video2.removeEventListener('ended', handleVideo2Ended);
      };
    };

    // Wait for both videos to load
    Promise.all([
      new Promise(resolve => video1.addEventListener('loadeddata', resolve)),
      new Promise(resolve => video2.addEventListener('loadeddata', resolve))
    ]).then(() => {
      setupCrossfade();
      // Start with video1
      video1.style.opacity = '1';
      video2.style.opacity = '0';
      video1.play();
    });

  }, []);

  return (
    <section id="hero" className="relative min-h-[150svh] overflow-hidden">
      {/* Space/Nebula Background */}
      <div className="absolute inset-0">
        {/* Video 1 */}
        <video
          ref={video1Ref}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ 
            filter: 'brightness(.5) contrast(1.1) saturate(.8)',
            opacity: 0
          }}
        >
          <source src={SPACE_VIDEO} type="video/mp4" />
        </video>

        {/* Video 2 */}
        <video
          ref={video2Ref}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ 
            filter: 'brightness(.5) contrast(1.1) saturate(.8)',
            opacity: 0
          }}
        >
          <source src={SPACE_VIDEO} type="video/mp4" />
          {/* Fallback to image if video fails */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
            <div className="absolute inset-0 bg-[url(./space_comp.jpeg)] bg-cover bg-center opacity-80" />
          </div>
          <source src="./space_comp.mp4" type="video/mp4" />
        </video>

        {/* Fallback background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 -z-10">
          <div className="absolute inset-0 bg-[url(./space_comp.jpeg)] bg-cover bg-center opacity-80" />
        </div>
        
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
                 className="mb-20 px-8 py-4 border-2 border-white/40 rounded-lg text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-medium text-lg tracking-wide cursor-pointer uppercase">
            {content.ui.menu.bookUs}
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