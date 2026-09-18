'use client';

import React from 'react';
import Link from 'next/link';
import { gymConfig } from '@/config/gym.config';
import { Dumbbell } from 'lucide-react';

export const LandingHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Clean Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Dumbbell className="w-5 h-5 text-white transform -rotate-45" />
          </div>
          <div>
            <div className="text-base sm:text-xl font-black tracking-wider uppercase text-white flex items-center gap-1.5">
              <span>{gymConfig.gymDetails.name.split(' ')[0]}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
                {gymConfig.gymDetails.name.split(' ').slice(1).join(' ')}
              </span>
            </div>
            <p className="hidden sm:block text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
              {gymConfig.gymDetails.tagline}
            </p>
          </div>
        </Link>

        {/* Clean nav bar with no links or clutter */}
      </div>
    </header>
  );
};
