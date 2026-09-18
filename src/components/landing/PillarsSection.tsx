'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { Dumbbell, Flame, Sparkles, Activity, Award, Users, Star, ArrowRight, LucideIcon, Wifi, Bath, Users2, Snowflake, Droplets, Lock, CheckCircle2 } from 'lucide-react';
import { SwipeCue } from '@/components/ui/FitnessVectors';

const ICON_MAP: Record<string, LucideIcon> = {
  Dumbbell,
  Flame,
  Sparkles,
  Activity,
  Award,
  Users,
  Star,
};

interface PillarsSectionProps {
  onOpenTrialModal: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="facilities" className="relative py-16 sm:py-24 bg-black overflow-hidden border-b border-zinc-900">
      {/* Dark Subtle Dotted Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,24,27,0.8),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              Engineered for Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Floor &amp; Facilities
            </h2>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-black font-black text-xs uppercase tracking-wider shadow-md hover:opacity-95 active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Eye-Attracting Sanctuary Amenities Bar */}
        <div className="mb-8 bronze-panel rounded-2xl p-4 sm:p-5 border border-amber-500/20 shadow-xl bg-zinc-950/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3 border-b border-[#38281d] pb-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Floor Comforts &amp; Hygiene Facilities
            </span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider hidden sm:inline">
              Included for All Members
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {/* Restrooms */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#17100b] border border-emerald-500/20 shadow-sm">
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-zinc-200">Restroom</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-black uppercase">
                YES
              </span>
            </div>

            {/* Gender Neutral Toilets */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#17100b] border border-emerald-500/20 shadow-sm">
              <div className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-bold text-zinc-200 leading-tight">Gender Neutral</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-black uppercase">
                YES
              </span>
            </div>

            {/* Free Wi-Fi */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#17100b] border border-cyan-500/20 shadow-sm">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-bold text-zinc-200">Free Wi-Fi</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-black uppercase">
                YES
              </span>
            </div>

            {/* AC */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#17100b] border border-sky-500/20 shadow-sm">
              <div className="flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-bold text-zinc-200">Air-Con</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-[10px] font-black uppercase">
                YES
              </span>
            </div>

            {/* Purified Water */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#17100b] border border-teal-500/20 shadow-sm">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs font-bold text-zinc-200">RO Water</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-[10px] font-black uppercase">
                YES
              </span>
            </div>

            {/* Lockers */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#17100b] border border-amber-500/20 shadow-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-zinc-200">Lockers</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-black uppercase">
                YES
              </span>
            </div>
          </div>
        </div>

        <SwipeCue label="Swipe Facilities" />

        <div className="overflow-x-auto flex flex-nowrap snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6">
          {gymConfig.pillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon] ?? Dumbbell;
            return (
              <div
                key={pillar.id}
                className={`w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none group relative rounded-3xl overflow-hidden bg-[#0c0907] border border-[#2d1e13] ${pillar.borderGlow} transition-all duration-300 flex flex-col shadow-xl`}
              >
                {/* Smaller, sleeker image height (h-36 sm:h-44) */}
                <div className="relative h-36 sm:h-44 w-full overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${pillar.badgeClass}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {pillar.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
