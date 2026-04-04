import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-200',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    outline: 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-200',
    ghost: 'bg-transparent text-slate-500 hover:bg-slate-50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-bold leading-tight',
    md: 'px-4 py-2 text-sm font-semibold',
    lg: 'px-6 py-3 text-base font-black',
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
