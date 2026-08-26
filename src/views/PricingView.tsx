import React, { useState, useMemo } from 'react';
import {
  Car,
  Wrench,
  TrendingDown,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Snowflake,
  Cpu,
  Info
} from 'lucide-react';
import { VEHICLE_MAKES, FAQ_LIST, HOTLINKED_IMAGES } from '../data/mockData';
import { FAQItem } from '../types';

interface PricingViewProps {
  onOpenBooking: (serviceId?: string, make?: string, model?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenBooking }) => {
  const [selectedMake, setSelectedMake] = useState<string>('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState<string>('Alto');
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  // Find make configuration
  const currentMake = VEHICLE_MAKES.find((m) => m.name === selectedMake) || VEHICLE_MAKES[0];
  const currentModel = currentMake.models.find((m) => m.name.includes(selectedModel)) || currentMake.models[0];
  const multiplier = currentModel?.priceMultiplier || 1.0;

  // Calculate pricing rows dynamically based on the selected vehicle
  const dynamicPriceRows = useMemo(() => {
    return [
      {
        id: 'basic-service',
        serviceType: `Basic Service (${selectedModel.includes('Alto') ? '800 Petrol' : 'Periodic Check'})`,
        icon: Wrench,
        price: Math.round(2199 * multiplier),
        savings: '25% Avg.',
        features: 'Engine oil change, oil filter, 40-pt digital health check',
      },
      {
        id: 'standard-service',
        serviceType: `Standard Service (${selectedModel})`,
        icon: Wrench,
        price: Math.round(2699 * multiplier),
        savings: '20% Avg.',
        features: 'All basic items + air filter, brake fluid flush, spark inspect',
      },
      {
        id: 'comprehensive-service',
        serviceType: 'Comprehensive Service',
        icon: Cpu,
        price: Math.round(4299 * multiplier),
        savings: '30% Avg.',
        features: 'Full vehicle tuning, wheel balancing, throttle body clean, AC filter',
      },
      {
        id: 'ac-service',
        serviceType: 'AC Service & Gas Top-up',
        icon: Snowflake,
        price: Math.round(1599 * multiplier),
        savings: '15% Avg.',
        features: 'Refrigerant gas refill, condenser pressure wash, duct fogging',
      },
      {
        id: 'brake-overhaul',
        serviceType: 'Front & Rear Brake Overhaul',
        icon: ShieldCheck,
        price: Math.round(1899 * multiplier),
        savings: '22% Avg.',
        features: 'Brake pad replacement, caliper pin greasing, disc rotor skim',
      },
      {
        id: 'spa-detail',
        serviceType: 'Eco Deep Clean & Spa',
        icon: Sparkles,
        price: Math.round(1299 * multiplier),
        savings: '28% Avg.',
        features: 'Steam upholstery shampoo, exterior Carnauba wax, underbody jet',
      },
    ];
  }, [multiplier, selectedModel]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-16">
      {/* Header Section - Matches HTML/Screenshot */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d8f0de] text-[#2a6038] text-xs font-bold mx-auto border border-[#4a7c59]/20">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% Upfront Estimates
        </div>
        <h1 className="font-headline font-bold text-4xl md:text-5xl text-[#2e3230] leading-tight">
          Transparent Pricing, <br />
          <span className="text-[#4a7c59] italic">Rooted in Value</span>
        </h1>
        <p className="text-[#5a5f5c] text-base md:text-lg leading-relaxed font-body">
          Select your vehicle model below to view our upfront service costs. No hidden fees, just honest work.
        </p>
      </section>

      {/* Pricing Content Area */}
      <section className="flex flex-col gap-8">
        {/* Vehicle Selector (Matches Screenshot & HTML) */}
        <div className="bg-[#f5f1ea] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(46,50,48,0.06)] border border-[#c4c8bc]/40 max-w-4xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Make */}
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-[#5a5f5c] mb-2 uppercase tracking-wider">
                Vehicle Make
              </label>
              <div className="relative">
                <select
                  value={selectedMake}
                  onChange={(e) => {
                    setSelectedMake(e.target.value);
                    const mk = VEHICLE_MAKES.find((m) => m.name === e.target.value);
                    if (mk && mk.models.length > 0) {
                      setSelectedModel(mk.models[0].name);
                    }
                  }}
                  className="block w-full pl-4 pr-10 py-3 text-xs sm:text-sm font-semibold border border-[#c4c8bc] bg-white focus:outline-none focus:ring-2 focus:ring-[#4a7c59] rounded-xl text-[#2e3230] appearance-none cursor-pointer font-body shadow-2xs"
                >
                  {VEHICLE_MAKES.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#4a7c59]">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Model */}
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-[#5a5f5c] mb-2 uppercase tracking-wider">
                Vehicle Model
              </label>
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="block w-full pl-4 pr-10 py-3 text-xs sm:text-sm font-semibold border border-[#c4c8bc] bg-white focus:outline-none focus:ring-2 focus:ring-[#4a7c59] rounded-xl text-[#2e3230] appearance-none cursor-pointer font-body shadow-2xs"
                >
                  {currentMake.models.map((md) => (
                    <option key={md.name} value={md.name}>
                      {md.name} ({md.type})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#4a7c59]">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* View Prices Button */}
            <div className="md:self-end w-full md:w-auto mt-2 md:mt-0">
              <button
                onClick={() => {
                  const tableElem = document.getElementById('pricing-table-section');
                  tableElem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#f0e8db] hover:bg-[#c4a66a]/30 text-[#5e5548] hover:text-[#2e3230] font-bold text-xs sm:text-sm py-3 px-8 rounded-xl shadow-2xs transition-colors border border-[#c4c8bc]/60 cursor-pointer"
              >
                View Prices
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Table Container (Matches HTML & Screenshot) */}
        <div
          id="pricing-table-section"
          className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(46,50,48,0.06)] border border-[#c4c8bc]/40 overflow-hidden max-w-5xl mx-auto w-full"
        >
          {/* Table Header Styling */}
          <div className="bg-[#f0ece4] py-5 px-6 border-b border-[#c4c8bc]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center">
                <Car className="w-4 h-4" />
              </div>
              <h2 className="font-headline font-bold text-lg sm:text-xl text-[#2e3230]">
                Service Price List:{' '}
                <span className="text-[#4a7c59] font-semibold">
                  {selectedMake} {selectedModel}
                </span>
              </h2>
            </div>
            <span className="text-xs text-[#5a5f5c] font-semibold">
              Vehicle Segment: {currentModel.type}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-body">
              <thead>
                <tr className="bg-[#f5f1ea] text-[#5a5f5c] font-bold text-xs uppercase tracking-wider border-b border-[#c4c8bc]/40">
                  <th className="px-6 py-4 w-1/2">Services Type</th>
                  <th className="px-6 py-4 w-1/4">Price Starts From (₹)</th>
                  <th className="px-6 py-4 w-1/4">Estimated Savings</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c4c8bc]/20">
                {dynamicPriceRows.map((row) => {
                  const IconComponent = row.icon;
                  return (
                    <tr
                      key={row.id}
                      className="hover:bg-[#faf6f0] transition-colors group"
                    >
                      <td className="px-6 py-5 font-medium text-[#2e3230]">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#d8f0de]/50 flex items-center justify-center text-[#4a7c59] group-hover:bg-[#d8f0de] transition-colors shrink-0 mt-0.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-[#2e3230] group-hover:text-[#4a7c59] transition-colors">
                              {row.serviceType}
                            </div>
                            <div className="text-[11px] text-[#5a5f5c] mt-0.5">
                              {row.features}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 font-headline font-bold text-base sm:text-lg text-[#2e3230]">
                        ₹{row.price.toLocaleString()}
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1 bg-[#f8e0a8]/40 text-[#705c30] font-bold px-3 py-1 rounded-full text-xs border border-[#705c30]/20">
                          <TrendingDown className="w-3.5 h-3.5" />
                          {row.savings}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() => onOpenBooking(row.id, selectedMake, selectedModel)}
                          className="bg-[#4a7c59] hover:bg-[#2a6038] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Book</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-[#f5f1ea] p-4 text-center text-xs text-[#5a5f5c] border-t border-[#c4c8bc]/30">
            * Prices are indicative and may vary based on exact vehicle condition, engine displacement, and workshop hub location. Taxes extra.
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section (Matches Screenshot & HTML) */}
      <section className="max-w-4xl mx-auto w-full mt-12 flex flex-col gap-8">
        <div className="text-center">
          <h3 className="font-headline font-bold text-3xl text-[#2e3230] mb-2">
            Frequently Asked Questions
          </h3>
          <p className="text-[#5a5f5c] text-sm sm:text-base font-body">
            Got questions about our pricing? We've got clear answers.
          </p>
        </div>

        <div className="grid gap-3.5">
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#c4c8bc]/40 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 cursor-pointer text-left font-headline font-bold text-[#2e3230] text-base sm:text-lg hover:text-[#4a7c59] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f5f1ea] flex items-center justify-center text-[#4a7c59] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#d8f0de]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5a5f5c] leading-relaxed border-t border-[#f0ece4] font-body animate-in fade-in duration-200">
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
