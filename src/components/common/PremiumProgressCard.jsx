import React from 'react';
import { Clock, ShieldCheck, ArrowUpRight, TrendingUp } from 'lucide-react';
import Card from './Card';

const PremiumProgressCard = ({ 
  weeklyCap = 60, 
  deducted = 57.60, 
  resetDay = 'Monday',
  currency = '₹',
  className = '' 
}) => {
  const remaining = Math.max(0, weeklyCap - deducted);
  const percentage = Math.min(100, (deducted / weeklyCap) * 100);
  
  return (
    <Card 
      className={`relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-primary-50 border-2 ${percentage > 90 ? 'border-orange-200' : 'border-slate-100'} ${className}`}
      bodyClassName="p-8 space-y-8"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform">
         <Clock size={200} className="text-primary-600" />
      </div>

      <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl flex-shrink-0 shadow-sm ${percentage > 90 ? 'bg-orange-50 text-orange-600' : 'bg-primary-50 text-primary-600'}`}>
               <ShieldCheck size={20} />
            </div>
            <div>
               <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest italic">Weekly Premium Node</h3>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">Disruption Optimized Cap Cycle</p>
            </div>
         </div>
         <div className="text-right">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Cap State</p>
            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${percentage > 90 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
               {percentage > 90 ? 'Alert: Cap Near' : 'Optimal'}
            </span>
         </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
         <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic leading-none">Weekly Cap</p>
            <h4 className="text-2xl font-black text-slate-900 tracking-tighter">{currency}{weeklyCap.toFixed(2)}</h4>
         </div>
         <div className="space-y-1 text-right">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic leading-none">Deducted (mtd)</p>
            <h4 className={`text-2xl font-black tracking-tighter ${percentage > 90 ? 'text-orange-600' : 'text-slate-900'}`}>
               {currency}{deducted.toFixed(2)}
            </h4>
         </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-3">
         <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Node Saturation — {percentage.toFixed(1)}%</span>
            <span className="text-[11px] font-black text-slate-800 tracking-tighter">Remaining: {currency}{remaining.toFixed(2)}</span>
         </div>
         <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
            <div 
              className={`h-full transition-all duration-1000 ease-out rounded-full ${percentage > 90 ? 'bg-orange-500' : 'bg-primary-600'}`} 
              style={{ width: `${percentage}%` }}
            ></div>
         </div>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
         <div className="flex-1 flex items-center gap-2">
            <Clock size={14} className="text-slate-300" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic mt-0.5">Resets every {resetDay} @ 00:00</span>
         </div>
         <button className="flex items-center gap-1.5 text-[10px] font-black text-primary-600 hover:text-primary-700 uppercase tracking-widest italic group-hover:translate-x-1 transition-all">
            Audit Ledger <ArrowUpRight size={14} />
         </button>
      </div>
    </Card>
  );
};

export default PremiumProgressCard;
