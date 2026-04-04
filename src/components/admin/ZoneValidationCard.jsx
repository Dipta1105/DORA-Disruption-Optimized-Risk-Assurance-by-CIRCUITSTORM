import React from 'react';
import { 
  MapPin, 
  Target, 
  Navigation, 
  Map as MapIcon,
  ShieldCheck,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import Badge from '../common/Badge';

const ZoneValidationCard = ({ data }) => {
  if (!data) return null;

  const { userLoc, zoneCenter, radius, distance } = data;

  // Status determined by distance vs radius
  // Assuming distance and radius are strings like '1.2 km', we extract numeric part for logic
  const dVal = parseFloat(distance);
  const rVal = parseFloat(radius);
  const isInside = dVal <= rVal;

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mt-4 animate-slide-up">
      <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target size={14} className="text-primary-600" />
          <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest italic">Geospatial Validation Node</span>
        </div>
        <Badge 
          variant={isInside ? 'success' : 'danger'} 
          size="xs" 
          className="flex items-center gap-1.5"
        >
          {isInside ? <ShieldCheck size={12} /> : <XCircle size={12} />}
          {isInside ? 'Inside Zone' : 'Outside Zone'}
        </Badge>
      </div>
      
      <div className="p-5 space-y-6">
        {/* Comparison Points */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl border border-slate-100 text-primary-500 shadow-sm">
              <MapPin size={14} />
            </div>
            <div className="flex-1">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">User Coordinates</p>
              <p className="text-[10px] font-bold text-slate-600 italic">{userLoc}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl border border-slate-100 text-slate-400 shadow-sm">
              <Target size={14} />
            </div>
            <div className="flex-1">
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Disruption Hub Center</p>
              <p className="text-[10px] font-bold text-slate-600 italic">{zoneCenter}</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded-xl border border-slate-100 flex flex-col items-center">
            <MapIcon size={14} className="text-slate-400 mb-1" />
            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Station Radius</p>
            <p className="text-xs font-black text-slate-800 tracking-tighter">{radius}</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 flex flex-col items-center relative overflow-hidden group">
            <Navigation size={14} className={`mb-1 transition-colors ${!isInside ? 'text-red-500' : 'text-green-500'}`} />
            <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">User Proximity</p>
            <p className={`text-xs font-black tracking-tighter ${!isInside ? 'text-red-600' : 'text-slate-800'}`}>{distance}</p>
            {!isInside && (
               <div className="absolute top-0 right-0 p-1">
                  <AlertTriangle size={8} className="text-red-400 animate-pulse" />
               </div>
            )}
          </div>
        </div>

        {/* Proximity Summary */}
        <div className={`p-3 rounded-xl border flex items-center justify-between ${isInside ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
           <span className={`text-[9px] font-black uppercase tracking-widest italic ${isInside ? 'text-green-700' : 'text-red-700'}`}>
              {isInside ? 'Spatial Consistency Confirmed' : 'Geospatial Outlier Detected'}
           </span>
           <span className={`text-[9px] font-bold ${isInside ? 'text-green-600' : 'text-red-600'}`}>
              Delta: {isInside ? 'Within Limit' : `+${(dVal - rVal).toFixed(1)} km Over`}
           </span>
        </div>
      </div>
    </div>
  );
};

export default ZoneValidationCard;
