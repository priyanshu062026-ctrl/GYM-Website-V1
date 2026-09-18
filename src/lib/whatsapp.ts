import { gymConfig } from '@/config/gym.config';

/**
 * Builds a direct WhatsApp message link using the wa.me format.
 * Works seamlessly on WhatsApp Web and mobile without requiring third-party API keys.
 */
export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  let cleanNumber = phoneNumber.replace(/[^\d]/g, '');

  // For 10-digit numbers (e.g. India), prepend 91 by default
  if (cleanNumber.length === 10) {
    cleanNumber = '91' + cleanNumber;
  }

  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates an inquiry link for visitors clicking the floating WhatsApp button or CTA
 */
export function generateVisitorInquiryLink(customMessage?: string): string {
  const gymWhatsApp = gymConfig.gymDetails.whatsapp;
  const defaultMsg = `Hi ${gymConfig.gymDetails.name}! I am interested in joining the gym and would like to know more about current membership plans and floor timings.`;
  return buildWhatsAppLink(gymWhatsApp, customMessage || defaultMsg);
}

/**
 * Generates a direct trial pass booking message link
 */
export function generateTrialPassLink(name: string, phone: string, goal: string, timeSlot?: string): string {
  const gymWhatsApp = gymConfig.gymDetails.whatsapp;
  const slotText = timeSlot ? `\n🕒 Preferred Time: ${timeSlot}` : '';
  const msg = `Hi ${gymConfig.gymDetails.name}! I would like to claim my *Free 1-Day Trial Pass*.\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n🎯 Fitness Goal: ${goal}${slotText}\n\nPlease confirm my pass!`;
  return buildWhatsAppLink(gymWhatsApp, msg);
}

/**
 * Generates a comprehensive Join Now enrollment message link for WhatsApp
 */
export interface JoinNowData {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  socialAccount?: string;
  age?: string;
  fitnessGoals: string[];
  selectedPlan: string;
  specialMessage?: string;
}

export function generateJoinNowWhatsAppLink(data: JoinNowData): string {
  const gymWhatsApp = gymConfig.gymDetails.whatsapp;
  const goalsFormatted = data.fitnessGoals.length > 0 ? data.fitnessGoals.join(', ') : 'Overall Fitness & Strength';
  
  const lines = [
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `🏋️‍♂️ *NEW ADMISSION APPLICATION* 🏋️‍♂️`,
    `*${gymConfig.gymDetails.name.toUpperCase()}*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `Hello Team ${gymConfig.gymDetails.name}! 👋`,
    `I am ready to commit to my transformation and would love to join your facility. Please find my enrollment details below:`,
    ``,
    `📋 *APPLICANT PROFILE*`,
    `• *Full Name:* ${data.name}`,
    `• *Mobile No:* +91 ${data.phone}`,
    data.age ? `• *Age:* ${data.age} years` : null,
    data.email ? `• *Email:* ${data.email}` : null,
    data.address ? `• *Location/Address:* ${data.address}` : null,
    data.socialAccount ? `• *Social / IG:* ${data.socialAccount}` : null,
    ``,
    `🎯 *FITNESS OBJECTIVES*`,
    `• *Target Goals:* ${goalsFormatted}`,
    ``,
    `💳 *MEMBERSHIP SELECTION*`,
    `• *Selected Package:* ${data.selectedPlan}`,
    data.specialMessage ? `\n📝 *SPECIAL INSTRUCTIONS / REMARKS*\n• "${data.specialMessage}"` : null,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `🚀 *NEXT STEPS:*`,
    `Please confirm desk availability, onboarding slot, and UPI/Cash payment instructions so I can begin my training!`,
    `━━━━━━━━━━━━━━━━━━━━━━`
  ].filter(line => line !== null);

  return buildWhatsAppLink(gymWhatsApp, lines.join('\n'));
}

/**
 * Generates a direct membership plan enrollment link
 */
export function generatePlanEnrollLink(planName: string, price: number): string {
  const gymWhatsApp = gymConfig.gymDetails.whatsapp;
  const currency = gymConfig.billing.currencySymbol;
  const msg = `Hi ${gymConfig.gymDetails.name}! I would like to enroll in the *${planName}* plan (${currency}${price.toLocaleString()}). Please guide me with the enrollment process.`;
  return buildWhatsAppLink(gymWhatsApp, msg);
}

