import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '@/content/content';

export const navItems = [
    { id: 'info', label: content.ui.menu.infoPage },
    { id: 'releases', label: content.ui.menu.releasesPage },
    { id: 'tech', label: content.ui.menu.techPage },
    { id: 'booking', label: content.ui.menu.bookingPage },
  ];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black via-black/65 to-transparent ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-white font-bold text-xl tracking-wide leading-tight">
              <div>LOST</div>
              <div>K3YS</div>
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-gray-300 transition-all duration-300 font-normal uppercase text-lg ${activeSection === item.id && 'scale-110 text-white border-b-1'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Contact Button */}
            <motion.button
              onClick={() => scrollToSection('booking')}
              className="px-6 py-3 border-2 border-white/30 rounded-lg text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-medium uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.ui.menu.contact}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;