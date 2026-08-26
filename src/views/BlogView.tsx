import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  tags: string[];
}

export const BlogView: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'How Synthetic Engine Oil Extends Hybrid & ICE Engine Life by 40%',
      category: 'Maintenance',
      readTime: '4 min read',
      date: 'Aug 18, 2026',
      author: 'K. S. Raman, Master Diagnostic Lead',
      summary: 'Understanding viscosity indexes, thermal breakdown under peak summer temperatures, and why 100% full synthetic outperforms conventional mineral blends.',
      content: `Modern automotive internal combustion and hybrid powertrains operate under tighter tolerances and higher thermal stress than ever before. 

Full synthetic engine lubricants are engineered with uniform molecular structures that resist shear breakdown and maintain hydrodynamic film stability at over 150°C. 

Key benefits observed in our workshop data:
1. Up to 3.2% better fuel economy due to reduced frictional drag.
2. Near-zero sludge formation in variable valve timing (VVT/VTEC) solenoids.
3. Enhanced cold-cranking protection during early morning starts.

We recommend changing full synthetic oil every 7,500 to 10,000 km along with an OES micron filter.`,
      tags: ['Engine Care', 'Synthetic Oil', 'Hybrid']
    },
    {
      id: 'post-2',
      title: 'The Truth About Dealership Markups vs Certified Independent Garages',
      category: 'Industry Transparency',
      readTime: '6 min read',
      date: 'Aug 10, 2026',
      author: 'Ananya Roy, Service Director',
      summary: 'Why OEM authorized showrooms charge 30–50% more for identical OEM supplier spare parts, and how transparent itemized bills protect your wallet.',
      content: `Automotive owners frequently assume that authorized dealerships are the only place to receive genuine components. However, vehicle manufacturers rarely manufacture parts like brake pads, spark plugs, filters, or alternators themselves.

They source them from Tier-1 suppliers like Bosch, Denso, Valeo, and Brembo. 

When you service with an independent eco-certified garage like Terra Workshop:
- You receive the exact same OES manufactured component in the supplier's original packaging.
- You avoid inflated showroom overhead markups.
- You get transparent labor tracking and digital walkaround logs.`,
      tags: ['Pricing', 'OES Spares', 'Transparency']
    },
    {
      id: 'post-3',
      title: 'Summer Car AC Diagnostics: Why Pure R134a Gas Matters',
      category: 'Climate Care',
      readTime: '3 min read',
      date: 'Jul 28, 2026',
      author: 'David Lindqvist, HVAC Specialist',
      summary: 'Low refrigerant, clogged cabin microfilters, and contaminated gases can cause compressor seizure. Learn how proper AC evacuation works.',
      content: `During peak summer heatwaves, car air conditioning systems work at maximum head pressures. Using adulterated or low-grade refrigerant gas can corrode internal copper windings and damage the expansion valve.

At Terra Workshop, every AC service includes:
- Complete vacuum recovery and moisture removal.
- Exact weight charging of virgin R134a refrigerant.
- Antibacterial steam sanitization of evaporator coils to eliminate mildew allergens.`,
      tags: ['AC Service', 'Summer', 'Cooling']
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#705c30] bg-[#f8e0a8]/60 px-3 py-1 rounded-full uppercase tracking-wider">
          Terra Knowledge Journal
        </span>
        <h1 className="font-headline font-bold text-3xl md:text-5xl text-[#2e3230]">
          Car Care & Craftsmanship Blog
        </h1>
        <p className="text-[#5a5f5c] text-sm sm:text-base leading-relaxed font-body">
          Practical advice from our master mechanics on vehicle longevity, eco-driving tips, and honest automotive engineering.
        </p>
      </div>

      {/* Post Modal / Reader if open */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#faf6f0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-y-auto max-h-[80vh] shadow-2xl border border-[#c4c8bc]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#4a7c59] bg-[#d8f0de] px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-xs font-bold text-[#5a5f5c] hover:text-[#2e3230] bg-[#eae6de] px-3 py-1.5 rounded-lg"
              >
                Close Article
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#2e3230] mb-3">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-[#5a5f5c] pb-4 mb-6 border-b border-[#eae6de]">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {selectedPost.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
            </div>

            <div className="text-sm text-[#2e3230] leading-relaxed whitespace-pre-line font-body space-y-4">
              {selectedPost.content}
            </div>

            <div className="mt-8 pt-4 border-t border-[#eae6de] flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-[#4a7c59] text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-[#2a6038] transition-colors"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white rounded-3xl p-7 border border-[#c4c8bc]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold text-[#4a7c59] bg-[#d8f0de] px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-[11px] text-[#74796e] flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>

              <h3 className="font-headline font-bold text-lg sm:text-xl text-[#2e3230] mb-3 group-hover:text-[#4a7c59] transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5a5f5c] line-clamp-3 leading-relaxed mb-6 font-body">
                {post.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#f0ece4] flex items-center justify-between">
              <span className="text-xs text-[#74796e]">{post.date}</span>
              <span className="text-xs font-bold text-[#4a7c59] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
