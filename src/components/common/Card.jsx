import React from 'react';

const Card = ({ children, title = '', subtitle = '', action = null, className = '', headerClassName = '', bodyClassName = '', footer = null, ...props }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md ${className}`} {...props}>
      {(title || subtitle || action) && (
        <div className={`px-6 py-4 border-b border-slate-50 flex items-center justify-between ${headerClassName}`}>
          <div>
            {title && <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-500 font-medium italic mt-0.5 lowercase">{subtitle}</p>}
          </div>
          {action && <div className="flex-shrink-0">{action}</div>}
        </div>
      )}
      <div className={`p-6 ${bodyClassName}`}>
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-50">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
