import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, Sparkles, Loader2 } from 'lucide-react';
import { VEHICLE_MAKES, WORKSHOP_DETAILS } from '../data/mockData';
import { api } from '../services/api';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: { make: string; model: string; location: string };
  initialServiceName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
  initialServiceName,
}) => {
  const [make, setMake] = useState(initialVehicle?.make || 'Maruti Suzuki');
  const [model, setModel] = useState(initialVehicle?.model || 'Swift');
  const [serviceNeeded, setServiceNeeded] = useState(initialServiceName || 'Routine Maintenance (₹300 - ₹400)');
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
        location: WORKSHOP_DETAILS.city,
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
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-red-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-red-100 bg-red-700/50 w-fit px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Brother Motors Rampura Phul
          </div>
          <h3 className="text-2xl font-headline font-bold">Request Service or Spare Parts</h3>
          <p className="text-white/85 text-xs mt-1">
            Upfront rates, genuine spare parts, and 20%–30% cheaper car disposal parts.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border border-red-100">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-headline font-bold text-gray-900">
              Inquiry Received!
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-gray-900">{name || 'Customer'}</strong>. The Brother Motors team in Rampura Phul has logged your request for{' '}
              <strong className="text-red-600">{serviceNeeded}</strong> on your <strong className="text-gray-900">{make} {model}</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <a
                href={`tel:${WORKSHOP_DETAILS.phone1}`}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" /> Call: {WORKSHOP_DETAILS.phone1}
              </a>
              <a
                href={`https://wa.me/917837600098?text=${encodeURIComponent(`Hi Brother Motors, I just submitted an inquiry for ${make} ${model} (${serviceNeeded}). Name: ${name}, Phone: ${phone}`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Us Now
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-gray-500 hover:underline"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
            {/* Make & Model */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Vehicle Make</label>
                <select
                  value={make}
                  onChange={(e) => {
                    setMake(e.target.value);
                    const selected = VEHICLE_MAKES.find((m) => m.name === e.target.value);
                    if (selected && selected.models.length > 0) {
                      setModel(selected.models[0].name);
                    }
                  }}
                  className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-gray-900 focus:ring-2 focus:ring-red-600 focus:bg-white"
                >
                  {VEHICLE_MAKES.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Vehicle Model</label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-gray-900 focus:ring-2 focus:ring-red-600 focus:bg-white"
                >
                  {currentMakeObj.models.map((md) => (
                    <option key={md.name} value={md.name}>
                      {md.name} ({md.type})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Service or Part Choice */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Requirement / Service Needed</label>
              <select
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-gray-900 focus:ring-2 focus:ring-red-600 focus:bg-white"
              >
                <option value="Basic Service (800 Petrol) - ₹300">Basic Service (800 Petrol) - ₹300</option>
                <option value="Standard Service (Alto) - ₹400">Standard Service (Alto) - ₹400</option>
                <option value="Comprehensive Service - ₹300">Comprehensive Service - ₹300</option>
                <option value="AC Service & Gas Top-up - ₹1500">AC Service & Gas Top-up - ₹1500</option>
                <option value="Front & Rear Brake Overhaul - ₹1000">Front & Rear Brake Overhaul - ₹1000</option>
                <option value="Eco Deep Clean & Spa - ₹500">Eco Deep Clean & Spa - ₹500</option>
                <option value="Car Disposal Parts (20%–30% Cheaper)">Car Disposal Parts (20%–30% Cheaper)</option>
                <option value="Spare Parts for All Cars">Spare Parts for All Cars</option>
                <option value="Full Car Repair & Paint">Full Car Repair & Paint</option>
                <option value="Sell & Purchase Cars (Govt. Vehicles)">Sell & Purchase Cars (Govt. Vehicles)</option>
                <option value="Other Custom Inquiry">Other Custom Repair / Inquiry</option>
              </select>
            </div>

            {/* Customer Details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-gray-900 focus:ring-2 focus:ring-red-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mobile / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-gray-900 focus:ring-2 focus:ring-red-600 focus:bg-white"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Specific Part or Issue Description (Optional)</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g., Headlight assembly, bumper dent repair, gear shift noise..."
                className="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-gray-900 focus:ring-2 focus:ring-red-600 focus:bg-white"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request Estimate / Part Check</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-center pt-1">
              <span className="text-[11px] text-gray-500">
                Or reach out directly on WhatsApp at <strong className="text-gray-900">78376-00098</strong>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
