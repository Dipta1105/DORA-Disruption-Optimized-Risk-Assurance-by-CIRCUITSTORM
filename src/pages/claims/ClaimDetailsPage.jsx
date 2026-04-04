import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { 
  ClipboardCheck, 
  ArrowLeft, 
  FileText, 
  CheckCircle, 
  Clock, 
  ShieldAlert,
  Download,
  Printer
} from 'lucide-react';
import { calculatePayout, formatCurrency } from '../../utils/claims';

const ClaimDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the specific claim
  const claimData = {
    id: id || 'CLM-001',
    type: 'Property Damage',
    amount: 45000,
    deductible: 2500,
    limit: 100000,
    date: '2026-04-01',
    status: 'Approved',
    severity: 'High',
    client: 'Acme Corp',
    policy: 'POL-0128',
    description: 'Significant disruption to logistics hub due to regional network outage.',
    evidenceCount: 4,
  };

  const recommendedPayout = calculatePayout(claimData.amount, claimData.limit, claimData.deductible, claimData.severity);

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
           <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-50 transition-all rounded-full border border-slate-100 shadow-sm text-slate-400 hover:text-slate-600">
             <ArrowLeft size={18} />
           </button>
           <div>
             <h1 className="text-2xl font-bold text-slate-800 tracking-tighter uppercase italic opacity-80 select-none">Claim Details</h1>
             <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mt-1">Transaction ID: {claimData.id}</p>
           </div>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Printer size={14} /> Full Report
           </Button>
           <Button variant="primary" size="sm" className="flex items-center gap-2">
              <Download size={14} /> Export Evidence
           </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Details */}
         <div className="lg:col-span-2 space-y-8">
            <Card title="Summary Investigation" subtitle="Case file overview" action={<Badge variant="success" size="md">{claimData.status}</Badge>}>
               <div className="flex items-start gap-6 border-b border-slate-50 pb-8 mb-8">
                  <div className="p-4 bg-primary-100 rounded-3xl shadow-lg shadow-primary-50">
                    <ClipboardCheck className="text-primary-600" size={42} />
                  </div>
                  <div className="flex-1 space-y-2">
                     <h2 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{formatCurrency(claimData.amount)}</h2>
                     <p className="text-xs text-slate-500 font-bold italic lowercase leading-relaxed max-w-md">{claimData.description}</p>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 italic">Policy Holder</p>
                    <p className="text-sm font-bold text-slate-800">{claimData.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 italic">Policy Link</p>
                    <p className="text-sm font-mono font-bold text-primary-600 cursor-pointer hover:underline uppercase tracking-tighter">{claimData.policy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 italic">Filing Date</p>
                    <p className="text-sm font-bold text-slate-800">{claimData.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 italic">Evidence</p>
                    <p className="text-sm font-bold text-slate-800 truncate">{claimData.evidenceCount} Digital Nodes</p>
                  </div>
               </div>
            </Card>

            <Card title="Automatic Calculation Logic" subtitle="Insurance v4.2 simulation output" bodyClassName="!p-0" footer={<div className="flex justify-between items-center"><p className="text-[10px] italic text-slate-400 font-bold uppercase tracking-widest">*Calculations finalized on {claimData.date}</p><Button size="sm">Audit Calculation</Button></div>}>
               <div className="p-6 space-y-4">
                  <div className="flex justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-all border-dashed">
                     <div>
                        <p className="text-xs font-black text-slate-800 italic opacity-60">Reported Actual Loss</p>
                        <p className="text-lg font-black text-slate-800 mt-1">{formatCurrency(claimData.amount)}</p>
                     </div>
                     <div className="text-right">
                        <p className="text-xs font-black text-slate-800 italic opacity-60">Deductible Applied</p>
                        <p className="text-lg font-black text-red-600 mt-1">-{formatCurrency(claimData.deductible)}</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-primary-900 rounded-2xl shadow-xl shadow-primary-100 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                        <div className="absolute top-0 right-0 p-4 transform translate-x-1/4 -translate-y-1/4 opacity-10 group-hover:scale-150 transition-all">
                           <CheckCircle className="text-white" size={80} />
                        </div>
                        <p className="text-[10px] font-black text-primary-300 uppercase tracking-[0.2em] mb-1 italic opacity-80">Recommended Payout</p>
                        <p className="text-2xl font-black text-white leading-none tracking-tighter">{formatCurrency(recommendedPayout)}</p>
                     </div>
                     <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200 transition-all">
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1 italic opacity-80">Severity Adjustment</p>
                        <div className="flex items-center gap-2 mt-2">
                           <Badge variant="danger" size="xs">{claimData.severity} Severity</Badge>
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic leading-none ml-1">Multiplier: x0.98</span>
                        </div>
                     </div>
                  </div>
               </div>
            </Card>
         </div>

         {/* Sidebar Timeline */}
         <div className="space-y-8">
            <Card title="Investigation Timeline" subtitle="Node verification logs" bodyClassName="!p-0">
               <div className="p-6 space-y-6">
                  {[
                    { label: 'Claim Initialized', time: '10:14 AM', date: 'Apr 01', status: 'Completed', icon: <FileText size={14} className="text-blue-500" /> },
                    { label: 'Latency Node Confirmed', time: '10:15 AM', date: 'Apr 01', status: 'Optimal', icon: <CheckCircle size={14} className="text-green-500" /> },
                    { label: 'Fraud Engine Screened', time: '10:15 AM', date: 'Apr 01', status: 'Passed', icon: <ShieldAlert size={14} className="text-green-500" /> },
                    { label: 'Payout Authorized', time: '02:42 PM', date: 'Apr 02', status: 'Pending Settlement', icon: <Clock size={14} className="text-orange-500" /> },
                  ].map((log, idx) => (
                    <div key={idx} className="flex gap-4 relative group">
                       {idx !== 3 && <div className="absolute left-3.5 top-8 w-0.5 h-full bg-slate-50 z-0"></div>}
                       <div className="relative z-10 p-2 bg-white rounded-lg border border-slate-100 shadow-sm group-hover:bg-slate-50 transition-colors">
                         {log.icon}
                       </div>
                       <div className="flex-1 pb-4">
                          <p className="text-xs font-black text-slate-800 uppercase tracking-widest">{log.label}</p>
                          <p className="text-[10px] text-slate-400 italic opacity-80 mt-1 font-bold">{log.date} — {log.time}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </Card>

            <div className="card bg-slate-900 p-8 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:bg-slate-800 transition-all border-none">
               <div className="p-4 bg-slate-800 rounded-3xl border border-slate-700 shadow-xl group-hover:scale-110 transition-transform">
                  <ShieldAlert className="text-primary-500" size={32} />
               </div>
               <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest italic outline-none leading-none mb-2">Internal Audit?</h4>
                  <p className="text-[10px] text-slate-400 italic font-medium lowercase first-letter:uppercase leading-relaxed">Refer this claim for high-level manual investigation if node signals show any inconsistency.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ClaimDetailsPage;
