import React from 'react';
import { User, Bell, Shield, Globe, Lock, Save, Trash2 } from 'lucide-react';

const Settings = () => {
  const sections = [
    { title: 'Profile & Identity', icon: <User size={18} />, description: 'Manage your risk manager profile and credentials.' },
    { title: 'Notification Channels', icon: <Bell size={18} />, description: 'Configure SMS, Email, and Slack webhooks for disruption alerts.' },
    { title: 'Security & Access', icon: <Lock size={18} />, description: '2FA setup, IP whitelisting, and activity logs.' },
    { title: 'Global Compliance', icon: <Shield size={18} />, description: 'Set regional compliance standards and reporting frequency.' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Platform Settings</h1>
        <p className="text-slate-500 text-sm mt-1 italic font-medium lowercase first-letter:uppercase">system configuration and user preferences for insurance (Insurance).</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         <div className="md:col-span-1 space-y-1">
            {sections.map((section, idx) => (
               <button 
                  key={idx} 
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
                    idx === 0 ? 'bg-primary-50 text-primary-700 font-bold' : 'text-slate-500 hover:bg-slate-50'
                  }`}
               >
                  {section.icon}
                  <span className="text-xs uppercase tracking-tight">{section.title}</span>
               </button>
            ))}
         </div>

         <div className="md:col-span-3 space-y-8">
            <div className="card">
               <h3 className="font-bold text-slate-800 mb-6 pb-2 border-b border-slate-50">Profile Configuration</h3>
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                     <input type="text" defaultValue="Antar Agarwal" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Job Title</label>
                     <input type="text" defaultValue="Risk Manager, Level 4" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                  </div>
                  <div className="space-y-2 col-span-2">
                     <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                     <input type="email" defaultValue="antar@insurance-Insurance.io" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary-500" />
                  </div>
                  <div className="col-span-2 flex items-center gap-4 mt-4">
                     <button className="btn-primary flex items-center gap-2">
                        <Save size={16} /> Save Profile
                     </button>
                     <button className="px-4 py-2 text-slate-400 text-xs font-bold hover:text-slate-600 uppercase tracking-widest">Cancel</button>
                  </div>
               </div>
            </div>

            <div className="card border-l-4 border-orange-500">
               <h3 className="font-bold text-slate-800 mb-2">Danger Zone</h3>
               <p className="text-xs text-slate-500 mb-6 italic leading-relaxed">
                  Permanently deleting your account or clearing the risk history registry. This action is irreversible.
               </p>
               <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg text-xs font-bold hover:bg-red-50 uppercase tracking-widest transition-all">
                  <Trash2 size={14} /> Clear System History
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Settings;
