'use client';
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onBookNow?: () => void;
}

export default function Hero({ onExploreServices }: HeroProps) {
  return (
    <section id="home" className="relative pt-6 pb-14 md:pt-10 md:pb-20 lg:py-16 overflow-hidden bg-[#fdf9f8]">
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Headline, Subtitle & Action */}
          <div className="lg:col-span-5 flex flex-col items-start py-2 lg:py-6 max-w-[460px] z-10">
            
            {/* Main Headline */}
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-black text-[#111827] leading-[1.08] tracking-[-0.035em]">
                Happy Pets,<br />
                <span className="relative inline-block">
                  Happy You
                  {/* Amber Hand-drawn Curved Underline */}
                  <span className="absolute left-0 -bottom-2 w-full block">
                    <img 
                      src="/petcare/curved-underline.svg" 
                      alt="" 
                      className="w-full h-auto object-contain"
                    />
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="mt-7 text-[#4b5563] text-base sm:text-lg md:text-[18px] leading-relaxed font-normal">
              Trusted pet care services — from pet sitting to dog walking, we&apos;re here for your furry friends.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2.5 bg-[#111827] hover:bg-black text-white font-semibold text-[15.5px] px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95 group cursor-pointer shadow-xs"
              >
                <span>Explore Services</span>
                <ArrowRight size={17} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Exact Pets Visual matching original reference design */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-start items-center lg:-ml-6 xl:-ml-10 z-0">
            
            {/* Seamless, 100% Borderless Pets Visual */}
            <div className="relative w-full max-w-[750px] lg:max-w-[850px] xl:max-w-[920px] flex items-center justify-center">
              
              {/* Subtle Soft Left Feather: blends the left background into text area */}
              <div 
                className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-[#fdf9f8] via-[#fdf9f8]/60 to-transparent pointer-events-none z-10" 
                aria-hidden="true"
              />
              
              {/* Natural Pets Image: Dog's head fully visible, ears & smile unobstructed */}
              <img
                src="/petcare/hero-pets-exact.jpg"
                alt="Happy Golden Retriever dog and domestic Cat lying together peacefully"
                className="w-full h-auto object-contain select-none pointer-events-none transform scale-[1.06] sm:scale-[1.08] lg:scale-[1.10] origin-bottom transition-transform duration-300"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}




