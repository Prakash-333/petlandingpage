'use client';
import React from 'react';
import Image from 'next/image';
import { HeartPulse, Clock, Smile, Heart } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      value: '70%',
      label: 'More proactive care',
      subtext: 'of health issues detected earlier with AI insights',
      icon: HeartPulse,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      value: '50%',
      label: 'Less admin time',
      subtext: 'reduction in paperwork and manual tasks',
      icon: Clock,
      color: 'bg-teal-50 text-teal-600',
    },
    {
      value: '+90%',
      label: 'Happier pets',
      subtext: 'owner satisfaction with digital care tools',
      icon: Smile,
      color: 'bg-indigo-50 text-indigo-600',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#fbfdfc] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Title Area */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f2a24]">
              A healthier future<br />
              for every pet.
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              With AI at the heart, GreenLane Pet is building a smarter, more connected future for pet healthcare.
            </p>
          </div>

          {/* Center: 3 Stat Blocks */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((st) => {
              const Icon = st.icon;
              return (
                <div key={st.label} className="space-y-1.5 p-3 rounded-xl bg-white border border-gray-100/80 shadow-xs">
                  <div className={`w-7 h-7 rounded-lg ${st.color} flex items-center justify-center mb-2`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500 block">
                    {st.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#064e3b]">
                    {st.value}
                  </div>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    {st.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Cat Peek in mint circular badge */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-emerald-100/60 border-2 border-emerald-200/50 flex items-center justify-center overflow-hidden shadow-inner group">
              <Image
                src="/petcare/stat-cat-hd.png"
                alt="Happy domestic cat"
                width={120}
                height={120}
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-pink-500">
                <Heart className="w-3.5 h-3.5 fill-pink-500" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

