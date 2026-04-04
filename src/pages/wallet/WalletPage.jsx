import React from 'react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, ShieldCheck } from 'lucide-react';

const WalletPage = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Financial Ledger</h1>
        <p className="text-slate-500 text-sm mt-1 italic font-medium lowercase">Insurance fund management and claim payouts.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Available Balace" subtitle="Global liquidity pool" action={<ShieldCheck className="text-primary-500" size={18} />}>
           <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800">$12,450,000</span>
              <Badge variant="success" size="xs">+2.4%</Badge>
           </div>
        </Card>
        <Card title="Reserved for Claims" subtitle="Open disruption events" action={<TrendingUp className="text-orange-500" size={18} />}>
           <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800">$1,820,000</span>
              <Badge variant="warning" size="xs">High Exposure</Badge>
           </div>
        </Card>
        <Card title="Escrow Payouts" subtitle="Total paid this quarter" action={<Wallet className="text-indigo-500" size={18} />}>
           <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800">$845,200</span>
              <Badge variant="info" size="xs">Processed</Badge>
           </div>
        </Card>
      </div>

      <Card title="Transaction History" subtitle="Recent ledger activity (Insurance nodes)" bodyClassName="!p-0">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Entity</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {[
                  { type: 'Payout', id: 'TX-4921', entity: 'Acme Corp', amount: '-$42,000', status: 'Settled', icon: <ArrowUpRight className="text-red-500" /> },
                  { type: 'Deposit', id: 'TX-4890', entity: 'Capital Reserve', amount: '+$150,000', status: 'Confirmed', icon: <ArrowDownLeft className="text-green-500" /> },
                  { type: 'Payout', id: 'TX-4882', entity: 'Cyber Shield Co', amount: '-$8,500', status: 'Settled', icon: <ArrowUpRight className="text-red-500" /> },
               ].map((tx, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                     <td className="px-6 py-4 flex items-center gap-3">
                        <div className="p-1.5 bg-white rounded-lg border border-slate-100 shadow-sm">{tx.icon}</div>
                        <span className="text-sm font-bold text-slate-800">{tx.type}</span>
                     </td>
                     <td className="px-6 py-4 text-xs font-mono text-slate-400">{tx.id}</td>
                     <td className="px-6 py-4 text-xs text-slate-600 font-bold lowercase">{tx.entity}</td>
                     <td className={`px-6 py-4 text-sm font-black ${tx.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{tx.amount}</td>
                     <td className="px-6 py-4"><Badge variant={tx.status === 'Settled' ? 'success' : 'info'} size="xs">{tx.status}</Badge></td>
                  </tr>
               ))}
            </tbody>
         </table>
      </Card>
    </div>
  );
};

export default WalletPage;
