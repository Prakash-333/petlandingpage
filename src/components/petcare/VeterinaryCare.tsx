'use client';
import React from 'react';
import Image from 'next/image';
import { 
  Check, 
  ArrowRight, 
  UserCheck, 
  Building2, 
  FlaskConical, 
  Network 
} from 'lucide-react';

interface VeterinaryCareProps {
  onOpenDemo?: () => void;
}

export default function VeterinaryCare({ onOpenDemo }: VeterinaryCareProps) {
  const checkmarks = [
    'Secure messaging & teleconsultations',
    'AI-assisted clinical insights',
    'Shared health records',
    'Better collaboration across care teams',
  ];

  const ecosystemAudience = [
    {
      title: 'Pet Owners',
      desc: 'Manage your pet\'s health with ease',
      icon: UserCheck,
      color: 'bg-purple-100 text-purple-700 border border-purple-200/80 shadow-xs',
    },
    {
      title: 'Veterinary Clinics',
      desc: 'Work smarter, deliver better care',
      icon: Building2,
      color: 'bg-sky-100 text-sky-700 border border-sky-200/80 shadow-xs',
    },
    {
      title: 'Labs & Pharmacies',
      desc: 'Faster diagnostics and treatment',
      icon: FlaskConical,
      color: 'bg-teal-100 text-teal-700 border border-teal-200/80 shadow-xs',
    },
    {
      title: 'Pet Care Networks',
      desc: 'Connected, collaborative, proactive',
      icon: Network,
      color: 'bg-emerald-100 text-emerald-700 border border-emerald-200/80 shadow-xs',
    },
  ];

  return (
    <section id="veterinary" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Grid stretched to equal full height (no empty space below image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Description & Value Props */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#059669] uppercase block mb-1">
                Veterinary Care
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2a24] leading-tight">
                Professional care, simplified
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3">
                Connect with trusted veterinary professionals and clinics. Enable better communication, faster decisions and improved outcomes for every pet.
              </p>

              {/* Checkmarks with Solid Green Ticks */}
              <div className="space-y-3 pt-3">
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
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#064e3b] hover:text-[#059669] transition-colors group"
              >
                For Veterinary Clinics
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Center Column: 4K HD Veterinarian & Dog Photo - Fills down completely */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 w-full h-full min-h-[350px] flex-1 bg-gray-50 group">
              <Image
                src="/petcare/vet-exam-4k.jpg"
                alt="Female veterinarian in royal blue scrubs smiling and examining golden retriever dog"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column: Built for the entire pet care ecosystem (Light Blue Theme & Compact Spacing) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-[#f0f6ff] border border-blue-100/90 rounded-2xl p-5 sm:p-6 shadow-xs h-full flex flex-col justify-between">
              
              {/* Card Main Heading - reduced space below */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-3.5">
                  Built for the entire<br />
                  pet care ecosystem.
                </h3>

                {/* Ecosystem Rows: Tight & Clean Spacing between Heading and Subheading */}
                <div className="space-y-3">
                  {ecosystemAudience.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3 group">
                        {/* Rich App Icon Badge */}
                        <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 mt-0.5`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-gray-600 leading-tight mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
