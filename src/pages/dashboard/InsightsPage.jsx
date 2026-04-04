import React from 'react';
import { BarChart3, TrendingUp, Zap, Globe, PieChart, Activity } from 'lucide-react';

const Insights = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Disruption Insights</h1>
          <p className="text-slate-500 text-sm mt-1">Advanced analytics for predictive insurance assessment.</p>
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm">
             <TrendingUp size={16} /> Predict Risks
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card lg:col-span-2">
           <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
              <Activity className="text-primary-600" size={16} /> Regional Exposure Breakdown
           </h3>
           <div className="h-64 flex items-end justify-between px-4 pb-2">
             {[
               { region: 'NA', value: '72%' },
               { region: 'EU', value: '45%' },
               { region: 'ASIA', value: '88%' },
               { region: 'LATAM', value: '32%' },
               { region: 'ME', value: '55%' },
             ].map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 group">
                   <div className="relative w-12 bg-slate-100 rounded-t-lg overflow-hidden h-48">
                      <div className="absolute bottom-0 w-full bg-primary-500 rounded-t-lg transition-all duration-700 group-hover:bg-primary-600" style={{ height: bar.value }}></div>
                   </div>
                   <span className="text-xs font-bold text-slate-500 italic">{bar.region}</span>
                </div>
             ))}
           </div>
        </div>

        <div className="card">
           <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
              <Zap className="text-orange-500" size={16} /> Threat Distribution
           </h3>
           <div className="space-y-6">
              {[
                { label: 'Cyber Incidents', value: '42%', color: 'bg-blue-500' },
                { label: 'Natural Disasters', value: '28%', color: 'bg-orange-500' },
                { label: 'Political Instability', value: '18%', color: 'bg-red-500' },
                { label: 'Others', value: '12%', color: 'bg-slate-400' },
              ].map((item, idx) => (
                 <div key={idx}>
                    <div className="flex justify-between items-center mb-1.5 text-xs font-bold">
                       <span className="text-slate-600 uppercase tracking-tight">{item.label}</span>
                       <span className="text-slate-900">{item.value}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-50 rounded-full">
                       <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value }}></div>
                    </div>
                 </div>
              ))}
           </div>
           <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-[11px] text-slate-400 text-center">
             * Predictive models based on Global Disruption Index (GDI) v4.2.
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="card border-t-4 border-indigo-500">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
               <Globe className="text-indigo-600" size={20} /> Supply Chain Reliability
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed italic mb-6">
               Analyzing real-time logistics data from over 14,000 nodes worldwide to predict interruption probability.
            </p>
            <div className="flex gap-4">
               <div className="flex-1 p-4 bg-indigo-50 rounded-lg text-center">
                  <p className="text-2xl font-black text-indigo-700">8.4<span className="text-xs font-medium">/10</span></p>
                  <p className="text-[10px] uppercase font-bold text-indigo-500 tracking-widest mt-1">Health Index</p>
               </div>
               <div className="flex-1 p-4 bg-slate-50 rounded-lg text-center">
                  <p className="text-2xl font-black text-slate-800">-12%</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Interruption</p>
               </div>
            </div>
         </div>
         <div className="card">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
               <PieChart className="text-primary-600" size={20} /> Resilience Spend Optimization
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed italic mb-6 font-medium">
               Current strategy allocates 62% of the budget to reactive measures. Recommendation suggests a move to 75% proactive mitigation.
            </p>
            <button className="w-full py-2.5 bg-primary-600 text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-all shadow-md shadow-primary-200">
               Optimize Allocation Strategy
            </button>
         </div>
      </div>
    </div>
  );
};

export default Insights;
