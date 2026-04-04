import React from 'react';

const Badge = ({ children, variant = 'primary', size = 'sm', className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary-50 text-primary-700 ring-1 ring-primary-100',
    success: 'bg-green-50 text-green-700 ring-1 ring-green-100',
    warning: 'bg-orange-50 text-orange-700 ring-1 ring-orange-100',
    danger: 'bg-red-50 text-red-700 ring-1 ring-red-100',
    info: 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100',
    neutral: 'bg-slate-50 text-slate-600 ring-1 ring-slate-100',
  };

  const sizes = {
    xs: 'px-1.5 py-0.5 text-[9px] font-black',
    sm: 'px-2 py-0.5 text-[10px] font-black',
    md: 'px-3 py-1 text-xs font-black',
  };

  return (
    <span
      className={`inline-flex items-center uppercase tracking-widest rounded-full leading-none transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
