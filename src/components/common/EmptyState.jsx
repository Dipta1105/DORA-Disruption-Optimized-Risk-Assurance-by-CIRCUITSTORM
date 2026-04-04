import React from 'react';
import Card from './Card';
import Button from './Button';

const EmptyState = ({ title, description, icon, actionLabel = '', onAction = null, className = '', ...props }) => {
  return (
    <Card className={`flex flex-col items-center justify-center p-12 text-center bg-slate-50 border-dashed border-2 shadow-none ${className}`} {...props}>
      <div className="p-6 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-50 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">{title}</h3>
        <p className="text-xs text-slate-400 font-medium lowercase italic max-w-sm mx-auto mt-2 leading-relaxed opacity-80">
          {description}
        </p>
      </div>
      {actionLabel && (
        <Button onClick={onAction} className="mt-8 shadow-primary-200" size="sm">
          {actionLabel}
        </Button>
      )}
    </Card>
  );
};

export default EmptyState;
