'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { Dumbbell } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-[#040404] border-t border-[#23170e] pt-12 pb-28 sm:pb-14 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1c120b]">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-black shadow-md shadow-amber-500/20">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <div>
              <div className="text-base font-black text-white uppercase tracking-wider">
                {gymConfig.gymDetails.name}
              </div>
              <div className="text-[11px] font-bold text-amber-500/90 tracking-widest uppercase">
                {gymConfig.gymDetails.tagline}
              </div>
            </div>
          </div>

          {/* Social Links & Quick Info */}
          <div className="flex flex-col sm:items-end items-center gap-3 text-center sm:text-right">
            <div className="flex items-center gap-2">
              {gymConfig.gymDetails.socialLinks?.instagram && (
                <a
                  href={gymConfig.gymDetails.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="p-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-white transition-all hover:scale-105 flex items-center gap-1.5 text-xs font-bold"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              )}
              {gymConfig.gymDetails.socialLinks?.facebook && (
                <a
                  href={gymConfig.gymDetails.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="p-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-white transition-all hover:scale-105 flex items-center gap-1.5 text-xs font-bold"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              )}
            </div>
            <div className="text-xs text-zinc-400">
              <div className="font-bold text-zinc-300">
                {gymConfig.gymDetails.address}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5">
                {gymConfig.gymDetails.city} &bull; Open Daily {gymConfig.gymDetails.operatingHours.weekdays}
              </div>
            </div>
          </div>
        </div>

        {/* Legal & White-label credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {gymConfig.gymDetails.legalBusinessName}. GST: {gymConfig.gymDetails.gstNumber}
          </div>
          <div className="text-zinc-400 font-bold uppercase tracking-wider">
            {gymConfig.branding.footerTagline}
          </div>
        </div>

        {/* Developer & Designer Signature */}
        <div className="mt-6 pt-5 border-t border-[#1a110a] flex items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120b07] border border-amber-500/30 text-[11px] font-black tracking-widest text-zinc-300 uppercase shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>
              DESIGNED AND DEVELOPED BY{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 font-black">
                PRIYANSHU DUBEY
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
