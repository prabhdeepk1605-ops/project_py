import React from 'react';
import { HeroSection } from '../components/HeroSection';
import {
  WORKSHOP_DETAILS,
  PRICING_TABLE_SERVICES,
  CORE_ADDITIONS,
  GALLERY_MEDIA,
  CUSTOMER_REVIEWS
} from '../data/mockData';
import { NavTab } from '../types';
import {
  Star,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Instagram,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Wrench,
  TrendingDown,
  Cpu,
  Car,
  Play,
  Image as ImageIcon,
  ArrowRight
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenQuoteModal: (initialVehicle?: { make: string; model: string; location: string }) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenQuoteModal,
}) => {
  return (
    <div className="space-y-0 font-body">
      {/* 1. Hero Section */}
      <HeroSection
        onExploreServices={() => onSelectTab('services')}
      />

      {/* 2. Core Additions Section (Spare parts, 20-30% cheaper disposal parts, Repair & Paint, Sell & Buy cars) */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-red-700 bg-red-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-red-100">
              Complete Automotive Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gray-900 mt-3">
              Why Choose Brother Motors
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Serving vehicle owners across Rampura Phul with honest mechanics, genuine stock, and substantial savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_ADDITIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-3 border border-red-100">
                    {item.badge}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`tel:${WORKSHOP_DETAILS.phone1}`}
                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Inquire: {WORKSHOP_DETAILS.phone1}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Updated Pricing Highlights (6 exact services from the table) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-red-700 text-xs font-bold mb-2 border border-red-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> Upfront Rates
              </div>
              <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gray-900">
                Standard Service Rates
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Routine periodic maintenance at transparent, pocket-friendly prices.
              </p>
            </div>

            <button
              onClick={() => onSelectTab('pricing')}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 self-start sm:self-auto bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-2xs hover:bg-red-50 transition-colors"
            >
              <span>View Full Pricing Table</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_TABLE_SERVICES.map((row) => (
              <div
                key={row.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded uppercase tracking-wider">
                      #{row.number} {row.tag}
                    </span>
                    <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                      {row.savings}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-base text-gray-900 mb-1">
                    {row.service}
                  </h3>

                  <div className="mt-2 mb-3 flex items-baseline gap-2">
                    <span className="font-headline font-black text-2xl text-gray-900">
                      ₹{row.price}
                    </span>
                    {row.originalPrice && (
                      <span className="text-xs text-gray-400 line-through font-semibold">
                        ₹{row.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-gray-600 flex items-start gap-1.5 border-t border-gray-100 pt-3">
                    <CheckCircle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span>{row.includes}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <a
                    href={`tel:${WORKSHOP_DETAILS.phone1}`}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Phone className="w-3 h-3" /> Call: {WORKSHOP_DETAILS.phone1}
                  </a>
                  <button
                    onClick={() => onOpenQuoteModal({ make: 'Vehicle', model: row.service, location: WORKSHOP_DETAILS.city })}
                    className="bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-bold py-2 px-3 rounded-xl border border-gray-200 transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workshop Gallery Teaser */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Real Workshop Action
              </span>
              <h2 className="text-3xl sm:text-4xl font-headline font-bold text-gray-900 mt-3">
                Live Workshop Gallery & Reels
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                Browse actual mechanical overhauls, paint jobs, and service bay footage from Rampura Phul.
              </p>
            </div>

            <button
              onClick={() => onSelectTab('gallery')}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 self-start sm:self-auto bg-white hover:bg-red-50 px-4 py-2 rounded-xl border border-gray-200 transition-colors"
            >
              <span>Explore All {GALLERY_MEDIA.length} Photos & Videos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_MEDIA.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectTab('gallery')}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md hover:border-red-200 transition-all cursor-pointer flex flex-col"
              >
                <div className="relative aspect-video w-full bg-[#1c221e] overflow-hidden flex items-center justify-center">
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={item.url}
                        preload="metadata"
                        muted
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Instagram Reviews Highlight & Customer Feedback */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Instagram Review Banner */}
          <div className="bg-gradient-to-r from-[#d6249f]/10 via-[#285AEB]/10 to-[#fd5949]/10 rounded-3xl p-6 sm:p-10 border border-[#d6249f]/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Instagram className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
                  Check Service Reviews on Instagram
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  Follow <strong className="text-gray-900">{WORKSHOP_DETAILS.instagramHandle}</strong> to watch live video reviews, repair reels, and customer testimonials.
                </p>
              </div>
            </div>
            <a
              href={WORKSHOP_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#d6249f] to-[#fd5949] hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Visit @brother._motors</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-red-200 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-headline font-bold text-gray-900">{rev.author}</div>
                    <div className="text-[11px] text-gray-500">{rev.vehicle}</div>
                  </div>
                  <span className="text-[10px] font-semibold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                    {rev.serviceUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location & Workshop Contact Callout */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-red-50/50 rounded-3xl p-6 sm:p-10 border border-red-100 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold text-red-700 bg-white border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
                Visit Workshop
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">
                {WORKSHOP_DETAILS.name} — Rampura Phul
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-600" /> {WORKSHOP_DETAILS.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-red-600" /> {WORKSHOP_DETAILS.openingHours}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${WORKSHOP_DETAILS.phone1}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call: {WORKSHOP_DETAILS.phone1}
              </a>
              <a
                href={`https://wa.me/917837600098`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-xs transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={WORKSHOP_DETAILS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-gray-200 transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-red-600" /> View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
