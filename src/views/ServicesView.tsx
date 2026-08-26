import React, { useState } from 'react';
import {
  Wrench,
  Sliders,
  Sun,
  Snowflake,
  BatteryCharging,
  Disc,
  Sparkles,
  Settings2,
  ShieldCheck,
  FileText,
  Clock,
  Check,
  ArrowRight,
  Send,
  Layers,
  Cpu,
  CheckCircle,
  Paintbrush,
  Droplets
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenBooking,
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('our-services');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Sliders': return Sliders;
      case 'Sun': return Sun;
      case 'Snowflake': return Snowflake;
      case 'BatteryCharging': return BatteryCharging;
      case 'Disc': return Disc;
      case 'Sparkles': return Sparkles;
      case 'Settings2': return Settings2;
      case 'ShieldCheck': return ShieldCheck;
      case 'FileText': return FileText;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      default: return Wrench;
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      case 'CheckCircle': return CheckCircle;
      case 'Snowflake': return Snowflake;
      case 'BatteryCharging': return BatteryCharging;
      case 'Disc': return Disc;
      case 'Paintbrush': return Paintbrush;
      case 'Droplets': return Droplets;
      case 'Sun': return Sun;
      case 'Sliders': return Sliders;
      case 'Layers': return Layers;
      default: return Wrench;
    }
  };

  // Filtered services
  const filteredServices = SERVICES_LIST.filter((svc) => {
    const matchesCat = activeCategory === 'all' || svc.category === activeCategory || (activeCategory === 'our-services' && svc.category === 'our-services');
    const matchesSearch =
      searchQuery.trim() === '' ||
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filter (Desktop) - Matches HTML / Screenshot */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="sticky top-24 bg-[#f5f1ea] rounded-2xl p-6 shadow-sm border border-[#c4c8bc]/40 space-y-4">
          <h3 className="font-headline font-bold text-lg text-[#2e3230]">
            Categories
          </h3>

          <ul className="space-y-1.5 font-body">
            {SERVICE_CATEGORIES.map((cat) => {
              const IconComp = getCategoryIcon(cat.icon);
              const isActive = activeCategory === cat.id;
              return (
                <li key={cat.id}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#d8f0de] text-[#2a6038] font-bold shadow-2xs'
                        : 'text-[#5a5f5c] hover:text-[#4a7c59] hover:bg-[#eae6de]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-[#4a7c59]' : 'text-[#74796e]'}`} />
                      {cat.name}
                    </span>
                    {cat.isNew && (
                      <span className="text-[10px] font-bold bg-[#705c30] text-white px-1.5 py-0.2 rounded-full">
                        New
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="pt-4 border-t border-[#eae6de]">
            <button
              onClick={() => setActiveCategory('all')}
              className={`w-full py-2 rounded-xl text-xs font-bold text-center border transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#4a7c59] text-white border-[#4a7c59]'
                  : 'bg-white text-[#5a5f5c] border-[#c4c8bc] hover:bg-[#f0ece4]'
              }`}
            >
              View All ({SERVICES_LIST.length} Services)
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow space-y-8">
        {/* Mobile Category Filter Pills (Matches HTML) */}
        <div className="md:hidden overflow-x-auto pb-2 flex gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`whitespace-nowrap px-4 py-2 rounded-full font-bold text-xs shadow-2xs transition-all ${
              activeCategory === 'all'
                ? 'bg-[#4a7c59] text-white'
                : 'bg-[#eae6de] text-[#5a5f5c]'
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-bold text-xs shadow-2xs transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#4a7c59] text-white'
                  : 'bg-[#eae6de] text-[#5a5f5c] hover:bg-[#e4e0d8]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Section Header with Amber Accent Line */}
        <div className="space-y-3">
          <div className="w-16 h-1 bg-[#705c30] rounded-full" />
          <h1 className="font-headline font-bold text-3xl md:text-4xl text-[#2e3230]">
            Workshop Services Available In-Studio
          </h1>
          <p className="font-body text-[#5a5f5c] text-base md:text-lg max-w-3xl leading-relaxed">
            Choose from a wide assortment of organic craftsmanship services from periodic maintenance, tool care, restorative detailing, and much more, all handled with rooted warmth.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-[#ffffff] p-3 rounded-2xl border border-[#c4c8bc]/40 shadow-xs flex items-center gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any service (e.g., Brake, Synthetic Oil, AC Gas, Paint, Spa)..."
            className="flex-1 text-xs sm:text-sm bg-transparent border-none focus:outline-none text-[#2e3230] placeholder-[#74796e] px-2 font-body"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#74796e] hover:text-[#2e3230] px-2 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Service Cards Grid - Bento Layout matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.length === 0 ? (
            <div className="col-span-full py-12 text-center space-y-3 bg-[#f5f1ea] rounded-2xl">
              <div className="text-[#74796e] text-sm">No services found matching your query.</div>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="text-xs font-bold text-[#4a7c59] underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredServices.map((svc) => {
              const IconComponent = getServiceIcon(svc.icon);
              return (
                <div
                  key={svc.id}
                  className="bg-[#ffffff] rounded-2xl p-6 shadow-[0_4px_20px_rgba(46,50,48,0.05)] border border-[#c4c8bc]/30 flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(46,50,48,0.12)] transition-all group relative overflow-hidden cursor-pointer"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4a7c59]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* New badge if applicable */}
                  {svc.isNew && (
                    <div className="absolute top-0 right-0 bg-[#705c30] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl z-20 shadow-2xs">
                      New
                    </div>
                  )}

                  {/* Round Icon Container (Matches screenshot) */}
                  <div className="w-20 h-20 rounded-full bg-[#f5f1ea] flex items-center justify-center mb-4 group-hover:scale-108 group-hover:bg-[#d8f0de] transition-all">
                    <IconComponent className="w-9 h-9 text-[#4a7c59]" />
                  </div>

                  <h3 className="font-headline font-bold text-lg text-[#2e3230] mb-1.5 relative z-10 group-hover:text-[#4a7c59] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="font-body text-[#5a5f5c] text-xs sm:text-sm mb-4 flex-grow relative z-10 leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  <div className="w-full pt-3 border-t border-[#f0ece4] flex items-center justify-between text-xs text-[#5a5f5c] mb-4 relative z-10">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#74796e]" /> {svc.duration}
                    </span>
                    <span className="font-bold text-sm text-[#4a7c59]">
                      ₹{svc.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Book Now Button (Matches Screenshot & HTML) */}
                  <button
                    onClick={() => onOpenBooking(svc.id)}
                    className="w-full bg-[#f5f1ea] text-[#4a7c59] border border-[#4a7c59]/30 hover:bg-[#4a7c59] hover:text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all relative z-10 shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              );
            })
          )}

          {/* Promo Banner spanning full columns (Matches screenshot & HTML) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 bg-[#78a886] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden gap-6">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#4a7c59]/20 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-[#002110] mb-2">
                Need a custom quote?
              </h2>
              <p className="font-body text-[#002110]/80 text-sm sm:text-base leading-relaxed">
                Our artisans can craft a tailored service plan specifically for your unique vehicle needs. Connect with our team today.
              </p>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="relative z-10 bg-[#faf6f0] text-[#2a6038] hover:bg-[#2e3230] hover:text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm whitespace-nowrap cursor-pointer transform active:scale-95"
            >
              Contact Artisans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
