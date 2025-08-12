import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Layout components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Section components
import HeroSection from './components/sections/HeroSection';
import InfoSection from './components/sections/InfoSection';
import ReleasesSection from './components/sections/ReleasesSection';
import TechSection from './components/sections/TechSection';
import BookingSection from './components/sections/BookingSection';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Add smooth scroll behavior to all anchor links
    document.addEventListener('click', handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Info/About Section */}
        <InfoSection />

        {/* Releases Section */}
        <ReleasesSection />

        {/* Tech Section */}
        <TechSection />

        {/* Booking Section */}
        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global background effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Cosmic gradient overlay */}
        <div className="bg-gradient-radial absolute inset-0 opacity-30" />

        {/* Floating orbs */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-cosmic-blue/5 absolute h-32 w-32 rounded-full blur-xl"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 40, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
