import React, { useState } from 'react';
import {
  Wrench,
  Snowflake,
  ShieldCheck,
  Clock,
  Search,
  Phone,
  MessageSquare,
  Cpu,
  CheckCircle,
  Paintbrush,
  Sparkles,
  TrendingDown,
  Car,
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST, SERVICE_CATEGORIES, WORKSHOP_DETAILS, CORE_ADDITIONS } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all-services');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      case 'CheckCircle': return CheckCircle;
      case 'Snowflake': return Snowflake;
      case 'ShieldCheck': return ShieldCheck;
      case 'Paintbrush': return Paintbrush;
      case 'TrendingDown': return TrendingDown;
      case 'Car': return Car;
      default: return Wrench;
    }
  };

  const filteredServices = SERVICES_LIST.filter((svc) => {
    const matchesCat = activeCategory === 'all-services' || svc.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-wider">
          Complete Automotive Capabilities
        </span>
        <h1 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-gray-900">
          Brother Motors Services & Parts
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-body">
          From ₹300 routine servicing and AC gas refills to complete paint booth jobs, 20–30% cheaper car disposal parts, and government vehicle trades.
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CORE_ADDITIONS.map((core) => (
          <div
            key={core.id}
            className="bg-white rounded-2xl p-5 border border-gray-200 shadow-2xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-2">
                {core.badge}
              </span>
              <h3 className="font-headline font-bold text-base text-gray-900 mb-1.5">
                {core.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {core.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <a
                href={`tel:${WORKSHOP_DETAILS.phone1}`}
                className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                <Phone className="w-3 h-3" /> Call Inquire: {WORKSHOP_DETAILS.phone1}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Category Filter Bar */}
      <div className="space-y-4">
        {/* Search */}
        <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-3 max-w-2xl mx-auto focus-within:border-red-400 transition-colors">
          <Search className="w-4 h-4 text-gray-400 ml-1" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search service, part, or repair (e.g., Alto, AC gas, paint, disposal parts)..."
            className="flex-1 text-xs sm:text-sm bg-transparent border-none focus:outline-none text-gray-900 placeholder-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-gray-500 hover:text-gray-900 font-bold px-2"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((svc) => {
          const IconComp = getServiceIcon(svc.icon);
          return (
            <div
              key={svc.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-100 transition-colors flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  {svc.price > 0 ? (
                    <div className="text-right">
                      <div className="text-xl font-headline font-black text-gray-900">
                        ₹{svc.price}
                      </div>
                      {svc.originalPrice && (
                        <div className="text-[11px] text-gray-400 line-through">
                          ₹{svc.originalPrice}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                      Custom Estimate
                    </span>
                  )}
                </div>

                <h3 className="font-headline font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors mb-1.5">
                  {svc.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {svc.shortDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-1.5 mb-4 text-xs text-gray-700">
                  {svc.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                <a
                  href={`tel:${WORKSHOP_DETAILS.phone1}`}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Now
                </a>
                <button
                  onClick={() => onOpenQuoteModal(svc.title)}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-bold py-2.5 px-3 rounded-xl border border-gray-200 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Assistance Banner */}
      <div className="bg-red-50/50 rounded-3xl p-6 sm:p-10 border border-red-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
            Looking for a Specific Part or Custom Repair?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
            We have spare parts for all cars and certified car disposal parts at 20%–30% savings. Call our Rampura Phul workshop directly.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${WORKSHOP_DETAILS.phone1}`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <Phone className="w-4 h-4" /> {WORKSHOP_DETAILS.phone1}
          </a>
          <a
            href={`https://wa.me/917837600098`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
