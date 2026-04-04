import React from 'react';

const Select = ({ label = '', options = [], error = '', icon = null, className = '', containerClassName = '', ...props }) => {
  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>}
      <div className="relative group">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors pointer-events-none">
            {icon}
          </div>
        )}
        <select
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all hover:bg-slate-50 hover:border-slate-300 appearance-none cursor-pointer ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
          {...props}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight">{error}</p>}
    </div>
  );
};

export default Select;
