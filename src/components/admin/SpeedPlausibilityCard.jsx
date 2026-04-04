import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import Badge from '../common/Badge';

const SpeedPlausibilityCard = ({ data }) => {
  if (!data) return null;

  const { prevGps, currentGps, distance, timeDelta, speed } = data;

  // Status determined by speed
  const getStatus = (s) => {
    if (s <= 80) return { label: 'Pass', variant: 'success', icon: <ShieldCheck size={12} />, color: 'text-green-600' };
    if (s <= 120) return { label: 'Pending Review', variant: 'warning', icon: <AlertTriangle size={12} />, color: 'text-orange-600' };
    return { label: 'Reject', variant: 'danger', icon: <XCircle size={12} />, color: 'text-red-600' };
  };

  const status = getStatus(speed);

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mt-4 animate-slide-up">
      <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-primary-600" />
          <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest italic">GPS Speed Validation Node</span>
        </div>
        <Badge variant={status.variant} size="xs" className="flex items-center gap-1.5">
          {status.icon}
          {status.label}
        </Badge>
      </div>
      
      <div className="p-5 space-y-6">
        {/* Route Points */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic mb-2">Previous Point</p>
            <div className="flex items-center gap-2 p-2 bg-white rounded-xl border border-slate-100">
              <MapPin size={12} className="text-slate-300" />
              <span className="text-[10px] font-bold text-slate-600 truncate">{prevGps}</span>
            </div>
          </div>
          <div className="mt-6 text-slate-300">
            <ArrowRight size={16} />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic mb-2">Current Point</p>
            <div className="flex items-center gap-2 p-2 bg-white rounded-xl border border-slate-100">
              <MapPin size={12} className="text-primary-400" />
              <span className="text-[10px] font-bold text-slate-600 truncate">{currentGps}</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 bg-white rounded-xl border border-slate-100 flex flex-col items-center">
            <Navigation size={14} className="text-slate-400 mb-1" />
            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Distance</p>
            <p className="text-xs font-black text-slate-800">{distance}</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 flex flex-col items-center">
            <Clock size={14} className="text-slate-400 mb-1" />
            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Duration</p>
            <p className="text-xs font-black text-slate-800">{timeDelta}</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 flex flex-col items-center">
            <Zap size={14} className="text-primary-500 mb-1" />
            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Velocity</p>
            <p className={`text-xs font-black ${status.color}`}>{speed} km/h</p>
          </div>
        </div>

        {/* Threshold Reference */}
        <div className="p-3 bg-slate-900 rounded-xl flex items-center justify-between">
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">System Threshold</span>
           <div className="flex gap-3">
              <span className="text-[9px] font-bold text-green-400">PASS: ≤80</span>
              <span className="text-[9px] font-bold text-orange-400">PEND: {'<'}120</span>
              <span className="text-[9px] font-bold text-red-500">REJ: {'>'}120</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedPlausibilityCard;
