'use client';

import React, { useState, useMemo } from 'react';
import { gymConfig } from '@/config/gym.config';
import { Camera } from 'lucide-react';
import { SwipeCue } from '@/components/ui/FitnessVectors';

export const FacilityGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Auto-derive categories from gallery data
  const categories = useMemo(() => {
    const cats = gymConfig.gallery.map((item) => item.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredItems =
    activeCategory === 'All'
      ? gymConfig.gallery
      : gymConfig.gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-14 sm:py-24 bg-black overflow-hidden border-b border-zinc-900">
      {/* Dark Subtle Dotted Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.7),transparent_75%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              Visual Sanctuary Tour
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Facility Gallery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-md'
                    : 'bg-[#150f0c] text-zinc-400 hover:text-white border border-[#2d1e13]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <SwipeCue label="Swipe Gallery" />

        {/* Gallery Grid: Horizontal Snap Carousel on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto flex flex-nowrap snap-x snap-mandatory gap-3 sm:gap-6 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none relative h-60 sm:h-72 rounded-3xl overflow-hidden bronze-panel border border-[#38281d] group shadow-xl"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-300 px-2 py-0.5 rounded bg-black/60 border border-amber-500/30">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider mt-1 truncate drop-shadow">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
