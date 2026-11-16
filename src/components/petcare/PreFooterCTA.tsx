'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface PreFooterCTAProps {
  onOpenDemo?: () => void;
  onLearnMore?: () => void;
}

export default function PreFooterCTA({ onOpenDemo, onLearnMore }: PreFooterCTAProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-50/70 via-teal-50/40 to-emerald-50/60 border border-emerald-100/80 p-8 sm:p-12 overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              {/* Brand mark */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#10b981] flex items-center justify-center text-white">
                  <span className="text-[10px] font-bold">G</span>
                </div>
                <span className="font-bold text-sm tracking-tight text-[#0f2a24]">GreenLane <span className="text-[#10b981]">Pet</span></span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2a24]">
                Join the future of pet healthcare.
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
                Be part of a smarter, healthier and more connected pet ecosystem.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-sm group"
                >
                  Book a Demo
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-150 rounded-full border border-gray-200 shadow-xs"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Center: Dog & Cat Pets Graphic */}
            <div className="lg:col-span-4 flex justify-center items-end">
              <div className="relative w-44 sm:w-52 h-36 sm:h-44 flex items-end justify-center">
                <div className="absolute inset-0 bg-emerald-100/50 rounded-full blur-xl -z-10"></div>
                <Image
                  src="/petcare/greenlane-cta-pets-2x.png"
                  alt="Golden retriever dog and domestic cat"
                  width={220}
                  height={160}
                  className="object-contain drop-shadow-md select-none"
                />
              </div>
            </div>

            {/* Right: Handwritten Script Badge */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="text-center font-serif italic text-emerald-800/80 p-4 border border-emerald-200/50 rounded-2xl bg-white/60 backdrop-blur-xs shadow-xs">
                <p className="text-lg leading-tight font-medium">Better care</p>
                <p className="text-lg leading-tight font-medium flex items-center justify-center gap-1">
                  <span>♡</span> Together
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
