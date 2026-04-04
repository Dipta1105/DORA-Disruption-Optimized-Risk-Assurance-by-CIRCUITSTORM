import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useSidebar } from '../../context/SidebarContext';

const MainLayout = ({ children }) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-x-hidden">
      <Sidebar />
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? 'pl-20' : 'pl-64'
        }`}
      >
        <Header />
        <main className="p-8 animate-fade-in flex-1 max-w-[1600px] mx-auto w-full">
          {children}
        </main>
        
        <footer className="p-12 text-center text-slate-300 text-[10px] uppercase font-black tracking-[0.3em] italic border-t border-slate-50 mt-auto bg-white/40 select-none">
          &copy; {new Date().getFullYear()} Insurance Platform (Insurance) — Enterprise Risk Assurance System.
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
