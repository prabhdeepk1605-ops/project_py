import React from 'react';
import { X, Check, Clock, Calendar, Shield, Sparkles } from 'lucide-react';
import { SpecializedCareItem } from '../types';

interface SpecializedCareModalProps {
  item: SpecializedCareItem | null;
  onClose: () => void;
  onBookNow: (treatmentId: string) => void;
}

export const SpecializedCareModal: React.FC<SpecializedCareModalProps> = ({
  item,
  onClose,
  onBookNow,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#faf6f0] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#c4c8bc]/50 animate-in fade-in zoom-in duration-200">
        {/* Header Image */}
        <div className="relative h-64 w-full bg-[#2e3230] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            {item.badge && (
              <span className="bg-[#705c30] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block shadow-xs">
                {item.badge}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-headline font-bold">{item.title}</h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1">{item.subtitle}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#f0ece4] p-4 rounded-2xl border border-[#c4c8bc]/30">
            <div>
              <div className="text-[11px] text-[#5a5f5c] font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#4a7c59]" /> Duration
              </div>
              <div className="text-sm font-bold text-[#2e3230] mt-0.5">{item.duration}</div>
            </div>
            <div>
              <div className="text-[11px] text-[#5a5f5c] font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#705c30]" /> Price Estimate
              </div>
              <div className="text-sm font-bold text-[#4a7c59] mt-0.5">{item.priceRange}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-[11px] text-[#5a5f5c] font-semibold flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#4a7c59]" /> Warranty
              </div>
              <div className="text-sm font-bold text-[#2e3230] mt-0.5">2-Year Guarantee</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#2e3230] uppercase tracking-wider mb-2 font-headline">
              Treatment Overview
            </h4>
            <p className="text-sm text-[#5a5f5c] leading-relaxed">
              {item.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#2e3230] uppercase tracking-wider mb-3 font-headline">
              Craftsmanship Highlights
            </h4>
            <ul className="space-y-2.5">
              {item.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2e3230]">
                  <div className="w-5 h-5 rounded-full bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#f5f1ea] border-t border-[#eae6de] flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-[#5a5f5c] text-center sm:text-left">
            * Exact price determined upon free preliminary vehicle inspection.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#c4c8bc] text-xs font-bold text-[#5a5f5c] hover:bg-[#eae6de] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onBookNow(item.id);
                onClose();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#4a7c59] hover:bg-[#2a6038] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book This Treatment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
