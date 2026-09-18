'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { Dumbbell, Flame, Activity, Award, Users, Sparkles, LucideIcon, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { IntensityMeter, SwipeCue } from '@/components/ui/FitnessVectors';

const ICON_MAP: Record<string, LucideIcon> = {
  Dumbbell,
  Flame,
  Activity,
  Award,
  Users,
  Sparkles,
};

const INTENSITY_MAP: Record<string, 'Medium' | 'High' | 'Elite'> = {
  'prog-strength': 'Elite',
  'prog-crossfit': 'Elite',
  'prog-cardio': 'High',
  'prog-pt': 'Elite',
  'prog-group': 'High',
  'prog-recovery': 'Medium',
};

interface ProgramsSectionProps {
  onOpenTrialModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenTrialModal }) => {
  const handleProgramInquire = (title: string) => {
    const msg = `Hi ${gymConfig.gymDetails.name}! I am interested in joining your *${title}* program. Could you share slot timings and coach details?`;
    const url = buildWhatsAppLink(gymConfig.gymDetails.whatsapp, msg);
    window.open(url, '_blank');
  };

  return (
    <section id="programs" className="relative py-14 sm:py-24 bg-zinc-950 overflow-hidden border-b border-zinc-900">
      {/* Dark Subtle Dotted Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-dense opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              Targeted Disciplines
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Workout Programs
            </h2>
          </div>
          <SwipeCue label="Swipe Programs" />
        </div>

        {/* Horizontal Snap Carousel on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto flex flex-nowrap snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {gymConfig.programs.map((program) => {
            const Icon = ICON_MAP[program.icon] ?? Dumbbell;
            const intensity = INTENSITY_MAP[program.id] || 'High';
            return (
              <div
                key={program.id}
                className="w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none bronze-panel rounded-3xl p-5 sm:p-6 shadow-xl border border-[#38281d] hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/20 to-rose-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-amber-300" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {program.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                    {program.title}
                  </h3>

                  {/* Intensity Vector Meter */}
                  <div className="mt-2 mb-2 flex items-center justify-between bg-[#120c08] border border-[#2d1e14] px-2.5 py-1 rounded-lg">
                    <span className="text-[10px] uppercase font-bold text-zinc-400">Burn Index</span>
                    <IntensityMeter level={intensity} />
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-medium line-clamp-2 sm:line-clamp-none">
                    {program.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#2e2017] flex items-center justify-between">
                  <button
                    onClick={() => handleProgramInquire(program.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Inquire Slot</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenTrialModal}
                    className="text-[10px] font-bold text-amber-400 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Join Now
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
