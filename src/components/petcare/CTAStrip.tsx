'use client';
import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface CTAStripProps {
  onBookNow: () => void;
  onContact: () => void;
}

export default function CTAStrip({ onBookNow, onContact }: CTAStripProps) {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="bg-[#faeedd] border border-[#f5dfc6] rounded-[36px] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-sm">
          
          {/* Decorative Floating Paw Stamps */}
          <div className="absolute top-6 left-8 w-12 h-12 opacity-40 pointer-events-none transform -rotate-12 hidden sm:block">
            <img src="/petcare/paw-stamp.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-6 right-8 w-14 h-14 opacity-40 pointer-events-none transform rotate-12 hidden sm:block">
            <img src="/petcare/paw-stamp.svg" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#854d0e] bg-white/70 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#ebd0b2]">
              Special Introductory Offer
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Ready to Give Your Pet the Best Care?
            </h2>

            <p className="mt-4 text-[#4b5563] text-base sm:text-[17px] leading-relaxed">
              Book your first care session today and get a complimentary Meet &amp; Greet plus 20% off your introductory visit.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-black text-white font-semibold text-[15.5px] px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95 group cursor-pointer"
              >
                <span>Book a Sitter Now</span>
                <ArrowRight size={17} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#faf6f0] text-[#111827] font-semibold text-[15.5px] px-7 py-3.5 rounded-full transition-all duration-200 border border-[#e5d8c8] active:scale-95 cursor-pointer"
              >
                <PhoneCall size={16} />
                <span>Talk to Care Team</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

