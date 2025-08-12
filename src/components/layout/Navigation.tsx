import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassContainer from '../ui/GlassContainer';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'info', label: 'About' },
    { id: 'releases', label: 'Releases' },
    { id: 'tech', label: 'Tech' },
    { id: 'booking', label: 'Book Us' },
  ];

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <GlassContainer className="px-8 py-4" variant="minimal">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex cursor-pointer items-center"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://placehold.co/40x40/FFD700/000000?text=L3"
                alt="LOST K3YS Logo"
                className="mr-3 h-10 w-10 rounded-lg"
              />
              <div className="text-xl font-bold tracking-wide text-white">LOST K3YS</div>
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-lg px-4 py-2 transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cosmic-blue font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="bg-cosmic-blue/20 border-cosmic-blue/30 absolute inset-0 rounded-lg border"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 text-white md:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex h-6 w-6 flex-col items-center justify-center">
                <span className="mb-1 h-0.5 w-4 bg-white"></span>
                <span className="mb-1 h-0.5 w-4 bg-white"></span>
                <span className="h-0.5 w-4 bg-white"></span>
              </div>
            </motion.button>
          </div>
        </GlassContainer>
      </div>
    </motion.nav>
  );
};

export default Navigation;
