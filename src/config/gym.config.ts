export interface GymPillar {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  /** Lucide icon name shown on the badge */
  icon: 'Dumbbell' | 'Flame' | 'Sparkles' | 'Activity' | 'Award' | 'Users' | 'Star';
  /** URL to a landscape image (min 800×600px recommended) */
  image: string;
  /** Tailwind classes for the badge chip — swap color as needed */
  badgeClass: string;
  /** Tailwind border glow class on card hover */
  borderGlow: string;
}

export interface GymPlan {
  id: string;
  name: string;
  duration: string;
  durationMonths: number;
  price: number;
  popular: boolean;
  features: string[];
}

export interface GymTrainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  certifications: string[];
  image: string;
  bio: string;
}

export interface GymProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface GymFAQ {
  question: string;
  answer: string;
}

export interface GymConfig {
  gymDetails: {
    name: string;
    tagline?: string;
    legalBusinessName: string;
    gstNumber: string;
    phone: string;
    whatsapp: string;
    displayPhone?: string;
    email: string;
    address: string;
    landmark: string;
    city: string;
    pincode: string;
    googleMapsEmbedUrl: string;
    googleMapsShareUrl?: string;
    socialLinks?: {
      instagram?: string;
      facebook?: string;
    };
    operatingHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
  branding: {
    primaryColor: string;
    primaryHover: string;
    accentColor: string;
    logoUrl?: string;
    tagline?: string;
    footerTagline?: string;
  };
  seoMeta: {
    title: string;
    description: string;
  };
  hero: {
    backgroundImageUrl: string;
    backgroundImageAlt: string;
    headline: string;
    subheadline: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    socialProof: {
      rating: string;
      memberCount: string;
      uspBadge: string;
    };
  };
  founderProfile: {
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    quote: string;
  };
  pillars: GymPillar[];
  billing: {
    currencySymbol: string;
    currencyCode: string;
    enableGst: boolean;
    gstRatePercent: number;
    razorpayKeyId?: string;
  };
  plans: GymPlan[];
  programs: GymProgram[];
  trainers: GymTrainer[];
  gallery: {
    id: string;
    title: string;
    category: string;
    url: string;
  }[];
  testimonials: {
    id: string;
    name: string;
    transformation: string;
    quote: string;
    image: string;
    rating: number;
  }[];
  faqs: GymFAQ[];
  features: {
    enableOnlinePayments: boolean;
    enableTrialPassBooking: boolean;
    enableQrCheckIn: boolean;
    enableGallery: boolean;
  };
}

export const gymConfig: GymConfig = {
  gymDetails: {
    name: "ALPHA GYM & FITNESS CENTRE",
    tagline: "Join us on your Fitness journey and lead your life towards Health and Happiness.",
    legalBusinessName: "Alpha Gym & Fitness Centre",
    gstNumber: "19AAAAA0000A1Z5",
    phone: "+91 62942 80885",
    whatsapp: "916294280885",
    displayPhone: "+91 62942 80885",
    email: "alphagym.adra@gmail.com",
    address: "Road, Gayadhi, Daulatpur, Adra, West Bengal 723121",
    landmark: "Daulatpur Road (South Side), Gayadhi (1.9 km from Adra Station)",
    city: "Adra, Purulia",
    pincode: "723121",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3079776904424!2d86.68962567478391!3d23.485413998898828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6f15d75bb2ec1%3A0x3d73df80f667e1d4!2sALPHA%20GYM%20%26%20FITNESS%20CENTRE!5e0!3m2!1sen!2sin!4v1789401125952!5m2!1sen!2sin",
    googleMapsShareUrl: "https://maps.app.goo.gl/M75mQ1JH4phnskYLA",
    socialLinks: {
      instagram: "https://www.instagram.com/alphagymfitnesss/",
      facebook: "https://www.facebook.com/people/Alpha-Gym-and-Fitness-Center/61550942752560/?mibextid=LQQJ4d"
    },
    operatingHours: {
      weekdays: "6:00 AM - 11:00 AM | 4:00 PM - 9:00 PM",
      saturday: "6:00 AM - 11:00 AM | 4:00 PM - 9:00 PM",
      sunday: "Closed (Rest Day)"
    }
  },
  branding: {
    primaryColor: "#E11D48",
    primaryHover: "#BE123C",
    accentColor: "#F59E0B",
    footerTagline: "Premium Strength & Conditioning Sanctuary"
  },
  seoMeta: {
    title: "ALPHA GYM & FITNESS CENTRE",
    description: "Adra's premier strength, conditioning, and fitness centre. Calibrated machinery, certified coaching, and personal training."
  },
  hero: {
    backgroundImageUrl: "/images/facility-1.png",
    backgroundImageAlt: "ALPHA GYM Floor",
    headline: "FORGED IN IRON.\nDEFINED BY POWER.",
    subheadline: "Calibrated machinery, world-class coaching, and athletic conditioning. Built for those who demand excellence from every workout.",
    primaryCtaLabel: "JOIN NOW",
    secondaryCtaLabel: "See All Details",
    socialProof: {
      rating: "4.9 / 5.0 (Google)",
      memberCount: "4.7 (Justdial)",
      uspBadge: "Verified Unisex Centre"
    }
  },
  founderProfile: {
    name: "Vikramaditya Singhania",
    role: "Founder & Head Coach · 12+ Yrs Exp",
    image: "/images/facility-2.png",
    imageAlt: "Vikramaditya Singhania — Founder & Head Coach",
    quote: "Adra's serious, no-compromise strength haven."
  },
  pillars: [
    {
      id: "pillar-strength",
      title: "Olympic Strength Zone",
      subtitle: "Eleiko calibrated competition plates, Texas power bars, and specialized squat and deadlift platforms.",
      tag: "Heavy Iron",
      icon: "Dumbbell",
      image: "/images/facility-1.png",
      badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      borderGlow: "hover:border-amber-500/60"
    },
    {
      id: "pillar-functional",
      title: "Functional Turf & CrossFit",
      subtitle: "Indoor sprint track, sled pushes, heavy battle ropes, assault bikes, and functional training rig.",
      tag: "High Intensity",
      icon: "Flame",
      image: "/images/facility-2.png",
      badgeClass: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      borderGlow: "hover:border-rose-500/60"
    },
    {
      id: "pillar-recovery",
      title: "Hydro Steam & Recovery",
      subtitle: "Post-training steam chambers, clean washrooms, and dedicated recovery stations.",
      tag: "Restoration",
      icon: "Sparkles",
      image: "/images/facility-3.png",
      badgeClass: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
      borderGlow: "hover:border-yellow-500/60"
    }
  ],
  billing: {
    currencySymbol: "₹",
    currencyCode: "INR",
    enableGst: true,
    gstRatePercent: 18,
    razorpayKeyId: "rzp_test_placeholder"
  },
  plans: [
    {
      id: "starter-1m",
      name: "Monthly Starter",
      duration: "1 Month",
      durationMonths: 1,
      price: 1999,
      popular: false,
      features: [
        "Full gym & cardio floor access",
        "Locker & steam shower access",
        "Free fitness assessment & diet guide",
        "General trainer guidance on floor"
      ]
    },
    {
      id: "pro-3m",
      name: "Quarterly Transformation",
      duration: "3 Months",
      durationMonths: 3,
      price: 4999,
      popular: true,
      features: [
        "Everything in Starter Plan",
        "Personalized workout & macro plan",
        "2 Free 1-on-1 Personal Training sessions",
        "Unlimited Zumba & Yoga weekend classes",
        "Free body composition analysis (InBody)"
      ]
    },
    {
      id: "semi-6m",
      name: "Half-Yearly Warrior",
      duration: "6 Months",
      durationMonths: 6,
      price: 8999,
      popular: false,
      features: [
        "Everything in Quarterly Plan",
        "4 Free 1-on-1 Personal Training sessions",
        "Priority locker allocation",
        "1 Free Membership Freeze pass (up to 30 days)",
        "Complimentary Gym Sipper & T-Shirt"
      ]
    },
    {
      id: "elite-12m",
      name: "Annual VIP Elite",
      duration: "12 Months",
      durationMonths: 12,
      price: 14999,
      popular: false,
      features: [
        "All-inclusive VIP Gym Access 365 Days",
        "10 Free Personal Training sessions",
        "Dedicated Nutritionist consultation monthly",
        "2 Free Membership Freeze passes (60 days)",
        "Exclusive merchandise gift pack"
      ]
    }
  ],
  programs: [
    {
      id: "prog-strength",
      title: "Strength & Hypertrophy",
      description: "Olympic barbells, calibrated plates, power racks, and targeted resistance machines for serious muscle building.",
      icon: "Dumbbell",
      tag: "Muscle Building"
    },
    {
      id: "prog-crossfit",
      title: "Functional & CrossFit Arena",
      description: "Kettlebells, battle ropes, sleds, plyometric boxes, and gymnastics rings for athletic endurance and power.",
      icon: "Flame",
      tag: "High Intensity"
    },
    {
      id: "prog-cardio",
      title: "Cardio & Fat Loss Zone",
      description: "Commercial treadmills, stairmasters, assault bikes, and rowers with heart-rate tracking consoles.",
      icon: "Activity",
      tag: "Endurance"
    },
    {
      id: "prog-pt",
      title: "1-on-1 Personal Coaching",
      description: "Dedicated attention from certified fitness coaches to accelerate weight loss, posture correction, and contest prep.",
      icon: "Award",
      tag: "Customized"
    },
    {
      id: "prog-group",
      title: "Zumba, Yoga & HIIT",
      description: "Energizing high-energy weekend group classes led by certified instructors in our climate-controlled studio.",
      icon: "Users",
      tag: "Group Energy"
    },
    {
      id: "prog-recovery",
      title: "Steam, Sauna & Recovery",
      description: "Post-workout hydrotherapy, infrared steam room, and percussive massage guns for rapid muscle recovery.",
      icon: "Sparkles",
      tag: "Wellness"
    }
  ],
  trainers: [
    {
      id: "trainer-1",
      name: "Vikram Sharma",
      role: "Head Strength Coach",
      specialization: "Powerlifting & Bodybuilding",
      experience: "8+ Years",
      certifications: [
        "CSCS",
        "ACE Certified",
        "K11 Master Trainer"
      ],
      image: "/images/gym-floor.jpg",
      bio: "Former national powerlifter with over 8 years of coaching experience transforming 400+ clients."
    },
    {
      id: "trainer-2",
      name: "Ananya Deshmukh",
      role: "Functional & HIIT Coach",
      specialization: "Fat Loss & Mobility",
      experience: "6+ Years",
      certifications: [
        "CrossFit Level 2",
        "ISSA Certified",
        "TRX Specialist"
      ],
      image: "/images/hero-bg.jpg",
      bio: "Passionate functional fitness coach specializing in metabolic conditioning and core stabilization."
    },
    {
      id: "trainer-3",
      name: "Rahul Mehra",
      role: "Transformation & Nutritionist",
      specialization: "Macro Planning & Hypertrophy",
      experience: "7+ Years",
      certifications: [
        "Precision Nutrition Level 1",
        "NASM CPT"
      ],
      image: "/images/gym-floor.jpg",
      bio: "Dedicated to science-backed nutritional planning and sustainable physique transformations."
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "ALPHA GYM Main Floor & Heavy Dumbbells",
      category: "Floor",
      url: "/images/facility-1.png"
    },
    {
      id: "gal-2",
      title: "Calibrated Strength Racks & Benches",
      category: "Floor",
      url: "/images/facility-2.png"
    },
    {
      id: "gal-3",
      title: "Athletic Cardio & High Intensity Turf",
      category: "Cardio",
      url: "/images/facility-3.png"
    },
    {
      id: "gal-4",
      title: "Heavy Duty Calibrated Machinery",
      category: "Equipment",
      url: "/images/gym-equipment.jpg"
    },
    {
      id: "gal-5",
      title: "Alpha Gym Workout Sanctuary Floor",
      category: "Floor",
      url: "/images/gym-floor.jpg"
    },
    {
      id: "gal-6",
      title: "High-Energy Training Atmosphere",
      category: "Amenities",
      url: "/images/hero-bg.jpg"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Rohit Verma",
      transformation: "Lost 14 kg in 4 months",
      quote: "The coaching staff at ALPHA GYM keeps you accountable every single day. Equipment is top-tier and always clean.",
      image: "/images/gym-floor.jpg",
      rating: 5
    },
    {
      id: "test-2",
      name: "Pooja Malhotra",
      transformation: "Increased deadlift from 40kg to 105kg",
      quote: "Best gym in Adra! Friendly community, zero intimidation, and certified form coaching helped me get super strong.",
      image: "/images/hero-bg.jpg",
      rating: 5
    },
    {
      id: "test-3",
      name: "Kabir Singhania",
      transformation: "Gained 6 kg lean muscle",
      quote: "The digital check-in and automated invoice sent directly on my WhatsApp make it feel like a high-end luxury gym at reasonable prices.",
      image: "/images/gym-floor.jpg",
      rating: 5
    }
  ],
  faqs: [
    {
      question: "What are your operating shift timings?",
      answer: "ALPHA GYM & FITNESS CENTRE operates in a convenient split-shift schedule from Monday to Saturday: Morning Shift from 6:00 AM to 11:00 AM, and Evening Shift from 4:00 PM to 9:00 PM. We remain closed on Sundays for weekly maintenance and recovery."
    },
    {
      question: "Is the gym unisex and beginner friendly?",
      answer: "Yes, we are a fully unisex gym catering to beginners, lifestyle fitness enthusiasts, and dedicated strength athletes in a motivating, safe, and respectful environment."
    },
    {
      question: "Where is the gym located in Adra?",
      answer: "We are located along Daulatpur Road (South Side), Gayadhi, Adra, Purulia (PIN 723121) — approximately 1.9 km from Adra Railway Station (Plus Code: FMPR+5V Adra)."
    },
    {
      question: "Do you provide Personal Coaching & Diet Guidance?",
      answer: "Yes! Our certified coaches offer one-on-one form correction, milestone tracking, injury prevention, and customized caloric and nutritional strategies tailored to your body transformation goals."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept Digital UPI payments (Google Pay, PhonePe, PayTM) as well as Cash at the front desk."
    }
  ],
  features: {
    enableOnlinePayments: true,
    enableTrialPassBooking: true,
    enableQrCheckIn: true,
    enableGallery: true
  }
};
