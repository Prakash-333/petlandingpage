'use client';
import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  PawPrint, 
  Workflow,
  TrendingUp 
} from 'lucide-react';

interface HeroProps {
  onOpenDemo?: () => void;
  onExploreFeatures?: () => void;
}

export default function Hero({ onOpenDemo, onExploreFeatures }: HeroProps) {
  return (
    <section id="home" className="relative pt-6 pb-6 sm:pb-8 lg:pt-10 lg:pb-10 bg-gradient-to-r from-white via-white via-50% to-[#ecfdf5]/50 overflow-hidden">
      
      {/* Layered Organic Pastel Background Blobs on the right half */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-100/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-purple-100/25 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute -bottom-10 right-1/3 w-[380px] h-[380px] bg-teal-100/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headline, Description & Badges (Elevated z-index for crystal-clear readability) */}
          <div className="lg:col-span-5 space-y-6 relative z-20 pointer-events-auto">
            
            {/* Tag badge - Green colour */}
            <div className="text-xs font-bold tracking-wider text-[#059669] uppercase block mb-1">
              AI-POWERED PET HEALTHCARE
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0f2a24] leading-[1.08]">
              Smarter Care with AI.<br />
              <span className="text-[#064e3b]">Healthier, Happier Pets.</span>
            </h1>

            {/* Subheading - Darker text for improved contrast */}
            <p className="text-sm sm:text-base text-gray-800 max-w-xl leading-relaxed font-normal">
              Powered by clinical AI, GreenLane Pet connects pet parents, veterinarians, and care teams — turning daily health tracking, clinic triage, and care workflows into a proactive, intelligent experience.
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

            {/* 4 Feature Icons Row (Vector SVG icons, All text in solid black) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-gray-100">
              
              {/* Icon 1: 24/7 AI Health Assistant (Solid Black Text) */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#f3e8ff] text-[#9333ea] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 stroke-[2.3]" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-black leading-snug">
                  24/7 AI<br />
                  <span className="font-bold text-black">Health Assistant</span>
                </div>
              </div>

              {/* Icon 2: Secure & Privacy-First AI (Solid Black Text) */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#d1fae5] text-[#059669] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4 stroke-[2.3]" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-black leading-snug">
                  Secure &<br />
                  <span className="font-bold text-black">Privacy-First AI</span>
                </div>
              </div>

              {/* Icon 3: AI-Connected Care Network (Solid Black Text) */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <PawPrint className="w-4 h-4 stroke-[2.3] fill-sky-500/10" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-black leading-snug">
                  AI-Connected<br />
                  <span className="font-bold text-black">Care Network</span>
                </div>
              </div>

              {/* Icon 4: Automated Care Workflows (Solid Black Text) */}
              <div className="flex flex-col items-start gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Workflow className="w-4 h-4 stroke-[2.3]" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-black leading-snug">
                  Automated<br />
                  <span className="font-bold text-black">Care Workflows</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Seamlessly Blended Visual (Extends Behind Left Text, Zero Border) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center z-10 pointer-events-none">
            
            <div className="relative w-full max-w-[680px] sm:max-w-[760px] lg:max-w-[860px] xl:max-w-[940px] aspect-[16/10] select-none lg:-ml-28 xl:-ml-36">
              
              {/* Soft Ambient Glow in the background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/35 via-teal-100/25 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

              {/* The Image Container - True Seamless Transparent PNG with zero borders anywhere */}
              <div className="relative w-full h-full">
                <Image
                  src="/petcare/hero-playful-pets-seamless.png"
                  alt="Playful Golden Retriever puppy in a play-bow posture smiling and curious kitten raising a paw"
                  fill
                  priority
                  quality={100}
                  className="object-contain lg:object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Card: GreenLane AI Consultation (Higher up in center - Cat & Puppy completely visible) */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-[240px] sm:max-w-[260px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100/90 pointer-events-auto transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] shadow-xs">
                    <PawPrint className="w-3 h-3 fill-white text-white" />
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

              {/* Floating Card: Health Score Gauge (Bottom Right - positioned safely below pet faces) */}
              <div className="absolute bottom-2 right-2 sm:right-4 lg:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-gray-100/90 flex items-center gap-2.5 pointer-events-auto transition-transform duration-200 hover:-translate-y-1">
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
