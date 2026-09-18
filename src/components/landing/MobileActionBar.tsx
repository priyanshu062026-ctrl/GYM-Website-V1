'use client';

import React from 'react';
import { gymConfig } from '@/config/gym.config';
import { Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface MobileActionBarProps {
  onOpenTrialModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenTrialModal }) => {
  const whatsappUrl = `https://wa.me/${gymConfig.gymDetails.whatsapp}?text=Hi%20${encodeURIComponent(
    gymConfig.gymDetails.name
  )},%20I%20am%20interested%20in%20joining%20the%20gym!`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0a0705]/95 backdrop-blur-xl border-t border-amber-500/30 p-3 pb-safe shadow-2xl">
      <div className="flex items-center gap-2">
        {/* Quick Phone Call */}
        <a
          href={`tel:${gymConfig.gymDetails.phone.replace(/[^0-9+]/g, '')}`}
          aria-label="Call Front Desk"
          className="w-12 h-12 rounded-xl bg-[#1c140e] border border-[#382619] flex items-center justify-center text-amber-300 active:bg-[#281c14] transition-colors shrink-0"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Quick WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Front Desk"
          className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-500/50 flex items-center justify-center text-emerald-400 active:bg-emerald-900/60 transition-colors shrink-0"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>

        {/* Primary CTA: Join Now */}
        <button
          onClick={onOpenTrialModal}
          className="flex-1 h-12 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 active:from-yellow-500 active:to-rose-600 text-black font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-transform"
        >
          <Sparkles className="w-4 h-4 text-black" />
          <span>Join Now</span>
        </button>
      </div>
    </div>
  );
};
