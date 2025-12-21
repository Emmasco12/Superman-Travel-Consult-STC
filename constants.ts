import { 
  GraduationCap, 
  Briefcase, 
  Stamp, 
  Plane, 
  BookOpen, 
  CalendarCheck, 
  FileText, 
  Map as MapIcon, 
  Building2, 
  IdCard
} from 'lucide-react';
import { ServiceItem } from './types';

export const COMPANY_NAME = "Superman Travel Consult - STC";
export const CONTACT_PHONE_1 = "+233 545 920 616";
export const CONTACT_PHONE_2 = "+233 545 545 345";
export const CONTACT_EMAIL = "info@supermantravel.com"; // Placeholder based on "EMAIL" text in image
export const CONTACT_ADDRESS = "Effiduasi, Opposite District Assembly, Off Asamang Road";

export const SERVICES: ServiceItem[] = [
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'Expert guidance for university admissions in USA, Canada, UK, and more.',
    icon: GraduationCap
  },
  {
    id: 'work-abroad',
    title: 'Work Abroad',
    description: 'Assistance with securing work permits and navigating international employment.',
    icon: Briefcase
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    description: 'Comprehensive support for student, tourist, and work visa applications.',
    icon: Stamp
  },
  {
    id: 'air-ticketing',
    title: 'Air Ticketing',
    description: 'Best deals on flight tickets to any destination worldwide.',
    icon: Plane
  },
  {
    id: 'passport-application',
    title: 'Passport Application',
    description: 'Guidance and assistance with new passport applications and renewals.',
    icon: IdCard
  },
  {
    id: 'flight-reservation',
    title: 'Flight Reservation',
    description: 'Temporary flight bookings for visa application purposes.',
    icon: CalendarCheck
  },
  {
    id: 'hotel-reservation',
    title: 'Hotel Reservation',
    description: 'Confirmed hotel bookings to meet visa requirements and travel comfort.',
    icon: Building2
  },
  {
    id: 'travel-itinerary',
    title: 'Travel Itinerary',
    description: 'Detailed travel plans tailored to your specific trip schedule.',
    icon: MapIcon
  },
  {
    id: 'travel-documents',
    title: 'Travel Documents',
    description: 'Review and preparation of all essential travel documentation.',
    icon: FileText
  },
  {
    id: 'appointment-booking',
    title: 'Appointment Booking',
    description: 'Scheduling embassy and consulate appointments efficiently.',
    icon: BookOpen
  }
];

export const SYSTEM_INSTRUCTION = `
You are the intelligent virtual assistant for "Superman Travel Consult - STC". 
Your goal is to help users with travel, study, and work abroad inquiries based on the company's services.
The company slogan/greeting is "Sei kutuu Sei Bham". You can use it occasionally to be friendly.

The company offers the following services:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Key Information:
- Contact Numbers: ${CONTACT_PHONE_1}, ${CONTACT_PHONE_2}
- Email: ${CONTACT_EMAIL}
- Location: ${CONTACT_ADDRESS}
- Main focus: Study in USA, Canada, UK, etc.
- Tone: Professional, encouraging, helpful, and concise.

If a user asks to book a service, guide them to call the numbers provided or fill out the contact form on the website.
Do not invent services not listed here.
`;