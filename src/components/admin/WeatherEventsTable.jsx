import React from 'react';
import Badge from '../common/Badge';

const WeatherEventsTable = ({ events, className = '' }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">City / Zone</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Trigger Type</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Severity</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Active Users</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Exposure</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">State</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-slate-50/50 transition-all group">
              <td className="px-6 py-5">
                <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-800 tracking-tighter italic uppercase">{event.city}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{event.zone}</span>
                </div>
              </td>
              <td className="px-6 py-5 text-xs font-bold text-slate-600 italic lowercase first-letter:uppercase">
                {event.type}
              </td>
              <td className="px-6 py-5 text-center">
                <Badge 
                  variant={
                    event.severity === 'Extreme' ? 'danger' : 
                    event.severity === 'High' ? 'warning' : 'info'
                  } 
                  size="xs"
                >
                  {event.severity}
                </Badge>
              </td>
              <td className="px-6 py-5 text-right text-sm font-black text-slate-900 tracking-tighter">
                {event.users.toLocaleString()}
              </td>
              <td className="px-6 py-5 text-right text-sm font-black text-primary-600 tracking-tighter">
                {event.exposure}
              </td>
              <td className="px-6 py-5 text-right">
                <Badge variant={event.status === 'Active' ? 'success' : 'neutral'} size="xs">
                  {event.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherEventsTable;
