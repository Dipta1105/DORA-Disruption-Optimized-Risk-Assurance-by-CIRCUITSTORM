import React from 'react';
import Card from './Card';
import Badge from './Badge';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ label, value, change, type, icon, className = '', ...props }) => {
  return (
    <Card className={`group relative overflow-hidden h-full ${className}`} bodyClassName="flex flex-col justify-between" {...props}>
      <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4 opacity-5 group-hover:scale-125 transition-all">
         {icon}
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
           {icon && <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 shadow-sm text-slate-400 group-hover:text-primary-600 transition-all">{icon}</div>}
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] italic">{label}</p>
        </div>
        <div className="flex items-end justify-between">
           <h3 className="text-2xl font-black text-slate-800 tracking-tighter leading-none">{value}</h3>
           {change && (
             <div className="flex flex-col items-end">
                <div className={`flex items-center gap-1 text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest ${
                  type === 'increase' ? 'bg-green-50 text-green-700' : 
                  type === 'decrease' ? 'bg-red-50 text-red-700' : 'bg-slate-50 text-slate-500'
                }`}>
                  {type === 'increase' ? <ArrowUpRight size={10} /> : 
                   type === 'decrease' ? <ArrowDownRight size={10} /> : null}
                  {change}
                </div>
                <span className="text-[10px] font-bold text-slate-300 uppercase italic mt-1 leading-none tracking-widest">since last q</span>
             </div>
           )}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-50 italic text-[10px] font-bold text-slate-400 uppercase tracking-widest">
         View Details →
      </div>
    </Card>
  );
};

export default StatCard;
