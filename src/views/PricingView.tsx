import React, { useState } from 'react';
import {
  Wrench,
  TrendingDown,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Snowflake,
  Cpu,
  Info,
  Car,
  Paintbrush
} from 'lucide-react';
import { PRICING_TABLE_SERVICES, WORKSHOP_DETAILS, FAQ_LIST } from '../data/mockData';

interface PricingViewProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenQuoteModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-16">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold mx-auto border border-red-200">
          <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> 100% Upfront & Transparent Rates
        </div>
        <h1 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
          Brother Motors Transparent Pricing
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-body">
          Honest, highly affordable car servicing and repairs in Rampura Phul. No hidden charges — all rates clearly itemized upfront.
        </p>
      </section>

      {/* Special Highlights Banner: Car Disposal Parts & Spare Parts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Disposal Parts Card */}
        <div className="bg-gradient-to-br from-red-50 via-white to-red-50/40 rounded-3xl p-6 sm:p-8 border border-red-200 flex flex-col justify-between shadow-xs">
          <div>
            <span className="text-xs font-bold bg-red-600 text-white px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3 shadow-2xs">
              Special Savings
            </span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
              Car Disposal Parts (20% – 30% Cheaper)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Tested, authentic original parts from disposal and dismantled vehicles priced <strong>20% to 30% lower than brand new retail parts</strong>. Inspected for structural integrity and high reliability by our master mechanics.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${WORKSHOP_DETAILS.phone1}`}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" /> Call for Parts ({WORKSHOP_DETAILS.phone1})
            </a>
            <button
              onClick={() => onOpenQuoteModal('Car Disposal Parts')}
              className="bg-white hover:bg-gray-50 text-gray-900 text-xs font-bold px-4 py-2.5 rounded-xl border border-gray-200 transition-colors shadow-2xs"
            >
              Check Availability
            </button>
          </div>
        </div>

        {/* Spare Parts for All Cars Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between shadow-xs">
          <div>
            <span className="text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              All Brands Covered
            </span>
            <h3 className="text-xl sm:text-2xl font-headline font-bold text-gray-900">
              Spare Parts for All Types of Cars
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Complete inventory of brand-new OEM and OES spares for Maruti, Hyundai, Tata, Mahindra, Toyota, Honda, and all passenger vehicles. Immediate availability in our Rampura Phul workshop.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/917837600098?text=${encodeURIComponent('Hello Brother Motors, I need spare parts for my car.')}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Spare Parts Desk
            </a>
            <button
              onClick={() => onOpenQuoteModal('Spare Parts Inquiry')}
              className="bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-gray-200 transition-colors"
            >
              Inquire Part Price
            </button>
          </div>
        </div>
      </div>

      {/* Exact Pricing Table from Sheet */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-headline font-bold text-gray-900">
              Standard Service Rates
            </h2>
            <p className="text-xs text-gray-600 mt-0.5">
              Exact itemized prices as updated for Brother Motors, Rampura Phul.
            </p>
          </div>
          <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full self-start sm:self-auto">
            Updated Rates
          </span>
        </div>

        {/* Responsive Pricing Grid / Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_TABLE_SERVICES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between relative group"
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                  Service #{item.number}
                </span>
                <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">
                  {item.savings}
                </span>
              </div>

              {/* Title & Price */}
              <div>
                <h3 className="font-headline font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors">
                  {item.service}
                </h3>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-headline font-black text-3xl text-gray-900">
                    ₹{item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xs text-gray-400 line-through font-semibold">
                      ₹{item.originalPrice}
                    </span>
                  )}
                  <span className="text-[11px] text-gray-500 font-medium ml-1">
                    (Labor & Checks)
                  </span>
                </div>

                {/* Inclusions */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    Package Inclusions:
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{item.includes}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <a
                  href={`tel:${WORKSHOP_DETAILS.phone1}`}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5" /> Call: {WORKSHOP_DETAILS.phone1}
                </a>
                <button
                  onClick={() => onOpenQuoteModal(item.service)}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-bold py-2.5 px-3 rounded-xl border border-gray-200 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services: Full Car Repair & Paint + Sell & Purchase Cars */}
      <section className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-headline font-bold text-gray-900">
            Major Mechanical, Body Shop & Vehicle Sales
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            We handle full vehicle overhauls, high-grade paint restoration, and government vehicle trading with transparent estimates upon inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-red-200 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Paintbrush className="w-5 h-5" />
            </div>
            <h3 className="font-headline font-bold text-base text-gray-900">
              Full Car Paint & Denting
            </h3>
            <p className="text-xs text-gray-600">
              Scratch repair, panel beating, computerized paint shade matching, and heated baking booth gloss finish.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Car Paint & Denting')}
                className="text-xs font-bold text-red-600 hover:underline"
              >
                Request Paint Estimate →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-red-200 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-headline font-bold text-base text-gray-900">
              Gearbox & Engine Overhauls
            </h3>
            <p className="text-xs text-gray-600">
              Precision disassembly, bearing replacement, clutch overhauls, and suspension tuning as featured in our workshop gallery.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Gearbox / Engine Overhaul')}
                className="text-xs font-bold text-red-600 hover:underline"
              >
                Inquire Overhaul Cost →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-red-200 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-headline font-bold text-base text-gray-900">
              Sell & Purchase Cars (Govt. Vehicles)
            </h3>
            <p className="text-xs text-gray-600">
              Certified pre-owned cars and government auction fleet vehicles available with complete legal documentation and RC transfer.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Sell or Buy Car')}
                className="text-xs font-bold text-red-600 hover:underline"
              >
                Inquire Available Vehicles →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-headline font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-gray-600">
            Everything you need to know about Brother Motors pricing and parts.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-headline font-bold text-sm sm:text-base text-gray-900"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-red-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
