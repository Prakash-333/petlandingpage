'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';

interface PreFooterCTAProps {
  onOpenDemo?: () => void;
  onLearnMore?: () => void;
}

export default function PreFooterCTA({ onOpenDemo, onLearnMore }: PreFooterCTAProps) {
  return (
    <section className="pt-4 sm:pt-6 pb-8 sm:pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Streamlined Banner with Light Gradient Theme (Slim, Compact Vertical Height) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#eaf6ef] via-[#f6fbf8] to-[#fbfdfc] border border-emerald-100/90 pt-2 sm:pt-2.5 px-6 sm:px-10 lg:px-12 pb-0 overflow-hidden shadow-sm">

          {/* Layered Organic Pastel Background Blobs */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-[300px] h-[300px] bg-emerald-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute -top-10 right-1/4 w-[300px] h-[300px] bg-teal-100/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute -bottom-10 right-1/3 w-[260px] h-[260px] bg-amber-100/40 rounded-full blur-2xl -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-end">

            {/* Left Content: Vertically Centered with Minimal Top Gap */}
            <div className="lg:col-span-5 space-y-2 z-10 py-3 sm:py-4 self-center">

              {/* Brand Logo */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src="/brand-logo.png"
                    alt="GreenLane Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-sm sm:text-base tracking-tight text-[#0f2a24]">GreenLane</span>
                  <span className="font-semibold text-sm sm:text-base tracking-tight text-[#10b981]">Pet</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0f2a24] leading-tight">
                Experience the Future of<br />
                AI-Powered Pet Healthcare.
              </h2>

              <p className="text-xs sm:text-sm text-gray-700 leading-snug max-w-sm">
                Join pet parents and veterinary practices using intelligent AI to provide proactive, personalized, and connected pet care.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-sm group"
                >
                  Book a Demo
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center justify-center px-5 py-2 text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-150 rounded-full border border-gray-300 shadow-xs"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Center: Playful Pets Cutout (Sleek Compact Height Grounded at Bottom) */}
            <div className="lg:col-span-4 flex justify-center items-end relative overflow-visible self-end">

              {/* Organic Pastel Shapes Behind Pets */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                <div className="w-56 h-56 rounded-full bg-teal-100/60 blur-2xl absolute -left-4"></div>
                <div className="w-64 h-64 rounded-full bg-emerald-100/70 blur-2xl absolute"></div>
                <div className="w-52 h-52 rounded-full bg-amber-100/70 blur-2xl absolute -right-2"></div>
              </div>

              {/* Sleek Scaled Cutout Container */}
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] h-[170px] sm:h-[195px] lg:h-[215px] flex items-end justify-center select-none">
                <Image
                  src="/petcare/playful-pets-cutout.png"
                  alt="Playful golden retriever puppy in play bow posture and curious kitten facing the camera"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-bottom drop-shadow-md scale-110 sm:scale-115 lg:scale-120 origin-bottom transition-transform duration-500 hover:scale-125"
                  priority
                />
              </div>
            </div>

            {/* Right: "Better care Together" Callout */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center py-3 sm:py-4 self-center z-10">
              <div className="relative inline-flex flex-col items-center lg:items-start group select-none">
                {/* Modern Pill Badge Design */}
                <div className="bg-white/90 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-emerald-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-rotate-1">
                  <span className="block text-lg sm:text-xl font-serif italic font-semibold text-[#064e3b] leading-tight">
                    Better care
                  </span>

                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center">
                      <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500 animate-pulse" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-gray-800">
                      Together
                    </span>
                  </div>
                </div>

                {/* Hand-drawn Looping Curved Arrow pointing to the pets */}
                <div className="mt-1.5 flex justify-center lg:justify-start pl-3">
                  <svg
                    className="w-12 h-6 text-emerald-600/80 -rotate-6"
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
