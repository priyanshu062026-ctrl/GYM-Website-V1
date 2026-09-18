'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { ShieldCheck, UserCheck } from 'lucide-react';
import { SwipeCue } from '@/components/ui/FitnessVectors';

export const KnowYourTrainers: React.FC = () => {
  return (
    <section id="trainers" className="relative py-14 sm:py-24 bg-zinc-950 overflow-hidden border-b border-zinc-900">
      {/* Dark Subtle Dotted Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-dense opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" />
              Certified Coaching Roster
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Know Your Trainers
            </h2>
          </div>
          <SwipeCue label="Swipe Coaches" />
        </div>

        {/* Horizontal Snap Carousel on Mobile, 3-Col Grid on Desktop */}
        <div className="overflow-x-auto flex flex-nowrap snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6">
          {gymConfig.trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none bronze-panel rounded-3xl overflow-hidden shadow-2xl border border-[#38281d] hover:border-amber-500/50 transition-all duration-300 flex flex-col group"
            >
              {/* Photo Frame with subtle fade */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  loading="lazy"
                />
                {/* Gradient Fade to Black/Bronze */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#150f0b] via-[#150f0b]/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3 bg-[#0a0705]/90 border border-amber-500/40 rounded-full px-2.5 py-0.5 shadow-lg backdrop-blur-md">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                    {trainer.experience} Exp.
                  </span>
                </div>
              </div>

              {/* Trainer Meta Card */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-500">
                    {trainer.role}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mt-0.5 truncate">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold mt-1 truncate">
                    {trainer.specialization}
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2 font-normal line-clamp-2 sm:line-clamp-none">
                    {trainer.bio}
                  </p>
                </div>

                {/* Certifications Badge Pills */}
                <div className="pt-3 mt-3 border-t border-[#2e2017]">
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.certifications.slice(0, 3).map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#22160f] border border-[#422c1f] text-[10px] font-bold text-amber-200"
                      >
                        <ShieldCheck className="w-2.5 h-2.5 text-amber-400" />
                        <span>{cert}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
