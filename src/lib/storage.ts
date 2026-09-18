import { Lead } from '@/types';

const STORAGE_KEYS = {
  LEADS: 'gym_basic_leads',
};

export const GymStorage = {
  getLeads(): Lead[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LEADS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addLead(lead: Omit<Lead, 'id' | 'createdAt'>): Lead {
    const newLead: Lead = {
      ...lead,
      id: 'lead-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    if (typeof window !== 'undefined') {
      try {
        const existing = this.getLeads();
        localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify([newLead, ...existing]));
      } catch (err) {
        console.error('Failed to save lead in localStorage', err);
      }
    }

    return newLead;
  },

  clearLeads(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.LEADS);
    }
  },
};
