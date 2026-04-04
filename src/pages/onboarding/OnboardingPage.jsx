import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Lock, 
  User, 
  Grid, 
  CreditCard, 
  MapPin, 
  Layers, 
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import PlatformSelector from '../../components/common/PlatformSelector';
import { onboardingService } from '../../services/onboardingService';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    otp: '',
    name: '',
    platform: '',
    upi: '',
    gpsAllowed: false,
    planId: 'PLAN-002',
    exclusionsAgreed: false
  });

  const totalSteps = 8;

  const handleNext = async () => {
    if (step === 1) {
      setLoading(true);
      await onboardingService.enrollClient({ phone: formData.phone }); // Mock call
      setLoading(false);
      setStep(2);
    } else if (step === 2) {
      setLoading(true);
      await onboardingService.enrollClient({ otp: formData.otp }); // Mock call
      setLoading(false);
      setStep(3);
    } else if (step === totalSteps) {
      setLoading(true);
      await onboardingService.enrollClient(formData); // Final registration mock call
      setLoading(false);
      navigate('/insurance/dashboard');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-800 uppercase italic">Mobile Identification</h3>
            <p className="text-xs text-slate-400 font-medium italic mb-4 lowercase">Enter your registered phone number to receive a secure Insurance node access code.</p>
            <Input 
              label="Phone Number" 
              placeholder="+91-0000000000" 
              icon={<Phone size={18} />} 
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
             <h3 className="text-xl font-black text-slate-800 uppercase italic">OTP Verification</h3>
             <p className="text-xs text-slate-400 font-medium italic mb-4 lowercase">A 6-digit identification code has been sent to your primary node terminal.</p>
             <Input 
                label="Access Code" 
                placeholder="000000" 
                icon={<Lock size={18} />} 
                value={formData.otp}
                onChange={(e) => updateField('otp', e.target.value)}
             />
             <p className="text-[10px] text-primary-600 font-black cursor-pointer uppercase tracking-widest italic hover:underline">Resend Code</p>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-800 uppercase italic">Identify Profile</h3>
            <p className="text-xs text-slate-400 font-medium italic mb-4 lowercase">Please provide your legal full name for KYC and disruption payout processing.</p>
            <Input 
              label="Full Name" 
              placeholder="Antar Agarwal" 
              icon={<User size={18} />} 
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-800 uppercase italic">Platform Selection</h3>
            <p className="text-xs text-slate-400 font-medium italic mb-4 lowercase">Select the primary ecosystem you operate within for disruption monitoring (India Q-Commerce).</p>
            <PlatformSelector 
              value={formData.platform}
              onChange={(val) => updateField('platform', val)}
            />
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-800 uppercase italic">Payout Configuration</h3>
            <p className="text-xs text-slate-400 font-medium italic mb-4 lowercase">Your primary UPI ID for instant disruption payouts from the escrow fund.</p>
            <Input 
              label="UPI ID" 
              placeholder="antar@upi" 
              icon={<CreditCard size={18} />} 
              value={formData.upi}
              onChange={(e) => updateField('upi', e.target.value)}
            />
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 animate-fade-in text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-3xl mx-auto flex items-center justify-center text-primary-600 mb-4 shadow-lg shadow-primary-50">
               <MapPin size={32} />
            </div>
            <h3 className="text-xl font-black text-slate-800 uppercase italic">GPS Monitoring Node</h3>
            <p className="text-xs text-slate-400 font-medium italic leading-relaxed lowercase mb-8">
              We require dynamic location access to verify regional disruption signals (floods, protests, outages) against your operational zone.
            </p>
            <Button 
                variant={formData.gpsAllowed ? 'primary' : 'outline'} 
                className="w-full h-14"
                onClick={() => updateField('gpsAllowed', !formData.gpsAllowed)}
            >
               {formData.gpsAllowed ? 'Permission Granted' : 'Authorize Platform GPS'}
            </Button>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-800 uppercase italic">Coverage Strategy</h3>
            <p className="text-xs text-slate-400 font-medium italic mb-4 lowercase">Select your disruption protection level (modifiable anytime).</p>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { id: 'PLAN-001', label: 'Basic Trace ($29/mo)', desc: '90% Coverage of predicted earnings' },
                 { id: 'PLAN-002', label: 'Global Pulse ($99/mo)', desc: '95% Coverage + Priority Payouts' },
                 { id: 'PLAN-003', label: 'Enterprise Shield ($249/mo)', desc: '100% Coverage + Node Insights' }
               ].map((p) => (
                 <div 
                  key={p.id} 
                  onClick={() => updateField('planId', p.id)}
                  className={`p-4 border-2 rounded-2xl cursor-pointer transition-all ${formData.planId === p.id ? 'border-primary-600 bg-primary-50/50' : 'border-slate-100 hover:border-slate-200'}`}
                 >
                    <div className="flex items-center justify-between mb-1">
                       <span className="text-sm font-black text-slate-800 uppercase italic">{p.label}</span>
                       {formData.planId === p.id && <CheckCircle2 className="text-primary-600" size={16} />}
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold lowercase italic">{p.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-black text-slate-800 uppercase italic">Exclusions & Risk</h3>
            <p className="text-xs text-slate-400 font-medium italic mb-6 lowercase">Please acknowledge the system constraints for disruption-based claims.</p>
            <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl space-y-3">
               <div className="flex gap-3">
                  <AlertTriangle className="text-orange-600 flex-shrink-0" size={18} />
                  <p className="text-[10px] text-orange-800 font-bold leading-relaxed italic uppercase tracking-tighter">
                    Coverage excludes self-induced disruption, voluntary node logout, or non-verified regional signal interference.
                  </p>
               </div>
               <div className="flex items-center gap-3 pt-4 border-t border-orange-200 cursor-pointer" onClick={() => updateField('exclusionsAgreed', !formData.exclusionsAgreed)}>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${formData.exclusionsAgreed ? 'bg-orange-600 border-orange-600' : 'border-orange-300 bg-white'}`}>
                    {formData.exclusionsAgreed && <CheckCircle2 className="text-white" size={12} />}
                  </div>
                  <span className="text-[10px] font-black text-orange-900 uppercase tracking-widest italic">Acknowledge & Sync</span>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center max-w-lg mx-auto py-12">
      {/* Progress Indicators */}
      <div className="flex justify-between items-center mb-12">
         {Array.from({ length: totalSteps }).map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 flex-1 rounded-full mx-0.5 transition-all duration-700 ${idx + 1 <= step ? 'bg-primary-600' : 'bg-slate-100'}`}
            ></div>
         ))}
      </div>

      <Card 
        className="shadow-2xl shadow-slate-200 border-none relative overflow-hidden" 
        bodyClassName="p-10"
        footer={
           <div className="flex gap-4">
              {step > 1 && (
                <Button variant="ghost" onClick={handleBack} className="text-slate-400 hover:text-slate-600 p-0 w-12 h-12 rounded-full border border-slate-50">
                   <ChevronLeft size={24} />
                </Button>
              )}
              <Button 
                onClick={handleNext} 
                disabled={loading || (step === 6 && !formData.gpsAllowed) || (step === 8 && !formData.exclusionsAgreed)}
                className="flex-1 h-12 gap-2 text-xs font-black shadow-lg shadow-primary-200 animate-slide-up"
              >
                {loading ? 'Processing Node...' : step === totalSteps ? 'Finalize Enrollment' : 'Continue'}
                {!loading && step < totalSteps && <ChevronRight size={16} />}
                {step === totalSteps && <ShieldCheck size={16} />}
              </Button>
           </div>
        }
      >
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-all duration-1000">
           <Layers size={210} className="text-primary-600" />
        </div>
        
        <div className="relative z-10 min-h-[300px] flex flex-col justify-center">
            {renderStep()}
        </div>
      </Card>

      <p className="mt-8 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] italic opacity-50">
        Insurance Insurance Secure Enrollment Node #{Math.floor(Math.random() * 9000) + 1000}
      </p>
    </div>
  );
};

export default OnboardingPage;
