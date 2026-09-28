export type Dietary = 'vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'nut-free';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'botanicals' | 'eats' | 'bites' | 'combos';
  price: number;
  studentPrice?: number;
  description: string;
  dietary?: Dietary[];
  caffeine: 'none' | 'gentle' | 'balanced' | 'high';
  highlights: string;
  image?: string;
  popular?: boolean;
}

export interface Zone {
  id: string;
  name: string;
  tagline: string;
  noiseLevel: string;
  decibel: number;
  lighting: string;
  idealFor: string;
  capacity: number;
  availableSeats: number;
  powerOutlets: string;
  features: string[];
  image: string;
}

export interface BusinessPillar {
  title: string;
  subtitle: string;
  revenueShare: string;
  description: string;
  operationalSecret: string;
  metric: string;
}

export interface CommunityNote {
  id: string;
  category: 'study-group' | 'project-collab' | 'book-barter' | 'creative-gig';
  title: string;
  author: string;
  major: string;
  timeAgo: string;
  contact: string;
  badge: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  hasBYOCTumbler: boolean;
}
