import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, Shield, Clock } from 'lucide-react';
import { SPECIALIZED_CARE, HOTLINKED_IMAGES } from '../data/mockData';
import { SpecializedCareItem } from '../types';

interface SpecializedCareBentoProps {
  onOpenDetails: (item: SpecializedCareItem) => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const SpecializedCareBento: React.FC<SpecializedCareBentoProps> = ({
  onOpenDetails,
  onBookTreatment,
}) => {
  const item1 = SPECIALIZED_CARE[0]; // Front Bumper Paint
  const item2 = SPECIALIZED_CARE[1]; // Rubbing & Polishing
  const item3 = SPECIALIZED_CARE[2]; // Deep All Round Spa

  return (
    <section className="py-20 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf6f0] text-[#705c30] text-xs font-bold mb-2 border border-[#c4c8bc]/30">
              <Sparkles className="w-3.5 h-3.5" /> Artisan Studio Treatments
            </div>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#2e3230]">
              Specialized Care
            </h2>
            <p className="text-[#5a5f5c] text-sm sm:text-base mt-1">
              Premium treatments to restore, protect, and rejuvenate your automobile.
            </p>
          </div>

          <button
            onClick={() => onOpenDetails(item1)}
            className="flex items-center gap-1.5 text-[#4a7c59] hover:text-[#2a6038] font-bold text-sm transition-colors cursor-pointer group"
          >
            <span>Explore Treatment Specs</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid (Matches HTML Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[560px]">
          {/* Bento Item 1 (Large 2-Column Span) */}
          <div
            onClick={() => onOpenDetails(item1)}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-[0_4px_25px_rgba(46,50,48,0.08)] bg-[#2e3230] min-h-[320px] md:min-h-full"
          >
            <img
              alt="Bumper Paint Service"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              src={HOTLINKED_IMAGES.bumperPaint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute top-6 right-6">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 24 Hrs Turnaround
              </span>
            </div>

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <span className="bg-[#705c30] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block shadow-xs">
                Restoration
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-2 group-hover:text-[#d8f0de] transition-colors">
                Front Bumper Paint
              </h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-lg mb-4 leading-relaxed">
                Flawless color matching and eco-friendly clear coats for a seamless finish that lasts.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white bg-white/20 px-3 py-1 rounded-lg">
                  Starting ₹2,199
                </span>
                <span className="text-xs font-bold text-[#d8f0de] flex items-center gap-1">
                  View specs & book <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Bento Stack (Right Column) */}
          <div className="flex flex-col gap-6">
            {/* Bento Item 2 (Top Small) */}
            <div
              onClick={() => onOpenDetails(item2)}
              className="relative rounded-3xl overflow-hidden h-[260px] md:h-1/2 group cursor-pointer shadow-[0_4px_20px_rgba(46,50,48,0.06)] bg-[#2e3230]"
            >
              <img
                alt="Rubbing & Polishing"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                src={HOTLINKED_IMAGES.rubbingPolishing}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-[#4a7c59] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-1.5 inline-block">
                  Paint Correction
                </span>
                <h3 className="text-xl font-headline font-bold text-white mb-1 group-hover:text-[#d8f0de] transition-colors">
                  Rubbing & Polishing
                </h3>
                <p className="text-white/80 text-xs">
                  Restore showroom shine and eliminate 90%+ of swirl marks.
                </p>
              </div>
            </div>

            {/* Bento Item 3 (Bottom Small) */}
            <div
              onClick={() => onOpenDetails(item3)}
              className="relative rounded-3xl overflow-hidden h-[260px] md:h-1/2 group cursor-pointer shadow-[0_4px_20px_rgba(46,50,48,0.06)] bg-[#4a7c59]"
            >
              <img
                alt="Deep Clean Spa"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply opacity-70"
                src={HOTLINKED_IMAGES.deepCleanSpa}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <span className="bg-[#705c30] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-1.5 inline-block">
                  Eco Spa
                </span>
                <h3 className="text-xl font-headline font-bold text-white mb-1 group-hover:text-[#d8f0de] transition-colors">
                  Deep All Round Spa
                </h3>
                <p className="text-white/90 text-xs">
                  Interior & exterior rejuvenation with botanical steam extraction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
