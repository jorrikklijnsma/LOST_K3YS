import { Instagram, Music, Mail } from 'lucide-react';
import LOGO from '../assets/LOGO_SMALL.jpg';
import JORRIK from '../assets/JORRIK_SMALL.jpg';
import MEINKE from '../assets/MEINKE_SMALL.jpg';

const HomePage = () => {
  const socialLinks = [
    {
      icon: Music,
      label: 'Spotify',
      href: 'https://open.spotify.com/artist/48j11UjwUaOkG4OIu2lmuE',
      color: 'hover:text-green-400',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/lost.k3ys',
      color: 'hover:text-pink-400',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-1 w-1 animate-pulse rounded-full bg-yellow-400 opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow-900 opacity-70" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="flex items-center justify-end p-6">
          <div className="flex gap-4">
            <a
              href="https://www.lostk3ys.com"
              className="rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-xs text-yellow-400"
            >
              lostk3ys.com
            </a>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          {/* Artist & Logo section */}
          <div className="relative mb-12 flex flex-col flex-wrap items-center justify-center gap-8 sm:flex-row">
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-yellow-400/30 bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg md:h-32 md:w-32">
                <img src={JORRIK} alt="Jorrik" className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-medium text-yellow-400">Jorrik</span>
            </div>
            <div className="relative mb-8 flex h-32 w-48 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl shadow-yellow-400/20 md:h-48 md:w-96">
              {/* Embossed effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-black/30" />
              <img src={LOGO} alt="LOST K3YS Logo" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-yellow-400/30 bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg md:h-32 md:w-32">
                <img src={MEINKE} alt="Meinke" className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-medium text-yellow-400">Meinke</span>
            </div>
          </div>

          {/* Coming soon message */}
          <div className="mb-12">
            <h1 className="mb-12 text-4xl leading-tight font-black text-white md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                SOMETHING BIG IS
              </span>
              <br />
              <span className="text-white">LOADING...</span>
            </h1>
            <div className="flex flex-col gap-8">
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                The hardstyle revolution starts here. We're building something that will shake your
                soul and blow your mind. Lost K3ys is coming with beats that live in the space
                between reality and dreams. Get ready to lose yourself in our world.
              </p>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                Follow us for exclusive drops, behind-the-scenes content, and first access to
                everything we're creating.
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="mb-8 flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 ${link.color}`}
              >
                <link.icon size={24} className="transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Newsletter signup hint */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Mail size={16} />
            <strong>Stay connected. Stay ready. Stay lost.</strong>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>© 2025 LOST K3YS</span>
            <span className="h-1 w-1 rounded-full bg-gray-600"></span>
            <span>Hardstyle Duo</span>
            <span className="h-1 w-1 rounded-full bg-gray-600"></span>
            <span>Netherlands</span>
          </div>
        </footer>
      </div>

      {/* Pulsing glow effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-yellow-400/5 blur-3xl" />
    </div>
  );
};

export { HomePage };
