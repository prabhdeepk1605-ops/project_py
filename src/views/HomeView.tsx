import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { SpecializedCareBento } from '../components/SpecializedCareBento';
import { CUSTOMER_REVIEWS } from '../data/mockData';
import { SpecializedCareItem, NavTab } from '../types';
import {
  Star,
  ShieldCheck,
  Leaf,
  Droplets,
  Award,
  Video,
  Clock,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenSpecializedModal: (item: SpecializedCareItem) => void;
  onOpenQuoteModal: (initialVehicle?: { make: string; model: string; location: string }) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenBooking,
  onOpenSpecializedModal,
  onOpenQuoteModal,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection
        onQuickQuote={(details) => onOpenQuoteModal(details)}
        onExploreServices={() => onSelectTab('services')}
      />

      {/* 2. Holistic Car Care Grid */}
      <ServicesGrid
        onSelectService={(catId) => onSelectTab('services')}
        onBookNow={onOpenBooking}
      />

      {/* 3. Specialized Care Bento Grid */}
      <SpecializedCareBento
        onOpenDetails={onOpenSpecializedModal}
        onBookTreatment={(id) => onOpenBooking(id)}
      />

      {/* 4. Why Choose Terra Workshop (Our Organic Craftsmanship Values) */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#705c30] bg-[#f8e0a8]/60 px-3 py-1 rounded-full uppercase tracking-wider">
              The Terra Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#2e3230] mt-3 mb-4">
              Automotive Care Reimagined
            </h2>
            <p className="text-sm sm:text-base text-[#5a5f5c]">
              We merged German-precision tooling with mindful, eco-sustainable workshop practices. Here is how we guarantee peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#faf6f0] p-8 rounded-3xl border border-[#c4c8bc]/30 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center mb-6">
                  <Video className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold text-[#2e3230] mb-2">
                  Live Service Cam & Video Approvals
                </h3>
                <p className="text-xs sm:text-sm text-[#5a5f5c] leading-relaxed">
                  Never guess what happens under the hood. Receive high-definition video walkthroughs of worn components before authorizing any replacement.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#eae6de] text-xs font-bold text-[#4a7c59] flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> 100% Digital Transparency
              </div>
            </div>

            <div className="bg-[#faf6f0] p-8 rounded-3xl border border-[#c4c8bc]/30 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center mb-6">
                  <Droplets className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold text-[#2e3230] mb-2">
                  Rain-Harvested Closed Loop Spa
                </h3>
                <p className="text-xs sm:text-sm text-[#5a5f5c] leading-relaxed">
                  Our advanced closed-loop filtration system purifies and recycles 85% of washing water, paired exclusively with biodegradable plant-derived waxes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#eae6de] text-xs font-bold text-[#4a7c59] flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Zero Toxic Chemical Residue
              </div>
            </div>

            <div className="bg-[#faf6f0] p-8 rounded-3xl border border-[#c4c8bc]/30 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold text-[#2e3230] mb-2">
                  6-Month Warranty on All Spares
                </h3>
                <p className="text-xs sm:text-sm text-[#5a5f5c] leading-relaxed">
                  Every replacement component is sourced directly from certified Original Equipment Suppliers (OES) and sealed with our unconditional warranty.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#eae6de] text-xs font-bold text-[#4a7c59] flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> 10,000 km / 6 Months Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customer Reviews / Testimonials */}
      <section className="py-20 bg-[#faf6f0] border-t border-[#eae6de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#4a7c59] bg-[#d8f0de] px-3 py-1 rounded-full uppercase tracking-wider">
                Real Owner Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#2e3230] mt-3">
                Loved by Conscious Drivers
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#2e3230] bg-[#ffffff] px-4 py-2 rounded-2xl border border-[#c4c8bc]/30 shadow-2xs">
              <Star className="w-4 h-4 fill-[#705c30] text-[#705c30]" />
              <span>4.9 / 5.0 Rating</span>
              <span className="text-xs text-[#5a5f5c] font-normal">(1,800+ Verified Services)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#ffffff] p-6 sm:p-7 rounded-3xl border border-[#c4c8bc]/30 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#705c30] text-[#705c30]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5a5f5c] leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0ece4] flex justify-between items-end">
                  <div>
                    <div className="font-bold text-sm text-[#2e3230] font-headline">{rev.author}</div>
                    <div className="text-[11px] text-[#5a5f5c]">{rev.vehicle}</div>
                  </div>
                  <span className="text-[10px] font-bold text-[#4a7c59] bg-[#d8f0de] px-2 py-0.5 rounded-full">
                    {rev.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Banner CTA */}
      <section className="py-16 bg-[#4a7c59] text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#2a6038] rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-3">
              Ready to experience wholesome car care?
            </h2>
            <p className="text-sm sm:text-base text-white/85">
              Book online in under 2 minutes. Free doorstep valet pickup & drop available at all workshop hubs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm transition-all"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-[#f0ece4] text-[#4a7c59] font-bold text-sm transition-all shadow-md active:scale-95"
            >
              Schedule Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
