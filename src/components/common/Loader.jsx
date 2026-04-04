import React from 'react';

const Loader = ({ size = 'md', variant = 'primary', className = '', ...props }) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-6',
  };

  const variants = {
    primary: 'border-primary-600/10 border-t-primary-600',
    white: 'border-white/20 border-t-white',
    danger: 'border-red-500/10 border-t-red-500',
  };

  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
      <div className={`rounded-full animate-spin ${sizes[size]} ${variants[variant]}`}></div>
    </div>
  );
};

export default Loader;
