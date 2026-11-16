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
    <section id="home" className="relative pt-6 pb-14 lg:pt-10 lg:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & Badges */}
          <div className="lg:col-span-6 space-y-6">
            
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

            {/* Trust / Feature Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-100">
              <div className="flex flex-col items-start gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-medium text-gray-700 leading-snug">
                  AI-Powered<br />Health Assistant
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-medium text-gray-700 leading-snug">
                  Secure &<br />GDPR Compliant
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-medium text-gray-700 leading-snug">
                  Connected Pet<br />Care Ecosystem
                </span>
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-medium text-gray-700 leading-snug">
                  Smarter<br />Workflows
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: TRUE 4K HD Visual Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Main Visual Stage */}
            <div className="relative w-full max-w-[540px] aspect-[1.15/1] flex items-end justify-center select-none">
              
              {/* Crisp Vector Organic Background Blobs */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full max-w-[500px]" viewBox="0 0 500 450" fill="none">
                  {/* Soft Cyan/Teal Organic Blob */}
                  <path
                    d="M180,60 C280,30 420,90 440,210 C460,330 360,420 220,410 C90,400 40,320 60,200 C80,80 120,80 180,60 Z"
                    fill="#e0f7f4"
                    opacity="0.85"
                  />
                  {/* Soft Mint/Lime Organic Accent Blob */}
                  <path
                    d="M320,160 C420,180 480,260 460,350 C440,430 350,440 280,420 C220,400 240,320 260,240 C280,180 290,160 320,160 Z"
                    fill="#dcfce7"
                    opacity="0.75"
                  />
                </svg>
              </div>

              {/* 4K Studio Pets Cutout (Golden Retriever & Tabby Cat) */}
              <div className="relative z-10 w-[72%] max-w-[380px] mb-2 flex items-end justify-center">
                <Image
                  src="/petcare/pets-4k-cutout.png"
                  alt="Golden Retriever dog and Tabby Cat"
                  width={702}
                  height={816}
                  priority
                  quality={100}
                  className="w-full h-auto object-contain drop-shadow-md"
                />
              </div>

              {/* Floating Card 1: GreenLane AI Consultation (Top Right - 100% Vector HTML) */}
              <div className="absolute top-2 right-0 sm:-right-2 z-20 w-[240px] sm:w-[260px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
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

              {/* Floating Card 2: Health Score Gauge (Bottom Right - 100% Vector HTML) */}
              <div className="absolute bottom-4 right-0 sm:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-gray-100 flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1">
                {/* Circular Score Gauge */}
                <div className="relative w-11 h-11 flex items-center justify-center">
                  <svg className="w-11 h-11 transform -rotate-90" viewBox="0 0 36 36">
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
                  <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">Health Score</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-bold text-gray-900">Excellent</span>
                    <span className="text-[9px] text-gray-500">for your pet</span>
                  </div>
                </div>

                {/* Sparkline icon */}
                <div className="pl-2 border-l border-gray-100 flex items-center">
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
