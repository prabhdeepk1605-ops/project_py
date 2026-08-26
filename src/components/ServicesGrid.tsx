import React from 'react';
import {
  Wrench,
  Snowflake,
  BatteryCharging,
  Disc,
  Paintbrush,
  Droplets,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceCategory: string) => void;
  onBookNow: (serviceId?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onBookNow,
}) => {
  const cards = [
    {
      id: 'general-service',
      catId: 'our-services',
      title: 'General Service',
      desc: 'Oil, filters, health check',
      icon: Wrench,
      isNew: false,
    },
    {
      id: 'ac-repair',
      catId: 'ac-repair',
      title: 'AC Repair',
      desc: 'Cooling & diagnostics',
      icon: Snowflake,
      isNew: true,
    },
    {
      id: 'batteries',
      catId: 'batteries',
      title: 'Batteries',
      desc: 'Testing & replacement',
      icon: BatteryCharging,
      isNew: false,
    },
    {
      id: 'tyres-wheel',
      catId: 'tyres-wheel',
      title: 'Tyres & Wheel',
      desc: 'Alignment & care',
      icon: Disc,
      isNew: false,
    },
    {
      id: 'denting-painting',
      catId: 'curated-custom',
      title: 'Denting & Painting',
      desc: 'Scratch removal & booth finish',
      icon: Paintbrush,
      isNew: false,
    },
    {
      id: 'car-spa',
      catId: 'summer-services',
      title: 'Car Spa',
      desc: 'Deep cleaning & eco wash',
      icon: Droplets,
      isNew: false,
    },
    {
      id: 'inspections',
      catId: 'our-services',
      title: 'Inspections',
      desc: 'Pre-purchase & holiday checks',
      icon: CheckCircle2,
      isNew: false,
    },
  ];

  return (
    <section className="py-20 bg-[#ffffff] border-y border-[#eae6de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0ece4] text-[#705c30] text-xs font-bold mb-3 border border-[#c4c8bc]/30">
            <Sparkles className="w-3.5 h-3.5" /> Handled with Rooted Warmth
          </div>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#2e3230] mb-4">
            Holistic Car Care
          </h2>
          <p className="text-sm sm:text-base text-[#5a5f5c] max-w-2xl mx-auto font-body leading-relaxed">
            Choose from a wide assortment of services. From routine maintenance to deep detailing, we treat every vehicle with organic precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onSelectService(card.catId)}
                className="bg-[#faf6f0] rounded-2xl p-5 sm:p-6 text-center hover:shadow-[0_8px_30px_rgba(46,50,48,0.1)] transition-all border border-[#c4c8bc]/30 cursor-pointer group relative flex flex-col items-center justify-between"
              >
                {card.isNew && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-[#705c30] text-white px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}

                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-[#d8f0de]/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-108 group-hover:bg-[#d8f0de] transition-all">
                  <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-[#4a7c59]" />
                </div>

                <div>
                  <h3 className="font-headline font-bold text-base sm:text-lg text-[#2e3230] mb-1 group-hover:text-[#4a7c59] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a5f5c]">{card.desc}</p>
                </div>

                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-[#4a7c59] flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}

          {/* 8th Card: View All Services (Matches HTML) */}
          <div
            onClick={() => onSelectService('our-services')}
            className="bg-[#f5f1ea] rounded-2xl p-5 sm:p-6 text-center hover:shadow-[0_8px_30px_rgba(46,50,48,0.1)] transition-all border border-[#c4c8bc]/40 cursor-pointer group flex flex-col justify-center items-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ffffff] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xs">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#4a7c59]" />
            </div>
            <h3 className="font-headline font-bold text-base sm:text-lg text-[#2e3230] group-hover:text-[#4a7c59] transition-colors">
              View All Services
            </h3>
            <p className="text-xs text-[#5a5f5c] mt-1">Explore all categories</p>
          </div>
        </div>
      </div>
    </section>
  );
};
