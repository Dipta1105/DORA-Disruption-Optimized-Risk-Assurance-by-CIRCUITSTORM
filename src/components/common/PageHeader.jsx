import React from 'react';

const PageHeader = ({ title, subtitle, action = null, className = '', ...props }) => {
  return (
    <header className={`flex items-center justify-between gap-6 mb-8 mt-4 animate-fade-in ${className}`} {...props}>
      <div className="flex-1">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic select-none opacity-90 leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.3em] italic mt-2 opacity-60 leading-none">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="flex items-center gap-3 animate-slide-up">
          {action}
        </div>
      )}
    </header>
  );
};

export default PageHeader;
