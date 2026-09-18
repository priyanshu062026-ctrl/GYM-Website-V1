'use client';

import React, { useState } from 'react';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { LandingHero } from '@/components/landing/LandingHero';
import { QuickInfoStrip } from '@/components/landing/QuickInfoStrip';
import { PillarsSection } from '@/components/landing/PillarsSection';
import { ProgramsSection } from '@/components/landing/ProgramsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { KnowYourTrainers } from '@/components/landing/KnowYourTrainers';
import { FacilityGallery } from '@/components/landing/FacilityGallery';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { LandingContact } from '@/components/landing/LandingContact';
import { LandingFAQ } from '@/components/landing/LandingFAQ';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MobileActionBar } from '@/components/landing/MobileActionBar';
import { TrialModal } from '@/components/landing/TrialModal';

export default function BasicGymLandingPage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 flex flex-col selection:bg-rose-500 selection:text-white relative font-sans">
      {/* 1. Header with Live Status & Navigation */}
      <LandingHeader />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 2. Hero with Cinematic Backdrop, Dynamic Headline, and CTAs */}
        <LandingHero onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 3. Redesigned Quick Info Strip (Live Timings, Location Shortcut, Direct Dial & WhatsApp) */}
        <QuickInfoStrip />

        {/* 4. Contact Us & Interactive Location Section (with embedded Google Map iframe & Lead Form) */}
        <LandingContact />

        {/* 5. Member Transformation Testimonials & Verified Proof */}
        <TestimonialsSection />

        {/* 6. Floor Pillars & Equipment Facilities */}
        <PillarsSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 7. Workout Programs & Training Disciplines */}
        <ProgramsSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 8. Membership Pricing Tiers & WhatsApp Enrollment */}
        <PricingSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 9. Know Your Trainers & Certified Coaches */}
        <KnowYourTrainers />

        {/* 10. Visual Facility Gallery with Category Filter */}
        <FacilityGallery />

        {/* 11. Frequently Asked Questions Accordion */}
        <LandingFAQ />
      </main>

      {/* 12. Footer with Legal Business Details & GST */}
      <LandingFooter />

      {/* 13. Mobile Sticky Bottom Action Bar */}
      <MobileActionBar onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* 14. Direct Join Now Admission Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
