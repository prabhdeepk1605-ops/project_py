import React from 'react';
import {
  Wrench,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ExternalLink,
  MessageSquare,
  Cpu,
  TrendingDown,
  Car
} from 'lucide-react';
import { NavTab } from '../types';
import { WORKSHOP_DETAILS } from '../data/mockData';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenQuote }) => {
  return (
    <footer className="bg-white text-gray-800 font-body text-sm w-full border-t border-gray-200 mt-auto">
      {/* Top Value Banner */}
      <div className="bg-red-50/50 border-b border-red-100 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">Spare Parts for All Cars</div>
              <div className="text-xs text-gray-600">Ready stock for all makes & models</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">Car Disposal Parts</div>
              <div className="text-xs text-red-700 font-semibold">20% to 30% cheaper than new parts</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">Full Car Repair & Paint</div>
              <div className="text-xs text-gray-600">Mechanical overhaul & spray booth</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">Sell & Purchase Cars</div>
              <div className="text-xs text-gray-600">Including government vehicles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Address */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xl font-headline font-black text-gray-900 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              BROTHER <span className="text-red-600">MOTORS</span>
            </div>
            <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
              Your premier automotive workshop in Rampura Phul. Complete car repair, professional paint finishing, tested car disposal parts (20%–30% savings), and vehicle sales.
            </p>

            <div className="space-y-1.5 text-xs text-gray-600 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>{WORKSHOP_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>Open: {WORKSHOP_DETAILS.openingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <a href={`mailto:${WORKSHOP_DETAILS.email}`} className="hover:text-red-600">
                  {WORKSHOP_DETAILS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-headline font-bold text-sm text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-red-600 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('services')} className="hover:text-red-600 transition-colors">
                  Services & Spare Parts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pricing')} className="hover:text-red-600 transition-colors">
                  Transparent Pricing Table
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('gallery')} className="hover:text-red-600 transition-colors">
                  Workshop Gallery (10 Media Items)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('contact')} className="hover:text-red-600 transition-colors">
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts & Instagram */}
          <div>
            <h4 className="font-headline font-bold text-sm text-gray-900 mb-3">Direct Contact</h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${WORKSHOP_DETAILS.phone1}`}
                className="flex items-center gap-1.5 text-gray-900 hover:text-red-600 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" /> {WORKSHOP_DETAILS.phone1}
              </a>
              <a
                href={`tel:${WORKSHOP_DETAILS.phone2}`}
                className="flex items-center gap-1.5 text-gray-900 hover:text-red-600 font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" /> {WORKSHOP_DETAILS.phone2}
              </a>
              <a
                href="https://wa.me/917837600098"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:underline font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Desk
              </a>
              <a
                href={WORKSHOP_DETAILS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#d6249f] hover:underline font-bold pt-1"
              >
                <Instagram className="w-3.5 h-3.5" /> Instagram {WORKSHOP_DETAILS.instagramHandle}
              </a>
              <a
                href={WORKSHOP_DETAILS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-red-600 hover:underline font-bold pt-1"
              >
                <MapPin className="w-3.5 h-3.5" /> View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} BROTHER MOTORS — Near Jio Petrol Pump, Rampura Phul (BTI.). All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href={WORKSHOP_DETAILS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 flex items-center gap-1"
            >
              Google Maps Location <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={WORKSHOP_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 flex items-center gap-1"
            >
              Instagram Reviews <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
