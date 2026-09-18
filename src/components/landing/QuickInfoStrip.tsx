'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { Clock, MapPin, Phone, Navigation, ShieldCheck, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { generateVisitorInquiryLink } from '@/lib/whatsapp';

export const QuickInfoStrip: React.FC = () => {
  const whatsappUrl = generateVisitorInquiryLink();

  return (
    <section className="hidden md:block relative -mt-6 sm:-mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Floating Glassmorphism Command Panel */}
      <div className="bronze-panel rounded-3xl p-4 sm:p-6 border border-amber-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        {/* Top Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#352316]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
              Open Today
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-xs text-zinc-300 font-bold">
              {gymConfig.gymDetails.operatingHours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold text-amber-300/90 uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Valet Parking Available
            </span>
            <span className="hidden sm:inline text-zinc-600">&bull;</span>
            <span className="hidden sm:inline">Certified Floor Coaches</span>
          </div>
        </div>

        {/* 3 Redesigned Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Operating Hours */}
          <div className="bg-[#150e09]/80 border border-[#382619] rounded-2xl p-4 flex items-start gap-3.5 hover:border-amber-500/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                Floor Timings
              </span>
              <div className="text-sm font-black text-white mt-0.5 truncate">
                {gymConfig.gymDetails.operatingHours.weekdays}
              </div>
              <div className="text-[11px] text-zinc-400 mt-1 flex flex-wrap gap-x-2">
                <span>Sat: {gymConfig.gymDetails.operatingHours.saturday}</span>
                <span>&bull;</span>
                <span className="text-amber-300 font-semibold">Sun: {gymConfig.gymDetails.operatingHours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Location with Direct Map Jump */}
          <div className="bg-[#150e09]/80 border border-[#382619] rounded-2xl p-4 flex items-start gap-3.5 hover:border-amber-500/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500/20 to-amber-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Location
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 hover:text-yellow-300 transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>View Map</span>
                </a>
              </div>
              <div className="text-sm font-black text-white mt-0.5 truncate">
                {gymConfig.gymDetails.landmark}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 truncate">
                {gymConfig.gymDetails.address}, {gymConfig.gymDetails.city}
              </p>
            </div>
          </div>

          {/* Card 3: Quick Dial & WhatsApp */}
          <div className="bg-[#150e09]/80 border border-[#382619] rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors">
            <div className="min-w-0">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                Front Desk Direct
              </span>
              <a
                href={`tel:${gymConfig.gymDetails.phone.replace(/[^0-9+]/g, '')}`}
                className="text-sm font-black text-white hover:text-amber-300 transition-colors block truncate mt-0.5"
              >
                {gymConfig.gymDetails.displayPhone}
              </a>
              <span className="text-[11px] text-zinc-400 block truncate mt-0.5">
                Instant WhatsApp &amp; Call Support
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Phone Call */}
              <a
                href={`tel:${gymConfig.gymDetails.phone.replace(/[^0-9+]/g, '')}`}
                aria-label="Call Gym Front Desk"
                className="w-10 h-10 rounded-xl bg-[#231710] border border-[#3d291c] flex items-center justify-center text-amber-300 hover:text-white hover:bg-[#322015] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Official WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-900/30 active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-4 pt-3 border-t border-[#2d1e14] flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Olympic Weights &bull; Commercial Cardio &bull; Steam &bull; Locker Suites</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Chat directly with gym manager</span>
          </a>
        </div>
      </div>
    </section>
  );
};
