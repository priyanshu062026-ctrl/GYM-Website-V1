'use client';

import React from 'react';

/**
 * High-contrast fitness vector badge for high intensity workouts
 */
export const IntensityMeter: React.FC<{ level?: 'Medium' | 'High' | 'Elite'; className?: string }> = ({
  level = 'High',
  className = 'w-16 h-4',
}) => {
  const bars = level === 'Elite' ? 3 : level === 'High' ? 2 : 1;
  return (
    <div className={`flex items-center gap-1 ${className}`} title={`Intensity: ${level}`}>
      <span className={`h-2 w-3 rounded-xs ${bars >= 1 ? 'bg-amber-400' : 'bg-zinc-800'}`} />
      <span className={`h-2.5 w-3 rounded-xs ${bars >= 2 ? 'bg-amber-500' : 'bg-zinc-800'}`} />
      <span className={`h-3 w-3 rounded-xs ${bars >= 3 ? 'bg-rose-500' : 'bg-zinc-800'}`} />
      <span className="text-[10px] uppercase font-mono font-bold text-amber-300 ml-1">{level}</span>
    </div>
  );
};

/**
 * Muscle target group vector icon
 */
export const MuscleVector: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 5v14M18 5v14M3 8h3M3 16h3M18 8h3M18 16h3M6 12h12" />
  </svg>
);

/**
 * Recovery / Hydro Steam vector icon
 */
export const RecoveryVector: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

/**
 * Swipe Cue indicator for mobile carousels
 */
export const SwipeCue: React.FC<{ label?: string }> = ({ label = 'Swipe' }) => (
  <div className="flex md:hidden items-center justify-center gap-1.5 py-1 text-[11px] font-bold text-amber-400/80 uppercase tracking-widest animate-pulse">
    <span>← {label} →</span>
  </div>
);
