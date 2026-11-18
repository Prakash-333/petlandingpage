'use client';
import React from 'react';
import Image from 'next/image';
import { 
  Check, 
  ArrowRight, 
  PawPrint, 
  Calendar, 
  ShieldCheck, 
  Pill,
  User,
  Wifi,
  Battery
} from 'lucide-react';

interface AIAssistantProps {
  onBookAppointment?: () => void;
}

export default function AIAssistant({ onBookAppointment }: AIAssistantProps) {
  const checkmarks = [
    'Answer health questions in natural language',
    'Provide personalised care recommendations',
    'Remind about vaccinations, medication and check-ups',
    'Escalate to a vet when needed',
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#f2f9f5] relative overflow-hidden border-t border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Mobile App Frame + Floating AI Chat Interaction */}
          <div className="lg:col-span-7 relative flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* Soft background glow */}
            <div className="absolute w-[380px] h-[380px] bg-emerald-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            {/* Smartphone Mockup */}
            <div className="w-[270px] sm:w-[290px] bg-white rounded-[44px] p-3.5 shadow-2xl border-[7px] border-gray-900 relative shrink-0">
              
              {/* Top Notch / Dynamic Island */}
              <div className="w-24 h-4 bg-gray-950 mx-auto rounded-full mb-1 flex items-center justify-end pr-2.5">
                <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-2 pt-0.5 pb-2 text-gray-800 font-sans">
                <span className="text-[10px] font-bold">11:14</span>
                <div className="flex items-center gap-1.5 text-gray-700">
                  <Wifi className="w-2.5 h-2.5 stroke-[2.5]" />
                  <div className="w-4 h-2 rounded-sm border border-gray-700 flex items-center p-0.5">
                    <div className="w-full h-full bg-gray-800 rounded-2xs"></div>
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="space-y-2.5 font-sans bg-[#fbfcfc] p-1 rounded-[30px]">
                
                {/* App Header: Logo + User Avatar */}
                <div className="flex items-center justify-between px-1 pb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white shadow-xs">
                      <PawPrint className="w-3 h-3 fill-white text-white" />
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-xs font-bold text-gray-900 tracking-tight">GreenLane</span>
                      <span className="text-xs font-bold text-[#10b981] tracking-tight">Pet</span>
                    </div>
                  </div>
                  
                  {/* Circular User Avatar / Settings Icon */}
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-2xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Pet Profile Header: Real Luna Photo */}
                <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-2xl border border-gray-100/90 shadow-2xs">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-emerald-200/70 shrink-0 shadow-xs">
                    <Image
                      src="/petcare/luna-avatar.png"
                      alt="Luna the Golden Retriever"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">Luna</h4>
                    <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Golden Retriever • 3 years</p>
                  </div>
                </div>

                {/* Health Overview Card: Circular Score Gauge + Smooth Rising Wave Graph */}
                <div className="bg-white p-3 rounded-2xl border border-gray-100/90 shadow-2xs space-y-2">
                  <div>
                    <span className="text-[11px] font-bold text-gray-900 block leading-tight">Health Overview</span>
                    <span className="text-[9px] text-gray-400 block leading-tight mt-0.5">Health Score</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-1 pt-0.5">
                    {/* Circular Score Gauge Ring */}
                    <div className="flex items-center gap-2">
                      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                        <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#e8f7ee" strokeWidth="3.5" />
                          <circle 
                            cx="18" 
                            cy="18" 
                            r="14" 
                            fill="none" 
                            stroke="#059669" 
                            strokeWidth="3.5" 
                            strokeDasharray="88" 
                            strokeDashoffset="12" 
                            strokeLinecap="round" 
                          />
                        </svg>
                        <span className="absolute text-[11px] font-black text-[#064e3b]">92</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-900 block leading-none">Excellent</span>
                        <span className="text-[9px] text-gray-400 leading-none block mt-1">for your pet</span>
                      </div>
                    </div>

                    {/* Smooth Rising Green Wave Graph */}
                    <div className="w-20 h-9 relative flex items-center">
                      <svg className="w-full h-full" viewBox="0 0 80 34" fill="none">
                        <defs>
                          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area gradient under curve */}
                        <path 
                          d="M 2 24 C 14 24, 20 18, 30 18 C 40 18, 48 10, 58 14 C 68 18, 72 6, 78 4 L 78 32 L 2 32 Z" 
                          fill="url(#waveGradient)" 
                        />
                        {/* Smooth rising wave line */}
                        <path 
                          d="M 2 24 C 14 24, 20 18, 30 18 C 40 18, 48 10, 58 14 C 68 18, 72 6, 78 4" 
                          stroke="#059669" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                        />
                        {/* Target peak dot */}
                        <circle cx="78" cy="4" r="2.5" fill="#059669" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dashboard List items: Vaccinations, Medications, Appointments */}
                <div className="space-y-1.5">
                  
                  {/* 1. Vaccinations */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100/90 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100/80 text-[#059669] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold block text-gray-900 leading-tight">Vaccinations</span>
                        <span className="text-[9px] text-gray-400 font-medium leading-tight">Up to date</span>
                      </div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-emerald-600 shrink-0" />
                  </div>

                  {/* 2. Medications */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100/90 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-pink-100/80 text-pink-600 flex items-center justify-center shrink-0">
                        <Pill className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold block text-gray-900 leading-tight">Medications</span>
                        <span className="text-[9px] text-gray-400 font-medium leading-tight">Next dose in 3 days</span>
                      </div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-emerald-600 shrink-0" />
                  </div>

                  {/* 3. Appointments */}
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100/90 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-100/80 text-sky-600 flex items-center justify-center shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold block text-gray-900 leading-tight">Appointments</span>
                        <span className="text-[9px] text-gray-400 font-medium leading-tight">Next visit: 12 Apr 2025</span>
                      </div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-emerald-600 shrink-0" />
                  </div>

                </div>

              </div>
            </div>

            {/* Floating Chat Conversation Cards */}
            <div className="space-y-3.5 max-w-[320px] w-full">
              
              {/* Bot Message 1: Purple circle with Paw Print logo */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs shadow-xs">
                    <PawPrint className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                  <span className="text-xs font-bold text-gray-900">GreenLane AI</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Luna&apos;s last check-up was 6 months ago. Would you like to schedule a wellness check-up or discuss any concerns?
                </p>
                <button
                  onClick={onBookAppointment}
                  className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#064e3b] hover:bg-[#04382a] rounded-xl transition-colors text-center shadow-xs"
                >
                  Book an appointment
                </button>
              </div>

              {/* User Reply Bubble: Shifted down for natural chat pacing */}
              <div className="flex justify-center pt-2 sm:pt-3">
                <div className="relative bg-[#e7f7ee] border-2 border-white ring-1 ring-emerald-200/90 rounded-2xl pt-4 pb-2.5 px-8 shadow-sm max-w-[280px] w-full flex items-center justify-center text-center">
                  <p className="text-xs font-semibold text-emerald-950 text-center leading-snug translate-y-2">
                    Book a wellness check-up for next week.
                  </p>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Bot Response Bubble: Top-left header & centered message in box */}
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 max-w-[290px] w-full">
                  {/* Top Left Corner: Logo & GreenLane AI */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#38bdf8] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <PawPrint className="w-3 h-3 fill-white text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-900">GreenLane AI</span>
                  </div>

                  {/* Centered Sentence in Box */}
                  <p className="text-xs text-gray-800 leading-relaxed font-normal text-center">
                    Great! I&apos;ve found 3 available slots for next week. Which one works best for you?
                  </p>
                  <span className="text-[10px] text-gray-400 font-medium block mt-1.5 text-center">14:24</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: AI Assistant Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-wider text-[#059669] uppercase block">
              AI Pet Health Assistant
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2a24]">
              Personalised care,<br />
              24/7.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Our AI assistant helps pet owners with instant advice, health insights, appointment booking and more — anytime, anywhere.
            </p>

            {/* Checkmarks with Solid Green Ticks */}
            <div className="space-y-3.5 pt-2">
              {checkmarks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#064e3b] hover:text-[#059669] transition-colors group"
              >
                See how it works
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
