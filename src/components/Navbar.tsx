import React, { useState } from 'react';
import {
  Wrench,
  MapPin,
  Phone,
  MessageSquare,
  Instagram,
  Menu,
  X,
  ExternalLink,
  Database,
  Sparkles,
  Car
} from 'lucide-react';
import { NavTab, MongoDbStatus } from '../types';
import { WORKSHOP_DETAILS } from '../data/mockData';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenQuoteModal: () => void;
  onOpenMongoStatus?: () => void;
  mongoStatus?: MongoDbStatus | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenQuoteModal,
  onOpenMongoStatus,
  mongoStatus,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Parts' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-200 shadow-xs">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            id="brand-logo-btn"
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-headline font-black text-gray-900 group-hover:text-red-600 transition-colors leading-none tracking-tight">
                BROTHER <span className="text-red-600">MOTORS</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-gray-500 font-semibold mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-600" /> Rampura Phul (BTI.)
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center font-body text-sm font-semibold">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`py-1 transition-all cursor-pointer ${
                  isActive
                    ? 'text-red-600 border-b-2 border-red-600 font-bold'
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50/70 px-2 py-1 rounded-md'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Instagram Reviews link */}
          <a
            href={WORKSHOP_DETAILS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            title="Check reviews on Instagram @brother._motors"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-[#d6249f] bg-white px-2.5 py-1.5 rounded-xl border border-gray-200 shadow-2xs transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#d6249f]" />
            <span className="hidden xl:inline text-[11px]">{WORKSHOP_DETAILS.instagramHandle}</span>
          </a>

          {/* Database status button */}
          {onOpenMongoStatus && (
            <button
              id="mongo-status-pill-btn"
              onClick={onOpenMongoStatus}
              title="Database Status"
              className="hidden md:flex items-center gap-1 text-xs font-semibold px-2 py-1.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <Database className="w-3 h-3 text-red-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            </button>
          )}

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917837600098"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-[#25D366] hover:text-white hover:bg-[#25D366] font-bold text-xs px-3 py-2 rounded-xl border border-[#25D366]/40 transition-colors shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          {/* Direct Call Button */}
          <a
            href={`tel:${WORKSHOP_DETAILS.phone1}`}
            className="bg-red-600 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl hover:bg-red-700 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-5 shadow-lg space-y-4">
          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
            <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-red-600" /> {WORKSHOP_DETAILS.name}
            </div>
            <div className="text-[11px] text-gray-600">
              {WORKSHOP_DETAILS.address} • Open 8:00 AM – 6:00 PM
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  currentTab === item.id
                    ? 'bg-red-50 text-red-700 border-l-4 border-red-600'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <a
              href={`tel:${WORKSHOP_DETAILS.phone1}`}
              className="w-full py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-xs hover:bg-red-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call: {WORKSHOP_DETAILS.phone1}
            </a>
            <a
              href={`tel:${WORKSHOP_DETAILS.phone2}`}
              className="w-full py-2 rounded-xl bg-white border border-gray-200 text-gray-800 font-bold text-xs text-center flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" /> Call: {WORKSHOP_DETAILS.phone2}
            </a>
            <a
              href="https://wa.me/917837600098"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
            </a>
            <a
              href={WORKSHOP_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 rounded-xl bg-white border border-[#d6249f]/40 text-gray-800 font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <Instagram className="w-3.5 h-3.5 text-[#d6249f]" /> Reviews on Instagram {WORKSHOP_DETAILS.instagramHandle}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
