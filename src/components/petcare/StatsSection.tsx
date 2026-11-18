'use client';
import React from 'react';
import Image from 'next/image';
import { 
  HeartPulse, 
  Clock, 
  PawPrint
} from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      value: '70%',
      label: 'More proactive care',
      subtext: 'of health issues detected earlier with AI insights',
      icon: HeartPulse,
      color: 'bg-purple-200/70 text-purple-800 border border-purple-300/70 shadow-xs',
    },
    {
      value: '50%',
      label: 'Less admin time',
      subtext: 'reduction in paperwork and manual tasks',
      icon: Clock,
      color: 'bg-violet-200/70 text-violet-800 border border-violet-300/70 shadow-xs',
    },
    {
      value: '+90%',
      label: 'Happier pets',
      subtext: 'owner satisfaction with digital care tools',
      icon: PawPrint,
      color: 'bg-pink-200/70 text-pink-800 border border-pink-300/70 shadow-xs',
    },
  ];

  return (
    <section className="py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-[#faf5ff] via-[#f4edff] to-[#faf5ff] border-t border-b border-purple-200/50 relative overflow-hidden">
      {/* Soft atmospheric ambient light violet glow */}
      <div className="absolute -top-24 left-1/4 w-[480px] h-[480px] bg-purple-200/25 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          
          {/* Left Title Area */}
          <div className="lg:col-span-3 space-y-1.5">
            <span className="text-xs font-bold tracking-wider text-purple-800 uppercase block">
              Impact & Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1a0e33] leading-tight">
              A healthier future<br />
              for every pet.
            </h2>
            <p className="text-xs sm:text-sm text-gray-700/90 leading-relaxed">
              With AI at the heart, GreenLane Pet is building a smarter, more connected future for pet healthcare.
            </p>
          </div>

          {/* Center: 3 Stats (Open Columns on Light Violet Gradient) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 sm:divide-x sm:divide-purple-200/80">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div 
                  key={st.label} 
                  className={`space-y-1.5 ${idx !== 0 ? 'sm:pl-4' : ''}`}
                >
                  {/* Rich App Icon Badge */}
                  <div className={`w-8 h-8 rounded-xl ${st.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  
                  <span className="text-xs font-semibold text-gray-800 block">
                    {st.label}
                  </span>
                  
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#059669] leading-tight">
                    {st.value}
                  </div>
                  
                  <p className="text-[11px] text-gray-600 leading-snug">
                    {st.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Golden Retriever Puppy & Kitten - Full Height in Box (Top & Bottom) */}
          <div className="lg:col-span-4 relative self-stretch flex items-center justify-center lg:justify-end -my-3 sm:-my-4 lg:-my-5">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px] h-full min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] flex items-center justify-center select-none">
              <Image
                src="/petcare/pets-stats-violet-full.png"
                alt="Adorable golden retriever puppy and British Shorthair kitten"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-contain object-center scale-110 sm:scale-115 lg:scale-120 hover:scale-125 transition-transform duration-500 select-none"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
