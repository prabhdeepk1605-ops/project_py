import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SpecializedCareModal } from './components/SpecializedCareModal';
import { QuoteModal } from './components/QuoteModal';
import { LoginModal } from './components/LoginModal';
import { BookingTrackerModal } from './components/BookingTrackerModal';
import { MongoStatusModal } from './components/MongoStatusModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { PricingView } from './views/PricingView';
import { BookingView } from './views/BookingView';
import { WorkshopsView } from './views/WorkshopsView';
import { BlogView } from './views/BlogView';
import { NavTab, SpecializedCareItem, WorkshopLocation, BookingState, MongoDbStatus } from './types';
import { WORKSHOP_LOCATIONS, SPECIALIZED_CARE } from './data/mockData';
import { api } from './services/api';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedLocation, setSelectedLocation] = useState<WorkshopLocation>(WORKSHOP_LOCATIONS[0]);

  // Modals state
  const [specializedModalItem, setSpecializedModalItem] = useState<SpecializedCareItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialVehicle, setQuoteInitialVehicle] = useState<{
    make: string;
    model: string;
    location: string;
  } | undefined>(undefined);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [trackerModalOpen, setTrackerModalOpen] = useState(false);
  const [mongoModalOpen, setMongoModalOpen] = useState(false);
  const [mongoStatus, setMongoStatus] = useState<MongoDbStatus | null>(null);

  // Booking Flow parameters
  const [prefilledServiceId, setPrefilledServiceId] = useState<string | undefined>(undefined);
  const [prefilledMake, setPrefilledMake] = useState<string | undefined>(undefined);
  const [prefilledModel, setPrefilledModel] = useState<string | undefined>(undefined);

  // User state
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    vehicle: string;
  } | null>(() => {
    const saved = localStorage.getItem('terra_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Bookings list state
  const [bookings, setBookings] = useState<BookingState[]>(() => {
    const saved = localStorage.getItem('terra_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: 'TERRA-4819-VIZ',
        locationId: 'vijayawada-central',
        vehicleType: 'sedan',
        make: 'Maruti Suzuki',
        model: 'Swift ZXi (Petrol)',
        year: '2022',
        fuelType: 'Petrol',
        selectedServices: ['Essential Servicing', 'AC Service & Gas Top-up'],
        addOns: ['Eco Waterless Foam Wash'],
        serviceMode: 'valet',
        date: new Date().toISOString().split('T')[0],
        timeSlot: '10:30 AM - 12:30 PM',
        customerName: 'Rahul Varma',
        customerPhone: '+91 98480 22334',
        customerEmail: 'rahul.varma@example.com',
        pickupAddress: 'Flat 402, Green Meadows, Labbipet, Vijayawada',
        notes: 'Please check brake pedal squeal.',
        totalEstimatedPrice: 4197,
        totalSavings: 1100,
        status: 'confirmed',
        createdAt: 'Today',
      },
    ];
  });

  // Fetch MongoDB Database status & Bookings from server on mount
  useEffect(() => {
    async function initData() {
      try {
        const [dbStat, serverBookings] = await Promise.all([
          api.getDbStatus(),
          api.getBookings(),
        ]);
        setMongoStatus(dbStat);
        if (serverBookings && serverBookings.length > 0) {
          setBookings(serverBookings);
        }
      } catch (err) {
        console.error('Initial DB fetch error:', err);
      }
    }
    initData();
  }, []);

  // Save bookings to localStorage as offline mirror
  useEffect(() => {
    localStorage.setItem('terra_bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Save user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('terra_user', JSON.stringify(user));
      api.saveUserProfile(user);
    } else {
      localStorage.removeItem('terra_user');
    }
  }, [user]);

  // Actions
  const handleOpenBooking = (serviceId?: string, make?: string, model?: string) => {
    setPrefilledServiceId(serviceId);
    setPrefilledMake(make);
    setPrefilledModel(model);
    setCurrentTab('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingCompleted = (newBooking: BookingState) => {
    setBookings((prev) => [newBooking, ...prev.filter((b) => b.id !== newBooking.id)]);
    // Refresh DB status doc count
    api.getDbStatus().then(setMongoStatus);
  };

  const handleCancelBooking = async (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    await api.deleteBooking(bookingId);
    api.getDbStatus().then(setMongoStatus);
  };

  const handleOpenQuoteModal = (initial?: { make: string; model: string; location: string }) => {
    setQuoteInitialVehicle(initial);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6f0] text-[#2e3230] font-body selection:bg-[#d8f0de] selection:text-[#2a6038]">
      {/* Top Header Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        onOpenBooking={() => handleOpenBooking()}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenTracker={() => setTrackerModalOpen(true)}
        onOpenMongoStatus={() => setMongoModalOpen(true)}
        mongoStatus={mongoStatus}
        bookingsCount={bookings.length}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={handleOpenBooking}
            onOpenSpecializedModal={(item) => setSpecializedModalItem(item)}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onOpenBooking={handleOpenBooking}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentTab === 'pricing' && (
          <PricingView onOpenBooking={handleOpenBooking} />
        )}

        {currentTab === 'workshops' && (
          <WorkshopsView
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
            onBookAtLocation={(locId) => {
              const loc = WORKSHOP_LOCATIONS.find((l) => l.id === locId);
              if (loc) setSelectedLocation(loc);
              handleOpenBooking();
            }}
          />
        )}

        {currentTab === 'blog' && <BlogView />}

        {currentTab === 'book' && (
          <BookingView
            initialServiceId={prefilledServiceId}
            initialMake={prefilledMake}
            initialModel={prefilledModel}
            onBookingComplete={handleBookingCompleted}
            onCancel={() => setCurrentTab('home')}
          />
        )}
      </main>

      {/* Footer Component */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuote={() => handleOpenQuoteModal()}
      />

      {/* Specialized Treatment Modal */}
      <SpecializedCareModal
        item={specializedModalItem}
        onClose={() => setSpecializedModalItem(null)}
        onBookNow={(treatmentId) => handleOpenBooking(treatmentId)}
      />

      {/* Artisan Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialVehicle={quoteInitialVehicle}
      />

      {/* User Login & Garage Profile Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        user={user}
        onLogin={(userData) => setUser(userData)}
        onLogout={() => setUser(null)}
      />

      {/* Booking Tracker Modal */}
      <BookingTrackerModal
        isOpen={trackerModalOpen}
        onClose={() => setTrackerModalOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

      {/* MongoDB Database Status & Cluster Manager Modal */}
      <MongoStatusModal
        isOpen={mongoModalOpen}
        onClose={() => setMongoModalOpen(false)}
        status={mongoStatus}
        onStatusUpdate={(newStatus) => setMongoStatus(newStatus)}
      />
    </div>
  );
}

