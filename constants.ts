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
import { ServiceItem, CountryDetail, WorkCountryDetail } from './types';

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
    video: 'https://www.shutterstock.com/shutterstock/videos/3942683181/preview/stock-footage--louisville-superb-quality-aerial-view-shot-of-louisville-kentucky-usa-night.webm',
    benefits: [
      'Home to top-ranked universities and cutting-edge research opportunities',
      'Flexible education system with diverse course options',
      'Strong career prospects and global recognition',
      'Exposure to innovation and multicultural environments'
    ],
    longDescription: "Studying in the USA is a great opportunity for students who want a high-quality education and a better future. The country is home to some of the best universities in the world, known for their excellent teaching, modern facilities, and globally recognized degrees. Students also have the freedom to choose from a wide range of courses and even change their programs if they discover new interests along the way. This flexibility helps them find the right career path.\n\nAnother important reason to study in the USA is the strong career opportunities available. Many universities offer internships and practical training, allowing students to gain real-world experience while studying. A degree from the USA is respected worldwide, which makes it easier to find a good job or continue further education in other countries. In addition, the USA is a leader in technology and innovation, giving students access to advanced knowledge and modern learning environments.\n\nThe USA is also a very diverse country, where students can meet people from different cultures and backgrounds. This helps them build international connections and learn new ways of thinking. Since English is the main language, students also improve their communication skills, which is very important in today’s global world. Living and studying in the USA helps students become more independent, confident, and adaptable.\n\nFinally, studying in the USA offers an exciting and enjoyable student life. There are many activities, events, and travel opportunities that make the experience memorable. With available scholarships and support for international students, studying in the USA becomes an even more attractive option. Overall, choosing to study in the USA can open doors to many opportunities and help students achieve their dreams.",
    universityLogos: [
      'https://upload.wikimedia.org/wikipedia/en/3/3b/Eastern_Illinois_University_seal.svg',
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2023/05/Resize-Banner_0020_-Harvard.jpg',
      'https://1000logos.net/wp-content/uploads/2020/10/University-of-Southern-California-logo.jpg',
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/http://assets.designhill.com/design-blog/wp-content/uploads/2023/05/Resize-Banner_0018_University-of-California-Berkeley.jpg'
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
      'https://www.freelogovectors.net/wp-content/uploads/2019/09/university-of-toronto-logo.png',
      'https://www.arthritisresearch.ca/wp-content/uploads/McGill.png',
      'https://www.cud.ac.ae/sites/default/files/general/2017/partner/university-of-british-columbia-logo.png',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/500px-Oxford-University-Circlet.svg.png',
      'https://www.cam.ac.uk/sites/default/files/secondary-logo-stacked.png',
      'https://miro.medium.com/v2/resize:fit:1400/1*jOp1dHL94GLlAdg9ZoIbPg.png',
      'https://logos-world.net/wp-content/uploads/2023/08/Newcastle-University-Logo.jpg'
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
      'https://upload.wikimedia.org/wikipedia/en/0/06/North_University_of_China_logo.png',
      'https://upload.wikimedia.org/wikipedia/en/1/16/Zhejiang_University_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/en/f/f6/China_Agricultural_University_%28emblem%29.png',
      'https://upload.wikimedia.org/wikipedia/en/e/e0/University_of_South_China_logo.png'
    ]
  }
];

