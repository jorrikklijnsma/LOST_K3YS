import React from 'react';
import { motion } from 'framer-motion';
import SkewedBackground from '../ui/SkewedBackground';
import GlassContainer from '../ui/GlassContainer';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="relative">
      <SkewedBackground variant="cosmic-to-white" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Story Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <GlassContainer className="mb-6 inline-block p-2" variant="blue">
                    <span className="text-cosmic-blue text-sm font-medium tracking-wider uppercase">
                      Our Story
                    </span>
                  </GlassContainer>
                </motion.div>

                <h2 className="mb-6 text-4xl leading-tight font-black text-white md:text-5xl">
                  The Story Behind
                  <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    LOST K3YS
                  </span>
                </h2>
              </div>

              <GlassContainer className="p-8" variant="default">
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  Every great melody begins with a search for the perfect key. For us, those keys
                  weren't just musical notes - they were the missing pieces of our creative souls.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  We spent years searching through different sounds, different styles, different
                  energies. But it wasn't until we found hardstyle that we discovered what we'd been
                  looking for all along.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Now, those once-lost keys unlock frequencies that move crowds, create memories,
                  and build connections. Every track we create is about helping others find their
                  own lost keys.
                </p>
              </GlassContainer>
            </motion.div>

            {/* Artist Profiles */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Jorrik */}
              <GlassContainer className="p-6" hover={true}>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="border-cosmic-blue/30 h-20 w-20 overflow-hidden rounded-full border-2 md:h-24 md:w-24">
                      <img
                        src="https://placehold.co/200x200/333333/FFFFFF?text=Jorrik"
                        alt="Jorrik"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-cosmic-blue absolute -right-1 -bottom-1 h-6 w-6 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-white">Jorrik</h3>
                    <p className="text-cosmic-blue mb-3 font-medium">Producer & Sound Designer</p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      The technical mastermind behind our sound. Jorrik transforms raw emotion into
                      powerful hardstyle beats that hit your soul.
                    </p>
                  </div>
                </div>
              </GlassContainer>

              {/* Meine */}
              <GlassContainer className="p-6" hover={true}>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="border-cosmic-blue/30 h-20 w-20 overflow-hidden rounded-full border-2 md:h-24 md:w-24">
                      <img
                        src="https://placehold.co/200x200/333333/FFFFFF?text=Meine"
                        alt="Meine"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-cosmic-blue absolute -right-1 -bottom-1 h-6 w-6 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-white">Meine</h3>
                    <p className="text-cosmic-blue mb-3 font-medium">Creative Director & DJ</p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      The creative force that brings our vision to life. Meine crafts the
                      experiences that turn our music into unforgettable moments.
                    </p>
                  </div>
                </div>
              </GlassContainer>

              {/* Partnership */}
              <GlassContainer className="p-6 text-center" variant="blue">
                <p className="mb-2 text-lg font-medium text-white">Together Since 2024</p>
                <p className="text-sm text-gray-300">
                  Two creative minds, one unstoppable force in hardstyle music.
                </p>
              </GlassContainer>
            </motion.div>
          </div>
        </div>
      </SkewedBackground>
    </section>
  );
};

export default InfoSection;
