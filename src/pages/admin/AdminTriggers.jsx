import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Terminal, 
  Globe, 
  Filter, 
  Eye, 
  RefreshCcw, 
  XCircle,
  Activity,
  MapPin,
  Clock
} from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';
import WeatherEventsTable from '../../components/admin/WeatherEventsTable';
import { adminService } from '../../services/adminService';

const AdminTriggers = () => {
  const [triggers, setTriggers] = useState([]);
  const [weatherEvents, setWeatherEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [t, w] = await Promise.all([
          adminService.getTriggerEvents(),
          adminService.getWeatherEvents()
        ]);
        setTriggers(t);
        setWeatherEvents(w);
      } catch (err) {
        console.error('Failed to sync trigger node:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-[60vh]"><Loader size="lg" /></div>;

  return (
    <div className="space-y-10 animate-fade-in max-w-7xl mx-auto pb-20">
      <PageHeader 
        title="Admin Trigger Monitoring" 
        subtitle="Real-time oversight of weather and disruption claim activation logic."
        action={
           <Button size="sm" className="bg-primary-600 text-white flex items-center gap-2 px-6 py-2.5 rounded-2xl shadow-xl shadow-primary-100 hover:bg-primary-700 transition-all font-black uppercase tracking-widest italic text-[10px]">
              <Zap size={14} /> Force Global Re-evaluation
           </Button>
        }
      />

      {/* Global Status Banner */}
      <div className="card border-l-4 border-primary-600 bg-primary-50/20 p-8 flex items-center gap-8 rounded-[2rem] border border-slate-100 shadow-sm">
         <div className="p-5 bg-primary-600 rounded-[1.5rem] shadow-2xl shadow-primary-200">
            <Globe className="text-white" size={36} />
         </div>
         <div>
            <div className="flex items-center gap-3 mb-1">
               <h3 className="text-xl font-black text-slate-800 uppercase tracking-widest italic leading-none">Global Auto-Triggering: Active</h3>
               <Badge variant="success" size="xs">Optimal</Badge>
            </div>
            <p className="text-[11px] text-slate-500 font-bold italic mt-1 leading-relaxed max-w-2xl lowercase">
               Insurance platform v1.2 is currently synchronized. Any disruption signal detected by the monitored urban nodes with confirmed severity above the "Threshold Delta" will automatically initiate claim calculations and payout sequences.
            </p>
         </div>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* Section 1: Main Trigger Monitoring Table */}
        <Card title="Real-Time Trigger Queue" subtitle="Active and pending disruption events across monitored zones" bodyClassName="!p-0">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Event ID</th>
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Trigger Type</th>
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">City / Geo Zone</th>
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Threshold</th>
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Current Value</th>
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Impacted Users</th>
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">State</th>
                       <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {triggers.map((trigger) => (
                      <tr key={trigger.id} className="hover:bg-slate-50/50 transition-all group">
                         <td className="px-6 py-5">
                            <span className="text-sm font-black text-slate-800 tracking-tighter italic uppercase underline group-hover:text-primary-600 cursor-pointer">#{trigger.id}</span>
                            <div className="flex items-center gap-1.5 mt-1 text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">
                               <Clock size={8} /> {trigger.startedAt}
                            </div>
                         </td>
                         <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                               <div className="p-1.5 bg-slate-50 rounded-lg text-slate-400 group-hover:text-primary-600 transition-all">
                                  <Activity size={14} />
                               </div>
                               <span className="text-xs font-bold text-slate-600 lowercase italic first-letter:uppercase">{trigger.type}</span>
                            </div>
                         </td>
                         <td className="px-6 py-5">
                            <div className="flex flex-col">
                               <span className="text-sm font-black text-slate-800 tracking-tighter italic uppercase">{trigger.city}</span>
                               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1 flex items-center gap-1"><MapPin size={8} /> {trigger.zone}</span>
                            </div>
                         </td>
                         <td className="px-6 py-5 text-center text-xs font-bold text-slate-400 italic lowercase">{trigger.threshold}</td>
                         <td className="px-6 py-5 text-center">
                            <span className={`text-xs font-black px-2 py-1 rounded-lg ${trigger.status === 'Active' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}>
                               {trigger.value}
                            </span>
                         </td>
                         <td className="px-6 py-5 text-right text-sm font-black text-slate-900 tracking-tighter">{trigger.users.toLocaleString()}</td>
                         <td className="px-6 py-5 text-center"><Badge variant={trigger.status === 'Active' ? 'danger' : 'info'} size="xs">{trigger.status}</Badge></td>
                         <td className="px-6 py-5 text-right">
                            <div className="flex justify-end gap-2">
                               <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all" title="View Affected Users"><Eye size={16} /></button>
                               <button className="p-2 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all" title="Force Re-evaluate"><RefreshCcw size={16} /></button>
                               <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all" title="Close Event"><XCircle size={16} /></button>
                            </div>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </Card>

        {/* Section 2: Reusable Weather Events Table for Context */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           <div className="lg:col-span-2">
              <Card title="Active Urban Weather Node Metrics" subtitle="Supporting data from meteorological monitoring stations" bodyClassName="!p-0">
                 <WeatherEventsTable events={weatherEvents} />
              </Card>
           </div>
           <div>
              <Card title="Quick Trigger Logic Reference" subtitle="Standard threshold definitions">
                 <div className="space-y-4">
                    {[
                       { label: 'Heavy Rain', threshold: '> 15mm / hr', severity: 'High' },
                       { label: 'Flash Flood', threshold: '> 40mm / hr', severity: 'Extreme' },
                       { label: 'Traffic Gridlock', threshold: '> 45m Delay', severity: 'Medium' },
                       { label: 'Extreme Heat', threshold: '> 44°C', severity: 'High' },
                    ].map((logic, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                         <div>
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic leading-none mb-1">{logic.label}</p>
                            <p className="text-xs font-black text-slate-800 tracking-tighter">{logic.threshold}</p>
                         </div>
                         <Badge variant={logic.severity === 'Extreme' ? 'danger' : logic.severity === 'High' ? 'warning' : 'info'} size="xs">{logic.severity}</Badge>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTriggers;
