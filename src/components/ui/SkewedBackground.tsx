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
        return 'bg-gradient-to-b from-cosmic-primary via-cosmic-secondary to-black';
      case 'white-to-cosmic':
        return 'bg-gradient-to-b from-gray-100 to-cosmic-primary';
      default:
        return 'bg-cosmic-gradient';
    }
  };

  return (
    <div className={`${getBackgroundClasses()} relative ${className}`}>
      {/* Skewed overlay for transition sections */}
      {variant === 'white-to-cosmic' && (
        <div className="bg-cosmic-gradient absolute inset-0 origin-bottom-left -translate-y-1/2 skew-y-3 transform" />
      )}

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SkewedBackground;
