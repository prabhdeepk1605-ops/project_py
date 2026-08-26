import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, Car, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { HOTLINKED_IMAGES, VEHICLE_MAKES, WORKSHOP_LOCATIONS } from '../data/mockData';

interface HeroSectionProps {
  onQuickQuote: (details: { make: string; model: string; location: string; phone: string }) => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onQuickQuote,
  onExploreServices,
}) => {
  const [selectedLocation, setSelectedLocation] = useState('Vijayawada, India');
  const [selectedVehicle, setSelectedVehicle] = useState('Maruti Suzuki Swift, Petrol');
  const [phone, setPhone] = useState('');

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = selectedVehicle.split(',');
    const makeModel = parts[0].trim();
    const make = makeModel.split(' ')[0];
    const model = makeModel.replace(make, '').trim() || 'Model';
    
    onQuickQuote({
      make,
      model,
      location: selectedLocation,
      phone: phone || '+91 98480 12345',
    });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-8 pb-20 overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#faf6f0]/50 backdrop-blur-[2px] z-10" />
        <img
          alt="Terra Workshop Hero Background"
          className="w-full h-full object-cover object-center"
          src={HOTLINKED_IMAGES.hero}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8f0de]/80 text-[#2a6038] text-xs font-bold mb-4 border border-[#4a7c59]/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" /> Certified Eco-Conscious Garage Network
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-[#2e3230] mb-6 leading-tight">
            Rooted in Quality. <br />
            <span className="text-[#4a7c59]">Driven by Care.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5a5f5c] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
            Experience premium, eco-conscious car servicing that treats your vehicle and the environment with the respect they deserve. Warm, approachable, and transparent.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-[#2e3230] bg-[#f0ece4] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-[#c4c8bc]/30 shadow-xs">
              <Star className="w-4 h-4 fill-[#705c30] text-[#705c30]" />
              <span>4.9/5 Average Rating</span>
            </div>

            <div className="flex items-center gap-2 text-[#2e3230] bg-[#f0ece4] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-[#c4c8bc]/30 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#4a7c59]" />
              <span>Certified Master Mechanics</span>
            </div>
          </div>
        </div>

        {/* Right Booking Widget (Matches HTML/Screenshot Widget) */}
        <div className="lg:w-5/12 w-full max-w-md">
          <div className="glass-panel bg-[#faf6f0]/90 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(46,50,48,0.08)] border border-[#c4c8bc]/40">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-headline font-bold text-[#2e3230]">
                Book Your Service
              </h2>
              <span className="text-[11px] font-bold text-[#4a7c59] bg-[#d8f0de] px-2.5 py-0.5 rounded-full">
                Instant Quote
              </span>
            </div>

            <p className="text-[#5a5f5c] text-xs sm:text-sm mb-6 font-body">
              Get instant transparent pricing for your vehicle with zero obligation.
            </p>

            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              {/* Location Select */}
              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1.5 ml-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#74796e]" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-[#f5f1ea] border border-[#c4c8bc]/40 rounded-xl py-3 pl-10 pr-8 text-xs sm:text-sm text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59] focus:outline-none appearance-none cursor-pointer font-body"
                  >
                    <option value="Vijayawada, India">Vijayawada, India</option>
                    <option value="Portland, OR">Portland, OR</option>
                    <option value="Seattle, WA">Seattle, WA</option>
                    <option value="Austin, TX">Austin, TX</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#74796e] pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              {/* Vehicle Select */}
              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1.5 ml-1">
                  Vehicle
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#74796e]" />
                  <select
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="w-full bg-[#f5f1ea] border border-[#c4c8bc]/40 rounded-xl py-3 pl-10 pr-8 text-xs sm:text-sm text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59] focus:outline-none appearance-none cursor-pointer font-body"
                  >
                    <option value="Maruti Suzuki Swift, Petrol">Maruti Suzuki Swift, Petrol</option>
                    <option value="Maruti Suzuki Alto, Petrol">Maruti Suzuki Alto, Petrol</option>
                    <option value="Hyundai Creta, Diesel">Hyundai Creta, Diesel</option>
                    <option value="Toyota Prius, Hybrid">Toyota Prius, Hybrid</option>
                    <option value="Subaru Outback, Petrol">Subaru Outback, Petrol</option>
                    <option value="Tesla Model 3, Electric">Tesla Model 3, Electric</option>
                    <option value="Tata Nexon, EV / Petrol">Tata Nexon, EV / Petrol</option>
                    <option value="Honda City, Petrol">Honda City, Petrol</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#74796e] pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>

              {/* Contact Field */}
              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1.5 ml-1">
                  Contact
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#74796e]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile / WhatsApp Number"
                    className="w-full bg-[#f5f1ea] border border-[#c4c8bc]/40 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59] focus:outline-none font-body placeholder-[#74796e]"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="hero-get-quote-btn"
                className="w-full bg-[#4a7c59] hover:bg-[#2a6038] text-white font-bold text-base py-3.5 rounded-xl mt-4 transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
