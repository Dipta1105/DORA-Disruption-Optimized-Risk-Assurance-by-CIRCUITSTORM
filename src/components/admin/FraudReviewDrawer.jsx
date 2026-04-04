import React from 'react';
import { 
  X, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Clock, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  FileText,
  User,
  DollarSign
} from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import SpeedPlausibilityCard from './SpeedPlausibilityCard';
import ZoneValidationCard from './ZoneValidationCard';

const FraudReviewDrawer = ({ claim, isOpen, onClose }) => {
  if (!claim) return null;

  const { details } = claim;

  const DetailSection = ({ title, icon, check, children }) => (
    <div className="p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-100 rounded-xl text-slate-400">
            {icon}
          </div>
          <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest italic">{title}</h4>
        </div>
        {check && (
          <Badge 
            variant={check.status === 'Pass' ? 'success' : 'danger'} 
            size="xs" 
            className="flex items-center gap-1.5"
          >
            {check.status === 'Pass' ? <CheckCircle size={10} /> : <XCircle size={10} />}
            {check.status}
          </Badge>
        )}
      </div>
      <div className="pl-[52px]">
        {children}
        {check && (
          <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest leading-none">
              <span className="text-slate-400 italic">Validation Logic:</span>
              <span className="text-slate-600">{check.logic}</span>
            </div>
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest leading-none border-t border-slate-100 pt-1.5">
              <span className="text-slate-400 italic">System Threshold:</span>
              <span className="text-slate-600">{check.threshold}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[99] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-[100] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto custom-scrollbar`}>
        {/* Header */}
        <header className="sticky top-0 bg-white border-b border-slate-100 p-8 flex items-center justify-between z-10">
          <div className="flex flex-col">
             <div className="flex items-center gap-2 mb-1">
                <Badge variant="danger" size="xs" className="animate-pulse">Suspicious Signal</Badge>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Insurance Node Audit</span>
             </div>
             <h2 className="text-2xl font-black text-slate-800 tracking-tighter uppercase italic">Review Claim {claim.id}</h2>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-slate-50 rounded-2xl transition-all text-slate-400 hover:text-slate-900 shadow-sm border border-slate-50">
             <X size={20} />
          </button>
        </header>

        <div className="pb-32">
          {/* 1. Claim Summary */}
          <DetailSection title="Claim Summary" icon={<FileText size={18} />}>
             <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><User size={14} /></div>
                   <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">User Entity</p>
                      <p className="text-sm font-black text-slate-800 tracking-tighter">{details.userName}</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-green-50 rounded-lg text-green-600"><DollarSign size={14} /></div>
                   <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Claim Value</p>
                      <p className="text-sm font-black text-slate-800 tracking-tighter">{details.claimAmount}</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><Clock size={14} /></div>
                   <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Signal Time</p>
                      <p className="text-sm font-black text-slate-800 tracking-tighter">{details.claimDate}</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><MapPin size={14} /></div>
                   <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Event Reference</p>
                      <p className="text-sm font-black text-slate-800 tracking-tighter italic uppercase">{claim.event}</p>
                   </div>
                </div>
             </div>
          </DetailSection>

          {/* 2. Speed Plausibility Check */}
          <DetailSection title="Speed Plausibility Check" icon={<Zap size={18} />} check={details.speedCheck}>
             <p className="text-[11px] text-slate-500 font-bold italic lowercase leading-relaxed">System calculation of physical displacement between last confirmed GPS signal and claim initialization node.</p>
             <SpeedPlausibilityCard data={details.speedCheck.data} />
          </DetailSection>

          {/* 3. Zone-Event Mismatch */}
          <DetailSection title="Zone-Event Mismatch" icon={<MapPin size={18} />} check={details.zoneCheck}>
             <p className="text-[11px] text-slate-500 font-bold italic lowercase leading-relaxed">Geospatial validation comparing user's reported coordinate cluster against the confirmed radius of the disruption station.</p>
             <ZoneValidationCard data={details.zoneCheck.data} />
          </DetailSection>

          {/* 4. Activity During Disruption */}
          <DetailSection title="Activity During Disruption" icon={<Activity size={18} />} check={details.activityCheck}>
             <p className="text-[11px] text-slate-500 font-bold italic lowercase leading-relaxed">Verification of "Shadow Activity" (active order processing/location pings) that would contradict a complete platform outage claim.</p>
          </DetailSection>

          {/* 5. Timing Consistency */}
          <DetailSection title="Timing Consistency" icon={<Clock size={18} />} check={details.timingCheck}>
             <p className="text-[11px] text-slate-500 font-bold italic lowercase leading-relaxed">Temporal check to ensure the claim window precisely matches the sensor-confirmed start and end of the regional node disruption.</p>
          </DetailSection>

          {/* 6. Fraud Decision Notes */}
          <div className="p-6">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-100 rounded-xl text-slate-400">
                   <FileText size={18} />
                </div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest italic font-bold text-red-500">Fraud Decision Notes</h4>
             </div>
             <div className="pl-[52px]">
                <textarea 
                  className="w-full h-32 p-4 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-600 focus:ring-2 focus:ring-primary-100 transition-all italic"
                  placeholder="Insert audit notes here for platform permanent record..."
                  defaultValue={details.notes}
                />
             </div>
          </div>
        </div>

        {/* Footer Actions */}
        <footer className="fixed bottom-0 right-0 w-full max-w-lg bg-white border-t border-slate-100 p-8 flex items-center justify-between gap-4 z-20 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
           <button className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic transition-all">Keep Pending</button>
           <button className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic transition-all shadow-xl shadow-red-100">Reject Claim</button>
           <button className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] italic transition-all shadow-xl shadow-green-100">Approve Payout</button>
        </footer>
      </div>
    </>
  );
};

export default FraudReviewDrawer;
