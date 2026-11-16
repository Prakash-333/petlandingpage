'use client';
import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Network, 
  Zap, 
  TrendingUp 
} from 'lucide-react';

interface HeroProps {
  onOpenDemo?: () => void;
  onExploreFeatures?: () => void;
}

export default function Hero({ onOpenDemo, onExploreFeatures }: HeroProps) {
  return (
    <section id="home" className="relative pt-6 pb-14 lg:pt-10 lg:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headline, Description & Badges */}
          <div className="lg:col-span-6 space-y-6 z-10">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200/50 text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AI-POWERED PET HEALTHCARE
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0f2a24] leading-[1.08]">
              Healthier Pets.<br />
              <span className="text-[#064e3b]">Happier Lives.</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed font-normal">
              GreenLane Pet is the AI platform that connects pet owners, veterinarians and care teams — making pet healthcare smarter, simpler and more proactive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-sm hover:shadow-md group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreFeatures}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-150 rounded-full border border-gray-200 shadow-xs"
              >
                Learn More
              </button>
            </div>

            {/* 4 Feature Icons Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-gray-100">
              
              {/* Icon 1: AI-Powered Health Assistant */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#f3e8ff] text-[#9333ea] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-snug">
                  AI-Powered<br />
                  <span className="font-medium text-gray-500">Health Assistant</span>
                </div>
              </div>

              {/* Icon 2: Secure & GDPR Compliant */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#d1fae5] text-[#059669] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-snug">
                  Secure &<br />
                  <span className="font-medium text-gray-500">GDPR Compliant</span>
                </div>
              </div>

              {/* Icon 3: Connected Pet Care Ecosystem */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Network className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-snug">
                  Connected Pet<br />
                  <span className="font-medium text-gray-500">Care Ecosystem</span>
                </div>
              </div>

              {/* Icon 4: Smarter Workflows */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-snug">
                  Smarter<br />
                  <span className="font-medium text-gray-500">Workflows</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Seamlessly Blended Visual (NO Border, True Dissolve into Left Text) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-[620px] aspect-[16/10] select-none">
              
              {/* Soft Ambient Glow in the background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/40 via-teal-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

              {/* The Image Container - NO BORDER, NO BOX, MASK-FADED INTO WHITE */}
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 18%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 92%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 18%, rgba(0,0,0,1) 32%, rgba(0,0,0,1) 92%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 82%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'destination-in'
                }}
              >
                <Image
                  src="/petcare/hero-pets-greenlane-4k.jpg"
                  alt="GreenLane Pet - Happy Golden Retriever and Tabby Cat with Mint and Teal Healthcare Background"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Left Edge Dissolve: Extra feathered blend merging softly with the left column */}
                <div className="absolute inset-y-0 left-0 w-44 sm:w-60 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>

                {/* Bottom Edge Dissolve: Melts into the section whitespace */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"></div>

                {/* Top Edge Dissolve: Soft transition */}
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Card 1: GreenLane AI Consultation (Top Right - 100% Vector Subpixel HTML) */}
              <div className="absolute top-2 right-2 sm:-right-2 z-20 max-w-[240px] sm:max-w-[260px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100/90 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] shadow-xs">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 tracking-tight">GreenLane AI</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed mb-2.5">
                  Your pet&apos;s health looks good! Next vaccination is due in 3 months. Would you like to book an appointment?
                </p>
                <button
                  onClick={onOpenDemo}
                  className="w-full py-1.5 px-3 text-[11px] font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all rounded-lg text-center shadow-xs"
                >
                  Book appointment
                </button>
              </div>

              {/* Floating Card 2: Health Score Gauge (Bottom Right - 100% Vector Subpixel HTML) */}
              <div className="absolute bottom-3 right-2 sm:-right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-gray-100/90 flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-1">
                {/* Circular Score Gauge */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-emerald-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-emerald-500"
                      strokeDasharray="92, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute font-extrabold text-xs text-[#0f2a24]">92</span>
                </div>
                
                <div>
                  <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-wider">Health Score</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-bold text-gray-900">Excellent</span>
                    <span className="text-[8px] text-gray-500">for your pet</span>
                  </div>
                </div>

                {/* Sparkline icon */}
                <div className="pl-1.5 border-l border-gray-100 flex items-center">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
