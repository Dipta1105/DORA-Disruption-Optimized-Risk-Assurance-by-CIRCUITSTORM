import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Activity, 
  DollarSign, 
  TrendingUp, 
  ShieldAlert, 
  CloudRain, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingDown,
  Globe
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import StatCard from '../../components/common/StatCard';
import Badge from '../../components/common/Badge';
import Loader from '../../components/common/Loader';
import WeatherEventsTable from '../../components/admin/WeatherEventsTable';
import { adminService } from '../../services/adminService';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [weatherEvents, setWeatherEvents] = useState([]);
  const [recentClaims, setRecentClaims] = useState([]);
  const [highRiskZones, setHighRiskZones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [s, c, w, rc, hrz] = await Promise.all([
          adminService.getDashboardStats(),
          adminService.getPremiumVsPayoutData(),
          adminService.getWeatherEvents(),
          adminService.getRecentClaims(),
          adminService.getHighRiskZones()
        ]);
        setStats(s);
        setChartData(c);
        setWeatherEvents(w);
        setRecentClaims(rc);
        setHighRiskZones(hrz);
      } catch (err) {
        console.error('Failed to sync admin node:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-[60vh]"><Loader size="lg" /></div>;

  const statConfig = [
    { label: 'Active Users', key: 'activeUsers', icon: <Users size={20} /> },
    { label: 'Claims Today', key: 'claimsToday', icon: <Activity size={20} /> },
    { label: 'Claims Value', key: 'claimsValueToday', icon: <DollarSign size={20} /> },
    { label: 'Loss Ratio', key: 'lossRatio', icon: <TrendingDown size={20} /> },
    { label: 'Fraud Flags', key: 'fraudFlags', icon: <ShieldAlert size={20} /> },
    { label: 'Premium Collected', key: 'premiumCollected', icon: <TrendingUp size={20} /> },
    { label: 'Avg Payout', key: 'avgPayoutPerClaim', icon: <DollarSign size={20} /> },
    { label: 'Weather Events', key: 'activeWeatherEvents', icon: <CloudRain size={20} /> },
  ];

  return (
    <div className="space-y-10 animate-fade-in max-w-7xl mx-auto pb-20">
      <PageHeader 
        title="Insurance Admin Pulse" 
        subtitle="Global platform supervision and automated disruption node oversight."
        action={
           <div className="flex gap-3">
              <Badge variant="success" size="md" className="p-3 shadow-sm px-6">System Health: 99.9%</Badge>
           </div>
        }
      />

      {/* 8 Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statConfig.map((config) => (
          <StatCard 
            key={config.key}
            label={config.label} 
            value={stats[config.key].value} 
            change={stats[config.key].change} 
            type={stats[config.key].type}
            icon={config.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Chart and Tables */}
        <div className="lg:col-span-2 space-y-10">
          {/* Section 1: Premium vs Payout Chart */}
          <Card title="Premium vs Payout Performance" subtitle="7-day financial flow analysis (Insurance vs Disruption Payouts)">
            <div className="h-[350px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorPremium" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPayout" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}}
                    tickFormatter={(value) => `$${value/1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px'}}
                    itemStyle={{fontSize: '11px', fontWeight: 900, textTransform: 'uppercase'}}
                    labelStyle={{fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px'}}
                  />
                  <Legend 
                    verticalAlign="top" 
                    align="right" 
                    iconType="circle"
                    wrapperStyle={{paddingBottom: '20px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="premium" 
                    stroke="#0ea5e9" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPremium)" 
                    name="Premium Collected"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="payout" 
                    stroke="#ef4444" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPayout)" 
                    name="Payout Value"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Section 2: Active Weather Events Table */}
          <Card title="Active Weather Events Table" subtitle="Real-time disruption triggers across urban nodes" bodyClassName="!p-0">
            <WeatherEventsTable events={weatherEvents} />
          </Card>

          {/* Section 3: Recent Claims */}
          <Card title="Recent Claims Node" subtitle="System-calculated claim activities" bodyClassName="!p-0">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                         <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Claim ID</th>
                         <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Logic Type</th>
                         <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Amount</th>
                         <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">State</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                      {recentClaims.map((claim) => (
                        <tr key={claim.id} className="hover:bg-slate-50/50 transition-all group">
                           <td className="px-6 py-5">
                              <span className="text-sm font-black text-slate-800 tracking-tighter italic uppercase">{claim.id}</span>
                              <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none mt-1">{claim.city} • {claim.timestamp}</p>
                           </td>
                           <td className="px-6 py-5 text-xs font-bold text-slate-500 italic lowercase first-letter:uppercase">{claim.type}</td>
                           <td className="px-6 py-5 text-right text-sm font-black text-slate-900 tracking-tighter">{claim.amount}</td>
                           <td className="px-6 py-5 text-right"><Badge variant={claim.status === 'Auto-Approved' ? 'success' : claim.status === 'Flagged' ? 'danger' : 'warning'} size="xs">{claim.status}</Badge></td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </Card>
        </div>

        {/* Right Column: High-Risk Zones & Fraud Summary */}
        <div className="space-y-10">
          {/* Section 4: High-Risk Zones */}
          <Card title="High-Risk Zones" subtitle="Geographical saturation monitoring">
             <div className="space-y-6">
                {highRiskZones.map((zone, idx) => (
                  <div key={idx} className="p-5 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-100 transition-all group">
                     <div className="flex justify-between items-start mb-4">
                        <div>
                           <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest italic">{zone.city}</h4>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{zone.zone}</p>
                        </div>
                        <Badge variant={zone.status === 'Critical' ? 'danger' : zone.status === 'Elevated' ? 'warning' : 'info'} size="xs">{zone.status}</Badge>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden">
                           <div 
                             className={`h-full rounded-full transition-all duration-1000 ${zone.score > 80 ? 'bg-red-500' : zone.score > 60 ? 'bg-orange-500' : 'bg-blue-500'}`} 
                             style={{ width: `${zone.score}%` }}
                           ></div>
                        </div>
                        <span className="text-xs font-black text-slate-800 tracking-tighter">{zone.score}%</span>
                     </div>
                  </div>
                ))}
             </div>
          </Card>

          {/* Section 5: Fraud Alert Summary */}
          <Card className="bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-[0.05] select-none pointer-events-none transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-all duration-1000">
                <ShieldAlert size={220} className="text-red-500" />
             </div>
             <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                   <div className="p-3 bg-red-500/20 text-red-400 rounded-2xl">
                      <ShieldAlert size={24} />
                   </div>
                   <h3 className="text-xs font-black text-red-400 uppercase tracking-[0.2em] italic">Fraud Alert Summary</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                   <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic mb-2">Anomaly Score</p>
                      <div className="flex items-baseline gap-2">
                         <span className="text-3xl font-black text-white">{stats.fraudFlags.value}%</span>
                         <Badge variant="danger" size="xs" className="bg-red-500/20 text-red-400 border-none">High</Badge>
                      </div>
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic mb-2">Flagged Today</p>
                      <div className="flex items-baseline gap-2">
                         <span className="text-3xl font-black text-white">{stats.fraudFlags.value}</span>
                         <span className="text-[10px] text-green-400 font-bold uppercase italic tracking-widest">+2.1%</span>
                      </div>
                   </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                   <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Saved Losses</span>
                      <span className="text-xs font-black text-green-400">$1.2M</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full w-4/5"></div>
                   </div>
                </div>

                <button 
                   onClick={() => window.location.href = '/insurance/admin/fraud-review'}
                   className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] italic flex items-center justify-center gap-2 transition-all"
                >
                   Resolve All Flags <ArrowUpRight size={16} />
                </button>
             </div>
          </Card>

          {/* Platform Identity */}
          <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 border-dashed opacity-80 select-none">
             <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center text-slate-300 border border-slate-50 shadow-sm mb-4">
                <Globe size={28} />
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic mb-1 leading-none">Global Admin Node</p>
             <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest leading-none text-red-500">Live Coverage Pulse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
