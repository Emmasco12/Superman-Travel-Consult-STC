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
import { ServiceItem, CountryDetail } from './types';

export const COMPANY_NAME = "Superman Travel Consult - STC";
export const CONTACT_PHONE_1 = "+233 545 920 616";
export const CONTACT_PHONE_2 = "+233 545 545 345";
export const CONTACT_EMAIL = "supermantravelconsult@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61576265866360";
export const TIKTOK_URL = "https://www.tiktok.com/@superman.travel.c?_r=1&_t=ZM-92QoEqs5I76";
export const WHATSAPP_URL = "https://wa.me/233545920616";
export const CONTACT_ADDRESS_1 = "Effiduasi, Opposite District Assembly, Off Asamang Road";
export const CONTACT_ADDRESS_2 = "Kwamo Kumasi, in front of the chiefs palace, first floor";
export const WORKING_HOURS = "Monday to Friday: 8am - 4pm";
export const WORKING_HOURS_NOTE = "Holidays are excluded";

// Static Image URLs
export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/d/1-d-oXLd7n3QQl5N8URK0aTkVkp2Ic3xQ";
export const HERO_VIDEO_URL = "https://www.shutterstock.com/shutterstock/videos/1084670884/preview/stock-footage-airport-terminal-beautiful-smiling-black-woman-holds-ticket-walks-through-in-airline-hub-to-the.webm";
export const ABOUT_IMAGE_URL = "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80";

export const SERVICES: ServiceItem[] = [
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'Expert guidance for university admissions in USA, Canada, UK, China, Schengen, and any country of interest.',
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

export const STUDY_ABROAD_COUNTRIES: CountryDetail[] = [
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=1200&q=80',
    video: 'https://d2j2uxe7jasn0r.cloudfront.net/watermarks/video/qmraJpx/videoblocks-high-school-students-socializing-outside-college-buildings_s_vyaispcx__f06e7df847383253830e3da75ba350f7__P360.mp4',
    benefits: [
      'Home to top-ranked universities and cutting-edge research opportunities',
      'Flexible education system with diverse course options',
      'Strong career prospects and global recognition',
      'Exposure to innovation and multicultural environments'
    ],
    longDescription: "Studying in the USA is a great opportunity for students who want a high-quality education and a better future. The country is home to some of the best universities in the world, known for their excellent teaching, modern facilities, and globally recognized degrees. Students also have the freedom to choose from a wide range of courses and even change their programs if they discover new interests along the way. This flexibility helps them find the right career path.\n\nAnother important reason to study in the USA is the strong career opportunities available. Many universities offer internships and practical training, allowing students to gain real-world experience while studying. A degree from the USA is respected worldwide, which makes it easier to find a good job or continue further education in other countries. In addition, the USA is a leader in technology and innovation, giving students access to advanced knowledge and modern learning environments.\n\nThe USA is also a very diverse country, where students can meet people from different cultures and backgrounds. This helps them build international connections and learn new ways of thinking. Since English is the main language, students also improve their communication skills, which is very important in today’s global world. Living and studying in the USA helps students become more independent, confident, and adaptable.\n\nFinally, studying in the USA offers an exciting and enjoyable student life. There are many activities, events, and travel opportunities that make the experience memorable. With available scholarships and support for international students, studying in the USA becomes an even more attractive option. Overall, choosing to study in the USA can open doors to many opportunities and help students achieve their dreams.",
    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Eastern_Illinois_University_seal.svg/1200px-Eastern_Illinois_University_seal.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield.svg/1200px-Harvard_shield.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal.svg/1200px-Stanford_University_seal.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1200px-MIT_Seal.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Yale_University_Shield.svg/1200px-Yale_University_Shield.svg.png'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'High-quality education at affordable tuition rates',
      'Safe, welcoming, and multicultural society',
      'Opportunities for part-time work and post-study immigration pathways',
      'Globally recognized degrees'
    ]
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'World-renowned universities with rich academic heritage',
      'Shorter degree duration (saves time and cost)',
      'Access to global career opportunities',
      'Strong focus on research and practical learning'
    ]
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Affordable tuition and living costs',
      'Rapidly growing global education hub',
      'Opportunities to learn Mandarin and experience rich culture',
      'Strong programs in technology, medicine, and business'
    ]
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
- WhatsApp: ${WHATSAPP_URL}
- Working Hours: ${WORKING_HOURS} (${WORKING_HOURS_NOTE})
- Locations: 
  1. ${CONTACT_ADDRESS_1}
  2. ${CONTACT_ADDRESS_2}
- Main focus: Study/Work in USA, Canada, UK, China, Dubai, Schengen countries, and any country of interest.
- Tone: Professional, encouraging, helpful, and concise.

If a user asks to book a service, guide them to call the numbers provided or fill out the contact form on the website.
Do not invent services not listed here.
`;