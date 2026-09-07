import React from 'react';
import {
  MapPin,
  Car,
  Phone,
  ArrowRight,
  Instagram,
  ExternalLink,
  MessageSquare,
  TrendingDown,
  Wrench,
  Cpu
} from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/mockData';

interface HeroSectionProps {
  onExploreServices: () => void;
  onQuickQuote?: (details: { make: string; model: string; location: string; phone: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-8 pb-16 overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white">
      {/* Subtle geometric workshop glow background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-50/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full relative z-20 text-center space-y-7">
        {/* Location Chip Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-gray-800 text-xs font-bold border border-gray-200 shadow-xs mx-auto">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <MapPin className="w-3.5 h-3.5 text-red-600" />
          <span>Near Jio Petrol Pump, Rampura Phul (BTI.)</span>
          <span className="text-gray-400 hidden sm:inline">•</span>
          <span className="text-red-600 font-semibold hidden sm:inline">Open 8:00 AM – 6:00 PM</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black text-gray-900 leading-tight tracking-tight">
            BROTHER <span className="text-red-600">MOTORS</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Complete car repair, professional paint finishing, spare parts for all vehicles, tested car disposal parts (20%–30% cheaper), and vehicle sales & purchases in Rampura Phul.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto pt-2 text-left">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-xs hover:border-red-200 transition-all flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-gray-900 block">Spare Parts for All Cars</span>
              <span className="text-xs text-gray-500">Ready stock of OEM & OES parts</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-xs hover:border-red-200 transition-all flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0 border border-red-100">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-gray-900 block">Car Disposal Parts</span>
              <span className="text-xs text-red-700 font-semibold">20% to 30% Cheaper</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-xs hover:border-red-200 transition-all flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center shrink-0 border border-gray-200">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-gray-900 block">Full Car Repair & Paint</span>
              <span className="text-xs text-gray-500">Mechanical overhaul & spray booth</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-xs hover:border-red-200 transition-all flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-gray-900 block">Sell & Purchase Cars</span>
              <span className="text-xs text-gray-500">Including Government Vehicles</span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`tel:${WORKSHOP_DETAILS.phone1}`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call: {WORKSHOP_DETAILS.phone1}
          </a>
          <a
            href={`https://wa.me/917837600098`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Us
          </a>
          <button
            onClick={onExploreServices}
            className="bg-white hover:bg-red-50 text-gray-900 hover:text-red-700 font-bold text-sm px-5 py-3.5 rounded-xl border border-gray-200 transition-all flex items-center gap-2 shadow-2xs"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-red-600" />
          </button>
          <a
            href={WORKSHOP_DETAILS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm px-5 py-3.5 rounded-xl border border-gray-200 transition-all flex items-center gap-2 shadow-2xs"
          >
            <MapPin className="w-4 h-4 text-red-600" /> Google Maps
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

        {/* Instagram Reviews Callout */}
        <div className="pt-2 flex items-center justify-center">
          <a
            href={WORKSHOP_DETAILS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-gray-900 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-2xs hover:shadow-xs transition-all"
          >
            <Instagram className="w-4 h-4 text-[#d6249f]" />
            <span>Check service reviews on Instagram: <strong className="text-gray-900">{WORKSHOP_DETAILS.instagramHandle}</strong></span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
