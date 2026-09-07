export type NavTab = 'home' | 'services' | 'pricing' | 'gallery' | 'contact';

export interface GalleryMediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  category: 'repair' | 'paint' | 'parts' | 'workshop' | 'overhaul';
  description?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  isNew?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  originalPrice?: number;
  savingsPercent?: number;
  duration: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean;
  features: string[];
  recommendedInterval?: string;
  tags: string[];
}

export interface PricingTableRow {
  id: string;
  serviceType: string;
  icon: string;
  price: number;
  savings: string;
  category: string;
  duration: string;
  included: string[];
}

export interface VehicleMake {
  id: string;
  name: string;
  models: {
    name: string;
    type: 'Hatchback' | 'Sedan' | 'SUV' | 'EV' | 'MUV';
    fuelOptions: string[];
    priceMultiplier: number;
  }[];
}

export interface WorkshopLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  reviewsCount: number;
  features: string[];
  imageUrl: string;
}

export interface BookingState {
  id?: string;
  locationId: string;
  vehicleType: string;
  make: string;
  model: string;
  year?: string;
  fuelType?: string;
  registrationNumber?: string;
  selectedServices: string[];
  addOns: string[];
  serviceMode: 'valet' | 'workshop';
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  pickupAddress?: string;
  notes?: string;
  totalEstimatedPrice: number;
  totalSavings: number;
  status: 'confirmed' | 'in-progress' | 'completed';
  createdAt: string;
}

export interface SpecializedCareItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  imageUrl: string;
  duration: string;
  priceRange: string;
  benefits: string[];
}

export interface CustomerReview {
  id: string;
  author: string;
  vehicle: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'service' | 'warranty' | 'parts';
}

export interface QuoteRequest {
  id?: string;
  make: string;
  model: string;
  year?: string;
  location: string;
  serviceCategory?: string;
  message?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  estimatedBudget?: string;
  status: 'pending' | 'reviewed' | 'quoted';
  createdAt: string;
}

export interface MongoDbStatus {
  connected: boolean;
  configured: boolean;
  dbName?: string;
  collections?: {
    name: string;
    count: number;
  }[];
  message: string;
  latencyMs?: number;
}
