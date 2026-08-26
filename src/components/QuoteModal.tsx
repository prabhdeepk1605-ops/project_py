import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calculator, Sparkles, Loader2 } from 'lucide-react';
import { VEHICLE_MAKES, WORKSHOP_LOCATIONS } from '../data/mockData';
import { api } from '../services/api';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: { make: string; model: string; location: string };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
}) => {
  const [make, setMake] = useState(initialVehicle?.make || 'Maruti Suzuki');
  const [model, setModel] = useState(initialVehicle?.model || 'Swift');
  const [location, setLocation] = useState(initialVehicle?.location || 'Vijayawada, India');
  const [serviceNeeded, setServiceNeeded] = useState('Periodic Maintenance + AC Service');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentMakeObj = VEHICLE_MAKES.find((m) => m.name === make) || VEHICLE_MAKES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.submitQuote({
        make,
        model,
        location,
        serviceCategory: serviceNeeded,
        message: notes,
        customerName: name,
        customerPhone: phone,
        customerEmail: '',
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#faf6f0] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#c4c8bc]/50 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-[#4a7c59] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#d8f0de] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Tailored Workshop Estimate
          </div>
          <h3 className="text-2xl font-headline font-bold">Request an Artisan Quote</h3>
          <p className="text-white/80 text-xs mt-1">
            Get transparent pricing with exact part breakdowns and zero obligation.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#d8f0de] text-[#4a7c59] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-headline font-bold text-[#2e3230]">
              Quote Request Sent!
            </h4>
            <p className="text-xs text-[#5a5f5c] leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-bold text-[#2e3230]">{name || 'valued customer'}</span>. Our master mechanics at{' '}
              <span className="font-semibold text-[#4a7c59]">{location}</span> are analyzing the specs for your{' '}
              <span className="font-semibold text-[#2e3230]">{make} {model}</span>. We will WhatsApp/call you at{' '}
              <span className="font-bold text-[#2e3230]">{phone}</span> with the itemized estimate within 15 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-[#4a7c59] text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-[#2a6038] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Vehicle Make</label>
                <select
                  value={make}
                  onChange={(e) => {
                    setMake(e.target.value);
                    const selected = VEHICLE_MAKES.find((m) => m.name === e.target.value);
                    if (selected && selected.models.length > 0) {
                      setModel(selected.models[0].name);
                    }
                  }}
                  className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                >
                  {VEHICLE_MAKES.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Vehicle Model</label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                >
                  {currentMakeObj.models.map((md) => (
                    <option key={md.name} value={md.name}>
                      {md.name} ({md.type})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Preferred Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
              >
                {WORKSHOP_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.city}>
                    {loc.city} — {loc.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Services Needed</label>
              <input
                type="text"
                required
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                placeholder="e.g. Front Bumper Paint, AC Not Cooling, 40,000km Service"
                className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Mobile / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Special Notes / Symptoms (Optional)</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe any abnormal sounds, dashboard error lights, or custom requirements..."
                className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#4a7c59] hover:bg-[#2a6038] text-white font-bold text-sm py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Quote Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
