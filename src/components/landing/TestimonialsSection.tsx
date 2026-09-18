'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { Star, Quote, Award, Sparkles } from 'lucide-react';
import { SwipeCue } from '@/components/ui/FitnessVectors';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-24 bg-zinc-950 text-white relative border-b border-zinc-900 overflow-hidden">
      {/* Background Accent Light */}
      <div className="absolute inset-0 bg-dot-pattern-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-amber-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
              <Award className="w-3 h-3" />
              Verified Results &bull; Real Proof
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Transformations</span>
            </h2>
          </div>
          <SwipeCue label="Swipe Proof" />
        </div>

        {/* Horizontal Snap Carousel on Mobile, 3-Col Grid on Desktop */}
        <div className="overflow-x-auto flex flex-nowrap snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6">
          {gymConfig.testimonials.map((test) => (
            <div
              key={test.id}
              className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none bronze-panel rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-[#38281d] hover:border-amber-500/40 transition-all duration-300 shadow-xl space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-amber-500/40" />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-3 border-t border-[#2d1e13]">
                <div
                  className="w-11 h-11 rounded-full bg-cover bg-center border-2 border-amber-500/60 shrink-0 shadow-md"
                  style={{ backgroundImage: `url('${test.image}')` }}
                />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider truncate">
                    {test.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-400 truncate mt-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                    {test.transformation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
