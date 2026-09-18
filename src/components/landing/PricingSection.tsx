'use client';

import React from 'react';
import { gymConfig, GymPlan } from '@/config/gym.config';
import { Check, Sparkles, Zap } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { generatePlanEnrollLink } from '@/lib/whatsapp';
import { SwipeCue } from '@/components/ui/FitnessVectors';

interface PricingSectionProps {
  onOpenTrialModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrialModal }) => {
  const currency = gymConfig.billing.currencySymbol;

  const handleEnroll = (plan: GymPlan) => {
    const url = generatePlanEnrollLink(plan.name, plan.price);
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-14 sm:py-24 bg-black text-white relative border-b border-zinc-900 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-600/10 border border-rose-500/20 text-rose-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
              <Zap className="w-3 h-3" />
              Transparent Pricing &bull; Zero Hidden Fees
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              Membership <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Plans</span>
            </h2>
          </div>
          <SwipeCue label="Swipe Plans" />
        </div>

        {/* Pricing Cards Horizontal Snap Carousel on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto flex flex-nowrap snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 items-stretch">
          {gymConfig.plans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#20150e] to-black border-2 border-amber-500 shadow-2xl shadow-amber-500/20 lg:-translate-y-2'
                    : 'bronze-panel border border-[#38281d] hover:border-zinc-700'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-black text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="border-b border-[#2e2017] pb-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      {plan.duration}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase mt-0.5 truncate">
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {currency}{plan.price.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-semibold">
                        / {plan.durationMonths === 1 ? 'mo' : `${plan.durationMonths}m`}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-5 text-xs text-zinc-300">
                    {plan.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-tight">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-2 h-2" />
                        </div>
                        <span className="text-[11px] sm:text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#2e2017] space-y-2">
                  <button
                    onClick={() => handleEnroll(plan)}
                    className={`w-full py-2.5 sm:py-3 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                      isPopular
                        ? 'bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-black shadow-lg shadow-amber-500/20 hover:opacity-95'
                        : 'bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-700/60'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Enroll on WhatsApp</span>
                  </button>

                  <button
                    onClick={onOpenTrialModal}
                    className="w-full py-1 text-center text-[10px] font-bold text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    Or Register Admission Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
