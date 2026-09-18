'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { ArrowRight, Star, ChevronRight, ShieldCheck, Flame } from 'lucide-react';

interface LandingHeroProps {
  onOpenTrialModal: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onOpenTrialModal }) => {
  const { hero } = gymConfig;
  const headlineParts = hero.headline.split('\n');

  return (
    <section className="relative min-h-[72vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-16 sm:pt-20 pb-12 sm:pb-20">
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={hero.backgroundImageUrl}
          alt={hero.backgroundImageAlt}
          className="w-full h-full object-cover object-center opacity-90 sm:opacity-85 transition-opacity"
          loading="eager"
        />

        {/* Crisp Lighting Overlays for Maximum Image Visibility & Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-transparent to-zinc-950/70" />
      </div>

      {/* Subtle Dotted Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none z-0" />

      {/* Ambient Cool Accent Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 2. Main Foreground Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-4 sm:space-y-7 pt-4 sm:pt-0">
          {/* Eyebrow Badge - Hidden on mobile per user preference to reduce whitespace and clutter */}
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            <span>{gymConfig.gymDetails.tagline}</span>
          </div>

          {/* Main Bold Headline */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.06] sm:leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {headlineParts[0]}
            {headlineParts[1] && (
              <>
                {' '}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-zinc-200 to-amber-300">
                  {headlineParts[1]}
                </span>
              </>
            )}
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed font-medium px-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
            <button
              onClick={onOpenTrialModal}
              className="group relative flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-xs sm:text-base tracking-wider uppercase shadow-[0_0_30px_rgba(225,29,72,0.4)] active:scale-[0.98] transition-all"
            >
              <span>{hero.primaryCtaLabel || 'JOIN NOW'}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#facilities"
              className="group flex items-center justify-center gap-1.5 px-6 py-3.5 sm:py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all active:scale-[0.98]"
            >
              <span>Explore Facilities</span>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Trust Metrics Strip */}
          <div className="pt-2 sm:pt-4 flex items-center justify-center gap-2.5 sm:gap-6 text-[11px] sm:text-sm font-semibold text-zinc-300">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                />
              ))}
              <span className="font-black text-white ml-1 text-xs sm:text-sm">
                {hero.socialProof.rating}
              </span>
            </div>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">{hero.socialProof.memberCount}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-rose-400 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
              {hero.socialProof.uspBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
