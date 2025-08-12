export default {
  theme: {
    extend: {
      colors: {
        cosmic: {
          primary: '#1a1a2e',
          secondary: '#16213e',
          tertiary: '#0f1419',
          blue: '#00d4ff',
          'blue-glow': 'rgba(0, 212, 255, 0.5)',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.15)',
          'white-border': 'rgba(255, 255, 255, 0.2)',
          blue: 'rgba(0, 212, 255, 0.1)',
          'blue-border': 'rgba(0, 212, 255, 0.3)',
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)',
        'cosmic-radial': 'radial-gradient(circle at 50% 50%, #16213e 0%, #1a1a2e 50%, #0f1419 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px))' },
        },
      },
    },
  },
  plugins: [],
}