export const WORK_ABROAD_COUNTRIES: WorkCountryDetail[] = [
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.shutterstock.com/shutterstock/videos/3819789505/preview/stock-footage-multiethnic-doctors-medical-diagnostic-team-meeting-heath-research-xray-analyzing-african-men.mp4',
    professions: ['Healthcare', 'IT & Software', 'Engineering'],
    professionDescriptions: {
      'Healthcare': "Working at a healthcare center in the USA is highly important as it offers access to one of the world's most advanced medical systems. Professionals gain exposure to cutting-edge technology, diverse patient populations, and rigorous clinical standards. It provides exceptional opportunities for career growth, competitive compensation, and the chance to make a significant impact on public health in a globally recognized environment.",
      'IT & Software': "Working in the IT and Software sector in the USA is a transformative experience, offering access to the world's most innovative tech hubs. Professionals engage with machine learning, cloud computing, and advanced datasets alongside global industry leaders. It provides unparalleled opportunities for career advancement, high-impact projects, and the chance to shape the future of technology in a highly competitive and rewarding landscape.",
      'Engineering': "Engineering in the USA offers a dynamic and high-impact career path, placing professionals at the forefront of global infrastructure and technological advancement. Working on large-scale projects with diverse teams, engineers utilize state-of-the-art tools and blueprints to solve complex challenges. It provides exceptional opportunities for professional development, innovation, and the chance to build the future in a world-leading economic environment."
    },
    professionVideos: {
      'Healthcare': "https://www.shutterstock.com/shutterstock/videos/3819789505/preview/stock-footage-multiethnic-doctors-medical-diagnostic-team-meeting-heath-research-xray-analyzing-african-men.mp4",
      'IT & Software': "https://www.shutterstock.com/shutterstock/videos/3847155079/preview/stock-footage-data-center-coworkers-having-fun-in-office-using-machine-learning-algorithms-to-analyze-datasets.mp4",
      'Engineering': "https://www.shutterstock.com/shutterstock/videos/3771541997/preview/stock-footage-mixed-races-males-and-female-engineers-in-helmets-and-vests-reviewing-blueprints-and-tablet-at.mp4"
    },
    description: 'Experience the American dream with diverse career opportunities in the world\'s largest economy. From tech hubs in Silicon Valley to healthcare excellence across the nation.'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.shutterstock.com/shutterstock/videos/3782594187/preview/stock-footage-aerial-view-downtown-spokane-wa-riverfront.mp4',
    professions: ['Construction', 'Healthcare', 'Agriculture', 'Technology'],
    professionDescriptions: {
      'Construction': "The construction industry in Canada is a vital sector offering immense opportunities for skilled professionals to contribute to the nation's growing infrastructure. Working on a job site in Canada involves collaboration with diverse teams, adherence to high safety standards, and the use of modern building techniques. It provides a stable career path with competitive wages and the chance to be part of building sustainable communities across the country.",
      'Healthcare': "Working in the Healthcare sector in Canada is a rewarding experience, offering access to one of the world's most inclusive and high-standard medical systems. Professionals engage in advanced surgical procedures and utilize augmented reality displays alongside high-performing medical teams. It provides exceptional opportunities for professional growth, career stability, and the chance to provide life-saving care in a globally respected healthcare environment.",
      'Agriculture': "Agriculture in Canada is a cornerstone of the national economy, offering diverse opportunities in one of the world's most productive farming environments. Working in the Canadian agricultural sector involves utilizing advanced machinery and sustainable practices to manage vast harvests. It provides a unique chance for professionals to work in beautiful rural settings like Alberta, contributing to global food security while enjoying a high quality of life.",
      'Technology': "The Technology sector in Canada is a thriving hub of innovation, offering professionals the chance to work on groundbreaking projects in alternative energy and sustainable design. Working in Canadian tech involves brainstorming with expert teams to develop solar-powered devices and other green technologies. It provides unparalleled opportunities for career advancement, research, and the chance to lead the global transition to a sustainable future."
    },
    professionVideos: {
      'Construction': "https://www.shutterstock.com/shutterstock/videos/3469316779/preview/stock-footage-construction-workers-talking-together-on-job-site.mp4",
      'Healthcare': "https://www.shutterstock.com/shutterstock/videos/3790264629/preview/stock-footage-team-of-surgeons-performing-an-operation-female-consults-the-augmented-reality-display-that.mp4",
      'Agriculture': "https://www.shutterstock.com/shutterstock/videos/1109764259/preview/stock-footage-rocky-view-county-alberta-canada-october-farmers-at-work-as-combine-unloads-grain-during.mp4",
      'Technology': "https://www.shutterstock.com/shutterstock/videos/3890065251/preview/stock-footage-team-of-technicians-brainstorming-solar-powered-device-design-using-alternative-energy-technology.mp4"
    },
    description: 'Canada offers a welcoming environment for skilled workers with various immigration pathways and a high quality of life.'
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.shutterstock.com/shutterstock/videos/3909552885/preview/stock-footage-african-female-doctor-examining-senior-caucasian-male-patient-with-stethoscope-gentle-medical.mp4',
    professions: ['Nursing', 'Education', 'Finance', 'Trade Skills'],
    professionDescriptions: {
      'Nursing': "Nursing in the UK offers a fulfilling career within the world-renowned National Health Service (NHS) and private healthcare sectors. Professionals provide gentle, expert medical care to diverse patient groups, utilizing state-of-the-art diagnostic tools. It provides exceptional opportunities for specialization, career progression, and the chance to make a meaningful difference in a supportive and globally respected medical environment.",
      'Education': "The Education sector in the UK is a prestigious field offering the chance to shape the minds of future generations in a world-class academic environment. Educators work in diverse settings, from historic high schools to modern learning centers, engaging with pupils in uniform and fostering a culture of curiosity and excellence. It provides a stable and rewarding career path with extensive opportunities for professional development and leadership.",
      'Finance': "The Finance sector in the UK is a global powerhouse, offering professionals the opportunity to work at the heart of one of the world's leading financial hubs. Working in UK finance involves expert trading advice, complex stats analysis, and utilizing advanced computer systems to solve global economic challenges. It provides unparalleled opportunities for high-impact projects, competitive compensation, and career growth in a dynamic and highly respected industry.",
      'Trade Skills': "Trade Skills in the UK cover a wide range of essential industries, from industrial food production to advanced manufacturing. Working in the UK's trade sector involves mastering specialized techniques, such as the industrial preparation of pastries and high-volume food processing. It provides excellent opportunities for skilled workers to contribute to the nation's robust supply chain while enjoying job security and competitive wages in a thriving industrial landscape."
    },
    professionVideos: {
      'Nursing': "https://www.shutterstock.com/shutterstock/videos/3909552885/preview/stock-footage-african-female-doctor-examining-senior-caucasian-male-patient-with-stethoscope-gentle-medical.mp4",
      'Education': "https://www.shutterstock.com/shutterstock/videos/1019964313/preview/stock-footage-female-high-school-tutor-asking-pupils-wearing-uniform-sitting-at-desks-question-to-which-they.mp4",
      'Finance': "https://www.shutterstock.com/shutterstock/videos/3741406139/preview/stock-footage-men-graphs-and-computer-screen-for-trading-advice-and-headset-with-stats-analysis-and-problem.mp4",
      'Trade Skills': "https://www.shutterstock.com/shutterstock/videos/3776556225/preview/stock-footage-industrial-preparation-of-pastries-with-apple-jam.mp4"
    },
    description: 'Build your career in the UK, a global financial hub with a rich professional heritage and strong demand for skilled professionals.'
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flag: '🇦🇪',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    video: 'https://www.shutterstock.com/shutterstock/videos/3708144797/preview/stock-footage-aerial-view-of-ain-dubai-ferris-wheel-illuminated-at-night-on-bluewaters-island-in-dubai-marina.mp4',
    professions: ['Construction'],
    professionDescriptions: {
      'Construction': "The construction industry in Dubai is at the forefront of architectural innovation, responsible for some of the world's most iconic landmarks. Professionals in this sector work on large-scale, futuristic projects that push the boundaries of engineering and design. It offers a dynamic career path with exposure to state-of-the-art building technologies and the opportunity to shape the skyline of a global metropolis."
    },
    description: 'Dubai is a land of innovation and luxury, offering tax-free income and career growth in a futuristic city.'
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