import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Instagram,
  CheckCircle,
  MessageSquare,
  ShieldCheck,
  Cpu,
  Paintbrush,
  Car,
  TrendingDown
} from 'lucide-react';
import { WORKSHOP_DETAILS, CORE_ADDITIONS } from '../data/mockData';

interface ContactViewProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Visit Us in Rampura Phul (BTI.)
        </span>
        <h1 className="font-headline font-black text-3xl md:text-5xl text-gray-900">
          {WORKSHOP_DETAILS.name}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-body">
          Your trusted multi-brand automotive center for complete car repair, professional paint, genuine spare parts, car disposal savings (20–30%), and vehicle sales & purchase.
        </p>
      </div>

      {/* Main Workshop Profile & Map Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Contact Info Panel */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-8">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Main Workshop Hub
              </span>
              <span className="text-xs font-bold text-red-700 flex items-center gap-1.5 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" /> Open Today
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-gray-900">
              {WORKSHOP_DETAILS.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
              <span>{WORKSHOP_DETAILS.address}</span>
            </p>

            {/* Quick Contact Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Phone 1 */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-red-600" /> Primary Contact
                </div>
                <a
                  href={`tel:${WORKSHOP_DETAILS.phone1}`}
                  className="font-headline font-bold text-base text-gray-900 hover:text-red-600 transition-colors block"
                >
                  {WORKSHOP_DETAILS.phone1}
                </a>
              </div>

              {/* Phone 2 */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-red-600" /> Secondary Contact
                </div>
                <a
                  href={`tel:${WORKSHOP_DETAILS.phone2}`}
                  className="font-headline font-bold text-base text-gray-900 hover:text-red-600 transition-colors block"
                >
                  {WORKSHOP_DETAILS.phone2}
                </a>
              </div>

              {/* Email */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-red-600" /> Direct Email
                </div>
                <a
                  href={`mailto:${WORKSHOP_DETAILS.email}`}
                  className="font-headline font-bold text-sm text-gray-900 hover:text-red-600 transition-colors block truncate"
                >
                  {WORKSHOP_DETAILS.email}
                </a>
              </div>

              {/* Opening Hours */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-red-600" /> Workshop Hours
                </div>
                <div className="font-headline font-bold text-sm text-gray-900">
                  {WORKSHOP_DETAILS.openingHours}
                </div>
              </div>
            </div>

            {/* Instagram Reviews Callout */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#d6249f]/10 via-[#285AEB]/10 to-[#fd5949]/10 border border-[#d6249f]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#fd5949] to-[#d6249f] text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Check Reviews on Instagram</div>
                  <div className="text-[11px] text-gray-600">Follow {WORKSHOP_DETAILS.instagramHandle} for customer feedback & work reels</div>
                </div>
              </div>
              <a
                href={WORKSHOP_DETAILS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-gray-50 text-gray-900 text-xs font-bold px-3.5 py-2 rounded-xl border border-gray-200 transition-colors flex items-center gap-1 shadow-2xs whitespace-nowrap"
              >
                <span>View Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-600" />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
            <a
              href={`tel:${WORKSHOP_DETAILS.phone1}`}
              className="flex-1 min-w-[160px] bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call: {WORKSHOP_DETAILS.phone1}
            </a>
            <a
              href={`https://wa.me/917837600098?text=${encodeURIComponent('Hello Brother Motors, I would like to inquire about car repair / spare parts.')}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[160px] bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <a
              href={WORKSHOP_DETAILS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-red-600" /> Open in Google Maps
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Location Map View & Landmark Details */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                Interactive Google Map
              </span>
            </div>
            <h3 className="text-xl font-headline font-bold text-gray-900">
              Near Jio Petrol Pump, Rampura Phul
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Easily accessible right off the main road, situated adjacent to the Jio Petrol Pump with ample parking and service entry bays.
            </p>

            {/* Embedded Google Map iframe */}
            <div className="mt-4 rounded-2xl overflow-hidden border border-gray-200 shadow-inner h-64 sm:h-72 bg-gray-100 relative">
              <iframe
                title="Brother Motors Google Maps Location"
                src="https://maps.google.com/maps?q=Near+Jio+Petrol+Pump,+Rampura+Phul,+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={WORKSHOP_DETAILS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-gray-200 flex items-center gap-1.5 backdrop-blur-xs"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3 text-red-600" />
              </a>
            </div>
          </div>

          {/* Key Advantages Checklist */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Why Drivers Choose Brother Motors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-800">
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Spare parts for all cars</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Car disposal parts (20–30% off)</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Full car repair & paint</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Sell & buy cars (Govt vehicles)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Offerings Cards Banner */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-headline font-bold text-gray-900">
            Our Core Automotive Services & Offerings
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            From replacement components to full accident body repair and government vehicle trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_ADDITIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-red-200 transition-all"
            >
              <div>
                <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-3">
                  {item.badge}
                </span>
                <h3 className="font-headline font-bold text-base text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <a
                  href={`tel:${WORKSHOP_DETAILS.phone1}`}
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" /> Call for Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
