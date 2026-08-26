import React, { useState } from 'react';
import {
  Leaf,
  Wrench,
  MapPin,
  Calendar,
  User,
  Menu,
  X,
  PhoneCall,
  Sparkles,
  ClipboardList,
  Database
} from 'lucide-react';
import { NavTab, WorkshopLocation, MongoDbStatus } from '../types';
import { WORKSHOP_LOCATIONS } from '../data/mockData';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  selectedLocation: WorkshopLocation;
  onSelectLocation: (location: WorkshopLocation) => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenLogin: () => void;
  onOpenTracker: () => void;
  onOpenMongoStatus?: () => void;
  mongoStatus?: MongoDbStatus | null;
  bookingsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  selectedLocation,
  onSelectLocation,
  onOpenBooking,
  onOpenLogin,
  onOpenTracker,
  onOpenMongoStatus,
  mongoStatus,
  bookingsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <header className="bg-[#faf6f0] border-b border-[#eae6de] sticky top-0 z-50 transition-all duration-200">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3.5 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            id="brand-logo-btn"
            onClick={() => onSelectTab('home')}
            className="text-2xl font-headline font-black text-[#4a7c59] flex items-center gap-2 text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#d8f0de] flex items-center justify-center text-[#4a7c59] group-hover:scale-105 transition-transform shadow-xs">
              <Leaf className="w-5 h-5 fill-[#4a7c59]" />
            </div>
            <span className="tracking-tight text-xl sm:text-2xl text-[#2e3230] group-hover:text-[#4a7c59] transition-colors">
              Terra <span className="text-[#4a7c59]">Workshop</span>
            </span>
          </button>

          {/* Location Chip Selector */}
          <div className="relative hidden lg:block ml-2">
            <button
              id="location-picker-btn"
              onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#5a5f5c] bg-[#f0ece4] hover:bg-[#eae6de] px-3 py-1.5 rounded-full transition-colors border border-[#c4c8bc]/40"
            >
              <MapPin className="w-3.5 h-3.5 text-[#4a7c59]" />
              <span className="truncate max-w-[130px]">{selectedLocation.city.split(',')[0]}</span>
              <span className="text-[10px] text-[#74796e]">▼</span>
            </button>

            {locationDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-[#c4c8bc]/50 py-2 z-50">
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#74796e] uppercase tracking-wider">
                  Select Workshop Hub
                </div>
                {WORKSHOP_LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => {
                      onSelectLocation(loc);
                      setLocationDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-start gap-2 hover:bg-[#f5f1ea] transition-colors ${
                      loc.id === selectedLocation.id ? 'bg-[#d8f0de]/50 font-bold text-[#4a7c59]' : 'text-[#2e3230]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 mt-0.5 text-[#4a7c59] shrink-0" />
                    <div>
                      <div className="font-semibold">{loc.city}</div>
                      <div className="text-[11px] text-[#5a5f5c] truncate">{loc.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-body text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`py-1 transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#4a7c59] border-b-2 border-[#4a7c59] font-bold pb-0.5'
                    : 'text-[#5a5f5c] hover:text-[#4a7c59] hover:bg-[#f0ece4]/50 px-2 rounded-md'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* MongoDB DB Status Pill */}
          {onOpenMongoStatus && (
            <button
              id="mongo-status-pill-btn"
              onClick={onOpenMongoStatus}
              title="MongoDB Database Status"
              className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                mongoStatus?.connected
                  ? 'bg-[#d8f0de] text-[#2a6038] border-[#4a7c59]/40 hover:bg-[#c4ecd0]'
                  : 'bg-[#f0ece4] text-[#5a5f5c] border-[#c4c8bc]/60 hover:bg-[#eae6de]'
              }`}
            >
              <Database className="w-3.5 h-3.5 text-[#4a7c59]" />
              <span className="hidden lg:inline text-[11px]">
                {mongoStatus?.connected ? 'MongoDB Active' : 'MongoDB'}
              </span>
              <span
                className={`w-2 h-2 rounded-full ${
                  mongoStatus?.connected ? 'bg-[#4a7c59] animate-pulse' : 'bg-[#705c30]'
                }`}
              />
            </button>
          )}

          {/* Active Bookings Tracker Button */}
          {bookingsCount > 0 && (
            <button
              id="view-bookings-btn"
              onClick={onOpenTracker}
              className="flex items-center gap-1.5 text-xs font-bold text-[#705c30] bg-[#f8e0a8]/40 hover:bg-[#f8e0a8]/80 border border-[#705c30]/30 px-3 py-2 rounded-xl transition-colors"
              title="Track Active Appointments"
            >
              <ClipboardList className="w-4 h-4 text-[#705c30]" />
              <span className="hidden sm:inline">Bookings</span>
              <span className="w-5 h-5 rounded-full bg-[#705c30] text-white text-[11px] flex items-center justify-center font-black">
                {bookingsCount}
              </span>
            </button>
          )}

          <button
            id="login-modal-btn"
            onClick={onOpenLogin}
            className="hidden sm:flex items-center gap-1.5 text-[#4a7c59] hover:text-[#2a6038] font-body font-semibold text-sm px-3 py-2 hover:bg-[#f0ece4] transition-colors rounded-xl border border-[#c4c8bc]/40"
          >
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>

          <button
            id="primary-book-now-btn"
            onClick={() => onOpenBooking()}
            className="bg-[#4a7c59] text-white font-body font-bold text-sm px-4 sm:px-5 py-2.5 rounded-xl hover:bg-[#2a6038] transition-all shadow-xs hover:shadow-md flex items-center gap-1.5 cursor-pointer transform active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#2e3230] hover:bg-[#f0ece4] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf6f0] border-t border-[#eae6de] px-6 py-5 shadow-lg space-y-4">
          {/* Location Selector for Mobile */}
          <div className="bg-[#f0ece4] p-3 rounded-xl">
            <div className="text-xs font-bold text-[#5a5f5c] mb-1.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#4a7c59]" /> Workshop Hub
            </div>
            <select
              value={selectedLocation.id}
              onChange={(e) => {
                const loc = WORKSHOP_LOCATIONS.find((l) => l.id === e.target.value);
                if (loc) onSelectLocation(loc);
              }}
              className="w-full text-xs font-semibold bg-white border border-[#c4c8bc] rounded-lg p-2 text-[#2e3230]"
            >
              {WORKSHOP_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name} ({loc.city})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                onSelectTab('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg text-base font-semibold ${
                currentTab === 'home' ? 'bg-[#d8f0de] text-[#4a7c59]' : 'text-[#2e3230]'
              }`}
            >
              Home
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-base font-semibold ${
                  currentTab === item.id ? 'bg-[#d8f0de] text-[#4a7c59]' : 'text-[#2e3230]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#eae6de] flex flex-col gap-2">
            {onOpenMongoStatus && (
              <button
                onClick={() => {
                  onOpenMongoStatus();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl border border-[#c4c8bc] bg-[#f0ece4] text-center font-bold text-xs text-[#2e3230] flex items-center justify-center gap-1.5"
              >
                <Database className="w-4 h-4 text-[#4a7c59]" /> MongoDB Database Info
              </button>
            )}
            <button
              onClick={() => {
                onOpenLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-[#c4c8bc] text-center font-bold text-sm text-[#4a7c59]"
            >
              Account / Login
            </button>
            {bookingsCount > 0 && (
              <button
                onClick={() => {
                  onOpenTracker();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-[#f8e0a8]/60 text-center font-bold text-sm text-[#705c30]"
              >
                Track My Bookings ({bookingsCount})
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

