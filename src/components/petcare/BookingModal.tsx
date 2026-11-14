'use client';
import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Dog, Clock, User, Phone, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: 'Dog',
    petName: '',
    service: initialService || 'Pet Sitting',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#f3ede4] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6b7280] hover:text-[#111827] hover:bg-[#faf8f5] transition-colors"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#faeedd] flex items-center justify-center mb-4">
              <CheckCircle size={36} className="text-[#111827]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827]">Booking Request Received!</h3>
            <p className="mt-2 text-[#6b7280] text-sm max-w-xs">
              Thank you! Our pet care specialist will contact you shortly to confirm your booking.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src="/petcare/paw-black.svg" alt="" className="w-5 h-5" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#e5a663]">
                Easy Pet Care Reservation
              </span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-[#111827] tracking-tight">
              Book Pet Care Now
            </h3>
            <p className="text-sm text-[#6b7280] mt-1 mb-6">
              Fill in your details and we&apos;ll schedule the perfect care for your pet.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-1">Your Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf8f5] border border-[#e5e7eb] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10 focus:border-[#111827]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf8f5] border border-[#e5e7eb] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10 focus:border-[#111827]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-1">Select Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#e5e7eb] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10 focus:border-[#111827]"
                  >
                    <option value="Pet Sitting">Pet Sitting</option>
                    <option value="Dog Walking">Dog Walking</option>
                    <option value="Boarding">Boarding</option>
                    <option value="Grooming">Grooming</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12.5px] font-semibold text-[#374151] mb-1">Pet&apos;s Name</label>
                  <div className="relative">
                    <Dog size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                    <input
                      type="text"
                      required
                      placeholder="Barkley"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf8f5] border border-[#e5e7eb] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10 focus:border-[#111827]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-[#374151] mb-1">Preferred Date</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#faf8f5] border border-[#e5e7eb] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#111827]/10 focus:border-[#111827]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 bg-[#111827] hover:bg-black text-white font-semibold rounded-full text-[15px] shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                Confirm Booking Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

