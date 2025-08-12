import React from 'react';
import { motion } from 'framer-motion';
import SkewedBackground from '../ui/SkewedBackground';
import GlassContainer from '../ui/GlassContainer';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative">
      <SkewedBackground variant="cosmic" className="min-h-screen">
        {/* Hero Background Video/Animation Area */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Placeholder for future video background */}
          <div className="from-cosmic-primary via-cosmic-secondary to-cosmic-tertiary h-full w-full bg-gradient-to-br opacity-80" />

          {/* Animated golden particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-yellow-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            {/* Main Logo/Title */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-8"
            >
              <GlassContainer className="mb-4 inline-block p-2" variant="blue">
                <span className="text-cosmic-blue text-sm font-medium tracking-wider uppercase">
                  Hardstyle Duo
                </span>
              </GlassContainer>

              <h1 className="mb-4 text-6xl leading-tight font-black text-white md:text-8xl lg:text-9xl">
                <span className="block">LOST</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  K3YS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl"
            >
              Unlocking the frequencies that move your soul. Experience hardstyle like never before.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <GlassContainer className="group inline-block cursor-pointer" hover={true}>
                <button className="group-hover:text-cosmic-blue px-8 py-4 text-lg font-medium tracking-wide text-white transition-colors duration-300">
                  Enter the Experience
                </button>
              </GlassContainer>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50"
              >
                <div className="mt-2 h-3 w-1 rounded-full bg-white/70" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SkewedBackground>
    </section>
  );
};

export default HeroSection;
