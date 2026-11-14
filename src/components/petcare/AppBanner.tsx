'use client';
import React from 'react';
import { Smartphone, Camera, Navigation, Bell } from 'lucide-react';

export default function AppBanner() {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] text-white rounded-[36px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e5a663]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[#fcedd8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Text & Features */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 bg-white/10 text-[#faeedd] text-[12px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 border border-white/10">
                <Smartphone size={14} />
                <span>PetCare Mobile Experience</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Peace of Mind Right in<br className="hidden sm:inline" /> Your Pocket
              </h2>

              <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
                Whether you&apos;re at work or traveling the world, our mobile companion app keeps you connected with live updates, GPS routes, and adorable photo reports.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <Navigation size={20} className="text-[#e5a663] mb-2" />
                  <h4 className="font-bold text-[15px]">Live GPS Tracking</h4>
                  <p className="text-xs text-white/70 mt-1">Watch your dog&apos;s exact walk path in real-time.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <Camera size={20} className="text-[#e5a663] mb-2" />
                  <h4 className="font-bold text-[15px]">HD Photo Reports</h4>
                  <p className="text-xs text-white/70 mt-1">Receive smiling photo & video updates every visit.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <Bell size={20} className="text-[#e5a663] mb-2" />
                  <h4 className="font-bold text-[15px]">Instant Sitter Chat</h4>
                  <p className="text-xs text-white/70 mt-1">Direct 1-on-1 messaging whenever you need.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Device Card Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white text-[#111827] rounded-3xl p-6 shadow-2xl max-w-sm w-full border border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-[#f3ede4]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#fcedd8] flex items-center justify-center">
                      <img src="/petcare/paw-black.svg" alt="" className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">Barkley&apos;s Afternoon Walk</h5>
                      <p className="text-xs text-[#6b7280]">In progress • 2.4 km</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="mt-4 rounded-2xl overflow-hidden aspect-[4/3] bg-[#faeedd] relative flex items-center justify-center">
                  <img src="/petcare/about-puppy.png" alt="Live checkin photo" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
                    📷 Sent by Sitter Sarah • 2:15 PM
                  </div>
                </div>

                <div className="mt-4 bg-[#faf8f5] rounded-xl p-3 border border-[#f3ede4] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#4b5563]">Hydration & Treats given</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">✓ Completed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

