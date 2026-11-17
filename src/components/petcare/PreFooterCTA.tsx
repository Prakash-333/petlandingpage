'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight, PawPrint, Heart } from 'lucide-react';

interface PreFooterCTAProps {
  onOpenDemo?: () => void;
  onLearnMore?: () => void;
}

export default function PreFooterCTA({ onOpenDemo, onLearnMore }: PreFooterCTAProps) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Light Gradient Theme & Large Layout */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#eaf6ef] via-[#f6fbf8] to-[#fbfdfc] border border-emerald-100/90 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-sm">
          
          {/* Layered Organic Pastel Background Blobs */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-[360px] h-[360px] bg-emerald-200/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute -top-16 right-1/4 w-[380px] h-[380px] bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute -bottom-12 right-1/3 w-[320px] h-[320px] bg-amber-100/50 rounded-full blur-2xl -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Content (4 Columns) */}
            <div className="lg:col-span-4 space-y-5 z-10">
              
              {/* Updated Official Brand Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-xs text-white">
                  <PawPrint className="w-4 h-4 fill-white text-white" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-lg tracking-tight text-[#0f2a24]">GreenLane</span>
                  <span className="font-semibold text-lg tracking-tight text-[#10b981]">Pet</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f2a24] leading-tight">
                Join the future of<br />
                pet healthcare.
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
                Be part of a smarter, healthier and more connected pet ecosystem.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-sm group"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-150 rounded-full border border-gray-300 shadow-xs"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Center: BIGGER 4K Pet Image with Beautiful Organic Background (5 Columns) */}
            <div className="lg:col-span-5 flex justify-center items-end relative">
              
              {/* Organic Pastel Shapes Behind Pets */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                <div className="w-56 h-56 rounded-full bg-teal-100/60 blur-xl absolute -left-6"></div>
                <div className="w-64 h-64 rounded-full bg-emerald-100/70 blur-xl absolute"></div>
                <div className="w-48 h-48 rounded-full bg-amber-100/70 blur-xl absolute -right-4"></div>
              </div>

              {/* Large Pet Image Container */}
              <div 
                className="relative w-full max-w-[480px] sm:max-w-[540px] h-[300px] sm:h-[360px] lg:h-[390px] flex items-end justify-center"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                }}
              >
                <Image
                  src="/petcare/cta-pets-duo-4k.jpg"
                  alt="Smiling golden retriever dog and domestic tabby cat sitting together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-bottom mix-blend-multiply drop-shadow-sm select-none hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Right: Redesigned "Better care Together" Callout (3 Columns) */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center">
              
              <div className="relative inline-flex flex-col items-center lg:items-start group select-none">
                {/* Modern Pill Badge Design */}
                <div className="bg-white/85 backdrop-blur-md px-6 py-4 rounded-3xl border border-emerald-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-rotate-1">
                  <span className="block text-2xl sm:text-3xl font-serif italic font-semibold text-[#064e3b] leading-tight">
                    Better care
                  </span>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
                    </div>
                    <span className="text-base sm:text-lg font-bold tracking-tight text-gray-800">
                      Together
                    </span>
                  </div>
                </div>

                {/* Hand-drawn Looping Curved Arrow pointing to the pets */}
                <div className="mt-2.5 flex justify-center lg:justify-start pl-4">
                  <svg 
                    className="w-16 h-8 text-emerald-600/80 -rotate-6" 
                    viewBox="0 0 100 45" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                  >
                    <path d="M 85 5 C 50 38, 25 35, 8 20" />
                    <polyline points="16,14 8,20 16,27" />
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
