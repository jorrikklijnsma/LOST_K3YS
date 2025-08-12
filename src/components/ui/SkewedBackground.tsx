import React from 'react';

interface SkewedBackgroundProps {
  variant: 'cosmic' | 'white' | 'cosmic-to-white' | 'white-to-cosmic';
  children: React.ReactNode;
  className?: string;
}

const SkewedBackground: React.FC<SkewedBackgroundProps> = ({
  variant,
  children,
  className = '',
}) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'cosmic':
        return 'bg-cosmic-gradient';
      case 'white':
        return 'bg-gray-100';
      case 'cosmic-to-white':
        return 'bg-gradient-to-b from-cosmic-primary via-cosmic-secondary to-gray-100';
      case 'white-to-cosmic':
        return 'bg-gradient-to-b from-gray-100 to-cosmic-primary';
      default:
        return 'bg-cosmic-gradient';
    }
  };

  const getSkewClasses = () => {
    if (variant.includes('to')) {
      return 'relative overflow-hidden';
    }
    return 'relative overflow-hidden';
  };

  return (
    <div className={`${getBackgroundClasses()} ${getSkewClasses()} ${className}`}>
      {/* Skewed overlay for transition sections */}
      {variant === 'cosmic-to-white' && (
        <div className="absolute inset-0 origin-top-right translate-y-1/2 -skew-y-3 transform bg-gray-100" />
      )}
      {variant === 'white-to-cosmic' && (
        <div className="bg-cosmic-gradient absolute inset-0 origin-bottom-left -translate-y-1/2 skew-y-3 transform" />
      )}

      {/* Particle effects for cosmic sections */}
      {(variant === 'cosmic' || variant.includes('cosmic')) && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="bg-cosmic-blue absolute h-1 w-1 animate-pulse rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Drifting larger particles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`drift-${i}`}
              className="bg-cosmic-blue animate-drift absolute h-2 w-2 rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SkewedBackground;
