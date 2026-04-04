import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ChevronRight, 
  ShieldQuestion, 
  Pause, 
  ArrowUpCircle, 
  FileText, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  Layers,
  Zap,
  Globe
} from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import StatCard from '../../components/common/StatCard';
import Loader from '../../components/common/Loader';
import { policyService } from '../../services/policyService';

const PolicyPage = () => {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const data = await policyService.getCurrentPolicy();
        setPolicy(data);
      } catch (err) {
        console.error('Failed to resolve current policy node:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPolicy();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-[60vh]"><Loader size="lg" /></div>;
  if (!policy) return <div className="text-center p-12 italic opacity-50 uppercase font-black">Node disconnected: No current policy identified.</div>;

  return (
    <div className="space-y-10 animate-fade-in max-w-7xl mx-auto pb-20">
      <PageHeader 
        title="Active Policy Node" 
        subtitle="Manage your disruption protection constraints and payout limits."
        action={
           <div className="flex gap-2">
             <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 gap-2 border border-orange-100">
               <Pause size={16} /> Pause Strategy
             </Button>
             <Button variant="primary" className="gap-2 shadow-lg shadow-primary-100">
               <ArrowUpCircle size={16} /> Portfolio Upgrade
             </Button>
           </div>
        }
      />

      {/* Main Stats Grid - Covers Caps & Limits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Weekly Premium Cap" 
          value={policy.weeklyPremiumCap} 
          icon={<ShieldCheck size={20} />} 
          change="0% drift"
          type="neutral"
        />
        <StatCard 
          label="Coverage Index" 
          value={policy.coveragePercentage} 
          icon={<TrendingUp size={20} />} 
          change="Top Tier"
          type="increase"
        />
        <StatCard 
          label="Daily Payout Cap" 
          value={policy.dailyPayoutCap} 
          icon={<Zap size={20} />} 
          change="Max Level"
          type="increase"
        />
        <StatCard 
          label="Weekly System Limit" 
          value={policy.weeklyPayoutLimit} 
          icon={<Globe size={20} />} 
          change="Active"
          type="increase"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Summary & History */}
        <div className="lg:col-span-2 space-y-10">
           <Card 
            title="Policy Summary" 
            subtitle={`Node ID: ${policy.id}`} 
            action={<Badge variant="success" size="md">{policy.status}</Badge>}
            bodyClassName="p-0"
           >
              <div className="p-8 space-y-8">
                 <div className="flex items-start gap-6 border-b border-slate-50 pb-8 cursor-default group">
                    <div className="p-5 bg-primary-900 rounded-[2rem] shadow-2xl shadow-primary-100 transition-all group-hover:scale-105">
                       <ShieldCheck className="text-white" size={42} />
                    </div>
                    <div className="space-y-1">
                       <h3 className="text-3xl font-black text-slate-800 tracking-tighter uppercase italic opacity-90">{policy.name}</h3>
                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest italic opacity-60">Protection active since {policy.startDate}</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic mb-6">Operational Exclusions</h4>
                       {policy.exclusions.map((exclusion, idx) => (
                         <div key={idx} className="flex gap-3 items-center group opacity-80 hover:opacity-100 transition-all">
                            <AlertTriangle size={14} className="text-orange-500 flex-shrink-0" />
                            <p className="text-xs font-bold text-slate-600 lowercase italic first-letter:uppercase">{exclusion}</p>
                         </div>
                       ))}
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 border-dashed text-center flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-slate-100/50 transition-all">
                       <ShieldQuestion size={32} className="text-slate-300 group-hover:text-primary-500 group-hover:scale-110 transition-all" />
                       <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic px-4">Identify a potential exclusion gap in your operational zone?</h5>
                       <span className="text-[10px] text-primary-600 font-black uppercase underline tracking-tighter">Consult Auditor</span>
                    </div>
                 </div>
              </div>
           </Card>

           <Card title="Recent Payout Node Settlements" subtitle="Historical disruption coverage logs" bodyClassName="!p-0">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Payout ID</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Settlement Date</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Amount</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Node State</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {policy.payoutHistory.map((history) => (
                      <tr key={history.id} className="hover:bg-slate-50/50 transition-all duration-300">
                         <td className="px-8 py-5 text-sm font-black text-slate-800 tracking-tighter uppercase italic">{history.id}</td>
                         <td className="px-8 py-5 text-xs font-bold text-slate-500 italic opacity-80">{history.date}</td>
                         <td className="px-8 py-5 text-sm font-black text-slate-900 tracking-tighter">{history.amount}</td>
                         <td className="px-8 py-5 text-right"><Badge variant="success" size="xs">{history.status}</Badge></td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </Card>
        </div>

        {/* Right: Actions & Tools */}
        <div className="space-y-10">
           <Card title="System Actions" subtitle="Node state management" bodyClassName="p-6">
              <div className="space-y-4">
                 <button className="w-full h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl flex items-center justify-between px-6 transition-all shadow-xl shadow-primary-50 group">
                    <div className="flex items-center gap-3">
                       <ArrowUpCircle size={20} className="group-hover:scale-110 transition-transform" />
                       <span className="text-[11px] font-black uppercase tracking-widest italic">Upgrade Strategy</span>
                    </div>
                    <ChevronRight size={14} />
                 </button>
                 <button className="w-full h-14 bg-white border-2 border-slate-100 hover:border-slate-200 text-slate-600 rounded-2xl flex items-center justify-between px-6 transition-all group">
                    <div className="flex items-center gap-3">
                       <Pause size={20} className="group-hover:rotate-12 transition-transform" />
                       <span className="text-[11px] font-black uppercase tracking-widest italic">Pause Policy Node</span>
                    </div>
                    <ChevronRight size={14} />
                 </button>
                 <button className="w-full h-14 bg-white border-2 border-slate-100 hover:border-slate-200 text-slate-600 rounded-2xl flex items-center justify-between px-6 transition-all group">
                    <div className="flex items-center gap-3">
                       <FileText size={20} className="group-hover:scale-110 transition-all" />
                       <span className="text-[11px] font-black uppercase tracking-widest italic">View Legal Terms</span>
                    </div>
                    <ChevronRight size={14} />
                 </button>
              </div>
           </Card>

           <div className="card bg-slate-900 p-10 flex flex-col items-center justify-center text-center gap-6 border-none shadow-2xl relative overflow-hidden group hover:bg-black transition-all">
              <div className="absolute top-0 left-0 p-8 opacity-[0.03] select-none pointer-events-none transform -translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-all duration-1000">
                 <Layers size={180} className="text-primary-500" />
              </div>
              <div className="p-5 bg-slate-800 rounded-[2.5rem] shadow-2xl shadow-slate-900">
                 <Clock className="text-primary-500" size={32} />
              </div>
              <div className="space-y-2">
                 <h4 className="text-sm font-black text-white uppercase italic tracking-widest">Next Settlement Cycle</h4>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.25em] leading-none">April 12, 2026 Node Sync</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
