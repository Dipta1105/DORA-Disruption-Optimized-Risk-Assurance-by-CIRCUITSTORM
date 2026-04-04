import React from 'react';
import { ShoppingCart, ShoppingBag, Zap, CheckCircle } from 'lucide-react';

const platforms = [
  { 
    id: 'zepto', 
    name: 'Zepto', 
    color: 'bg-purple-600', 
    icon: <Zap className="text-white" size={24} />,
    description: '10-minute delivery node'
  },
  { 
    id: 'blinkit', 
    name: 'Blinkit', 
    color: 'bg-yellow-400', 
    icon: <ShoppingBag className="text-slate-900" size={24} />,
    description: 'Instant commerce infrastructure'
  },
  { 
    id: 'instamart', 
    name: 'Instamart', 
    color: 'bg-orange-500', 
    icon: <ShoppingCart className="text-white" size={24} />,
    description: 'Swiggy ecosystem partner'
  }
];

const PlatformSelector = ({ value, onChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {platforms.map((platform) => (
        <div
          key={platform.id}
          onClick={() => onChange(platform.id)}
          className={`relative p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group ${
            value === platform.id 
              ? 'border-primary-600 bg-primary-50/50 shadow-xl shadow-primary-100' 
              : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg'
          }`}
        >
          {/* Active Checkmark */}
          {value === platform.id && (
            <div className="absolute top-4 right-4 text-primary-600 animate-slide-up">
              <CheckCircle size={20} />
            </div>
          )}

          {/* Background Highlight */}
          <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform ${platform.color}`}></div>

          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            {/* Logo Container */}
            <div className={`w-14 h-14 ${platform.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}>
              {platform.icon}
            </div>
            
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase italic tracking-widest">{platform.name}</h4>
              <p className="text-[10px] text-slate-400 font-bold lowercase italic opacity-80 mt-1">{platform.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformSelector;
