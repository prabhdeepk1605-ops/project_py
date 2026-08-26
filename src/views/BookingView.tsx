import React, { useState } from 'react';
import {
  Car,
  Wrench,
  Calendar,
  User,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Sparkles,
  Plus,
  Check,
  Download,
  AlertCircle
} from 'lucide-react';
import { WORKSHOP_LOCATIONS, SERVICES_LIST, ADD_ON_SERVICES, VEHICLE_MAKES } from '../data/mockData';
import { BookingState } from '../types';
import { api } from '../services/api';

interface BookingViewProps {
  initialServiceId?: string;
  initialMake?: string;
  initialModel?: string;
  onBookingComplete: (booking: BookingState) => void;
  onCancel: () => void;
}

export const BookingView: React.FC<BookingViewProps> = ({
  initialServiceId,
  initialMake,
  initialModel,
  onBookingComplete,
  onCancel,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Step 1 State: Vehicle & Location
  const [locationId, setLocationId] = useState<string>(WORKSHOP_LOCATIONS[0].id);
  const [vehicleType, setVehicleType] = useState<string>('sedan');
  const [make, setMake] = useState<string>(initialMake || 'Maruti Suzuki');
  const [model, setModel] = useState<string>(initialModel || 'Swift');
  const [year, setYear] = useState<string>('2022');
  const [fuelType, setFuelType] = useState<string>('Petrol');

  // Step 2 State: Services & Add-ons
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['essential-servicing']
  );
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  // Step 3 State: Schedule & Mode
  const todayStr = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState<string>(todayStr);
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM - 12:00 PM');
  const [serviceMode, setServiceMode] = useState<'valet' | 'workshop'>('valet');

  // Step 4 State: Customer Details
  const [customerName, setCustomerName] = useState<string>('Rahul Varma');
  const [customerPhone, setCustomerPhone] = useState<string>('+91 98480 22334');
  const [customerEmail, setCustomerEmail] = useState<string>('rahul.varma@example.com');
  const [pickupAddress, setPickupAddress] = useState<string>('Flat 402, Green Meadows, Labbipet, Vijayawada');
  const [notes, setNotes] = useState<string>('Please inspect brake shuddering at high speed.');

  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingState | null>(null);

  // Calculate pricing total
  const selectedServiceObjs = SERVICES_LIST.filter((s) => selectedServices.includes(s.id));
  const servicesTotal = selectedServiceObjs.reduce((sum, s) => sum + s.price, 0);
  const addOnsTotal = ADD_ON_SERVICES.filter((a) => selectedAddOns.includes(a.id)).reduce(
    (sum, a) => sum + a.price,
    0
  );
  const totalEstimatedPrice = servicesTotal + addOnsTotal;
  const totalSavings = selectedServiceObjs.reduce(
    (sum, s) => sum + ((s.originalPrice || s.price * 1.25) - s.price),
    0
  );

  const toggleService = (svcId: string) => {
    if (selectedServices.includes(svcId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((id) => id !== svcId));
      }
    } else {
      setSelectedServices([...selectedServices, svcId]);
    }
  };

  const toggleAddOn = (addOnId: string) => {
    if (selectedAddOns.includes(addOnId)) {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addOnId));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnId]);
    }
  };

  const handleFinishBooking = async () => {
    const refId = `TERRA-${Math.floor(1000 + Math.random() * 9000)}-${locationId.slice(0, 3).toUpperCase()}`;
    const newBookingData: BookingState = {
      id: refId,
      locationId,
      vehicleType,
      make,
      model,
      year,
      fuelType,
      selectedServices: selectedServiceObjs.map((s) => s.title),
      addOns: ADD_ON_SERVICES.filter((a) => selectedAddOns.includes(a.id)).map((a) => a.title),
      serviceMode,
      date,
      timeSlot,
      customerName,
      customerPhone,
      customerEmail,
      pickupAddress: serviceMode === 'valet' ? pickupAddress : undefined,
      notes,
      totalEstimatedPrice,
      totalSavings,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    // Save to MongoDB / backend
    const savedBooking = await api.createBooking(newBookingData);
    setConfirmedBooking(savedBooking);
    onBookingComplete(savedBooking);
  };

  // If already confirmed, render success screen
  if (confirmedBooking) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(46,50,48,0.08)] border border-[#c4c8bc]/40 text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 bg-[#d8f0de] text-[#4a7c59] rounded-full flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#705c30] bg-[#f8e0a8]/60 px-3 py-1 rounded-full">
              Booking Confirmed • {confirmedBooking.id}
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#2e3230]">
              Your Visit is Scheduled!
            </h2>
            <p className="text-xs sm:text-sm text-[#5a5f5c] max-w-md mx-auto">
              We're preparing our workshop bay for your <span className="font-bold text-[#2e3230]">{confirmedBooking.make} {confirmedBooking.model}</span>. A confirmation SMS & WhatsApp invoice estimate has been sent to <span className="font-bold text-[#2e3230]">{confirmedBooking.customerPhone}</span>.
            </p>
          </div>

          {/* Receipt Card */}
          <div className="bg-[#faf6f0] p-6 rounded-2xl border border-[#c4c8bc]/30 text-left space-y-4 text-xs sm:text-sm font-body">
            <div className="grid grid-cols-2 gap-4 pb-3 border-b border-[#eae6de]">
              <div>
                <span className="text-[#74796e] block text-xs">Date & Time</span>
                <span className="font-bold text-[#2e3230]">{confirmedBooking.date} • {confirmedBooking.timeSlot}</span>
              </div>
              <div>
                <span className="text-[#74796e] block text-xs">Service Mode</span>
                <span className="font-bold text-[#4a7c59]">
                  {confirmedBooking.serviceMode === 'valet' ? '🚗 Valet Pickup & Drop' : '🏢 In-Studio Drop-off'}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[#74796e] block text-xs mb-1">Booked Packages</span>
              <ul className="list-disc pl-4 space-y-1 text-[#2e3230]">
                {confirmedBooking.selectedServices.map((svc, i) => (
                  <li key={i} className="font-medium">{svc}</li>
                ))}
                {confirmedBooking.addOns.map((add, i) => (
                  <li key={i} className="font-medium text-[#5a5f5c]">{add} (Add-on)</li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#eae6de] flex justify-between items-center text-sm">
              <span className="font-bold text-[#2e3230]">Estimated Total:</span>
              <div className="text-right">
                <span className="font-headline font-bold text-lg text-[#4a7c59]">
                  ₹{confirmedBooking.totalEstimatedPrice.toLocaleString()}
                </span>
                <span className="block text-[11px] text-[#705c30] font-semibold">
                  Saved approx. ₹{confirmedBooking.totalSavings.toLocaleString()} vs OEM Dealership
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <button
              onClick={() => {
                alert(`Appointment ${confirmedBooking.id} added to your device calendar.`);
              }}
              className="px-6 py-3 rounded-xl border border-[#c4c8bc] text-xs font-bold text-[#2e3230] hover:bg-[#f0ece4] transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download .ICS Calendar Event
            </button>
            <button
              onClick={onCancel}
              className="px-8 py-3 rounded-xl bg-[#4a7c59] hover:bg-[#2a6038] text-white text-xs font-bold transition-all shadow-xs"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col gap-8">
      {/* Header & Intent (Matches HTML/Screenshot) */}
      <div className="text-center space-y-3">
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-[#2e3230]">
          Schedule Your Visit
        </h1>
        <p className="text-[#5a5f5c] text-base md:text-lg max-w-xl mx-auto leading-relaxed font-body">
          Book a consultation or service appointment at our workshop. Rooted in quality care.
        </p>
      </div>

      {/* Progress Tracker (Matches HTML/Screenshot) */}
      <div className="w-full relative mb-4">
        <div className="flex justify-between items-center relative z-10">
          {/* Step 1 */}
          <div
            onClick={() => setCurrentStep(1)}
            className="flex flex-col items-center gap-2 w-24 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xs transition-all ${
                currentStep >= 1
                  ? 'bg-[#4a7c59] text-white font-bold'
                  : 'bg-[#e4e0d8] text-[#5a5f5c]'
              }`}
            >
              <Car className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-bold text-center ${
                currentStep === 1 ? 'text-[#4a7c59]' : 'text-[#5a5f5c]'
              }`}
            >
              Vehicle &<br />Location
            </span>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setCurrentStep(2)}
            className="flex flex-col items-center gap-2 w-24 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xs transition-all ${
                currentStep >= 2
                  ? 'bg-[#4a7c59] text-white font-bold'
                  : 'bg-[#e4e0d8] text-[#5a5f5c]'
              }`}
            >
              <Wrench className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-bold text-center ${
                currentStep === 2 ? 'text-[#4a7c59]' : 'text-[#5a5f5c]'
              }`}
            >
              Services
            </span>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setCurrentStep(3)}
            className="flex flex-col items-center gap-2 w-24 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xs transition-all ${
                currentStep >= 3
                  ? 'bg-[#4a7c59] text-white font-bold'
                  : 'bg-[#e4e0d8] text-[#5a5f5c]'
              }`}
            >
              <Calendar className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-bold text-center ${
                currentStep === 3 ? 'text-[#4a7c59]' : 'text-[#5a5f5c]'
              }`}
            >
              Schedule
            </span>
          </div>

          {/* Step 4 */}
          <div
            onClick={() => setCurrentStep(4)}
            className="flex flex-col items-center gap-2 w-24 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xs transition-all ${
                currentStep >= 4
                  ? 'bg-[#4a7c59] text-white font-bold'
                  : 'bg-[#e4e0d8] text-[#5a5f5c]'
              }`}
            >
              <User className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-bold text-center ${
                currentStep === 4 ? 'text-[#4a7c59]' : 'text-[#5a5f5c]'
              }`}
            >
              Details
            </span>
          </div>
        </div>

        {/* Progress Background Line */}
        <div className="absolute top-5 left-12 right-12 h-1 bg-[#e4e0d8] -z-10 rounded-full" />
        {/* Active Progress Line */}
        <div
          className="absolute top-5 left-12 h-1 bg-[#4a7c59] -z-10 rounded-full transition-all duration-300"
          style={{
            width: `${((currentStep - 1) / 3) * 100}%`,
          }}
        />
      </div>

      {/* Booking Form Container (Bento Style matching HTML) */}
      <div className="bg-white rounded-3xl shadow-sm border border-[#eae6de] p-6 sm:p-8 relative overflow-hidden">
        {/* Decorative organic background blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#78a886]/15 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          {/* STEP 1: Vehicle & Location */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-headline text-2xl font-bold text-[#2e3230]">
                1. Select Vehicle & Location
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#2e3230] uppercase tracking-wider">
                    Preferred Workshop Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a5f5c]" />
                    <select
                      value={locationId}
                      onChange={(e) => setLocationId(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] focus:ring-2 focus:ring-[#4a7c59] focus:outline-none text-xs sm:text-sm text-[#2e3230] appearance-none font-body"
                    >
                      {WORKSHOP_LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name} ({loc.city})
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#74796e] pointer-events-none">
                      ▼
                    </span>
                  </div>
                </div>

                {/* Vehicle Type Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#2e3230] uppercase tracking-wider">
                    Vehicle Type
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a5f5c]" />
                    <select
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] focus:ring-2 focus:ring-[#4a7c59] focus:outline-none text-xs sm:text-sm text-[#2e3230] appearance-none font-body"
                    >
                      <option value="hatchback">Hatchback (Alto, Swift, Tiago, i10)</option>
                      <option value="sedan">Sedan / Coupe (Dzire, City, Verna)</option>
                      <option value="suv">SUV / Crossover (Creta, Brezza, Nexon, Thar)</option>
                      <option value="truck">Truck / MUV / Van (Innova, Ertiga, Omni)</option>
                      <option value="ev">Electric Vehicle (EV)</option>
                    </select>
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#74796e] pointer-events-none">
                      ▼
                    </span>
                  </div>
                </div>
              </div>

              {/* Vehicle Make/Model Input (Optional, helps us prepare) */}
              <div className="space-y-3 pt-4 border-t border-[#eae6de]">
                <label className="block text-xs font-bold text-[#2e3230] uppercase tracking-wider">
                  Make & Model (Optional, helps us prepare)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    placeholder="e.g. Maruti Suzuki / Hyundai / Toyota"
                    className="px-4 py-3 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] focus:ring-2 focus:ring-[#4a7c59] focus:outline-none text-xs sm:text-sm text-[#2e3230] font-body"
                  />
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. Swift 2022, Petrol"
                    className="px-4 py-3 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] focus:ring-2 focus:ring-[#4a7c59] focus:outline-none text-xs sm:text-sm text-[#2e3230] font-body"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Services Selection */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex justify-between items-center">
                <h2 className="font-headline text-2xl font-bold text-[#2e3230]">
                  2. Choose Service Packages
                </h2>
                <span className="text-xs font-bold text-[#4a7c59] bg-[#d8f0de] px-3 py-1 rounded-full">
                  Subtotal: ₹{totalEstimatedPrice.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES_LIST.slice(0, 4).map((svc) => {
                  const isChecked = selectedServices.includes(svc.id);
                  return (
                    <div
                      key={svc.id}
                      onClick={() => toggleService(svc.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? 'bg-[#d8f0de]/40 border-[#4a7c59] shadow-xs'
                          : 'bg-[#f5f1ea] border-[#c4c8bc]/40 hover:border-[#4a7c59]/50'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-headline font-bold text-base text-[#2e3230]">
                            {svc.title}
                          </h3>
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              isChecked
                                ? 'bg-[#4a7c59] text-white'
                                : 'border border-[#c4c8bc] bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                        <p className="text-xs text-[#5a5f5c] mb-3">{svc.shortDesc}</p>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-[#eae6de] text-xs">
                        <span className="text-[#74796e]">{svc.duration}</span>
                        <span className="font-bold text-sm text-[#4a7c59]">
                          ₹{svc.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Eco Add-ons */}
              <div className="pt-4 border-t border-[#eae6de] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#705c30]">
                  Recommended Eco Add-ons
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADD_ON_SERVICES.map((addon) => {
                    const isChecked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-[#f8e0a8]/40 border-[#705c30]'
                            : 'bg-white border-[#c4c8bc]/30 hover:bg-[#faf6f0]'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold text-[#2e3230]">{addon.title}</div>
                          <div className="text-[11px] text-[#5a5f5c]">{addon.desc}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#4a7c59]">+₹{addon.price}</span>
                          <div
                            className={`w-4 h-4 rounded-md flex items-center justify-center ${
                              isChecked
                                ? 'bg-[#705c30] text-white'
                                : 'border border-[#c4c8bc]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Schedule & Delivery Mode */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-headline text-2xl font-bold text-[#2e3230]">
                3. Choose Date & Time Slot
              </h2>

              {/* Service Delivery Mode Toggle */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2e3230] uppercase tracking-wider">
                  Service Delivery Option
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setServiceMode('valet')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      serviceMode === 'valet'
                        ? 'bg-[#d8f0de] border-[#4a7c59] shadow-xs'
                        : 'bg-[#f5f1ea] border-[#c4c8bc]/40 hover:bg-[#eae6de]'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#2e3230] flex items-center gap-2">
                      🚗 Free Doorstep Valet
                    </div>
                    <p className="text-xs text-[#5a5f5c] mt-1">
                      Our certified driver picks up and drops off your vehicle.
                    </p>
                  </div>

                  <div
                    onClick={() => setServiceMode('workshop')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      serviceMode === 'workshop'
                        ? 'bg-[#d8f0de] border-[#4a7c59] shadow-xs'
                        : 'bg-[#f5f1ea] border-[#c4c8bc]/40 hover:bg-[#eae6de]'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#2e3230] flex items-center gap-2">
                      🏢 In-Studio Drop-off
                    </div>
                    <p className="text-xs text-[#5a5f5c] mt-1">
                      Drive in, relax in our organic coffee lounge with gigabit Wi-Fi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#2e3230] uppercase tracking-wider">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] text-xs sm:text-sm font-semibold text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#2e3230] uppercase tracking-wider">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] text-xs sm:text-sm font-semibold text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                  >
                    <option value="08:30 AM - 10:30 AM">Morning Early: 08:30 AM – 10:30 AM</option>
                    <option value="10:30 AM - 12:30 PM">Midday: 10:30 AM – 12:30 PM</option>
                    <option value="02:00 PM - 04:00 PM">Afternoon: 02:00 PM – 04:00 PM</option>
                    <option value="04:30 PM - 06:30 PM">Evening Express: 04:30 PM – 06:30 PM</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Customer Details & Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h2 className="font-headline text-2xl font-bold text-[#2e3230]">
                4. Contact & Confirmation
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] text-xs text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Phone Number (For live SMS updates)</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] text-xs text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] text-xs text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                />
              </div>

              {serviceMode === 'valet' && (
                <div>
                  <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Doorstep Pickup Address</label>
                  <input
                    type="text"
                    required
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    placeholder="House/Flat number, Street, Landmark, City"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] text-xs text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#5a5f5c] mb-1">Special Instructions / Symptoms</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any specific noise, vibration, or custom requests for the artisan technician..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c4c8bc] bg-[#f5f1ea] text-xs text-[#2e3230] focus:ring-2 focus:ring-[#4a7c59]"
                />
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-[#f0ece4] p-4 rounded-2xl border border-[#c4c8bc]/40 flex justify-between items-center">
                <div>
                  <div className="text-xs text-[#5a5f5c]">Estimated Total (Pay at Workshop or Post-Service)</div>
                  <div className="text-xl font-headline font-bold text-[#4a7c59]">
                    ₹{totalEstimatedPrice.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-[#705c30] bg-[#f8e0a8]/60 px-2.5 py-1 rounded-full">
                    Includes 6-Mo OES Warranty
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons (Matches Screenshot & HTML) */}
          <div className="flex justify-between items-center pt-6 border-t border-[#eae6de] mt-4">
            <button
              onClick={() => {
                if (currentStep > 1) {
                  setCurrentStep(currentStep - 1);
                } else {
                  onCancel();
                }
              }}
              className="text-[#5a5f5c] font-bold px-4 py-2 hover:text-[#4a7c59] transition-colors flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              {currentStep > 1 ? (
                <>
                  <ArrowLeft className="w-4 h-4" /> Back
                </>
              ) : (
                'Cancel'
              )}
            </button>

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-[#4a7c59] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#2a6038] transition-all shadow-xs flex items-center gap-2 text-xs sm:text-sm cursor-pointer active:scale-98"
              >
                <span>
                  {currentStep === 1
                    ? 'Continue to Services'
                    : currentStep === 2
                    ? 'Continue to Schedule'
                    : 'Review & Confirm'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinishBooking}
                className="bg-[#4a7c59] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#2a6038] transition-all shadow-md flex items-center gap-2 text-sm cursor-pointer active:scale-98"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Confirm Appointment</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
