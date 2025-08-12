import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Music, Youtube, Heart, ExternalLink } from 'lucide-react';
import GlassContainer from '../ui/GlassContainer';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://open.spotify.com/search/lost%20k3ys',
      color: 'hover:text-green-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/lostk3ys',
      color: 'hover:text-pink-400',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@lostk3ys',
      color: 'hover:text-red-400',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Subtle particle effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="bg-cosmic-blue absolute h-1 w-1 animate-pulse rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="mb-6 flex items-center">
                <img
                  src="https://placehold.co/50x50/FFD700/000000?text=L3"
                  alt="LOST K3YS Logo"
                  className="mr-4 h-12 w-12 rounded-lg"
                />
                <div>
                  <div className="text-2xl font-black tracking-wide text-white">LOST K3YS</div>
                  <div className="text-cosmic-blue text-sm">Hardstyle Duo</div>
                </div>
              </div>

              <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                Unlocking the frequencies that move your soul. Where AI meets human creativity to
                create the future of hardstyle music.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-glass-white/10 border-glass-white-border rounded-xl border p-3 text-gray-400 backdrop-blur-sm transition-all duration-300 ${link.color} hover:border-white/30`}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#info' },
                { label: 'Latest Releases', href: '#releases' },
                { label: 'Our Tech', href: '#tech' },
                { label: 'Book Us', href: '#booking' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="mb-1 block font-medium text-white">Booking:</span>
                booking@lostk3ys.com
              </p>
              <p className="text-gray-400">
                <span className="mb-1 block font-medium text-white">General:</span>
                hello@lostk3ys.com
              </p>
              <p className="text-gray-400">
                <span className="mb-1 block font-medium text-white">Based in:</span>
                Netherlands
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Copyright */}
            <div className="mb-4 text-sm text-gray-500 md:mb-0">
              <p>© {currentYear} LOST K3YS. All rights reserved.</p>
            </div>

            {/* Website Credit */}
            <div className="flex items-center text-sm text-gray-500">
              <span>Website crafted with</span>
              <Heart className="mx-1 h-4 w-4 text-red-500" />
              <span>by</span>
              <a
                href="#"
                className="text-cosmic-blue ml-1 font-medium transition-colors duration-300 hover:text-white"
              >
                Dodoyoyo
              </a>
            </div>
          </div>

          {/* Domains */}
          <div className="mt-4 flex justify-center space-x-4">
            <span className="bg-glass-white/5 rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-500">
              lostk3ys.com
            </span>
            <span className="bg-glass-white/5 rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-500">
              lostk3ys.nl
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
