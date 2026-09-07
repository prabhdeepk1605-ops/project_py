import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MongoStatusModal } from './components/MongoStatusModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { PricingView } from './views/PricingView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { NavTab, MongoDbStatus } from './types';
import { api } from './services/api';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');

  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialVehicle, setQuoteInitialVehicle] = useState<{
    make: string;
    model: string;
    location: string;
  } | undefined>(undefined);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>(undefined);
  const [mongoModalOpen, setMongoModalOpen] = useState(false);
  const [mongoStatus, setMongoStatus] = useState<MongoDbStatus | null>(null);

  // Fetch MongoDB Database status from server on mount
  useEffect(() => {
    async function initData() {
      try {
        const dbStat = await api.getDbStatus();
        setMongoStatus(dbStat);
      } catch (err) {
        console.error('Initial DB fetch error:', err);
      }
    }
    initData();
  }, []);

  const handleOpenQuoteModal = (
    initialOrService?: { make: string; model: string; location: string } | string
  ) => {
    if (typeof initialOrService === 'string') {
      setQuoteInitialService(initialOrService);
      setQuoteInitialVehicle(undefined);
    } else if (initialOrService) {
      setQuoteInitialVehicle(initialOrService);
      setQuoteInitialService(undefined);
    } else {
      setQuoteInitialVehicle(undefined);
      setQuoteInitialService(undefined);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f172a] font-body selection:bg-red-100 selection:text-red-700">
      {/* Top Header Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenMongoStatus={() => setMongoModalOpen(true)}
        mongoStatus={mongoStatus}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'pricing' && (
          <PricingView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'gallery' && (
          <GalleryView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
      </main>

      {/* Footer Component */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenQuote={() => handleOpenQuoteModal()}
      />

      {/* Brother Motors Quote & Parts Inquiry Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialVehicle={quoteInitialVehicle}
        initialServiceName={quoteInitialService}
      />

      {/* MongoDB Database Status Modal */}
      <MongoStatusModal
        isOpen={mongoModalOpen}
        onClose={() => setMongoModalOpen(false)}
        status={mongoStatus}
        onStatusUpdate={(newStatus) => setMongoStatus(newStatus)}
      />
    </div>
  );
}
