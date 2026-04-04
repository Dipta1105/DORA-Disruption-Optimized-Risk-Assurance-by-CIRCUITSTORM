import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  User, 
  ChevronRight, 
  Grid, 
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Clock
} from 'lucide-react';

const Header = () => {
  const location = useLocation();

  // Helper to get formatted page title from route
  const getPageInfo = () => {
    const path = location.pathname;
    if (path === '/' || path === '/insurance/dashboard') return { title: 'Worker Dashboard', icon: <Grid size={18} />, parent: 'Home' };
    if (path === '/insurance/onboarding') return { title: 'Onboarding', icon: <ChevronRight size={18} />, parent: 'Operations' };
    if (path === '/insurance/plans') return { title: 'Insurance Plans', icon: <ChevronRight size={18} />, parent: 'Operations' };
    if (path === '/insurance/policy') return { title: 'Policy Portfolio', icon: <ChevronRight size={18} />, parent: 'Operations' };
    if (path === '/insurance/claims') return { title: 'Claims Management', icon: <ChevronRight size={18} />, parent: 'Operations' };
    if (path.includes('/insurance/claims/')) return { title: 'Investigation File', icon: <ChevronRight size={18} />, parent: 'Claims' };
    if (path === '/insurance/wallet') return { title: 'Fund Ledger', icon: <ChevronRight size={18} />, parent: 'Finance' };
    if (path === '/insurance/alerts') return { title: 'Alerts Center', icon: <ChevronRight size={18} />, parent: 'Safety' };
    if (path === '/insurance/admin/dashboard') return { title: 'Admin Overview', icon: <Shield size={18} />, parent: 'Administration' };
    if (path === '/insurance/admin/triggers') return { title: 'Trigger Logic', icon: <Zap size={18} />, parent: 'Administration' };
    if (path === '/insurance/admin/fraud-review') return { title: 'Fraud Review', icon: <Clock size={18} />, parent: 'Administration' };
    if (path === '/insurance/settings') return { title: 'Platform Settings', icon: <Settings size={18} />, parent: 'System' };
    return { title: 'Insurance Resource', icon: <Grid size={18} />, parent: 'Platform' };
  };

  const { title, parent } = getPageInfo();

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40 flex items-center justify-between px-8 transition-all">
      {/* Left Area: Breadcrumbs & Dynamic Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-300 uppercase tracking-widest italic select-none">
          <Link to="/insurance/dashboard" className="hover:text-primary-600 transition-colors">Insurance Platform</Link>
          <ChevronRight size={10} className="mt-0.5" />
          <span className="text-slate-400">{parent}</span>
        </div>
        <h2 className="text-xl font-black text-slate-800 tracking-tighter uppercase italic opacity-90 select-none animate-reveal-text">
          {title}
        </h2>
      </div>

      {/* Center Area: Search (Visual Only for MVP) */}
      <div className="flex-1 max-w-lg mx-12 hidden md:block relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-primary-500 transition-colors">
          <Search size={16} />
        </div>
        <input 
          type="text" 
          placeholder="Search for claim ids, policies, or disruption nodes..." 
          className="w-full pl-11 pr-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-2xl text-[13px] font-bold text-slate-600 placeholder:text-slate-300 placeholder:italic focus:outline-none focus:ring-1 focus:ring-primary-100 focus:bg-white focus:border-primary-300 transition-all shadow-inner-sm"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
           <span className="text-[10px] font-black text-slate-200 border border-slate-100 px-1.5 py-0.5 rounded uppercase select-none">⌘K</span>
        </div>
      </div>

      {/* Right Area: Utility & User Profile */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-slate-50 hover:bg-white hover:shadow-md transition-all rounded-xl text-slate-400 hover:text-primary-600 border border-transparent hover:border-primary-100 group">
             <HelpCircle size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
          
          <div className="relative">
             <button className="p-2.5 bg-slate-50 hover:bg-white hover:shadow-md transition-all rounded-xl text-slate-400 hover:text-red-500 border border-transparent hover:border-red-100 group">
                <Bell size={20} className="group-hover:animate-shake" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
             </button>
          </div>
        </div>

        <div className="h-8 w-px bg-slate-100 mx-2"></div>

        <div className="flex items-center gap-4 cursor-pointer group hover:bg-slate-50/50 p-2 rounded-2xl transition-all">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-slate-800 uppercase tracking-tighter leading-none mb-1 group-hover:text-primary-700 transition-colors">Antar Agarwal</p>
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest italic opacity-80">Risk Analyst Lvl 4</p>
          </div>
          <div className="relative">
             <div className="w-11 h-11 bg-primary-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg shadow-primary-100 transform group-hover:rotate-12 transition-all">
                AA
             </div>
             <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
