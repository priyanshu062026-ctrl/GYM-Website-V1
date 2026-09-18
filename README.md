# ⚡ FitPulse Basic: Turnkey Gym & Fitness Hub Website Template

> A modern, high-converting, white-label website template designed specifically for local gym owners, fitness centers, CrossFit boxes, and boutique studios.

---

## 🎯 What is the Basic Version?

The **Basic Version** delivers a high-impact, mobile-responsive public website designed for selling to local fitness clubs. 

It keeps the **exact same Next.js + React 19 + Tailwind CSS stack**, master white-label configuration (`gym.config.ts`), and `.env` setup, while removing the complex authentication and admin dashboard overhead.

### 🌟 Key Highlights

* **15-Minute White-Label Customization**:
  * Edit a single file (`src/config/gym.config.ts`) to instantly update the gym's name, logo, color accents, pricing tiers, operating hours, trainers, photo gallery, testimonials, and contact information.
* **1-Click WhatsApp Lead Generation**:
  * Zero-cost messaging links connect prospective members directly to the gym's front desk or owner on WhatsApp with pre-filled inquiries.
* **Free 1-Day Trial Pass Voucher Modal**:
  * High-converting lead generation tool that captures visitor names, phone numbers, and fitness goals, generates a digital pass ID, and confirms the pass via WhatsApp.
* **Interactive Contact & Directions**:
  * Contact cards with one-tap dial, WhatsApp chat, and Google Maps live directions, plus an interactive inquiry form backed by local lead capture.
* **Visual Facility Gallery**:
  * Category-filtered photo tour (Floor, Cardio, CrossFit, Studio, Amenities).
* **Coach Showcase & Real Proof**:
  * Trainer profiles with accreditations and member transformation testimonials.
* **Ultra-Fast & Zero Server Maintenance**:
  * Deploys free on Vercel, Netlify, or any static/Node host.

---

## 📁 Codebase Structure

```text
gym-basic/
├── src/
│   ├── app/
│   │   ├── globals.css           # Luxury dark theme, bronze glass, gold gradients
│   │   ├── layout.tsx            # Geist font, dark mode, dynamic SEO meta
│   │   └── page.tsx              # Full landing page composition
│   ├── components/
│   │   └── landing/
│   │       ├── FacilityGallery.tsx    # Category-filterable photo gallery
│   │       ├── KnowYourTrainers.tsx   # Coach profiles & accreditations
│   │       ├── LandingContact.tsx     # Contact info & interactive lead form
│   │       ├── LandingFAQ.tsx         # FAQ accordion
│   │       ├── LandingFooter.tsx      # Business details & GST info
│   │       ├── LandingHeader.tsx      # Sticky navbar with live hours badge
│   │       ├── LandingHero.tsx        # Cinematic hero & trust metrics
│   │       ├── MobileActionBar.tsx    # Sticky bottom thumb bar (Call, WhatsApp, Pass)
│   │       ├── PillarsSection.tsx     # Floor facilities showcase
│   │       ├── PricingSection.tsx     # Membership plans & WhatsApp enroll
│   │       ├── ProgramsSection.tsx    # Workout disciplines & classes
│   │       ├── QuickInfoStrip.tsx     # Operating hours & front desk call
│   │       ├── TestimonialsSection.tsx# Member transformation reviews
│   │       └── TrialModal.tsx         # Free 1-day pass claim voucher modal
│   ├── config/
│   │   └── gym.config.ts         # ⭐ White-label master configuration
│   ├── lib/
│   │   ├── storage.ts            # Client-side lead storage
│   │   ├── supabase.ts           # Supabase client connector
│   │   └── whatsapp.ts           # WhatsApp direct link generator
│   └── types/
│       └── index.ts              # TypeScript interfaces
├── .env                          # Supabase environment variables
├── .env.local                    # Local environment overrides
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS with Tailwind v4
└── tsconfig.json                 # TypeScript path aliases (@/*)
```

---

## 🚀 How to White-Label for a Local Gym Client

Open `src/config/gym.config.ts` and update the values:

```typescript
export const gymConfig = {
  gymDetails: {
    name: "IronPeak Strength Sanctuary",
    tagline: "Unleash Your Peak Human Potential",
    city: "New Delhi",
    landmark: "Opposite Sector 14 Metro Station",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    operatingHours: {
      weekdays: "5:30 AM - 10:30 PM",
      saturday: "6:00 AM - 10:00 PM",
      sunday: "7:00 AM - 2:00 PM",
    },
    // ...
  },
  // Update plans, trainers, gallery images, and testimonials!
};
```

The site updates automatically in real-time.

---

## 🛠️ Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```
