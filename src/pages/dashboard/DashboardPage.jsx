import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Wallet, 
  ChevronRight, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  Activity, 
  CheckCircle,
  Bell,
  ArrowUpRight,
  Zap,
  DollarSign
} from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import StatCard from '../../components/common/StatCard';
import PremiumProgressCard from '../../components/common/PremiumProgressCard';
import Badge from '../../components/common/Badge';
import Loader from '../../components/common/Loader';
import { dashboardService } from '../../services/dashboardService';

const DashboardPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const dashboardData = await dashboardService.getWorkerDashboard();
        setData(dashboardData);
      } catch (err) {
        console.error('Failed to sync worker dashboard node:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-[60vh]"><Loader size="lg" /></div>;
  if (!data) return <div className="text-center p-12 italic opacity-50 uppercase font-black">Node disconnected: No dashboard data identified.</div>;

  return (
    <div className="space-y-10 animate-fade-in max-w-7xl mx-auto pb-20">
      <PageHeader 
        title="Insurance Node Overview" 
        subtitle="Real-time disruption analytics and earnings protection for India Q-Commerce."
        action={
           <div className="flex gap-3">
             <div className="flex flex-col items-end mr-4">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Status Pin</span>
                <span className="text-[10px] font-black text-primary-600 uppercase tracking-tighter italic">Zone: North-West MH</span>
             </div>
             <Badge variant="success" size="md" className="p-3 shadow-sm px-6">System: Active</Badge>
           </div>
        }
      />

      {/* Primary Metrics Grid (6 Core Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          label="Active Protection" 
          value={data.activePlan} 
          icon={<ShieldCheck size={20} />} 
          change="Executive Node"
          type="neutral"
        />
        <StatCard 
          label="Wallet Balance" 
          value={`$${data.walletBalance.toFixed(2)}`} 
          icon={<Wallet size={20} />} 
          change={`Next: ${data.nextWithdrawalDate}`}
          type="increase"
        />
        <StatCard 
          label="Coverage Status" 
          value={data.coverageStatus} 
          icon={<Zap size={20} />} 
          change="95% Efficiency"
          type="increase"
        />
        <StatCard 
          label="Recent Payout" 
          value={`$${data.recentPayout.toFixed(2)}`} 
          icon={<TrendingUp size={20} />} 
          change="Resolved April 01"
          type="neutral"
        />
        <div className="lg:col-span-2">
           <PremiumProgressCard 
             weeklyCap={data.weeklyCap} 
             deducted={data.weeklyPremiumUsed} 
             resetDay={data.resetDay}
             currency="$"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Alerts & Claims */}
        <div className="lg:col-span-2 space-y-10">
           {/* Section 1: Active Alerts */}
           <section className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                 <Bell className="text-primary-600" size={18} />
                 <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest italic">Active Disruption Signals</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                 {data.alerts.map((alert) => (
                   <div key={alert.id} className={`p-5 rounded-3xl border-2 flex gap-4 items-start transition-all hover:scale-[1.01] ${alert.type === 'warning' ? 'bg-orange-50 border-orange-100' : 'bg-primary-50 border-primary-100'}`}>
                      <div className={`p-3 rounded-2xl ${alert.type === 'warning' ? 'bg-orange-100 text-orange-600' : 'bg-primary-100 text-primary-600'}`}>
                         {alert.type === 'warning' ? <AlertTriangle size={20} /> : <Activity size={20} />}
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between items-start mb-1">
                            <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest italic">{alert.title}</h4>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">{alert.time}</span>
                         </div>
                         <p className="text-[11px] text-slate-500 font-bold leading-relaxed lowercase">{alert.message}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </section>

           {/* Section 2: Recent Claims */}
           <Card title="Recent Claims Node" subtitle="Historical settlements based on signal verification" bodyClassName="!p-0">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Claim ID</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Logic Type</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Amount</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">State</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {data.recentClaims.map((claim) => (
                      <tr key={claim.id} className="hover:bg-slate-50/50 transition-all group">
                         <td className="px-8 py-5">
                            <span className="text-sm font-black text-slate-800 tracking-tighter italic uppercase underline group-hover:text-primary-600 cursor-pointer">{claim.id}</span>
                            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none mt-1">{claim.date}</p>
                         </td>
                         <td className="px-8 py-5 text-xs font-bold text-slate-500 italic lowercase first-letter:uppercase">{claim.type}</td>
                         <td className="px-8 py-5 text-sm font-black text-slate-900 tracking-tighter">{claim.amount}</td>
                         <td className="px-8 py-5 text-right"><Badge variant="success" size="xs">{claim.status}</Badge></td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </Card>
        </div>

        {/* Right Column: Earnings Summary & Withdrawal */}
        <div className="space-y-10">
           {/* Section 3: Earnings Protected */}
           <Card className="bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group hover:bg-black transition-all">
              <div className="absolute top-0 left-0 p-8 opacity-[0.03] select-none pointer-events-none transform -translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-all duration-1000">
                 <DollarSign size={220} className="text-primary-500" />
              </div>
              <div className="relative z-10 space-y-6">
                 <div>
                    <h3 className="text-xs font-black text-primary-400 uppercase tracking-widest italic mb-2">Total Earnings Protected</h3>
                    <div className="flex items-baseline gap-2">
                       <span className="text-4xl font-black tracking-tighter">${data.earningsProtected.toLocaleString()}</span>
                       <span className="text-xs text-primary-300 font-bold uppercase italic tracking-widest opacity-60">Lifespan mtd</span>
                    </div>
                 </div>
                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full w-4/5 animate-pulse"></div>
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold italic leading-relaxed lowercase">This represents actual income loss prevented through automatic Insurance (Dora) payout logic during confirmed signal outages.</p>
              </div>
           </Card>

           {/* Section 4: Next Withdrawal Date */}
           <Card title="Withdrawal Node" subtitle="Escrow fund release cycle" className="relative group overflow-hidden">
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="p-4 bg-green-50 text-green-600 rounded-2xl shadow-inner-sm">
                       <Clock size={32} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic leading-none mb-1">Target Date</p>
                       <h4 className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">{data.nextWithdrawalDate}</h4>
                    </div>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] font-bold text-slate-500 italic lowercase leading-relaxed text-center select-none">
                    *Withdrawal is calculated after the weekly node reset on {data.resetDay} @ 00:00 UTC.
                 </div>
                 <button className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] italic flex items-center justify-center gap-2 group-hover:shadow-xl group-hover:shadow-primary-100 transition-all">
                    Release Funds <ArrowUpRight size={16} />
                 </button>
              </div>
           </Card>

           {/* Node Identity / Trust */}
           <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 border-dashed opacity-80 select-none">
              <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center text-slate-300 border border-slate-50 shadow-sm mb-4">
                 <CheckCircle size={28} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic mb-1 leading-none">Identity Verified Node</p>
              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest leading-none">April Cycle Active</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
