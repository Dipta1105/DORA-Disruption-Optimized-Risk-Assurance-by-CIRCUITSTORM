import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  Layers, 
  DollarSign, 
  Clock, 
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { policyService } from '../../services/policyService';

const insurancePlans = [
  {
    id: 'PLAN-001',
    name: 'Basic Shield',
    premiumCap: '$29',
    coverage: '90%',
    dailyPayoutCap: '$150',
    weeklyPayoutLimit: '$750',
    exclusions: ['Self-induced Delays', 'Offline Nodes'],
    color: 'bg-slate-100',
    iconColor: 'text-slate-600',
    borderColor: 'border-slate-200',
    recommended: false
  },
  {
    id: 'PLAN-002',
    name: 'Executive Pulse',
    premiumCap: '$99',
    coverage: '95%',
    dailyPayoutCap: '$300',
    weeklyPayoutLimit: '$1500',
    exclusions: ['Self-induced Delays', 'Unverified Faults'],
    color: 'bg-primary-600',
    iconColor: 'text-white',
    borderColor: 'border-primary-100',
    recommended: true
  },
  {
    id: 'PLAN-003',
    name: 'Enterprise Ultra',
    premiumCap: '$249',
    coverage: '100%',
    dailyPayoutCap: '$1000',
    weeklyPayoutLimit: '$5000',
    exclusions: ['Voluntary Logouts'],
    color: 'bg-slate-900',
    iconColor: 'text-primary-400',
    borderColor: 'border-slate-800',
    recommended: false
  }
];

const PlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('PLAN-002');
  const [loading, setLoading] = useState(false);

  const handleSelectPlan = async (planId) => {
    setSelectedPlan(planId);
    // Simulating API call for POST /insurance/policies/create
    setLoading(true);
    await policyService.createPolicy({ planId, timestamp: new Date().toISOString() });
    setLoading(false);
  };

  return (
    <div className="space-y-12 animate-fade-in max-w-7xl mx-auto pb-20">
      <PageHeader 
        title="Coverage Strategy Nodes" 
        subtitle="Select your disruption protection level (India Q-Commerce Model)"
        action={
           <Badge variant="info" size="md" className="p-3 px-6 shadow-sm shadow-blue-50">
             Active System: Insurance v4.28
           </Badge>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insurancePlans.map((plan) => (
          <Card 
            key={plan.id}
            className={`relative flex flex-col group overflow-hidden border-2 transition-all duration-500 rounded-[2.5rem] shadow-xl hover:-translate-y-2 ${
              plan.recommended ? 'border-primary-600 shadow-primary-50 scale-105 z-10' : 'border-slate-100'
            }`}
            bodyClassName="p-0 flex flex-col h-full"
          >
            {/* Header / Brand */}
            <div className={`p-8 ${plan.recommended ? 'bg-primary-600' : 'bg-slate-50'} transition-colors relative`}>
              {plan.recommended && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest italic animate-pulse">
                   Recommended Node
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                 <div className={`p-4 rounded-3xl shadow-lg flex-shrink-0 bg-white ${plan.iconColor}`}>
                    <Shield size={32} />
                 </div>
                 <div>
                    <h3 className={`text-xl font-black uppercase italic tracking-tighter leading-none ${plan.recommended ? 'text-white' : 'text-slate-800'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-[10px] font-bold uppercase tracking-widest italic opacity-60 mt-1 ${plan.recommended ? 'text-white' : 'text-slate-400'}`}>
                      Plan ID: {plan.id}
                    </p>
                 </div>
              </div>

              <div className="flex items-baseline gap-1">
                 <span className={`text-5xl font-black tracking-tighter ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
                   {plan.premiumCap}
                 </span>
                 <span className={`text-xs font-bold uppercase tracking-widest italic ${plan.recommended ? 'text-white/60' : 'text-slate-400'}`}>
                   / week cap
                 </span>
              </div>
            </div>

            {/* Content / Metrics */}
            <div className="p-8 flex-1 space-y-8 bg-white">
               <div className="space-y-5">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Coverage Capacity</span>
                     <span className="text-sm font-black text-slate-800 tracking-tighter">{plan.coverage} of actual loss</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Daily Disruption Cap</span>
                     <span className="text-sm font-black text-green-600 tracking-tighter">{plan.dailyPayoutCap} / per day</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Weekly System Limit</span>
                     <span className="text-sm font-black text-slate-800 tracking-tighter">{plan.weeklyPayoutLimit} / total q</span>
                  </div>
               </div>

               {/* Exclusions */}
               <div className="pt-6 border-t border-slate-50">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic mb-4">Risk Exclusions</h4>
                  <div className="space-y-3">
                     {plan.exclusions.map((exclusion, idx) => (
                       <div key={idx} className="flex gap-2 items-start opacity-70">
                          <AlertTriangle size={12} className="text-orange-500 mt-0.5 flex-shrink-0" />
                          <p className="text-[11px] font-bold text-slate-500 leading-tight italic lowercase first-letter:uppercase">{exclusion}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Footer / Action */}
            <div className="p-8 pt-0 bg-white">
               <Button 
                variant={plan.recommended ? 'primary' : 'outline'} 
                className={`w-full h-14 rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] italic ${plan.recommended ? 'shadow-xl shadow-primary-200' : ''}`}
                onClick={() => handleSelectPlan(plan.id)}
                disabled={loading && selectedPlan === plan.id}
               >
                  {loading && selectedPlan === plan.id ? 'Securing Node...' : selectedPlan === plan.id ? 'Node Active' : 'Initiate Protection'}
                  <ChevronRight size={16} />
               </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust Seals */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
         {[
           { icon: <TrendingUp />, title: 'Loss-of-Income', desc: 'Predictive analytics based coverage for q-nodes.' },
           { icon: <Zap />, title: 'Real-time Signal', desc: 'Auto-claim triggers from flood/disruption signals.' },
           { icon: <Layers />, title: 'Seamless Node', desc: 'Zero manual verification for confirmed outages.' },
           { icon: <DollarSign />, title: 'Instant Fund', desc: 'Escrow-backed instant UPI payout settlements.' }
         ].map((seal, idx) => (
           <div key={idx} className="flex gap-4">
              <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 flex-shrink-0">
                 {React.cloneElement(seal.icon, { size: 20 })}
              </div>
              <div>
                 <h5 className="text-[11px] font-black text-slate-800 uppercase tracking-widest italic mb-1">{seal.title}</h5>
                 <p className="text-[10px] text-slate-400 font-bold leading-relaxed italic lowercase">{seal.desc}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default PlansPage;
