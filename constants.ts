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
export const CONTACT_EMAIL = "supermantravelconsult@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61576265866360";
export const TIKTOK_URL = "https://www.tiktok.com/@superman.travel.c?_r=1&_t=ZM-92QoEqs5I76";
export const CONTACT_ADDRESS_1 = "Effiduasi, Opposite District Assembly, Off Asamang Road";
export const CONTACT_ADDRESS_2 = "Kwamo Kumasi, in front of the chiefs palace, first floor";
export const WORKING_HOURS = "Monday to Friday: 8am - 4pm";
export const WORKING_HOURS_NOTE = "Holidays are excluded";

// Static Image URLs
export const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80";
export const ABOUT_IMAGE_URL = "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80";

export const SERVICES: ServiceItem[] = [
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'Expert guidance for university admissions in USA, Canada, UK, China, Schengen, and more.',
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
    description: 'Comprehensive support for students, tourist, and work visa applications.',
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
The company's main slogan is "Where your dreams come into reality".
The local tagline is "STC - Sei kutuu Sei Bam".

The company offers the following services:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Key Information:
- Contact Numbers: ${CONTACT_PHONE_1}, ${CONTACT_PHONE_2}
- Email: ${CONTACT_EMAIL}
- Facebook: ${FACEBOOK_URL}
- TikTok: ${TIKTOK_URL}
- Working Hours: ${WORKING_HOURS} (${WORKING_HOURS_NOTE})
- Locations: 
  1. ${CONTACT_ADDRESS_1}
  2. ${CONTACT_ADDRESS_2}
- Main focus: Study/Work in USA, Canada, UK, China, Dubai, Schengen countries, etc.
- Tone: Professional, encouraging, helpful, and concise.

If a user asks to book a service, guide them to call the numbers provided or fill out the contact form on the website.
Do not invent services not listed here.
`;