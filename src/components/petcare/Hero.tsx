'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Bot, ShieldCheck, Share2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDemo?: () => void;
  onExploreFeatures?: () => void;
}

export default function Hero({ onOpenDemo, onExploreFeatures }: HeroProps) {
  return (
    <section id="home" className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 bg-white overflow-hidden">
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

          {/* Right Column: Hero Visual in HD */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[580px] lg:max-w-[620px] rounded-2xl overflow-hidden group">
              <Image
                src="/petcare/hero-graphic-hd.png"
                alt="GreenLane Pet AI Healthcare Platform - Golden Retriever, Tabby Cat, and AI health dashboard"
                width={1552}
                height={900}
                priority
                quality={100}
                className="w-full h-auto object-contain select-none"
              />

              {/* Clickable interactive hotspot over the visual's "Book appointment" button */}
              <button
                onClick={onOpenDemo}
                className="absolute top-[37%] right-[11%] w-[28%] h-[12%] rounded-md opacity-0 hover:opacity-10 bg-emerald-500/20 cursor-pointer transition-opacity"
                title="Book appointment with GreenLane AI"
                aria-label="Book appointment"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
