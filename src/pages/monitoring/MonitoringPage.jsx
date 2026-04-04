import React from 'react';
import { ShieldAlert, Info, Download, Trash2, Filter, PlusSquare } from 'lucide-react';

const RiskAssessment = () => {
  const tableData = [
    { id: 'RSK-101', title: 'Data Breach Exposure', probability: 'High', impact: 'Extreme', score: 92, owner: 'Security Team' },
    { id: 'RSK-102', title: 'Supply Chain Volatility', probability: 'Medium', impact: 'High', score: 75, owner: 'Logistics' },
    { id: 'RSK-103', title: 'Regulatory Compliance Change', probability: 'Low', impact: 'Medium', score: 38, owner: 'Legal' },
    { id: 'RSK-104', title: 'Physical Asset Vulnerability', probability: 'Medium', impact: 'Medium', score: 45, owner: 'Facilities' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Risk Assessment Registry</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and evaluate operational disruption vectors.</p>
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm">
             <Filter size={16} /> Filters
           </button>
           <button className="flex items-center gap-2 btn-primary">
             <PlusSquare size={16} /> New Assessment
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="card border-l-4 border-red-500">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Critical Risks</h4>
            <div className="flex items-center justify-between">
               <span className="text-3xl font-extrabold text-slate-800">12</span>
               <div className="p-2 bg-red-50 text-red-600 rounded-lg"><ShieldAlert size={20} /></div>
            </div>
         </div>
         <div className="card border-l-4 border-orange-500">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pending Review</h4>
            <div className="flex items-center justify-between">
               <span className="text-3xl font-extrabold text-slate-800">08</span>
               <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Info size={20} /></div>
            </div>
         </div>
         <div className="card border-l-4 border-green-500">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Mitigated (mtd)</h4>
            <div className="flex items-center justify-between">
               <span className="text-3xl font-extrabold text-slate-800">24</span>
               <div className="p-2 bg-green-50 text-green-600 rounded-lg"><ShieldAlert size={20} className="rotate-180" /></div>
            </div>
         </div>
      </div>

      <div className="card overflow-hidden !p-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Risk ID</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Title / Vector</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Probability</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Impact</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Score</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 text-sm font-mono text-slate-600">{row.id}</td>
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-slate-800 lowercase first-letter:uppercase">{row.title}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">{row.owner}</div>
                </td>
                <td className="px-6 py-4">
                   <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                     row.probability === 'High' ? 'bg-orange-100 text-orange-700' : 
                     row.probability === 'Medium' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                   }`}>{row.probability}</span>
                </td>
                <td className="px-6 py-4">
                   <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                     row.impact === 'Extreme' ? 'bg-red-100 text-red-700' : 
                     row.impact === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                   }`}>{row.impact}</span>
                </td>
                <td className="px-6 py-4 text-center">
                   <span className="text-sm font-black text-slate-800">{row.score}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-all">
                    <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600 transition-all"><Download size={14} /></button>
                    <button className="p-1.5 hover:bg-red-100 rounded text-red-600 transition-all"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiskAssessment;
