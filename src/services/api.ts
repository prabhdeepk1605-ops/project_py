import { BookingState, QuoteRequest, MongoDbStatus } from '../types';

export const api = {
  // Fetch MongoDB connection & collection metrics
  async getDbStatus(): Promise<MongoDbStatus> {
    try {
      const res = await fetch('/api/db/status');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err: any) {
      return {
        connected: false,
        configured: false,
        message: 'Running in offline/client mode',
      };
    }
  },

  // Re-trigger MongoDB connection attempt
  async reconnectDb(): Promise<MongoDbStatus> {
    try {
      const res = await fetch('/api/db/reconnect', { method: 'POST' });
      return await res.json();
    } catch (err: any) {
      return {
        connected: false,
        configured: false,
        message: err?.message || 'Reconnect failed',
      };
    }
  },

  // Fetch all bookings from MongoDB / backend
  async getBookings(): Promise<BookingState[]> {
    try {
      const res = await fetch('/api/bookings');
      if (!res.ok) throw new Error('Failed to fetch bookings');
      return await res.json();
    } catch (err) {
      console.warn('API error fetching bookings, falling back to localStorage');
      const saved = localStorage.getItem('terra_bookings');
      return saved ? JSON.parse(saved) : [];
    }
  },

  // Create a new booking
  async createBooking(booking: Partial<BookingState>): Promise<BookingState> {
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });
      if (!res.ok) throw new Error('Failed to save booking');
      const data = await res.json();
      return data.booking;
    } catch (err) {
      console.warn('Backend API unavailable, using offline fallback');
      const offlineBooking: BookingState = {
        ...(booking as any),
        id: booking.id || `TERRA-${Math.floor(1000 + Math.random() * 9000)}-OFFLINE`,
        createdAt: new Date().toISOString(),
      };
      return offlineBooking;
    }
  },

  // Delete / cancel booking
  async deleteBooking(id: string): Promise<boolean> {
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
      return res.ok;
    } catch (err) {
      return true;
    }
  },

  // Submit quote request
  async submitQuote(quote: Partial<QuoteRequest>): Promise<QuoteRequest> {
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quote),
      });
      const data = await res.json();
      return data.quote;
    } catch (err) {
      return {
        ...(quote as any),
        id: `QUOTE-${Math.floor(1000 + Math.random() * 9000)}`,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
    }
  },

  // Fetch Quotes
  async getQuotes(): Promise<QuoteRequest[]> {
    try {
      const res = await fetch('/api/quotes');
      if (!res.ok) throw new Error('Failed to fetch quotes');
      return await res.json();
    } catch (err) {
      return [];
    }
  },

  // User Profile
  async getUserProfile(phone: string): Promise<any | null> {
    try {
      const res = await fetch(`/api/users/profile/${encodeURIComponent(phone)}`);
      if (!res.ok) return null;
      return await res.json();
    } catch (err) {
      return null;
    }
  },

  async saveUserProfile(user: any): Promise<boolean> {
    try {
      const res = await fetch('/api/users/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      return res.ok;
    } catch (err) {
      return true;
    }
  },
};
