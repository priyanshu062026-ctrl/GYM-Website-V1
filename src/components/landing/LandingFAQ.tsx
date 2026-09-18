'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const LandingFAQ: React.FC = () => {
  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      {/* Dark Subtle Dotted Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-dense opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Everything You Need To Know
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
            Got questions before stepping on the floor? Find answers below or message our front desk.
          </p>
        </div>

        {/* Accordion driven by gymConfig.faqs */}
        <div className="space-y-3.5">
          {gymConfig.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bronze-panel rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden border border-[#38281d] transition-colors open:border-amber-500/50 open:bg-[#1a120d]"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-black text-sm sm:text-base text-white hover:text-amber-400 transition-colors uppercase tracking-tight">
                <span>{faq.question}</span>
                <span className="w-7 h-7 rounded-full bg-[#271b14] border border-amber-500/30 flex items-center justify-center text-amber-400 group-open:rotate-180 transition-transform shrink-0 ml-3">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="pt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal border-t border-[#2d1e13] mt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
