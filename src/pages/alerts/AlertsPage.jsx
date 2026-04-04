import React from 'react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { Bell, Zap, Terminal, AlertTriangle, MessageSquare } from 'lucide-react';

const AlertsPage = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Critical Notifications</h1>
        <p className="text-slate-500 text-sm mt-1 italic font-medium lowercase">Real-time alerts for active disruption events and system health.</p>
      </header>

      <div className="flex flex-col gap-4">
         {[
            { id: 1, type: 'Disruption Detected', message: 'Major network outage detected in South-East Asia region. Potential impact on 4 active policies.', severity: 'Extreme', icon: <Zap className="text-red-600" />, time: '2 mins ago' },
            { id: 2, type: 'Payout Flagged', message: 'Claim #CLM-002 flagged for manual review due to anomaly in disruption signal timing.', severity: 'High', icon: <AlertTriangle className="text-orange-600" />, time: '14 mins ago' },
            { id: 3, type: 'System Update', message: 'Risk engine v4.2 successfully deployed to production. Latency monitoring active.', severity: 'Info', icon: <Terminal className="text-blue-600" />, time: '1 hour ago' },
            { id: 4, type: 'New Message', message: 'Legal team has added a comment to Policy #POL-001 regarding renewal terms.', severity: 'Neutral', icon: <MessageSquare className="text-slate-400" />, time: '4 hours ago' },
         ].map((alert) => (
            <Card key={alert.id} className="hover:border-slate-200 transition-all cursor-pointer group" bodyClassName="!p-4 md:!p-6">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                     {alert.icon}
                  </div>
                  <div className="flex-1 space-y-1">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">{alert.type}</h4>
                           <Badge variant={alert.severity === 'Extreme' ? 'danger' : alert.severity === 'High' ? 'warning' : alert.severity === 'Info' ? 'info' : 'neutral'} size="xs">{alert.severity}</Badge>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">{alert.time}</span>
                     </div>
                     <p className="text-xs text-slate-500 leading-relaxed italic">{alert.message}</p>
                     <div className="pt-2 flex gap-4">
                        <button className="text-[10px] font-bold text-primary-600 hover:text-primary-700 uppercase tracking-widest">Mark as Read</button>
                        <button className="text-[10px] font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest">Archive</button>
                        <button className="text-[10px] font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest italic">View Details →</button>
                     </div>
                  </div>
               </div>
            </Card>
         ))}
      </div>
    </div>
  );
};

export default AlertsPage;
