import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Search, 
  Filter, 
  Eye, 
  Lock, 
  Unlock, 
  MapPin, 
  Clock, 
  Activity,
  CheckCircle,
  XCircle
} from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';
import FraudReviewDrawer from '../../components/admin/FraudReviewDrawer';
import { adminService } from '../../services/adminService';

const FraudPage = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAudit = (claim) => {
    setSelectedClaim(claim);
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [records, s] = await Promise.all([
          adminService.getFraudReviewRecords(),
          adminService.getFraudStats()
        ]);
        setData(records);
        setStats(s);
      } catch (err) {
        console.error('Failed to sync fraud node:', err);
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
        title="Fraud Investigation Queue" 
        subtitle="AI-powered analysis of claim patterns and urban disruption signals (Insurance Platform)."
        action={
           <div className="flex gap-3">
              <Badge variant="danger" size="md" className="p-3 shadow-sm px-6 bg-red-600 text-white animate-pulse">Real-time Watch Active</Badge>
           </div>
        }
      />

      {/* Fraud Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Anomaly Score" subtitle="System accuracy" action={<ShieldAlert className="text-red-600" size={18} />}>
           <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800">{stats.anomalyScore}%</span>
              <Badge variant="success" size="xs">High Conf</Badge>
           </div>
        </Card>
        <Card title="Flagged Claims" subtitle="Unusual activity detected" action={<AlertTriangle className="text-orange-600" size={18} />}>
           <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800">{stats.flaggedCount}</span>
              <Badge variant="danger" size="xs">Action Req</Badge>
           </div>
        </Card>
        <Card title="Network Mapping" subtitle="Actor relationships" action={<Search className="text-blue-600" size={18} />}>
           <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800">{stats.nodesScanned}</span>
              <Badge variant="info" size="xs">Nodes Scanned</Badge>
           </div>
        </Card>
        <Card title="Saved Losses" subtitle="Prevented payout leakage" action={<Filter className="text-green-600" size={18} />}>
           <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800">{stats.savedLosses}</span>
              <Badge variant="success" size="xs">Actual Savings</Badge>
           </div>
        </Card>
      </div>

      {/* Main Investigation Queue Table */}
      <Card title="Investigation Queue" subtitle="Pending detailed analysis and disruption validation" bodyClassName="!p-0" 
        headerClassName="flex flex-col md:flex-row md:items-center justify-between gap-4"
        action={
           <div className="flex items-center gap-2">
              <div className="relative group">
                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-primary-600 transition-all" size={14} />
                 <select 
                   value={filterStatus} 
                   onChange={(e) => setFilterStatus(e.target.value)}
                   className="pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest italic outline-none focus:ring-2 focus:ring-primary-100 transition-all cursor-pointer appearance-none"
                 >
                    <option value="All">All Severity</option>
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                 </select>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2 px-6 rounded-2xl">
                 <Search size={14} /> Search Records
              </Button>
           </div>
        }
      >
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Claim ID</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">User / Event</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Speed Check</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Zone Val</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Activity</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Timing</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Fraud Score</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-center">Status</th>
                     <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {data.map((record) => (
                     <tr key={record.id} className="hover:bg-slate-50/50 transition-all group">
                        <td className="px-6 py-5">
                           <span className="text-sm font-black text-slate-800 tracking-tighter italic uppercase underline group-hover:text-primary-600 cursor-pointer">#{record.id}</span>
                        </td>
                        <td className="px-6 py-5">
                           <div className="flex flex-col items-center">
                              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest leading-none mb-1">{record.user}</span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none italic">{record.event}</span>
                           </div>
                        </td>
                        {[record.speed, record.zone, record.activity, record.timing].map((check, i) => (
                           <td key={i} className="px-6 py-5 text-center">
                              {check === 'Pass' ? (
                                 <CheckCircle size={16} className="text-green-500 mx-auto" />
                              ) : (
                                 <XCircle size={16} className="text-red-500 mx-auto" />
                              )}
                           </td>
                        ))}
                        <td className="px-6 py-5 text-center">
                           <div className="flex flex-col items-center gap-1">
                              <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                 <div 
                                   className={`h-full rounded-full ${record.score > 80 ? 'bg-red-500' : record.score > 60 ? 'bg-orange-500' : 'bg-green-500'}`}
                                   style={{ width: `${record.score}%` }}
                                 ></div>
                              </div>
                              <span className="text-[10px] font-black text-slate-800">{record.score}%</span>
                           </div>
                        </td>
                        <td className="px-6 py-5 text-center">
                           <Badge variant={record.status === 'Flagged' ? 'danger' : record.status === 'Reviewing' ? 'warning' : 'neutral'} size="xs">{record.status}</Badge>
                        </td>
                        <td className="px-6 py-5 text-right">
                           <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => handleAudit(record)}
                                className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all" 
                                title="View Audit Trail"
                              >
                                <Eye size={16} />
                              </button>
                              <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all" title="Freeze Account"><Lock size={16} /></button>
                              <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all" title="Release Claim"><Unlock size={16} /></button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </Card>

      {/* Manual Audit Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card title="City Analysis" subtitle="Regional fraud trends">
            <div className="space-y-4">
               {['Mumbai', 'Delhi', 'Bangalore', 'Chennai'].map((city, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 italic">
                     <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{city}</span>
                     <span className="text-[10px] font-black text-red-500">{(Math.random() * 5).toFixed(1)}% Score</span>
                  </div>
               ))}
            </div>
         </Card>
         <Card title="Claim Date Range" subtitle="Temporal consistency check">
            <div className="flex items-end justify-between h-full min-h-[120px] pb-2">
               {[40, 70, 45, 90, 65, 30, 50].map((h, i) => (
                  <div key={i} className={`w-3 rounded-full hover:bg-primary-500 transition-all cursor-pointer ${h > 80 ? 'bg-red-400' : 'bg-slate-200'}`} style={{ height: `${h}%` }}></div>
               ))}
            </div>
         </Card>
         <Card title="Review Status Summary" subtitle="Operational efficiency">
            <div className="flex items-center justify-center p-4">
               <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                     <path className="text-slate-100" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4"></path>
                     <path className="text-primary-500" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4"></path>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                     <span className="text-lg font-black text-slate-800 leading-none">65%</span>
                     <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter italic">Resolved</span>
                  </div>
               </div>
            </div>
         </Card>
      </div>

      {/* Fraud Review Drawer */}
      <FraudReviewDrawer 
        claim={selectedClaim} 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </div>
  );
};

export default FraudPage;
