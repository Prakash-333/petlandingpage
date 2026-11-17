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
      color: 'bg-purple-100 text-purple-700 border border-purple-200/60 shadow-xs',
    },
    {
      value: '50%',
      label: 'Less admin time',
      subtext: 'reduction in paperwork and manual tasks',
      icon: Clock,
      color: 'bg-violet-100 text-violet-700 border border-violet-200/60 shadow-xs',
    },
    {
      value: '+90%',
      label: 'Happier pets',
      subtext: 'owner satisfaction with digital care tools',
      icon: PawPrint,
      color: 'bg-pink-100 text-pink-700 border border-pink-200/60 shadow-xs',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#faf8fe] border-t border-b border-purple-100/50 relative overflow-hidden">
      {/* Very soft ambient lavender glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[420px] h-[420px] bg-purple-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Title Area */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold tracking-wider text-purple-600 uppercase block">
              Impact & Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1a1033] leading-tight">
              A healthier future<br />
              for every pet.
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              With AI at the heart, GreenLane Pet is building a smarter, more connected future for pet healthcare.
            </p>
          </div>

          {/* Center: 3 Stats (Open Columns - No White Boxes/Cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 sm:divide-x sm:divide-purple-200/50">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div 
                  key={st.label} 
                  className={`space-y-2.5 ${idx !== 0 ? 'sm:pl-6' : ''}`}
                >
                  {/* Rich App Icon Badge */}
                  <div className={`w-10 h-10 rounded-xl ${st.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-xs font-semibold text-gray-700 block">
                    {st.label}
                  </span>
                  
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#059669]">
                    {st.value}
                  </div>
                  
                  <p className="text-[11px] text-gray-500 leading-snug">
                    {st.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Golden Retriever Puppy & Kitten - Merges directly with text and background (NO BOX) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div 
              className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] flex items-center justify-center"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 88%, transparent 100%)',
              }}
            >
              <Image
                src="/petcare/pets-stats-violet.jpg"
                alt="Adorable golden retriever puppy and British Shorthair kitten"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500 select-none"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
