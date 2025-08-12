import React from 'react';

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'minimal';
  hover?: boolean;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'blue':
        return 'bg-glass-blue border-glass-blue-border shadow-cosmic-blue-glow/20';
      case 'minimal':
        return 'bg-glass-white/5 border-glass-white-border/10';
      default:
        return 'bg-glass-white border-glass-white-border';
    }
  };

  const hoverClasses = hover
    ? 'hover:bg-glass-white/20 hover:border-glass-white-border/30 hover:shadow-lg hover:shadow-cosmic-blue-glow/30 hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div
      className={`border-opacity-20 rounded-2xl border backdrop-blur-md backdrop-saturate-150 ${getVariantClasses()} ${hoverClasses} ${className} `}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
