import React, { useState } from 'react';
import { X, User, Car, Shield, LogOut, CheckCircle2, Award, Calendar } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; email: string; phone: string; vehicle: string } | null;
  onLogin: (userData: { name: string; email: string; phone: string; vehicle: string }) => void;
  onLogout: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  user,
  onLogin,
  onLogout,
}) => {
  const [name, setName] = useState('Rahul Varma');
  const [email, setEmail] = useState('rahul.varma@example.com');
  const [phone, setPhone] = useState('+91 98480 22334');
  const [vehicle, setVehicle] = useState('Maruti Suzuki Swift ZXi (2022)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ name, email, phone, vehicle });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#faf6f0] rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#c4c8bc]/50 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-[#4a7c59] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center mb-3">
            <User className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-headline font-bold">
            {user ? 'Customer Garage & Profile' : 'Terra Member Portal'}
          </h3>
          <p className="text-white/80 text-xs mt-1">
            {user
              ? 'Manage your vehicles, digital service history, and health cards.'
              : 'Sign in to track real-time workshop jobs and saved vehicles.'}
          </p>
        </div>

        {user ? (
          <div className="p-6 space-y-5">
            <div className="bg-[#f0ece4] p-4 rounded-2xl border border-[#c4c8bc]/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#5a5f5c]">Customer</span>
                <span className="text-xs font-bold text-[#4a7c59] bg-[#d8f0de] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3" /> Terra Club Member
                </span>
              </div>
              <div className="font-headline font-bold text-base text-[#2e3230]">{user.name}</div>
              <div className="text-xs text-[#5a5f5c]">{user.email} • {user.phone}</div>
            </div>

            <div className="bg-[#ffffff] p-4 rounded-2xl border border-[#c4c8bc]/30 space-y-2">
              <div className="text-xs font-bold text-[#5a5f5c] flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#4a7c59]" /> Primary Registered Vehicle
              </div>
              <div className="font-bold text-sm text-[#2e3230]">{user.vehicle}</div>
              <div className="text-[11px] text-[#4a7c59] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Last Digital Health Score: 96/100 (Optimal)
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center gap-3">
              <button
                onClick={onLogout}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 py-2.5 rounded-xl border border-red-200 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-[#4a7c59] text-white font-bold text-xs py-2.5 rounded-xl hover:bg-[#2a6038] transition-colors"
              >
                Close Portal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Mobile Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Primary Vehicle (Make & Model)</label>
              <input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="e.g. Maruti Suzuki Swift / Hyundai Creta"
                className="w-full text-xs bg-[#f5f1ea] border border-[#c4c8bc] rounded-xl p-2.5 text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#4a7c59] hover:bg-[#2a6038] text-white font-bold text-xs py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                Sign In / Save Garage Profile
              </button>
            </div>

            <div className="text-[11px] text-[#5a5f5c] text-center">
              No password needed for prototyping. One-tap instant access.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
