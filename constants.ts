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
    video: 'https://www.pexels.com/download/video/6145693/',
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
    video: 'https://www.shutterstock.com/shutterstock/videos/3764970593/preview/stock-footage-beautiful-vista-view-of-parliament-hill-ottawa.webm',
    benefits: [
      'High-quality education at affordable tuition rates',
      'Safe, welcoming, and multicultural society',
      'Opportunities for part-time work and post-study immigration pathways',
      'Globally recognized degrees'
    ],
    longDescription: "Studying in Canada offers an exceptional opportunity to gain a globally recognized education in a safe, welcoming, and innovative environment. Canada is known for its high academic standards and top-ranked institutions, providing students with quality programs that combine theory with practical, real-world experience. A Canadian qualification is respected worldwide, opening doors to career opportunities across many countries.\n\nOne of the major advantages of studying in Canada is affordability compared to other popular study destinations, without compromising on quality. Students also benefit from a strong support system, modern learning facilities, and a focus on research, creativity, and innovation. The education system encourages critical thinking and hands-on learning, preparing students to succeed in today’s competitive global job market.\n\nCanada is also one of the most diverse and inclusive countries in the world. International students are welcomed into a multicultural society where they can feel safe, valued, and respected. This environment allows students to build global networks, learn from different cultures, and grow both personally and professionally.\n\nAnother key benefit is the opportunity to work while studying and after graduation. Canada offers flexible work options for international students and clear pathways to gain valuable work experience. In many cases, students may also have opportunities to apply for permanent residency, making Canada an attractive option for those looking to build a long-term future.\n\nBeyond academics, Canada offers a high quality of life with beautiful natural landscapes, vibrant cities, and a strong emphasis on safety and well-being. Choosing to study in Canada is not just about earning a degree—it is about gaining a world-class education, building a successful career, and experiencing life in one of the best countries in the world.",
    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_logo.svg/1200px-Utoronto_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_Logo.svg/1200px-McGill_University_Logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/University_of_British_Columbia_logo.svg/1200px-University_of_British_Columbia_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png'
    ]
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.shutterstock.com/shutterstock/videos/3955309249/preview/stock-footage-aerial-drone-cinematic-video-of-iconic-tower-bridge-crossing-river-thames-in-city-of-london-united.webm',
    benefits: [
      'World-renowned universities with rich academic heritage',
      'Shorter degree duration (saves time and cost)',
      'Access to global career opportunities',
      'Strong focus on research and practical learning'
    ],
    longDescription: "Studying in the United Kingdom offers a life-changing opportunity to receive a world-class education while experiencing one of the most culturally rich and diverse environments in the world. The UK is home to some of the most prestigious universities globally, known for their high academic standards, innovative teaching methods, and internationally recognized qualifications. Whether you are pursuing undergraduate or postgraduate studies, a UK degree is highly respected by employers worldwide, giving you a strong competitive advantage in your career.\n\nOne of the key benefits of studying in the UK is the shorter duration of courses compared to many other countries. This allows students to save both time and money while still receiving a high-quality education. The UK education system focuses on critical thinking, creativity, and practical skills, helping students become independent learners and problem-solvers.\n\nIn addition, international students have access to excellent support services, modern facilities, and opportunities to work part-time during their studies. After graduation, the UK also offers pathways for students to gain work experience, helping them build a global career.\n\nBeyond academics, studying in the UK provides an unforgettable cultural experience. You will meet people from all over the world, explore historic cities, and enjoy a vibrant lifestyle filled with art, music, and innovation. This exposure not only broadens your perspective but also helps you develop confidence, adaptability, and global connections.\n\nChoosing to study in the UK is more than just earning a degree—it is an investment in your future, opening doors to endless personal and professional opportunities.",
    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/1200px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Imperial_College_London_Crest.svg/1200px-Imperial_College_London_Crest.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/University_College_London_logo.svg/1200px-University_College_London_logo.svg.png'
    ]
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.shutterstock.com/shutterstock/videos/3847386097/preview/stock-footage-shanghai-china-th-june-overlooking-nyu-shanghai-building.webm',
    benefits: [
      'Affordable tuition and living costs',
      'Rapidly growing global education hub',
      'Opportunities to learn Mandarin and experience rich culture',
      'Strong programs in technology, medicine, and business'
    ],
    longDescription: "Studying in China offers a unique and rewarding opportunity to gain a high-quality education while experiencing one of the world’s oldest and most dynamic civilizations. As a global leader in technology, business, and innovation, China provides students with access to cutting-edge knowledge, modern facilities, and internationally recognized universities. A degree from China is increasingly valued worldwide, especially in fields such as engineering, medicine, business, and technology.\n\nOne of the key advantages of studying in China is affordability. Tuition fees and living costs are generally lower compared to many Western countries, making it an excellent choice for students seeking quality education at a reasonable cost. In addition, the Chinese government and universities offer a wide range of scholarships to support international students.\n\nChina’s rapidly growing economy also presents great opportunities for students to gain practical experience and build global career connections. Studying in China allows you to learn Mandarin, one of the most widely spoken languages in the world, giving you a strong competitive edge in international business and communication.\n\nBeyond academics, China offers a rich cultural experience filled with history, tradition, and diversity. From ancient landmarks to modern cities, students can explore a fascinating blend of old and new. The welcoming environment and vibrant student communities make it easy to adapt and feel at home.\n\nChoosing to study in China is more than just earning a degree—it is an opportunity to expand your global perspective, develop valuable skills, and position yourself for success in an increasingly interconnected world.",
    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Tsinghua_University_Logo.svg/1200px-Tsinghua_University_Logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Peking_University_seal.svg/1200px-Peking_University_seal.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fudan_University_logo.svg/1200px-Fudan_University_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Shanghai_Jiao_Tong_University_logo.svg/1200px-Shanghai_Jiao_Tong_University_logo.svg.png'
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