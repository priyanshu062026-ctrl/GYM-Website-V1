export type MembershipStatus = 'active' | 'expiring_soon' | 'expired' | 'frozen';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  fitnessGoal?: string;
  preferredSlot?: 'Morning (6am-10am)' | 'Afternoon (12pm-4pm)' | 'Evening (5pm-9pm)';
  status?: 'new' | 'contacted' | 'trial_scheduled' | 'converted' | 'lost';
  createdAt: string;
  notes?: string;
}

export interface Member {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  gender: 'male' | 'female' | 'other';
  avatarUrl?: string;
  joinDate: string; // YYYY-MM-DD
  planId: string;
  planName: string;
  startDate: string;
  expiryDate: string;
  status: MembershipStatus;
  emergencyContact: string;
  emergencyPhone: string;
  assignedTrainer?: string;
  qrCodeToken: string;
  notes?: string;
}

export interface Payment {
  id: string;
  invoiceNumber: string;
  memberId: string;
  memberName: string;
  memberPhone: string;
  planName: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
  method: 'cash' | 'razorpay_upi' | 'card' | 'bank_transfer';
  transactionId?: string;
  status: 'paid' | 'pending' | 'failed' | 'refunded';
  date: string;
  invoicePdfUrl?: string;
  notes?: string;
}

export interface AttendanceRecord {
  id: string;
  memberId: string;
  memberName: string;
  memberPhone: string;
  planName: string;
  status: MembershipStatus;
  checkInTime: string;
  method: 'qr_scan' | 'manual_desk';
}

export interface ClassScheduleItem {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  title: string;
  trainer: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  capacity: number;
  bookedCount: number;
}
