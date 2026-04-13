import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface CountryDetail {
  id: string;
  name: string;
  flag: string;
  image: string;
  video?: string;
  benefits: string[];
  longDescription?: string;
  universityLogos?: string[];
}

export interface WorkCountryDetail {
  id: string;
  name: string;
  flag: string;
  image: string;
  video?: string;
  professions: string[];
  description: string;
  professionDescriptions?: Record<string, string>;
  professionVideos?: Record<string, string>;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}