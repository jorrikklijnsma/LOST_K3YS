import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SkewedBackground from '../ui/SkewedBackground';
import GlassContainer from '../ui/GlassContainer';
import { content } from '@/content/content';

import HITMAN from '../../assets/albums/HITMAN.jpeg'
import PLAYGROUND from '../../assets/albums/PLAYGROUND.jpeg'
import UPSIDE_DOWN from '../../assets/albums/UPSIDE_DOWN.jpeg'

interface Release {
  id: string;
  title: string;
  type: 'single' | 'ep' | 'album';
  coverImage: string;
  spotifyUrl: string;
  releaseDate: string;
}

const ReleasesSection: React.FC = () => {
  // Mock data for releases
  const releases: Release[] = [
    {
      id: '1',
      title: 'playground',
      type: 'single',
      coverImage: PLAYGROUND,
      spotifyUrl: 'https://open.spotify.com/track/1qAA2KKHzlMNczfZzColxE',
      releaseDate: '2025',
    },
    {
      id: '2',
      title: 'hitman',
      type: 'single',
      coverImage: HITMAN,
      spotifyUrl: 'https://open.spotify.com/track/1P8TdKZr0fSbRPPX95c8Yr',
      releaseDate: '2025',
    },
    {
      id: '3',
      title: 'Upside Down',
      type: 'single',
      coverImage: UPSIDE_DOWN,
      spotifyUrl: 'https://open.spotify.com/track/23GoauQuV4GjV2vfjcaHeI',
      releaseDate: '2025',
    },
  ];

  const FloatingAlbumCube: React.FC<{ release: Release; index: number }> = ({ release, index }) => (
    <motion.div
      initial={{ y: 50, opacity: 0, rotateX: -15 }}
      whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{
          rotateY: 5,
          rotateX: -5,
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glass cube container */}
        <GlassContainer className="relative transform-gpu p-8" variant="default">
          {/* 3D glass effect borders */}
          <div className="border-glass-white-border absolute inset-0 translate-x-1 translate-y-1 -translate-z-4 transform rounded-2xl border-2 opacity-30"></div>
          <div className="border-glass-white-border/20 absolute inset-0 translate-x-2 translate-y-2 -translate-z-8 transform rounded-2xl border opacity-20"></div>

          {/* Album cover */}
          <div className="relative z-10">
            <div className="mb-6 aspect-square overflow-hidden rounded-xl shadow-2xl">
              <img
                src={release.coverImage}
                alt={release.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="bg-cosmic-blue/2 absolute -inset-5 rounded-xl flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100  pointer-events-none" />
            </div>

            {/* Track info */}
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold text-white">{release.title}</h3>
              <div className="mb-4 flex items-center justify-center space-x-4">
                <span className="text-cosmic-blue font-medium capitalize">{release.type}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{release.releaseDate}</span>
              </div>

              {/* Spotify link */}
              <motion.a
                href={release.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-cosmic-blue inline-flex items-center space-x-2 transition-colors duration-300 hover:text-white cursor-pointer"
              >
                <span className="text-sm font-medium">Listen on Spotify</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Glow effect */}
          <div className="from-cosmic-blue/10 absolute inset-0 rounded-2xl bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        </GlassContainer>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="releases" className="relative">
      <SkewedBackground variant='cosmic' className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassContainer className="mb-6 inline-block p-2" variant="blue">
                <span className="text-cosmic-blue text-sm font-medium tracking-wider uppercase">
                  {content.musicSection.title}
                </span>
              </GlassContainer>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl leading-tight font-black text-gray-300 md:text-5xl"
              >
              Latest
              <span className="from-cosmic-blue block bg-gradient-to-r to-purple-600 bg-clip-text text-transparent">
                Releases
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600"
            >
              {content.musicSection.description}
            </motion.p>
          </div>

          {/* Releases Grid */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {releases.map((release, index) => (
              <FloatingAlbumCube key={release.id} release={release} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <GlassContainer className="inline-block" hover={true} variant="blue">
              <a href='https://open.spotify.com/artist/48j11UjwUaOkG4OIu2lmuE' target='_blank' className="block text-cosmic-blue px-8 py-4 text-lg font-medium tracking-wide transition-colors duration-300 hover:text-white">
                {content.musicSection.viewAllButton}
              </a>
            </GlassContainer>
          </motion.div>
        </div>
      </SkewedBackground>
    </section>
  );
};

export default ReleasesSection;
