import React from 'react';
import { Leaf, ShieldCheck, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking, onOpenQuote }) => {
  return (
    <footer className="bg-[#ffffff] text-[#2e3230] font-body text-sm w-full border-t border-[#eae6de] mt-auto">
      {/* Top Value Banner */}
      <div className="bg-[#f5f1ea] border-b border-[#eae6de] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d8f0de] flex items-center justify-center text-[#4a7c59] shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#2e3230]">Eco-Responsible Care</div>
              <div className="text-xs text-[#5a5f5c]">85% water recycled & bio-cleaners</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d8f0de] flex items-center justify-center text-[#4a7c59] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#2e3230]">100% Genuine OES Parts</div>
              <div className="text-xs text-[#5a5f5c]">6 Months / 10,000 km warranty</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d8f0de] flex items-center justify-center text-[#4a7c59] shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#2e3230]">Transparent Pricing</div>
              <div className="text-xs text-[#5a5f5c]">No hidden charges. Clear estimates.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d8f0de] flex items-center justify-center text-[#4a7c59] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#2e3230]">Free Valet Pickup</div>
              <div className="text-xs text-[#5a5f5c]">Doorstep car pickup & drop available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="text-xl font-headline font-black text-[#4a7c59] flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#d8f0de] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[#4a7c59]" />
              </div>
              Terra Workshop
            </div>
            <p className="text-xs text-[#5a5f5c] max-w-sm mb-4 leading-relaxed">
              Rooted in Quality. Driven by Care. Experience wholesome, transparent, and eco-conscious car maintenance with rooted craftsmanship.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#5a5f5c]">
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#4a7c59]" /> +91 866 247 8899</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#4a7c59]" /> care@terraworkshop.in</span>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm text-[#2e3230] mb-3">Services</h4>
            <ul className="space-y-2 text-xs text-[#5a5f5c]">
              <li><button onClick={() => onSelectTab('services')} className="hover:text-[#4a7c59] transition-colors">Essential Servicing</button></li>
              <li><button onClick={() => onSelectTab('services')} className="hover:text-[#4a7c59] transition-colors">AC Repair & Coolant</button></li>
              <li><button onClick={() => onSelectTab('services')} className="hover:text-[#4a7c59] transition-colors">Bumper Paint & Denting</button></li>
              <li><button onClick={() => onSelectTab('services')} className="hover:text-[#4a7c59] transition-colors">Battery Diagnostics</button></li>
              <li><button onClick={() => onSelectTab('services')} className="hover:text-[#4a7c59] transition-colors">Organic Car Spa</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm text-[#2e3230] mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-[#5a5f5c]">
              <li><button onClick={() => onSelectTab('workshops')} className="hover:text-[#4a7c59] transition-colors">Our Workshops</button></li>
              <li><button onClick={() => onSelectTab('pricing')} className="hover:text-[#4a7c59] transition-colors">Transparent Pricing</button></li>
              <li><button onClick={() => onSelectTab('blog')} className="hover:text-[#4a7c59] transition-colors">Care Blog & Guides</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-[#4a7c59] transition-colors">Custom Artisan Quotes</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-sm text-[#2e3230] mb-3">Book Service</h4>
            <p className="text-xs text-[#5a5f5c] mb-3">Need prompt attention for your vehicle?</p>
            <button
              onClick={onOpenBooking}
              className="w-full bg-[#4a7c59] text-white font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-[#2a6038] transition-colors shadow-xs"
            >
              Schedule Appointment
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#eae6de] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5a5f5c]">
          <div>
            © 2024–2026 Terra Workshop Management. Rooted in Quality. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Terra Workshop Privacy: We respect your data with end-to-end transparency and never share your vehicle diagnostics with third parties.'); }} className="hover:text-[#4a7c59] hover:underline">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terra Workshop Terms: All services guaranteed with clear upfront digital estimates and genuine OES component warranties.'); }} className="hover:text-[#4a7c59] hover:underline">
              Terms of Service
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenQuote(); }} className="hover:text-[#4a7c59] hover:underline">
              Contact Us
            </a>
            <a href="#partner" onClick={(e) => { e.preventDefault(); alert('Partner with Terra Workshop: Join our growing collective of certified sustainable automotive mechanics and service hubs.'); }} className="hover:text-[#4a7c59] hover:underline">
              Partner with Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
