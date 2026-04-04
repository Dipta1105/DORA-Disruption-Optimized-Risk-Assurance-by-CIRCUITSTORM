import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  UserPlus, 
  Layers, 
  FileCheck, 
  LayoutDashboard, 
  ClipboardCheck, 
  Wallet, 
  Bell, 
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Circle,
  Shield,
  AlertTriangle,
  CheckCircle,
  Activity
} from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  const menuSections = [
    {
      title: 'Operations',
      items: [
        { title: 'Onboarding', icon: <UserPlus size={18} />, path: '/insurance/onboarding' },
        { title: 'Plans', icon: <Layers size={18} />, path: '/insurance/plans' },
        { title: 'Policy', icon: <FileCheck size={18} />, path: '/insurance/policy' },
        { title: 'Worker Dashboard', icon: <LayoutDashboard size={18} />, path: '/insurance/dashboard' },
        { title: 'Claims', icon: <ClipboardCheck size={18} />, path: '/insurance/claims' },
      ]
    },
    {
      title: 'Finance & Safety',
      items: [
        { title: 'Wallet', icon: <Wallet size={18} />, path: '/insurance/wallet' },
        { title: 'Alerts', icon: <Bell size={18} />, path: '/insurance/alerts' },
      ]
    },
    {
      title: 'Administration',
      items: [
        { title: 'Admin Dashboard', icon: <Shield size={18} />, path: '/insurance/admin/dashboard' },
        { title: 'Trigger Monitoring', icon: <Activity size={18} />, path: '/insurance/admin/triggers' },
        { title: 'Fraud Review', icon: <AlertTriangle size={18} />, path: '/insurance/admin/fraud-review' },
      ]
    }
  ];

  return (
    <div 
      className={`fixed left-0 top-0 h-screen bg-white border-r border-slate-100 z-50 flex flex-col transition-all duration-300 shadow-sm ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Logo */}
      <div className={`p-6 flex items-center gap-3 ${isCollapsed ? 'justify-center focus:bg-slate-50 rounded-2xl cursor-pointer transition-all' : ''}`}>
        <div className="p-2 bg-primary-600 rounded-xl shadow-lg shadow-primary-100 flex-shrink-0 animate-fade-in group">
           <Shield className="text-white group-hover:rotate-12 transition-transform" size={24} />
        </div>
        {!isCollapsed && (
          <div className="animate-fade-in overflow-hidden whitespace-nowrap">
            <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase leading-none">Insurance</h1>
            <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest italic opacity-60">Platform Insurance</p>
          </div>
        )}
      </div>

      {/* Collapse Toggle */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-20 w-6 h-6 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-100 shadow-sm transition-all z-10"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Navigation Space */}
      <nav className="flex-1 px-3 space-y-6 overflow-y-auto pt-4 scrollbar-hide pb-8">
        {menuSections.map((section, idx) => (
          <div key={idx} className="space-y-1">
             {!isCollapsed && (
                <h3 className="px-4 text-[9px] font-black text-slate-300 tracking-[0.2em] italic mb-3 animate-fade-in opacity-80 select-none uppercase">
                  {section.title}
                </h3>
             )}
             {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `sidebar-link group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary-50 text-primary-700 shadow-sm shadow-primary-50/50' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    } ${isCollapsed ? 'justify-center pb-3' : ''}`
                  }
                  title={isCollapsed ? item.title : ''}
                >
                  <div className={`flex-shrink-0 transition-transform group-hover:scale-110 ${isCollapsed ? '' : ''}`}>
                    {item.icon}
                  </div>
                  {!isCollapsed && (
                    <span className="font-bold text-[13px] tracking-tight whitespace-nowrap uppercase italic animate-fade-in leading-none">
                      {item.title}
                    </span>
                  )}
                  {(!isCollapsed && window.location.pathname === item.path) && (
                    <div className="ml-auto w-1.5 h-1.5 bg-primary-600 rounded-full shadow-sm animate-pulse"></div>
                  )}
                </NavLink>
             ))}
          </div>
        ))}
      </nav>

      {/* Footer / System Status */}
      <div className={`p-6 border-t border-slate-50 transition-all ${isCollapsed ? 'items-center' : ''}`}>
         {!isCollapsed ? (
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-sm">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-green-200"></div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic leading-none whitespace-nowrap">System Operational</span>
            </div>
         ) : (
            <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 mx-auto transform hover:rotate-12 cursor-pointer transition-transform">
               <div className="w-2 h-2 bg-green-500 rounded-full shadow-green-100"></div>
            </div>
         )}
      </div>
    </div>
  );
};

export default Sidebar;
