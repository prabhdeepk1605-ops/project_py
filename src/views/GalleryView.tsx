import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Video as VideoIcon,
  Play,
  X,
  ExternalLink,
  Instagram,
  Filter,
  Phone,
  MessageSquare,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { GALLERY_MEDIA, WORKSHOP_DETAILS } from '../data/mockData';
import { GalleryMediaItem } from '../types';

interface GalleryViewProps {
  onOpenQuoteModal?: (topic?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'overhaul' | 'repair'>('all');
  const [activeMedia, setActiveMedia] = useState<GalleryMediaItem | null>(null);

  const filteredMedia = GALLERY_MEDIA.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'image' || filter === 'video') return item.type === filter;
    return item.category === filter;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-100 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-red-600" /> Real Workshop Media
        </div>
        <h1 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-gray-900">
          Brother Motors Workshop Gallery
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-body">
          Explore actual photos and video clips of our active service bays, gearbox overhauls, vehicle paint booths, and spare parts inventory at Rampura Phul.
        </p>

        {/* Instagram Reviews CTA Banner */}
        <div className="pt-2">
          <a
            href={WORKSHOP_DETAILS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#d6249f] via-[#285AEB] to-[#fd5949] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-2xl shadow-sm hover:opacity-95 transition-transform hover:scale-[1.02]"
          >
            <Instagram className="w-4 h-4" />
            <span>Check Our Service Reviews & Reels on Instagram {WORKSHOP_DETAILS.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-red-600 text-white shadow-xs'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-700'
          }`}
        >
          All Media ({GALLERY_MEDIA.length})
        </button>
        <button
          onClick={() => setFilter('video')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            filter === 'video'
              ? 'bg-red-600 text-white shadow-xs'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-700'
          }`}
        >
          <VideoIcon className="w-3.5 h-3.5" />
          Videos ({GALLERY_MEDIA.filter((m) => m.type === 'video').length})
        </button>
        <button
          onClick={() => setFilter('image')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            filter === 'image'
              ? 'bg-red-600 text-white shadow-xs'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-700'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          Photos ({GALLERY_MEDIA.filter((m) => m.type === 'image').length})
        </button>
        <button
          onClick={() => setFilter('overhaul')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'overhaul'
              ? 'bg-red-600 text-white shadow-xs'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-700'
          }`}
        >
          Gearbox & Suspension
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveMedia(item)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg hover:border-red-200 transition-all cursor-pointer"
          >
            {/* Media Container */}
            <div className="relative aspect-video w-full bg-[#1c221e] overflow-hidden flex items-center justify-center">
              {item.type === 'video' ? (
                <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-300">
                  <video
                    src={item.url}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.url}
                    alt="Brother Motors Workshop"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Media Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-gray-950 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
              <span className="font-headline font-bold text-base sm:text-lg text-white">
                Brother Motors Workshop
              </span>
              <button
                onClick={() => setActiveMedia(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Body */}
            <div className="p-4 sm:p-6 flex-grow overflow-auto flex items-center justify-center bg-black/40">
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.url}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[60vh] w-auto max-w-full rounded-xl shadow-lg"
                />
              ) : (
                <img
                  src={activeMedia.url}
                  alt="Brother Motors Workshop"
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-gray-900 flex items-center justify-between gap-4 text-white">
              <div className="text-xs text-white/70">
                Brother Motors, Near Jio Petrol Pump, Rampura Phul (BTI.)
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${WORKSHOP_DETAILS.phone1}`}
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" /> Call: {WORKSHOP_DETAILS.phone1}
                </a>
                <a
                  href={WORKSHOP_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA for Inquiries */}
      <div className="bg-red-50/50 rounded-3xl p-6 sm:p-10 border border-red-100 text-center space-y-4">
        <h2 className="text-2xl font-headline font-bold text-gray-900">
          Need Custom Repair, Paint, or Spare Parts for Your Car?
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Visit Brother Motors near Jio Petrol Pump, Rampura Phul, or give us a call. We offer genuine parts, 20–30% cheaper car disposal parts, and expert mechanical overhauls.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`tel:${WORKSHOP_DETAILS.phone1}`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call {WORKSHOP_DETAILS.phone1}
          </a>
          <a
            href="https://wa.me/917837600098"
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Workshop Desk
          </a>
        </div>
      </div>
    </div>
  );
};
