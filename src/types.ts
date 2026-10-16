export type Page = 'home' | 'about' | 'work' | 'news' | 'appointment';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  bio: string;
  gearPreference: string;
  signatureWork: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'commercial' | 'architecture' | 'fashion' | 'film' | 'editorial';
  categoryLabel: string;
  year: number;
  image: string;
  aspectRatio?: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  equipment: {
    camera: string;
    lenses: string;
    lighting: string;
  };
  location: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  category: string;
  exif: {
    shutter: string;
    aperture: string;
    iso: string;
    focal: string;
  };
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: 'Industry Insights' | 'Behind The Scenes' | 'Studio News' | 'Gear & Tech';
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
  image: string;
}

export interface AppointmentBooking {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  address: string;
  dateTime: string;
  property: string;
  concept: string;
  note?: string;
  status: 'Confirmed' | 'Pending Review';
  estimatedDuration: string;
}
