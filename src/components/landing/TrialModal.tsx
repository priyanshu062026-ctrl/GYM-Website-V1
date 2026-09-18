'use client';

import React, { useState } from 'react';
import { gymConfig } from '@/config/gym.config';
import { GymStorage } from '@/lib/storage';
import { generateJoinNowWhatsAppLink, JoinNowData } from '@/lib/whatsapp';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  AtSign,
  Calendar,
  MessageSquare,
  Flame,
  Send,
  Dumbbell,
  BicepsFlexed,
  Activity,
  HeartPulse,
  Zap,
  Check,
  CreditCard,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface JoinNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GoalOption {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
}

const FITNESS_GOALS: GoalOption[] = [
  {
    id: 'muscle_bulk',
    label: 'Muscle & Hypertrophy',
    subtitle: 'Bulk up & pack lean mass',
    icon: <BicepsFlexed className="w-5 h-5 text-rose-500" />,
  },
  {
    id: 'fat_loss',
    label: 'Fat Loss & Shred',
    subtitle: 'Calorie burn & lean definition',
    icon: <Flame className="w-5 h-5 text-amber-500" />,
  },
  {
    id: 'power_strength',
    label: 'Strength & Power',
    subtitle: 'Squat, bench & deadlift PRs',
    icon: <Dumbbell className="w-5 h-5 text-yellow-500" />,
  },
  {
    id: 'crossfit_athletic',
    label: 'CrossFit & Conditioning',
    subtitle: 'Agility, turf sprints & core',
    icon: <Zap className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 'cardio_endurance',
    label: 'Running & Cardio',
    subtitle: 'Stamina & aerobic endurance',
    icon: <Activity className="w-5 h-5 text-emerald-500" />,
  },
  {
    id: 'general_health',
    label: 'Daily Fitness & Vitality',
    subtitle: 'Posture, mobility & wellness',
    icon: <HeartPulse className="w-5 h-5 text-rose-400" />,
  },
];

