'use client';

import React, { useState } from 'react';
import { gymConfig } from '@/config/gym.config';
import { GymStorage } from '@/lib/storage';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { MapPin, Clock, Navigation, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';

type PreferredSlot = 'Morning (6am-10am)' | 'Afternoon (12pm-4pm)' | 'Evening (5pm-9pm)';

export const LandingContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Muscle Building');
  const [slot, setSlot] = useState<PreferredSlot>('Morning (6am-10am)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedLeadUrl, setSubmittedLeadUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    GymStorage.addLead({
      name: name.trim(),
      phone: phone.trim(),
      fitnessGoal: goal,
      preferredSlot: slot,
      notes: message.trim() || 'Direct Inquiry from Contact Form',
    });

    const waMsg = `Hi ${gymConfig.gymDetails.name}! I submitted an enquiry on your website.\n\n👤 Name: ${name.trim()}\n📱 Phone: ${phone.trim()}\n🎯 Goal: ${goal}\n🕒 Slot: ${slot}${message.trim() ? `\n💬 Note: ${message.trim()}` : ''}`;
    const waUrl = buildWhatsAppLink(gymConfig.gymDetails.whatsapp, waMsg);
    setSubmittedLeadUrl(waUrl);

    setSubmitted(true);
    setName('');
    setPhone('');
    setMessage('');
  };

  const directWhatsAppUrl = `https://wa.me/${gymConfig.gymDetails.whatsapp}?text=Hi%20${encodeURIComponent(
    gymConfig.gymDetails.name
  )},%20I%20want%20to%20visit%20the%20gym.%20Please%20guide%20me.`;

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-zinc-950/95 border-b border-zinc-900 overflow-hidden">
      {/* Background Dotted Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-dense opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3 h-3" />
              Visit The Sanctuary
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
              Contact &amp; Location
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-medium">
            Walk-ins welcome daily &bull; Front desk coaches on floor
          </p>
        </div>

        {/* 4-Column Luxury Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {/* Card 1: Address & Landmark */}
          <div className="bronze-panel rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Address
                </span>
                <h3 className="text-sm font-black text-white mt-0.5 leading-snug">
                  {gymConfig.gymDetails.address}
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  {gymConfig.gymDetails.landmark}, {gymConfig.gymDetails.city} - {gymConfig.gymDetails.pincode}
                </p>
              </div>
            </div>

            <a
              href={gymConfig.gymDetails.googleMapsShareUrl || "https://maps.google.com/?q=ALPHA+GYM+%26+FITNESS+CENTRE"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-400 hover:text-yellow-300 transition-colors pt-3 border-t border-[#3d2c1e]"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Live Directions</span>
            </a>
          </div>

          {/* Card 2: Operating Timings */}
          <div className="bronze-panel rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0 shadow-md">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Floor Timings
                </span>
                <div className="mt-1.5 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-zinc-200">
                    <span className="text-zinc-400 font-semibold">Mon - Sat:</span>
                    <span className="font-bold text-white text-[11px]">{gymConfig.gymDetails.operatingHours.weekdays}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-200">
                    <span className="text-zinc-400 font-semibold">Sunday:</span>
                    <span className="font-bold text-amber-400 text-[11px]">{gymConfig.gymDetails.operatingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#3d2c1e] text-[11px] text-zinc-400 font-medium">
              Open 365 days a year including public holidays
            </div>
          </div>

          {/* Card 3: Direct Dial & WhatsApp with Official WhatsApp Logo */}
          <div className="bronze-panel rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-md">
                <WhatsAppIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  WhatsApp &amp; Direct Dial
                </span>
                <a
                  href={`tel:${gymConfig.gymDetails.phone.replace(/[^0-9+]/g, '')}`}
                  className="block text-sm font-black text-white hover:text-amber-300 transition-colors mt-0.5"
                >
                  {gymConfig.gymDetails.displayPhone}
                </a>
                <p className="text-xs text-zinc-400 mt-1">
                  Instant response desk &bull; Membership team
                </p>
              </div>
            </div>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors pt-3 border-t border-[#3d2c1e]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 4: Official Social Media Pages (Instagram & Facebook) */}
          <div className="bronze-panel rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center shrink-0 shadow-md">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-md">
                  <FacebookIcon className="w-6 h-6" />
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                Official Social Handles
              </span>
              <h3 className="text-sm font-black text-white mt-0.5 leading-snug">
                Follow Us Online
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Daily transformation stories, workout clips &amp; updates.
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-[#3d2c1e]">
              {gymConfig.gymDetails.socialLinks?.instagram && (
                <a
                  href={gymConfig.gymDetails.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent hover:from-pink-500/20 hover:via-purple-500/20 border border-pink-500/20 text-xs font-bold text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <InstagramIcon className="w-5 h-5" />
                    <span>Instagram</span>
                  </div>
                  <span className="text-[10px] text-pink-400 group-hover:translate-x-0.5 transition-transform">@alphagymfitnesss &rarr;</span>
                </a>
              )}

              {gymConfig.gymDetails.socialLinks?.facebook && (
                <a
                  href={gymConfig.gymDetails.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-xs font-bold text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <FacebookIcon className="w-5 h-5" />
                    <span>Facebook</span>
                  </div>
                  <span className="text-[10px] text-blue-400 group-hover:translate-x-0.5 transition-transform">Alpha Gym &rarr;</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 2-Column Section: Embedded Google Map & Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Embedded Google Map (7 Cols on desktop, full width on mobile) */}
          <div className="w-full lg:col-span-7 bronze-panel rounded-3xl p-4 sm:p-5 border border-[#38281d] shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between pb-3 px-1">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">
                    ALPHA GYM &amp; FITNESS CENTRE
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Find us on Google Maps &bull; Easy Turnstile Access
                  </p>
                </div>
              </div>

              <a
                href={gymConfig.gymDetails.googleMapsShareUrl || "https://maps.google.com/?q=ALPHA+GYM+%26+FITNESS+CENTRE"}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22160f] hover:bg-[#2d1e15] border border-amber-500/30 text-[11px] font-black uppercase text-amber-300 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in App</span>
              </a>
            </div>

            {/* Embedded Responsive Google Maps iframe */}
            <div className="w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#38281d] bg-black">
              <iframe
                src={gymConfig.gymDetails.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="ALPHA GYM & FITNESS CENTRE Location"
              />
            </div>
          </div>

          {/* Interactive Lead Inquiry Form (Hidden on mobile per user preference, 5 Cols on desktop) */}
          <div className="hidden lg:block lg:col-span-5 bronze-panel rounded-3xl p-6 sm:p-7 border border-[#38281d] shadow-2xl">
            <div className="text-center sm:text-left mb-6">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                Send A <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Direct Message</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Leave your details below and our team will get in touch with you immediately.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#1f150e] border border-amber-500/50 rounded-2xl p-6 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <div>
                  <h4 className="text-lg font-black text-white uppercase">Inquiry Received!</h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Our gym manager will call you back shortly. You can also connect immediately on WhatsApp below.
                  </p>
                </div>
                {submittedLeadUrl && (
                  <a
                    href={submittedLeadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-lg w-full"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Open in WhatsApp Now</span>
                  </a>
                )}
                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-zinc-400 underline hover:text-zinc-200"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#140e0a] border border-[#38281d] focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-400 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-[#140e0a] border border-[#38281d] focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1">
                      Fitness Target
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-[#140e0a] border border-[#38281d] focus:border-amber-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none transition-colors"
                    >
                      <option value="Muscle Building">Muscle Building</option>
                      <option value="Fat Loss & Cardio">Fat Loss &amp; Cardio</option>
                      <option value="CrossFit & Functional">CrossFit Power</option>
                      <option value="Personal Coaching">1-on-1 Coaching</option>
                      <option value="General Health">General Fitness</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1">
                      Preferred Slot
                    </label>
                    <select
                      value={slot}
                      onChange={(e) => setSlot(e.target.value as PreferredSlot)}
                      className="w-full bg-[#140e0a] border border-[#38281d] focus:border-amber-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none transition-colors"
                    >
                      <option value="Morning (6am-10am)">Morning (6-10 AM)</option>
                      <option value="Afternoon (12pm-4pm)">Afternoon (12-4 PM)</option>
                      <option value="Evening (5pm-9pm)">Evening (5-9:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-400 mb-1">
                    Note / Message (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about personal training, discounts..."
                    className="w-full bg-[#140e0a] border border-[#38281d] focus:border-amber-500 rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:opacity-95 active:scale-[0.99] transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
