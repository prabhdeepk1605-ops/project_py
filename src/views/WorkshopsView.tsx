import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ShieldCheck,
  Coffee,
  Sun,
  Droplets,
  Video,
  CheckCircle,
  Navigation
} from 'lucide-react';
import { WORKSHOP_LOCATIONS } from '../data/mockData';
import { WorkshopLocation } from '../types';

interface WorkshopsViewProps {
  selectedLocation: WorkshopLocation;
  onSelectLocation: (loc: WorkshopLocation) => void;
  onBookAtLocation: (locationId: string) => void;
}

export const WorkshopsView: React.FC<WorkshopsViewProps> = ({
  selectedLocation,
  onSelectLocation,
  onBookAtLocation,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedLocation.id);

  const activeHub = WORKSHOP_LOCATIONS.find((l) => l.id === activeTab) || WORKSHOP_LOCATIONS[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#4a7c59] bg-[#d8f0de] px-3 py-1 rounded-full uppercase tracking-wider">
          Eco-Conscious Infrastructure
        </span>
        <h1 className="font-headline font-bold text-3xl md:text-5xl text-[#2e3230]">
          Our Workshop Studios
        </h1>
        <p className="text-[#5a5f5c] text-sm sm:text-base leading-relaxed font-body">
          Each Terra Workshop is custom-engineered with closed-loop water treatment, solar-assisted bays, and calm artisan customer lounges.
        </p>
      </div>

      {/* Workshop Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORKSHOP_LOCATIONS.map((loc) => {
          const isSelected = loc.id === activeHub.id;
          return (
            <div
              key={loc.id}
              onClick={() => {
                setActiveTab(loc.id);
                onSelectLocation(loc);
              }}
              className={`rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#ffffff] border-[#4a7c59] shadow-md ring-2 ring-[#4a7c59]/20'
                  : 'bg-[#f5f1ea] border-[#c4c8bc]/40 hover:bg-white hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#705c30]">
                    <Star className="w-3.5 h-3.5 fill-[#705c30]" />
                    <span>{loc.rating}</span>
                  </div>
                </div>

                <h3 className="font-headline font-bold text-base text-[#2e3230] mb-1">
                  {loc.city}
                </h3>
                <p className="text-xs text-[#5a5f5c] line-clamp-2 mb-4">{loc.address}</p>
              </div>

              <div className="pt-3 border-t border-[#eae6de] space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-[#5a5f5c]">
                  <Phone className="w-3.5 h-3.5 text-[#4a7c59]" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#5a5f5c]">
                  <Clock className="w-3.5 h-3.5 text-[#4a7c59]" />
                  <span className="truncate">{loc.hours}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Studio Deep Dive */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#c4c8bc]/40 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#705c30] bg-[#f8e0a8]/60 px-3 py-1 rounded-full">
              Studio Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#2e3230] mt-3">
              {activeHub.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#5a5f5c] mt-1 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#4a7c59]" /> {activeHub.address}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2e3230]">
              Studio Amenities & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeHub.features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-[#faf6f0] p-3 rounded-xl border border-[#c4c8bc]/30 flex items-center gap-2.5 text-xs text-[#2e3230]"
                >
                  <CheckCircle className="w-4 h-4 text-[#4a7c59] shrink-0" />
                  <span className="font-semibold">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => onBookAtLocation(activeHub.id)}
              className="bg-[#4a7c59] hover:bg-[#2a6038] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-xs"
            >
              Book Service at this Studio
            </button>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activeHub.address)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#f5f1ea] hover:bg-[#eae6de] text-[#2e3230] font-bold text-xs sm:text-sm py-3 px-5 rounded-xl border border-[#c4c8bc] transition-all flex items-center justify-center gap-1.5"
            >
              <Navigation className="w-4 h-4 text-[#4a7c59]" /> Open Navigation
            </a>
          </div>
        </div>

        {/* Studio Image & Visual */}
        <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96 shadow-inner bg-[#2e3230]">
          <img
            src={activeHub.imageUrl}
            alt={activeHub.name}
            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white text-xs">
            <div className="font-bold text-sm mb-0.5">Zero-Emissions Workshop Zone</div>
            <div className="text-white/80">Solar photovoltaic roof + closed filtration system</div>
          </div>
        </div>
      </div>
    </div>
  );
};
