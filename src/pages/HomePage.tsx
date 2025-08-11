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
      color: 'hover:text-green-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/lost.k3ys',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow-900 opacity-70" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-end items-center">
          <div className="flex gap-4">
            <a href="https://www.lostk3ys.com" className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30">
              lostk3ys.com
            </a>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Artist & Logo section */}
          <div className="flex gap-8 mb-12 items-center justify-center flex-wrap relative flex-col sm:flex-row">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg border-2 border-yellow-400/30 flex items-center justify-center mb-3 overflow-hidden">
                <img src={JORRIK} alt="Jorrik" className="w-full h-full object-cover" />
              </div>
              <span className="text-yellow-400 text-sm font-medium">Jorrik</span>
            </div>
            <div className="w-48 h-32 md:w-96 md:h-48 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl shadow-2xl shadow-yellow-400/20 flex items-center justify-center mb-8 relative overflow-hidden">
              {/* Embossed effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30 rounded-2xl" />
              <img src={LOGO} alt="LOST K3YS Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg border-2 border-yellow-400/30 flex items-center justify-center mb-3 overflow-hidden">
                <img src={MEINKE} alt="Meinke" className="w-full h-full object-cover" />
              </div>
              <span className="text-yellow-400 text-sm font-medium">Meinke</span>
            </div>
          </div>

          {/* Coming soon message */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                SOMETHING BIG IS
              </span>
              <br />
              <span className="text-white">
                 LOADING...
              </span>
            </h1>
            <div className='flex flex-col gap-8'>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The hardstyle revolution starts here. We're building something that will shake your soul and blow your mind.
              Lost K3ys is coming with beats that live in the space between reality and dreams. Get ready to lose yourself in our world.
            </p>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Follow us for exclusive drops, behind-the-scenes content, and first access to everything we're creating.
            </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 ${link.color}`}
              >
                <link.icon size={24} className="transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Newsletter signup hint */}
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Mail size={16} />
            <strong>Stay connected. Stay ready. Stay lost.</strong>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <div className="flex justify-center items-center gap-4 text-gray-400 text-sm">
            <span>© 2025 LOST K3YS</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>Hardstyle Duo</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>Netherlands</span>
          </div>
        </footer>
      </div>

      {/* Pulsing glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
    </div>
  );
};

export { HomePage };