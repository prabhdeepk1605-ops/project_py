import React, { useState } from 'react';
import { X, CheckCircle2, Clock, MapPin, Wrench, ShieldCheck, Car, Calendar, ArrowRight, Download, Phone } from 'lucide-react';
import { BookingState } from '../types';

interface BookingTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingState[];
  onCancelBooking: (id: string) => void;
}

export const BookingTrackerModal: React.FC<BookingTrackerModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
}) => {
  const [selectedBookingId, setSelectedBookingId] = useState<string>(
    bookings.length > 0 ? bookings[0].id || '' : ''
  );

  if (!isOpen) return null;

  const currentBooking = bookings.find((b) => b.id === selectedBookingId) || bookings[0];

  const stages = [
    { label: 'Scheduled', desc: 'Appointment locked in system', done: true },
    { label: 'Vehicle Check-in', desc: '40-point walkaround video recorded', done: true },
    { label: 'Artisan Servicing', desc: 'OES parts install & fluid replacement', current: true },
    { label: 'Multi-Point Quality Test', desc: 'Road test & emission diagnostics', done: false },
    { label: 'Eco Spa & Ready', desc: 'Exterior glaze & interior steam', done: false },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#faf6f0] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#c4c8bc]/50 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-[#4a7c59] text-white p-6 relative flex justify-between items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#d8f0de] mb-1">
              Live Workshop Dispatch Tracker
            </div>
            <h3 className="text-2xl font-headline font-bold">Active Service Orders</h3>
            <p className="text-white/80 text-xs mt-1">
              Real-time milestone tracking for your vehicle maintenance.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {bookings.length === 0 ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#f0ece4] rounded-full flex items-center justify-center text-[#74796e] mx-auto">
              <Calendar className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-headline font-bold text-[#2e3230]">No Active Bookings</h4>
            <p className="text-xs text-[#5a5f5c] max-w-xs mx-auto">
              You haven't scheduled any service visits yet. Book an appointment to track live technician updates here.
            </p>
            <button
              onClick={onClose}
              className="bg-[#4a7c59] text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-[#2a6038] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Booking Selector Pills */}
            {bookings.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {bookings.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBookingId(b.id || '')}
                    className={`text-xs px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
                      (b.id === selectedBookingId || (!selectedBookingId && b === bookings[0]))
                        ? 'bg-[#4a7c59] text-white'
                        : 'bg-[#f0ece4] text-[#5a5f5c] hover:bg-[#eae6de]'
                    }`}
                  >
                    {b.make} {b.model} ({b.id?.slice(0, 10)})
                  </button>
                ))}
              </div>
            )}

            {/* Current Selected Booking Card */}
            {currentBooking && (
              <div className="space-y-6">
                {/* Summary Card */}
                <div className="bg-[#ffffff] p-5 rounded-2xl border border-[#c4c8bc]/30 shadow-xs space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[11px] font-bold text-[#705c30] bg-[#f8e0a8]/60 px-2.5 py-0.5 rounded-full">
                        Reference: {currentBooking.id || 'TERRA-2026-X'}
                      </span>
                      <h4 className="text-lg font-headline font-bold text-[#2e3230] mt-1.5 flex items-center gap-2">
                        <Car className="w-5 h-5 text-[#4a7c59]" />
                        {currentBooking.make} {currentBooking.model}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#5a5f5c]">Estimated Total</div>
                      <div className="text-base font-bold text-[#4a7c59]">
                        ₹{currentBooking.totalEstimatedPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#5a5f5c] pt-2 border-t border-[#f0ece4]">
                    <div>
                      <span className="font-semibold block text-[#2e3230]">Date & Slot:</span>
                      {currentBooking.date} • {currentBooking.timeSlot}
                    </div>
                    <div>
                      <span className="font-semibold block text-[#2e3230]">Service Mode:</span>
                      {currentBooking.serviceMode === 'valet' ? '🚗 Valet Pickup & Drop' : '🏢 Workshop Visit'}
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="font-semibold block text-[#2e3230]">Customer:</span>
                      {currentBooking.customerName} ({currentBooking.customerPhone})
                    </div>
                  </div>

                  {currentBooking.selectedServices.length > 0 && (
                    <div className="text-xs text-[#2e3230] pt-2">
                      <span className="font-bold text-[#5a5f5c]">Selected Services: </span>
                      {currentBooking.selectedServices.join(', ')}
                    </div>
                  )}
                </div>

                {/* Live Progress Stage Timeline */}
                <div className="bg-[#f0ece4] p-5 rounded-2xl border border-[#c4c8bc]/30">
                  <h5 className="text-xs font-bold text-[#2e3230] uppercase tracking-wider mb-4 font-headline flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#4a7c59]" /> Live Service Progress
                  </h5>

                  <div className="space-y-4 relative">
                    {stages.map((stg, idx) => (
                      <div key={idx} className="flex items-start gap-3 relative">
                        {/* Dot indicator */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            stg.done
                              ? 'bg-[#4a7c59] text-white'
                              : stg.current
                              ? 'bg-[#705c30] text-white animate-pulse'
                              : 'bg-[#eae6de] text-[#74796e]'
                          }`}
                        >
                          {stg.done ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                        </div>
                        <div>
                          <div
                            className={`text-xs font-bold ${
                              stg.current ? 'text-[#705c30] font-black' : 'text-[#2e3230]'
                            }`}
                          >
                            {stg.label} {stg.current && '(In Progress Now)'}
                          </div>
                          <div className="text-[11px] text-[#5a5f5c]">{stg.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      alert('Connecting you to your dedicated master service advisor at Terra Workshop (+91 866 247 8899)...');
                    }}
                    className="w-full sm:w-auto text-xs font-bold text-[#4a7c59] bg-[#d8f0de] hover:bg-[#c8e8d0] px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Workshop Advisor
                  </button>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        if (currentBooking.id) onCancelBooking(currentBooking.id);
                      }}
                      className="flex-1 sm:flex-none text-xs font-bold text-red-600 hover:bg-red-50 border border-red-200 px-3.5 py-2.5 rounded-xl transition-colors"
                    >
                      Cancel Booking
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 sm:flex-none bg-[#4a7c59] text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#2a6038] transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
