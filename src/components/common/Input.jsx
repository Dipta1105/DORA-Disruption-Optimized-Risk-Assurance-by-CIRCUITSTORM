import React from 'react';

const Input = ({ label = '', error = '', icon = null, className = '', containerClassName = '', ...props }) => {
  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>}
      <div className="relative group">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors">
            {icon}
          </div>
        )}
        <input
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white transition-all hover:bg-slate-50 hover:border-slate-300 focus:bg-white focus:border-primary-500 ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight">{error}</p>}
    </div>
  );
};

export default Input;
