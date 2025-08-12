import React from 'react';
import { motion } from 'framer-motion';
import SkewedBackground from '../ui/SkewedBackground';
import GlassContainer from '../ui/GlassContainer';

import JORRIK from '../../assets/JORRIK_SMALL.jpg';
import MEINKE from '../../assets/MEINKE_SMALL.jpg';
import { content } from '@/content/content';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="relative">
      <SkewedBackground variant="cosmic-to-white" className="py-24">
        <div className="container mx-auto px-6 mb-[25svh] -mt-[25svh]">
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
                      {content.infoSection.ourStory.title}
                    </span>
                  </GlassContainer>
                </motion.div>
                <div className='mb-6 flex flex-col justify-center items-center gap-6'>
                    </div>
                  <h2 className="text-4xl leading-tight font-black text-white md:text-5xl">{content.infoSection.ourStory.subTitle}</h2>
              </div>

              <GlassContainer className="p-8" variant="default">
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  {content.infoSection.ourStory.paragraph1}
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  {content.infoSection.ourStory.paragraph2}
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  {content.infoSection.ourStory.paragraph3}
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
                        src={JORRIK}
                        alt="Jorrik"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-cosmic-blue">{content.infoSection.jorrik.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {content.infoSection.jorrik.content}
                    </p>
                  </div>
                </div>
              </GlassContainer>

              {/* Meinke */}
              <GlassContainer className="p-6" hover={true}>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="border-cosmic-blue/30 h-20 w-20 overflow-hidden rounded-full border-2 md:h-24 md:w-24">
                      <img
                        src={MEINKE}
                        alt="Meinke"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-cosmic-blue">{content.infoSection.meinke.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {content.infoSection.meinke.content}
                    </p>
                  </div>
                </div>
              </GlassContainer>

              {/* Partnership */}
              <GlassContainer className="p-6 text-center" variant="blue">
                <p className="mb-2 text-lg font-medium text-white">{content.infoSection.together.title}</p>
                <p className="text-sm text-gray-300">
                  {content.infoSection.together.content}
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