export const TrialModal: React.FC<JoinNowModalProps> = ({ isOpen, onClose }) => {
  // Step state: 1 = Personal & Social, 2 = Goals & Membership Plan, 3 = Confirmation
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [socialAccount, setSocialAccount] = useState('');
  const [age, setAge] = useState('');

  // Multi-select fitness goals
  const [selectedGoals, setSelectedGoals] = useState<string[]>([
    'Muscle & Hypertrophy',
  ]);

  // Membership Plan selection
  const [selectedPlan, setSelectedPlan] = useState<string>(
    'Quarterly Transformation (₹4,999 / 3 Months)'
  );

  const [specialMessage, setSpecialMessage] = useState('');

  // WhatsApp generated URL and Membership ID
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [memberApplicationId, setMemberApplicationId] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  // Toggle multi-select goals
  const toggleGoal = (goalLabel: string) => {
    setSelectedGoals((prev) => {
      if (prev.includes(goalLabel)) {
        if (prev.length === 1) return prev; // Keep at least one selected
        return prev.filter((g) => g !== goalLabel);
      } else {
        return [...prev, goalLabel];
      }
    });
  };

  // Step 1 Validation: Exact 10-digit mobile number & required name
  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) {
      errs.name = 'Full name is required';
    }

    const cleanPhone = phone.replace(/[^\d]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Mobile number is required';
    } else if (cleanPhone.length !== 10) {
      errs.phone = 'Please enter an exact 10-digit mobile number';
    }

    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (age.trim()) {
      const ageNum = parseInt(age, 10);
      if (isNaN(ageNum) || ageNum < 12 || ageNum > 90) {
        errs.age = 'Age must be between 12 and 90';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const appId = 'ADM-' + Math.floor(100000 + Math.random() * 900000);
    setMemberApplicationId(appId);

    const cleanPhone = phone.replace(/[^\d]/g, '');

    const data: JoinNowData = {
      name: name.trim(),
      phone: cleanPhone,
      email: email.trim() || undefined,
      address: address.trim() || undefined,
      socialAccount: socialAccount.trim() || undefined,
      age: age.trim() || undefined,
      fitnessGoals: selectedGoals,
      selectedPlan,
      specialMessage: specialMessage.trim() || undefined,
    };

    // Save lead to client storage
    GymStorage.addLead({
      name: data.name,
      phone: data.phone,
      email: data.email,
      fitnessGoal: data.fitnessGoals.join(', '),
      status: 'new',
      notes: `Admission #${appId}. Plan: ${data.selectedPlan}. Address: ${data.address || 'N/A'}, Age: ${data.age || 'N/A'}, Social: ${data.socialAccount || 'N/A'}, Note: ${data.specialMessage || 'N/A'}`,
    });

    // Generate link to +91 89273 39720
    const waLink = generateJoinNowWhatsAppLink(data);
    setWhatsAppUrl(waLink);

    // Transition to completion
    setStep(3);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setSocialAccount('');
    setAge('');
    setSelectedGoals(['Muscle & Hypertrophy']);
    setSelectedPlan('Quarterly Transformation (₹4,999 / 3 Months)');
    setSpecialMessage('');
    setErrors({});
    setStep(1);
    onClose();
  };

  const progressPercentage = step === 1 ? 33 : step === 2 ? 70 : 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-zinc-950/95 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Soft Ambient Corner Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 h-72 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header & Clean Progress Tracker */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Direct Admission Form
            </span>
            <span className="text-[11px] font-semibold text-zinc-400 ml-auto">
              Step {step} of 3
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2">
            <span>Join Now</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-rose-500">
              Registration
            </span>
          </h3>

          <p className="text-xs text-zinc-400 mt-1">
            {step === 1 && 'Enter your personal contact details to start your enrollment.'}
            {step === 2 && 'Select your fitness targets and choose your preferred membership plan.'}
            {step === 3 && 'Your application is prepared. Review your information and send now!'}
          </p>

          {/* Clean Stepper & Progress Bar */}
          <div className="mt-4 pt-2">
            <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-2">
              <span className={step >= 1 ? 'text-amber-400' : 'text-zinc-600'}>
                1. Personal &amp; Social
              </span>
              <span className={step >= 2 ? 'text-amber-400' : 'text-zinc-600'}>
                2. Goals &amp; Plan
              </span>
              <span className={step >= 3 ? 'text-emerald-400' : 'text-zinc-600'}>
                3. Confirmation
              </span>
            </div>
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body with Clean Spacing */}
        <div className="relative z-10 overflow-y-auto flex-1 pr-1.5 custom-scrollbar">
          {/* ═════════════════════════════════════════════════════════════ */}
          {/* STEP 1: PERSONAL & SOCIAL DETAILS                           */}
          {/* ═════════════════════════════════════════════════════════════ */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
                {errors.name && (
                  <p className="text-[11px] text-rose-400 mt-1 font-semibold flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Mobile Number & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                    10-Digit Mobile No <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none text-xs font-bold text-amber-400">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      value={phone}
                      onChange={(e) => {
                        // Strictly digits only and max 10 characters
                        const cleaned = e.target.value.replace(/[^\d]/g, '').slice(0, 10);
                        setPhone(cleaned);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                      }}
                      placeholder="8927339720"
                      className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500 rounded-xl pl-16 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all font-mono"
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-[11px] text-rose-400 mt-1 font-semibold flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  ) : (
                    <p className="text-[10px] text-zinc-500 mt-1">
                      Exact 10 digits without leading 0 or +91
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                    Age
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="number"
                      min="12"
                      max="90"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value.slice(0, 2));
                        if (errors.age) setErrors((prev) => ({ ...prev, age: '' }));
                      }}
                      placeholder="e.g. 24"
                      className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500 rounded-xl pl-10 pr-3 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                    />
                  </div>
                  {errors.age && (
                    <p className="text-[10px] text-rose-400 mt-1 font-semibold">{errors.age}</p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
                {errors.email && (
                  <p className="text-[10px] text-rose-400 mt-1 font-semibold">{errors.email}</p>
                )}
              </div>

              {/* Address / Locality */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Address / Locality
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. Adra Main Road, Railway Colony, Kashipur"
                    className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Social Account / Instagram */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Any Social Account / Instagram Handle
                </label>
                <div className="relative">
                  <AtSign className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={socialAccount}
                    onChange={(e) => setSocialAccount(e.target.value)}
                    placeholder="e.g. @rahul_fitness or instagram link"
                    className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Continue to Fitness Goals &amp; Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ═════════════════════════════════════════════════════════════ */}
          {/* STEP 2: MULTI-SELECT GOALS & MEMBERSHIP PLAN                */}
          {/* ═════════════════════════════════════════════════════════════ */}
          {step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              {/* 1. Multi-Select Fitness Goals - 2 Columns on Mobile for Clean Professional UI */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Select Fitness Targets</span>
                  </label>
                  <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                    Tap to Select
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {FITNESS_GOALS.map((goal) => {
                    const isSelected = selectedGoals.includes(goal.label);
                    return (
                      <button
                        type="button"
                        key={goal.id}
                        onClick={() => toggleGoal(goal.label)}
                        className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                            : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1.5">
                          <div className="p-1.5 rounded-xl bg-zinc-950 border border-zinc-800 shrink-0">
                            {goal.icon}
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 transition-all ${
                              isSelected
                                ? 'bg-amber-400 border-amber-400 text-black'
                                : 'border-zinc-700 bg-zinc-900'
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-black text-white block leading-tight">
                            {goal.label}
                          </span>
                          <span className="text-[10px] text-zinc-400 block mt-0.5 leading-tight truncate">
                            {goal.subtitle}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Membership Plan Selection - 2 Columns on Mobile with Badge Highlights */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-200 mb-2 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                  <span>Select Preferred Membership</span>
                </label>

                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {gymConfig.plans.map((plan) => {
                    const planLabel = `${plan.name} (₹${plan.price.toLocaleString()} / ${plan.duration})`;
                    const isSelected = selectedPlan === planLabel;
                    return (
                      <button
                        type="button"
                        key={plan.id}
                        onClick={() => setSelectedPlan(planLabel)}
                        className={`p-2.5 sm:p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-rose-500/10 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-[1.02]'
                            : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {plan.popular && (
                          <span className="absolute -top-1.5 right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 text-black text-[9px] font-black uppercase tracking-wider shadow-md">
                            Popular
                          </span>
                        )}
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                            {plan.duration}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-white block mt-0.5 leading-snug">
                            {plan.name}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-amber-400 block mt-1">
                            ₹{plan.price.toLocaleString()}
                          </span>
                        </div>

                        <div className="mt-2 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px]">
                          <span className="text-zinc-500 font-medium">Full Access</span>
                          <span
                            className={`font-black uppercase tracking-wider ${
                              isSelected ? 'text-amber-300' : 'text-zinc-500'
                            }`}
                          >
                            {isSelected ? '✓ Selected' : 'Select'}
                          </span>
                        </div>
                      </button>
                    );
                  })}

                  {/* Option: Decide later on floor */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPlan('I will decide later / Need Consultation on Floor')
                    }
                    className={`col-span-2 p-3 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      selectedPlan.includes('decide later')
                        ? 'bg-amber-500/15 border-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.25)]'
                        : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400 shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-black text-white block">
                          I will decide later on floor
                        </span>
                        <span className="text-[10px] text-zinc-400 block">
                          Visit gym, test facilities &amp; select plan with trainer
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border shrink-0 ${
                        selectedPlan.includes('decide later')
                          ? 'bg-amber-400 border-amber-400 text-black'
                          : 'border-zinc-700 bg-zinc-900'
                      }`}
                    >
                      {selectedPlan.includes('decide later') && (
                        <Check className="w-3 h-3 stroke-[3]" />
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* 3. Special Message / Notes */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>Special Note / Injury History (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={specialMessage}
                  onChange={(e) => setSpecialMessage(e.target.value)}
                  placeholder="e.g. Need morning coach assistance / Lower back sensitivity..."
                  className="w-full bg-zinc-900/90 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-zinc-800"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Review &amp; Proceed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ═════════════════════════════════════════════════════════════ */}
          {/* STEP 3: SENSE OF COMPLETION & SEND NOW                      */}
          {/* ═════════════════════════════════════════════════════════════ */}
          {step === 3 && (
            <div className="py-2 space-y-5 text-center">
              {/* Animated Success Badge */}
              <div className="relative mx-auto w-16 h-16">
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-md animate-pulse" />
                <div className="relative w-16 h-16 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Application Prepared
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-2">
                  Ready for Submission!
                </h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto mt-1 leading-relaxed">
                  Your registration summary has been formatted. Click <strong className="text-white">Send Now</strong> below to launch WhatsApp with your pre-entered inquiry ready to go!
                </p>
              </div>

              {/* Clean Summary Voucher */}
              <div className="bg-zinc-900/90 border border-amber-500/30 rounded-2xl p-5 text-left space-y-4 shadow-xl">
                {/* Header of summary */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white">
                      <Dumbbell className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-white">
                      {gymConfig.gymDetails.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-zinc-950 px-2.5 py-1 rounded-lg border border-amber-500/30">
                    {memberApplicationId}
                  </span>
                </div>

                {/* Grid of Applicant Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                      Applicant Name
                    </span>
                    <span className="font-bold text-white text-sm block mt-0.5">
                      {name}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                      Mobile Number
                    </span>
                    <span className="font-bold text-emerald-400 text-sm block mt-0.5 font-mono">
                      +91 {phone}
                    </span>
                  </div>

                  {age && (
                    <div>
                      <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                        Age
                      </span>
                      <span className="text-zinc-200 block mt-0.5">{age} Years</span>
                    </div>
                  )}

                  {email && (
                    <div className="truncate">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                        Email Address
                      </span>
                      <span className="text-zinc-200 block mt-0.5 truncate">{email}</span>
                    </div>
                  )}

                  {address && (
                    <div className="sm:col-span-2">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                        Location / Address
                      </span>
                      <span className="text-zinc-200 block mt-0.5">{address}</span>
                    </div>
                  )}

                  {socialAccount && (
                    <div className="sm:col-span-2">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                        Social / Instagram Handle
                      </span>
                      <span className="text-amber-300 block mt-0.5 font-medium">
                        {socialAccount}
                      </span>
                    </div>
                  )}

                  {/* Selected Goals Display */}
                  <div className="sm:col-span-2 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800">
                    <span className="text-[10px] text-amber-400 font-black uppercase block mb-1">
                      Fitness Targets ({selectedGoals.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {selectedGoals.map((g) => (
                        <span
                          key={g}
                          className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Selected Package */}
                  <div className="sm:col-span-2 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800">
                    <span className="text-[10px] text-zinc-400 font-black uppercase block">
                      Chosen Membership
                    </span>
                    <span className="text-white font-bold text-xs mt-0.5 block">
                      {selectedPlan}
                    </span>
                  </div>

                  {specialMessage && (
                    <div className="sm:col-span-2 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800">
                      <span className="text-[10px] text-zinc-400 font-black uppercase block">
                        Special Instructions
                      </span>
                      <span className="text-zinc-300 text-xs italic mt-0.5 block">
                        &ldquo;{specialMessage}&rdquo;
                      </span>
                    </div>
                  )}
                </div>

                {/* Direct destination tag */}
                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Inquiry Recipient:</span>
                  <span className="font-mono font-bold text-white flex items-center gap-1.5">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                    {gymConfig.gymDetails.displayPhone || '+91 62942 80885'}
                  </span>
                </div>
              </div>

              {/* Main Primary Action: Send Now */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.35)] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Now</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-zinc-800"
                >
                  Close &bull; Finish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
