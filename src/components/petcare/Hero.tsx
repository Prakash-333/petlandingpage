'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Bot, ShieldCheck, Share2, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenDemo?: () => void;
  onExploreFeatures?: () => void;
}

export default function Hero({ onOpenDemo, onExploreFeatures }: HeroProps) {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/30 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AI-Powered Pet Healthcare
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0f2a24] leading-[1.08]">
              Healthier Pets.<br />
              <span className="text-[#064e3b]">Happier Lives.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
              GreenLane Pet is the AI platform that connects pet owners, veterinarians and care teams — making pet healthcare smarter, simpler and more proactive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] active:scale-95 transition-all duration-150 rounded-full shadow-md shadow-emerald-950/20 group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreFeatures}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-150 rounded-full border border-gray-200 shadow-sm"
              >
                Learn More
              </button>
            </div>

            {/* Trust / Feature Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-100">
              <div className="flex flex-col items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-700 leading-snug">
                  AI-Powered Health Assistant
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-700 leading-snug">
                  Secure & GDPR Compliant
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Share2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-700 leading-snug">
                  Connected Pet Care Ecosystem
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-gray-700 leading-snug">
                  Smarter Workflows
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Pets & AI Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Soft mint backdrop glow blob */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/70 via-teal-100/50 to-emerald-50/20 rounded-full blur-2xl transform -translate-y-4"></div>
              
              {/* Central Pets Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image
                  src="/petcare/greenlane-hero-pets-2x.png"
                  alt="Golden retriever and domestic cat - GreenLane Pet Healthcare"
                  width={500}
                  height={430}
                  priority
                  className="object-contain drop-shadow-xl select-none"
                />
              </div>

              {/* Floating Card 1: GreenLane AI Consultation (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:right-2 z-20 max-w-[260px] sm:max-w-[280px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100/80 animate-fade-in transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-900">GreenLane AI</span>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-3">
                  Your pet&apos;s health looks good! Next vaccination is due in 3 months. Would you like to book an appointment?
                </p>
                <button
                  onClick={onOpenDemo}
                  className="w-full py-1.5 px-3 text-xs font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] rounded-lg transition-colors text-center shadow-sm"
                >
                  Book appointment
                </button>
              </div>

              {/* Floating Card 2: Health Score Gauge (Bottom Right) */}
              <div className="absolute -bottom-4 right-0 sm:right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100/80 flex items-center gap-3 transition-transform hover:-translate-y-1">
                {/* Circular Score Badge */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
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
                  <span className="absolute font-extrabold text-sm text-[#0f2a24]">92</span>
                </div>
                
                <div>
                  <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Health Score</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-gray-900">Excellent</span>
                    <span className="text-[10px] text-gray-500">for your pet</span>
                  </div>
                </div>

                {/* Sparkline icon */}
                <div className="pl-2 border-l border-gray-100">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
